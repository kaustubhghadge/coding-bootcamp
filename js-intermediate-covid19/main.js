$(document).ready(function(){
$('.btn').click(function() {  
  $.ajax({
    type:"GET",
    contentType: "application/json",
    url:"https://api.covid19api.com/summary",
    success: function(data) {
      var trHTML='';
      var countries = [];
      countries = data.Countries; 
      Object.values(countries).forEach(country => {
        trHTML += '<tr><td><strong>' + country.Country+'</strong></td><td><span class="label label-success">'+country.TotalConfirmed +'</span></td></tr>'
      });
      $('#country-list').html(trHTML); 
    },
  });
});
});