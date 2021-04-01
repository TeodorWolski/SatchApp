// eslint-disable-next-line arrow-body-style
export const removeItem = (id, saves) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      id,
    },
  };
};
