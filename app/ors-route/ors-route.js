'use strict';
require('angular-ui-router');

var app = angular.module('ors-route', ['ui.router']);

require('./ProductCtrl.js');
require('./log.js');

const orsHomeUrl = require('./tmpl/home.html');
const orsProductUrl = require('./tmpl/product.html');
const orsServiceUrl = require('./tmpl/service.html');
const orsContactUrl = require('./tmpl/contact.html');

app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
	$locationProvider.html5Mode(true);

	var homeState = {
		name: 'home',
		url: '/',
		templateUrl: orsHomeUrl
	};

	var productState = {
		name: 'product',
		url: '/products',
		templateUrl: orsProductUrl,
		controller: 'ProductCtrl',
		controllerAs: '$ctrl'
	};

	var serviceState = {
		name: 'service',
		url: '/services',
		templateUrl: orsServiceUrl
	};

	var contactState = {
		name: 'contact',
		url: '/contact',
		templateUrl: orsContactUrl
	};

	$stateProvider.state(homeState);
	$stateProvider.state(productState);
	$stateProvider.state(serviceState);
	$stateProvider.state(contactState);

	$urlRouterProvider.otherwise('/');
});