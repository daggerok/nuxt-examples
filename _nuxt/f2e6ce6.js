(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(t,n,e){var content=e(206);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(109).default)("932a8f60",content,!0,{sourceMap:!1})},165:function(t,n,e){"use strict";e(205);var o=e(42),component=Object(o.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("nuxt")],1)}),[],!1,null,null,null);n.a=component.exports},166:function(t,n,e){t.exports=e(167)},205:function(t,n,e){"use strict";e(151)},206:function(t,n,e){var o=e(108)(!1);o.push([t.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}',""]),t.exports=o},207:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return o})),e.d(n,"getters",(function(){return r})),e.d(n,"actions",(function(){return c})),e.d(n,"mutations",(function(){return f}));var o=function(){return{}},r={},c=function(){return{}},f={}},208:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return o})),e.d(n,"getters",(function(){return r})),e.d(n,"actions",(function(){return c})),e.d(n,"mutations",(function(){return f}));var o=function(){return{messages:[]}},r={messagesAmount:function(){}},c={getMessages:function(){}},f={setMessages:function(t,n){t.messages=n}}},209:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return c})),e.d(n,"getters",(function(){return f})),e.d(n,"actions",(function(){return d})),e.d(n,"mutations",(function(){return l}));var o=e(40),r=e.n(o),c=function(){return{users:[]}},f={usersAmount:function(){}},d={getUsers:function(t){var n=t.commit;r.a.get("http://127.0.0.1:8080/users").catch((function(t){return console.log("error",t)})).then((function(t){return t.data})).then((function(t){return n({type:"setUsers",users:t})}))}},l={setUsers:function(t,n){t.users=n}}}},[[166,3,1,4]]]);