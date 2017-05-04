(function () {
	'use strict';

	var app = angular.module('ors-star', []);

	app.directive('orsStar', function () {
		return {
			restrict: 'E',
			scope: {
				note: '<?'
			},
			template: '<span><img ng-click="$ctrl.update(i+1)" ' +
				'ng-repeat="i in [0,1,2,3,4]" ng-src="{{$ctrl.getSrc(i)}}" alt="">' +
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

	app.component('orsStar2', {
		bindings: {
			note: '<?'
		},
		controller: function ($scope, $element, $compile) {
			'ngInject';
			var ctrl = this;
			console.log('orsStar2 ctrl', arguments);
			$scope.$watch('$ctrl.note', function () {
				var note = ctrl.note || 0;
				note = (note > 5) ? 5 : note;
				note = (note < 0) ? 0 : note;
				var html = '';
				for (var i = 0; i < note; i++) {
					html += '<img ng-click="$ctrl.update(' + (i + 1) + ')" src="./ors-star/img/yellow_star.png" />';
				}
				for (i = note; i < 5; i++) {
					html += '<img ng-click="$ctrl.update(' + (i + 1) + ')" src="./ors-star/img/white_star.png" />';
				}
				$element.html(html);
				$compile($element.contents())($scope);
			});
			ctrl.update = function (note) {
				console.log('update', arguments);
				ctrl.note = note;
			};

		}
	});

})();