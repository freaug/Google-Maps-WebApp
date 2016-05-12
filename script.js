var outline = [];
var markers = [];
var map;
var center;
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;
var myCenter=new google.maps.LatLng(33.757209,-84.356755);

//setup the map ya dingus
function initialize() {
	var mapProp = {
		center:myCenter,
		zoom:17,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	}
	map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
	google.maps.event.addListener(map, 'click', function(event) {
		placeMarker(event.latLng);
	});
	//keeps the center of the map the center when you resize
	var center;
	function calculateCenter() {
	center = map.getCenter();
	}
	google.maps.event.addDomListener(map, 'idle', function() {
	calculateCenter();
	});
	google.maps.event.addDomListener(window, 'resize', function() {
	map.setCenter(center);
	});
}
// creates a marker
function placeMarker(location) {  
	var cord;
	var marker=new google.maps.Marker({
		position: location,
		label: labels[labelIndex++ % labels.length],
		map: map,
	});
	cord= {lat: location.lat(), lng: location.lng()};
	outline.push(cord);
	markers.push(marker);
}
// creates a polygon based on where you clicked
function makeOutline() {
	var festivalBounds=new google.maps.Polygon({
		paths: outline,
		strokeColor: 'blue',
		strokeOpacity: 0.8,
		strokeWeight: 3,
		fillColor: 'blue',
		fillOpacity: 0.35,
	});
	festivalBounds.setMap(map);
	clearMarkers();
	outline = [];
}

function setMapOnAll(map) {
	for (var i = 0; i < markers.length; i++) {
		markers[i].setMap(map);
	}
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
	setMapOnAll(null);
}

google.maps.event.addDomListener(window, 'load', initialize);