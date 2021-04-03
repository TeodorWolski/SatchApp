export const removeItem = (id) => ({
  type: 'REMOVE_ITEM',
  payload: {
    id,
  },
});

export const addItem = (itemContent) => {
  const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;

  return {
    type: 'ADD_ITEM',
    payload: {
      id: getId(),
      ...itemContent,
    },
  };
};
