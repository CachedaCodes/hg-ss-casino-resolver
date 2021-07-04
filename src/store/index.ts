import { createStore, createLogger } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

// TODO: How to surpass cyclical dependency linting errors cleanly?
// eslint-disable-next-line import/no-cycle
import { store as casino, CasinoStore, State as CasinoState } from '@/store/modules/casino';

export type RootState = {
  casino: CasinoState;
};

export type Store = CasinoStore<Pick<RootState, 'casino'>>;

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

// Plug in session storage based persistence
plugins.push(createPersistedState({ storage: window.sessionStorage }));

export const store = createStore({
  plugins,
  modules: {
    casino,
  },
});

export function useStore(): Store {
  return store as Store;
}
