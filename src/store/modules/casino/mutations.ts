import { MutationTree } from 'vuex';
import { TilesMatrix } from '@/@types';
import { State } from './state';
import { CasinoMutationTypes as MutationTypes } from './mutation-types';

export type Mutations<S = State> = {
  [MutationTypes.SET_TILES_MATRIX](state: S, payload: TilesMatrix): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_TILES_MATRIX](state: State, profile: TilesMatrix) {
    state.tilesMatrix = profile;
  },
};
