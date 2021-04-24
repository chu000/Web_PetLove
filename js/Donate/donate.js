// 地址 JS    star
new TwCitySelector({
  el: ".city-selector", // 同 DOM querySelector()
  disabled: false,
  hasZipcode: true,
  bootstrapStyle: true,
});

//*    不寄送收據+ 特別設定外掛選擇城市也關掉

$(".c_receiptCheck").on("change", function (event) {
  //備註可用is 或 prop 而attr因為版本關係不適用
  // if ($(this).prop("checked") ==true) {
  //     alert("checked");}
  if ($(this).is(":checked") == true) {
    $(".c_receipt_dis").attr("disabled", true);
    $(".city-selector ")
      .children(".form-group")
      .children(".form-control")
      .attr("disabled", true);
  } else {
    $(".c_receipt_dis").attr("disabled", false);
    $(".form-control").attr("disabled", false);
  }
});

// *   選擇付款方式---------------------
//按鈕顏色
$(".c_donate_PayBox li").click(function () {
  $(this)
    .css("background-color", "var(--mainblue)")
    .siblings()
    .css("background-color", "var(--maingray)");
});
//各付款方式出現
$(".c_btn_credit").click(function () {
  $(".c_donate_pay_credit_box").css("display", "block");
  $(".c_donate_pay_Line_box").css("display", "none");
  $(".c_donate_atm_box").css("display", "none");
});

$(".c_btn_linePay").click(function () {
  $(".c_donate_pay_credit_box").css("display", "none");
  $(".c_donate_pay_Line_box").css("display", "block");
  $(".c_donate_atm_box").css("display", "none");
});

$(".c_btn_atm").click(function () {
  $(".c_donate_pay_credit_box").css("display", "none");
  $(".c_donate_pay_Line_box").css("display", "none");
  $(".c_donate_atm_box").css("display", "block");
});
