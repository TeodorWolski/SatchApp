import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'Hello meow',
    created: '18 may 2018',
    link: 'https://www.youtube.com/watch?v=-QmyosHh-kU',
    content: 'Nowy film gargamela!',
  },
  {
    id: 2,
    title: 'Hello meow',
    created: '18 may 2018',
    link: 'https://www.youtube.com/watch?v=-QmyosHa-kU',
    content: 'Nowy film!',
  },
  {
    id: 3,
    title: 'Hello meow',
    created: '18 may 2018',
    link: 'https://www.youtube.com/watch?v=-QmyosHy-kU',
    content: 'Nowy film gorgonzoli!',
  },
  {
    id: 4,
    title: 'Hello meow',
    created: '18 may 2018',
    link: 'https://www.youtube.com/watch?v=-QmyosHy-kU',
    content: 'Nowy film gorgonzoli!',
  },
  {
    id: 5,
    title: 'Hello meow',
    created: '18 may 2018',
    link: 'https://www.youtube.com/watch?v=-QmyosHy-kU',
    content: 'Nowy film gorgonzoli!',
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        [action.payload]: [...state[action.payload.id].filter((item) => item.id !== action.id)],
      };
    default:
      return state;
  }
};

export default reducer;
