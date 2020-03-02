module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/new',function(req,res){
        res.render('new.html');
    });
}