(function () {
	'use strict';

	var app = angular.module('ors-star', []);

	app.directive('orsStar', function () {
		return {
			restrict: 'E',
			scope: {
				note: '<?'
			},
			template: '<span><img ng-click="$ctrl.update(i+1)" ng-repeat="i in [0,1,2,3,4]" ng-src="{{$ctrl.getSrc(i)}}" alt="">' +
				'</span>',
			controller: function ($scope) {
				var ctrl = this;
				console.log('orsStar ctrl', arguments);
				var note;
				$scope.$watch('note', function () {
					note = $scope.note || 0;
				});

				console.log('note', note);
				ctrl.getSrc = function (i) {
					// console.log('getSrc', arguments);
					if (i < note) {
						return './ors-star/img/yellow_star.png';
					}
					return './ors-star/img/white_star.png';
				};
				ctrl.update = function (note) {
					console.log('update', arguments);
					$scope.note = note;
				};
			},
			controllerAs: '$ctrl'
		};
	});

})();