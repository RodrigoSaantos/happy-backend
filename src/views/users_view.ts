import Users from "../models/Users"

export default {
  render(users: Users) {
    return {
      email: users.email,
      password: users.password,

    }
  },

  renderMany(users: Users[]) {
    return users.map(user => this.render(user))
  }
}