export type CoinValue = 1 | 2 | 3;

export type Tile = {
  row: number;
  column: number;
  canHaveVoltorb: boolean;
  possibleCoinValues: CoinValue[];
  isFullyAssessed: boolean;
}

export type TilesMatrix = Tile[][];

export type Clue = {
  prizeAmount: number,
  voltorbAmount: number,
}
