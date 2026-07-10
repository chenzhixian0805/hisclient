<template>
  <!-- 此处编写h5代码 -->
  <div class="wrapper">
    <el-container>
      <el-header class="wrapper-header">
        <div class="header-left">
          <!-- 汉堡菜单按钮 -->
          <el-icon class="hamburger-btn" @click="toggleSidebar">
            <Fold v-if="sidebarVisible" />
            <Expand v-else />
          </el-icon>
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
        <!-- 抽屉侧边栏（所有屏幕尺寸共用） -->
        <el-drawer
          v-model="sidebarVisible"
          direction="ltr"
          size="200px"
          :with-header="false"
        >
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo mobile-menu"
            default-active="2"
            text-color="#fff"
            unique-opened="true"
            router="true"
            @select="onMenuSelect"
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
        </el-drawer>

        <el-main class="main">
          <router-view></router-view>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
// 此处编写js代码
export default {
  data() {
    return {
      isMobile: false,
      sidebarVisible: false,
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 768;
      if (!this.isMobile) {
        this.sidebarVisible = false;
      }
    },
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    },
    onMenuSelect() {
      // 移动端点击菜单项后自动关闭抽屉
      this.sidebarVisible = false;
    },
  },
};
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
  align-items: center;
  color: white;
}

.wrapper .wrapper-header .header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.hamburger-btn {
  font-size: 20px;
  cursor: pointer;
  color: white;
  display: flex;
}

.wrapper .wrapper-header .header-right {
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

/* 移动端抽屉菜单样式 */
.mobile-menu {
  border-right: none;
  min-height: 100%;
}

/*************** 响应式适配 ****************/
/* 平板及以下：隐藏非必要信息 */
@media screen and (max-width: 768px) {
  .wrapper .wrapper-header .header-left .text {
    display: none;
  }

  .wrapper .wrapper-header .header-right .user-name {
    display: none;
  }

  .wrapper .wrapper-header .text-icon {
    font-size: 16px;
  }
}

/* 手机端进一步优化 */
@media screen and (max-width: 480px) {
  .wrapper .wrapper-header .text-icon span {
    display: none;
  }
}
</style>
