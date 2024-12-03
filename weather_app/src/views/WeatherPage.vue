<template>
  <div class="weather-query">
    <!-- 城市输入框 -->
    <el-input
        v-model="city"
        placeholder="请输入城市"
        @keyup.enter="getWeather"
        class="input-city"
    ></el-input>
    <el-button
        type="primary"
        @click="getWeather"
        class="btn-query"
    >查询天气</el-button>

    <!-- 天气信息卡片 -->
    <div v-if="weather">
      <el-card class="weather-card">
        <div class="weather-header">
          <h3>{{ weather.location.name }} 当前天气</h3>
          <el-tag type="primary" class="weather-condition">{{ weather.current.condition.text }}</el-tag>
        </div>
        <div class="weather-body">
          <div class="weather-info">
            <img
                :src="'http://' + weather.current.condition.icon"
                alt="weather-icon"
                class="weather-icon"
            />
            <div class="weather-detail">
              <p class="temp">{{ weather.current.temp_c }}°C</p>
              <p>湿度: {{ weather.current.humidity }}%</p>
              <p>风速: {{ weather.current.wind_kph }} km/h</p>
            </div>
          </div>
          <div class="weather-footer">
            <p>更新时间：{{ weather.current.last_updated }}</p>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: 'shanghai',  // 默认查询上海的天气
      weather: null
    };
  },
  mounted() {
    this.getWeather();  // 页面加载时自动查询天气
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
  max-width: 480px;
  margin: 50px auto;
  text-align: center;
}

/* 城市输入框样式 */
.input-city {
  margin-bottom: 20px;
}

/* 查询按钮样式 */
.btn-query {
  margin-bottom: 30px;
}

/* 天气信息卡片样式 */
.weather-card {
  background-color: #f0f8ff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 天气头部样式 */
.weather-header {
  margin-bottom: 15px;
}

.weather-header h3 {
  font-size: 1.8rem;
  font-weight: bold;
}

.weather-condition {
  font-size: 1.1rem;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
}

/* 天气信息内容样式 */
.weather-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.weather-info {
  display: flex;
  align-items: center;
}

.weather-icon {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}

.weather-detail p {
  margin: 5px 0;
  font-size: 1.1rem;
}

.temp {
  font-size: 2rem;
  font-weight: bold;
}

/* 底部更新时间 */
.weather-footer {
  font-size: 0.9rem;
  color: #888;
  margin-top: 15px;
}

/* 响应式样式 */
@media (max-width: 600px) {
  .weather-card {
    padding: 15px;
  }

  .weather-header h3 {
    font-size: 1.5rem;
  }

  .temp {
    font-size: 1.8rem;
  }
}
</style>
