<template>
  <div class="page-wrapper">
    <div class="page-breadcrumb">挂号收费 > 窗口退号</div>
    <div class="page-header">
      <el-row :gutter="15" style="width: 100%;">
        <el-col :span="8">
          <el-input v-model="no" placeholder="请输入病历号" clearable />
        </el-col>
        <el-col :span="8">
          <el-input v-model="username" placeholder="请输入姓名" clearable />
        </el-col>
        <el-col :span="8">
          <el-button type="primary" icon="Search">搜索</el-button>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 20px;">
      <h3 class="page-title">基本信息</h3>
      <div class="el-table-wrapper">
        <el-table :data="userList" style="width: 100%;margin-top:15px" stripe border>
          <el-table-column type="selection" width="55" />
          <el-table-column prop="userId" label="患者编号" min-width="100" align="center" />
          <el-table-column prop="userNo" label="患者病历号" min-width="120" align="center" />
          <el-table-column prop="username" label="患者姓名" min-width="100" align="center" />
          <el-table-column prop="sex" label="性别" min-width="80" align="center" />
          <el-table-column prop="userCard" label="身份证号" min-width="170" align="center" />
          <el-table-column prop="payType" label="支付方式" min-width="100" align="center" />
          <el-table-column label="输入框" width="150" align="center">
            <template #default>
              <el-input v-model="inputtest" placeholder="请输入" clearable />
            </template>
          </el-table-column>
          <el-table-column label="操作" width="100" align="center" fixed="right">
            <template #default>
              <el-button type="danger" size="small" @click="out">退号</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
    <el-dialog v-model="dialogVisible" title="提示" width="500">
      <span>确认取消吗</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确认</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      no: "",
      username: "",
      inputtest: "",
      userList: [
        {
          userId: 1,
          username: "zhangsan",
          userNo: "10001",
          sex: "男",
          userCard: "452123189712093416",
          payType: "现金"
        },
        {
          userId: 2,
          username: "lisi",
          userNo: "10002",
          sex: "男",
          userCard: "452123189712093416",
          payType: "现金"
        },
        {
          userId: 3,
          username: "wangwu",
          userNo: "10003",
          sex: "男",
          userCard: "452123189712093416",
          payType: "现金"
        },
        {
          userId: 4,
          username: "zhaoliu",
          userNo: "10004",
          sex: "男",
          userCard: "452123189712093416",
          payType: "现金"
        },
        {
          userId: 5,
          username: "tianqi",
          userNo: "10005",
          sex: "男",
          userCard: "452123189712093416",
          payType: "现金"
        },
        {
          userId: 6,
          username: "zhangba",
          userNo: "10006",
          sex: "男",
          userCard: "452123189712093416",
          payType: "现金"
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
</style>
