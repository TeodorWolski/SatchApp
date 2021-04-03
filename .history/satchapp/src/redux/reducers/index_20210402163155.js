const initialState = {
  saves: [
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
  ],
};

const reducer = (state = initialState, action, saves) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        [action.saves]: [...state[action.saves], action.payload.item],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        [action.payload.savedVideos]: [
          ...state[action.payload.savedVideos].filter((item) => item.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default reducer;
