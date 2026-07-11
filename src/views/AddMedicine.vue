<template>
  <div class="page-wrapper">
    <div class="page-breadcrumb">门诊医生 > 开设处方 > 增加药品</div>
    <div class="page-header">
      <el-row :gutter="15" style="width: 100%;">
        <el-col :span="8">
          <el-input v-model="no" placeholder="请输入药品编号" clearable />
        </el-col>
        <el-col :span="8">
          <el-input v-model="specification" placeholder="输入药品名称" clearable />
        </el-col>
        <el-col :span="8">
          <el-button type="primary" icon="Search">搜索</el-button>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 20px;">
      <h3 class="page-title">药品信息</h3>
      <div class="el-table-wrapper">
        <el-table :data="userList2" style="width: 100%;margin-top:15px" stripe border>
          <el-table-column type="selection" width="55" />
          <el-table-column prop="id" label="编号" width="80" align="center" />
          <el-table-column prop="ecoding" label="药品编码" min-width="150" align="center" />
          <el-table-column prop="name" label="药品名称" min-width="130" align="center" />
          <el-table-column prop="specification" label="药品规格" min-width="120" align="center" />
          <el-table-column prop="unit" label="包装单位" min-width="100" align="center" />
          <el-table-column prop="manufacturer" label="生产厂家" min-width="200" align="center" />
          <el-table-column prop="price" label="单价" width="80" align="center" />
          <el-table-column prop="quantity" label="药品数量" width="100" align="center" />
        </el-table>
      </div>
      <div class="page-actions" style="margin-top: 15px;">
        <el-button type="primary">添加</el-button>
        <el-button type="info" plain>清空</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      no: "",
      specification: "",
      userList2: [
        {
          id: "1",
          ecoding: "86979474002695",
          name: "咽立爽口含滴丸",
          specification: "1g*1盒",
          unit: "盒",
          manufacturer: "中发实业集团业锐药业有限公司",
          price: "31.56",
          quantity: "1"
        },
        {
          id: "2",
          ecoding: "86979474003146",
          name: "冠心丹参滴丸",
          specification: "0.04g*180粒",
          unit: "盒",
          manufacturer: "天士力制药集团股份有限公司",
          price: "12.92",
          quantity: "1"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
