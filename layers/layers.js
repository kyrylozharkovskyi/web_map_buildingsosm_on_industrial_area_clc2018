ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2180").setExtent([632938.985001, 493501.369961, 640493.873691, 497236.004629]);
var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">©Kyrylo Zharkovskyi / Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
                //url: 'https://api.maptiler.com/maps/streets-dark/256/{z}/{x}/{y}.png?key=dszcl5zmUN8Dedg5DgCM'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">©Kyrylo Zharkovskyi / Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_DarkMatter_2 = new ol.layer.Tile({
            'title': 'Dark Matter',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">©Kyrylo Zharkovskyi / Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://api.maptiler.com/maps/streets-dark/256/{z}/{x}/{y}.png?key=dszcl5zmUN8Dedg5DgCM'
            })
        });
var format_osm_building_dump_2023_3 = new ol.format.GeoJSON();
var features_osm_building_dump_2023_3 = format_osm_building_dump_2023_3.readFeatures(json_osm_building_dump_2023_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2180'});
var jsonSource_osm_building_dump_2023_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_osm_building_dump_2023_3.addFeatures(features_osm_building_dump_2023_3);
var lyr_osm_building_dump_2023_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_osm_building_dump_2023_3, 
                style: style_osm_building_dump_2023_3,
                interactive: true,
    title: 'osm_building_dump_2023<br />\
    <img src="styles/legend/osm_building_dump_2023_3_0.png" /> 12<br />\
    <img src="styles/legend/osm_building_dump_2023_3_1.png" /> allotment_house<br />\
    <img src="styles/legend/osm_building_dump_2023_3_2.png" /> amphitheatre<br />\
    <img src="styles/legend/osm_building_dump_2023_3_3.png" /> apartments<br />\
    <img src="styles/legend/osm_building_dump_2023_3_4.png" /> barn<br />\
    <img src="styles/legend/osm_building_dump_2023_3_5.png" /> bridge<br />\
    <img src="styles/legend/osm_building_dump_2023_3_6.png" /> bungalow<br />\
    <img src="styles/legend/osm_building_dump_2023_3_7.png" /> cabin<br />\
    <img src="styles/legend/osm_building_dump_2023_3_8.png" /> carport<br />\
    <img src="styles/legend/osm_building_dump_2023_3_9.png" /> chapel<br />\
    <img src="styles/legend/osm_building_dump_2023_3_10.png" /> chimney<br />\
    <img src="styles/legend/osm_building_dump_2023_3_11.png" /> church<br />\
    <img src="styles/legend/osm_building_dump_2023_3_12.png" /> civic<br />\
    <img src="styles/legend/osm_building_dump_2023_3_13.png" /> commercial<br />\
    <img src="styles/legend/osm_building_dump_2023_3_14.png" /> construction<br />\
    <img src="styles/legend/osm_building_dump_2023_3_15.png" /> container<br />\
    <img src="styles/legend/osm_building_dump_2023_3_16.png" /> convent<br />\
    <img src="styles/legend/osm_building_dump_2023_3_17.png" /> corridor<br />\
    <img src="styles/legend/osm_building_dump_2023_3_18.png" /> data_center<br />\
    <img src="styles/legend/osm_building_dump_2023_3_19.png" /> detached<br />\
    <img src="styles/legend/osm_building_dump_2023_3_20.png" /> dormitory<br />\
    <img src="styles/legend/osm_building_dump_2023_3_21.png" /> education<br />\
    <img src="styles/legend/osm_building_dump_2023_3_22.png" /> electricity<br />\
    <img src="styles/legend/osm_building_dump_2023_3_23.png" /> elevator_housing<br />\
    <img src="styles/legend/osm_building_dump_2023_3_24.png" /> factory<br />\
    <img src="styles/legend/osm_building_dump_2023_3_25.png" /> farm<br />\
    <img src="styles/legend/osm_building_dump_2023_3_26.png" /> farm_auxiliary<br />\
    <img src="styles/legend/osm_building_dump_2023_3_27.png" /> fire_station<br />\
    <img src="styles/legend/osm_building_dump_2023_3_28.png" /> foundations<br />\
    <img src="styles/legend/osm_building_dump_2023_3_29.png" /> garage<br />\
    <img src="styles/legend/osm_building_dump_2023_3_30.png" /> garages<br />\
    <img src="styles/legend/osm_building_dump_2023_3_31.png" /> gatehouse<br />\
    <img src="styles/legend/osm_building_dump_2023_3_32.png" /> government<br />\
    <img src="styles/legend/osm_building_dump_2023_3_33.png" /> greenhouse<br />\
    <img src="styles/legend/osm_building_dump_2023_3_34.png" /> greenhouse_horticulture<br />\
    <img src="styles/legend/osm_building_dump_2023_3_35.png" /> guardhouse<br />\
    <img src="styles/legend/osm_building_dump_2023_3_36.png" /> hangar<br />\
    <img src="styles/legend/osm_building_dump_2023_3_37.png" /> healthcare<br />\
    <img src="styles/legend/osm_building_dump_2023_3_38.png" /> hospital<br />\
    <img src="styles/legend/osm_building_dump_2023_3_39.png" /> hotel<br />\
    <img src="styles/legend/osm_building_dump_2023_3_40.png" /> house<br />\
    <img src="styles/legend/osm_building_dump_2023_3_41.png" /> industrial<br />\
    <img src="styles/legend/osm_building_dump_2023_3_42.png" /> jed<br />\
    <img src="styles/legend/osm_building_dump_2023_3_43.png" /> kindergarten<br />\
    <img src="styles/legend/osm_building_dump_2023_3_44.png" /> kiosk<br />\
    <img src="styles/legend/osm_building_dump_2023_3_45.png" /> lift<br />\
    <img src="styles/legend/osm_building_dump_2023_3_46.png" /> manufacture<br />\
    <img src="styles/legend/osm_building_dump_2023_3_47.png" /> mast<br />\
    <img src="styles/legend/osm_building_dump_2023_3_48.png" /> museum<br />\
    <img src="styles/legend/osm_building_dump_2023_3_49.png" /> no<br />\
    <img src="styles/legend/osm_building_dump_2023_3_50.png" /> office<br />\
    <img src="styles/legend/osm_building_dump_2023_3_51.png" /> offices<br />\
    <img src="styles/legend/osm_building_dump_2023_3_52.png" /> outbuilding<br />\
    <img src="styles/legend/osm_building_dump_2023_3_53.png" /> parking<br />\
    <img src="styles/legend/osm_building_dump_2023_3_54.png" /> parking_entrance<br />\
    <img src="styles/legend/osm_building_dump_2023_3_55.png" /> planned<br />\
    <img src="styles/legend/osm_building_dump_2023_3_56.png" /> power<br />\
    <img src="styles/legend/osm_building_dump_2023_3_57.png" /> presbytery<br />\
    <img src="styles/legend/osm_building_dump_2023_3_58.png" /> public<br />\
    <img src="styles/legend/osm_building_dump_2023_3_59.png" /> residential<br />\
    <img src="styles/legend/osm_building_dump_2023_3_60.png" /> retail<br />\
    <img src="styles/legend/osm_building_dump_2023_3_61.png" /> roof<br />\
    <img src="styles/legend/osm_building_dump_2023_3_62.png" /> ruins<br />\
    <img src="styles/legend/osm_building_dump_2023_3_63.png" /> school<br />\
    <img src="styles/legend/osm_building_dump_2023_3_64.png" /> semidetached_house<br />\
    <img src="styles/legend/osm_building_dump_2023_3_65.png" /> service<br />\
    <img src="styles/legend/osm_building_dump_2023_3_66.png" /> shed<br />\
    <img src="styles/legend/osm_building_dump_2023_3_67.png" /> shopping_mall<br />\
    <img src="styles/legend/osm_building_dump_2023_3_68.png" /> silo<br />\
    <img src="styles/legend/osm_building_dump_2023_3_69.png" /> skyway<br />\
    <img src="styles/legend/osm_building_dump_2023_3_70.png" /> sports_centre<br />\
    <img src="styles/legend/osm_building_dump_2023_3_71.png" /> sports_hall<br />\
    <img src="styles/legend/osm_building_dump_2023_3_72.png" /> stable<br />\
    <img src="styles/legend/osm_building_dump_2023_3_73.png" /> stairs<br />\
    <img src="styles/legend/osm_building_dump_2023_3_74.png" /> static_caravan<br />\
    <img src="styles/legend/osm_building_dump_2023_3_75.png" /> storage<br />\
    <img src="styles/legend/osm_building_dump_2023_3_76.png" /> storage_tank<br />\
    <img src="styles/legend/osm_building_dump_2023_3_77.png" /> sty<br />\
    <img src="styles/legend/osm_building_dump_2023_3_78.png" /> supermarket<br />\
    <img src="styles/legend/osm_building_dump_2023_3_79.png" /> support<br />\
    <img src="styles/legend/osm_building_dump_2023_3_80.png" /> temple<br />\
    <img src="styles/legend/osm_building_dump_2023_3_81.png" /> terrace<br />\
    <img src="styles/legend/osm_building_dump_2023_3_82.png" /> toilets<br />\
    <img src="styles/legend/osm_building_dump_2023_3_83.png" /> train_station<br />\
    <img src="styles/legend/osm_building_dump_2023_3_84.png" /> transformer_tower<br />\
    <img src="styles/legend/osm_building_dump_2023_3_85.png" /> transportation<br />\
    <img src="styles/legend/osm_building_dump_2023_3_86.png" /> university<br />\
    <img src="styles/legend/osm_building_dump_2023_3_87.png" /> ventilation_shaft<br />\
    <img src="styles/legend/osm_building_dump_2023_3_88.png" /> warehouse<br />\
    <img src="styles/legend/osm_building_dump_2023_3_89.png" /> yes<br />\
    <img src="styles/legend/osm_building_dump_2023_3_90.png" /> <br />'
        });

