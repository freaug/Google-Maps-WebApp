var map;
var layers = [];

function initMap() {
	var myLatLng = new google.maps.LatLng(33.760654,-84.355205);
	var myOptions = {
		zoom: 11,
		center: myLatLng,
		mapTypeControl: false,
		streetViewControl: false	
	}
 	map = new google.maps.Map(document.getElementById('map'), myOptions);
 	//fill the array
	layers [0] = new google.maps.KmlLayer('https://sites.google.com/site/eddieskmlfiles/kml-files/Shuttle%20Route.kmz?attredirects=0&d=1', {preserveViewport: false, suppressInfoWindows: false}); 
	layers [1] = new google.maps.KmlLayer('https://sites.google.com/site/eddieskmlfiles/kml-files/Parade%20Route.kmz?attredirects=0&d=1', {preserveViewport: true, suppressInfoWindows: false});
	layers [2] = new google.maps.KmlLayer('https://sites.google.com/site/eddieskmlfiles/kml-files/Art%20Vendors.kmz?attredirects=0&d=1', {preserveViewport: true, suppressInfoWIndows: false});
	layers [3] = new google.maps.KmlLayer('https://sites.google.com/site/eddieskmlfiles/kml-files/Bathrooms.kmz?attredirects=0&d=1', {preserveViewport: true, suppressInfoWindows: false});
	layers [4] = new google.maps.KmlLayer('https://sites.google.com/site/eddieskmlfiles/kml-files/FoodBeer.kmz?attredirects=0&d=1',{preserveViewport: true, suppressInfoWindows: false});
	layers [5] = new google.maps.KmlLayer('https://sites.google.com/site/eddieskmlfiles/kml-files/Services.kmz?attredirects=0&d=1',{preserveViewport: true, suppressInfoWindows: false});
	layers [6] = new google.maps.KmlLayer('https://sites.google.com/site/eddieskmlfiles/kml-files/Stages.kmz?attredirects=0&d=1',{preserveViewport: true, suppressInfoWindows: false});
	layers [7] = new google.maps.KmlLayer('https://sites.google.com/site/eddieskmlfiles/kml-files/Street%20Market%20Booth%20Numbers.kmz?attredirects=0&d=1',{preserveViewport: true, suppressInfoWindows: false});
	layers [8] = new google.maps.KmlLayer('https://sites.google.com/site/eddieskmlfiles/kml-files/Tour%20of%20Homes.kmz?attredirects=0&d=1',{preserveViewport: true, suppressInfoWindows: false});
<<<<<<< HEAD
	//initialize the map to the festival area
	layers[0].setMap(map);
	//set other layers to null
	for(var i = 1; i < layers.length; i++){
=======
	for(var i = 0; i < layers.length; i++){
>>>>>>> 5168ab3d35fdc6325d6b5e71a179c717e653d2af
		layers[i].setMap(null);
	}
}

function toggleLayer(i) {
	if(layers[i].getMap() === null){
		layers[i].setMap(map);
	}
	else{
		layers[i].setMap(null);
	}
}



