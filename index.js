$(document).ready(function(){
$('.form-submit').click(function(e) {
    console.log("clicked");
    e.preventDefault();
    var first_name = $('.firstName').val(); 
    var last_name = $('.lastName').val(); 
    var email = $('.email').val() ;
    var password = $('.password').val() ;


    $('.firstName').removeClass("inputError");
    $('.lastName').removeClass("inputError");
    $('.email').removeClass("inputError");
     $('.password').removeClass("inputError");
    $(".error").remove();
    
    if (first_name.length < 1) {
      $('.firstName').addClass("inputError").after('<span class="error">First Name cannot be empty</span>');
    }
    if (last_name.length < 1) {
      $('.lastName').addClass("inputError").after('<span class="error">Last Name cannot be empty</span>');
    }
    if (email.length < 1) {
      $('.email').addClass("inputError").after('<span class="error">Email cannot be empty</span>');
    } else {
      var regEx = /[^@]+@[^\.]+\..+/g;
       var validEmail = regEx.test(email);
       if (!validEmail) {
         $('.email').addClass("inputError").after('<span class="error">Looks like this is not an email</span>');
       }
    }
    if (password.length < 1) {
      $('.password').addClass("inputError").after('<span class="error">Password cannot be empty</span>');
    }
  });
 
});


 