(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,n){e.exports=n(272)},121:function(e,t,n){},157:function(e,t,n){},255:function(e,t,n){},272:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(37),c=n.n(l),u=(n(121),n(16)),o=n(17),i=n(19),s=n(18),m=n(20),p=n(159),d=n(275),f=n(13),E=0,h=n(273),v=n(279),b=n(274),O=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).updateInput=function(e){n.setState({input:e})},n.handleAddText=function(e){e.preventDefault(),n.props.addText(n.state.input),n.setState({input:""})},n.state={input:""},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",null,r.a.createElement(h.a,null,r.a.createElement(v.a,{type:"text",value:this.state.input,placeholder:"Enter text",onChange:function(t){return e.updateInput(t.target.value)}})),r.a.createElement(b.a,{type:"submit",onClick:this.handleAddText,className:"pull-right"},"Add text"))}}]),t}(a.Component),x=Object(f.b)(null,{addText:function(e){return{type:"ADD_TEXT",payload:{id:E++,content:e}}}})(O),j=n(280),g=n(111),y=(n(157),function(e){return r.a.createElement("li",{className:"list-group-item clearfix text-list-item"},r.a.createElement("span",{className:"text"},e.content),r.a.createElement(b.a,{className:"pull-right",onClick:function(){return e.deleteText(e.id)}},"delete text"))});var T,k=Object(f.b)(function(e){return e.texts},{deleteText:function(e){return{type:"DELETE_TEXT",payload:{id:e}}}})(function(e){return r.a.createElement(j.a,null,Object(g.keys)(e.texts).map(function(t){var n=e.texts[t];return r.a.createElement(y,{key:t,id:t,content:n,deleteText:e.deleteText})}))}),w=function(e){return r.a.createElement(p.a,null,r.a.createElement(d.a,{lg:12},r.a.createElement("h3",null,"Task 1")),r.a.createElement(d.a,{sm:6,xs:12},r.a.createElement(x,null)),r.a.createElement(d.a,{sm:6,xs:12},r.a.createElement("h4",null,"List:"),r.a.createElement(k,null)))},S=n(112),C=n.n(S),I=(n(163),n(27)),D=n(48),N=n(28),_=n(113),A=n.n(_),X={texts:{}},L={step:function(){var e=localStorage.getItem("step");return null!==e?parseInt(e):2500}()},P=Object(I.b)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_STEP":var n=t.payload.step;return n<1&&(n=1),Object(N.a)({},e,{step:n});default:return e}},texts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TEXT":var n=t.payload,a=n.id,r=n.content;return Object(N.a)({},e,{texts:Object(N.a)({},e.texts,Object(D.a)({},a,r))});case"DELETE_TEXT":var l=t.payload.id;return Object(N.a)({},e,{texts:A()(e.texts,l)});default:return e}}}),B=Object(I.c)(P);B.subscribe(function(){var e=T;(T=B.getState().counter.step)!==e&&localStorage.setItem("step",T)});var J=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){n.props.setStep(e)},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.step;return r.a.createElement("div",{className:"slider"},r.a.createElement(C.a,{min:0,max:5e3,step:100,value:e,onChange:this.handleChange}),r.a.createElement("div",{className:"value"},e))}}]),t}(a.Component),K=Object(f.b)(function(e){return e.counter},{setStep:function(e){return{type:"SET_STEP",payload:{step:e}}}})(J),M=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).initialTime=Date.now(),n.state={counter:0},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"setCounter",value:function(e){var t=this;e<1e3/60&&(e=Math.floor(1e3/60)),clearInterval(this.intervalId),this.intervalId=setInterval(function(){var n=Date.now()-t.initialTime;t.setState({counter:n-n%e})},e)}},{key:"componentDidMount",value:function(){var e=this;this.currStep=this.props.step,this.setCounter(this.currStep),B.subscribe(function(){var t=e.currStep;e.currStep=B.getState().counter.step,e.currStep!==t&&e.setCounter(e.currStep)})}},{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(d.a,{mdOffset:3,md:6,sm:10,smOffset:1},r.a.createElement("h4",null,"Counter")),r.a.createElement(d.a,{mdOffset:3,md:6,sm:10,smOffset:1},r.a.createElement("h4",null,this.state.counter)))}}]),t}(a.Component),W=Object(f.b)(function(e){return e.counter})(M),H=function(e){return r.a.createElement(p.a,null,r.a.createElement(d.a,{lg:12},r.a.createElement("h3",null,"Task 2")),r.a.createElement(d.a,{sm:6,xs:12},r.a.createElement(K,null)),r.a.createElement(d.a,{sm:6,xs:12},r.a.createElement(W,null)))},$=n(278),q=n(276),z=n(277),F=(n(255),function(e){return r.a.createElement($.a,{inverse:!0,staticTop:!0},r.a.createElement($.a.Collapse,null,r.a.createElement("img",{src:"/logo.png",alt:"PIXELPLEX",className:"pull-left logo"}),r.a.createElement(q.a,{className:"header"},r.a.createElement(z.a,{className:"link",onClick:function(){return window.location.reload()},eventKey:1,href:"#"},"Home"),r.a.createElement(z.a,{className:"link",eventKey:2,href:"https://pixelplex.io",target:"_blank"},"Pixelplex"))))}),G=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(F,null),r.a.createElement(w,null),r.a.createElement(H,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=document.getElementById("root");c.a.render(r.a.createElement(f.a,{store:B},r.a.createElement(G,null)),Q),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[116,2,1]]]);
//# sourceMappingURL=main.8a73c91b.chunk.js.map