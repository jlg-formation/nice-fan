(function () {
	'use strict';

	var app = angular.module('ors-route');

	app.controller('ProductCtrl', function ProductCtrl($http, $q) {
		'ngInject';
		var ctrl = this;
		ctrl.start = function () {
			console.log('Start', arguments);
			$http.get('/ws/s1').then((response) => {
				console.log('response', response);
				return $q.all([
					$http.get('/ws/s2').then((response) => {
						console.log('response', response);
						return $http.get('/ws/s5');
					}),
					$http.get('/ws/s3'),
					$http.get('/ws/s4')
				]);
			}).then((responses) => {
				console.log('responses', responses);
				return $http.get('/ws/s6');
			}).then((response) => {
				console.log('response', response);

			}).catch((error) => {
				console.error('error', error);
			});
		};
	});
})();