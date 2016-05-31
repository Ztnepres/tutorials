var app = require('../server');
var dataSource = app.dataSources.postgresdb;
dataSource.automigrate([
  'User', 
  'AccessToken',
  'ACL', 
  'RoleMapping',
  'Role', 
  'Video'
], function(err) {
  if (err) throw err;
});