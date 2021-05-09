
// 狗狗size
$(".c_dogsize_each").click(function () {
  $(this)
    .css("color","var(--mainblue)").css("transform", "scale(1.2)")
    .siblings()
    .css("color", "var(--maindarkgray)").css("transform", "scale(1)");
   
  $(this).children('svg')
    .css("stroke", "var(--mainblue)");
    $(this).siblings().children('svg')
    .css("stroke", "var(--maindarkgray)");
    
});
