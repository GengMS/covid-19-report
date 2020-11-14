

//国外重点国家
var chart = Highcharts.chart('world_many', {
    chart: {
        type: 'spline'
    },
    legend: {
        align: 'right',
        x: -70,
        verticalAlign: 'bottom',
        y: 100,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    title: {
        text: '重点国家新增趋势图',
        align:'right',
        
    },
    
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['01-19', '01-25', '01-31', '02-06', '02-12', '02-18',
                     '02-24', '03-02', '03-08', '03-14', '03-20', '03-26']
    },
    yAxis: {
        title: {
            text: '',
            fontSize:15
        },
        labels: {
            formatter: function () {
                return this.value + '°';
            }
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [
        {
        name: '意大利',
        marker: {
            symbol: 'square'
        },
        data: [7.0, 6.9, 95, 14.5, 18.2, 21.5, 25.2, {
            y: 26.5,
            
        }, 23.3, 18.3, 13.9, 9.6]
        },
        {
        name: '西班牙',
        marker: {
            symbol: 'diamond'
        },
        data: [{
            y: 3.9,
           
        }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 166, 14.2, 10.3, 6.6, 4.8]
        },
        {
            name: '德国',
            marker: {
                symbol: 'diamond'
            },
            data: [{
                y: 3.9,
               
            }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 142, 10.3, 6.6, 4.8]
            },
            {
                name: '美国',
                marker: {
                    symbol: 'diamond'
                },
                data: [{
                    y: 3.9,
                   
                }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 66, 4.8]
                },
                {
                    name: '法国',
                    marker: {
                        symbol: 'diamond'
                    },
                    data: [{
                        y: 3.9,
                       
                    }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 48]
                    },
                    {
                        name: '韩国',
                        marker: {
                            symbol: 'diamond'
                        },
                        data: [{
                            y: 3.9,
                           
                        }, 4.2, 5.7, 8.5, 11.9, 152, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                        },
                        {
                            name: '日本',
                            marker: {
                                symbol: 'diamond'
                            },
                            data: [{
                                y: 3.9,
                               
                            }, 4.2, 5.7, 8.5, 11.9, 15.2, 170, 16.6, 14.2, 10.3, 6.6, 4.8]
                            },
                            {
                                name: '伊朗',
                                marker: {
                                    symbol: 'diamond'
                                },
                                data: [{
                                    y: 3.9,
                                   
                                }, 4.2, 5.7, 8.5, 119, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                                }
]
});
//国外新增
var chart = Highcharts.chart('world_new', {
    chart: {
        type: 'spline'
    },
    title: {
        text: '全球疫情新增确诊趋势图'
    },
    
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['01-19', '01-25', '01-31', '02-06', '02-12', '02-18',
                     '02-24', '03-02', '03-08', '03-14', '03-20', '03-26']
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + '°';
            }
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: '中国',
        marker: {
            symbol: 'square'
        },
        data: [0, 2500, 5000, 4900, 5600.7000, 6500, 18000, {
            y: 3000,
            
        }, 0, 0, 0, 0]
    }, {
        name: '其他国家',
        marker: {
            symbol: 'diamond'
        },
        data: [{
            y: 0
           
        }, 0, 0, 0, 0, 0, 0, 100, 4000, 8000, 1200, 40000]
    }]
});
//国外累计确诊
var chart = Highcharts.chart('world_tol', {
    chart: {
        type: 'spline'
    },
    title: {
        text: '全球疫情累计确诊趋势图'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['01-19', '01-25', '01-31', '02-06', '02-12', '02-18',
                     '02-24', '03-02', '03-08', '03-14', '03-20', '03-26']
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + '°';
            }
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: '中国',
        marker: {
            symbol: 'square'
        },
        data: [700, 6900, 9500, 14500, 18200, 21500, 25200, {
            y: 26500,
            
        }, 23300, 18300, 13900, 9600]
    }, {
        name: '其他国家',
        marker: {
            symbol: 'diamond'
        },
        data: [{
            y: 3900,
            
        }, 4200, 5700, 8500, 11900, 15200, 17000, 16600, 14200, 10300, 6600, 4800]
    }]
});
//国外累计死亡
var chart = Highcharts.chart('world_died_tol', {
    chart: {
        type: 'spline'
    },
    title: {
        text: '全球疫情累计死亡趋势图'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['01-19', '01-25', '01-31', '02-06', '02-12', '02-18',
                     '02-24', '03-02', '03-08', '03-14', '03-20', '03-26']
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            formatter: function () {
                return this.value + '°';
            }
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: '中国',
        marker: {
            symbol: 'square'
        },
        data: [700, 3900, 6500, 11500, 8200, 4150, 5200, {
            y: 6500,
            
        }, 3300, 8300, 3900, 9600]
    }, {
        name: '其他国家',
        marker: {
            symbol: 'diamond'
        },
        data: [{
            y: 900,
            
        }, 4200, 2700, 4500, 1900, 5200, 7000, 6600, 4200, 10300, 6600, 4800]
    }]
});

