$(document).ready(function () {
    let error = false
    $("#login").click(function () {




        var email = $('#email').val();
        var password = $('#password').val();

        $(".error").remove();


        if (email.length < 1) {
            $('#email').before('<span class="error">This field is required</span>');
            error=true;
        } else {
            var regEx = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
            var validEmail = regEx.test(email);
            if (!validEmail) {
                $('#email').before('<span class="error">Enter a valid email</span>');
                error=true;

            }
        }
        if (password.length < 8) {
            $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
            error=true;
        }
        

    
    });


    if (!error) {
        console.log(error)

        localStorage.setItem("username", email);
        localStorage.setItem("password", password);


    }

});


