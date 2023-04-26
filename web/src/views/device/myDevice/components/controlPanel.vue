<template>
  <div class="rectangle6">
    <h4 style="padding: 10px;background-color: #F8F8F8;border: 1px solid black;border-top-left-radius: 7px;border-top-right-radius: 7px;">
      控制面板
      <i class="el-icon-share" style="font-size: 30px;color: RoyalBlue ;float: right;margin-top: -5px;"></i>
      <i class="el-icon-attract" style="font-size: 30px;color: RoyalBlue ;float: right;margin-top: -5px;"></i>
    </h4>
    <div class="rectangle7">
      <i class="el-icon-switch-button" style="font-size: 70px;color: deepskyblue;font-weight: bold;"></i>
      <i class="el-icon-time" style="font-size: 70px;color: deepskyblue;font-weight: bold;"></i>
      <i class="el-icon-s-opportunity" style="font-size: 70px;color: limegreen;font-weight: bold;"></i>
      <i class="el-icon-s-tools" style="font-size: 70px;color: RoyalBlue;font-weight: bold;"></i>
    </div>
  </div>
</template>

<script>
  import { d2CrudPlus } from 'd2-crud-plus'
  export default {
    name: 'controlPanel',
    mixins: [d2CrudPlus.crud],
  }
</script>

<style scoped>
  .rectangle6 {
    flex: 55%;
  }
  .rectangle7{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 150px;
    border: 1px solid black;
    align-items: center;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }
</style>
