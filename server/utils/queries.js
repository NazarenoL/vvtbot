
/*
 * Queries
 */

var Q = require("q");

//Find
module.exports.find = function(db, collection, query) {

	var promise = Q.nfbind(db.collection(collection).find(query).toArray);

	return promise();

};

//FindOne
module.exports.findOne = function(db, collection, query) {

	var promise = Q.nbind(db.collection(collection).findOne, db.collection(collection));

	return promise();

};