<template>
  <div class="page-wrapper">
    <div class="page-breadcrumb">医院科室 > 外科</div>
    <div class="page-header">
      <h3 class="page-title">外科类科室列表</h3>
    </div>
    <div class="el-table-wrapper">
      <el-table :data="departments" style="width: 100%" stripe border>
        <el-table-column prop="name" label="科室名称" min-width="100" align="center" />
        <el-table-column prop="description" label="科室描述" min-width="300" align="center" />
        <el-table-column prop="roomNumber" label="科室门号" width="100" align="center" />
        <el-table-column prop="director" label="科室主任" width="100" align="center" />
        <el-table-column label="值班医生" width="150" align="center">
          <template #default="scope">
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
          <template #default="scope">
            <span v-if="scope.row.doctor">{{ getDoctorContact(scope.row.doctor) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="值班时间" width="120" align="center">
          <template #default="scope">
            <span v-if="scope.row.doctor">{{ getDoctorSchedule(scope.row.doctor) }}</span>
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
      { name: "普外科", description: "主要治疗普通外科疾病，如外伤、疝气等。", doctor: null, roomNumber: "A201", director: "王医生", schedule: [{ doctor: "张医生", time: "上午" }, { doctor: "李医生", time: "下午" }] },
      { name: "骨科", description: "主要治疗骨科疾病，如骨折、关节炎等。", doctor: null, roomNumber: "B301", director: "张医生", schedule: [{ doctor: "王医生", time: "全天" }, { doctor: "赵医生", time: "上午" }] },
      { name: "神经外科", description: "主要治疗神经外科疾病，如脑瘤、脊柱畸形等。", doctor: null, roomNumber: "C401", director: "李医生", schedule: [{ doctor: "张医生", time: "全天" }, { doctor: "赵医生", time: "下午" }] },
      { name: "心胸外科", description: "主要治疗心胸外科疾病，如心脏病、肺癌等。", doctor: null, roomNumber: "D501", director: "赵医生", schedule: [{ doctor: "李医生", time: "上午" }, { doctor: "王医生", time: "下午" }] }
    ]);

    const doctors = ref([
      { label: "张医生", value: "张医生", contact: "123-456-7890" },
      { label: "李医生", value: "李医生", contact: "234-567-8901" },
      { label: "王医生", value: "王医生", contact: "345-678-9012" },
      { label: "赵医生", value: "赵医生", contact: "456-789-0123" }
    ]);

    const getDoctorContact = (doctorName) => {
      const doctor = doctors.value.find(d => d.label === doctorName);
      return doctor ? (doctor.contact || "联系方式未知") : "联系方式未知";
    };

    const getDoctorSchedule = (doctorName) => {
      const dept = departments.value.find(d => d.doctor === doctorName);
      if (dept) {
        const s = dept.schedule.find(s => s.doctor === doctorName);
        if (s) return s.time;
      }
      return "值班时间未知";
    };

    return { departments, doctors, getDoctorContact, getDoctorSchedule };
  }
};
</script>

<style scoped>
</style>
