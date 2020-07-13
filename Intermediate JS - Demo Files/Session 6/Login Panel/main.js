$(document).ready(function(){
$(".btn-slide").click(function(){
$("#slide-panel").slideToggle("slow", function(){
    console.log("Slide Down Complete!")
});
});
});