"use strict";

app.controller("displayCtrl", function($scope, dataGrab){

	$scope.genres = [];
	$scope.songs = [];
	$scope.albums = [];
	$scope.artists = [];

	$scope.getGenres = ()=>{
		dataGrab.showGenres()
		.then((obj)=>{
			console.log(obj);
			$scope.genres = obj;
			$scope.$apply();
		});
	};

	$scope.getSongs = ()=>{
		dataGrab.showSongs()
		.then((obj)=>{
			console.log(obj);
			$scope.songs = obj;
			$scope.$apply();
		});
	};

	$scope.getAlbums = ()=>{
		dataGrab.showAlbums()
		.then((obj)=>{
			$scope.albums = obj;
			$scope.$apply();
		});
	};

	$scope.getArtists = ()=>{
		dataGrab.showArtists()
		.then((obj)=>{
			$scope.artists = obj;
			$scope.$apply();
		});
	};
});