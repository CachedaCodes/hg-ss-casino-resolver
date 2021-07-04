<template>
  <TilesPanel />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { mapGetters } from 'vuex';
import { useStore } from '@/store';

import TilesPanel from '@/components/TilesPanel.vue';

export default defineComponent({
  name: 'App',
  components: {
    TilesPanel,
  },
  setup() {
    const store = useStore();

    return {
    };
  },
  computed: {
    ...mapGetters('profile', ['isClient', 'isAdmin']),
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