//国外现存
var map_world_now_data = [{
    "name": "Afghanistan",
    "value": 0
},
{
    "name": "Angola"
    ,"value": 0
},
{
    "name": "Albania"
    ,"value": 0
},
{
    "name": "United Arab Emirates"
    ,"value": 0
},
{
    "name": "Argentina"
    ,"value": 0
},
{
    "name": "美国"
    ,"value": 1000
},
{
    "name": "Armenia"
    ,"value": 0
},
{
    "name": "French Southern and Antarctic Lands"
    ,"value": 0
},
{
    "name": "澳大利亚"
    ,"value": 2000
},
{
    "name": "Austria"
    ,"value": 0
},
{
    "name": "Azerbaijan"
    ,"value": 0
},
{
    "name": "Burundi"
    ,"value": 0
},
{
    "name": "Belgium"
    ,"value": 0
},
{
    "name": "Benin"
    ,"value": 0
},
{
    "name": "Burkina Faso"
    ,"value": 0
},
{
    "name": "Bangladesh"
    ,"value": 0
},
{
    "name": "Bulgaria"
    ,"value": 0
},
{
    "name": "The Bahamas"
    ,"value": 0
},
{
    "name": "Bosnia and Herzegovina"
    ,"value": 0
},
{
    "name": "Belarus"
    ,"value": 10
},
{
    "name": "Belize"
    ,"value": 0
},
{
    "name": "Bermuda"
    ,"value": 0
},
{
    "name": "Bolivia"
    ,"value": 0
},
{
    "name": "Brazil"
    ,"value": 0
},
{
    "name": "Brunei"
    ,"value": 0
},
{
    "name": "Bhutan"
    ,"value": 0
},
{
    "name": "Botswana"
    ,"value": 0
},
{
    "name": "Central African Republic"
    ,"value": 0
},
{
    "name": "加拿大"
    ,"value": 513
},
{
    "name": "Switzerland"
    ,"value": 50
},
{
    "name": "Chile"
    ,"value": 0
},
{
    "name": "中国"
    ,"value": 8000
},
{
    "name": "Ivory Coast"
    ,"value": 1
},
{
    "name": "Cameroon"
    ,"value": 1
},
{
    "name": "Democratic Republic of the Congo"
    ,"value": 1
},
{
    "name": "Republic of the Congo"
    ,"value": 1
},
{
    "name": "Colombia"
    ,"value": 1
},
{
    "name": "Costa Rica"
    ,"value": 1
},
{
    "name": "Cuba"
    ,"value": 1
},
{
    "name": "Northern Cyprus"
    ,"value": 1
},
{
    "name": "Cyprus"
    ,"value": 11
},
{
    "name": "Czech Republic"
    ,"value": 1
},
{
    "name": "Germany"
    ,"value": 1
},
{
    "name": "Djibouti"
    ,"value": 11
},
{
    "name": "Denmark"
    ,"value": 12
},
{
    "name": "Dominican Republic"
    ,"value": 1
},
{
    "name": "Algeria"
    ,"value": 1
},
{
    "name": "Ecuador"
    ,"value": 1
},
{
    "name": "Egypt"
    ,"value": 1
},
{
    "name": "Eritrea"
    ,"value": 1
},
{
    "name": "Spain"
    ,"value": 1
},
{
    "name": "Estonia"
    ,"value": 1
},
{
    "name": "Ethiopia"
    ,"value": 1
},
{
    "name": "Finland"
    ,"value": 1
},
{
    "name": "Fiji"
    ,"value": 1
},
{
    "name": "Falkland Islands"
    ,"value": 1
},
{
    "name": "France"
    ,"value": 500
},
{
    "name": "Gabon"
    ,"value": 1
},
{
    "name": "United Kingdom"
    ,"value": 1
},
{
    "name": "Georgia"
    ,"value": 1
},
{
    "name": "Ghana"
    ,"value": 1
},
{
    "name": "Guinea"
    ,"value": 1
},
{
    "name": "Gambia"
    ,"value": 1
},
{
    "name": "Guinea Bissau"
    ,"value": 1
},
{
    "name": "Equatorial Guinea"
    ,"value": 1
},
{
    "name": "Greece"
    ,"value": 1
},
{
    "name": "Greenland"
    ,"value": 500
},
{
    "name": "Guatemala"
    ,"value": 100
},
{
    "name": "French Guiana"
    ,"value": 0
},
{
    "name": "Guyana"
    ,"value": 0
},
{
    "name": "Honduras"
    ,"value": 0
},
{
    "name": "Croatia"
    ,"value": 1
},
{
    "name": "Haiti"
    ,"value": 1
},
{
    "name": "Hungary"
    ,"value": 0
},
{
    "name": "Indonesia"
    ,"value": 0
},
{
    "name": "India"
    ,"value": 2430
},
{
    "name": "Ireland"
    ,"value": 53
},
{
    "name": "伊朗"
    ,"value": 1256
},
{
    "name": "Iraq"
    ,"value": 1126
},
{
    "name": "Iceland"
    ,"value": 568
},
{
    "name": "Israel"
    ,"value": 1
},
{
    "name": "Italy"
    ,"value": 1
},
{
    "name": "Jamaica"
    ,"value": 0
},
{
    "name": "Jordan"
    ,"value": 0
},
{
    "name": "日本"
    ,"value": 2030
},
{
    "name": "Kazakhstan"
    ,"value": 1
},
{
    "name": "Kenya"
    ,"value": 0
},
{
    "name": "Kyrgyzstan"
    ,"value": 1
},
{
    "name": "Cambodia"
    ,"value": 1
},
{
    "name": "South Korea"
    ,"value": 1
},
{
    "name": "Kosovo"
    ,"value": 0
},
{
    "name": "Kuwait"
    ,"value": 0
},
{
    "name": "Laos"
    ,"value": 57
},
{
    "name": "Lebanon"
    ,"value": 1
},
{
    "name": "Liberia"
    ,"value": 1
},
{
    "name": "Libya"
    ,"value": 0
},
{
    "name": "Sri Lanka"
    ,"value": 0
},
{
    "name": "Lesotho"
    ,"value": 0
},
{
    "name": "Lithuania"
    ,"value": 0
},
{
    "name": "Luxembourg"
    ,"value": 0
},
{
    "name": "Latvia"
    ,"value": 0
},
{
    "name": "Morocco"
    ,"value": 0
},
{
    "name": "Moldova"
    ,"value": 0
},
{
    "name": "Madagascar"
    ,"value": 0
},
{
    "name": "Mexico"
    ,"value": 0
},
{
    "name": "Macedonia"
    ,"value": 0
},
{
    "name": "Mali"
    ,"value": 0
},
{
    "name": "Myanmar"
    ,"value": 1
},
{
    "name": "Montenegro"
    ,"value": 1
},
{
    "name": "Mongolia"
    ,"value": 1
},
{
    "name": "Mozambique"
    ,"value": 1
},
{
    "name": "Mauritania"
    ,"value": 1
},
{
    "name": "Malawi"
    ,"value": 1
},
{
    "name": "Malaysia"
    ,"value": 0
},
{
    "name": "Namibia"
    ,"value": 0
},
{
    "name": "New Caledonia"
    ,"value": 0
},
{
    "name": "Niger"
    ,"value": 1
},
{
    "name": "Nigeria"
    ,"value": 1
},
{
    "name": "Nicaragua"
    ,"value": 1
},
{
    "name": "Netherlands"
    ,"value": 1
},
{
    "name": "Norway"
    ,"value": 0
},
{
    "name": "Nepal"
    ,"value": 0
},
{
    "name": "New Zealand"
    ,"value": 0
},
{
    "name": "Oman"
    ,"value": 1
},
{
    "name": "Pakistan"
    ,"value": 1
},
{
    "name": "Panama"
    ,"value": 0
},
{
    "name": "Peru"
    ,"value": 1
},
{
    "name": "Philippines"
    ,"value": 0
},
{
    "name": "Papua New Guinea"
    ,"value": 1
},
{
    "name": "Poland"
    ,"value": 1
},
{
    "name": "Puerto Rico"
    ,"value": 1
},
{
    "name": "North Korea"
    ,"value": 1
},
{
    "name": "Portugal"
    ,"value": 1
},
{
    "name": "Paraguay"
    ,"value": 0
},
{
    "name": "Qatar"
    ,"value": 0
},
{
    "name": "Romania"
    ,"value": 0
},
{
    "name": "俄罗斯"
    ,"value": 1436
},
{
    "name": "Rwanda"
    ,"value": 1
},
{
    "name": "Western Sahara"
    ,"value": 1
},
{
    "name": "Saudi Arabia"
    ,"value": 0
},
{
    "name": "Sudan"
    ,"value": 0
},
{
    "name": "South Sudan"
    ,"value": 1
},
{
    "name": "Senegal"
    ,"value": 1
},
{
    "name": "Solomon Islands"
    ,"value": 1
},
{
    "name": "Sierra Leone"
    ,"value": 0
},
{
    "name": "El Salvador"
    ,"value": 0
},
{
    "name": "Somaliland"
    ,"value": 0
},
{
    "name": "Somalia"
    ,"value": 0
},
{
    "name": "Republic of Serbia"
    ,"value": 0
},
{
    "name": "Suriname"
    ,"value": 0
},
{
    "name": "Slovakia"
    ,"value": 1
},
{
    "name": "Slovenia"
    ,"value": 1
},
{
    "name": "Sweden"
    ,"value": 1
},
{
    "name": "Swaziland"
    ,"value": 10
},
{
    "name": "Syria"
    ,"value": 1
},
{
    "name": "Chad"
    ,"value": 1
},
{
    "name": "Togo"
    ,"value": 1
},
{
    "name": "Thailand"
    ,"value": 9
},
{
    "name": "Tajikistan"
    ,"value": 10
},
{
    "name": "Turkmenistan"
    ,"value": 1
},
{
    "name": "East Timor"
    ,"value": 1
},
{
    "name": "Trinidad and Tobago"
    ,"value": 0
},
{
    "name": "Tunisia"
    ,"value": 1
},
{
    "name": "土耳其"
    ,"value": 500
},
{
    "name": "United Republic of Tanzania"
    ,"value": 1
},
{
    "name": "Uganda"
    ,"value": 1
},
{
    "name": "Ukraine"
    ,"value": 1
},
{
    "name": "Uruguay"
    ,"value": 1
},
{
    "name": "United States Virgin Islands"
    ,"value": 1
},
{
    "name": "Uzbekistan"
    ,"value": 0
},
{
    "name": "Venezuela"
    ,"value": 0
},
{
    "name": "Vietnam"
    ,"value": 1
},
{
    "name": "West Bank"
    ,"value": 10
},
{
    "name": "Yemen"
    ,"value": 0
},
{
    "name": "South Africa"
    ,"value": 1
},
{
    "name": "Zambia"
    ,"value": 1
},
{
    "name": "Zimbabwe"
    ,"value": 1
},
{
    "name": "Singapore Rep."
    ,"value": 0
},
{
    "name": "Dominican Rep."
    ,"value": 1
},
{
    "name": "Palestine"
    ,"value": 0
},
{
    "name": "Bahamas"
    ,"value": 0
},
{
    "name": "Timor-Leste"
    ,"value": 0
},
{
    "name": "Guinea-Bissau"
    ,"value": 0
},
{
    "name": "Côte d'Ivoire"
    ,"value": 1
},
{
    "name": "Siachen Glacier"
    ,"value": 1
},
{
    "name": "Br. Indian Ocean Ter."
    ,"value": 1
},
{
    "name": "Bosnia and Herz."
    ,"value": 1
},
{
    "name": "Central African Rep."
    ,"value": 0
},
{
    "name": "Dem. Rep. Congo"
    ,"value": 0
},
{
    "name": "Congo"
    ,"value": 1
},
{
    "name": "N. Cyprus"
    ,"value": 0
},
{
    "name": "Czech Rep."
    ,"value": 1
},
{
    "name": "Eq. Guinea"
    ,"value": 1
},
{
    "name": "Korea"
    ,"value": 0
},
{
    "name": "Lao PDR"
    ,"value": 1
},
{
    "name": "Dem. Rep. Korea"
    ,"value": 0
},
{
    "name": "W. Sahara"
    ,"value": 1
},
{
    "name": "S. Sudan"
    ,"value": 10
},
{
    "name": "Solomon Is."
    ,"value": 1
},
{
    "name": "Serbia"
    ,"value": 0
},
{
    "name": "Tanzania"
    ,"value": 1
},
{
    "name": "United States"
    ,"value": 0
}

];
// 初始化图表
var map = new Highcharts.Map('map_world_now', {
title: {
    text: '国外现存确诊'
},
mapNavigation: {
    enabled: true,
    enableButtons: false,
    enableTouchZoom:false,
    enableDoubleClickZoomTo: true
},
// colorAxis: {
//     min: 0,
//     minColor: 'rgb(255,255,255)',
//     maxColor: '#6d293a',

//     max:80,
// },
legend: {
    align: 'left',
    verticalAlign: 'top',
    floating: true,
    x: 0,
    y: -20
},
colorAxis: {
    dataClasses: [{
        to: 9,
        color: 'white',
    }, {
        from: 9,
        to: 99,
        color: '#f2ab9a',
    }, {
        from: 99,
        to: 999,
        color: '#f96c4e',
    }, {
        from: 999,
        to: 9999,
        color: '#f13c10',
    }, {
        from: 9999,
        color: '#500b00',
    }],

},
series: [{
    data: map_world_now_data,
    name: '现存确诊',
    mapData: Highcharts.maps['custom/world-highres2'],
    joinBy: 'name' // 根据 name 属性进行关联
}]
});
//国外累计
       
