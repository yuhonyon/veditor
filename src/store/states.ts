interface Element {
  id: number,
  name: string,
  type: string,
  transform: {
    width: number,
    height: number,
    top: number,
    left: number,
    rotate: number
  },
  animation: any[],
  event: any,
  extra: any,
  border: {
    size: number,
    style: string,
    color: string
    source: string,
    slice: number,
    outset: number,
    radius: number,
    repeat: string
  }
}

interface State {
  login: boolean,
  curElementId: number,
  elementList: Element[]
}

const state: State = {
  login: false,
  curElementId: 1,
  elementList: [
    {
      id: 1,
      name: '组件一',
      type: 'richText',
      transform: {
        width: 100,
        height: 100,
        top: 0,
        left: 0,
        rotate: 0
      },
      event: {},
      animation: [
        {
          time: 1000,
          delay: 0,
          name: 'bounceIn',
          count: 2,
          function: 'ease',
          interval: 1000,
          key: 1111
        },
        {
          time: 1000,
          delay: 0,
          name: 'bounceOut',
          count: 1,
          function: 'ease',
          interval: 1000,
          key: 2222
        }
      ],
      extra: {
        content: '2345sdfgsdfgsdfgsdfg'
      },
      border: {
        size: 0,
        style: 'solid',
        color: '#ddd',
        radius: 0,
        source: '',
        slice: 0,
        outset: 0,
        repeat: 'repeated'
      }
    }
  ]

};

export default state;
