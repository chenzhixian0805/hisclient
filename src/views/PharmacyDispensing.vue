<template>
  <div class="wrapper">
    <div class="link">药房管理>药房发药</div>
    <el-divider />
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
    <div class="info">
      <h3>患者信息</h3>
      <el-table :data="userList1" style="width: 100%;margin-top:20px" stripe border>
        <el-table-column prop="userId" label="编号" width="150" align="center" />
        <el-table-column prop="userNo" label="患者病历号" width="200" align="center" />
        <el-table-column prop="username" label="患者姓名" width="150" align="center" />
        <el-table-column prop="sex" label="性别" width="200" align="center" />
        <el-table-column prop="userCard" label="身份证号" width="250" align="center" />
        <el-table-column prop="payType" label="支付方式" width="200" align="center" />
        <el-table-column label="操作" width="295" align="center">
          <el-button type="primary" plain size="small" @click="out">显示药品</el-button>
        </el-table-column>
      </el-table>
      <h3>药品信息</h3>
      <el-table :data="userList2" style="width: 100%;margin-top:20px" stripe border>
        <el-table-column prop="id" label="编号" width="100" align="center" />
        <el-table-column prop="ecoding" label="药品编码" width="200" align="center" />
        <el-table-column prop="name" label="药品名称" width="180" align="center" />
        <el-table-column prop="specification" label="药品规格" width="150" align="center" />
        <el-table-column prop="unit" label="包装单位" width="150" align="center" />
        <el-table-column prop="manufacturer" label="生产厂家" width="350" align="center" />
        <el-table-column prop="price" label="单价" width="100" align="center" />
        <el-table-column prop="quantity" label="药品数量" width="115" align="center" />
        <el-table-column label="操作" width="100" align="center">
          <el-button type="primary" plain size="small" @click="out">发药</el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
  
  
  <script ;lang="ts" setup>
import { ref } from "vue";
const num = ref(1);
const textarea = ref("");
</script>
  <script>
export default {
  data() {
    return {
      dialogVisible: "false", //一开始不显示对话框
      no: "",
      specification: "",
      inputtest: "",
      userList1: [
        {
          userId: "1",
          username: "张三有",
          userNo: "1000014",
          sex: "男",
          userCard: "222123200112120012",
          payType: "现金"
        }
      ],
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
  methods: {
    out() {
      this.dialogVisible = true;
    }
  }
};
</script>
  
<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
.wrapper .link {
  height: 40px;
  line-height: 50px;
  padding-left: 20px;
  font-size: 18px;
}
.wrapper .header {
  background-color: #ecf5ff;
  padding-top: 10px;
  margin-top: 30px;
  margin-left: 30px;
  height: 40px;
}
.wrapper .info {
  margin-left: 30px;
}
</style>