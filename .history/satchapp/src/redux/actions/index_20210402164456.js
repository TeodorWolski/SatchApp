export const removeItem = (id, savedVideos) => ({
  type: 'REMOVE_ITEM',
  payload: {
    savedVideos,
    id,
  },
});

export const addItem = (itemContent, saves) => {
  const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;

  return {
    type: 'ADD_ITEM',
    payload: {
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};
