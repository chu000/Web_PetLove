


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


        //   監聽有幾個商品帶入標題
// 桌機
        $(document).ready(function() {
            // alert($(".c_itemBody tr").length);
            let r = $(".c_itemBody tr").length;
            $(".c_title_itemAmount").text(r);
        });
        // 手機
        $(document).ready(function() {
            // alert($(".c_itemBody tr").length);
            let rm = $(".c_cart_Mobile_box li").length;
            $(".c_title_mobile_itemAmount").text(rm);
        });



     
          $(".add").click(function() {
              let n = parseInt($(this).siblings(".num").val());
              //console.log(n);
              if (n === 99) {
                return false;
            }
              n++;
            //   $(this).siblings(".min").attr("disabled", false);
              $(this).siblings(".num").val(n);
              let price = $(this).parent().parent().siblings(".price").html();
              // price = price.substr(1);
              // console.log(price);
              $(this).parent().parent().siblings(".small_total").text(n * price);
   
              getSum();
          })
          $(".min").click(function() {
                  let n = parseInt($(this).siblings(".num").val());
                  //console.log(n);
                  
                  if (n === 1) {
                    // $(this).attr("disabled", true);
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
              $(".num").each(function(index) {
                // if ($(".ed").eq(index).prop("checked") == true) {
                      // count += parseInt($(".num").eq(index).val());
                      money += parseInt($(".small_total").eq(index).text());
                // }


                // -----以下這裡是我亂試
// if ($(".c_cart_Mobile_box").css('display','none') ){
//   $(".num").each(function(index) {
//           money += parseInt($(".small_total").eq(index).text());
//   })
// }else{
//   $(".num").each(function(index) {
//     money += parseInt($(".Mobile_small_total").eq(index).text());

// })
// }

              })
              // $(".num_sum").html(count);
              $(".sum").html(money);

              getBigTotal();
          }

          // 刪除商品模組
          // 點選刪除之後一定是刪除當前的商品，所以從$(this)出發
          $(".delete").click(function() {
                  //刪除的是當前的商品
                  $(this).parent().remove();


           //   監聽執行後有幾個商品帶入標題
          let r = $(".c_itemBody tr").length;
          $(".c_title_itemAmount").text(r);
                  // 手機
          let rm = $(".c_cart_Mobile_box li").length;
          $(".c_title_mobile_itemAmount").text(rm);
     
if(r===0 | rm===0){
  $(".c_cart_BIGbox").empty();
  $(".c_NOitem").show();
}
                  // $(".ed").change();
                  getSum();
                  // clearCheckAll();
                  
              })
              //刪除選定的商品:小的複選框如果選中就刪除對應的商品
          // $(".delSome").click(function() {
          //         //刪除的是選中的商品
          //         $(".ed:checked").parent().parent().remove();
          //         getSum();
          //         clearCheckAll();
          //     })
              //清空購物車
          $(".delAll").click(function() {
            $(".c_title_itemAmount").text(0);//   監聽執行後有商品帶入0


              $(".tab tbody").empty();
              $(".c_cart_BIGbox").empty();
              $(".c_NOitem").show();
              getSum();
              // clearCheckAll();

  
          })

          // function clearCheckAll() {
          //     if ($(".tab tbody")[0].innerText == '') {
          //         $(".checkAll").prop("checked", false);
          //     }
          // }


     //----------------------------毛金幣是否啟用-------------------------------- 
          $(".c_MOcoin_btn").on("change", function (event) {

            if ($(this).is(":checked") == true) {
          $('.c_MOcoin').css('color','var(--maindarkgray)')
            } else {
              $('.c_MOcoin').css('color','var(--maingray)')
             
              
            }
            getBigTotal();
          });

            //----------------------------大結算--------------------------------  
          function getBigTotal() {

     
            let money = 0; //計算總價錢
            let sum =$('.sum').text();
            let c_MOcoin = $('.c_MOcoin').text();
            if ($('.c_MOcoin_btn').is(":checked") == false) {
              c_MOcoin =0
              // console.log(c_MOcoin)
                } 
                if (sum > 999) {
                  $('.c_cut_fare').text(60)
                  money = parseInt(sum-c_MOcoin);
                    }
                     else if (0 < sum < 999){
                       $('.c_cut_fare').text(0)
                      money = parseInt(sum + 60 - c_MOcoin);
                    } else if(sum = 0){
                      money = 0
                    }

           
           
          
            $(".c_big_total").html(money);
        }











      })



 


// ---------------------------狗狗食物動畫


$(window).scroll(function () {
        

  // console.log('scollTop', $(this).scrollTop());

  let windowScrollTop = $(this).scrollTop();

 


  if (windowScrollTop > 650) {
      $('.c_dogFeed01').css('opacity', '1').css('transform', 'translateY(0px)');
  }
  else {
      $('.c_dogFeed01').css('opacity', '0').css('transform', 'translateY(-120px)');
  }

  if (windowScrollTop > 700) {
    $('.c_dogFeed02').css('opacity', '1').css('transform', 'translateY(0px)');
}
else {
    $('.c_dogFeed02').css('opacity', '0').css('transform', 'translateY(-150px)');
}


})