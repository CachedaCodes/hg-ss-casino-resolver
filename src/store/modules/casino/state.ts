import { Clue, Tile, TilesMatrix } from '@/@types';

export type State = {
  tilesMatrix: TilesMatrix;
  cluesColumn: Clue[];
  cluesRow: Clue[];
}

function generateNewTile(row: number, column: number): Tile {
  return {
    canHaveVoltorb: true,
    column: row,
    isFullyAssessed: false,
    possibleCoinValues: [1, 2, 3],
    row: column,
  };
}

function generateDefaultTilesMatrix(): TilesMatrix {
  const rows = 5;
  const columns = 5;
  const defaultTilesMatrix: TilesMatrix = new Array(rows);

  for (let i = 0; i !== columns; i++) {
    defaultTilesMatrix[i] = new Array(columns);
    for (let k = 0; k !== rows; k++) {
      defaultTilesMatrix[i][k] = generateNewTile(k, i);
    }
  }

  return defaultTilesMatrix;
}

function generateCluesList(amount: number): Clue[] {
  return Array(amount).fill({
    prizeAmount: 0,
    voltorbAmount: 0,
  });
}

export const state: State = {
  tilesMatrix: generateDefaultTilesMatrix(),
  cluesColumn: generateCluesList(5),
  cluesRow: generateCluesList(5),
};
