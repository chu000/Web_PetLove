// 地址 JS    star
new TwCitySelector({
  el: ".city-selector", // 同 DOM querySelector()
  disabled: false,
  hasZipcode: true,
  bootstrapStyle: true,
});

//不寄送收據+ 特別設定外掛選擇城市也關掉-----------------------------

$(".c_receiptCheck").on("change", function (event) {
  //備註可用is 或 prop 而attr因為版本關係不適用
  // if ($(this).prop("checked") ==true) {
  //     alert("checked");}
  if ($(this).is(":checked") == true) {
    $(".c_receipt_dis").attr("disabled", true);
    $(".c_receipt_dis").css("color", "rgb(158, 158, 158)");
    $(".city-selector ")
      .children(".form-group")
      .children(".form-control")
      .attr("disabled", true);
  } else {
    $(".c_receipt_dis").attr("disabled", false);
    $(".c_receipt_dis").css("color", "var(--maindarkgray)");
    $(".form-control").attr("disabled", false);
  }
});

//    同捐助姓名勾選--------------------------

$(".c_sameName01").on( "change",function (event) {
  let j = $('.c_fast_donationNAME').val();

  if ($(this).is(":checked") == true) {

 $('.c_fast_receiptNAME').val(j)
  }
});
$(".c_sameName02").on( "change",function (event) {
  let j = $('.c_fast_donationNAME').val();

  if ($(this).is(":checked") == true) {

 $('.c_fast_addressNAME').val(j);
  }
});





// *   選擇付款方式---------------------------
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





//愛心捐購物車加總------------------------------------------

// ****************************************************************

//裡面三個小的複選按鈕選中狀態跟著 全選按鈕走
        //因為checked是複選框的固有屬性，此時利用prop（）獲取和設定該屬性
        $(function() {
          getSum();
          // $(".checkAll").change(function() {
          //         // console.log($(this).prop("checked"));//全選按鈕的狀態
          //         $(".ed,.checkAll").prop("checked", $(this).prop("checked"));
          //         getSum();
          //         if ($(".ed,.checkAll").prop("checked")) {
          //             //如果全選，讓所有商品新增類名（背景顏色）
          //             $(".tab tbody").children().addClass("current");
          //         } else {
          //             $(".tab tbody").children().removeClass("current");
          //         }
          //     })
          //     //如果所有小按鈕的個數都被選了，全選按鈕就選上，如果小按鈕沒有被選上，則全選按鈕就不選上
          //     //：checked選擇器，查詢本選中的表單元素
          // $(".ed").change(function() {
          //     // console.log($(".ed:checked").length);//小複選框選中的個數
          //     // console.log($(".ed").length);
          //     //console.log($(this).prop("checked"));
          //     if ($(".ed:checked").length === $(".ed").length) {
          //         $(".checkAll").prop("checked", true);
          //     } else {
          //         $(".checkAll").prop("checked", false);
          //     }
          //     getSum();
          //     if ($(this).prop("checked")) {
          //         $(this).parents("tr").addClass("current");
          //     } else {
          //         $(this).parents("tr").removeClass("current");
          //     }
          // })

          $(".add").click(function() {
              let n = parseInt($(this).siblings(".num").val());
              //console.log(n);
              if (n === 99) {
                return false;
            }
              n++;
              $(this).siblings(".num").val(n);
              let price = $(this).parent().parent().siblings(".price").html();
              // price = price.substr(1);
              console.log(price);
              $(this).parent().parent().siblings(".small_total").text(n * price);
   
              getSum();
          })
          $(".min").click(function() {
                  let n = parseInt($(this).siblings(".num").val());
                  //console.log(n);
                  if (n === 0) {
                      return false;
                  }
                  n--;
                  $(this).siblings(".num").val(n);
                  let price = $(this).parent().parent().siblings(".price").html();
                  // price = price.substr(1);
                  //console.log(price);
                  $(this).parent().parent().siblings(".small_total").text(n * price);
                  getSum();
              })
              //使用者也可以直接修改表單num裡面的值（小bug），同樣計算小計
          $(".num").change(function() {
              let n = $(this).val();
              let price = $(this).parent().siblings(".price").html();
              // price = price.substr(1);
              $(this).parent().siblings(".small_total").text(n * price);
              getSum();
          })

          function getSum() {
              let count = 0; //計算總件數
              let money = 0; //計算總價錢
    //$(".num").each(function(index) {
    // if ($(".ed").eq(index).prop("checked") == true) {
    // count += parseInt($(".num").eq(index).val());
    //       money += parseInt($(".small_total").eq(index).text());
    // }

    // -----以下這裡是我亂試
    var isMobileDisplay = $(".c_donate_mobile_foodBOX").css("display");
    if (isMobileDisplay == "none") {
      // console.log("yaya");
      $(".c_donate_foodBOX")
        .find(".num")
        .each(function (index) {
          money += parseInt($(".c_donate_foodBOX")
          .find(".small_total").eq(index).text());
        });
    } else {
      // console.log("55");
      $(".c_donate_mobile_foodBOX")
        .find(".num")
        .each(function (index) {
          money += parseInt($(".c_donate_mobile_foodBOX")
          .find(".small_total").eq(index).text());
          // console.log(money);
        });
    }

    // })
              // $(".num_sum").html(count);
              $(".sum").html(money);
          }

          //刪除商品模組
          //點選刪除之後一定是刪除當前的商品，所以從$(this)出發
          // $(".delete").click(function() {
          //         //刪除的是當前的商品
          //         $(this).parent().remove();
          //         $(".ed").change();
          //         getSum();
          //         clearCheckAll();
          //     })
          //     //刪除選定的商品:小的複選框如果選中就刪除對應的商品
          // $(".delSome").click(function() {
          //         //刪除的是選中的商品
          //         $(".ed:checked").parent().parent().remove();
          //         getSum();
          //         clearCheckAll();
          //     })
          //     //清空購物車
          // $(".delAll").click(function() {
          //     $(".tab tbody").empty();
          //     getSum();
          //     clearCheckAll();
          // })

          // function clearCheckAll() {
          //     if ($(".tab tbody")[0].innerText == '') {
          //         $(".checkAll").prop("checked", false);
          //     }
          // }
      })