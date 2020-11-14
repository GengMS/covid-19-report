
var china_new_zeng = echarts.init(document.getElementById('china_new_zeng'));
var china_now_had = echarts.init(document.getElementById('china_now_had'));
var china_now_dohad = echarts.init(document.getElementById('china_now_dohad'));
var china_save = echarts.init(document.getElementById('china_save'));
var china_died = echarts.init(document.getElementById('china_died'));
//-------------------------------------
var not_hubei_new = echarts.init(document.getElementById('not_hubei_new'));
var hubei_new = echarts.init(document.getElementById('hubei_new'));
var hubei_have = echarts.init(document.getElementById('hubei_have'));
var not_hubei_have = echarts.init(document.getElementById('not_hubei_have'));
//-----------------------------------------------------------------------------
var china_new_zeng_option = {
    backgroundColor:'#e3e7f3',
    title: {
        text: '近期全国疫情新增趋势图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['新增确诊', '新增疑似'],
        top:22,
        left:0
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2/7', '2/10', '2/13', '2/16', '2/19', '2/22', '2/25','2/28','3/2','3/5','3/8','3/11','3/14','3/17','3/19']
    },
    yAxis: {
        axisLabel: {
            show: true,
            textStyle: {
               fontSize:9
            }
       },
        type: 'value'
    },
    series: [
       
        {
            name: '新增确诊',
            smooth: true,
            type: 'line',
            
            
            data:[1400, 890, 600, 490, 390, 530, 300,230,280,310,230,200,180,150,120]
        },
        {
            name: '新增疑似',
            smooth: true,
            type: 'line',
          
            data: [400, 730, 400, 450, 400, 330, 600,190,170,160,210,190,170,160,150]
        },
       
        
    ]
};

