import { MutationTree } from 'vuex';
import { Clue, TilesMatrix } from '@/@types';
import { State } from './state';
import { CasinoMutationTypes as MutationTypes } from './mutation-types';

export type Mutations<S = State> = {
  [MutationTypes.SET_TILES_MATRIX](state: S, payload: TilesMatrix): void;
  [MutationTypes.SET_CLUES_COLUMN](state: S, payload: Clue[]): void;
  [MutationTypes.SET_CLUES_ROW](state: S, payload: Clue[]): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_TILES_MATRIX](state: State, tilesMatrix: TilesMatrix) {
    state.tilesMatrix = tilesMatrix;
  },
  [MutationTypes.SET_CLUES_COLUMN](state: State, cluesColumn: Clue[]) {
    state.cluesColumn = cluesColumn;
  },
  [MutationTypes.SET_CLUES_ROW](state: State, cluesRow: Clue[]) {
    state.cluesRow = cluesRow;
  },
};
