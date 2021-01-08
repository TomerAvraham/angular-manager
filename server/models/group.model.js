const { Schema, model } = require('mongoose')

const GroupSchema = new Schema({
    name: String
})

const Group = model('group', GroupSchema)

module.exports = Group