var china_now_had_option = {
    backgroundColor:'#f3bab0',
    title: {
        text: '近期全国疫情现存确诊趋势图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['现存确诊'],
        top:22,
        left:0
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2/7', '2/10', '2/13', '2/16', '2/19', '2/22', '2/25','2/28','3/2','3/5','3/8','3/11','3/14','3/17','3/19']
    },
    yAxis: {

        type: 'value'
    },
    series: [
        {
            name: '现存确诊',
            type: 'line',
            smooth: true,
            stack: '总量',
            data:[10000, 13000, 16000, 19000, 23000, 28000, 49000,51000,53000,50000,45000,42000,39000,35000,30000]
        },
        
       
        
    ]
};
var china_now_dohad_option = {
    backgroundColor:'#e69a8d',
    title: {
        text: '近期全国疫情现存疑似趋势图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['现存疑似'],
        top:22,
        left:0
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2/7', '2/10', '2/13', '2/16', '2/19', '2/22', '2/25','2/28','3/2','3/5','3/8','3/11','3/14','3/17','3/19']
    },
    yAxis: {

        type: 'value'
    },
    series: [
        {
            name: '现存疑似',
            type: 'line',
            smooth: true,
            stack: '总量',
            data:[5800, 5100, 4300, 3600, 3024, 2890, 2500,2300,2400,2000,1800,1600,1400,1200,1000]
        },
        
       
        
    ]
};
var china_save_option = {
    backgroundColor:'#95db9a',
    title: {
        text: '近期全国疫情治愈趋势图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['治愈'],
        top:22,
        left:0
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2/7', '2/10', '2/13', '2/16', '2/19', '2/22', '2/25','2/28','3/2','3/5','3/8','3/11','3/14','3/17','3/19']
    },
    yAxis: {

        type: 'value'
    },
    series: [
        {
            name: '治愈',
            type: 'line',
            smooth: true,
            stack: '总量',
            data:[5000, 8000, 11000, 14000, 17000, 20000, 23000,28000,29500,31000,32500,34000,35500,37000,38500]
        },
        
       
        
    ]
};
var china_died_option = {
    backgroundColor:'#b4c0d5',
    title: {
        text: '近期全国疫情死亡趋势图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['死亡'],
        top:22,
        left:0
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2/7', '2/10', '2/13', '2/16', '2/19', '2/22', '2/25','2/28','3/2','3/5','3/8','3/11','3/14','3/17','3/19']
    },
    yAxis: {

        type: 'value'
    },
    series: [
        {
            name: '死亡',
            type: 'line',
            smooth: true,
            stack: '总量',
            data:[1400, 890, 600, 490, 390, 530, 300,230,280,310,230,200,180,150,120]
        },
        
       
        
    ]
};
//-----------------------------------//
var not_hubei_new_option = {
    backgroundColor:'#e3e7f3',
    title: {
        text: '非湖北新增确诊病例趋势图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['总新增', '新增境外输入'],
        top:22,
        left:0
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2/7', '2/10', '2/13', '2/16', '2/19', '2/22', '2/25','2/28','3/2','3/5','3/8','3/11','3/14','3/17','3/19']
    },
    yAxis: {
        axisLabel: {
            show: true,
            textStyle: {
               fontSize:9
            }
       },
        type: 'value'
    },
    series: [
        {
            name: '总新增',
            type: 'line',
            smooth: true,
           
            data:[20, 19, 23, 15, 40, 16, 14,17,19,14,38,71,53,120,80]
        },
        {
            name: '新增境外输入',
            type: 'line',
            smooth: true,
           
            color:'yellow',
            data: ["", "", "", 8, 12, 25, 8,2,4,6,8,4,1,20,15]
        },
       
        
    ]
};
var hubei_new_option = {
    backgroundColor:'#e69a8d',
    title: {
        text: '湖北新增确诊病例趋势图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['新增确诊'],
        top:22,
        left:0
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2/7', '2/10', '2/13', '2/16', '2/19', '2/22', '2/25','2/28','3/2','3/5','3/8','3/11','3/14','3/17','3/19']
    },
    yAxis: {
        axisLabel: {
            show: true,
            textStyle: {
               fontSize:9
            }
       },
        type: 'value'
    },
    series: [
        {
            name: '湖北新增',
            type: 'line',
            smooth: true,
            stack: '总量',
            data: [400, 500, 410, 430, 310, 410, 600,590,200,100,110,130,80,60,50]
        },
       
        
    ]
};
var hubei_have_option = {
    backgroundColor:'#95db9a',
    title: {
        text: '湖北现存确诊趋势图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: [ '湖北现存确诊'],
        top:22,
        left:0
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2/7', '2/10', '2/13', '2/16', '2/19', '2/22', '2/25','2/28','3/2','3/5','3/8','3/11','3/14','3/17','3/19']
    },
    yAxis: {
        axisLabel: {
            show: true,
            textStyle: {
               fontSize:9
            }
       },
        type: 'value'
    },
    series: [
        {
            name: '湖北现存确诊',
            type: 'line',
            smooth: true,
            stack: '总量',
            data: [8000, 11000, 14000, 17000, 20000, 23000, 40000,43000,46000,43000,39000,35000,33000,28000,24000]
        },
       
        
    ]
};
var not_hubei_have_option = {
    backgroundColor:'#b4c0d5',
    title: {
        text: '非湖北现存确诊趋势图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['非湖北现存确诊'],
        top:22,
        left:0
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2/7', '2/10', '2/13', '2/16', '2/19', '2/22', '2/25','2/28','3/2','3/5','3/8','3/11','3/14','3/17','3/19']
    },
    yAxis: {
        axisLabel: {
            show: true,
            textStyle: {
               fontSize:9
            }
       },
        type: 'value'
    },
    series: [
        
        {
            name: '非湖北现存确诊',
            type: 'line',
            smooth: true,
            stack: '总量',
            data: [2000, 3500, 5000, 8000, 11000, 13000, 15000,12000,9000,7000,5000,3000,2000,1000,500]
        },
       
        
    ]
};

//--------------------------------------------------
china_new_zeng.setOption(china_new_zeng_option);
china_now_had.setOption(china_now_had_option);
china_now_dohad.setOption(china_now_dohad_option);
china_save.setOption(china_save_option);
china_died.setOption(china_died_option);
//--------------------------------------------------
not_hubei_new.setOption(not_hubei_new_option);
hubei_new.setOption(hubei_new_option);
hubei_have.setOption(hubei_have_option);
not_hubei_have.setOption(not_hubei_have_option);

//--------------------------------------------------
