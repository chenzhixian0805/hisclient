<template>
  <div class="wrapper">
    <div class="link">医院科室>内科类</div>
    <el-divider />
    <div class="info">
      <h3>内科类科室列表</h3>
      <!-- 内科类科室列表 -->
      <el-table :data="departments" style="width: 100%; margin-top: 20px" stripe border>
        <el-table-column prop="name" label="科室名称" width="200" align="center" />
        <el-table-column prop="description" label="科室描述" width="500" align="center" />
        <el-table-column label="科室门号" width="100" align="center">
          <template v-slot="scope">{{ scope.row.roomNumber }}</template>
        </el-table-column>
        <el-table-column label="科室主任" width="150" align="center">
          <template v-slot="scope">{{ scope.row.director }}</template>
        </el-table-column>
        <el-table-column label="值班医生" width="200" align="center">
          <template v-slot="scope">
            <el-select v-model="scope.row.doctor" placeholder="选择医生">
              <el-option
                v-for="doctor in doctors"
                :key="doctor.value"
                :label="doctor.label"
                :value="doctor.value"
              />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column label="联系方式" width="150" align="center">
          <template v-slot="scope">
            <span v-if="scope.row.doctor">{{ getDoctorContact(scope.row.doctor) }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
  
  <script>
import { ref } from "vue";

export default {
  setup() {
    const departments = ref([
      {
        name: "呼吸内科",
        description: "主要治疗呼吸系统疾病，如哮喘、支气管炎等。",
        doctor: null,
        roomNumber: "101",
        director: "王医生"
      },
      {
        name: "心血管内科",
        description: "主要治疗心血管系统疾病，如高血压、心脏病等。",
        doctor: null,
        roomNumber: "302",
        director: "陈医生"
      },
      {
        name: "消化内科",
        description: "主要治疗消化系统疾病，如胃炎、肠炎等。",
        doctor: null,
        roomNumber: "303",
        director: "刘医生"
      },
      {
        name: "内分泌科",
        description: "主要治疗内分泌系统疾病，如糖尿病、甲状腺疾病等。",
        doctor: null,
        roomNumber: "304",
        director: "赵医生"
      },
      {
        name: "肾内科",
        description: "主要治疗肾脏相关疾病，如肾炎、肾衰竭等。",
        doctor: null,
        roomNumber: "305",
        director: "钱医生"
      },
      {
        name: "风湿免疫科",
        description:
          "主要治疗风湿和免疫系统疾病，如类风湿性关节炎、系统性红斑狼疮等。",
        doctor: null,
        roomNumber: "306",
        director: "李医生"
      },
      {
        name: "血液科",
        description: "主要治疗血液系统疾病，如贫血、白血病等。",
        doctor: null,
        roomNumber: "307",
        director: "白医生"
      },
      {
        name: "神经内科",
        description: "主要治疗神经系统疾病，如癫痫、中风等。",
        doctor: null,
        roomNumber: "308",
        director: "吴医生"
      },
      {
        name: "感染病科",
        description: "主要治疗感染性疾病，如病毒感染、细菌感染等。",
        doctor: null,
        roomNumber: "309",
        director: "林医生"
      }
    ]);

    const doctors = ref([
  { label: "张医生", value: "张医生", contact: "123-456-7890" },
  { label: "李医生", value: "李医生", contact: "234-567-8901" },
  { label: "王医生", value: "王医生", contact: "345-678-9012" },
  { label: "赵医生", value: "赵医生", contact: "456-789-0123" }
]);


    const addDoctor = department => {
      console.log(`Adding doctor to ${department.name}`);
    };

    const removeRow = index => {
      departments.value.splice(index, 1);
    };

    const getDoctorContact = doctorName => {
      const doctor = doctors.value.find(doctor => doctor.label === doctorName);
      if (doctor) {
        return doctor.contact || "联系方式未知";
      } else {
        return "联系方式未知";
      }
    };

    return {
      departments,
      doctors,
      addDoctor,
      removeRow,
      getDoctorContact
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
</style>
  