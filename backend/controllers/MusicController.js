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

        if (!id) {
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

/**
 * Note: Uncomment the following code if you wish to run the
 * application locally. Also remember to add your MongoDB connection URI.
 * 
 * This method is responsible for the API "/api/music/insert" which insert
 * the json music data into the musics collection of MongoDB database.
 * The data is required for the application to run locally.
*/


/** 
const fs = require('fs').promises;
const path = require('path')
const MusicModel = require("../models/MusicModel")

exports.insertMusics = async () => {
    try {
        const musicDataPath = path.join(__dirname, '../../music-data.json')
        //reading the file content
        let data = await fs.readFile(musicDataPath, 'utf8');
        data = JSON.parse(data);

        const insertedMusics = await MusicModel.insertMany(data)

        res.status(200).json(
            {
                message: "Instered all the music!",
                data: insertedMusics
            }
        )

    } catch (error) {
        console.log(error)
        next(error)
    }
}

*/