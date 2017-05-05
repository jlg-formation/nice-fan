(function () {
	'use strict';

	var app = angular.module('ors-route');

	app.controller('ProductCtrl', function ProductCtrl(){
		var ctrl = this;
		ctrl.start = function() {
			console.log('Start', arguments);
		};
	});
})();