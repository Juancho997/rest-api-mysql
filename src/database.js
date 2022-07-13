const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host : process.env.DB_host,
    user : process.env.DB_user,
    password : process.env.DB_password,
    database : process.env.DB_database
});

mysqlConnection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    } else{
      console.log(`DB > ${process.env.DB_database} < is connected`)  
    } 
});

module.exports = mysqlConnection;