module.exports = function(app){

        const buscaCep = require("../functions/buscaCep");

        app.post("/envia-cep", async (req, res) =>{
     
        // console.log(cep);
        // res.render("index");
        const {cep} = req.body;
        const resultado = await buscaCep(cep);
        console.log(resultado);
        res.render('paginas/resultadocep',{dado:resultado});
    });
 
}
