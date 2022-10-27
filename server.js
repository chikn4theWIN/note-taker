const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


// Create a route for every file in the 'public' folder.
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


// Starts the server.
app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT}`);
});