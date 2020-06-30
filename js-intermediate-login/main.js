$(document).ready(function(){
    $("#login_form").on("submit", function( event ) {
        var username = $("#user_email").val().trim();
        var password = $("#user_password").val().trim();
        if( username != "" && password != "" ){
            $.ajax({
                url:'http://localhost:3000/login',
                type:'post',
                contentType: 'application/x-www-form-urlencoded',
                data:{email:username,password:password},
                success:function(response){
                    var msg = "";
                    msg = response;
                    $("#message").html(msg);
                },
                error:function(error){
                    var msg = "";
                    msg = error.responseText;
                    $("#message").html(msg);
                }
            });
        }
        event.preventDefault();
      }); 
});