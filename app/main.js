'use strict';
require('./style.scss');
require('angular');
require('./ors-star/ors-star.js');
require('./ors-route/ors-route.js');

var app = angular.module('main', ['ors-star', 'ors-route']);

app.directive('orsHeader', function () {
	return {
		restrict: 'E',
		templateUrl: 'tmpl/ors-header.html',
	};
});
app.directive('orsBody', function () {
	return {
		restrict: 'E',
		templateUrl: 'tmpl/ors-body.html',
	};
});
app.directive('orsFooter', function () {
	return {
		restrict: 'E',
		templateUrl: 'tmpl/ors-footer.html',
	};
});