$('.l_hotel_name1').click(function () {

    let hotelName = $(this).html();

    $('.l_hotel_name').html(hotelName);
})
$('.l_hotel_name2').click(function () {

    let hotelName = $(this).html();

    $('.l_hotel_name').html(hotelName);
})
$('.l_hotel_name3').click(function () {

    let hotelName = $(this).html();

    $('.l_hotel_name').html(hotelName);
})






$('.l_hotel_name1').click(function () {

    $('.l_woof_detail').show();
    $('.l_mumao_detail').hide();
    $('.l_sonemore_detail').hide();

});

$('.l_hotel_name2').click(function () {

    $('.l_woof_detail').hide();
    $('.l_mumao_detail').show();
    $('.l_sonemore_detail').hide();
});
$('.l_hotel_name3').click(function () {

    $('.l_woof_detail').hide();
    $('.l_mumao_detail').hide();
    $('.l_sonemore_detail').show();

});




// webite
$('.l_woof').click(function () {
    $('.l_mumao').removeClass('button_color');
    $('.l_sonemore').removeClass('button_color');
    $('.l_woof').addClass('button_color');


});
$('.l_sonemore').click(function () {
    $('.l_mumao').removeClass('button_color');
    $('.l_woof').removeClass('button_color');
    $('.l_sonemore').addClass('button_color');


});
$('.l_mumao').click(function () {
    $('.l_sonemore').removeClass('button_color');
    $('.l_woof').removeClass('button_color');
    $('.l_mumao').addClass('button_color');


});