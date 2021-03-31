# Redux使用
src/store 文件
src/store/index.js 创建仓库
src/store/reducer.js 定义共用状态值




# 创建仓库的写法
createStore(函数参数) 方法

# 操作store值的方法:

src/TodoList文件下
1.获取仓库状态值: stroe.getState();
2.修改

# redux调试工具
chrome扩展呈现 Redux DevTools
Redux DevTools 调试需要在createStore(函数参数, 第二个参数) 
第二个参数值:window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

# Redux三个小坑
* ``store`` 必须是唯一的, 多个``store``是坚决不允许,只能有一个``store``空间
* 只有``store``能改变自己的内容,``Reducer``不能改变
  > ``Reducer``只是返回了更改的数据,但是并没有更改``store``中的数据,``store``拿到了``Reducer``的数据,自己对自己进行了更新
* ``Reducer`` 必须是纯函数
  >``纯函数定义:``如果函数的调用参数相同，则永远返回相同的结果。它不依赖于程序执行期间函数外部任何状态或数据的变化，必须只依赖于其输入参数。

  >``理解:`` 函数返回的结果是由传入的参数值决定的,而不是其他的东西决定的。
* [参考技术胖讲解](https://jspang.com/detailed?id=48#toc246)

# 无状态组件
> 无状态组件就是一个函数,不继承任何的类,也不存在``state``(状态)
样例: TodoListUI.js
* 只写UI,不写业务逻辑
* 性能更高

# react-redux的使用
文件在react_redux.rar文件