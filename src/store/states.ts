interface State {
  login: boolean,
  element: {
    type: string,
    transform: {
      width: number,
      height: number,
      top: number,
      left: number,
      rotate: number
    },
    animation: any[],
    extra: {
      content: string,
      color: string,
      fontSize: number,
      fontWeight: string
    },
    border: {
      size: number
    }
  }
}

const state: State = {
  login: false,
  element: {
    type: 'text',
    transform: {
      width: 100,
      height: 100,
      top: 0,
      left: 0,
      rotate: 0
    },
    animation: [],
    extra: {
      content: 'nihao',
      color: '#666',
      fontSize: 12,
      fontWeight: 'normal'
    },
    border: {
      size: 0
    }
  }
};

export default state;
