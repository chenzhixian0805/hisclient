<template>
  <div class="page-wrapper">
    <div class="page-breadcrumb">药房管理 > 药房库存</div>
    <div class="page-header">
      <el-row :gutter="15" style="width: 100%;">
        <el-col :span="8">
          <el-input v-model="no" placeholder="请输入药品编号" clearable />
        </el-col>
        <el-col :span="8">
          <el-input v-model="specification" placeholder="输入药品名" clearable />
        </el-col>
        <el-col :span="8">
          <el-button type="primary" icon="Search">搜索</el-button>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 20px;">
      <h3 class="page-title">药品列表</h3>
      <div class="el-table-wrapper">
        <el-table :data="userList" style="width: 100%;margin-top:15px" stripe border>
          <el-table-column prop="ecoding" label="药品编码" width="160" align="center" />
          <el-table-column prop="name" label="药品名称" width="180" align="center" />
          <el-table-column prop="specification" label="药品规格" width="140" align="center" />
          <el-table-column prop="unit" label="包装单位" width="130" align="center" />
          <el-table-column prop="origin" label="产地" width="130" align="center" />
          <el-table-column prop="manufacturer" label="生产厂家" width="290" align="center" />
          <el-table-column prop="batchno" label="批号" width="100" align="center" />
          <el-table-column prop="date" label="生产日期" width="100" align="center" />
          <el-table-column prop="deadline" label="有效期限" width="110" align="center" />
          <el-table-column prop="remainder" label="剩余数量" width="100" align="center" />
        </el-table>
      </div>
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      no: "",
      specification: "",
      userList: [
        {
          ecoding: "86979474002695",
          name: "咽立爽口含滴丸",
          specification: "1g*1盒",
          unit: "盒",
          origin: "广东",
          manufacturer: "中发实业集团业锐药业有限公司",
          batchno: "1001",
          date: "1年",
          deadline: "2024/06/08",
          remainder: "1"
        },
        {
          ecoding: "86979474003146",
          name: "冠心丹参滴丸",
          specification: "0.04g*180粒",
          unit: "盒",
          origin: "广东",
          manufacturer: "天士力制药集团股份有限公司",
          batchno: "1002",
          date: "1年",
          deadline: "2024/06/08",
          remainder: "1"
        },
        {
          ecoding: "86979474002996",
          name: "芪参益气滴丸",
          specification: "0.5g*15袋/盒",
          unit: "盒",
          origin: "广东",
          manufacturer: "天士力制药集团股份有限公司",
          batchno: "1003",
          date: "1年",
          deadline: "2024/06/08",
          remainder: "1"
        },
        {
          ecoding: "86979474002798",
          name: "复方丹参滴丸",
          specification: "27mg*180粒/盒",
          unit: "盒",
          origin: "广东",
          manufacturer: "中发实业集团业锐药业有限公司",
          batchno: "1004",
          date: "1年",
          deadline: "2024/06/08",
          remainder: "1"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
