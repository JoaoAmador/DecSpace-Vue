const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const session = require('express-session')
const bcrypt = require('bcryptjs')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// const users = require('./routes/users')

const mongoose = require('mongoose')
const username = 'Amador'
const password = 'jamador'

mongoose.Promise = global.Promise
mongoose.connect('mongodb://' + username + ':' + password + '@ds237489.mlab.com:37489/decspace').then(
// mongoose.connect('mongodb://localhost:27017/decspacevue-dev2').then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database' + err) }
)

// use sessions for tracking logins
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false
}))

const User = require('./models/user')

app.post('/register', function (req, res) {
  if (!req.body.username || !req.body.password || !req.body.email) {
    console.log('miss')
    res.json({success: false, msg: 'Please input username, email and password.'})
  } else {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    // save the user

    newUser.save(function (err) {
      if (err) {
        console.log('us miss')
        return res.json({success: false, msg: 'Email already exists.'})
      }
      console.log('tudo certo')
      res.send({success: true, msg: 'Successfully created new user.'})
    })
  }
})

app.post('/login', function (req, res) {
  if (!req.body.password || !req.body.email) {
    console.log('miss')
    return res.json({success: false, msg: 'Please input username and password.'})
  }
  User.findOne({email: req.body.email}, function (err, user) {
    if (err) {
      console.log('email miss')
      return res.json({success: false, msg: 'Email does not exist.'})
    }
    if (user === null) {
      console.log('email miss')
      return res.json({success: false, msg: 'Email does not exist.'})
    }
    bcrypt.compare(req.body.password, user.password, function (err, isMatch) {
      if (err) {
        console.log('pass mal')
        return res.json({success: false, msg: 'Wrong Password.'})
      }
      if (isMatch === true) {
        console.log('tudo certo')
        res.send({success: true, msg: 'Login Successful.', username: user.username})
      } else {
        console.log('pass mal')
        return res.json({success: false, msg: 'Wrong Password.'})
      }
    })
  })
})

app.post('/changePassword', function (req, res) {
  if (!req.body.password1 || !req.body.password2) {
    console.log('miss')
    return res.json({success: false, msg: 'Please input both passwords.'})
  }
  console.log(req.body.username)
  User.findOne({username: req.body.username}, function (err, user) {
    if (err) {
      console.log('email miss')
      return res.json({success: false, msg: 'Email doesnt exist.'})
    }
    if (user === null) {
      console.log('email miss')
      return res.json({success: false, msg: 'Email doesnt exist.'})
    }
    bcrypt.compare(req.body.password1, user.password, function (err, isMatch) {
      if (err) {
        console.log('pass mal')
        return res.json({success: false, msg: 'Wrong Password.'})
      }
      if (isMatch === true) {
        console.log('tudo certo')
        user.password = req.body.password2
        user.save(function (err) {
          if (err) {
            console.log('us miss')
            return res.json({success: false, msg: 'error.'})
          }
          console.log('tudo certo')
          res.send({success: true, msg: 'Password Change Successful.', pass: user.password})
        })
      } else {
        console.log('pass mal2')
        return res.json({success: false, msg: 'Wrong Password.'})
      }
    })
  })
})

app.get('/getusers', function (req, res) {
  User.find({}, function (err, result) {
    if (err) throw err
    res.send(result)
  })
})

const Project = require('./models/project')

app.post('/addproject', function (req, res) {
  if (!req.body.name || !req.body.privacy) {
    console.log('miss')
    res.json({success: false, msg: 'Please pass a project name and privacy'})
  } else {
    const newProject = new Project({
      id: req.body.id,
      name: req.body.name,
      username: req.body.username,
      creation: req.body.creation,
      privacy: req.body.privacy,
      icon: req.body.icon,
      iconClass: req.body.iconClass,
      copy: req.body.copy
    })
    // save the project

    newProject.save(function (err) {
      if (err) {
        console.log('us miss')
        return res.json({success: false, msg: 'error already exists.'})
      }
      console.log('tudo certo')
      res.send({success: true, msg: 'Successful created new project.'})
    })
  }
})

app.get('/getprojects', function (req, res) {
  Project.find({}, function (err, result) {
    if (err) throw err
    res.send(result)
  })
})

app.post('/deleteproject', function (req, res) {
  Project.remove({username: req.body.username, id: req.body.id}, function (err, result) {
    if (err) throw err
    res.send(result)
  })
})

app.post('/editproject', function (req, res) {
  Project.findOne({id: req.body.id}, function (err, project) {
    if (err) throw err
    project.privacy = req.body.privacy
    project.icon = req.body.icon
    project.iconClass = req.body.iconClass
    project.save(function (err) {
      if (err) {
        console.log('us miss')
        return res.json({success: false, msg: 'meeeeeeeeee.'})
      }
    })
  })
})

app.post('/saveproject', function (req, res) {
  Project.findOne({name: req.body.name, username: req.body.username}, function (err, project) {
    if (err) throw err
    var comment = req.body.saveFile
    project.saveFile.push(comment)
    project.save(function (err) {
      if (err) {
        console.log('us miss')
        return res.json({success: false, msg: 'meeeeeeeeee.'})
      }
    })
  })
})

app.listen(process.env.PORT || 8082)
console.log('Server running on port 8082')
