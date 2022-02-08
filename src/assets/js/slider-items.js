$(document).ready(function() {

    /////////////////////////
    /// SLIDER #1
    /////////////////////////

    function slider1() {
        let sliderItems;

        sliderItems = new Swiper('.swiper-offers-1', {
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                470: {
                    slidesPerView: 3,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20
                }
            },
            pagination: {
                el: '.swiper-pagination',
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + '</span>';
                }
            },
            navigation: {
                nextEl: '.swiper-button-next-1',
                prevEl: '.swiper-button-prev-1',
            },
        });

        sliderItems.on('slideChange', function () {
            getNumberSlide();
            getProgressSlide();
        });

        function getNumberSlide() {
            let currentNumber = $('.catalog-item-section .num-current-1');
            let lastNumber = $('.catalog-item-section .num-last-1');

            currentNumber.html('0' + (sliderItems.realIndex +  1));
            lastNumber.html('0' + ((sliderItems.slides.length - 4) + 1));
        }

        getNumberSlide();

        function getProgressSlide() {
            let currentNumber = sliderItems.realIndex +  1;
            let lastNumber = (sliderItems.slides.length - 4) + 1;
            let perсentNumber = (currentNumber * 100) / lastNumber;
            $('.num-progress-1 > span').css('width', perсentNumber + '%');
        }

        getProgressSlide();

        function changeNumberSlide() {
            let currentNumber = $('.catalog-item-section .num-current-1');
            let lastNumber = $('.catalog-item-section .num-last-1');

            currentNumber.html('0' + (sliderItems.realIndex +  1));
            lastNumber.html('0' + ((sliderItems.slides.length - 4) + 1));
        }

        $('.catalog-item-section .swiper-button-prev-1, .catalog-item-section .swiper-button-next-1').on('click', changeNumberSlide);

        function changeProgressSlide() {
            let currentNumber = sliderItems.realIndex +  1;
            let lastNumber = (sliderItems.slides.length - 4) + 1;
            let perсentNumber = (currentNumber * 100) / lastNumber;
            $('.num-progress-1 > span').css('width', perсentNumber + '%');
        }

        $('.catalog-item-section .swiper-button-prev-1, .catalog-item-section .swiper-button-next-1').on('click', changeProgressSlide);

    }

    slider1();

    /////////////////////////
    /// SLIDER #2
    /////////////////////////

    function slider2() {
        let sliderItems;

        sliderItems = new Swiper('.swiper-offers-2', {
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                470: {
                    slidesPerView: 3,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20
                }
            },
            pagination: {
                el: '.swiper-pagination',
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + '</span>';
                }
            },
            navigation: {
                nextEl: '.swiper-button-next-2',
                prevEl: '.swiper-button-prev-2',
            },
        });

        sliderItems.on('slideChange', function () {
            getNumberSlide();
            getProgressSlide();
        });

        function getNumberSlide() {
            let currentNumber = $('.catalog-item-section .num-current-2');
            let lastNumber = $('.catalog-item-section .num-last-2');

            currentNumber.html('0' + (sliderItems.realIndex +  1));
            lastNumber.html('0' + ((sliderItems.slides.length - 4) + 1));
        }

        getNumberSlide();

        function getProgressSlide() {
            let currentNumber = sliderItems.realIndex +  1;
            let lastNumber = (sliderItems.slides.length - 4) + 1;
            let perсentNumber = (currentNumber * 100) / lastNumber;
            $('.num-progress-2 > span').css('width', perсentNumber + '%');
        }

        getProgressSlide();

        function changeNumberSlide() {
            let currentNumber = $('.catalog-item-section .num-current-2');
            let lastNumber = $('.catalog-item-section .num-last-2');

            currentNumber.html('0' + (sliderItems.realIndex +  1));
            lastNumber.html('0' + ((sliderItems.slides.length - 4) + 1));
        }

        $('.catalog-item-section .swiper-button-prev-2, .catalog-item-section .swiper-button-next-2').on('click', changeNumberSlide);

        function changeProgressSlide() {
            let currentNumber = sliderItems.realIndex +  1;
            let lastNumber = (sliderItems.slides.length - 4) + 1;
            let perсentNumber = (currentNumber * 100) / lastNumber;
            $('.num-progress-2 > span').css('width', perсentNumber + '%');
        }

        $('.catalog-item-section .swiper-button-prev-2, .catalog-item-section .swiper-button-next-2').on('click', changeProgressSlide);

    }

    slider2();
});