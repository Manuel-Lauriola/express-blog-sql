//importo mysql2
const mysql = require(`mysql2`)

//imposto la connessione
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db-blog",
})

//instauro una connessione al database
connection.connect((err) => {
  if (err) { console.log(err) }
    else (console.log("connected to my sql"))
})

//esporto la connessione
module.exports = connection