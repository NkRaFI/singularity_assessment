## 🔗 Live link: [View](https://musicly-jsco.onrender.com/)

## How to set up and run the application
### Setup:
 - #### Clone the repository.
 - #### Install dependency for both the backend & frontend:
 ```bash
  npm install
  cd frontend/
  npm install
```
- #### Create environment variables: 
  Follow the```.env.example```

- #### Insert data in your database:
  Uncomment the route ```/insert``` in the ```musicRoutes``` also uncomment the code for the method ```insertMusics``` in the ```MusicController``` responsible for inserting json music data in the database. The API will insert the data from the file ```music-data.json``` in the project ```root```.

- #### Build frontend:
 ```bash
  cd frontend/
  npm run build
```

- #### Run both the frontend and backend:
  The frontend application is also served by the express server. From project 
  ```root``` 
  you can run both the application using
  ```npm start```

