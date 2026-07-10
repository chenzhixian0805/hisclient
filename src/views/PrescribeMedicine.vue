<template>
  <div class="wrapper">
    <div class="link">门诊医生> 开设处方</div>
    <el-divider />
    <div v-if="!showPreviousPage" class="info">
      <h3>处方药:XXX元</h3>
      <el-table :data="userList" style="width: 100%; margin-top: 20px" stripe border>
        <el-table-column type="selection" width="55" />
        <el-table-column prop="name" label="药品名称" width="200" align="center" />
        <el-table-column prop="specification" label="药品规格" width="200" align="center" />
        <el-table-column prop="price" label="单价" width="150" align="center" />
        <el-table-column label="用法用量" width="300" align="center">
          <el-input v-model="inputtest" placeholder="请输入" clearable />
        </el-table-column>
        <el-table-column label="数量" width="250" align="center">
          <el-input-number
            v-model="num"
            class="mx-4"
            :min="1"
            :max="10"
            controls-position="right"
            @change="handleChange"
          />
        </el-table-column>
        <el-table-column label="操作" width="290" align="center">
          <template v-slot="scope">
            <el-button type="primary" size="small" @click="handleAdd">增加</el-button>
            <el-button type="danger" size="small" @click="removeRow(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="dialog-footer" style="padding-top: 10px">
        <el-button type="primary" plain>开立处方</el-button>
        <el-button type="primary" plain>重置处方</el-button>
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
      console.log("Navigating to Add Disease page...");
      showPreviousPage.value = true; 
      router.push({ name: 'AddMedicine' }); 
    };

    const removeRow = (index) => {
      userList.value.splice(index, 1);
    };

    return {
      userList,
      handleAdd,
      removeRow,
      showPreviousPage,
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