$(document).ready(function() {
    $ (".card").click(function(){
       $(this).toggleClass("highlight"); 
    });
    $("p").click(function(){
		$(this).children("a").css("background-color", "yellow");
   })
}); 