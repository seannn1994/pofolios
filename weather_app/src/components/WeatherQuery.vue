<template>
  <div class="weather-query">
    <!-- 输入框和按钮的容器 -->
    <div class="form-container">
      <el-input
          v-model="city"
          placeholder="请输入城市"
          @keyup.enter="getWeather"
          class="input-field"
          clearable
      />
      <el-button
          type="primary"
          @click="getWeather"
          class="search-button"
      >
        查询天气
      </el-button>
    </div>

    <!-- 显示天气信息 -->
    <div v-if="weather" class="weather-info">
      <el-card class="weather-card">
        <h3>{{ weather.location.name }} 当前天气</h3>
        <p>温度: {{ weather.current.temp_c }}°C</p>
        <p>天气: {{ weather.current.condition.text }}</p>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: '',
      weather: null
    };
  },
  methods: {
    async getWeather() {
      try {
        const response = await this.$axios.get(`http://localhost:8080/weather/${this.city}`);
        this.weather = response.data;
      } catch (error) {
        this.$message.error('无法获取天气信息');
      }
    }
  }
}
</script>

<style scoped>
.weather-query {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f0f2f5;
  padding: 20px;
}

.form-container {
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: slideIn 0.5s ease-out;
}

.input-field {
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.input-field:focus {
  border-color: #409eff;
  box-shadow: 0 0 5px rgba(64, 158, 255, 0.5);
}

.search-button {
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  transition: all 0.3s ease;
  background-color: #409eff;
  color: #fff;
  box-shadow: 0 4px 10px rgba(64, 158, 255, 0.2);
}

.search-button:hover {
  background-color: #66b1ff;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(64, 158, 255, 0.3);
}

.weather-info {
  margin-top: 30px;
  width: 100%;
  max-width: 480px;
}

.weather-card {
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.weather-card h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
}

.weather-card p {
  font-size: 16px;
  color: #666;
}

@keyframes slideIn {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .form-container {
    width: 100%;
    padding: 10px;
  }

  .input-field {
    font-size: 14px;
  }

  .search-button {
    font-size: 14px;
  }

  .weather-card h3 {
    font-size: 18px;
  }

  .weather-card p {
    font-size: 14px;
  }
}
</style>
