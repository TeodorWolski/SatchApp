// eslint-disable-next-line arrow-body-style
export const removeItem = (id, savedVideos) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      savedVideos,
      id,
    },
  };
};
