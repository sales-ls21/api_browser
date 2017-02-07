"use strict";

var app = angular.module("browserAPI", ["ngRoute"]);


//this configures the routing for partials and controllers
app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "partials/display.html",
		controller: "displayCtrl"
	})
	.otherwise("/");
}).config(function($locationProvider){
	 $locationProvider.html5Mode(true);
});
