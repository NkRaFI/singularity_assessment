require('express-async-errors')
const express = require("express")
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const connectDB = require('./config/dbConfig')
const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')

/**-route imports-**/
const musicRoutes = require('./routes/musicRoutes')

/**-configs-**/
require('dotenv').config()
connectDB()
const PORT = process.env.PORT || 4000

/**-init app-**/
const app = express()

/**-init middleware-**/
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/music', musicRoutes);
app.use('/api/music/list', (req, res, next)=>{
    res.sendFile(path.resolve(__dirname, '..', 'music-data.json'))
});

if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '/frontend/dist')));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    );
} else {
    app.get('/', (req, res) => {
        res.send('API is running....');
    });
}

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));