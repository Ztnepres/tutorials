var app = require('../server');
var path = require('path');
var models = require(path.resolve(__dirname, '../model-config.json'));
var dataSource = app.dataSources.postgresdb;

dataSource.automigrate([
	'User', 
	'AccessToken',
	'ACL', 
	//'RoleMapping',
	//'Role', 
	'Video'
], function(err) {
	if (err) throw err;
});

/**
Object.keys(models).forEach(function(key) {
    if (typeof models[key].dataSource != 'undefined') {
        
        dataSource.automigrate(key, function (err) {
            if (err) throw err;
            console.log('Model ' + key + ' migrated');
        });
        
    }
});*/