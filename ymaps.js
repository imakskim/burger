ymaps.ready(init);

var placemarks = [
    {
        latitude: 59.895957564218754,
        longitude: 30.423136,
        hintContent: '<div class="map__hint">ул.Бабушкина, д.12/1</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="/img/map/burger.png" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Все к нам: ул.Бабушкина, д.12/1',
            '</div>'
        ]
    },
    {
        latitude: 59.96664339504767,
        longitude: 30.31141564067261,
        hintContent: '<div class="map__hint">Каменноостровский просп., 37Д</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="/img/map/burger.png" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Все к нам: Каменноостровский просп., 37Д',
            '</div>'
        ]
    }
],
    geoObjects = [];

function init() {
    var myMap = new ymaps.Map("map", {
        center: [59.92, 30.30],
        zoom: 10,
        controls: ['zoomControl'],
        behaviors: ['drag'],
    });


    for (var i = 0; i < placemarks.length; i++) {
        geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent.join('')
            },
            {
                iconLayout: 'default#image',
                iconImageHref: './img/map/map_sprite.png',
                iconImageSize: [46, 57],
                iconImageOffset: [-23, -57],
                iconImageClipRect: [[415, 0], [461, 57]]
            });
    }

    var clusterer = new ymaps.Clusterer({
        clusterIcons: [{
            href: 'img/map/burger.png',
            size: [100, 100],
            offset: [-50, -50]
        }
        ],
        clusterIconContentLayout: null
    });

    myMap.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
}