var loopback = require('loopback');

module.exports = function(Question) {
  Question.observe('before save', function updateTitle(ctx, next) {
  	console.log('===== observe(before save)');
  	if (ctx.instance) {
    	var lbCtx = loopback.getCurrentContext();
    	var userId = lbCtx.active.accessToken.userId;
    	ctx.instance.memberId = userId; ;
    	console.log('ctx.instance: ', ctx.instance)
    }else{
    	console.log('-----no ctx.instance');
    }
  	next();
  });
};


