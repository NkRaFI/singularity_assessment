/**-model imports-**/
const MusicModel = require('../models/MusicModel')

exports.getMusics = async (req, res, next) => {
    try {
        const { query } = req.query

        let musics
        if (query) {
            musics = await MusicModel.find({ $text: { $search: query } })
        } else {
            musics = await MusicModel.find()
        }

        res.status(200).json(
            {
                message: "Musics found",
                data: musics
            }
        )

    } catch (error) {
        next(error)
    }
}

exports.getMusic = async (req, res, next) => {
    try {
        const { id } = req.params

        if(!id){
            throw Error("ID is not provided")
        }

        const music = await MusicModel.findById(id)

        res.status(200).json(
            {
                message: "Music found!",
                data: music
            }
        )
        
    } catch (error) {
        next(err)
    }
}