$("<span></span>").attr("id", "Gram").text("My Gram").appendTo("#MainContainerDiv");
$("<button></button>").attr("id", "LoginButton").text("Log In").appendTo("#MainContainerDiv");
$("<button></button>").attr("id", "SignupButton").text("Sign Up").appendTo("#MainContainerDiv");
$("</br>").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "Image1").text("Image 1").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "Image2").text("Image 2").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "Image3").text("Image 3").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "Image4").text("Image 4").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "Image5").text("Image 5").appendTo("#MainContainerDiv");
$("</br>").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "About").text("About").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "Blog").text("Blog").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "Jobs").text("Jobs").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "Help").text("Help").appendTo("#MainContainerDiv");
$("</br>").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "English").text("English").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "2021").text("2021").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "MyGram").text("MyGram").appendTo("#MainContainerDiv");
$("</br>").appendTo("#MainContainerDiv");
$("#SignupButton").click(function () {
    $("#UserInputForm").show();
});
$("#LoginButton").click(function () {
    alert("You have successfully logged in!");
});

$("#UserInputForm").hide();

$(document).ready(function () {
    $('form[name="UserInputForm"]').validate({
        rules: {
            User: "required",
            Password: "required"
        },
        messages: {
            User: "User is required",
            Password: "Password is required"
        },
        submitHandler: function(form) {
            var user = $("#User").val();
            var password = $("#Password").val();

            $.when($.ajax({
                url: "/Home/Register",
                type: "POST",
                data: {
                    User: user,
                    Password: password
                },
                datatype: "json"
            })).then(function (data) {
                if (data != null && data.registerMessage!="") {
                    $.toast({
                        heading: "Success",
                        text: data.registerMessage,
                        icon: "success",
                        loader: true,
                        loaderBg: "blue"
                    });
                }
            });
        }
    });
});