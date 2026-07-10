<template>
  <div class="add-medicine">
    <div class="title"><h3>增加药品: </h3></div>
    <div class="header">
      <el-row style="margin-left: 30px">
        <el-col :span="6">
          <el-input v-model="no" style="width: 240px" placeholder="请输入病历号" clearable />
        </el-col>
        <el-col :span="6">
          <el-input v-model="specification" style="width: 240px" placeholder="输入姓名" clearable />
        </el-col>
        <el-col :span="6">
          <el-button type="primary" icon="Search">搜索</el-button>
        </el-col>
        <el-col :span="6"></el-col>
      </el-row>
    </div>
    <div class="in">
    <h3>基本信息:</h3>
    <el-table :data="userList2" style="width: 100%;margin-top:20px" stripe border>
        <el-table-column type="selection" width="55" />
        <el-table-column prop="id" label="编号" width="100" align="center" />
        <el-table-column prop="ecoding" label="药品编码" width="200" align="center" />
        <el-table-column prop="name" label="药品名称" width="180" align="center" />
        <el-table-column prop="specification" label="药品规格" width="150" align="center" />
        <el-table-column prop="unit" label="包装单位" width="150" align="center" />
        <el-table-column prop="manufacturer" label="生产厂家" width="350" align="center" />
        <el-table-column prop="price" label="单价" width="100" align="center" />
        <el-table-column prop="quantity" label="药品数量" width="115" align="center" />
      </el-table>
      <div class="dialog-footer" style="padding-top: 10px;">
        <el-button type="primary" plain>添加</el-button>
        <el-button type="primary" plain>清空</el-button>
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
      inputtest: "",
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
  },
};
</script>
    
    <style scoped>
.add-medicine {
  padding: 20px;
}
.wrapper.title{
    margin-left: 30px;
}
.wrapper .header {
  margin-top: 20px;
  height: 40px;
}
.wrapper.in {
    margin-left: 30px;;
}
.wrapper .dialog-footer {
  background-color: #ecf5ff;
  margin-top: 10px;
  padding-top: 10px;
  height: 40px;
}
</style>
    