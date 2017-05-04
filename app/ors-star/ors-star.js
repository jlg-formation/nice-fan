(function () {
	'use strict';

	var app = angular.module('ors-star', []);

	app.directive('orsStar', function () {
		return {
			restrict: 'E',
			template: '<span><img ng-repeat="i in [0,1,2]" src="./ors-star/img/yellow_star.png" alt="">' +
				'<img ng-repeat="i in [3,4]" src="./ors-star/img/white_star.png" alt=""></span>',
		};
	});

})();