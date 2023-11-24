$('.header__burger').click(function (event) {
    $('.header__burger,.menu__body,.header__logo').toggleClass('active');
    $('body').toggleClass('lock');
});

if (document.querySelector('.hero__slider')) {
    const mainSlider = new Swiper(".hero__slider", {
        // modules: [Controller],
        observer: true,
        observeParents: true,
        slidesPerView: "auto",
        spaceBetween: 0,
        centeredSlides: true,
        speed: 800,
        navigation: {
            prevEl: '.hero__arrow--left',
            nextEl: '.hero__arrow--right',
        },
        on: {
            init: function (slider) {
                slider.slides.forEach(slide => {
                    const imageSrc = slide.querySelector(".slide-hero__image").getAttribute('src');
                    const topImage = `<div class="slide-hero__top-image">
                    <img src="${imageSrc}" alt="">
                </div>`;
                slide.insertAdjacentHTML('beforeend', topImage)
                });
            }
        },
        // pagination: {
        //     el: '.swiper-pagination',
        //     type: "progressbar",
        //     clickable: true,
        // },
    });
    const miniSlider =new Swiper(".hero__mini-slider", {
        // modules: [Controller],
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
        speed: 800,
        // navigation: {
        //     prevEl: '.hero__arrow--left',
        //     nextEl: '.hero__arrow--right',
        // },
        on: {
            init: function (slider) {
                slider.slides.forEach(slide => {
                    const imageSrc = slide.querySelector(".slide-hero__image").getAttribute('src');
                    const topImage = `<div class="slide-hero__top-image">
                    <img src="${imageSrc}" alt="">
                </div>`;
                slide.insertAdjacentHTML('beforeend', topImage)
                });
            }
        },
        // pagination: {
        //     el: '.swiper-pagination',
        //     type: "progressbar",
        //     clickable: true,
        // },
    });
}

