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

interface Project {
  id: number,
  name: string,
  img: string,
}

interface State {
  login: boolean,
  curElementId: number,
  elementList: Element[]
  projectList: Project[]
}

const state: State = {
  login: false,
  curElementId: 1,
  projectList: [{
    id: 1,
    name: '123',
    img: '123'
  }, {
    id: 2,
    name: '1234',
    img: '123f'
  }, {
    id: 3,
    name: 'aaaaaaaa',
    img: '112'
  }, {
    id: 4,
    name: 'bbbbbb',
    img: '1222'
  }],
  elementList: [
    {
      id: 1,
      name: '组件一',
      type: 'chart',
      transform: {
        width: 100,
        height: 100,
        top: 0,
        left: 0,
        rotate: 0
      },
      event: {},
      animation: [],
      extra: {
        title: {
          subtext: '纯属虚构',
          text: '未来一周气温变化'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
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
