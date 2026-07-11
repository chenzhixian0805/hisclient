<template>
  <div class="wrapper">
    <el-container class="main-container">
      <el-aside :width="isCollapsed ? '60px' : '220px'" class="sidebar">
        <div class="sidebar-header" :class="{ collapsed: isCollapsed }">
          <el-icon class="sidebar-logo">
            <OfficeBuilding />
          </el-icon>
          <span v-show="!isCollapsed" class="sidebar-title">东软云医院</span>
          <el-icon v-show="!isCollapsed" class="collapse-icon" @click.stop="toggleCollapse">
            <ChevronLeft />
          </el-icon>
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
        <div v-show="isCollapsed" class="expand-icon" @click="toggleCollapse">
          <el-icon><ChevronRight /></el-icon>
        </div>
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
            <div class="mobile-logo">
              <el-icon class="mobile-logo-icon"><OfficeBuilding /></el-icon>
              <span class="mobile-logo-text">东软云医院</span>
            </div>
            <div class="breadcrumb">
              <span class="breadcrumb-item">首页</span>
              <span class="breadcrumb-separator">/</span>
              <span class="breadcrumb-item active">{{ currentPageName }}</span>
            </div>
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
      drawerVisible: false,
      isMobile: false,
      isCollapsed: false,
      currentPageName: '',
    };
  },
  mounted() {
    this.checkMobile();
    this.updatePageName();
    window.addEventListener('resize', this.checkMobile);
    this.$router.afterEach(() => {
      this.updatePageName();
    });
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile);
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    toggleDrawer() {
      this.drawerVisible = !this.drawerVisible;
    },
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
    closeDrawer() {
      this.drawerVisible = false;
    },
    updatePageName() {
      const routeMap = {
        '/home/onsiteRegistration': '窗口挂号',
        '/home/registrationRecord': '窗口退号',
        '/home/patientview': '患者查看',
        '/home/medicalrecord': '病历首页',
        '/home/prescribemedicine': '开设处方',
        '/home/pharmacydispensing': '药房发药',
        '/home/pharmacyinventory': '药房库存',
        '/home/internalmedicine': '内科',
        '/home/surgery': '外科',
        '/home/person': '医院职员',
      };
      this.currentPageName = routeMap[this.$route.path] || '';
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
  gap: 10px;
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
  flex: 1;
}

.collapse-icon {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.2s;
  flex-shrink: 0;
}

.collapse-icon:hover {
  color: #4db6ac;
}

.expand-icon {
  position: absolute;
  top: 22px;
  left: 50%;
  transform: translateX(-50%);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #4db6ac;
  font-size: 20px;
}

.expand-icon:hover {
  opacity: 0.8;
}

.sidebar-menu {
  border-right: none;
  min-height: calc(100% - 70px);
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
  background-color: #ffffff;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  z-index: 100;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.hamburger-btn {
  width: 36px;
  height: 36px;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 6px;
  background-color: rgba(77, 182, 172, 0.1);
  transition: all 0.2s;
}

.hamburger-btn:hover {
  background-color: rgba(77, 182, 172, 0.15);
}

.hamburger-icon {
  font-size: 20px;
  color: #4db6ac;
}

.mobile-logo {
  display: none;
  align-items: center;
  gap: 6px;
}

.mobile-logo-icon {
  font-size: 20px;
  color: #4db6ac;
}

.mobile-logo-text {
  font-size: 14px;
  font-weight: 600;
  color: #303133;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.breadcrumb-item {
  color: #606266;
}

.breadcrumb-item.active {
  color: #4db6ac;
  font-weight: 500;
}

.breadcrumb-separator {
  color: #c0c4cc;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-name {
  font-size: 14px;
  color: #606266;
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
  background-color: rgba(0, 0, 0, 0.04);
}

.user-icon {
  font-size: 18px;
  color: #909399;
}

.user-name-text {
  font-size: 14px;
  color: #606266;
}

.arrow-icon {
  font-size: 12px;
  color: #909399;
}

.main-content {
  background-color: #f5f7fa;
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

  .mobile-logo {
    display: flex;
  }

  .breadcrumb {
    display: none;
  }

  .wrapper-header {
    padding: 0 15px;
    height: 48px;
  }

  .user-name {
    display: none;
  }

  .main-content {
    padding: 12px;
  }
}

@media screen and (max-width: 480px) {
  .wrapper-header {
    padding: 0 10px;
    height: 45px;
  }

  .breadcrumb {
    font-size: 12px;
  }

  .main-content {
    padding: 8px;
  }
}
</style>
