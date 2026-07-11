<template>
  <div class="page-wrapper">
    <div class="page-breadcrumb">门诊医生 > 病历首页 > 增加疾病</div>
    <div class="page-header">
      <el-row :gutter="15" style="width: 100%;">
        <el-col :span="8">
          <el-input v-model="no" placeholder="请输入疾病编码" clearable />
        </el-col>
        <el-col :span="8">
          <el-input v-model="specification" placeholder="输入疾病名称" clearable />
        </el-col>
        <el-col :span="8">
          <el-button type="primary" icon="Search">搜索</el-button>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 20px;">
      <h3 class="page-title">疾病信息</h3>
      <div class="el-table-wrapper">
        <el-table :data="userList" style="width: 100%;margin-top:15px" stripe border>
          <el-table-column type="selection" width="55" />
          <el-table-column prop="encoding" label="疾病编码" min-width="180" align="center" />
          <el-table-column prop="name" label="疾病名称" min-width="200" align="center" />
          <el-table-column prop="ICDencoding" label="国际ICD编码" min-width="200" align="center" />
          <el-table-column prop="type" label="疾病类型" min-width="150" align="center" />
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
</style>
