<template>
  <div class="wrapper">
    <el-container class="main-container">
      <el-aside :width="isCollapsed ? '60px' : '220px'" class="sidebar" :class="{ 'sidebar-mobile': isMobile }">
        <div class="sidebar-header" :class="{ collapsed: isCollapsed }">
          <el-icon class="sidebar-logo">
            <OfficeBuilding />
          </el-icon>
          <span v-show="!isCollapsed" class="sidebar-title">东软云医院</span>
          <div class="collapse-btn" @click="toggleCollapse">
            <el-icon>
              <ChevronLeft v-if="!isCollapsed" />
              <ChevronRight v-else />
            </el-icon>
          </div>
        </div>
        <el-menu
          active-text-color="#4db6ac"
          background-color="#1d2b3a"
          class="sidebar-menu"
          default-active="2"
          text-color="#a3b1bf"
          unique-opened
          router
          :collapse="isCollapsed"
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
      </el-aside>

      <el-drawer
        v-model="drawerVisible"
        direction="ltr"
        size="260px"
        :with-header="false"
        :show-close="false"
        :close-on-click-modal="true"
        class="mobile-drawer"
      >
        <div class="drawer-header">
          <el-icon class="drawer-logo">
            <OfficeBuilding />
          </el-icon>
          <span class="drawer-title">东软云医院</span>
        </div>
        <el-menu
          active-text-color="#4db6ac"
          background-color="#1d2b3a"
          class="drawer-menu"
          default-active="2"
          text-color="#a3b1bf"
          unique-opened
          router
          @select="closeDrawer"
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

      <el-container class="wrapper-right">
        <el-header class="wrapper-header">
          <div class="header-left">
            <div class="hamburger-btn" @click="toggleDrawer">
              <el-icon class="hamburger-icon">
                <Menu />
              </el-icon>
            </div>
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
      isCollapsed: false,
      drawerVisible: false,
      isMobile: false,
    };
  },
  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile);
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
      if (this.isMobile) {
        this.isCollapsed = true;
      }
    },
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
    toggleDrawer() {
      this.drawerVisible = !this.drawerVisible;
    },
    closeDrawer() {
      this.drawerVisible = false;
    },
    onMenuSelect() {
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

.sidebar {
  background-color: #1d2b3a;
  position: relative;
  transition: width 0.3s ease;
  overflow: hidden;
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
}

.sidebar-header.collapsed {
  justify-content: center;
}

.sidebar-logo {
  font-size: 28px;
  color: #4db6ac;
  flex-shrink: 0;
}

.sidebar-title {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.sidebar-menu {
  border-right: none;
  min-height: calc(100% - 120px);
}

.sidebar-menu :deep(.el-menu-item.is-active) {
  background-color: rgba(77, 182, 172, 0.15) !important;
  color: #4db6ac !important;
}

.sidebar-menu :deep(.el-menu-item:hover) {
  background-color: rgba(255, 255, 255, 0.05) !important;
}

.sidebar-menu :deep(.el-sub-menu__title:hover) {
  background-color: rgba(255, 255, 255, 0.05) !important;
}

.sidebar-menu :deep(.el-menu-item) {
  margin: 0;
}

.sidebar-menu :deep(.el-sub-menu__title) {
  margin: 0;
}

.collapse-btn {
  width: 36px;
  height: 36px;
  background-color: rgba(77, 182, 172, 0.15);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #4db6ac;
  font-size: 18px;
  transition: all 0.2s;
  flex-shrink: 0;
}

.collapse-btn:hover {
  background-color: rgba(77, 182, 172, 0.25);
}

.mobile-drawer :deep(.el-drawer__body) {
  padding: 0;
  background-color: #1d2b3a;
}

.drawer-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 24px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.drawer-logo {
  font-size: 32px;
  color: #4db6ac;
}

.drawer-title {
  font-size: 18px;
  font-weight: 600;
  color: white;
}

.drawer-menu {
  border-right: none;
  min-height: calc(100vh - 80px);
}

.drawer-menu :deep(.el-menu-item.is-active) {
  background-color: rgba(77, 182, 172, 0.15) !important;
  color: #4db6ac !important;
}

.drawer-menu :deep(.el-menu-item:hover) {
  background-color: rgba(255, 255, 255, 0.05) !important;
}

.wrapper-right {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.wrapper-header {
  background: linear-gradient(135deg, #1d2b3a 0%, #2d4356 100%);
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  z-index: 100;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.hamburger-btn {
  width: 44px;
  height: 44px;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.08);
  transition: all 0.2s;
}

.hamburger-btn:hover {
  background-color: rgba(255, 255, 255, 0.15);
}

.hamburger-icon {
  font-size: 28px;
  color: #4db6ac;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  font-size: 24px;
  color: #4db6ac;
}

.logo-text {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  letter-spacing: 1px;
}

.version {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  background-color: rgba(255, 255, 255, 0.08);
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
  color: rgba(255, 255, 255, 0.85);
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
  background-color: rgba(255, 255, 255, 0.12);
}

.user-icon {
  font-size: 18px;
  color: #4db6ac;
}

.user-name-text {
  font-size: 14px;
  color: white;
}

.arrow-icon {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
}

.main-content {
  background-color: #f0f2f5;
  padding: 20px;
  overflow-y: auto;
}

.content-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .sidebar {
    display: none;
  }

  .hamburger-btn {
    display: flex;
  }

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
