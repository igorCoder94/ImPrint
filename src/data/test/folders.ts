interface RenderTree {
  id: string;
  name: string;
  children?: readonly RenderTree[];
  isFolder: boolean;
  isBook: boolean;
}

export const data: RenderTree = {
  id: '0',
  name: 'React Pipeline',
  isFolder: true,
  isBook: false,
  children: [
    {
      id: '1',
      name: 'javascript учебник',
      isFolder: true,
      isBook: true,
      children: [
        {
          id: '10',
          name: 'колода по главе 1',
          isFolder: true,
          isBook: false,
          children: [],
        },
        {
          id: '5',
          name: 'колода по главе 2',
          isFolder: true,
          isBook: false,
          children: [],
        },
        {
          id: '6',
          name: 'колода по главе 3',
          isFolder: true,
          isBook: false,
          children: [],
        },
      ],
    },
    {
      id: '3',
      name: 'React колода',
      isFolder: true,
      isBook: false,
      children: [
        {
          id: '9',
          name: 'колода по реакту',
          isFolder: false,
          isBook: false,
          children: [],
        },
        {
          id: '7',
          name: 'колода 2 по реакту',
          isFolder: false,
          isBook: false,
          children: [],
        },
        {
          id: '8',
          name: 'колода 3 по реакту',
          isFolder: false,
          isBook: false,
          children: [],
        },
      ],
    },
  ],
};
