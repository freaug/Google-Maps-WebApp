var map;
var center;
var layers = [];

function initMap() {
	var myLatLng = new google.maps.LatLng(33.760654,-84.355205);
	var myOptions = {
		zoom: 11,
		center: myLatLng	
	}
 	map = new google.maps.Map(document.getElementById('map'), myOptions);

	layers [0] = new google.maps.KmlLayer('https://sites.google.com/site/eddieskmlfiles/kml-files/Shuttle%20Route.kmz?attredirects=0&d=1', {preserveViewport: false, suppressInfoWindows: false}); 
	layers [1] = new google.maps.KmlLayer('https://sites.google.com/site/eddieskmlfiles/kml-files/Parade%20Route.kmz?attredirects=0&d=1', {preserveViewport: false, suppressInfoWindows: false});
		
	for(var i = 0; i < layers.length; i++){
		layers[i].setMap(null);
	
function calculateCenter() {
	center = map.getCenter();
		google.maps.event.addDomListener(map, 'idle', function() {calculateCenter();});
		google.maps.event.addDomListener(window, 'resize', function() { map.setCenter(center);});
	}

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



