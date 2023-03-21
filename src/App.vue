<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { EMapType } from './lib/protocol/map/map';
import './lib/SMap'
let map: any = {};
onMounted(() => {
  map = SMap.getMap(EMapType.GAODE , {
    id: 'mapContainer',
    zoom: 11,//级别
    center: [116.397428, 39.90923],//中心点坐标
    viewMode: '3D',//使用3D视图
  });
  map.on('click', (e: any) => {
    console.log(e, '点了地图');
  })
})

function handleClick(event: string) {
  switch (event) {
    case 'setZoom':
      const res = map.setZoom(5);
      console.log('setZoom返回值:', res);
      
      break;
  
    default:
      break;
  }
}
</script>

<template>
  <div id="main">
    <button @click="handleClick('setZoom')">setZoom</button>
    <div id="mapContainer"></div>
  </div>
</template>

<style scoped>
#main {
  width: 100%;
  height: 100%;
}

#mapContainer {
  width: 100%;
  height: 450px;
  background: #f60;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}</style>
