$(document).ready(function() {
    let priceSlider = $("#priceSlider");

    if (priceSlider.length > 0) {
        $("#priceSlider").slider({
            animate: "slow",
            range: true,
            values: [ 0, 100 ],
            slide : function(event, ui) {
                $("#result-min").text(ui.values[ 0 ]);
                $("#result-max").text(ui.values[ 1 ]);
            }
        });

        $( "#result-min" ).text($("#priceSlider").slider("values", 0));
        $( "#result-max" ).text($("#priceSlider").slider("values", 1));
    }

    $('.aside__filter').on('click', function() {
        $(this).find('ul[class^=filter__], .filter__price').slideToggle();
        $(this).toggleClass('opened');
    });

    $('.mobile__filter-btn').on('click', function() {
        $('.aside__block').addClass('opened');
        $('body').addClass('menu-layer');
        $('.aside-menu-layer').addClass('active');
    });

    $('.aside__head').on('click', function() {
        $('.aside__block').removeClass('opened');
        $('body').removeClass('menu-layer');
        $('.aside-menu-layer').removeClass('active');
    });

    $('html').click(function(e) {
        if (!$(e.target).closest('.aside__block.opened').length && !$(e.target).closest('.mobile__filter-btn').length) {
            $('.aside__block').removeClass('opened');
            $('body').removeClass('menu-layer');
            $('.aside-menu-layer').removeClass('active');
        }
    });

});