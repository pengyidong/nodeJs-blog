var express = require('express');
var router = express.Router();
const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

/* GET users listing. */
router.get('/login', function (req, res) {
  const { username, password } = req.body
  const result = login(username, password)
  return result.then(data => {
    if (data.username) {
      req.session.username = data.username
      req.session.realname = data.realname
      res.json(new SuccessModel)
      return
    }
    res.json(ErrorModel('登录失败'))
  })
});

router.get('/login-test', (req, res) => {
    if (req.session.username) {
        res.json({
            errno: 0,
            msg: '已登录'
        })
        return
    }
    res.json({
        errno: -1,
        msg: '未登录'
    })
})

module.exports = router;
