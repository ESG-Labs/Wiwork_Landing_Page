console.log("js loaded");
$(document).ready(function(){
    console.log("JQ loaded");
});
//Placeholder image, low to high res 
var image = document.images[1];
var loadingImage = new Image();
loadingImage.onload = function(){
    image.src = this.src;   
    $("#bgpic").css("filter", "blur(0vw)");
    $("#bgpic").css("transform", "scale(1)");
};
loadingImage.src = "Resources/background_image.jpg";


// Show/Hide navigation bar background
$(window).scroll(function(){
    
    var scrollPos = $(document).scrollTop();
    var oneThird= $("#page1").height() / 3;
    var secondThird = oneThird * 2;
    var navBarThirdState = oneThird * 4;
    

    /*console.log(height2);  600,  full height: 870*/

    console.log(
        'Current Position: ' + scrollPos + 
        ' wanted position: ' + navBarThirdState
        );

    if(scrollPos > oneThird){
        $("ul").css("background-color", "rgba(224, 142, 141, 0.95)");
        $("ul").css("text-shadow", "none");
        $("ul").css("color","white");
    }else if(scrollPos < secondThird){
        $("ul").css("background-color", "transparent");
        $("ul").css("text-shadow", "0px 1px 5px #191919");
        $("ul").css("color","white");
    }

    if(scrollPos > navBarThirdState){
        $("ul").css("background-color", "#ffffff");
        $("ul").css("color","black");
    }

});


