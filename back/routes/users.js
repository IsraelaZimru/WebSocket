var express = require('express');
var router = express.Router();
const api = require('../DAL/api_user');

/* GET users listing. */
router.post('/', async function (req, res) {
  try {
    const { name, password } = req.body;
    const addNewUser = await api.newUser(name, password);
    res.status(200).json(addNewUser);
  } catch (err) {
    console.log(err);
    res.status(401).json({ error: err });
  }
  // res.send('respond with a resource');
});

module.exports = router;
