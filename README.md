Alex Palmatier
CS575 - Assignment 3
12/4/2014
README

Hi Professor,
Here is how I set up the whole stack so that all the stuff is running locally and the DB is working properly and such. I did this on a windows machine but you can easily follow the same pattern for mac or linux. Anything in '' are commands you should be entering or addresses for your browser. Do not close the command prompts as they host the db and server and such. It seems the README lost its images when loaded to github. So they are provideed in the figure descriptions themselves.
Link to video: http://youtu.be/3ouNpXCdxFQ
Link to repo: https://github.com/asp78/CS575/tree/master/CS575project
1. Install Node.js and Express
•	Go to http://nodejs.org/
•	click the install button to download the .msi file
•	run the .msi and follow the install steps
•	Open command prompt as administrator
•	Navigate to Desktop folder
•	mkdir to create a project folder (I named mine CS575)
•	type 'npm init' and that should throw an error 
o	NOTE IMPORTANT: If you already have node set up dont do this as you prolly already fixed the error and that might confuse the set up process
•	Navigate to the address in the error message which should be something ending in \Roaming
•	'mkdir npm' - this create the missing folder that the .msi apparently never makes
•	Navigate back to the project folder (CS575 in my case)
•	'npm install -g express'
o	NOTE: I'm no master with the whole difference between global and regular install, I just know what I did to make mine work.
•	OPTIONAL: 'del npm-debug.log' if you OCD like me
•	'npm install -g express-generator'
•	'express CS575project' (The name CS575project is just what I used, you can pick any it's just the name of the directory the command creates)
•	Navigate to the created directory
•	'npm install'
•	'npm install nodemon'
•	'npm install -g nodemon'
•	'nodemon bin/www'
•	Open a browser and navigate to 'localhost:3000' and it should greet you with an express thing
 
2. Install MongoDB
•	Go to http://www.mongodb.org/downloads and download the .msi (2.6.5 was the version for me)
•	run the .msi (Choose the typical install as we aren't doing anything to special)
•	open a new command prompt as admin
•	Navigate to 'C:\Program Files\MongoDB 2.6 Standard\bin'
•	Run mongod.exe
o	If you are given an error (you aren't in a shell) make sure that the \data\db folder exists, my work laptop had it but I had to create both \data and \data\db on my home laptop. I'll walk you through that just in case
o	'cd /'
o	'mkdir data'
o	'cd data'
o	'mkdir db'
o	navigate back to 'C:\Program Files\MongoDB 2.6 Standard\bin'
•	Open new tab in browser, go to 'localhost:20717' and you should see a standard message there
•	Open new command prompt as admin
•	Navigate to 'C:\Program Files\MongoDB 2.6 Standard\bin'
•	Run mongo.exe
•	type 'use test'
3. Install Mongoskin
•	open new command prompt as admin
•	Navigate to the project folder (in my case CS575project)
•	'npm install mongoskin'
•	'npm install mongoskin --save'
4. OPTIONAL but suggested - load some documents I made into the db so the page looks good the first time you load it. 
•	copy my dbTest.js file to the project folder (CS575project for me)
•	'node dbTest.js'
o	Should log "FINISHED"
5. Put files into correct places to create site
•	replace the existing 'index.js' with my 'index.js'
•	put my 'Proto.jade' into the views folder (CS575project\views\)
•	put my 3 .css files into the stylesheets folder (CS575project\public\stylesheets\)
o	bootstrap-theme.min.css
o	bootstrap.min.css
o	proto.css
•	put my 4 .js files into the javascripts folder (CS575project\public\javascripts\)
o	angular.min.js
o	bootstrap.min.js
o	jquery-1.11.1.js
o	proto.js
6. Reload 'localhost:3000' in your browser and you will see the site.
This should completely set up the environment and allow you to play with the stuff as well. Here's some things you can do.
•	On the command prompt running nodemon
o	typing 'rs' restarts, it should also automatically restart with any modification to any file in the project folder (CS575project) but this is just in case
•	On the command prompt running mongod.exe
o	I don't know anything cool here. I don't like to touch much backend stuff.
•	On the command prompt running mongo.exe
o	My script (dbTest.js) creates a collection called testData, I'm quite sure this is created manually if you add an idea regardless.
o	To see all the current ideas (documents) in the db, 'db.testData.find()'
o	To remove a document from the db,					'db.testData.remove({ "_id" : ObjectId("stringofchars") }) replacing 'stringofchars' with the real value of "_id" for the document which you can find using the find() method above
Project Description
I chose to do this project because it is tied with what I am doing at my current job as well - I'm working part-time at Comcast while on classes (I'm doing BS/MS cramming it all in together). It's meant to be an innovation site where people can go to post ideas, comment on them, and stuff like that. I had big goals for this project but my vision had more than I could handle it seems as I've put in over 40hrs into this and could only get this far. I decided to add the ability to add an idea to the database at the last second because I was worried my site was not enough just presenting data using Angular which is why the input form is not very pretty. If you really want to play around with the site I'd suggest using Sublime (http://www.sublimetext.com/) as it works really well since you can navigate the directory structure really easily - I'll add help on this at the end of the document. My primary interest in this was learning more about Angular and the MEAN stack in general. I've mostly been a front end developer and didn't realize how little I understood about the rest of it which caused me to not finish as much as I had hoped. I had really wanted to get both adding an idea and adding a comment working but the comment part eluded me. I'll walk through the features of the site in my video.
I used the MEAN stack which stands for MongoDB, Express, Angular.JS, and Node.JS. It is a full javascript stack that allows for high scalability, concurrency, and greatly lessens development time. I chose it because eventually when I finish this for my job I will need to hook it up to an ElasticSearch database which is another document driven database very similar to MongoDB. It is also great for web applications that want to has a chat system and I thought that could possibly be a part of the site in the future to promote collaboration. The MEAN stack uses the MVC architecture (Figure.1) to promote two-way data binding and other useful features that allow web applications to be more productive and feel sleek. 
 
Figure 1: MVC Architecture (image from http://www.inqbation.com/angular-js-the-superheroic-framework-for-coding-less-and-enjoy-more/)
One of the great things of Angular was how it makes using advanced features trivial. I had wanted to use dependency injection in this project and started reading more about how to and I realized I had already been using it without even knowing it. In addition, the built-in filters and $scope functionality made hooking this up to a backend and displaying the correct data in the proper way much easier. 
Node.JS made creating the middleware between MongoDB and Angular easy by having a well organized file structure and a LOT of documentation. I had never worked with any backend tools before and I was able to figure out how to use it how I wanted within ~20 hrs. The only part I was not very confident I did "correctly" was updating the database with a new idea since I decided to do that very late. It was nice that I didn't need to do any conversions between data types as everything was using javascript. The part that really impressed me is that JavaScript is single-threaded yet the platform is built to handle many events asynchronously. I didn't understand it at first until I read some articles and found the image in Figure 2.
 
Figure 2: Node Threading Architecture (image from http://techzonal.blogspot.com/2013/07/what-is-nodejs-and-its-basic.html)
Express I was unsure if I should use as it forces you to convert all your .html to .jade files but in the end it was the easiest was to do things. The site for it has very well defined documentation to facilitate learning and the http requests were much easier to perform with it.
MongoDB was useful for the fact that documents are stored as .json objects and since I will eventually be transferring this over to an ElasticSearch database which is also a .json document database. I've never really worked with a regular MySQL database but it was rather easy to learn this well enough to use it.
I have also used Bootstrap to help with some CSS and make it more mobile friendly. I had worked with it before and found it a huge time saver when creating a website in a short period of time. Paired with Angular.JS it allows for very mobile friendly sites as you are scaling upwards from the phone screen size -instead of down to it - and only getting the data you need from your http calls saving on data.
 
Miscellaneous
Sublime - good way to play with the code due to the file structure being right by the text editor. If you want to install it go to http://www.sublimetext.com/, click download, run the installer. Once installed open it and navigate to Project->Add Folder to Project and select the one containing my code.
