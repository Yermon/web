var toggleButton = document.getElementsByClassName('toggle-button')[0]
var navbarLinks = document.getElementsByClassName('main-nav')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')	
})
function show(){
    var btn = document.getElementById("btn").innerHTML;
    if(btn == "JOIN"){
    	document.querySelector(".screen").style.display = "flex";
        $(".screen").animate({opacity: "1"}, "slow");        
    }
    else{
        document.querySelector(".profile").style.display = "none";
        document.getElementById("btn").innerHTML = "JOIN";	
        document.getElementById("img").title = "Name";
    }
}
function login(name){
    document.getElementById("img").title = name;
    document.querySelector(".profile").style.display = "flex";
    document.getElementById("btn").innerHTML = "LOG OUT";
    close_screen();
}
function close_screen(){
    document.querySelector(".screen").style.display = "none";
    $(".screen").animate({opacity: "0"}, "slow");
    document.getElementById("username").value = "";
    document.getElementById("pass").value = "";
}
function change(){
	$(".moun").css('opacity','0');
    $(".moun").fadeTo(3000, 1);
	$(".moun1").css('opacity','0');
    $(".moun1").fadeTo(3000, 1);
    
	$("#tag1").css('opacity','0');
    $("#tag1").fadeTo(3000, 1);

    $("#tag2").css('opacity','0');
    $("#tag2").fadeTo(3000, 1);

    $(".icons").css('opacity','0');
    $(".icons").fadeTo(3000, 1);
}
function change2(){
    $(".item").css('opacity','0');
    $(".item").fadeTo(3000, 1);

}
$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
ymaps.ready(init);
function init(){ 
	var myMap = new ymaps.Map('Mymap', {
        center: [50.4269, 80.2337],
        zoom: 16
	});
	myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [50.4269, 80.2337]
            },
        }, {
            preset: 'islands#blackStretchyIcon',
            draggable: true
        })

    myMap.geoObjects
    	.add(new ymaps.Placemark([50.42789786953126, 80.23177953662771], {
            balloonContent: '№29 school',
              iconCaption: 'NOT KTL'
        }, {
            preset:'islands#blueEducationIcon',
            iconColor: '#082673',
            
        }))
        .add(new ymaps.Placemark([50.42710130996103, 80.23334220308496], {
            balloonContent: 'DORMITORY',
              iconCaption: 'SWEET HOME'
        }, {
            preset:	'islands#blueHomeIcon',
            iconColor: '#082673'
        }))
        .add(new ymaps.Placemark([50.4269, 80.2337], {
            balloonContent: 'KEYTOLIFE',
              iconCaption: 'HEART'
        }, {
            preset:'islands#blueHeartIcon',
            iconColor: '#082673',
            
        }))
        .add(new ymaps.Placemark([50.426084805142054, 80.23586049088968], {
            balloonContent: 'cafe in front of the home',
              iconCaption: 'CAFE BAKU'
        }, {
            preset: 'islands#blueFoodIcon',
            iconColor: '#082673'
        }))
    myRectangle = new ymaps.Rectangle([
        [50.42845551485178, 80.22909234675923, 50.428624354143594, 80.23662381902858],
        [50.42549220199062, 80.23733727762429, 50.425001852159475, 80.23091816334829]
    ],
		{
            balloonContent: 'AREA OF THE HOME'
        },{
        fillColor: '#7df9ff33',
        fillOpacity: 0.9,
        strokeColor: '#0000FF',
        strokeOpacity: 1,
        strokeWidth: 2,
        });

    myMap.geoObjects
        .add(myRectangle);
}