export const addFavorite = (city: string) => ({
  type: 'ADD_FAVORITE',
  payload: city,
});
export const deleteFavorite = (city: string) => ({
  type: 'DELETE_FAVORITE',
  payload: city,
});
