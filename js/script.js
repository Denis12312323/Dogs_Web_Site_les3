$('.header__burger').click(function (event){
    $('.header__burger,.menu__body,.header__logo').toggleClass('active');
    $('body').toggleClass('lock');
});
