data3 =
{
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "X": -82.3994214, "Y": 42.9515312, "Name": "Aamjiwnaang", "Partner": " Anishinabek Nation\/Union of Ontario Indians", "PartnerID": 1, "Website": " http:\/\/www.anishinabek.ca\/", "Postal_Code": " N7T 7H5", "Contact": " Family Well-Being Coordinator", "Email": " laureen.linklater@anishinabek.ca", "Phone": null, "Description": "AN\/UOI provides program coordination to Anishinabek First Nations. The vision for AN\/UOI Nations includes: maintaining a safe place for people in the community, child and youth mental health services on every First Nation to ensure a timely response to mental health crises, communities that are better equipped to respond to and support children, youth and families in crisis, preventative approaches to support the break in the cycle of intergenerational trauma and violence, and resourcing best practices that support our Indigenous culture.", "LAT": 42.9515312, "LON": -82.3994214 }, "geometry": { "type": "Point", "coordinates": [ -82.3994214, 42.9515312 ] } },
{ "type": "Feature", "properties": { "X": -77.4385348, "Y": 44.3806352, "Name": "Alderville", "Partner": " Anishinabek Nation\/Union of Ontario Indians", "PartnerID": 1, "Website": " http:\/\/www.anishinabek.ca\/", "Postal_Code": " K0K 2X0", "Contact": " Family Well-Being Coordinator", "Email": " laureen.linklater@anishinabek.ca", "Phone": null, "Description": "AN\/UOI provides program coordination to Anishinabek First Nations. The vision for AN\/UOI Nations includes: maintaining a safe place for people in the community, child and youth mental health services on every First Nation to ensure a timely response to mental health crises, communities that are better equipped to respond to and support children, youth and families in crisis, preventative approaches to support the break in the cycle of intergenerational trauma and violence, and resourcing best practices that support our Indigenous culture.", "LAT": 44.3806352, "LON": -77.4385348 }, "geometry": { "type": "Point", "coordinates": [ -77.4385348, 44.3806352 ] } },
{ "type": "Feature", "properties": { "X": -77.1674026, "Y": 45.6383081, "Name": "Algonquins of Pikwakanagan", "Partner": " Anishinabek Nation\/Union of Ontario Indians", "PartnerID": 1, "Website": " http:\/\/www.anishinabek.ca\/", "Postal_Code": " K0J 1X0", "Contact": " Family Well-Being Coordinator", "Email": " laureen.linklater@anishinabek.ca", "Phone": null, "Description": "AN\/UOI provides program coordination to Anishinabek First Nations. The vision for AN\/UOI Nations includes: maintaining a safe place for people in the community, child and youth mental health services on every First Nation to ensure a timely response to mental health crises, communities that are better equipped to respond to and support children, youth and families in crisis, preventative approaches to support the break in the cycle of intergenerational trauma and violence, and resourcing best practices that support our Indigenous culture.", "LAT": 45.6383081, "LON": -77.1674026 }, "geometry": { "type": "Point", "coordinates": [ -77.1674026, 45.6383081 ] } },
{ "type": "Feature", "properties": { "X": -82.3900591, "Y": 45.9176387, "Name": "Audeck-Omni-Kaning", "Partner": " Anishinabek Nation\/Union of Ontario Indians", "PartnerID": 1, "Website": " http:\/\/www.anishinabek.ca\/", "Postal_Code": " P0P 1K0", "Contact": " Family Well-Being Coordinator", "Email": " laureen.linklater@anishinabek.ca", "Phone": null, "Description": "AN\/UOI provides program coordination to Anishinabek First Nations. The vision for AN\/UOI Nations includes: maintaining a safe place for people in the community, child and youth mental health services on every First Nation to ensure a timely response to mental health crises, communities that are better equipped to respond to and support children, youth and families in crisis, preventative approaches to support the break in the cycle of intergenerational trauma and violence, and resourcing best practices that support our Indigenous culture.", "LAT": 45.9176387, "LON": -82.3900591 }, "geometry": { "type": "Point", "coordinates": [ -82.3900591, 45.9176387 ] } },
]
};


var map = L.map('map', {
        zoomSnap: 0.10,
        duration: 0.5,
        zoomControl: false
        });
map.setView([49.8062891, -84.1434475], 5.45);

 // L.tileLayer(' https://api.mapbox.com/styles/v1/lavellgis/cjdk7huor5ia52sobkizesrgf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF2ZWxsZ2lzIiwiYSI6ImNpeDZ3YnFvbzAxNHgyeXF5NDVob3VvanEifQ.2_vKfp2QtZlz70-C1Kkphw',{
 L.tileLayer('https://api.mapbox.com/styles/v1/lavellgis/cjdk7sipm3cez2rmk5v5tipfx/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF2ZWxsZ2lzIiwiYSI6ImNpeDZ3YnFvbzAxNHgyeXF5NDVob3VvanEifQ.2_vKfp2QtZlz70-C1Kkphw',{

    zoomSnap: 0.10,
    maxZoom: 18,
    // layers: [communities],
    attribution: 'Map data &copy; OpenStreetMap contributors'
}).addTo(map);


L.control.zoom({
     position:'bottomright'
}).addTo(map);


//******************************************************************************
/* general variables for the map*/
var checkclick = false;


//******************************************************************************
/* styles for the markers*/
var union = {
    name: "Union of Ontario Indians",
    fillColor: 'rgb(136, 14, 79)',
    color: '#e8eef2',
    fillOpacity: 0.9,
    radius: 5
}



//******************************************************************************
var Union = L.layerGroup().addTo(map);

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


// make array to story color values
var color = [union]



var legend = L.control({position: 'topright'});

legend.onAdd = function (map) {
    	var div = L.DomUtil.create('div', 'info legend');

    	// loop through the status values and generate a label with a coloured square for each value
color.forEach(function(item){
    console.log(item.color)
    		div.innerHTML +=
    			// <i class="circle" style="background:" +  + item.color + ></i>  + (item.radius ? item.radius + '<br>' : '+');
                `<i class="circle" style="background:${item.fillColor}"></i> ${item.name} <br>`
    	})
    	return div;
    }
    legend.addTo(map);

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

        if (feature.properties.PartnerID === 1) {
            // var circle = L.marker(latlng, {icon: greenIcon});

            var circle = L.circleMarker(latlng,  union);
            Union.addLayer(circle).addTo(map);

        } else {
            circle = L.circleMarker(latlng);
        }
            circle.on('click', function() {
                // console.log(marker.title)
                map.flyTo(latlng, 10)
                // $('#data .sidebar-header').text(feature.properties.Partner)

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
