console.log(data3)

var map = L.map('map', {
        zoomSnap: 0.10,
        duration: 0.5
        });
map.setView([49.8062891, -84.1434475], 5.45);

// L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF2ZWxsZ2lzIiwiYSI6ImNpeDZ3YnFvbzAxNHgyeXF5NDVob3VvanEifQ.2_vKfp2QtZlz70-C1Kkphw', {
  // mapbox://styles/mapbox/outdoors-v10
    zoomSnap: 0.10,
    maxZoom: 18,
    // layers: [communities],
    attribution: 'Map data &copy; OpenStreetMap contributors'
}).addTo(map);


// L.control.zoom({
//      position:'topright'
// }).addTo(map);


//******************************************************************************
/* general variables for the map*/
var checkclick = false;

//******************************************************************************
/* styles for the markers*/
var union = {
    fillColor: 'rgb(136, 14, 79)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}


//     var circle = L.circleMarker(latlng,  allied);


var allied = {
    fillColor: 'rgb(230, 81, 0)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

var rama = {
    fillColor: 'rgb(129, 119, 23)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

var treaty3 = {
    fillColor: 'rgb(85, 139, 47)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

var independant = {
    fillColor: 'rgb(1, 87, 155)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

var metis = {
    fillColor: 'rgb(26, 35, 126)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

var metis = {
    fillColor: 'rgb(78, 52, 46)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

var metis = {
    fillColor: 'rgb(85, 139, 47)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

var sauga = {
    fillColor: 'rgb(194, 24, 21)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

var mohawk = {
    fillColor: 'rgb(255, 234, 0)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

var aski = {
    fillColor: 'rgb(175, 180, 43)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

var friendship = {
    fillColor: 'rgb(15, 157, 88)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

var onwa = {
    fillColor: 'rgb(2, 136, 209)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}


var inuit = {
    fillColor: 'rgb(57, 73, 171)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

var six = {
    fillColor: 'rgb(85, 139, 47)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

var tung_inuit = {
    fillColor: 'rgb(189, 189, 189)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}

//******************************************************************************
var Union = L.layerGroup().addTo(map);
var Union2 = L.layerGroup().addTo(map);

var Allied = L.layerGroup().addTo(map);
var Rama = L.layerGroup().addTo(map);
var Treaty3 = L.layerGroup().addTo(map);
var Independent = L.layerGroup().addTo(map);
var Metis = L.layerGroup().addTo(map);
var Sauga = L.layerGroup().addTo(map);
var Mohawk = L.layerGroup().addTo(map);
var Aski = L.layerGroup().addTo(map);
var Friendship = L.layerGroup().addTo(map);
var Onwa = L.layerGroup().addTo(map);
var Inuit = L.layerGroup().addTo(map);
var Six = L.layerGroup().addTo(map);
var Tung_inuit = L.layerGroup().addTo(map);



//******************************************************************************
// function onEachFeature(feature, layer) {
//     // does this feature have a property named popupContent?
//     if (feature.properties.partnerID === 1) {
//         feature.properties.color = '#4286f4'
//         console.log('test')
//     }else {
//         feature.properties.color = '#4286f4'
//         layer.bindPopup(feature.properties.Name);
//     }
// }
//
// var fwblayer = L.geoJSON(data2, {
//     pointToLayer: function (feature, latlng) {
//         return L.circleMarker(latlng);
//     },
//     onEachFeature: onEachFeature
//     style: function(feature) {
//         return {color: feature.properties.color };
//     },
// });
//
// map.addLayer(fwblayer);






    //     marker = new L.Marker(new L.latLng(loc), {title: title} );//se property searched
    // marker.bindPopup('title: '+ title );
    // markersLayer.addLayer(circle);

 var communities = {
   'Union of Ontario Indians': Union,
   'Association of Iroquois and Allied Indians': Allied,
   'Rama First Nation': Rama,
   'Grand Council Treaty #3': Treaty3,
   'Independent First Nations': Independent,
   'Metis Nation of Ontario': Metis,
   'Mississaugas of the New Credit First Nation': Sauga,
   'Mohawk Council of Akwasasne': Mohawk,
   'Nishnawbe Aski Nation': Aski,
   'Ontario Federation of Indigenous Friendship Centres': Friendship,
   'Ontario Native Women\'s Association': Onwa,
   'Ottawa Inuit Children\'s Centre': Inuit,
   'Six Nations Of the Grand River': Six,
   'Tungasuvvingat Inuit': Tung_inuit,
   // 'All': parent
 };


L.control.layers(communities).addTo(map);

// readData(data2);
var sidebar = L.control.sidebar('sidebar').addTo(map);

 // ***************************************************************************//
// working loading of data
var fwblayer = L.geoJSON(data3, {
    pointToLayer: function(feature, latlng) {
        // return L.circleMarker(latlng, union);
        // var loc = latlng
        // var title = (feature.properties.Name)
        // marker = new L.Marker(new L.latLng(loc),  {title: title}, {icon: union})

        if (feature.properties.PartnerID === 1) {
            var circle = L.circleMarker(latlng,  union);
            Union2.addLayer(circle);
            feature.layer = union;
        } else if (feature.properties.PartnerID === 2) {
            var circle = L.circleMarker(latlng,  allied);
            Allied.addLayer(circle).addTo(map);


        } else if (feature.properties.PartnerID === 3) {
            var circle = L.circleMarker(latlng, rama);
            Rama.addLayer(circle).addTo(map);
            // feature.layer = Rama;

        } else if (feature.properties.PartnerID === 4) {
            var circle = L.circleMarker(latlng, treaty3);
            Treaty3.addLayer(circle).addTo(map);
            // feature.layer = Treaty3;
        } else if (feature.properties.PartnerID === 5) {
            var circle = L.circleMarker(latlng, independant);
            Independent.addLayer(circle).addTo(map);
            // feature.layer = Independent;

        } else if (feature.properties.PartnerID === 6) {
            var circle = L.circleMarker(latlng, metis);
            Metis.addLayer(circle).addTo(map);
            // feature.layer = Metis;

        } else if (feature.properties.PartnerID === 7) {
            var circle = L.circleMarker(latlng, sauga);
            Sauga.addLayer(circle).addTo(map);
            // feature.layer = Sauga;

        } else if (feature.properties.PartnerID === 8) {
            var circle = L.circleMarker(latlng, mohawk);
            Mohawk.addLayer(circle).addTo(map);
            // feature.layer = Mohawk;

        } else if (feature.properties.PartnerID === 9) {
            var circle = L.circleMarker(latlng, aski);
            Aski.addLayer(circle).addTo(map);
            // feature.layer = Aski;

        } else if (feature.properties.PartnerID === 10) {
            var circle = L.circleMarker(latlng, friendship);
            Friendship.addLayer(circle).addTo(map);
            // feature.layer = Friendship;

        } else if (feature.properties.PartnerID === 11) {
            var circle = L.circleMarker(latlng, onwa);
            Onwa.addLayer(circle).addTo(map);
            // feature.layer = Onwa;

        } else if (feature.properties.PartnerID === 12) {
            var circle = L.circleMarker(latlng, inuit);
            Inuit.addLayer(circle).addTo(map);
            // feature.layer = Inuit;

        } else if (feature.properties.PartnerID === 13) {
            var circle = L.circleMarker(latlng, six);
            Six.addLayer(circle).addTo(map);
            // feature.layer = Six;

        } else if (feature.properties.PartnerID === 14) {
            var circle = L.circleMarker(latlng, tung_inuit);
            Tung_inuit.addLayer(circle).addTo(map);

        } else {
            circle = L.circleMarker(latlng);
        }
            circle.on('click', function() {
                // console.log(marker.title)
                map.flyTo(latlng, 10)
                // $('#data .sidebar-header').text(feature.properties.Partner)
                $('#data .website').text(feature.properties.Website)
                $('#data .email').text(feature.properties.Email)
                $('#data .contact').text(feature.properties.Contact)
                $('#data .phone').text(feature.properties.Phone)
                $('#data .description_text').text(feature.properties.Description)
                if (checkclick === false) {
                    sidebar.open('#sidebar');
                    $('#data').addClass('active');
                    checkclick = true;
                } else {
                    sidebar.close('#sidebar');
                    checkclick = false;
                }
            })
            return circle.bindPopup(feature.properties.Name)
    },
    onEachFeature: function (feature, layer) {
       feature.layer = layer;
}
});
map.addLayer(fwblayer);


//  ***************************************************************************//


    var searchCtrl = L.control.fuseSearch()
    searchCtrl.addTo(map);

    searchCtrl.indexFeatures(data3, ['Name', 'Partner']);
	////////////populate map with markers from sample data
	// for(i in data) {
	// 	var title = data[i].title,	//value searched
	// 		loc = data[i].loc,		//position found
	// 		marker = new L.Marker(new L.latLng(loc), {title: title} );//se property searched
	// 	marker.bindPopup('title: '+ title );
	// 	markersLayer.addLayer(marker);
	// }










   //*****************************//
   // add clustered markers with layer control //



   // control.addOverlay(parent, 'Parent');
   // control.addOverlay(Union, 'Union');
   // control.addOverlay(Allied, 'Allied');
   // control.addOverlay(Treaty3, 'Treaty3');
   // control.addOverlay(Independent, 'Independent');
   // control.addOverlay(Metis, 'Metis');
   // control.addOverlay(Sauga, 'Sauga');
   // control.addOverlay(Mohawk, 'Mohawk');
   // control.addOverlay(Aski, 'Aski');
   // control.addOverlay(Friendship, 'Friendship');
   // control.addOverlay(Onwa, 'Onwa');
   // control.addOverlay(Inuit, 'Inuit');
   // control.addOverlay(Six, 'Six Nations');
   // control.addOverlay(Tung_inuit, 'Tungasuvvingat Inuit ');

   // var parent = L.markerClusterGroup(),
   //  Union = L.featureGroup.subGroup(parent),
   //  Allied = L.featureGroup.subGroup(parent),
   //  Rama = L.featureGroup.subGroup(parent),
   //  Treaty3 = L.featureGroup.subGroup(parent),
   //  Independent = L.featureGroup.subGroup(parent),
   //  Metis = L.featureGroup.subGroup(parent),
   //  Sauga = L.featureGroup.subGroup(parent),
   //  Mohawk = L.featureGroup.subGroup(parent),
   //  Aski = L.featureGroup.subGroup(parent),
   //  Friendship = L.featureGroup.subGroup(parent),
   //  Onwa = L.featureGroup.subGroup(parent),
   //  Inuit = L.featureGroup.subGroup(parent),
   //  Six = L.featureGroup.subGroup(parent),
   //  Tung_inuit = L.featureGroup.subGroup(parent),
   //  control = L.control.layers(null, null, { collapsed: false });
   // parent.addTo(map);
   // control.addTo(map);

   //*****************************//
