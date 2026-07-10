<template>
  <div class="wrapper">
    <div class="link">人员管理>医院职员</div>
    <el-divider />
    <div class="info">
      <h3>医生列表：</h3>
      <el-table :data="doctors" style="width: 100%" stripe border>
        <el-table-column prop="name" label="姓名" width="150" align="center">
          <template v-slot="scope">
            <el-input v-model="scope.row.name" placeholder="请输入姓名" />
          </template>
        </el-table-column>
        <el-table-column prop="position" label="职位" width="150" align="center">
          <template v-slot="scope">
            <el-input v-model="scope.row.position" placeholder="请输入职位" />
          </template>
        </el-table-column>
        <el-table-column prop="department" label="所属科室" width="200" align="center">
          <template v-slot="scope">
            <el-input v-model="scope.row.department" placeholder="请输入所属科室" />
          </template>
        </el-table-column>
        <el-table-column prop="contact" label="联系方式" width="200" align="center">
          <template v-slot="scope">
            <el-input v-model="scope.row.contact" placeholder="请输入联系方式" />
          </template>
        </el-table-column>
        <el-table-column prop="salaryBenefits" label="工资福利" width="200" align="center">
          <template v-slot="scope">
            <el-input v-model="scope.row.salaryBenefits" placeholder="请输入工资福利" />
          </template>
        </el-table-column>
        <el-table-column prop="gender" label="性别" width="100" align="center">
          <template v-slot="scope">
            <el-select v-model="scope.row.gender" placeholder="请选择性别">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="birthdate" label="出生日期" width="200" align="center">
          <template v-slot="scope">
            <el-date-picker v-model="scope.row.birthdate" type="date" placeholder="选择出生日期"></el-date-picker>
          </template>
        </el-table-column>
        <el-table-column prop="hiredate" label="入职日期" width="200" align="center">
          <template v-slot="scope">
            <el-date-picker v-model="scope.row.hiredate" type="date" placeholder="选择入职日期"></el-date-picker>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150" align="center">
          <template v-slot="scope">
            <el-button type="danger" size="small" @click="removeDoctor(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="dialog-footer" style="margin-top: 10px;">
        <el-button type="primary" plain @click="addDoctor">增加医生</el-button>
        <el-button type="primary" plain @click="saveDoctors">保存医生信息</el-button>
      </div>

      <h3>护士列表：</h3>
      <el-table :data="nurses" style="width: 100%" stripe border>
        <el-table-column prop="name" label="姓名" width="150" align="center">
          <template v-slot="scope">
            <el-input v-model="scope.row.name" placeholder="请输入姓名" />
          </template>
        </el-table-column>
        <el-table-column prop="position" label="职位" width="150" align="center">
          <template v-slot="scope">
            <el-input v-model="scope.row.position" placeholder="请输入职位" />
          </template>
        </el-table-column>
        <el-table-column prop="department" label="所属科室" width="200" align="center">
          <template v-slot="scope">
            <el-input v-model="scope.row.department" placeholder="请输入所属科室" />
          </template>
        </el-table-column>
        <el-table-column prop="contact" label="联系方式" width="200" align="center">
          <template v-slot="scope">
            <el-input v-model="scope.row.contact" placeholder="请输入联系方式" />
          </template>
        </el-table-column>
        <el-table-column prop="salaryBenefits" label="工资福利" width="200" align="center">
          <template v-slot="scope">
            <el-input v-model="scope.row.salaryBenefits" placeholder="请输入工资福利" />
          </template>
        </el-table-column>
        <el-table-column prop="gender" label="性别" width="100" align="center">
          <template v-slot="scope">
            <el-select v-model="scope.row.gender" placeholder="请选择性别">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="birthdate" label="出生日期" width="200" align="center">
          <template v-slot="scope">
            <el-date-picker v-model="scope.row.birthdate" type="date" placeholder="选择出生日期"></el-date-picker>
          </template>
        </el-table-column>
        <el-table-column prop="hiredate" label="入职日期" width="200" align="center">
          <template v-slot="scope">
            <el-date-picker v-model="scope.row.hiredate" type="date" placeholder="选择入职日期"></el-date-picker>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150" align="center">
          <template v-slot="scope">
            <el-button type="danger" size="small" @click="removeNurse(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="dialog-footer" style="margin-top: 10px;">
        <el-button type="primary" plain @click="addNurse">增加护士</el-button>
        <el-button type="primary" plain @click="saveNurses">保存护士信息</el-button>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { ref } from "vue";

export default {
  name: "Person",
  setup() {
    const doctors = ref([
      {
        name: "张三",
        position: "主治医生",
        department: "内科",
        contact: "123-456-7890",
        salaryBenefits: "20000元/月",
        gender: "男",
        birthdate: "1980-01-01",
        hiredate: "2010-01-01"
      },
      {
        name: "李四",
        position: "副主任医生",
        department: "外科",
        contact: "234-567-8901",
        salaryBenefits: "25000元/月",
        gender: "女",
        birthdate: "1985-02-01",
        hiredate: "2012-03-01"
      }
    ]);

    const nurses = ref([
      {
        name: "小红",
        position: "护士长",
        department: "内科",
        contact: "345-678-9012",
        salaryBenefits: "15000元/月",
        gender: "女",
        birthdate: "1990-05-01",
        hiredate: "2015-04-01"
      },
      {
        name: "小明",
        position: "护士",
        department: "外科",
        contact: "456-789-0123",
        salaryBenefits: "12000元/月",
        gender: "男",
        birthdate: "1992-07-01",
        hiredate: "2018-06-01"
      }
    ]);

    const addDoctor = () => {
      doctors.value.push({
        name: "",
        position: "",
        department: "",
        contact: "",
        salaryBenefits: "",
        gender: "",
        birthdate: "",
        hiredate: ""
      });
    };

    const removeDoctor = index => {
      doctors.value.splice(index, 1);
    };

    const saveDoctors = () => {
      console.log("保存医生信息：", doctors.value);
    };

    const addNurse = () => {
      nurses.value.push({
        name: "",
        position: "",
        department: "",
        contact: "",
        salaryBenefits: "",
        gender: "",
        birthdate: "",
        hiredate: ""
      });
    };

    const removeNurse = index => {
      nurses.value.splice(index, 1);
    };

    const saveNurses = () => {
      console.log("保存护士信息：", nurses.value);
    };

    return {
      doctors,
      nurses,
      addDoctor,
      removeDoctor,
      saveDoctors,
      addNurse,
      removeNurse,
      saveNurses
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
  margin-top: 10px;
}
</style>
  