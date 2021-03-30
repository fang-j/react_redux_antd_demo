import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
// 无状态组件写法
const TodoListUI = (props) => {
  return(
    <div>
        <div style={{margin: '10px'}}>
          <Input 
            value = {props.inputValue}
            placeholder={props.inputValue}
            style={{width: '250px', marginRight: '10px'}}
            onChange={props.changeInputValue}
          />
          <Button
           type='primary'
           onClick={props.clickBtn}
           >增加</Button>
        </div>
        <div style={{margin: '10px', width: '300px'}}>
          <List
            bordered
            dataSource = {props.list}
            renderItem = {(item,index) => (
              // 这里是闭包index可以直接拿来用
              <List.Item 
                onClick={() => { props.deleteItem(index)}}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
  )
}

// class TodoListUI extends Component {
//   render() { 
//     return ( 
//       <div>
//         <div style={{margin: '10px'}}>
//           <Input 
//             placeholder={this.props.inputValue}
//             value = {this.props.inputValue}
//             style={{width: '250px', marginRight: '10px'}}
//             onChange={this.props.changeInputValue}
//           />
//           <Button
//            type='primary'
//            onClick={this.clickBtn}
//            >增加</Button>
//         </div>
//         <div style={{margin: '10px', width: '300px'}}>
//           <List
//             bordered
//             dataSource = {this.props.list}
//             renderItem = {(item,index) => (
//               // 这里是闭包index可以直接拿来用
//               <List.Item 
//                 onClick={() => { this.props.deleteItem(index)}}>
//                 {item}
//               </List.Item>
//             )}
//           />
//         </div>
//       </div>
//     );
//   }
// }
 
export default TodoListUI;