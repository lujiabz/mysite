
/*
 * GET home page.
 */

module.exports = function(app){
	app.get('/css', function(req,res)
		{
			res.render('index', { title: '阅微笔记' });
		});
	app.get('/javascript', function(req,res)
		{
			res.render('javascript', { title: '阅微笔记/javascript' });
		});
	app.get('/jQuery', function(req,res)
		{
			res.render('jQuery', { title: '阅微笔记/jQuery' });
		});
	app.get('/', function(req,res)
		{
			res.render('homepages', { title: '阅微笔记/homepages' });
		});
	
  
};