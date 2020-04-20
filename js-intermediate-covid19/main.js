$(document).ready(function(){
$('.btn').click(function() {
  
  $('.text').text('loading . . .');
  
  $.ajax({
    type:"GET",
    contentType: "application/json",
    url:"https://api.covid19api.com/summary",
    success: function(data) {
      $('.text').text(JSON.stringify(data));
    },
  });
  
});
});