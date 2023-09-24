<script setup>
import { ref, onMounted } from "vue";
import VPSwitch from "vitepress/dist/client/theme-default/components/VPSwitch.vue";

const wakeLockSupported = ref(false);
const cookingModeEnabled = ref(false);

let wakeLock = null;

onMounted(() => {
  wakeLockSupported.value = "wakeLock" in navigator;
});

async function toggleCookingMode() {
  cookingModeEnabled.value = !cookingModeEnabled.value;
  if (cookingModeEnabled.value) {
    try {
      wakeLock = await navigator.wakeLock.request("screen");
    } catch (err) {
      console.error(err);
      cookingModeEnabled.value = false;
    }
  } else {
    if (wakeLock) {
      wakeLock.release().then(() => (wakeLock = null));
    }
  }
}
</script>

<template>
  <div style="display: flex">
    <VPSwitch
      title="toggle cooking mode"
      @click="toggleCookingMode"
      :class="'VPSwitchAppearance ' + (cookingModeEnabled ? 'enabled' : '')"
      style="margin-right: 5px"
    >
    </VPSwitch>
    <span :style="'font-weight: ' + (cookingModeEnabled ? 'bold' : 'normal')"
      >Cooking mode</span
    >
  </div>

  <!-- <div v-if="wakeLockSupported">
    <input
      v-model="cookingModeEnabled"
      @change="toggleCookingMode"
      type="checkbox"
      id="wakelockinput"
    />
    <label
      :style="'font-weight: ' + (cookingModeEnabled ? 'bold' : 'normal')"
      for="wakelockinput"
      >Cooking mode</label
    >
  </div> -->
</template>

<style scoped>
.enabled.VPSwitchAppearance :deep(.check) {
  /*rtl:ignore*/
  transform: translateX(18px);
}
</style>
