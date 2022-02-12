$(document).ready(function() {

    let catalogItems;

    if ($('.swiper-cat').length > 0) {
        catalogItems = new Swiper('.swiper-cat', {
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                    grid: {
                        rows: 2,
                    }
                },
                470: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                    grid: {
                        rows: 2,
                    }
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    grid: {
                        rows: 3,
                    }
                }
            },
            pagination: {
                el: '.swiper-pagination',
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + '</span>';
                }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        catalogItems.on('slideChange', function () {
            changeNumber();
            changeProgress();
        })

        function changeNumber() {
            let slidesCount = $('.section-promotional .slides-number');
            let currentNumber = $('.section-promotional .current-number');
            let lastNumber = $('.section-promotional .last-number');

            currentNumber.html('0' + (catalogItems.realIndex +  1));
            lastNumber.html('0' + (Math.ceil((catalogItems.slides.length -12 ) / 3) + 1))
        }

        changeNumber();

        $('.section-promotional .swiper-button-prev, .section-promotional .swiper-button-next').on('click', changeNumber);

        function changeProgress() {
            let currentNumber = catalogItems.realIndex +  1;
            let lastNumber = Math.ceil((catalogItems.slides.length - 12) / 3) + 1;
            let perсentNumber = (currentNumber * 100) / lastNumber;
            $('.s-progress > span').css('width', perсentNumber + '%');
        }

        changeProgress();

        $('.section-promotional .swiper-button-prev, .section-promotional .swiper-button-next').on('click', changeProgress);
    }



});