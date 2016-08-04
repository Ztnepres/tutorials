
module.exports = function(SwaggerApi) {

/**
 * get questions by member.

 * @param {number} memberid Unique Identifier of the Member.
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Error} result Result object
 */
SwaggerApi.getQuestions = function(memberid, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}

/**
 * get answers by member.

 * @param {number} memberid Unique Identifier of the Member.
 * @callback {Function} callback Callback function
 * @param {Error|string} err Error object
 * @param {Error} result Result object
 */
SwaggerApi.getAnswers = function(memberid, callback) {
  // Replace the code below with your implementation.
  // Please make sure the callback is invoked.
  process.nextTick(function() {
    var err = new Error('Not implemented');
    callback(err);
  });
  
}



SwaggerApi.remoteMethod('getQuestions',
  { isStatic: true,
  accepts: 
   [ { arg: 'memberid',
       type: 'number',
       description: 'Unique Identifier of the Member.',
       required: true,
       http: { source: 'query' } } ],
  returns: 
   [ { description: 'Unexpected error',
       type: 'Error',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/Questions' },
  description: 'get questions by member.\n' }
);

SwaggerApi.remoteMethod('getAnswers',
  { isStatic: true,
  accepts: 
   [ { arg: 'memberid',
       type: 'number',
       description: 'Unique Identifier of the Member.',
       required: true,
       http: { source: 'query' } } ],
  returns: 
   [ { description: 'Unexpected error',
       type: 'Error',
       arg: 'data',
       root: true } ],
  http: { verb: 'get', path: '/Answers' },
  description: 'get answers by member.\n' }
);

}
