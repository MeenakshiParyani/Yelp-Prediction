function a() {
var wifi = document.getElementById('sel1');
var meal = document.getElementById('sel2');
var ambience = document.getElementById('sel3');
var bikeparking = document.getElementById('sel4');
var wheelchair = document.getElementById('sel5');
var price = document.getElementById('sel6');
var alcohol = document.getElementById('sel7');
var noiselevel = document.getElementById('sel8');
var caters = document.getElementById('sel9');
var businessparking = document.getElementById('sel10');

request[58] = wifi.options[wifi.selectedIndex].value;
for (var i=0,j=0;i<meal.options.length;i++) {
    if(meal.options[i].selected == true) {
        request[meal.options[i].value] = "1";
    }
}
for (var i=0,j=0;i<ambience.options.length;i++) {
    if(ambience.options[i].selected == true) {
        request[ambience.options[i].value] = "1";
    }
}
request[18] = bikeparking.options[bikeparking.selectedIndex].value;
request[57] = wheelchair.options[wheelchair.selectedIndex].value;
request[52] = price.options[price.selectedIndex].value;
request[0] = alcohol.options[alcohol.selectedIndex].value;
for (var i=0,j=0;i<noiselevel.options.length;i++) {
    if(noiselevel.options[i].selected == true) {
        request[noiselevel.options[i].value] = "1";
    }
}
request[26] = caters.options[caters.selectedIndex].value;
for (var i=0,j=0;i<businessparking.options.length;i++) {
    if(businessparking.options[i].selected == true) {
        request[businessparking.options[i].value] = "1";
    }
}

console.log(request)
        $.ajax({
            url: 'http://10.0.0.4:8000/app',
            data: request,
            type: 'POST',
            success: function(response) {
                console.log(response);
            },
            error: function(error) {
                console.log(error);
            }
        });

return false;
}

var request = new Array(60).fill("0");