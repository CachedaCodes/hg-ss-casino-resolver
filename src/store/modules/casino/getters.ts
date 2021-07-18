import { GetterTree } from 'vuex';

// eslint-disable-next-line import/no-cycle
import { RootState } from '@/store';
import { Clue, TilesMatrix } from '@/@types';
import { State } from './state';

export type Getters = {
  tilesMatrix(state: State): TilesMatrix;
  cluesColumn(state: State): Clue[];
  cluesRow(state: State): Clue[];
}

export const getters: GetterTree<State, RootState> & Getters = {
  tilesMatrix: (state) => state.tilesMatrix,
  cluesColumn: (state) => state.cluesColumn,
  cluesRow: (state) => state.cluesRow,
};
