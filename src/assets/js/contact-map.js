$(document).ready(function() {
    function addYaMaps () {
        var myMap;
        ymaps.ready(init);
        function init () {
            myMap = new ymaps.Map('contacts__map', {
                center: [55.650660, 37.596338],
                zoom: 16,
                controls: []
            }),
            myPlacemark = new ymaps.Placemark([55.650660, 37.596338], {
              balloonContentHeader: 'Magix Shisha | Магазин кальянов',
              balloonContentBody: "Москва, Большая Юшуньская 1Ак4",
              balloonContentFooter: "+7 (925) 603-78-22<br>+7 (926) 263-02-69<br>info@magixkalyan.ru",
          }, {
              iconLayout: 'default#image',
              iconImageHref: 'assets/images/map-marker-edited.png',
              iconImageSize: [28, 37],
              iconImageOffset: [-37, -45]
          });
          myMap.geoObjects.add(myPlacemark);
        }
      }
      addYaMaps ();
});