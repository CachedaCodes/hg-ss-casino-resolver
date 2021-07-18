<template>
  <div
    class="tile"
    :class="getTileClass"
  >
    <input
      v-model.number="inputValue"
      type="number"
      class="tile__input"
    >
  </div>
</template>

<script lang="ts">
import {
  ref, computed, defineComponent, PropType,
} from 'vue';
import { Tile } from '@/@types';

export default defineComponent({
  name: 'Tile',
  props: {
    tile: {
      type: Object as PropType<Tile>,
      required: true,
    },
  },
  setup(props) {
    const inputValue = ref('');

    const getTileClass = computed(() => {
      const tileProp = props.tile;

      if (!tileProp.isFullyAssessed) {
        return '';
      }

      if (tileProp.possibleCoinValues.length === 1 && tileProp.possibleCoinValues[0] === 1) {
        return 'tile--ignore';
      }

      if (tileProp.canHaveVoltorb) {
        if (tileProp.possibleCoinValues.length > 0) {
          return 'tile--possible-prize';
        }

        return 'tile--voltorb';
      }
      return 'tile--sure-prize';
    });

    return {
      inputValue,
      getTileClass,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/style.scss';
@import '../styles/theme.scss';

.tile {
  display: flex;
  align-items: center;
  justify-content: center;

  background: $color-black;
  border: 8px solid $color-fair-green;
  $tile-input-gap: 6px;
  $assessed-input-border: 5px;

  width: $tile-width;
  height: $tile-height;

  &__input {
    width: calc(#{$tile-width} - #{$tile-input-gap});
    height: calc(#{$tile-height} - #{$tile-input-gap});
    box-sizing: border-box;

    background: $color-background-gray;
    border: 0;
    padding: 0;

    font-size: $tile-font-size;
    text-align: center;
  }

  &--ignore {
    .tile__input {
      background: $assessment-color-background-purple;
      border: #{$assessed-input-border} solid $assessment-color-border-purple;
    }
  }

  &--voltorb {
    .tile__input {
      background: $assessment-color-background-red;
      border: #{$assessed-input-border} solid $assessment-color-border-red;
    }
  }

  &--possible-prize {
    .tile__input {
      background: $assessment-color-background-yellow;
      border: #{$assessed-input-border} solid $assessment-color-border-yellow;
    }
  }

  &--sure-prize {
    .tile__input {
      background: $assessment-color-background-green;
      border: #{$assessed-input-border} solid $assessment-color-border-green;
    }
  }
}
</style>
