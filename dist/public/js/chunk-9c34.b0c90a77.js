(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c34"],{"0bfb":function(t,e,i){"use strict";var n=i("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,i){"use strict";var n=i("32e9"),o=i("2aba"),s=i("79e5"),r=i("be13"),a=i("2b4c");t.exports=function(t,e,i){var c=a(t),l=i(r,c,""[t]),u=l[0],d=l[1];s(function(){var e={};return e[c]=function(){return 7},7!=""[t](e)})&&(o(String.prototype,t,u),n(RegExp.prototype,c,2==e?function(t,e){return d.call(t,this,e)}:function(t){return d.call(t,this)}))}},"28a5":function(t,e,i){i("214f")("split",2,function(t,e,n){"use strict";var o=i("aae3"),s=n,r=[].push,a="split",c="length",l="lastIndex";if("c"=="abbc"[a](/(b)*/)[1]||4!="test"[a](/(?:)/,-1)[c]||2!="ab"[a](/(?:ab)*/)[c]||4!="."[a](/(.?)(.?)/)[c]||"."[a](/()()/)[c]>1||""[a](/.?/)[c]){var u=void 0===/()??/.exec("")[1];n=function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!o(t))return s.call(i,t,e);var n,a,d,h,f,p=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,m=void 0===e?4294967295:e>>>0,b=new RegExp(t.source,v+"g");u||(n=new RegExp("^"+b.source+"$(?!\\s)",v));while(a=b.exec(i)){if(d=a.index+a[0][c],d>g&&(p.push(i.slice(g,a.index)),!u&&a[c]>1&&a[0].replace(n,function(){for(f=1;f<arguments[c]-2;f++)void 0===arguments[f]&&(a[f]=void 0)}),a[c]>1&&a.index<i[c]&&r.apply(p,a.slice(1)),h=a[0][c],g=d,p[c]>=m))break;b[l]===a.index&&b[l]++}return g===i[c]?!h&&b.test("")||p.push(""):p.push(i.slice(g)),p[c]>m?p.slice(0,m):p}}else"0"[a](void 0,0)[c]&&(n=function(t,e){return void 0===t&&0===e?[]:s.call(this,t,e)});return[function(i,o){var s=t(this),r=void 0==i?void 0:i[e];return void 0!==r?r.call(i,s,o):n.call(String(s),i,o)},n]})},"36bd":function(t,e,i){"use strict";var n=i("4bf8"),o=i("77f1"),s=i("9def");t.exports=function(t){var e=n(this),i=s(e.length),r=arguments.length,a=o(r>1?arguments[1]:void 0,i),c=r>2?arguments[2]:void 0,l=void 0===c?i:o(c,i);while(l>a)e[a++]=t;return e}},3846:function(t,e,i){i("9e1e")&&"g"!=/./g.flags&&i("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:i("0bfb")})},"63eb":function(t,e,i){"use strict";var n=i("f575"),o=i.n(n);o.a},"6b54":function(t,e,i){"use strict";i("3846");var n=i("cb7c"),o=i("0bfb"),s=i("9e1e"),r="toString",a=/./[r],c=function(t){i("2aba")(RegExp.prototype,r,t,!0)};i("79e5")(function(){return"/a/b"!=a.call({source:"a",flags:"b"})})?c(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!s&&t instanceof RegExp?o.call(t):void 0)}):a.name!=r&&c(function(){return a.call(this)})},"6c7b":function(t,e,i){var n=i("5ca1");n(n.P,"Array",{fill:i("36bd")}),i("9c6c")("fill")},"897c":function(t,e,i){"use strict";i("6c7b"),i("28a5"),i("6b54");!function(t,e){function i(t){if(this.options={id:"",canvasId:"verifyCanvas",width:"100",height:"30",type:"blend",code:""},"[object Object]"==Object.prototype.toString.call(t))for(var e in t)this.options[e]=t[e];else this.options.id=t;this.options.numArr="0,1,2,3,4,5,6,7,8,9".split(","),this.options.letterArr=n(),this._init(),this.refresh()}function n(){var t="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";return t.split(",")}function o(t,e){return Math.floor(Math.random()*(e-t)+t)}function s(t,e){var i=o(t,e),n=o(t,e),s=o(t,e);return"rgb("+i+","+n+","+s+")"}i.prototype={version:"1.0.0",_init:function(){var t=e.getElementById(this.options.id),i=e.createElement("canvas");this.options.width=t.offsetWidth>0?t.offsetWidth:"100",this.options.height=t.offsetHeight>0?t.offsetHeight:"30",i.id=this.options.canvasId,i.width=this.options.width,i.height=this.options.height,i.style.cursor="pointer",i.innerHTML="您的浏览器版本不支持canvas",t.appendChild(i);var n=this;i.onclick=function(){n.refresh()}},refresh:function(){this.options.code="";var t=e.getElementById(this.options.canvasId);if(t.getContext){var i=t.getContext("2d");if(i.textBaseline="middle",i.fillStyle=s(180,240),i.fillRect(0,0,this.options.width,this.options.height),"blend"==this.options.type)var n=this.options.numArr.concat(this.options.letterArr);else if("number"==this.options.type)n=this.options.numArr;else n=this.options.letterArr;for(var r=1;r<=4;r++){var a=n[o(0,n.length)];this.options.code+=a,i.font=o(this.options.height/2,this.options.height)+"px SimHei",i.fillStyle=s(50,160),i.shadowOffsetX=o(-3,3),i.shadowOffsetY=o(-3,3),i.shadowBlur=o(-3,3),i.shadowColor="rgba(0, 0, 0, 0.3)";var c=this.options.width/5*r,l=this.options.height/2,u=o(-30,30);i.translate(c,l),i.rotate(u*Math.PI/180),i.fillText(a,0,0),i.rotate(-u*Math.PI/180),i.translate(-c,-l)}for(r=0;r<4;r++)i.strokeStyle=s(40,180),i.beginPath(),i.moveTo(o(0,this.options.width),o(0,this.options.height)),i.lineTo(o(0,this.options.width),o(0,this.options.height)),i.stroke();for(r=0;r<this.options.width/4;r++)i.fillStyle=s(0,255),i.beginPath(),i.arc(o(0,this.options.width),o(0,this.options.height),1,0,2*Math.PI),i.fill()}},validate:function(t){t=t.toLowerCase();var e=this.options.code.toLowerCase();return console.log(e),t==e||(this.refresh(),!1)}},t.GVerify=i}(window,document)},aae3:function(t,e,i){var n=i("d3f4"),o=i("2d95"),s=i("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==o(t))}},d1b3:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"signin"}},[i("div",{attrs:{id:"content"}},[i("div",{attrs:{id:"title"}},[i("router-link",{attrs:{to:"/a/signin"}},[t._v("登录")]),t._v(" | \n          "),i("router-link",{attrs:{to:"/a/signup"}},[t._v("注册")])],1),i("input",{directives:[{name:"model",rawName:"v-model",value:t.Username,expression:"Username"}],attrs:{type:"text",name:"username",placeholder:"用户名"},domProps:{value:t.Username},on:{input:function(e){e.target.composing||(t.Username=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.Password,expression:"Password"}],attrs:{type:"password",name:"password",placeholder:"密码"},domProps:{value:t.Password},on:{input:function(e){e.target.composing||(t.Password=e.target.value)}}}),i("br"),t._m(0),i("button",{attrs:{id:"submit"},on:{click:t.signin}},[t._v("登录")]),i("br")])])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticStyle:{height:"44px"},attrs:{id:"v_container"}}),i("input",{staticStyle:{width:"70%"},attrs:{type:"text",id:"code_input",value:"",placeholder:"请输入上方验证码"}}),i("span",[i("button",{attrs:{id:"verify"}},[t._v("点击验证")])])])}],s=(i("cadf"),i("551c"),i("097d"),i("db49")),r=(i("897c"),i("c5d3")),a={name:"signin",components:{mnav:r["a"]},data:function(){return{Username:"",Password:""}},mounted:function(){var t=new GVerify("v_container");document.getElementById("verify").onclick=function(){var e=t.validate(document.getElementById("code_input").value);if(e){var i=document.getElementById("verify");i.innerHTML="验证成功"}else{var n=document.getElementById("verify");n.innerHTML="重新验证"}}},methods:{signin:function(){var t=this,e=this.Username,i=this.Password,n={username:e,password:i,code:"00"};"验证成功"==document.getElementById("verify").innerHTML?fetch(s["a"]+"user/signin",{body:JSON.stringify(n),headers:{"content-type":"application/json"},method:"POST",mode:"cors"}).then(function(t){return t.json()}).then(function(e){200==e.status?(localStorage.setItem("token",e.token),localStorage.setItem("signin_user",JSON.stringify(e.signin_user)),t.$router.push("/"),window.location.reload(!0)):alert(e.message)}).catch(function(t){console.log(t)}):alert("请先成功通过验证码再登录.")}}},c=a,l=(i("63eb"),i("2877")),u=Object(l["a"])(c,n,o,!1,null,"0b6fde04",null);u.options.__file="Signin.vue";e["default"]=u.exports},f575:function(t,e,i){}}]);