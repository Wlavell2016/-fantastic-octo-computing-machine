var fwblayer = L.geoJSON(data2, {
    pointToLayer: function(feature, latlng) {

        if (feature.properties.PartnerID === 1) {
            var circle = L.circleMarker(latlng,  allied);
            Union2.addLayer(circle);

        } else if (feature.properties.PartnerID === 2) {
            var circle = L.circleMarker(latlng,  allied);
            Allied.addLayer(circle).addTo(map);


        } else if (feature.properties.PartnerID === 14) {
            var circle = L.circleMarker(latlng, tung_inuit);
            Tung_inuit.addLayer(circle).addTo(map);

        } else {
            circle = L.circleMarker(latlng);
        }
            circle.on('click', function() {
                // console.log(marker.title)
                $('#data .sidebar-header').text(feature.properties.Partner)
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
            circle.bindPopup(feature.properties.Name )
    },
    onEachFeature: function (feature, layer) {
       feature.layer = layer;
    }        // onEachFeature: onEachFeature
});
map.addLayer(fwblayer);