var map_world_tol_data = [{
                    "name": "Afghanistan",
                    "value": 0
                },
                {
                    "name": "Angola"
                    ,"value": 0
                },
                {
                    "name": "Albania"
                    ,"value": 0
                },
                {
                    "name": "United Arab Emirates"
                    ,"value": 0
                },
                {
                    "name": "Argentina"
                    ,"value": 0
                },
                {
                    "name": "Armenia"
                    ,"value": 0
                },
                {
                    "name": "French Southern and Antarctic Lands"
                    ,"value": 10
                },
                {
                    "name": "澳大利亚"
                    ,"value": 4000
                },
                {
                    "name": "Austria"
                    ,"value": 10
                },
                {
                    "name": "Azerbaijan"
                    ,"value": 10
                },
                {
                    "name": "Burundi"
                    ,"value": 10
                },
                {
                    "name": "Belgium"
                    ,"value": 10
                },
                {
                    "name": "Benin"
                    ,"value": 10
                },
                {
                    "name": "Burkina Faso"
                    ,"value": 10
                },
                {
                    "name": "Bangladesh"
                    ,"value": 10
                },
                {
                    "name": "Bulgaria"
                    ,"value": 10
                },
                {
                    "name": "The Bahamas"
                    ,"value": 10
                },
                {
                    "name": "Bosnia and Herzegovina"
                    ,"value": 10
                },
                {
                    "name": "Belarus"
                    ,"value": 10
                },
                {
                    "name": "Belize"
                    ,"value": 10
                },
                {
                    "name": "Bermuda"
                    ,"value": 10
                },
                {
                    "name": "Bolivia"
                    ,"value": 10
                },
                {
                    "name": "Brazil"
                    ,"value": 10
                },
                {
                    "name": "Brunei"
                    ,"value": 10
                },
                {
                    "name": "Bhutan"
                    ,"value": 10
                },
                {
                    "name": "Botswana"
                    ,"value": 10
                },
                {
                    "name": "Central African Republic"
                    ,"value": 10
                },
                {
                    "name": "加拿大"
                    ,"value": 1000
                },
                {
                    "name": "Switzerland"
                    ,"value": 100
                },
                {
                    "name": "Chile"
                    ,"value": 10
                },
                {
                    "name": "中国"
                    ,"value": 60000
                },
                {
                    "name": "Ivory Coast"
                    ,"value": 10
                },
                {
                    "name": "Cameroon"
                    ,"value": 10
                },
                {
                    "name": "Democratic Republic of the Congo"
                    ,"value": 10
                },
                {
                    "name": "美国"
                    ,"value": 2000
                },
                {
                    "name": "Republic of the Congo"
                    ,"value": 10
                },
                {
                    "name": "Colombia"
                    ,"value": 10
                },
                {
                    "name": "Costa Rica"
                    ,"value": 10
                },
                {
                    "name": "Cuba"
                    ,"value": 10
                },
                {
                    "name": "Northern Cyprus"
                    ,"value": 10
                },
                {
                    "name": "Cyprus"
                    ,"value": 110
                },
                {
                    "name": "Czech Republic"
                    ,"value": 10
                },
                {
                    "name": "Germany"
                    ,"value": 10
                },
                {
                    "name": "Djibouti"
                    ,"value": 110
                },
                {
                    "name": "Denmark"
                    ,"value": 120
                },
                {
                    "name": "Dominican Republic"
                    ,"value": 10
                },
                {
                    "name": "Algeria"
                    ,"value": 10
                },
                {
                    "name": "Ecuador"
                    ,"value": 10
                },
                {
                    "name": "Egypt"
                    ,"value": 10
                },
                {
                    "name": "Eritrea"
                    ,"value": 10
                },
                {
                    "name": "Spain"
                    ,"value": 10
                },
                {
                    "name": "Estonia"
                    ,"value": 10
                },
                {
                    "name": "Ethiopia"
                    ,"value": 10
                },
                {
                    "name": "Finland"
                    ,"value": 10
                },
                {
                    "name": "Fiji"
                    ,"value": 10
                },
                {
                    "name": "Falkland Islands"
                    ,"value": 10
                },
                {
                    "name": "France"
                    ,"value": 1000
                },
                {
                    "name": "Gabon"
                    ,"value": 10
                },
                {
                    "name": "United Kingdom"
                    ,"value": 10
                },
                {
                    "name": "Georgia"
                    ,"value": 10
                },
                {
                    "name": "Ghana"
                    ,"value": 10
                },
                {
                    "name": "Guinea"
                    ,"value": 10
                },
                {
                    "name": "Gambia"
                    ,"value": 10
                },
                {
                    "name": "Guinea Bissau"
                    ,"value": 10
                },
                {
                    "name": "Equatorial Guinea"
                    ,"value": 10
                },
                {
                    "name": "Greece"
                    ,"value": 10
                },
                {
                    "name": "Greenland"
                    ,"value": 1000
                },
                {
                    "name": "Guatemala"
                    ,"value": 100
                },
                {
                    "name": "French Guiana"
                    ,"value": 10
                },
                {
                    "name": "Guyana"
                    ,"value": 10
                },
                {
                    "name": "Honduras"
                    ,"value": 10
                },
                {
                    "name": "Croatia"
                    ,"value": 10
                },
                {
                    "name": "Haiti"
                    ,"value": 10
                },
                {
                    "name": "Hungary"
                    ,"value": 10
                },
                {
                    "name": "Indonesia"
                    ,"value": 10
                },
                {
                    "name": "India"
                    ,"value": 4000
                },
                {
                    "name": "Ireland"
                    ,"value": 100
                },
                {
                    "name": "伊朗"
                    ,"value": 3000
                },
                {
                    "name": "Iraq"
                    ,"value": 2000
                },
                {
                    "name": "Iceland"
                    ,"value": 1000
                },
                {
                    "name": "Israel"
                    ,"value": 10
                },
                {
                    "name": "Italy"
                    ,"value": 10
                },
                {
                    "name": "Jamaica"
                    ,"value": 10
                },
                {
                    "name": "Jordan"
                    ,"value": 10
                },
                {
                    "name": "日本"
                    ,"value": 5000
                },
                {
                    "name": "Kazakhstan"
                    ,"value": 10
                },
                {
                    "name": "Kenya"
                    ,"value": 10
                },
                {
                    "name": "Kyrgyzstan"
                    ,"value": 10
                },
                {
                    "name": "Cambodia"
                    ,"value": 10
                },
                {
                    "name": "South Korea"
                    ,"value": 10
                },
                {
                    "name": "Kosovo"
                    ,"value": 10
                },
                {
                    "name": "Kuwait"
                    ,"value": 10
                },
                {
                    "name": "Laos"
                    ,"value": 100
                },
                {
                    "name": "Lebanon"
                    ,"value": 10
                },
                {
                    "name": "Liberia"
                    ,"value": 10
                },
                {
                    "name": "Libya"
                    ,"value": 10
                },
                {
                    "name": "Sri Lanka"
                    ,"value": 10
                },
                {
                    "name": "Lesotho"
                    ,"value": 10
                },
                {
                    "name": "Lithuania"
                    ,"value": 10
                },
                {
                    "name": "Luxembourg"
                    ,"value": 10
                },
                {
                    "name": "Latvia"
                    ,"value": 10
                },
                {
                    "name": "Morocco"
                    ,"value": 10
                },
                {
                    "name": "Moldova"
                    ,"value": 10
                },
                {
                    "name": "Madagascar"
                    ,"value": 10
                },
                {
                    "name": "Mexico"
                    ,"value": 10
                },
                {
                    "name": "Macedonia"
                    ,"value": 10
                },
                {
                    "name": "Mali"
                    ,"value": 10
                },
                {
                    "name": "Myanmar"
                    ,"value": 10
                },
                {
                    "name": "Montenegro"
                    ,"value": 10
                },
                {
                    "name": "Mongolia"
                    ,"value": 10
                },
                {
                    "name": "Mozambique"
                    ,"value": 10
                },
                {
                    "name": "Mauritania"
                    ,"value": 10
                },
                {
                    "name": "Malawi"
                    ,"value": 10
                },
                {
                    "name": "Malaysia"
                    ,"value": 10
                },
                {
                    "name": "Namibia"
                    ,"value": 10
                },
                {
                    "name": "New Caledonia"
                    ,"value": 10
                },
                {
                    "name": "Niger"
                    ,"value": 10
                },
                {
                    "name": "Nigeria"
                    ,"value": 10
                },
                {
                    "name": "Nicaragua"
                    ,"value": 10
                },
                {
                    "name": "Netherlands"
                    ,"value": 10
                },
                {
                    "name": "Norway"
                    ,"value": 10
                },
                {
                    "name": "Nepal"
                    ,"value": 10
                },
                {
                    "name": "New Zealand"
                    ,"value": 10
                },
                {
                    "name": "Oman"
                    ,"value": 10
                },
                {
                    "name": "Pakistan"
                    ,"value": 10
                },
                {
                    "name": "Panama"
                    ,"value": 10
                },
                {
                    "name": "Peru"
                    ,"value": 10
                },
                {
                    "name": "Philippines"
                    ,"value": 10
                },
                {
                    "name": "Papua New Guinea"
                    ,"value": 10
                },
                {
                    "name": "Poland"
                    ,"value": 10
                },
                {
                    "name": "Puerto Rico"
                    ,"value": 10
                },
                {
                    "name": "North Korea"
                    ,"value": 10
                },
                {
                    "name": "Portugal"
                    ,"value": 10
                },
                {
                    "name": "Paraguay"
                    ,"value": 10
                },
                {
                    "name": "Qatar"
                    ,"value": 10
                },
                {
                    "name": "Romania"
                    ,"value": 10
                },
                {
                    "name": "俄罗斯"
                    ,"value": 2000
                },
                {
                    "name": "Rwanda"
                    ,"value": 10
                },
                {
                    "name": "Western Sahara"
                    ,"value": 10
                },
                {
                    "name": "Saudi Arabia"
                    ,"value": 10
                },
                {
                    "name": "Sudan"
                    ,"value": 10
                },
                {
                    "name": "South Sudan"
                    ,"value": 10
                },
                {
                    "name": "Senegal"
                    ,"value": 10
                },
                {
                    "name": "Solomon Islands"
                    ,"value": 10
                },
                {
                    "name": "Sierra Leone"
                    ,"value": 10
                },
                {
                    "name": "El Salvador"
                    ,"value": 10
                },
                {
                    "name": "Somaliland"
                    ,"value": 10
                },
                {
                    "name": "Somalia"
                    ,"value": 10
                },
                {
                    "name": "Republic of Serbia"
                    ,"value": 10
                },
                {
                    "name": "Suriname"
                    ,"value": 10
                },
                {
                    "name": "Slovakia"
                    ,"value": 10
                },
                {
                    "name": "Slovenia"
                    ,"value": 10
                },
                {
                    "name": "Sweden"
                    ,"value": 10
                },
                {
                    "name": "Swaziland"
                    ,"value": 10
                },
                {
                    "name": "Syria"
                    ,"value": 10
                },
                {
                    "name": "Chad"
                    ,"value": 10
                },
                {
                    "name": "Togo"
                    ,"value": 10
                },
                {
                    "name": "Thailand"
                    ,"value": 10
                },
                {
                    "name": "Tajikistan"
                    ,"value": 10
                },
                {
                    "name": "Turkmenistan"
                    ,"value": 10
                },
                {
                    "name": "East Timor"
                    ,"value": 10
                },
                {
                    "name": "Trinidad and Tobago"
                    ,"value": 10
                },
                {
                    "name": "Tunisia"
                    ,"value": 10
                },
                {
                    "name": "土耳其"
                    ,"value": 2000
                },
                {
                    "name": "United Republic of Tanzania"
                    ,"value": 10
                },
                {
                    "name": "Uganda"
                    ,"value": 10
                },
                {
                    "name": "Ukraine"
                    ,"value": 10
                },
                {
                    "name": "Uruguay"
                    ,"value": 10
                },
                {
                    "name": "United States Virgin Islands"
                    ,"value": 10
                },
                {
                    "name": "Uzbekistan"
                    ,"value": 10
                },
                {
                    "name": "Venezuela"
                    ,"value": 10
                },
                {
                    "name": "Vietnam"
                    ,"value": 10
                },
                {
                    "name": "West Bank"
                    ,"value": 100
                },
                {
                    "name": "Yemen"
                    ,"value": 10
                },
                {
                    "name": "South Africa"
                    ,"value": 10
                },
                {
                    "name": "Zambia"
                    ,"value": 10
                },
                {
                    "name": "Zimbabwe"
                    ,"value": 10
                },
                {
                    "name": "Singapore Rep."
                    ,"value": 10
                },
                {
                    "name": "Dominican Rep."
                    ,"value": 10
                },
                {
                    "name": "Palestine"
                    ,"value": 10
                },
                {
                    "name": "Bahamas"
                    ,"value": 10
                },
                {
                    "name": "Timor-Leste"
                    ,"value": 10
                },
                {
                    "name": "Guinea-Bissau"
                    ,"value": 10
                },
                {
                    "name": "Côte d'Ivoire"
                    ,"value": 10
                },
                {
                    "name": "Siachen Glacier"
                    ,"value": 10
                },
                {
                    "name": "Br. Indian Ocean Ter."
                    ,"value": 10
                },
                {
                    "name": "Bosnia and Herz."
                    ,"value": 10
                },
                {
                    "name": "Central African Rep."
                    ,"value": 10
                },
                {
                    "name": "Dem. Rep. Congo"
                    ,"value": 10
                },
                {
                    "name": "Congo"
                    ,"value": 10
                },
                {
                    "name": "N. Cyprus"
                    ,"value": 10
                },
                {
                    "name": "Czech Rep."
                    ,"value": 10
                },
                {
                    "name": "Eq. Guinea"
                    ,"value": 10
                },
                {
                    "name": "Korea"
                    ,"value": 10
                },
                {
                    "name": "Lao PDR"
                    ,"value": 10
                },
                {
                    "name": "Dem. Rep. Korea"
                    ,"value": 10
                },
                {
                    "name": "W. Sahara"
                    ,"value": 10
                },
                {
                    "name": "S. Sudan"
                    ,"value": 10
                },
                {
                    "name": "Solomon Is."
                    ,"value": 10
                },
                {
                    "name": "Serbia"
                    ,"value": 10
                },
                {
                    "name": "Tanzania"
                    ,"value": 10
                },
                {
                    "name": "United States"
                    ,"value": 10
                }

            ];
            // 初始化图表
            var map = new Highcharts.Map('map_world_tol', {
                title: {
                    text: '国外累计确诊'
                },
                mapNavigation: {
                    enabled: true,
                    enableButtons: false,
                    enableTouchZoom:false,
                    enableDoubleClickZoomTo: true
                },
                // colorAxis: {
                //     min: 0,
                //     minColor: 'rgb(255,255,255)',
                //     maxColor: '#6d293a',

                //     max:80,
                // },
                legend: {
                    align: 'left',
                    verticalAlign: 'top',
                    floating: true,
                    x: 0,
                    y: -20
                },
                colorAxis: {
                    dataClasses: [{
                        to: 9,
                        color: 'white',
                    }, {
                        from: 9,
                        to: 99,
                        color: '#f2ab9a',
                    }, {
                        from: 99,
                        to: 999,
                        color: '#f96c4e',
                    }, {
                        from: 999,
                        to: 9999,
                        color: '#f13c10',
                    }, {
                        from: 9999,
                        color: '#500b00',
                    }],

                },
                series: [{
                    data: map_world_tol_data,
                    name: '累计确诊',
                    mapData: Highcharts.maps['custom/world-highres2'],
                    joinBy: 'name' // 根据 name 属性进行关联
                }]
            });
