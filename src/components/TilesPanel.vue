<template>
  <ul class="tiles-panel">
    <li
      v-for="(row, rowIndex) in tilesMatrix"
      :key="`row-${rowIndex}`"
      class="tiles-panel__row"
    >
      <ul class="tiles-panel__row-tiles-wrapper">
        <li
          v-for="(tile, colIndex) in row"
          :key="`tile-${row}:${colIndex}`"
          class="tiles-panel__tile"
        >
          <Tile :tile="tile" />
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import Tile from '@/components/Tile.vue';

export default defineComponent({
  name: 'TilesPanel',
  components: {
    Tile,
  },
  computed: {
    ...mapGetters('casino', ['tilesMatrix']),
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/style.scss';

.tiles-panel {
  margin: 0 25px 25px 0;

  &, ul {
    list-style-type: none;
    padding: 0;
  }

  &__row {
    margin-bottom: $gap-row;
  }

  &__row-tiles-wrapper {
    display: flex;
  }

  &__tile {
    margin-right: $gap-column;
  }
}
</style>
