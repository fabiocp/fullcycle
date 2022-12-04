const express = require("express")
const res = require("express/lib/response")
const app = express()

const config = {
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb"
}

const mysql = require("mysql")
const connection = mysql.createConnection(config)

const sql = `insert into people (name) values ('fabio');`

connection.query(sql)

app.get("/", (req, resp) => {
    

    connection.query('select * from people',  function (err, result, fields) {
        let lstLiNomes = "";
        for(var i in result)
            lstLiNomes += `<li>${result[i].name}</li>`
        let ulNomes = `<ul>${lstLiNomes}</ul>`
        let total = `<strong>QTDE REGISTROS: ${result.length}</strong>`;
        resp.send(`<h1>Full Cycle Rocks!</h1>${total}${ulNomes}`);
    })
    
})

app.listen(3000, () => console.log("rodando..."))