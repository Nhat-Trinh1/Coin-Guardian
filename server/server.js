const express = require('express');
//initialized the app
const app = express()
// connects the database
const connectDB = require('./db');
connectDB();

const cors = require('cors');

app.use(cors());
// imports routers
const transactionsRouter = require('./routes/transactions');
const goalRouter = require('./routes/goal');
const PORT = 3000;

// Parses body content from incoming requests
app.use(express.json());
app.use(express.urlencoded());

// redirects all requests going to '/', to router
app.use('/api/transactions', transactionsRouter)
app.use('/api/goal', goalRouter)

// sends error for non valid endpoint
app.use('*', (req, res) => {
  res.status(404).send('Not Found')
})

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  console.error(err);
  return res.status(errorObj.status).json(errorObj.message);
});

// initialized server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`)
})