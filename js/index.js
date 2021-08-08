// 左一：柱形图
// 实例化柱形图
(function () {
  // 1、实例化对象
  var myChart = echarts.init(document.querySelector('.bar .chart'))
  // 2、指定配置项数据
  let option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
        axisTick: {
          alignWithLabel: true
        },
        // 修改刻度标签样式
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: '12'
        },
        // 不显示x坐标轴线
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        // 修改刻度标签样式
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: '12'
        },
        // y轴线条样式
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            // width: 2,
            // type: solid
          }
        },
        // y 轴分隔线样式
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        // 修改柱子宽度
        barWidth: "35%",
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        }
      }
    ]
  };

  myChart.setOption(option)
  // 让图表跟随屏幕自适应
  window.addEventListener("resize", function () {
    myChart.resize()
  })
})();

// 右一：柱状图2
(function () {
  var myChart = echarts.init(document.querySelector('.bar2 .chart'))
  // 声明颜色数组
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  option = {
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%",
    },
    // 不显示X轴信息
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: 'category',
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        // 反向坐标轴
        inverse: true,
        //不显示y轴线条
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // y轴文字的颜色
        axisLabel: {
          color: '#fff'
        }
      },
      {
        type: 'category',
        data: [702, 350, 610, 793, 664],
        // 反向坐标轴
        inverse: true,
        //不显示y轴线条
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // y轴文字的颜色
        axisLabel: {
          color: '#fff'
        },
      }
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        data: [70, 34, 60, 78, 69],
        // 修改第一条柱子
        itemStyle: {
          barBorderRadius: 20,
          color: function (params) {
            // params 是当前柱子信息
            // dataIndex 是当前索引号
            // console.log(params);
            return myColor[params.dataIndex]
          }
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 图形上的文本标签
        label: {
          normal: {
            show: true,
            // 图形内显示
            position: "inside",
            // 文字的显示格式 C: data里的数据,后面加 % 号
            formatter: "{c}%"
          }
        },
        // 给series  第一个对象里面的 添加 
        yAxisIndex: 0,
      },
      {
        name: '框',
        type: 'bar',
        barCategoryGap: 50,
        barWidth: 15,
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        },
        data: [100, 100, 100, 100, 100],
        // 给series  第一个对象里面的 添加 
        yAxisIndex: 1,
      }
    ]
  };

  myChart.setOption(option)
  // 让图表跟随屏幕自适应
  window.addEventListener("resize", function () {
    myChart.resize()
  })
})()