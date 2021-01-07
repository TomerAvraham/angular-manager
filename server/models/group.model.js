const { Schema, model } = require('mongoose')

const Group = new Schema({
    name: String
})

const GroupModel = model('group', Group)

module.exports = GroupModel