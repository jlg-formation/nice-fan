(function () {
	'use strict';

	var app = angular.module('ors-route');

	app.service('log', function Log() {
		'ngInject';
		const service = this;
		const array = [];
		service.add = function (msg) {
			console.log('add', arguments);
			array.push(msg);
		};
		service.getLogs = function () {
			return array;
		};
	});

	app.component('orsLogs', {
		template: '<div ng-repeat="log in $ctrl.logs">{{log}}</div> ',
		controller: function(log) {
			'ngInject';
			const ctrl = this;
			ctrl.logs = log.getLogs();
		}
	});
})();