Template.customerRequest.rendered = function(){
    // Move modal to body
    // Fix Bootstrap backdrop issue with animation.css
    $('.modal').appendTo("body");

    // Initialie clockpicker
    $('.clockpicker').clockpicker();
};

validateForm = function() {

}

storeRequest = function(name, uoid, phone, pickup, dropoff, riders, pickupTime) {
  Pending.insert({
    name: name,
    phone: phone,
    uoid: uoid,
    pickup: pickup,
    dropoff: dropoff,
    riders: riders,
    pickupTime: pickupTime,
    createdTime: moment().format('h:mm a')
  });
}
