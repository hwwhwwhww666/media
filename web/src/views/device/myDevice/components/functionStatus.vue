<template>
  <div class="bottom_container_index3">
    <h4 style="padding: 10px;border: 1px solid black;border-top-left-radius: 7px;border-top-right-radius: 7px;">运行状态占比</h4>
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script>
  import { d2CrudPlus } from 'd2-crud-plus'
  export default {
    name: 'functionStatus',
    mixins: [d2CrudPlus.crud],
    data() {
      return {
        option: {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 40,
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
              ]
            }
          ],
          grid:{
            top:0,
            right:0,
            bottom:0,
            left:0
          }
        }
      }
    }
  }
</script>

<style scoped>
  .bottom_container_index3{
    flex: 30%;
  }
  .chart{
    height: 300px;
    border: 1px solid black;
  }
</style>
