define(function (require) {
    var MainRouter = require('routers/main');

    return function () {
    	var router = new MainRouter();			
    	Backbone.history.start();
    };
});