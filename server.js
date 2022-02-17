// const cool = require('cool-ascii-faces');
// const express = require('express');
// const path = require('path');
// const PORT = process.env.PORT || 3000;
// //  Import of all the modules necessary for the project 

// let initial_path = path.join(__dirname, "public");
// // Initialisation of the path to public

// let app = express();
// app.use(express.static(initial_path));
// // Server initiazed to public

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// // Set : for the Deployment on Heroku

// app.get('/viewer', (req, res) => {
//     res.sendFile(path.join(initial_path, "viewer.html"))

// });

// app.get('/signUp', (req, res) => {
//     res.sendFile(path.join(initial_path, "signUp.html"))
// });
// // Setting the base URL to index.html

// app.get('/:id', (req, res) => {
//     res.sendFile(path.join(initial_path, "about.html"));
// })
// // Response from the server when there is a Movie id

// app.use((req, res) => {
//     res.json("404");

// })

// app.listen(PORT, () => {
//     console.log(`Listening on port ${ PORT } !`);

// })
// // Server listening on PORT 5000 locally || the web
