import { getRepository } from 'typeorm'
import { Request, Response} from 'express'

import userView from '../views/users_view'
import * as Yup from 'yup'
import Orphanages from '../models/Orphanages'
import Users from '../models/Users'
import Images from '../models/Image'
import bcrypt, { hash } from 'bcrypt'
import orphanage_view from '../views/orphanage_view'
import orphangeView from '../views/orphanages_view'

export default {
  async index( request:Request, response:Response ) {
    const orphanagesRepository = getRepository(Orphanages)

    const orphanages = await orphanagesRepository.find({
      relations: ['images'],
      where: {
        pending: false
      }
      
    });

    return response.json(orphangeView.renderMany(orphanages))
  },

  async show( request:Request, response:Response ) {
    const { id } = request.params
    const orphanagesRepository = getRepository(Orphanages)

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images']
    });

    return response.json(orphangeView.render(orphanage))
  },

  async pendingOrphanage( request: Request, response: Response ) {

    const orphanagesRepository = getRepository(Orphanages)
    const orphanagesPending = await orphanagesRepository.find({
      relations: ['images'],
      where: {
        pending: true
      }
      
    })

    return response.status(200).json(orphanagesPending)

  },

  async create(request: Request, response: Response ){
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
  
    } = request.body

    const pending = true
  
    const orphanagesRepository = getRepository(Orphanages)

    const requestImages = request.files as Express.Multer.File[]

    const images = requestImages.map(image => {
      return { path: image.filename}
    })

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      pending: pending,
      images
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      pending: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required()
        })
      )
    })

    await schema.validate(data, {
      abortEarly: false,
    })
  
    const orphanage = orphanagesRepository.create(data)
  
    await orphanagesRepository.save(orphanage)
  
  
    return response.status(201).json(orphanage)
  
  },

  async createusers( request: Request, reponse: Response) {
    const {
      name,
      email,
      senha,
    } = request.body

    const usersRepository = getRepository(Users)

    const password = bcrypt.hashSync(senha, 10)

    const users = usersRepository.create({
      name,
      email,
      password,
    })

    await usersRepository.save(users)

    return reponse.status(201).json(users)
  },

  async showUsers( request: Request, response: Response) {
    const { email, password } = request.body

    const listUsersRepository = getRepository(Users)
    
      const users = await listUsersRepository.findOneOrFail({
        select: ["email","password"],
        where: {
          email: email,
        }
      })

      const match = await bcrypt.compare(password, users.password);

      if (match) {
        return response.status(201).json(userView.render(users))
      } else {
        return response.status(500).json({"message": "O Email ou Senha inserida incorreta"})
      }
  },

  async deleteUsers( request: Request, response: Response ) {
    const { id } = request.params

    const orphanagesRepository = getRepository(Orphanages)

    const orphanage = await orphanagesRepository.delete(id)

    return response.json(orphanage)
  },

  async orphanageId( request: Request, response: Response) {
    const { id } = request.params

    const orphanagesRepository = getRepository(Orphanages)

    const orphanage = await orphanagesRepository.findOneOrFail({
      select: ['id', 'name'],
      where: {
        id: id
      }
    })

    return response.status(201).json(orphanage_view.render(orphanage))
  },

  async updateOrphanage( request: Request, response: Response ) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      pending
  
    } = request.body

    const { id } = request.params
  
    const orphanagesRepository = getRepository(Orphanages)

    // const requestImages = request.files as Express.Multer.File[]

    // const images = requestImages.map(image => {
    //   return { path: image.filename}
    // })

    // const data = {
    //   name,
    //   latitude,
    //   longitude,
    //   about,
    //   instructions,
    //   opening_hours,
    //   open_on_weekends: open_on_weekends === 'true',
    //   images
    // }

    // const schema = Yup.object().shape({
    //   name: Yup.string().required(),
    //   latitude: Yup.number().required(),
    //   longitude: Yup.number().required(),
    //   about: Yup.string().required().max(300),
    //   instructions: Yup.string().required(),
    //   opening_hours: Yup.string().required(),
    //   open_on_weekends: Yup.boolean().required(),
    //   images: Yup.array(
    //     Yup.object().shape({
    //       path: Yup.string().required()
    //     })
    //   )
    // })

    // await schema.validate(data, {
    //   abortEarly: false,
    // })
  
    const orphanage = await orphanagesRepository.update(id, {
      name: name,
      latitude: latitude,
      longitude: longitude,
      about: about,
      instructions: instructions,
      opening_hours: opening_hours,
      open_on_weekends: open_on_weekends,
      pending: pending
      // images: images

    })
  
    // await orphanagesRepository.save(orphanage)
  
  
    return response.status(201).json(orphanage)
  
  },

  async imagesOrphanage( request: Request, response: Response ) {
    const listImageRepository = getRepository(Images)

    const image = await listImageRepository.find({select: ['id', 'orphanage', 'path']})

    return response.status(200).json(image)
  }
}