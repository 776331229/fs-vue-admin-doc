(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{170:function(t,s,n){t.exports=n.p+"assets/img/login.5af75342.jpg"},171:function(t,s,n){t.exports=n.p+"assets/img/home.a1190acf.jpg"},172:function(t,s,n){t.exports=n.p+"assets/img/my.be88bf86.jpg"},173:function(t,s,n){t.exports=n.p+"assets/img/list.bb19fce6.jpg"},182:function(t,s,n){"use strict";n.r(s);var e=[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意","aria-hidden":"true"}},[this._v("#")]),this._v(" 注意")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("安装 test 单元会报错，先设置源")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("npm config "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" chromedriver_cdnurl"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("cdn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("npm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("taobao"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("chromedriver\nyarn config "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chromedriver_cdnurl"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://npm.taobao.org/mirrors/chromedriver"')]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令","aria-hidden":"true"}},[this._v("#")]),this._v(" 命令")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 项目安装")]),t._v("\nyarn install\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启动开发环境\b")]),t._v("\nyarn run serve\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打包")]),t._v("\nyarn build\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// eslint 检查")]),t._v("\nyarn run lint\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// stylelint 检查并自动修复")]),t._v("\nyarn run lint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("style\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 单元测试")]),t._v("\nyarn run test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("unit\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// e2e测试")]),t._v("\nyarn run test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("e2e\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录结构","aria-hidden":"true"}},[this._v("#")]),this._v(" 目录结构")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("├── ./README.md\n├── ./babel.config.js                             // babel 配置文件\n├── ./jest.config.js                              // 单元测试 jest 配置文件\n├── ./package-lock.json\n├── ./package.json\n├── ./postcss.config.js                           // postcss 配置文件\n├── ./public\n│   ├── ./public/favicon.ico\n│   └── ./public/index.html\n├── ./src\n│   ├── ./src/App.vue                               // 入口文件\n│   ├── ./src/api                                   // 所有请求\n│   ├── ./src/assets                                // 静态资源\n│   ├── ./src/components                            // 组件\n│   ├── ./src/main.js                               // 入口文件  初始化等\n│   ├── ./src/mixins                                // 混合\n│   │   ├── ./src/mixins/routeBack.js               // 返回\n│   │   └── ./src/mixins/savePosition.js            // 保存滚动位置\n│   ├── ./src/plugins                               // 插件\n│   │   ├── ./src/plugins/axios.js\n│   │   ├── ./src/plugins/fs-ui.js                  // fs-ui所使用到的组件和插件\n│   │   ├── ./src/plugins/rem.js                    // 自适应\n│   │   ├── ./src/plugins/touch.js                  // \b\b\b触摸指令\n│   │   ├── ./src/plugins/vconsole.js               // vconsole\n│   │   └── ./src/plugins/vueg.js                   // \b转场动画\n│   ├── ./src/router                                // 路由存放\n│   │   └── ./src/router/index.js\n│   ├── ./src/store\n│   │   ├── ./src/store/modules\n│   │   └── ./src/store/index.js\n│   ├── ./src/untils\n│   └── ./src/views\n│   │    ├── ./src/views/Root.vue                    // 布局文件\n├── .stylelintignore                                 // stylelint 忽略项\n├── ./stylelint.config.js                            // stylelint 配置项\n├── ./tests\n├── ./vendor-manifest.json\n├── ./vue.config.js\n├── ./webpack.dll.config.js\n└── ./yarn.lock\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件","aria-hidden":"true"}},[this._v("#")]),this._v(" 组件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"demo-页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demo-页","aria-hidden":"true"}},[this._v("#")]),this._v(" demo 页")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("登录")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("首页")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("我的")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("列表页")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:n(170),alt:"login"}})]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:n(171),alt:"home"}})]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:n(172),alt:"my"}})]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:n(173),alt:"list"}})])])])])}],r=n(0),a=Object(r.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),n("p",[t._v("本框架已经按需引入了"),n("a",{attrs:{href:"https://firstshow.github.io/fs-ui-docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("fs-ui"),n("OutboundLink")],1),t._v("，可以根据需求删减不需要的组件")]),t._v(" "),t._m(8),t._v(" "),t._m(9)])},e,!1,null,null,null);a.options.__file="introduce.md";s.default=a.exports}}]);