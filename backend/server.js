const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // to connect to mongodb database
// const bodyParser = require(body-parser); => not needed, already included in new version of express

require('dotenv').config(); // to have environment variables in dotenv file

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // body-parser is already included in new version of express

// connect the application to mongodb database:
const uri = process.env.ATLAS_URI; // where the database is stored
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// connect to the routes files
const exercisesRouter = require('./routes/exercises'); 
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter); // whenever someone goes to the root url '.../' and type 'exercises', the app will load exercisesRouter
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})