(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{185:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"缓存表格请求数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存表格请求数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 缓存表格请求数据")]),t._v(" "),a("p",[t._v("为了追求用户更好的体验，在表格数据请求的时候，希望点击详情，返回来还是当前请求的数据，页码还是之前的")]),t._v(" "),a("h2",{attrs:{id:"mixins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mixins","aria-hidden":"true"}},[t._v("#")]),t._v(" mixins")]),t._v(" "),a("p",[t._v("该项目写了一个混合，在"),a("code",[t._v("@/mixins/tableMixin.js")]),t._v("，如果有表格的话，需要将此混合引入到\n该组件中，用户不需要关心怎么去写，该混合主要有两个方法")]),t._v(" "),a("p",[a("strong",[t._v("$_tableMixin_setList:")]),t._v("\n该方法主要是路由没有进来之前请求数据用的，并且请求的数据存到"),a("code",[t._v("store")]),t._v("中")]),t._v(" "),a("p",[a("strong",[t._v("$_tableMixin_tableChange:")]),t._v("\n该方法是请求数据的时候用的，请求数据的时候直接调用该方法")]),t._v(" "),a("h2",{attrs:{id:"页面组件中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面组件中","aria-hidden":"true"}},[t._v("#")]),t._v(" 页面组件中")]),t._v(" "),a("p",[t._v("在页面组件中首先将混合和数据请求引入，在"),a("code",[t._v("beforeRouteEnter")]),t._v("中将数据请求成功之后，在进入页面，\n具体代码如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" tableMixin "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/mixins/tableMixin'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getTableList "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/api/getTableList'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   mixins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tableMixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteEnter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTableList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getTableList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" getTableList  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这一步必须写，将数据请求方法赋值个该组件的getTableList")]),t._v("\n           vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$_tableMixin_setList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="cacheTableData.md";s.default=e.exports}}]);