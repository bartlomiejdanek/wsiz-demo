(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{34:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),i=n.n(r),a=n(26),o=n.n(a),s=(n(34),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))}),j=n(7),h=n(8),l=n(10),u=n(9),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(c.jsx)("h1",{children:"App"})}}]),n}(i.a.Component),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(c.jsx)("h1",{children:"About"})}}]),n}(i.a.Component),p=n(27),O=n.n(p),m=n(6),x=n(2),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(j.a)(this,n),(c=t.call(this,e)).state={person:{}},c.person={},c}return Object(h.a)(n,[{key:"fetchData",value:function(e){var t=this;O.a.get("https://jsonplaceholder.typicode.com/users/".concat(e)).then((function(e){var n=e.data;t.setState({person:n}),t.person=n}))}},{key:"componentDidMount",value:function(e){this.fetchData(this.props.match.params.id)}},{key:"componentDidUpdate",value:function(e){this.fetchData(this.props.match.params.id)}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.person.id==this.props.match.params.id}},{key:"render",value:function(){return Object(c.jsx)("p",{children:this.person.name})}}]),n}(i.a.Component),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){this.props.match.url;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Welcome to Item Page"}),Object(c.jsx)("strong",{children:"Select item Id"}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[Object(c.jsx)(m.b,{to:"/item/1",children:"Item 1 "}),"0"]}),Object(c.jsxs)("li",{children:[Object(c.jsx)(m.b,{to:"/item/2",children:"Item 2 "}),"4"]}),Object(c.jsx)("li",{children:Object(c.jsx)(m.b,{to:"/item/3",children:"Item 3 "})}),Object(c.jsx)("li",{children:Object(c.jsx)(m.b,{to:"/item/4",children:"Item 4 "})})]}),Object(c.jsx)(x.a,{path:"/item/:id",component:f})]})}}]),n}(i.a.Component),y=(i.a.Component,Object(c.jsx)(m.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"React Router Example"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(m.c,{to:"/",exact:!0,activeStyle:{color:"red"},children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(m.c,{to:"/about",exact:!0,activeStyle:{color:"green"},children:"About"})}),Object(c.jsx)("li",{children:Object(c.jsx)(m.c,{to:"/item",exact:!0,activeStyle:{color:"orange"},children:"Items"})})]}),Object(c.jsxs)(x.c,{children:[Object(c.jsx)(x.a,{exact:!0,path:"/",component:b}),Object(c.jsx)(x.a,{path:"/about",component:d}),Object(c.jsx)(x.a,{path:"/item",component:v})]})]})}));o.a.render(y,document.getElementById("root")),s()}},[[57,1,2]]]);
//# sourceMappingURL=main.45a25664.chunk.js.map