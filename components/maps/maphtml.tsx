export const Maphtml = (
    `
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>OS Maps API | Basic Map ZXY (EPSG:3857) | OpenLayers</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/OrdnanceSurvey/os-api-branding@0.3.1/os-api-branding.css" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v10.0.0/ol.css" />
                <style>
                    body {margin:0; padding:0; }
                    #map {position:absolute; top:0; bottom:0; width:100%; }
                </style>
            </head>
            <body>

                <div id="map"></div>

                <script src="https://cdn.jsdelivr.net/gh/OrdnanceSurvey/os-api-branding@0.3.1/os-api-branding.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/ol@v10.0.0/dist/ol.js"></script>
                <script>

                    const apiKey = 'MZi6BzbnclSRTCbfBQzwDWwdKrr0JNeg';

                    // Initialize the map object.
                    const map = new ol.Map({
                        layers: [
                    new ol.layer.Tile({
                        source: new ol.source.XYZ({
                        url: 'https://api.os.uk/maps/raster/v1/zxy/Light_3857/{z}/{x}/{y}.png?key=' + apiKey
                        })
                    })
                    ],
                    target: 'map',
                    view: new ol.View({
                        projection: 'EPSG:3857',
                    extent: ol.proj.transformExtent([ -10.76418, 49.528423, 1.9134116, 61.331151 ], 'EPSG:4326', 'EPSG:3857'),
                    minZoom: 7,
                    maxZoom: 20,
                    center: ol.proj.fromLonLat([ -2.968, 54.425 ]),
                    zoom: 14
                })
            });

                </script>

            </body>
        </html> 
        `
)
