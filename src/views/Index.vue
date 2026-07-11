<template>
  <div class="wrapper">
    <el-container class="main-container">
      <el-header class="wrapper-header">
        <div class="header-left">
          <el-icon class="hamburger-btn" @click="toggleSidebar">
            <Fold v-if="sidebarVisible" />
            <Expand v-else />
          </el-icon>
          <div class="logo-wrapper">
            <el-icon class="logo-icon">
              <OfficeBuilding />
            </el-icon>
            <h4 class="logo-text">东软云医院</h4>
          </div>
          <span class="version">v1.0</span>
        </div>
        <div class="header-right">
          <span class="user-name">超级管理员</span>
          <el-dropdown :hide-on-click="false" trigger="click">
            <div class="user-dropdown">
              <el-icon class="user-icon">
                <User />
              </el-icon>
              <span class="user-name-text">李四</span>
              <el-icon class="arrow-icon">
                <arrow-down />
              </el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>

      <el-container class="wrapper-main">
        <el-drawer
          v-model="sidebarVisible"
          direction="ltr"
          size="200px"
          :with-header="false"
          :show-close="false"
          :modal-append-to-body="false"
          :close-on-click-modal="true"
        >
          <div class="drawer-header">
            <el-icon class="drawer-logo">
              <OfficeBuilding />
            </el-icon>
            <span class="drawer-title">东软云医院</span>
          </div>
          <el-menu
            active-text-color="#ffd04b"
            background-color="#2f4050"
            class="sidebar-menu"
            default-active="2"
            text-color="#a7b1c2"
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

        <el-main class="main-content">
          <div class="content-wrapper">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarVisible: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    },
    onMenuSelect() {
      this.sidebarVisible = false;
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.main-container {
  width: 100%;
  height: 100%;
}

.wrapper-header {
  background: linear-gradient(135deg, #545c64 0%, #6b737d 100%);
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 100;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.hamburger-btn {
  font-size: 22px;
  cursor: pointer;
  color: white;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.hamburger-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  font-size: 24px;
  color: #ffd04b;
}

.logo-text {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  letter-spacing: 1px;
}

.version {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2px 8px;
  border-radius: 10px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-name {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
}

.user-dropdown {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 20px;
  transition: background-color 0.2s;
}

.user-dropdown:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.user-icon {
  font-size: 18px;
  color: #ffd04b;
}

.user-name-text {
  font-size: 14px;
  color: white;
}

.arrow-icon {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
}

.wrapper-main {
  flex: 1;
  overflow: hidden;
}

.drawer-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px 20px 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 10px;
}

.drawer-logo {
  font-size: 28px;
  color: #ffd04b;
}

.drawer-title {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.sidebar-menu {
  border-right: none;
  min-height: calc(100% - 70px);
}

.main-content {
  background-color: #f5f6fa;
  padding: 20px;
  overflow-y: auto;
}

.content-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

@media screen and (max-width: 1024px) {
  .content-wrapper {
    padding: 0;
  }
}

@media screen and (max-width: 768px) {
  .wrapper-header {
    padding: 0 15px;
    height: 55px;
  }

  .version {
    display: none;
  }

  .user-name {
    display: none;
  }

  .logo-text {
    font-size: 16px;
  }

  .main-content {
    padding: 12px;
  }
}

@media screen and (max-width: 480px) {
  .wrapper-header {
    padding: 0 10px;
    height: 50px;
  }

  .logo-icon {
    font-size: 20px;
  }

  .logo-text {
    font-size: 14px;
  }

  .main-content {
    padding: 8px;
  }
}
</style>
