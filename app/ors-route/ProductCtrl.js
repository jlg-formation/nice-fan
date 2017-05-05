(function () {
	'use strict';

	var app = angular.module('ors-route');

	app.controller('ProductCtrl', function ProductCtrl($http) {
		'ngInject';
		var ctrl = this;
		ctrl.start = function () {
			console.log('Start', arguments);
			$http.get('/ws/s1').then((response) => {
				console.log('response', response);
			}).catch((error) => {
				console.error('error', error);
			});
		};
	});
})();