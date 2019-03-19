(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{208:function(e,a,t){var m={"./bash":157,"./bash.js":157,"./css":158,"./css.js":158,"./htmlbars":159,"./htmlbars.js":159,"./javascript":160,"./javascript.js":160,"./scss":161,"./scss.js":161,"./typescript":162,"./typescript.js":162};function c(e){var a=l(e);return t(a)}function l(e){if(!t.o(m,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return m[e]}c.keys=function(){return Object.keys(m)},c.resolve=l,e.exports=c,c.id=208},629:function(e,a,t){"use strict";var m=t(205),c=(t(206),t(207),t(209),function(){return m.createElement(m.Fragment,{},m.createElement("h1",{id:"uform是什么？",className:"react-demo-h1"},"UForm是什么？"),m.createElement("blockquote",{className:"react-demo-blockquote"},m.createElement("p",{className:"react-demo-p"},"UForm 谐音 Your Form , 代表，这才是你想要的Form解决方案 😆")),m.createElement("h2",{id:"背景",className:"react-demo-h2"},"背景"),m.createElement("p",{className:"react-demo-p"},"表单问题，不管是在jquery时代，还是angular/react时代，都永远是前端工程师们的痛，但是这又是没办法的事情，业务需求多种多样，对于中后台业务而言，表单页面和报表页面基本上是中后台业务的核心展现形式，但是，如何帮助开发者更高效的开发表单，目前传统的表单开发方式："),m.createElement("ul",{className:"react-demo-ul"},m.createElement("li",{className:"react-demo-li"},"手动管理表单状态"),m.createElement("li",{className:"react-demo-li"},"手动收集表单数据"),m.createElement("li",{className:"react-demo-li"},"手动管理表单校验状态")),m.createElement("p",{className:"react-demo-p"},"带来的问题"),m.createElement("ul",{className:"react-demo-ul"},m.createElement("li",{className:"react-demo-li"},"表单状态管理变得越来越难以维护，不得已需要引入其他大而全的状态管理库，其实这仅仅只是一个领域性问题"),m.createElement("li",{className:"react-demo-li"},"当表单数量巨大的时候，如果每个表单都需要手动传入value/onChange，那是不能容忍的，同时传统表单开发的数据结构都是扁平结构，没法很好的处理嵌套复杂数据的情况，如果硬是要处理，工作量会变得越来越大"),m.createElement("li",{className:"react-demo-li"},"当表单校验规则存在联动校验的时候，要处理表单校验简直是噩梦，很容易产生大量的面条代码"),m.createElement("li",{className:"react-demo-li"},"当服务端有动态输出表单的需求的时候，你将不得不自己开发一个基于某个json协议动态输出表单的组件"),m.createElement("li",{className:"react-demo-li"},"当业务有对表单操作效率等指标的监控需求的时候，你将不得不自己开发一个基于某个json协议动态输出表单的组件来全局管理表单"),m.createElement("li",{className:"react-demo-li"},"当你希望在可视化搭建界面中快速配置产出表单的时候，你将不得不自己开发一个基于某个json协议动态输出表单的组件")),m.createElement("h2",{id:"方案",className:"react-demo-h2"},"方案"),m.createElement("p",{className:"react-demo-p"},"基于以上问题，也经历了漫长的表单领域的各种探索，最终我们沉淀出来 ",m.createElement("strong",{className:"react-demo-strong"},"UForm解决方案")),m.createElement("p",{className:"react-demo-p"},"UForm是中后台领域的表单解决方案，覆盖了表单领域的各种布局，联动，校验场景，它集成了阿里内部fusion组件体系与antd组件，让您快速开发符合您业务体验需求的表单界面，您当然也可以通过UForm的扩展机制来快速接入自己团队的组件库。"),m.createElement("p",{className:"react-demo-p"},"UForm和核心特性："),m.createElement("ul",{className:"react-demo-ul"},m.createElement("li",{className:"react-demo-li"},"基于标准JSON Schema协议，数据化构建表单"),m.createElement("li",{className:"react-demo-li"},"基于rxjs对表单内部的副作用做统一管理，轻松解决各种复杂联动校验场景"),m.createElement("li",{className:"react-demo-li"},"支持各种表单布局方案"),m.createElement("li",{className:"react-demo-li"},"支持可视化构建表单"),m.createElement("li",{className:"react-demo-li"},"支持自定义组件扩展"),m.createElement("li",{className:"react-demo-li"},"分布式状态管理，表单性能更高")),m.createElement("h2",{id:"json-schema规范",className:"react-demo-h2"},"JSON Schema规范"),m.createElement("p",{className:"react-demo-p"},"想要快速了解JSON Schema，可以移步 ",m.createElement("a",{href:"https://json-schema.org/",className:"react-demo-a"},"JSON-SCHEMA规范地址")),m.createElement("h2",{id:"为什么选用json-schema",className:"react-demo-h2"},"为什么选用JSON Schema"),m.createElement("p",{className:"react-demo-p"},"选用JSON Schema，我们主要从以下几点来考虑："),m.createElement("ul",{className:"react-demo-ul"},m.createElement("li",{className:"react-demo-li"},"我们的理念是希望用数据的思路来描述表单，而非前端组件树的思路来描述表单"),m.createElement("li",{className:"react-demo-li"},"标准化，因为它是目前业界最流行的数据结构描述语言，表单是Web系统的数据输入核心，所以采用JSON Schema也是一种最自然的选择")),m.createElement("h2",{id:"业界对比",className:"react-demo-h2"},"业界对比"),m.createElement("p",{className:"react-demo-p"},"目前来说业界比较流行的JSON schema驱动的React表单解决方案也就是mozilla家的 ",m.createElement("a",{href:"https://github.com/mozilla-services/react-jsonschema-form",className:"react-demo-a"},"https://github.com/mozilla-services/react-jsonschema-form"),"，但是，该方案存在几个问题："),m.createElement("ul",{className:"react-demo-ul"},m.createElement("li",{className:"react-demo-li"},"强耦合bootstrap，不方便扩展"),m.createElement("li",{className:"react-demo-li"},"json描述不能很好的在jsx中描述"),m.createElement("li",{className:"react-demo-li"},"没能很好的解决表单布局，表单联动的各种复杂问题"),m.createElement("li",{className:"react-demo-li"},"性能不行，内部数据管理走的React的全量rerender机制来做数据同步")),m.createElement("p",{className:"react-demo-p"},"当然，还有集团内部的",m.createElement("a",{href:"https://alibaba.github.io/noform",className:"react-demo-a"},"noform解决方案"),"，该方案同样也存在几个问题"),m.createElement("ul",{className:"react-demo-ul"},m.createElement("li",{className:"react-demo-li"},"单纯基于jsx描述表单，没办法数据驱动表单构建"),m.createElement("li",{className:"react-demo-li"},"性能不行，基于React的全量rerender机制做数据同步与表单联动"),m.createElement("li",{className:"react-demo-li"},"核心思路不够完备，从文档上来看，很难找到一个理念主线来串联整体设计")),m.createElement("p",{className:"react-demo-p"},"最后，再对比一下redux-form作者最近一直在持续更新的",m.createElement("a",{href:"https://github.com/final-form/final-form",className:"react-demo-a"},"final-form解决方案")," ，UForm的核心设计思路其实也是参考的 final-form，可见它是非常优秀的一个表单解决方案，但是，因为它是属于jsx的表单解决方案，所以也不能支持数据化驱动，同时，在表单副作用管理上它也并没有一个完备的解决方案来管理，更多的是借助React自身的特性来解决副作用管理上的问题，而且，目前final-form也没有集成ant design或者fusion next这类强大的中后台组件体系，所以，如果您想从性能好，扩展性强，功能完备性，生态完备性这几个角度来选择表单解决方案的话，请选择 UForm吧！"),m.createElement("h2",{id:"谁在使用？",className:"react-demo-h2"},"谁在使用？"),m.createElement("ul",{className:"react-demo-ul"},m.createElement("li",{className:"react-demo-li"},"阿里供应链平台事业部"),m.createElement("li",{className:"react-demo-li"},"天猫"),m.createElement("li",{className:"react-demo-li"},"阿里云"),m.createElement("li",{className:"react-demo-li"},"阿里妈妈"),m.createElement("li",{className:"react-demo-li"},"盒马"),m.createElement("li",{className:"react-demo-li"},"CBU"),m.createElement("li",{className:"react-demo-li"},"业务平台事业部"),m.createElement("li",{className:"react-demo-li"},"...")))});c.meta={username:"zhili.wzl",email:"wangzhili56@126.com"},e.exports=c}}]);
//# sourceMappingURL=bundle.6.js.map