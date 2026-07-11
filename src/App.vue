<template>
  <router-view/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #303133;
  background-color: #f0f2f5;
}

#app {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 768px) {
  html, body {
    font-size: 13px;
  }
}

@media screen and (max-width: 480px) {
  html, body {
    font-size: 12px;
  }
}
</style>
