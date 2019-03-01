const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  creation: {
    type: String,
    required: true
  },
  privacy: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  iconClass: {
    type: String,
    required: true
  },
  copy: {
    type: String
  },
  saveFile: [{
    type: [String]
  }]
})

const Project = mongoose.model('Project', ProjectSchema)
module.exports = Project
