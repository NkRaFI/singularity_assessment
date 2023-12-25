const mongoose = require('mongoose')
const Schema = mongoose.Schema

const musicSchema = new Schema(
    {
        title: String,
        url: String,
        artist: String,
        cover_image: String
    },
    {
        timestamps: true
    }
)

musicSchema.index({ title: "text" })

module.exports = mongoose.model("music", musicSchema)