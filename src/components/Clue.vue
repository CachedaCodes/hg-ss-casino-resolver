<template>
  <div
    class="clue"
    :class="`clue--${clueIndex}`"
  >
    <input
      v-model.number="inputPrizeValue"
      class="clue__input clue__input--prize-amount"
      type="number"
    >
    <img
      src="../../public/assets/voltorb.png"
      class="clue__voltorb-img"
    >
    <input
      v-model.number="inputVoltorbValue"
      class="clue__input clue__input--voltorb-amount"
      type="number"
    >
  </div>
</template>

<script lang="ts">
import {
  defineComponent, PropType, ref,
} from 'vue';
import { Clue } from '@/@types';

export default defineComponent({
  name: 'Clue',
  props: {
    clue: {
      type: Object as PropType<Clue>,
      required: true,
    },
    clueIndex: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const inputPrizeValue = ref('');
    const inputVoltorbValue = ref('');

    return {
      inputPrizeValue,
      inputVoltorbValue,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/style.scss';
@import '../styles/theme.scss';

.clue {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  background: $color-fair-green;
  border: 8px solid $color-fair-green;

  width: $tile-width;
  height: $tile-height;

  &__input {
    flex: 1;
    box-sizing: border-box;
    width: inherit;

    border: 0;

    font-size: $clue-font-size;
    text-align: end;

    &--voltorb-amount {
      flex: 2;
      margin-top: 8px;
    }
  }

  &__voltorb-img {
    position: absolute;
    bottom: 0;
    left: 4px;
    height: 41px;
  }

  &--0 {
    input {
      background: $clue-color-red;
    }
  }

  &--1 {
    input {
      background: $clue-color-green;
    }
  }

  &--2 {
    input {
      background: $clue-color-yellow;
    }
  }

  &--3 {
    input {
      background: $clue-color-blue;
    }
  }

  &--4 {
    input {
      background: $clue-color-purple;
    }
  }
}
</style>
