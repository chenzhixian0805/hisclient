<template>
  <div class="page-wrapper">
    <div class="page-breadcrumb">挂号收费 > 窗口挂号</div>
    <div class="page-header">
      <h3 class="page-title">基本信息</h3>
      <div class="page-actions">
        <el-button type="primary">挂号</el-button>
        <el-button type="info">清除</el-button>
      </div>
    </div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="病历号:">
        <el-input placeholder="病历号" v-model="no" clearable />
      </el-form-item>
      <el-form-item label="姓名:">
        <el-input placeholder="姓名" v-model="username" clearable />
      </el-form-item>
      <el-form-item label="性别:">
        <el-radio-group v-model="sex">
          <el-radio value="1">男</el-radio>
          <el-radio value="2">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年龄:">
        <el-input placeholder="年龄" v-model="age" clearable />
      </el-form-item>
      <el-form-item label="出生日期:">
        <el-date-picker v-model="birthday" type="date" placeholder="出生日期" />
      </el-form-item>
      <el-form-item label="挂号科室:">
        <el-select v-model="dept" placeholder="挂号科室">
          <el-option
            v-for="item in registerdept"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
    </el-form>

    <div style="margin-top: 20px;">
      <h3 class="page-title">挂号信息</h3>
      <el-form :inline="true" class="demo-form-inline" style="margin-top: 15px;">
        <el-form-item label="病历号:">
          <el-input placeholder="病历号" v-model="no" clearable />
        </el-form-item>
        <el-form-item label="姓名:">
          <el-input placeholder="姓名" v-model="username" clearable />
        </el-form-item>
        <el-form-item label="性别:">
          <el-radio-group v-model="sex">
            <el-radio value="1">男</el-radio>
            <el-radio value="2">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄:">
          <el-input placeholder="年龄" v-model="age" clearable />
        </el-form-item>
        <el-form-item label="出生日期:">
          <el-date-picker v-model="birthday" type="date" placeholder="出生日期" />
        </el-form-item>
        <el-form-item label="挂号科室:">
          <el-select v-model="dept" placeholder="挂号科室">
            <el-option
              v-for="item in registerdept"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      no: "",
      username: "",
      sex: "1",
      age: "",
      birthday: "",
      dept:"",
      registerdept:[
        {
            value:"1",
            label:"骨科"
        },
        {
            value:"2",
            label:"神经科"
        },
        {
            value:"3",
            label:"泌尿内科"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
