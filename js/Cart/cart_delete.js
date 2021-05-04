(function(){
  var start_x;   // touchstart時的水平起始位置
  var end_x;     // touchmove過程中的水平結束位置
  var touchmove = false;    // 標識是否成功觸發了touchmove，預設沒有觸發。

  // on方法事件繫結，可將事件繫結到新新增的子元素上
  $(document).on("touchstart",'.c_cart_Mobile_item',function(e){ // 觸控開始時
      if (e.originalEvent.targetTouches) {
          start_x = e.originalEvent.targetTouches[0].pageX;
      } else {
          start_x = e.pageX;
      }
//    console.log(start_x);
  });

  $(document).on("touchmove",'.c_cart_Mobile_item',function(e){ // 觸控過程中... 
      var width = $('.c_cart_Mobile_delete:first').width();   // 刪除按鈕的寬
      var left = $(this).css('left');
      if(start_x - end_x >= 5){
          touchmove = true;
      }

      if (e.originalEvent.targetTouches) {
          end_x = e.originalEvent.targetTouches[0].pageX;
      } else {
          end_x = e.pageX;
      }

      if(start_x - end_x >= 0) {  // touchmove 向左移動
          if(parseInt(left) > -width){
              $(this).css('left', end_x-start_x+'px');  // 移動效果
          }
      }else{  // 向右移動
          if(parseInt(left) <0){
              $(this).animate({left:0},500);  // 恢復原狀（動畫效果）
          }
      }
  });

  $(document).on("touchend",'.c_cart_Mobile_item',function(e){  // 觸控擡起時
      var width = $('.c_cart_Mobile_delete:first').width();   // 刪除按鈕的寬
      var offset = start_x - end_x;     // 偏移量
      if(touchmove==false) {
          return;
      }

      if( offset > 0){   // 左滑動
          if(offset>=width/2){      // 偏移量大於等於刪除按鈕的一半
              $(this).animate({left:-width+'px'},500);  // 動畫顯示刪除按鈕
          }else{
              $(this).animate({left:0},500);  // 恢復原狀
          }
      }
      touchmove = false;
  });

  $(document).on('touch', '.c_cart_Mobile_item',function(e){  // 點選主條目時，也可恢復原狀
      var width = $('.c_cart_Mobile_delete:first').width();   
      var left = $(this).css('left');
      if(parseInt(left)<0){
          $(this).animate({left:0},200);  // 恢復原狀
      }
  });

//   $(document).on('touch', '.c_cart_Mobile_delete',function(e){  // 點選刪除，刪除父元素節點
    //   $(this).parent().remove();
//   });
})();