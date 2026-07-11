<template>
  <div class="page-wrapper">
    <div class="page-breadcrumb">门诊医生 > 开设处方</div>
    <div v-if="!showPreviousPage">
      <div class="page-header">
        <h3 class="page-title">处方药</h3>
      </div>
      <div class="el-table-wrapper">
        <el-table :data="userList" style="width: 100%" stripe border>
          <el-table-column type="selection" width="55" />
          <el-table-column prop="name" label="药品名称" min-width="150" align="center" />
          <el-table-column prop="specification" label="药品规格" min-width="150" align="center" />
          <el-table-column prop="price" label="单价" width="100" align="center" />
          <el-table-column label="用法用量" min-width="200" align="center">
            <template #default>
              <el-input v-model="inputtest" placeholder="请输入" clearable />
            </template>
          </el-table-column>
          <el-table-column label="数量" width="180" align="center">
            <template #default>
              <el-input-number v-model="num" :min="1" :max="10" controls-position="right" />
            </template>
          </el-table-column>
          <el-table-column label="操作" width="180" align="center" fixed="right">
            <template #default="scope">
              <el-button type="primary" size="small" @click="handleAdd">增加</el-button>
              <el-button type="danger" size="small" @click="removeRow(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="page-actions" style="margin-top: 15px;">
        <el-button type="primary">开立处方</el-button>
        <el-button type="info" plain>重置处方</el-button>
      </div>
    </div>
    <router-view v-show="showPreviousPage" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  setup() {
    const router = useRouter();
    const userList = ref([
      {
        name: "复方丹参滴丸",
        specification: "27mg*180粒/盒",
        price: "23.97",
      },
      {
        name: "咽立爽口含滴丸",
        specification: "1g*1盒",
        price: "31.56",
      },
      {
        name: "冠心丹参滴丸",
        specification: "0.04g*180粒",
        price: "12.92",
      },
      {
        name: "芪参益气滴丸",
        specification: "0.5g*15袋/盒",
        price: "7.83",
      },
    ]);
    const num = ref(1);
    const inputtest = ref("");
    const showPreviousPage = ref(false);

    const handleAdd = () => {
      showPreviousPage.value = true;
      router.push({ name: 'AddMedicine' });
    };

    const removeRow = (index) => {
      userList.value.splice(index, 1);
    };

    return {
      userList,
      num,
      inputtest,
      handleAdd,
      removeRow,
      showPreviousPage,
    };
  }
};
</script>

<style scoped>
</style>
