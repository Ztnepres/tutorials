var app = require('../server');
var dataSource = app.dataSources.postgresdb;
dataSource.automigrate([
  'AccessToken',
  'ACL',
  'RoleMapping',
  'Role',
  'Member',
  'Question',
  'Answer',
  'Sticker'
], function(err) {
  if (err) throw err;
});