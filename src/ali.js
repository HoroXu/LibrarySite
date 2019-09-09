// zhengbin.szb@alibaba-inc.com
// 用代码解释 React 的 受控 和 非受控，实现 Input 组件
/*import React from 'react';

class Input extends React.Component {
  super(props);
  state = {
    value: ''// TODO:
  }
  
  componentWillReceiveProps(props,state) {
    if(props.inputValue !== state.value) {|
         this.setState({
    		value: props.inputValue
    	})
    }
  }
  
  
  
  render() {
    return (
      <input  value={this.state.value}}
        // TODO:
      />;
    );
  }
}*/

/*lodash:  get(obj, 'a.b.c[0].d')*/
/**
 * 方便取值方法
 * obj: Object | Array
 * path: string a.b.c[0].d
 * return: any | undefined
 */
function get(obj, path) {
    var pathArr = path.split('.');
    var objArr = Object.keys(obj);
    for (let val of pathArr) {
        if( objArr.include(val)) {
           get(obj[val], val)
      } else {
          return 
      }
    }
   
  }