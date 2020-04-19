$(document).ready(function(){
    $("#but_submit").click(function(){
        var username = $("#txt_uname").val().trim();
        var password = $("#txt_pwd").val().trim();

        if( username != "" && password != "" ){
            $.ajax({
                url:'http://localhost:3000/v1/user/login',
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
    });
});