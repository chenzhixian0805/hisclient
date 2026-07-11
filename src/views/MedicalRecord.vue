<template>
  <div class="page-wrapper">
    <div class="page-breadcrumb">门诊医生 > 病历首页</div>
    <div v-if="!showAddDiseasePage">
      <div class="page-header">
        <h3 class="page-title">患者病历</h3>
      </div>
      <div class="form-section">
        <div class="form-row">
          <span class="form-label">主诉:</span>
          <el-input v-model="textarea1" :rows="2" type="textarea" placeholder="请输入" />
        </div>
        <div class="form-row">
          <span class="form-label">现病史:</span>
          <el-input v-model="textarea2" :rows="2" type="textarea" placeholder="请输入" />
        </div>
        <div class="form-row">
          <span class="form-label">现病治疗情况:</span>
          <el-input v-model="textarea3" :rows="2" type="textarea" placeholder="请输入" />
        </div>
        <div class="form-row">
          <span class="form-label">既往史:</span>
          <el-input v-model="textarea4" :rows="2" type="textarea" placeholder="请输入" />
        </div>
        <div class="form-row">
          <span class="form-label">过敏史:</span>
          <el-input v-model="textarea5" :rows="2" type="textarea" placeholder="请输入" />
        </div>
        <div class="form-row">
          <span class="form-label">体检检查:</span>
          <el-input v-model="textarea6" :rows="2" type="textarea" placeholder="请输入" />
        </div>
      </div>

      <div class="page-header" style="margin-top: 20px;">
        <h3 class="page-title">患者疾病</h3>
      </div>
      <div class="el-table-wrapper">
        <el-table :data="userList" style="width: 100%" stripe border>
          <el-table-column type="selection" width="55" />
          <el-table-column prop="encoding" label="疾病编码" min-width="200" align="center" />
          <el-table-column prop="name" label="疾病名称" min-width="200" align="center" />
          <el-table-column prop="ICDencoding" label="国际ICD编码" min-width="200" align="center" />
          <el-table-column prop="type" label="疾病类型" min-width="150" align="center" />
          <el-table-column label="操作" width="200" align="center" fixed="right">
            <template #default="scope">
              <el-button type="primary" size="small" @click="navigateToAddDiseasePage">增加</el-button>
              <el-button type="danger" size="small" @click="removeRow(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="page-actions" style="margin-top: 15px;">
        <el-button type="primary" plain>保存</el-button>
        <el-button type="info" plain>清空</el-button>
      </div>
      <router-view></router-view>
    </div>
    <router-view v-if="showAddDiseasePage" />
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const showAddDiseasePage = ref(false);
    const textarea1 = ref('');
    const textarea2 = ref('');
    const textarea3 = ref('');
    const textarea4 = ref('');
    const textarea5 = ref('');
    const textarea6 = ref('');
    const userList = ref([
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
    ]);

    const navigateToAddDiseasePage = () => {
      showAddDiseasePage.value = true;
      router.push({ name: 'AddDisease' });
    };
    const removeRow = (index) => {
      userList.value.splice(index, 1);
    };

    return {
      userList,
      showAddDiseasePage,
      textarea1,
      textarea2,
      textarea3,
      textarea4,
      textarea5,
      textarea6,
      navigateToAddDiseasePage,
      removeRow
    };
  }
};
</script>

<style scoped>
.form-section {
  background-color: #fafbfc;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 10px;
}
.form-row {
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
}
.form-label {
  width: 110px;
  text-align: right;
  padding-right: 12px;
  line-height: 32px;
  color: #606266;
  font-size: 14px;
  flex-shrink: 0;
}
.form-row .el-input {
  flex: 1;
}
@media screen and (max-width: 480px) {
  .form-row {
    flex-direction: column;
  }
  .form-label {
    width: 100%;
    text-align: left;
    padding-right: 0;
    margin-bottom: 5px;
  }
}
</style>
