module.exports = function(app){
    app.get("/consultar-cep", (req, res) => { 
        res.render("paginas/consultarcep");
    });
}


