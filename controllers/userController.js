const {User, Role} = require('../models');

module.exports.renderRegistrationForm = async function(req, res){
    const roles = await Role.findAll();
    console.log(roles);
    res.render('users/register', {roles});
}