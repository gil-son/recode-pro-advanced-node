module.exports = function(app){
    
    app.get('/backend', function(req, res){ 

        var connection = app.app.config.database();

        var query = app.app.models.conteudoModel;
        query.getConteudoBack(connection, 
          function(error, results, fields){
          console.log(error, results)
          res.render('paginas/backend',{dados:results});
        });

    });
}