$(document).ready(function(e) {
    var val_holder
    $("#submit").click(function (e) {
        e.preventDefault();
        val_holder = 0;
        var email_id = $("#email").val().trim();
        var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (email_id == "") {
            $(".response").text("Insira uma ID de email válida!");
            val_holder = 1;
        }

        if (email_id != "") {
            if (!email_regex.test(email_Id)) {
                $(".response").text("Por favor insira um email valido!");
                val_holder = 1;

            }
        }

        if (val_holder == 0) {
            var datastring = 'email=' + email_id;
            $.ajax({
                type: 'POST',
                url: 'submit.php',
                data: datastring,
                dataType: "json",
                beforeSend: function () {
                    $(".response").text("Carregando...");
                },
                success: function (data) {
                },
                complete: function () {
                }
            });
        }
    }
        
        
    })
    
  