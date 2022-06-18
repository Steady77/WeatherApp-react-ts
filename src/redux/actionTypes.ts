type FavoriteType = {
  type: string;
  payload: Set<string>;
};

export type Action = FavoriteType;
