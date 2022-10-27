const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


// Create a route for every file in the 'public' folder.
app
.use(express.static('/Develop/public'))
.use(express.urlencoded({ extended: true }))
.use(express.json())
.get('*',function (req,res) {
    res.sendFile('./public/main.html');

// Routes
require('./Develop/public/routes/apiRoutes')(app);
require('./Develop/public/routes/htmlRoutes')(app);


// Starts the server.
app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT}`);
});