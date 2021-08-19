# banchui-editor

班倕编辑器意在尽量脱离业务，形成一个易用的可视化编排表单组件库，如有业务需要可自行改造，建议通过**mixins**将业务字段混如进来。

> 本组件是以 **Vue2.x+Vue-cli4.x** 为基础实现的，后续或许会有不依托 **vue-cli** 的实现方式，类似 **element** 的组织方式。

## useage
_（未实践）_
设想是仿照TCP/IP协议站的方式，组件本身是一个数据包，之后控制信息都类似于包头一样，层层包裹，在网络上传输，之后到了前端，在根据层级层层解包进行，最后显示编辑器。

## implementation

[基本的结构](implementation)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


[implementation]: ./banchui-editor.md