<template>
  <div class="page-wrapper">
    <div class="page-breadcrumb">门诊医生 > 病历首页</div>
    <div v-if="!showAddDiseasePage">
      <h3 class="page-title">患者病历</h3>
      <div style="background-color:#f5f7fa; border-radius: 8px; padding: 20px; margin-top: 15px;">
        <div style="margin-bottom: 15px;">
          <span style="width: 10%; display: inline-block; text-align: right; padding-right: 10px;">主诉:</span>
          <el-input
            v-model="textarea1"
            style="width: 88%;"
            :rows="2"
            type="textarea"
            placeholder="请输入"
          />
        </div>
        <div style="margin-bottom: 15px;">
          <span style="width: 10%; display: inline-block; text-align: right; padding-right: 10px;">现病史:</span>
          <el-input
            v-model="textarea2"
            style="width: 88%;"
            :rows="2"
            type="textarea"
            placeholder="请输入"
          />
        </div>
        <div style="margin-bottom: 15px;">
          <span style="width: 10%; display: inline-block; text-align: right; padding-right: 10px;">现病治疗情况:</span>
          <el-input
            v-model="textarea3"
            style="width: 88%;"
            :rows="2"
            type="textarea"
            placeholder="请输入"
          />
        </div>
        <div style="margin-bottom: 15px;">
          <span style="width: 10%; display: inline-block; text-align: right; padding-right: 10px;">既往史:</span>
          <el-input
            v-model="textarea4"
            style="width: 88%;"
            :rows="2"
            type="textarea"
            placeholder="请输入"
          />
        </div>
        <div style="margin-bottom: 15px;">
          <span style="width: 10%; display: inline-block; text-align: right; padding-right: 10px;">过敏史:</span>
          <el-input
            v-model="textarea5"
            style="width: 88%;"
            :rows="2"
            type="textarea"
            placeholder="请输入"
          />
        </div>
        <div>
          <span style="width: 10%; display: inline-block; text-align: right; padding-right: 10px;">体检检查:</span>
          <el-input
            v-model="textarea6"
            style="width: 88%;"
            :rows="2"
            type="textarea"
            placeholder="请输入"
          />
        </div>
      </div>

      <h3 class="page-title" style="margin-top: 20px;">患者疾病</h3>
      <div class="el-table-wrapper">
        <el-table :data="userList" style="width: 100%;margin-top:15px" stripe border>
          <el-table-column type="selection" width="55" />
          <el-table-column prop="encoding" label="疾病编码" width="250" align="center" />
          <el-table-column prop="name" label="疾病名称" width="280" align="center" />
          <el-table-column prop="ICDencoding" label="国际ICD编码" width="280" align="center" />
          <el-table-column prop="type" label="疾病类型" width="280" align="center" />
          <el-table-column label="操作" width="300" align="center">
            <template #default="scope">
              <el-button type="primary" size="small" @click="navigateToAddDiseasePage">增加</el-button>
              <el-button type="danger" size="small" @click="removeRow(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="page-actions" style="margin-top: 20px;">
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
      navigateToAddDiseasePage,
      removeRow
    };
  }
};
</script>

<style scoped>
</style>
