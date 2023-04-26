<template>
  <div class="bottom_container_index2">
    <h4 style="padding: 10px;border: 1px solid black;border-top-left-radius: 7px;border-top-right-radius: 7px;">日均能耗</h4>
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script>
  import { d2CrudPlus } from 'd2-crud-plus'
  export default {
    name: 'averageConsume',
    mixins: [d2CrudPlus.crud],
    data() {
        return {
          option: {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross'
              }
            },
            // toolbox: {
            //   show: true,
            //   feature: {
            //     saveAsImage: {}
            //   }
            // },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              // prettier-ignore
              data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
            },
            yAxis: {
              type: 'value',
              axisLabel: {
                formatter: '{value} W'
              },
              axisPointer: {
                snap: true
              }
            },
            visualMap: {
              show: false,
              dimension: 0,
              pieces: [
                {
                  lte: 6,
                  color: 'green'
                },
                {
                  gt: 6,
                  lte: 8,
                  color: 'red'
                },
                {
                  gt: 8,
                  lte: 14,
                  color: 'green'
                },
                {
                  gt: 14,
                  lte: 17,
                  color: 'red'
                },
                {
                  gt: 17,
                  color: 'green'
                }
              ]
            },
            series: [
              {
                name: 'Electricity',
                type: 'line',
                smooth: true,
                // prettier-ignore
                data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
                markArea: {
                  itemStyle: {
                    color: 'rgba(255, 173, 177, 0.4)'
                  },
                  data: [
                    [
                      {
                        name: 'Morning Peak',
                        xAxis: '07:30'
                      },
                      {
                        xAxis: '10:00'
                      }
                    ],
                    [
                      {
                        name: 'Evening Peak',
                        xAxis: '17:30'
                      },
                      {
                        xAxis: '21:15'
                      }
                    ]
                  ]
                }
              }
            ],
            grid:{
              top:40,
              right:40,
              bottom:40,
              left:60
            }
          },
        }
    }
  }
</script>

<style scoped>
  .bottom_container_index2{
    flex: 35%;
  }
  .chart{
    height: 300px;
    border: 1px solid black;
  }
</style>
