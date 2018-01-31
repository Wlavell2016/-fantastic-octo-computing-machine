var mcg = L.markerClusterGroup(),
		group1 = L.featureGroup.subGroup(mcg),// use `L.featureGroup.subGroup(parentGroup)` instead of `L.featureGroup()` or `L.layerGroup()`!
		group2 = L.featureGroup.subGroup(mcg),
		group3 = L.featureGroup.subGroup(mcg),
		group4 = L.featureGroup.subGroup(mcg),
		control = L.control.layers(null, null, { collapsed: false }),
		i, a, title, marker;

	mcg.addTo(map);

	for (i = 0; i < fullCount; i++) {
		a = addressPoints[i];
		title = a[2];
		marker = L.marker([a[0], a[1]], { title: title });
		marker.bindPopup(title);

		marker.addTo(i < quarterCount ? group1 : i < quarterCount * 2 ? group2 : i < quarterCount * 3 ? group3 : group4);
	}

	control.addOverlay(group1, 'First quarter');
	control.addOverlay(group2, 'Second quarter');
	control.addOverlay(group3, 'Third quarter');
	control.addOverlay(group4, 'Fourth quarter');
	control.addTo(map);

	group1.addTo(map); // Adding to map now adds all child layers into the parent group.
	group2.addTo(map);
	group3.addTo(map);
	group4.addTo(map);


	// Set-up buttons.

	document.getElementById("add").addEventListener("click", function () {
		map.addLayer(mcg);
	});

	document.getElementById("remove").addEventListener("click", function () {
		map.removeLayer(mcg);
	});
