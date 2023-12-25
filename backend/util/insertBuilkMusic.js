const fs = require('fs').promises;
const path = require('path')

const insertMusics = async () => {
    try {
        const musicDataPath = path.join(__dirname, '../../music-data.json')
        //reading the file content
        let data = await fs.readFile(musicDataPath, 'utf8');
        data = JSON.parse(data);

        const insertedMusics = await MusicModel.insertMany(data)

        console.log("Successfully inserted all the music data!")

    } catch (error) {
        console.log(error)
    }
}

insertMusics()