<template>
  <div class="wrapper">
    <div class="link">门诊医生> 病历首页</div>
    <el-divider />
    <div v-if="!showAddDiseasePage" class="info">
      <h3>患者病历：</h3>
      <!-- form表单 -->
      <div style="background-color:#F3F3F3">
        <div style="line-height: 45px;padding-top: 20px;margin: 10px">
          <span style="width: 100%;display: flex;align-items: center;">
            <span style="width: 10%;display: inline-block;text-align: left;">主诉:</span>
            <el-input
              v-model="textarea1"
              style="width: 90%"
              :rows="2"
              type="textarea"
              placeholder="请输入"
            />
          </span>
        </div>
        <div style="line-height: 45px;padding-top: 10px;margin: 10px">
          <span style="width: 100%;display: flex;align-items: center;">
            <span style="width: 10%;display: inline-block;text-align: left;">现病史:</span>
            <el-input
              v-model="textarea2"
              style="width: 90%"
              :rows="2"
              type="textarea"
              placeholder="请输入"
            />
          </span>
        </div>
        <div style="line-height: 45px;padding-top: 10px;margin: 10px">
          <span style="width: 100%;display: flex;align-items: center;">
            <span style="width: 10%;display: inline-block;text-align: left;">现病治疗情况:</span>
            <el-input
              v-model="textarea3"
              style="width: 90%"
              :rows="2"
              type="textarea"
              placeholder="请输入"
            />
          </span>
        </div>
        <div style="line-height: 45px;padding-top: 10px;margin: 10px">
          <span style="width: 100%;display: flex;align-items: center;">
            <span style="width: 10%;display: inline-block;text-align: left;">既往史:</span>
            <el-input
              v-model="textarea4"
              style="width: 90%"
              :rows="2"
              type="textarea"
              placeholder="请输入"
            />
          </span>
        </div>
        <div style="line-height: 45px;padding-top: 10px;margin: 10px">
          <span style="width: 100%;display: flex;align-items: center;">
            <span style="width: 10%;display: inline-block;text-align: left;">过敏史:</span>
            <el-input
              v-model="textarea5"
              style="width: 90%"
              :rows="2"
              type="textarea"
              placeholder="请输入"
            />
          </span>
        </div>
        <div style="line-height: 45px;padding-top: 10px;padding-bottom:20px;margin: 10px">
          <span style="width: 100%;display: flex;align-items: center;">
            <span style="width: 10%;display: inline-block;text-align: left;">体检检查:</span>
            <el-input
              v-model="textarea6"
              style="width: 90%"
              :rows="2"
              type="textarea"
              placeholder="请输入"
            />
          </span>
        </div>
      </div>

      <h3>患者疾病：</h3>
      <!-- form表单 -->
      <el-table :data="userList" style="width: 100%;margin-top:20px" stripe border>
        <el-table-column type="selection" width="55" />
        <el-table-column prop="encoding" label="疾病编码" width="250" align="center" />
        <el-table-column prop="name" label="疾病名称" width="280" align="center" />
        <el-table-column prop="ICDencoding" label="国际ICD编码" width="280" align="center" />
        <el-table-column prop="type" label="疾病类型" width="280" align="center" />
        <el-table-column label="操作" width="300" align="center">
          <template v-slot="scope">
            <el-button type="primary" size="small" @click="navigateToAddDiseasePage">增加</el-button>
            <el-button type="danger" size="small" @click="removeRow(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="dialog-footer" style="padding-top: 10px;">
        <el-button type="primary" plain>保存</el-button>
        <el-button type="primary" plain>清空</el-button>
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
      console.log("Navigating to Add Disease page...");
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
  margin-top: 10px;
  height: 40px;
}
.wrapper .info {
  margin-left: 30px;
}
.wrapper .dialog-footer {
  background-color: #ecf5ff;
  margin-top: 10px;
  padding-top: 10px;
  height: 40px;
}
</style>