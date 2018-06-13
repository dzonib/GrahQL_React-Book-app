const mongoose = require('mongoose');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

mongoose
  .connect(
    'mongodb://test123:test123@ds259410.mlab.com:59410/graphql-ninja'
  )
  .then(() => {
    console.log('connected to database');
  }).catch( e => console.log(`error!!!! => ${e}`))


app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema
  })
);

app.listen(3000, () => {
  console.log('server running on port 3000');
});
