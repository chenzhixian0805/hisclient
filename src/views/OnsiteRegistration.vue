<template>
  <div class="wrapper">
    <div class="link">挂号收费>窗口挂号</div>
    <el-divider />
    <div class="header">
      <el-button type="primary" style="margin-left: 30px;">挂号</el-button>
      <el-button type="info">清除</el-button>
    </div>
    <div class="info">
      <h3 >基本信息：</h3>
      <!-- form表单 -->
      <el-form :inline="true" class="demo-form-inline" style="margin-top: 20px;">
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
          <el-date-picker style="width:185px" v-model="birthday" type="date" placeholder="出生日期" />
        </el-form-item>
        <el-form-item label="挂号科室:">
          <el-select v-model="dept" placeholder="挂号科室" style="width: 172px">
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
    <div class="registerMessage">
      <h3>挂号信息：</h3>
       <!-- form表单 -->
       <el-form :inline="true" class="demo-form-inline" style="margin-top: 20px;">
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
          <el-date-picker style="width:185px" v-model="birthday" type="date" placeholder="出生日期" />
        </el-form-item>
        <el-form-item label="挂号科室:">
          <el-select v-model="dept" placeholder="挂号科室" style="width: 172px">
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
  margin-top: 20px;
  height: 40px;
}
.wrapper .info {
  margin-left: 30px;
}

.wrapper .registerMessage {
  margin-left: 30px;
}
</style>