$("#sign-in").submit(function(e) {  //указать вашу форму
    e.preventDefault(); // отменит перезагрузку
    let data = {};
    data.csrfmiddlewaretoken = $('#sign-in [name="csrfmiddlewaretoken"]').val();
    data.username = $('#sign-in [name="username"]').val();
    data.password = $('#sign-in [name="password"]').val();
    $.ajax({
        type: "POST",
        url: $(this).attr('action'),
        data: data, // вся информация с формы
        success: function(data) { 
            if (data.is_authenticated == false) {
                console.log(data.errors)
                if (data.errors) {
                    $('#info-sign-in').html('<p style="color: red; text-align:center;" id="errors"> ' + data.errors.__all__ + ' </p>')
                } else {
                    $('#errors').remove()
                    window.location.href = '/'
                }               
            } else {
                $('#info-sign-in').html('<p style="color: red" id="is_authenticated">Вы уже зарегистрированы!</p>')
                window.location.href = '/'
            }
        }
    });
});

$("#sign-up").submit(function(e) {  //указать вашу форму
    e.preventDefault(); // отменит перезагрузку
    let data = {};
    data.csrfmiddlewaretoken = $('#sign-up [name="csrfmiddlewaretoken"]').val();
    data.username = $('#sign-up [name="username"]').val();
    data.email = $('#sign-up [name="email"]').val();
    data.password1 = $('#sign-up [name="password1"]').val();
    data.password2 = $('#sign-up [name="password2"]').val();
    $.ajax({
        type: "POST",
        url: $(this).attr('action'),
        data: data, // вся информация с формы
        success: function(data) { 
            if (data.success) {
                $('#errors_username').remove()
                $('#errors_email').remove()
                $('#errors_password').remove()
                window.location.href = '/'
            } else {               
                if (data.errors) {
                    if (data.errors.username) {
                        $('#info-sign-up').html('<p style="color: red" id="errors_username"> ' + data.errors.username + ' </p>')
                    }
                    if (data.errors.email) {
                        $('#info-sign-up').html('<p style="color: red" id="errors_email"> ' + data.errors.email + ' </p>')
                    }
                    if (data.errors.password2) {
                        $('#info-sign-up').html('<p style="color: red" id="errors_password"> ' + data.errors.password2 + ' </p>')
                    }
                }
            }
        }
    });
});