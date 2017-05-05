'use strict';
require('angular-ui-router');

var app = angular.module('ors-route', ['ui.router']);

require('./ProductCtrl.js');
require('./log.js');

app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
	$locationProvider.html5Mode(true);

	var homeState = {
		name: 'home',
		url: '/',
		templateUrl: './ors-route/tmpl/home.html'
	};

	var productState = {
		name: 'product',
		url: '/products',
		templateUrl: './ors-route/tmpl/product.html',
		controller: 'ProductCtrl',
		controllerAs: '$ctrl'
	};

	var serviceState = {
		name: 'service',
		url: '/services',
		templateUrl: './ors-route/tmpl/service.html'
	};

	var contactState = {
		name: 'contact',
		url: '/contact',
		templateUrl: './ors-route/tmpl/contact.html'
	};

	$stateProvider.state(homeState);
	$stateProvider.state(productState);
	$stateProvider.state(serviceState);
	$stateProvider.state(contactState);

	$urlRouterProvider.otherwise('/');
});