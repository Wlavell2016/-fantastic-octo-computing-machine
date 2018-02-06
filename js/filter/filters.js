

$('.accordion').accordion({
    "transitionSpeed": 400
});
// var data = data3
// console.log(data)
// $(document).ready(function() {
    console.log("ready!");

    /// making partner object
    function Partner(name, location, service) {
        this.name = name;
        this.location = [location];
        this.service = [service];
    };
    /// making partner object
    ///********************************************************
    var container = []
        // iterate through gejson stored above

        data3.features.forEach(function(center) {
            // create a partner object
            //var check1 = false;
            var objectIndex = -1;
            container.forEach(function(partners, index) {
                // console.log(partners.name)
                // this function below is supposed to check if the value is present in the array of objects but something doesnt work.
                if (partners.name == center.properties.Partner) {
                    // console.log("DOES EXIST IN LOOP");
                    objectIndex = index;
                    //break;
                    //check1 = true;
                } else {
                    // console.log("DOES NOT EXIST IN LOOP");
                }
            })
            if (objectIndex == -1) {
                // console.log("DOES NOT EXIST");
                var object = new Partner(center.properties.Partner, center.properties.Name);
                container.push(object)
            } else {
                // console.log("EXISTS");
                container[objectIndex].location.push(center.properties.Name);
            };

        });


// console.log(container);
var count = 0
container.forEach(function(item) {
    var name = count.toString()
    $("#sidebar #profile .filter_container").append(
        `<div class="accordion">
        <div class="accordion-section">
        <a class="accordion-section-title"  href="#accordion-${name}"> NAME: ${item.name}</a>
        <div id="accordion-${name}" class="accordion-section-content">
        </div>
        </div>`
    );
    var locationArray = item.location
    item.location.forEach(function(location) {
        $("#accordion-" + name).append(`<p>${location}</p>`);
    })
    count += 1
});

$('.accordion-section p').click(function(e){
    var location = $(this).text();
    var latlng = findLatLng(location, data3);
    map.flyTo(latlng, 10)
});



function findLatLng(location, data){
    var feature = data.features.find(function(feature) {
        return feature.properties.Name === location
})
return [feature.properties.Y, feature.properties.X]
};


// function search(nameKey, myArray){
//     for (var i=0; i < myArray.length; i++) {
//         if (myArray[i].name === nameKey) {
//             return myArray[i];
//         }
//     }
// }

// function flyToStore(currentFeature) {
// map.flyTo({
// center: feature.properties.coordinates,
// zoom: 15
// });
// }


$(document).ready(function() {
function close_accordion_section() {
$('.accordion .accordion-section-title').removeClass('active');
$('.accordion .accordion-section-content').slideUp(300).removeClass('open');
}

$('.accordion-section-title').click(function(e) {

// Grab current anchor value
var currentAttrValue = $(this).attr('href');
if($(e.target).is('.active')) {
close_accordion_section();
}else {
close_accordion_section();
// Add active class to section title
$(this).addClass('active');
// Open up the hidden content panel
$('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
}
e.preventDefault();
});


});