//国内现存
        var map_china_now_data = [{
                "name": "北京",
                "value": 92
            },
            
            {
                "name": "天津",
                "value": 0
            }, {
                "name": "河北",
                "value": 2
            }, {
                "name": "山西",
                "value": 0
            }, {
                "name": "内蒙古",
                "value": 0
            }, {
                "name": "辽宁",
                "value": 2
            }, {
                "name": "吉林",
                "value": 0
            }, {
                "name": "黑龙江",
                "value": 10
            }, {
                "name": "上海",
                "value": 34
            }, {
                "name": "江苏",
                "value": 0
            }, {
                "name": "浙江",
                "value": 15
            }, {
                "name": "安徽",
                "value": 0
            }, {
                "name": "福建",
                "value": 0
            }, {
                "name": "江西",
                "value": 0
            }, {
                "name": "山东",
                "value": 7
            }, {
                "name": "河南",
                "value": 1
            }, {
                "name": "湖北",
                "value": 6992
            }, {
                "name": "湖南",
                "value": 0
            }, {
                "name": "广东",
                "value": 52
            }, {
                "name": "广西",
                "value": 1
            }, {
                "name": "海南",
                "value": 1
            }, {
                "name": "重庆",
                "value": 0
            }, {
                "name": "四川",
                "value": 6
            }, {
                "name": "贵州",
                "value": 0
            }, {
                "name": "云南",
                "value": 2
            }, {
                "name": "西藏",
                "value": 0
            }, {
                "name": "陕西",
                "value": 6
            }, {
                "name": "甘肃",
                "value": 40
            }, {
                "name": "青海",
                "value": 0
            }, {
                "name": "宁夏",
                "value": 0
            }, {
                "name": "新疆",
                "value": 0
            }, {
                "name": "台湾",
                "value": 77
            }, {
                "name": "香港",
                "value": 93
            }, {
                "name": "澳门",
                "value": 0
            }, {
                "name": "南海诸岛",
                "value": 0
            }, {
                "name": "南海诸岛",
                "value": 0
            }
        ];
        // 初始化图表
        var map = new Highcharts.Map('map_china_now', {
            title: {
                text: '中国现存确诊'
            },
            mapNavigation: {
                enabled: true,
                enableButtons: false,
                enableTouchZoom:false,
                enableDoubleClickZoomTo: true
            },
            // colorAxis: {
            //     min: 0,
            //     minColor: 'rgb(255,255,255)',
            //     maxColor: '#6d293a',

            //     max:80,
            // },
            legend: {
                align: 'left',
                verticalAlign: 'top',
                floating: true,
                x: 0,
                y: -20
            },
            colorAxis: {
                dataClasses: [{
                    to: 1,
                    color: 'white',
                }, {
                    from: 1,
                    to: 9,
                    color: '#f2ab9a',
                }, {
                    from: 9,
                    to: 99,
                    color: '#f96c4e',
                }, {
                    from: 99,
                    to: 999,
                    color: '#f13c10',
                }, {
                    from: 999,
                    color: '#500b00',
                }],

            },
            series: [{
                data: map_china_now_data,
                name: '现存确诊',
                mapData: Highcharts.maps['cn/china'],
                joinBy: 'name' // 根据 name 属性进行关联
            }]
        });
