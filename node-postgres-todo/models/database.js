var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', function() { client.end(); });

// try to create a table with a few columns, insert data into it, 
// retrieve the results from that table, drop the table (try to change this by using specific functions)
//Read documentaion on pg, and then see if there is documentation 
//on a postgres model based on an ORM (object relational model)