<template>
  <div class="add-disease">
    <div class="title"><h3>增加疾病:</h3></div>
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
      <el-table :data="userList" style="width: 100%;margin-top:20px" stripe border>
        <el-table-column type="selection" width="55" />
        <el-table-column prop="encoding" label="疾病编码" width="230" align="center" />
        <el-table-column prop="name" label="疾病名称" width="350" align="center" />
        <el-table-column prop="ICDencoding" label="国际ICD编码" width="400" align="center" />
        <el-table-column prop="type" label="疾病类型" width="400" align="center" />
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
      userList: [
        {
        encoding: "JXFSH",
        name: "甲型副伤寒",
        ICDencoding: "A01.101",
        type: "伤寒"
      },
      {
        encoding: "SMSJXFY",
        name: "沙门氏菌性肺炎",
        ICDencoding: "A02.201+",
        type: "肺炎"
      }
      ]
    };
  }
};
</script>
      <style scoped>
.add-disease {
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
  margin-left: 30px;
}
.wrapper .dialog-footer {
  background-color: #ecf5ff;
  margin-top: 10px;
  padding-top: 10px;
  height: 40px;
}
</style>
      