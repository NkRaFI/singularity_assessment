const axios = require('axios');
const fs = require('fs').promises;

const filteredData = async (req, res, next) => {
    try {
        const uri = 'https://api.deezer.com/chart/0/tracks?limit=200'
        const outputFilePath = './music-data.json';

        const { data: response } = await axios.get(uri);

        const newData = response.data.map(data => {
            return {
                title: data.title,
                url: data.preview,
                artist: data.artist.name,
                cover_image: data.album.cover_medium
            }
        })

        const jsonData = JSON.stringify(newData, null, 2);

        // Write the data to a JSON file
        await fs.writeFile(outputFilePath, jsonData, 'utf8');

        console.log("Data saved successfully")

    } catch (error) {
        next(error)
    }
}

filteredData()