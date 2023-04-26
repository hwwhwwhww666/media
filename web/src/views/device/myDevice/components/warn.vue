<template>
  <div class="rectangle7">
    <h4 style="padding: 10px;background-color: crimson;border-top-left-radius: 7px;border-top-right-radius: 7px;color: white;">本月报警信息</h4>
    <div style="display: flex;flex-direction: column;height: 152px;border: 2px solid crimson;border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;padding: 10px 30px;color: black;line-height: 30px;">
      <p>设备离线，离线时长0.2小时<span style="float: right;">2022-02-19&ensp;14:21</span></p>
      <p>实时功率接近限定值，持续1.2分钟<span style="float: right;">2022-02-13&ensp;19:02</span></p>
    </div>
  </div>
</template>

<script>
  import { d2CrudPlus } from 'd2-crud-plus'
  export default {
    name: 'warn',
    mixins: [d2CrudPlus.crud],
  }
</script>

<style scoped>
  .rectangle7 {
    flex: 45%;
  }
</style>
