(this.webpackJsonptesttask=this.webpackJsonptesttask||[]).push([[0],{24:function(e,n,t){},31:function(e,n,t){},32:function(e,n,t){},33:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var c,i=t(0),a=t.n(i),r=t(11),o=t.n(r),s=(t(24),t(7)),l="GET_DATA_REQUEST",d="GET_DATA_SUCCESS",j="GET_DATA_FAILURE",u=t(19),b=t(4),h=t(2),f=t(3),O=t(1);function x(e){var n=e.onChangeText,t=e.value,c=e.placeholder,a=Object(i.useCallback)((function(e){n(e.target.value)}),[n]);return Object(O.jsx)(k,{placeholder:c,onChange:a,value:t})}var p,m,v,g,k=f.a.input(c||(c=Object(h.a)(["\nwidth: 40em;\nheight: 30px;\nmargin-bottom: 20px;\nborder: 1px solid #B3E5FC;\nbackground: #E1F5FE;\noutline: none;\ncolor: black;\n&::-webkit-input-placeholder {\n    color: black;}\n"])));function y(){return Object(O.jsxs)(S,{children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})}var C,N,w=Object(f.b)(p||(p=Object(h.a)(["\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n  "]))),A=Object(f.b)(m||(m=Object(h.a)(["\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n"]))),E=Object(f.b)(v||(v=Object(h.a)(["\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n"]))),S=f.a.div(g||(g=Object(h.a)(["\n  position: relative;\n  left: 300%;\n  width: 80px;\n  height: 80px;\n  & div {\n    position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #B3E5FC;\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\n  } & div:nth-child(1) {\n    left: 8px;\n  animation: "," 0.6s infinite;\n  } & div:nth-child(2) {\n    left: 8px;\n  animation: "," 0.6s infinite;\n  } & div:nth-child(3) {\n    left: 32px;\n  animation: "," 0.6s infinite;\n  } & div:nth-child(4) {\n    left: 56px;\n  animation: "," 0.6s infinite;\n  }\n"])),w,A,A,E);function F(e){var n=e.info,t=e.onClick,c=n.firstName,i=n.lastName,a=n.adress,r=a.streetAddress,o=a.city,s=a.state,l=a.zip,d=n.description;return Object(O.jsx)(I,{onClick:t,children:Object(O.jsxs)(T,{onClick:function(e){e.stopPropagation()},children:[Object(O.jsx)("h3",{children:"Profile info"}),Object(O.jsxs)("div",{children:["Selected profile: ",c+" "+i]}),Object(O.jsxs)("div",{children:["Description: ",d]}),Object(O.jsxs)("div",{children:["Address: ",r]}),Object(O.jsxs)("div",{children:["City: ",o," "]}),Object(O.jsxs)("div",{children:["State: ",s," "]}),Object(O.jsxs)("div",{children:["Index: ",l," "]})]})})}var I=f.a.div(C||(C=Object(h.a)(["\nposition: fixed;\ntop: 0;\nleft: 0;\nwidth: 100%;\nheight: 100%;\nbackground: rgba(0, 0, 0, 0.5);\noverflow: auto;\ndisplay:flex;\njustify-content:center;\nalign-items:center;"]))),T=f.a.div(N||(N=Object(h.a)(["\nwidth: 17em;\nmin-height:15em;\npadding: 10px 20px;\ndisplay:flex;\nflex-direction:column;\njustify-content:center;\nalign-items: center;\nfont-size: 20px;\nbackground: white"])));function D(e){var n=e.data,t=n.id,c=n.firstName,i=n.lastName,a=n.email,r=n.phone;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("tr",{onClick:e.onClick,children:[Object(O.jsx)("td",{children:t}),Object(O.jsx)("td",{children:c}),Object(O.jsx)("td",{children:i}),Object(O.jsx)("td",{children:a}),Object(O.jsx)("td",{children:r})]})})}var M;t(31);function L(e){var n=e.data,t=e.RenderComponent,c=e.dataLimit,a=e.setActiveItem,r=Math.round(n.length/c),o=Object(i.useState)(1),s=Object(b.a)(o,2),l=s[0],d=s[1];function j(e){var n=Number(e.target.textContent);d(n)}return Object(O.jsxs)(O.Fragment,{children:[function(){var e=l*c-c,t=e+c;return n.slice(e,t)}().map((function(e){return Object(O.jsx)(t,{data:e,onClick:function(){return a(e)}},e.phone)})),Object(O.jsxs)("div",{className:"pagination",children:[Object(O.jsx)("button",{onClick:function(){d((function(e){return e-1}))},className:"prev \n          ".concat(1===l?"disabled":"","\n          ").concat(r<=1?"nonvisible":"","\n          "),children:"prev"}),function(){var e=Math.floor((l-1)/r)*r;return new Array(r).fill().map((function(n,t){return e+t+1}))}().map((function(e,n){return Object(O.jsx)("button",{onClick:j,className:"paginationItem ".concat(l===e?"active":null),children:r>1?Object(O.jsx)("span",{children:e}):null},n)})),Object(O.jsx)("button",{onClick:function(){d((function(e){return e+1}))},className:"next \n        ".concat(l===r?"disabled":"","\n        ").concat(r<=1?"nonvisible":"","\n        "),children:"next"})]})]})}function R(e){var n=e.setSelectedValue;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(_,{name:"states",id:"states",onChange:function(e){return n(e)},children:[Object(O.jsx)("option",{value:"",default:!0,selected:!0,children:"Filter by state"}),["AL","AK","AZ","AR","CA","CO","CT","DE","DC","HI","ID","IL","IN","IA","KS"].map((function(e){return Object(O.jsx)("option",{id:e,children:e})}))]})})}var _=f.a.select(M||(M=Object(h.a)(["\nwidth: 10em;\nheight: 34px;\nborder: 1px solid #B3E5FC;\nbackground: #E1F5FE;\noutline: none;\n  "])));t(32);function B(){var e,n=Object(s.c)((function(e){return e.data})),t=n.loading,c=n.info,a=n.errorMessage,r=Object(i.useState)(null),o=Object(b.a)(r,2),l=o[0],d=o[1],j=Object(i.useState)(""),h=Object(b.a)(j,2),f=h[0],p=h[1],m=Object(i.useState)(""),v=Object(b.a)(m,2),g=v[0],k=v[1],C=Object(i.useState)({key:"id",direction:"ascending"}),N=Object(b.a)(C,2),w=N[0],A=N[1],E=(e=c,Object(u.a)(e.filter((function(e){return l?e.adress.state===l&&(e.firstName.includes(g)||e.lastName.includes(g)):e.firstName.includes(g)||e.lastName.includes(g)}))));E.sort((function(e,n){return e[w.key]<n[w.key]?"ascending"===w.direction?-1:1:e[w.key]>n[w.key]?"ascending"===w.direction?1:-1:0}));var S=function(e){var n="ascending";w.key===e&"ascending"===w.direction&&(n="descending"),A({key:e,direction:n})},I=function(e){if(w)return w.key===e?w.direction:void 0};return Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(O.jsx)(x,{placeholder:"Search by Name",value:g,onChangeText:k}),Object(O.jsx)(R,{value:l,setSelectedValue:function(e){d(e.target.value)}})]}),Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:Object(O.jsx)("button",{type:"button",onClick:function(){return S("id")},className:I("id"),children:"id"})}),Object(O.jsx)("th",{children:Object(O.jsx)("button",{type:"button",onClick:function(){return S("firstName")},className:I("firstName"),children:"First Name"})}),Object(O.jsx)("th",{children:Object(O.jsx)("button",{type:"button",onClick:function(){return S("lastName")},className:I("lastName"),children:"Last Name"})}),Object(O.jsx)("th",{children:Object(O.jsx)("button",{type:"button",onClick:function(){return S("email")},className:I("email"),children:"Email"})}),Object(O.jsx)("th",{children:Object(O.jsx)("button",{type:"button",onClick:function(){return S("phone")},className:I("phone"),children:"Phone"})})]})}),Object(O.jsxs)("tbody",{children:[t?Object(O.jsx)(y,{}):null,a?Object(O.jsx)("h2",{style:{color:"red"},children:a}):null,c?Object(O.jsx)(L,{data:E,RenderComponent:D,dataLimit:20,setActiveItem:function(e){p(e)}}):null]})]}),f?Object(O.jsx)(F,{info:f,onClick:function(){return p(null)}}):null]})}var z=t(5),G={info:[],loading:!1,errorMessage:null};t(33);var P=function(){var e=Object(s.b)();return Object(i.useEffect)((function(){var n;e({type:l,payload:n})})),Object(O.jsx)("div",{className:"App",children:Object(O.jsx)("header",{className:"App-header",children:Object(O.jsx)(B,{})})})},U=t(8),W=t(18),J=Object(U.combineReducers)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case d:return Object(z.a)(Object(z.a)({},e),{},{info:n.payload,loading:!1});case l:return Object(z.a)(Object(z.a)({},e),{},{loading:!0,errorMessage:null});case j:return Object(z.a)(Object(z.a)({},e),{},{loading:!1,errorMessage:n.payload});default:return e}}}),K=Object(U.createStore)(J,Object(W.composeWithDevTools)(Object(U.applyMiddleware)((function(e){return function(n){return function(t){t.type===l&&fetch("https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json").then((function(e){return e.json()})).then((function(n){e.dispatch({type:d,payload:n})})).catch((function(n){var t;e.dispatch((t=n.message,{type:j,payload:t}))})),n(t)}}}))));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(s.a,{store:K,children:Object(O.jsx)(P,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.7b17d222.chunk.js.map