import { Router } from 'express'

import multer from 'multer'

import uploadConfig from './config/upload'

import OrphanagesController from './controllers/OrphanagesController';

const routes = Router()
const upload = multer(uploadConfig)

routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages', upload.array('images') ,OrphanagesController.create)
routes.post('/create-users', OrphanagesController.createusers)
routes.post('/list-users/', OrphanagesController.showUsers)
routes.delete('/delete-users/:id', OrphanagesController.deleteUsers)
routes.put('/update-orphanage/:id', OrphanagesController.updateOrphanage)
routes.get('/orphanage/:id', OrphanagesController.orphanageId)
routes.get('/orphanage-pending', OrphanagesController.pendingOrphanage)
routes.get('/images', OrphanagesController.imagesOrphanage)


export default routes
