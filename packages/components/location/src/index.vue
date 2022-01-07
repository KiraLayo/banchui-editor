<template>
  <div>
    <baidu-map value class="map" center="北京" ak="XYibNR0iIfW0MqMnK31ffrGfiexpwlcm">
      <baidu-geolocation
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :showAddressBar="true"
        :autoLocation="true"
      />
    </baidu-map>
  </div>
</template>

<script>

import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import BaiduGeolocation from 'vue-baidu-map/components/controls/Geolocation.vue'

export default {
  name: "BCLocation",
  components: {
    BaiduMap,
    BaiduGeolocation
  }
};
</script>

<style scoped>
.map {
  height: 300px;
  width: 100%;
}
</style>