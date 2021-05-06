$(document).ready(function () {
    $(".c_account_eye").click(function () {
      if (
        $(this).parent().find('.c_fast_account_password').attr("type") ==
        "text"
      ) {
        $(this).parent().find('.c_fast_account_password').attr("type", "password");
        $(this).css("opacity", 0.3);
        console.log('1')
      } else {
            $(this).parent().find('.c_fast_account_password').attr("type", "text");
        $(this).css("opacity", 1);
        console.log('2')
      }
    });
  });