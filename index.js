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
      $('.firstName').addClass("inputError").after('<span class="error">This field is required</span>');
    }
    if (last_name.length < 1) {
      $('.lastName').addClass("inputError").after('<span class="error">This field is required</span>');
    }
    if (email.length < 1) {
      $('.email').addClass("inputError").after('<span class="error">This field is required</span>');
    } else {
      var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
    //   var validEmail = regEx.test(email);
    //   if (!validEmail) {
    //     $('.email').addClass("inputError").after('<span class="error">Enter a valid email</span>');
    //   }
    }
    if (password.length < 8) {
      $('.password').addClass("inputError").after('<span class="error">Password must be at least 8 characters long</span>');
    }
  });
 
});


 