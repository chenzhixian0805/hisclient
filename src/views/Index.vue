<template>
  <!-- 此处编写h5代码 -->
  <div class="wrapper">
    <el-container>
      <el-header class="wrapper-header">
        <div class="header-left">
          <h4 class="text-icon">
            <span style="position: relative;top:4px">
              <el-icon>
                <OfficeBuilding />
              </el-icon>
            </span>
            东软云医院
          </h4>
          <div class="text">v1.0</div>
        </div>
        <div class="header-right">
          <div class="user-name">超级管理员</div>
          <div class="user-listwrapper">
            <el-dropdown :hide-on-click="false">
              <span class="el-dropdown-link">
                李四
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>个人信息</el-dropdown-item>
                  <el-dropdown-item>设置</el-dropdown-item>
                  <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <el-container class="wrapper-main">
        <el-aside width="200px" class="aside">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
            unique-opened="true"
            router="true"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><HelpFilled /></el-icon>
                <span>挂号收费</span>
              </template>
              <el-menu-item index="/home/onsiteRegistration">窗口挂号</el-menu-item>
              <el-menu-item index="/home/registrationRecord">窗口退号</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><Avatar /></el-icon>
                <span>门诊医生</span>
              </template>
              <el-menu-item index="/home/patientview">患者查看</el-menu-item>
              <el-menu-item index="/home/medicalrecord">医生诊疗:病历首页</el-menu-item>
              <el-menu-item index="/home/prescribemedicine">医生诊疗:开设处方</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <el-icon><FirstAidKit /></el-icon>
                <span>药房管理</span>
              </template>
              <el-menu-item index="/home/pharmacydispensing">药房发药</el-menu-item>
              <el-menu-item index="/home/pharmacyinventory">药房库存</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="4">
              <template #title>
                <el-icon><House /></el-icon>
                <span>医院科室</span>
              </template>
              <el-menu-item index="/home/internalmedicine">内科</el-menu-item>
              <el-menu-item index="/home/surgery">外科</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="5">
              <template #title>
                <el-icon><UserFilled /></el-icon>
                <span>人员管理</span>
              </template>
              <el-menu-item index="/home/person">医院职员</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <el-main class="main">
          <router-view></router-view>
          </el-main>
        
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 此处编写js代码
export default {};
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
}
/* 此处编写css代码 */
.wrapper {
  height: 100%;
  width: 100%;
}
/*****************头部样式 ***************** */
.wrapper .wrapper-header {
  background: #545c64;
  height: 50px;
  /* 设置弹性容器 */
  display: flex;
  /* 水平方向排列方式 */
  justify-content: space-between;
  color: white;
}

.wrapper .wrapper-header .header-left {
  display: flex;
  width: 200px;
  /* 水平方向排列方式 */
  justify-content: space-around;
  /* 垂直方向排列方式 ：剧中*/
  align-items: center;
}

.wrapper .wrapper-header .header-right {
  width: 300px;
  display: flex;
  justify-content: right;
  align-items: center;
}
.wrapper .wrapper-header .header-right .el-dropdown-link {
  color: white;
  font-size: 15px;
  margin-left: 15px;
  margin-right: 15px;
}
/*************** main样式 ****************/
.wrapper .wrapper-main .aside {
  height: 800px;
  background: #545c64;
}

</style>