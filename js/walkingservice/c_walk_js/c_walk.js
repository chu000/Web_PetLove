// 狗狗size
$(".c_dogsize_each").click(function () {
  $(this)
    .css("color", "var(--mainblue)")
    .css("transform", "scale(1.2)")
    .siblings()
    .css("color", "var(--maindarkgray)")
    .css("transform", "scale(1)");

  $(this).children("svg").css("stroke", "var(--mainblue)");
  $(this).siblings().children("svg").css("stroke", "var(--maindarkgray)");
});

//修改第一欄表單-----------------------------

$(".c_walk_reset_btn").on("change", function (event) {
  //備註可用is 或 prop 而attr因為版本關係不適用
  // if ($(this).prop("checked") ==true) {
  //     alert("checked");}
  if ($(this).is(":checked") == true) {
    $(".c_receipt_dis").attr("disabled", false);
    $(".c_receipt_dis").css("color", "var(--maindarkgray)");
    $(".form-control").attr("disabled", false);

  } else {
    $(".c_receipt_dis").attr("disabled", true);
    $(".c_receipt_dis").css("color", "rgb(158, 158, 158)");

   
  }
});

// $(document).ready(function(){
//   $(".c_walk_reset_btn").toggle(
//     function () {
    
//         $(".c_receipt_dis").attr("disabled", true);
//         $(".c_receipt_dis").css("color", "rgb(158, 158, 158)");
//         $(".c_walk_reset_btn").css("color", "var(--maingray)");
//         $(".c_walk_reset_btn").show();
//     },
//     function () {
    
//         $(".c_receipt_dis").attr("disabled", false);
//     $(".c_receipt_dis").css("color", "var(--maindarkgray)");
//     $(".form-control").attr("disabled", false);
//     $(".c_walk_reset_btn").css("color", "var(--mainblue)");
//     $(".c_walk_reset_btn").show();
    
//     }
//   );
// });
