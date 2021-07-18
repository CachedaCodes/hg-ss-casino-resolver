<template>
  <div class="row">
    <TilesPanel />
    <CluesGroup is-column="true" />
  </div>
  <CluesGroup />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import { useStore } from '@/store';

import TilesPanel from '@/components/TilesPanel.vue';
import CluesGroup from '@/components/CluesGroup.vue';

export default defineComponent({
  name: 'App',
  components: {
    CluesGroup,
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

.row {
  display: flex;
  flex-direction: row;
}
</style>
