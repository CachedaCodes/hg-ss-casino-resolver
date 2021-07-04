import { GetterTree } from 'vuex';

// eslint-disable-next-line import/no-cycle
import { RootState } from '@/store';
import { TilesMatrix } from '@/@types';
import { State } from './state';

export type Getters = {
  tilesMatrix(state: State): TilesMatrix;
}

export const getters: GetterTree<State, RootState> & Getters = {
  tilesMatrix: (state) => state.tilesMatrix,
};
