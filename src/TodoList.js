import React, { Component } from 'react';
import store from './store'
import { changeInputAction, changeAddItemAction, changeDeleteItemAction, getTodoList } from './store/actionCreators'
import TodoListUI from './TodoListUI'

// const data = [
//   '早8点开晨会,分配今天的代码任务',
//   '早9点和项目经理开需求沟通会',
//   '早9点和项目经理开需求沟通会'
// ]

class TodoList extends Component {
  constructor(props){
    super(props)
    this.changeInputValue = this.changeInputValue.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.state = store.getState();
    store.subscribe(this.storeChange) // 订阅 改变组件的值
  }

  render() { 
    return (
      <TodoListUI 
        inputValue = {this.state.inputValue}
        list = { this.state.list }
        changeInputValue = {this.changeInputValue}
        clickBtn = {this.clickBtn}
        deleteItem = {this.deleteItem}
      />
    );
  }

  componentDidMount(){
    const action = getTodoList();
    store.dispatch(action);
  }

  changeInputValue(e){
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }

  storeChange(){
    // console.log('触发订阅');
    this.setState(store.getState())
  }

  clickBtn(){
    const action = changeAddItemAction();
    store.dispatch(action)
  }

  deleteItem(index){
    // console.log('index');
    // console.log(index);
    // const action ={
    //   type: DELETE_ITEM,
    //   index
    // }
    const action = changeDeleteItemAction(index);
    store.dispatch(action)
    // console.log(this.state);
  }
}
 
export default TodoList;