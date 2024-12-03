<template>
  <el-row class="app-container" justify="center" align="middle">
    <el-col :span="24" :sm="20" :md="16" :lg="12">
      <div class="app-content">
        <h1 class="welcome-msg">Welcome to Your Weather App</h1>
        <router-view />  <!-- 渲染子页面 -->
      </div>
    </el-col>
  </el-row>

  <!-- 云朵 -->
  <div class="cloud cloud-1"></div>
  <div class="cloud cloud-2"></div>
  <div class="cloud cloud-3"></div>

  <!-- 雨滴 -->
  <div class="rain">
    <div class="drop drop-1"></div>
    <div class="drop drop-2"></div>
    <div class="drop drop-3"></div>
    <div class="drop drop-4"></div>
    <div class="drop drop-5"></div>
    <div class="drop drop-6"></div>
    <div class="drop drop-7"></div>
    <div class="drop drop-8"></div>
    <div class="drop drop-9"></div>
    <div class="drop drop-10"></div>
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
};
</script>

<style scoped>
/* 全屏背景样式 */
.app-container {
  height: 100vh;
  background: linear-gradient(135deg, #4e73df, #2d59f3); /* 渐变背景 */
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

/* 调整内容容器 */
.app-content {
  text-align: center;
  padding: 40px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;
}

/* 欢迎语样式 */
.welcome-msg {
  font-size: 2.2rem;
  margin-bottom: 30px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  transition: font-size 0.3s ease, margin-bottom 0.3s ease;
}

/* 云朵样式 */
.cloud {
  position: absolute;
  top: -100px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  animation: moveClouds 20s linear infinite;
}

.cloud-1 {
  width: 200px;
  height: 100px;
  left: -200px;
}

.cloud-2 {
  width: 250px;
  height: 120px;
  left: 50%;
  transform: translateX(-50%);
}

.cloud-3 {
  width: 180px;
  height: 90px;
  right: -200px;
}

@keyframes moveClouds {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100vw);
  }
}

/* 雨滴样式 */
.rain {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.drop {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.6);
  width: 2px;
  height: 10px;
  animation: fall 0.5s linear infinite;
}

.drop-1 {
  left: 10%;
  animation-duration: 0.7s;
  animation-delay: 0.2s;
}

.drop-2 {
  left: 20%;
  animation-duration: 0.6s;
  animation-delay: 0.1s;
}

.drop-3 {
  left: 30%;
  animation-duration: 0.8s;
  animation-delay: 0.3s;
}

.drop-4 {
  left: 40%;
  animation-duration: 0.7s;
  animation-delay: 0.4s;
}

.drop-5 {
  left: 50%;
  animation-duration: 0.9s;
  animation-delay: 0.5s;
}

.drop-6 {
  left: 60%;
  animation-duration: 0.8s;
  animation-delay: 0.6s;
}

.drop-7 {
  left: 70%;
  animation-duration: 0.7s;
  animation-delay: 0.7s;
}

.drop-8 {
  left: 80%;
  animation-duration: 0.6s;
  animation-delay: 0.8s;
}

.drop-9 {
  left: 90%;
  animation-duration: 0.8s;
  animation-delay: 0.9s;
}

.drop-10 {
  left: 95%;
  animation-duration: 0.7s;
  animation-delay: 1s;
}

@keyframes fall {
  0% {
    top: -10px;
    opacity: 1;
  }
  100% {
    top: 100vh;
    opacity: 0;
  }
}

/* 让页面适应不同设备 */
@media (max-width: 768px) {
  .welcome-msg {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }

  .app-content {
    padding: 25px;
  }
}

@media (max-width: 600px) {
  .welcome-msg {
    font-size: 1.6rem;
    margin-bottom: 15px;
  }

  .app-content {
    padding: 20px;
    max-width: 95%;
  }
}

@media (max-width: 480px) {
  .welcome-msg {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }

  .app-content {
    padding: 15px;
    max-width: 90%;
  }
}

@media (max-width: 320px) {
  .welcome-msg {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .app-content {
    padding: 10px;
    max-width: 85%;
  }
}
</style>
