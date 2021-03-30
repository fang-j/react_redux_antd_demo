import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes'
//  默认状态值
const defaultState = {
  inputValue: 'Write Something',
  list: [
    '12',
    '22',
    '32'
  ]
}
// 导出一个函数
const reducer = (state = defaultState, action) => {
  // console.log(state, action);
  // Reducer里只能接受state,不能改变state
  switch(action.type){
    case CHANGE_INPUT:
      let newState = JSON.parse(JSON.stringify(state));
      newState.inputValue = action.value;
      // console.log(state, action);
      return newState;
    case ADD_ITEM: 
      // console.log(state, action);
      let newState2 = JSON.parse(JSON.stringify(state));
      newState2.list.push(newState2.inputValue);
      newState2.inputValue = '';
      return newState2;
    case DELETE_ITEM: 
      // console.log('======');
      // console.log(state, action);
      let newState3 = JSON.parse(JSON.stringify(state));
      newState3.list.splice(action.index, 1);
      return newState3;
    case GET_LIST: 
      // console.log('======');
      // console.log(state, action);
      let newState4 = JSON.parse(JSON.stringify(state));
      newState4.list = action.data;
      return newState4;
    default:
      return state
  }
  // return state
}

export default reducer