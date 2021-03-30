### Redux使用
src/store 文件
src/store/index.js 创建仓库
src/store/reducer.js 定义共用状态值




### 创建仓库的写法
createStore(函数参数) 方法

### 操作store值的方法:

src/TodoList文件下
1.获取仓库状态值: stroe.getState();
2.修改

### redux调试工具
chrome扩展呈现 Redux DevTools
Redux DevTools 调试需要在createStore(函数参数, 第二个参数) 
第二个参数值:window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
