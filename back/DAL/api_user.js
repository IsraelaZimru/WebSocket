const User = require('../models/user')

const newUser = async (name, password) => {
    const user = await new User({ "name": name, "password": password })
    console.log(user);
    user.save()
    return user;
}

module.exports = {
    newUser
}