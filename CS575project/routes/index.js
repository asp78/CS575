var express = require('express');
var mongo = require('mongoskin');

var router = express.Router();

var db = mongo.db("mongodb://localhost:27017/test", {native_parser:true});
var test = db.collection( 'testData'); 	

router.get('/getIdeas', function(req, res){
	test.find(function(err, results){
		results.toArray( function( err, results ) {
			res.json( results );
		})
	});
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('Proto');
});

router.get('/login', function(req, res) {
	res.render('ProtoLogin');
});

router.get('/home', function(req, res) {
	res.render('Proto');
});

router.post('/addIdea', function(req, res) {
        test.insert(
        {
        	'title': req.body.title,
        	'description': req.body.description,
        	'main_category': req.body.main_category,
        	'sub_category': req.body.sub_category,
        	'submission_time': Date.now(),
        	'idea_submitter': 'Alex Palmatier',
        	'status': 'Submitted',
        	'GUID': 1234567890,
			'comments': [],
			'support': []
        }, function (err, result) {
			if (err) throw err;
			console.log(result);
   });

        res.redirect( '/home' );
});

module.exports = router;