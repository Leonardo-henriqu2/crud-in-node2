const express = require('express');
const mongoose = require ('mongoose');
const server = express();


const funcionarioRoutes = require('./routes/funcionarioRoutes');

// Middleware
server.use(
    express.urlencoded({
        extended: true,
    }),
);

server.use(express.json());

//Criando o endpoint e routas da minha API
server.use('/funcionario', funcionarioRoutes);



//Conexão com MongoDB Atlas
const DB_USER = 'bernardesleonardosouza';
const DB_PASSWORD = encodeURIComponent('L21y74dGaO7gnROp');

//Conexão com MongoDB Atlas
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.mapxb30.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=>{
    console.log('Conectado ao MongoDB!');
})
.catch((err)=>{
    console.log(err);
})

//Porta do servidor
server.listen(3000);