lyr_Positron_0.setVisible(false);lyr_GoogleHybrid_1.setVisible(false);lyr_DarkMatter_2.setVisible(true);lyr_osm_building_dump_2023_3.setVisible(true);
var layersList = [lyr_Positron_0,lyr_GoogleHybrid_1,lyr_DarkMatter_2,lyr_osm_building_dump_2023_3];
lyr_osm_building_dump_2023_3.set('fieldAliases', {'fid': 'fid', 'addr:housenumber': 'addr:housenumber', 'building': 'building', 'name': 'name', 'office': 'office', 'historic': 'historic', 'operator': 'operator', 'shop': 'shop', 'id_cadastral_parcel': 'ID Cadastral parcel:', 'info_cadastral_parcel': 'info_cadastral_parcel', 'area': 'Area [sq.m]:', 'perimetr': 'Perimetr [m]:', });
lyr_osm_building_dump_2023_3.set('fieldImages', {'fid': 'TextEdit', 'addr:housenumber': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'office': 'TextEdit', 'historic': 'TextEdit', 'operator': 'TextEdit', 'shop': 'TextEdit', 'id_cadastral_parcel': 'TextEdit', 'info_cadastral_parcel': 'TextEdit', 'area': 'TextEdit', 'perimetr': 'TextEdit', });
lyr_osm_building_dump_2023_3.set('fieldLabels', {'fid': 'no label', 'addr:housenumber': 'no label', 'building': 'no label', 'name': 'no label', 'office': 'no label', 'historic': 'no label', 'operator': 'no label', 'shop': 'no label', 'id_cadastral_parcel': 'no label', 'info_cadastral_parcel': 'header label', 'area': 'no label', 'perimetr': 'no label', });
lyr_osm_building_dump_2023_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});