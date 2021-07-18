<template>
  <ul
    class="clues-group"
    :class="cluesModifyingClass"
  >
    <li
      v-for="(clue, index) in cluesSource"
      :key="`${clueKeyPrefix}${index}`"
      class="clues-group__clue"
      :class="`clues-group__clue--${index}`"
    >
      <Clue
        :clue="clue"
        :clue-index="index"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import {
  computed, defineComponent,
} from 'vue';
import { useStore } from 'vuex';
import Clue from './Clue.vue';

export default defineComponent({
  name: 'CluesGroup',
  components: {
    Clue,
  },
  props: {
    isColumn: {
      type: String,
    },
  },
  setup(props) {
    const store = useStore();

    const cluesModifyingClass = computed(() => {
      const { isColumn } = props;

      if (isColumn) {
        return 'clues-group--column';
      }

      return '';
    });

    const clueKeyPrefix = computed(() => {
      const { isColumn } = props;
      let clueDirection = 'row-';

      if (isColumn) {
        clueDirection = 'column-';
      }

      return `clues-group-${clueDirection}`;
    });

    const cluesSource = computed(() => {
      const { isColumn } = props;

      return store.getters[`casino/clues${isColumn ? 'Column' : 'Row'}`];
    });

    return {
      cluesModifyingClass,
      clueKeyPrefix,
      cluesSource,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/style.scss';
@import '../styles/theme.scss';

.clues-group {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;

  &__clue {
    margin: 0 $gap-row 0 0;
  }

  &--column {
    flex-direction: column;

    .clues-group__clue {
      margin: 0 0 $gap-row 0;
    }
  }
}
</style>
