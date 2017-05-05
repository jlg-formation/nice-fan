'use strict';
require('./style.scss');
require('angular');
require('./ors-star/ors-star.js');
require('./ors-route/ors-route.js');

var app = angular.module('main', ['ors-star', 'ors-route']);

const orsHeaderUrl = require('./tmpl/ors-header.html');
const orsBodyUrl = require('./tmpl/ors-body.html');
const orsFooterUrl = require('./tmpl/ors-footer.html');

app.directive('orsHeader', function () {
	return {
		restrict: 'E',
		templateUrl: orsHeaderUrl,
	};
});
app.directive('orsBody', function () {
	return {
		restrict: 'E',
		templateUrl: orsBodyUrl,
	};
});
app.directive('orsFooter', function () {
	return {
		restrict: 'E',
		templateUrl: orsFooterUrl,
	};
});