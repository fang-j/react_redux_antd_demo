// 定义所有改变stroe值要返回的对象的方法
// 跟actionTypes.js结合使用
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM,GET_LIST } from './actionTypes.js';
import axios from 'axios';

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})
export const changeAddItemAction = (value) => ({
  type: ADD_ITEM,
  value
})
export const changeDeleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})
export const getListAction = (data) => ({
  type: GET_LIST,
  data
})
// trunk 用于异步请求后处理
// 抽离接口请求不在生命周期中调用,将接口请求在actionCreators.js中处理获取数据
// 这个箭头函数dispatch是thunk内部调用箭头函数时传入的参数,用于发送action
export const getTodoList = () => {
  return(dispatch) => {
    axios.get('https://mock.mengxuegu.com/mock/6062c72ff2e38f3a2f6ba195/getList/getList').then((res) => {
      console.log(res);
      const action = getListAction(res.data.data.list);
      dispatch(action);
    })
  }
}