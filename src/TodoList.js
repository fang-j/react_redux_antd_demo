import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from './store'
import { changeInputAction, changeAddItemAction, changeDeleteItemAction } from './store/actionCreators'

// const data = [
//   '早8点开晨会,分配今天的代码任务',
//   '早9点和项目经理开需求沟通会',
//   '早9点和项目经理开需求沟通会'
// ]

class TodoList extends Component {
  constructor(props){
    super(props)
    // console.log(store.dispatch;
    // console.log(store.getState());
    this.state = store.getState();
    // this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange) // 订阅 改变组件的值
  }

  state = {  }
  render() { 
    return ( 
      <div>
        <div style={{margin: '10px'}}>
          <Input 
            placeholder={this.state.inputValue}
            value = {this.state.inputValue}
            style={{width: '250px', marginRight: '10px'}}
            onChange={this.changeInputValue}
          />
          <Button
           type='primary'
           onClick={this.clickBtn}
           >增加</Button>
        </div>
        <div style={{margin: '10px', width: '300px'}}>
          <List
            bordered
            dataSource = {this.state.list}
            renderItem = {(item,index) => (
              <List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>
            )}
          />
        </div>
      </div>
    );
  }
  changeInputValue = (e) => {
    // const action = {
    //   type: CHANGE_INPUT,
    //   value: e.target.value
    // }
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }

  storeChange = () =>{
    console.log('触发订阅');
    this.setState(store.getState())
  }

  clickBtn = () => {
    // const action = {
    //   type: ADD_ITEM
    // }
    const action = changeAddItemAction();
    store.dispatch(action)
  }

  deleteItem(index){
    console.log(index);
    // const action ={
    //   type: DELETE_ITEM,
    //   index
    // }
    const action = changeDeleteItemAction(index);
    store.dispatch(action)
    console.log(this.state);
  }
}
 
export default TodoList;