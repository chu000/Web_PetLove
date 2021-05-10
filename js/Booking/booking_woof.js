
$(document).ready(function () {
    $('.l_slider').bxSlider({
        mode: 'fade',
        auto: true,
        pause: 1900
    });

});
$('.l_btn_dog').click(function () {
    $('.l_btn_cat').removeClass('button_color');
    $('.l_btn_dog').addClass('button_color');
    $('.l_dog_room').fadeIn(1000);
    $('.l_cat_room').hide();

});
$('.l_btn_cat').click(function () {
    $('.l_btn_dog').removeClass('button_color');
    $('.l_btn_cat').addClass('button_color');
    $('.l_dog_room').hide();

    $('.l_cat_room').fadeIn(1000);


});

// _mobile
$('.l_btn_dog_mobile').click(function () {
    $('.l_btn_dog_mobile').css('background-color', '#F9DD83');
    $('.l_btn_cat_mobile').css('background-color', 'white');

    $('.l_dog_room_mobile').css('opacity', '1').css('transition', '.5s');
    $('.l_cat_room_mobile').hide();
    $('.l_dog_room_mobile').fadeIn();
    $('.l_medical_title_mobile').css('margin-top', '100px')

});
$('.l_btn_cat_mobile').click(function () {
    $('.l_btn_cat_mobile').css('background-color', '#F9DD83');
    $('.l_btn_dog_mobile').css('background-color', 'white');

    $('.l_dog_room_mobile').hide();
    $('.l_cat_room_mobile').show().css('top', '0px');


});




