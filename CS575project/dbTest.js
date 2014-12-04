var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/test", {native_parser:true});
var test = db.collection( 'testData'); 	
var ideas = [
    {
        title: "The End of Seperate QA and Dev Orgs",
        description: "We propose that development engineers (Software Engineers, Test Engineers and Software Development Engineers in Test) all report to the same direct manager.This will move us closer to a DevOps model, allowing the team to be empowered to own the whole development process, providing more career growth opportunities, have better team dynamics, and allowing the team to ship software faster, and with higher quality.",
        main_category: "Process",
        sub_category: "Agile",
        submission_time: 1417026638000,
        idea_submitter: "Alex Palmatier",
        status: "Submitted",
        GUID: 1234567890,
        comments: [{
            body: "I love this idea! I think that we should get together with the people on my team and flesh this out a little more.",
            author: "Jim Shaut",
            time: 1417030238000
        }, {
            body: "I hate this idea!",
            author: "Alexandra Popova",
            time: 1417031138000
        }],
        support: [{
            user: "apalma200"
        }, {
            user: "achros200"
        }]
    }, {
        title: "Smart Umbrella Stand",
        description: "Umbrella stand that notifies you if it's going to rain. Also allows the user to specify which times of day to monitor for rain.",
        showFullDescription: false,
        main_category: "Product",
        sub_category: "New",
        submission_time: 1416928453000,
        idea_submitter: "Patrick Dunn",
        status: "Completed",
        GUID: 1234567890,
        comments: [{
            body: "I love this idea! I think that we should get together with the people on my team and flesh this out a little more.",
            author: "Jim Shaut",
            time: 1416929678000
        }, {
            body: "I hate this idea!",
            author: "Alexandra Popova",
            time: 1416931478000
        }, {
            body: "I am unsure about this idea!",
            author: "Alexander Chrostowski",
            time: 1416936098000
        }],
        support: [{
            user: "apalma200"
        }, {
            user: "achros200"
        }, {
            user: "achros200"
        }, {
            user: "achros200"
        }, {
            user: "achros200"
        }, {
            user: "achros200"
        }, {
            user: "achros200"
        }, {
            user: "achros200"
        }, {
            user: "achros200"
        }]
    }, {
        title: "Faster Time Entry",
        description: "By putting in time once a week instead of every day we can decrease the amount of time we spend on this task by 70%. This will save Comcast a lot of money in the long run. To do this we need to change the policy regarding this.",
        main_category: "Process",
        showFullDescription: false,
        sub_category: "Lean",
        submission_time: 1405256400000,
        idea_submitter: "Alex Palmatier",
        status: "In-Progress",
        GUID: 1234567890,
        comments: [{
            body: "I love this idea! I think that we should get together with the people on my team and flesh this out a little more.",
            author: "Jim Shaut",
            time: 1405258140000
        }, {
            body: "I hate this idea!",
            author: "Alexandra Popova",
            time: 1405260120000
        }],
        support: [{
            user: "apalma200"
        }, {
            user: "achros200"
        }, {
            user: "apopov200"
        }, {
            user: "jshaut200"
        }]
    }
];

function final() { console.log('Done', results); }

// Insert ideas in array
function series ( idea ) {

	if( idea ) {
		test.insert( idea, function( err, results ){ 
			if ( err ) throw err;
			return series( ideas.shift() );
		});
	} else {
		db.close();
		console.log( 'FINISHED!' );
	}
}

series( ideas.shift() );

