<template>
  <div class="wrapper">
    <div class="link">门诊医生> 患者查看</div>
    <el-divider />
    <div class="header">
      <el-row style="margin-left: 30px">
        <el-col :span="6">
          <el-input v-model="no" style="width: 240px" placeholder="请输入病历号" clearable />
        </el-col>
        <el-col :span="6">
          <el-input v-model="username" style="width: 240px" placeholder="请输入姓名" clearable />
        </el-col>
        <el-col :span="6">
          <el-button type="primary" icon="Search">搜索</el-button>
        </el-col>
        <el-col :span="6"></el-col>
      </el-row>
    </div>
    <div class="info">
      <h3>排队患者：</h3>
      <el-table :data="userList" style="width: 100%;margin-top:20px" stripe border>
        <el-table-column type="selection" width="55" />
        <el-table-column prop="userId" label="患者编号" width="140" align="center" />
        <el-table-column prop="userNo" label="患者病历号" width="140" align="center" />
        <el-table-column prop="username" label="患者姓名" width="140" align="center" />
        <el-table-column prop="sex" label="性别" width="120" align="center" />
        <el-table-column prop="userCard" label="身份证号" width="190" align="center" />
        <el-table-column label="操作" width="320" align="center">
          <el-button type="primary" plain size="small" @click="out">创建病例</el-button>
          <el-button type="pla" plain size="small" @click="out">跳过</el-button>
          <el-button type="danger" plain="" size="small" @click="out">叫号</el-button>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-pagination background layout="prev, pager, next" :total="1000" />
      </div>
    </div>
    <!-- 退号对话框 -->
    <el-dialog v-model="dialogVisible" title="提示" width="500" >
      <span>确认取消吗</span>
      <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确认 </el-button>
      </div>
    </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible:"false",//一开始不显示对话框
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
      this.dialogVisible=true
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
  margin-top: 20px;
  height: 40px;
}
.wrapper .info {
  margin-left: 30px;
}
</style>