//中国累计

        var map_china_tol_data = [{
                "name": "北京",
                "value": 480
            },
            {
                "name": "天津",
                "value": 136
            }, {
                "name": "河北",
                "value": 318
            }, {
                "name": "山西",
                "value": 133
            }, {
                "name": "内蒙古",
                "value": 75
            }, {
                "name": "辽宁",
                "value": 125
            }, {
                "name": "吉林",
                "value": 93
            }, {
                "name": "黑龙江",
                "value": 483
            }, {
                "name": "上海",
                "value": 363
            }, {
                "name": "江苏",
                "value": 631
            }, {
                "name": "浙江",
                "value": 1233
            }, {
                "name": "安徽",
                "value": 990
            }, {
                "name": "福建",
                "value": 296
            }, {
                "name": "江西",
                "value": 935
            }, {
                "name": "山东",
                "value": 761
            }, {
                "name": "河南",
                "value": 1273
            }, {
                "name": "湖北",
                "value": 67800
            }, {
                "name": "湖南",
                "value": 1018
            }, {
                "name": "广东",
                "value": 1378
            }, {
                "name": "广西",
                "value": 253
            }, {
                "name": "海南",
                "value": 168
            }, {
                "name": "重庆",
                "value": 576
            }, {
                "name": "四川",
                "value": 540
            }, {
                "name": "贵州",
                "value": 146
            }, {
                "name": "云南",
                "value": 176
            }, {
                "name": "西藏",
                "value": 1
            }, {
                "name": "陕西",
                "value": 246
            }, {
                "name": "甘肃",
                "value": 133
            }, {
                "name": "青海",
                "value": 18
            }, {
                "name": "宁夏",
                "value": 75
            }, {
                "name": "新疆",
                "value": 76
            }, {
                "name": "台湾",
                "value": 108
            }, {
                "name": "香港",
                "value": 109
            }, {
                "name": "澳门",
                "value": 110
            }, {
                "name": "南海诸岛",
                "value": 0
            }, {
                "name": "南海诸岛",
                "value": 0
            }
        ];
        // 初始化图表
        var map = new Highcharts.Map('map_china_tol', {
            title: {
                text: '中国累计确诊'
            },
            mapNavigation: {
                enabled: true,
                enableButtons: false,
                enableTouchZoom:false,
                enableDoubleClickZoomTo: true
            },
            legend: {
                align: 'left',
                verticalAlign: 'top',
                floating: true,
                x: 0,
                y: -20
            },
            colorAxis: {
                dataClasses: [{
                    to: 1,
                    color: 'white',
                }, {
                    from: 1,
                    to: 59,
                    color: '#f2ab9a',
                }, {
                    from: 59,
                    to: 599,
                    color: '#f96c4e',
                }, {
                    from: 599,
                    to: 2999,
                    color: '#f13c10',
                }, {
                    from: 2999,
                    color: '#500b00',
                }],

            },
            series: [{
                data: map_china_tol_data,
                name: '累计h确诊',
                mapData: Highcharts.maps['cn/china'],
                joinBy: 'name' // 根据 name 属性进行关联
            }]
        });
   