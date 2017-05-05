(function () {
	'use strict';

	var app = angular.module('ors-route');

	app.controller('ProductCtrl', function ProductCtrl($http, $q, log) {
		'ngInject';
		var ctrl = this;
		ctrl.start = function () {
			console.log('Start', arguments);
			log.add('Start');
			$http.get('/ws/s1').then((response) => {
				console.log('response', response);
				log.add(response.data.name);
				return $q.all([
					$http.get('/ws/s2').then((response) => {
						console.log('response', response);
						log.add(response.data.name);
						return $http.get('/ws/s5');
					}),
					$http.get('/ws/s3'),
					$http.get('/ws/s4')
				]);
			}).then((responses) => {
				console.log('responses', responses);
				log.add(responses[0].data.name);
				log.add(responses[1].data.name);
				log.add(responses[2].data.name);
				return $http.get('/ws/s6');
			}).then((response) => {
				console.log('response', response);
				log.add(response.data.name);
			}).catch((error) => {
				console.error('error', error);
			});
		};
	});
})();