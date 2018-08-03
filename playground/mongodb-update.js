//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err) {
		return console.log('Unable to connect to MongoDb server');
	}
	console.log('Connected to MongoDb server');
	const db = client.db('TodoApp');

	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5b622df1e30b3901b2654891')
	}, {
		$set: {
			completed: true
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});
});