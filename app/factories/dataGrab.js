"use strict";

app.factory("dataGrab", ($http)=>{

	let showArtists = ()=>{
		return new Promise((resolve, reject)=>{
			$http.get("http://localhost:8000/artists/")
			.then((obj)=>{
				resolve(obj.data);
			});
		});
	};

	let showAlbums = ()=>{
		return new Promise((resolve, reject)=>{
			$http.get("http://localhost:8000/albums/")
			.then((obj)=>{
				resolve(obj.data);
			});
		});
	};

	let showSongs = ()=>{
		return new Promise((resolve, reject)=>{
			$http.get("http://localhost:8000/songs/")
			.then((obj)=>{
				resolve(obj.data);
			});
		});
	};

	let showGenres = ()=>{
		return new Promise( (resolve, reject)=>{
			$http.get("http://localhost:8000/genres/")
			.then((obj)=>{
				resolve(obj.data);
			});
		});
	};

	return{showGenres, showArtists, showSongs, showAlbums};

});