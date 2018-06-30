import San from 'san'
import startRouter from './router/index'
import App from './App.san'


//通过继承定义组件
// let MyComponent = San.defineComponent({});
// San.inherits(MyComponent,App);

//直接定义组件
let MyComponent = San.defineComponent({
    //el:document.getElementById('root'), 组件反解不会渲染template
    components:{
        'ui-app':App
    },
    // template:'<ui-app></ui-app>' 错误写法
    template:'<template id="app"><ui-app></ui-app></template>'
});

let myComponent = new MyComponent({});
myComponent.attach(document.getElementById('root'));

startRouter();

