(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(e,t){t.api="https://webkriti123.herokuapp.com"},25:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(21),i=a.n(n),r=(a(43),a(44),a(16)),l=a(4),o=(a(45),a.p+"static/media/shopping-img.a0765771.svg"),j=a.p+"static/media/home-page-img-2.c705cab5.svg",d=a.p+"static/media/final.b6076a6b.svg",b=a(1);var m=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"ball1"}),Object(b.jsx)("div",{className:"ball2"}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("h1",{className:"main-heading",children:[Object(b.jsx)("span",{className:"style-heading",children:"BH"}),"-ROOM"]}),Object(b.jsxs)("div",{className:"home container-box",children:[Object(b.jsx)("img",{src:o,alt:""}),Object(b.jsx)("div",{className:"intro",children:Object(b.jsx)("span",{className:"style-text",children:"BH-room is web application were Admin can view detail of each rooms in hostels and update it"})})]}),Object(b.jsxs)("div",{className:"home1 container-box",children:[Object(b.jsx)("img",{src:j,alt:""}),Object(b.jsx)("div",{className:"intro1",children:"Now caretakers and admins can allocate rooms to students with a click using BH-room"})]}),Object(b.jsxs)("div",{className:"home container-box",children:[Object(b.jsx)("img",{src:d,alt:""}),Object(b.jsx)("div",{className:"intro",children:"BH-ROOM maintains a detailed information about all the students whose rooms got allocated and the vacant rooms"})]})]})]})};function u(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Hello from admin"})})}var O=a(8),h=a.n(O),x=a(12),p=a(3),g=a(37),v=a(18),f=(a(25),a(13)),N=a.n(f),k=a(14),S=a(11);var y=function(e){e.match;var t=Object(c.useState)({username:localStorage.getItem("email")||"",user_id:localStorage.getItem("user_id")||"",All_Requests:[]}),a=Object(p.a)(t,2),s=(a[0],a[1],Object(c.useState)("")),n=Object(p.a)(s,2),i=n[0],r=n[1],o=Object(c.useState)([]),j=Object(p.a)(o,2),d=j[0],m=j[1],u=Object(c.useState)(!1),O=Object(p.a)(u,2),f=O[0],y=O[1],I=Object(c.useState)(!1),w=Object(p.a)(I,2),_=w[0],C=w[1],q=Object(c.useState)(!1),E=Object(p.a)(q,2),F=E[0],A=E[1],L=Object(c.useState)(!1),B=Object(p.a)(L,2),P=B[0],M=B[1],R=(Object(l.e)(),Object(c.useState)({})),D=Object(p.a)(R,2),H=(D[0],D[1]),T=Object(c.useState)(!1),U=Object(p.a)(T,2),G=(U[0],U[1]),J=Object(c.useState)(""),V=Object(p.a)(J,2),W=V[0],z=V[1],Y=Object(c.useState)(""),K=Object(p.a)(Y,2),Q=K[0],X=K[1],Z=Object(c.useState)(""),$=Object(p.a)(Z,2),ee=$[0],te=$[1],ae=Object(c.useState)(""),ce=Object(p.a)(ae,2),se=ce[0],ne=ce[1],ie=!1;null!==localStorage.getItem("admin")&&(ie=!0);var re=Object(c.useState)([]),le=Object(p.a)(re,2),oe=le[0];le[1],Object(c.useEffect)(Object(x.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.next=3,N.a.get("".concat(k.api,"/room"));case 3:t=e.sent,m(t.data.products),console.log(d[0]),M(!1);case 7:case"end":return e.stop()}}),e)}))),[oe]);var je=function(){var e=Object(x.a)(h.a.mark((function e(t,a){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),c={student_name:Q,MobileNumber:se,EnrollmentNumber:ee},e.next=4,N.a.post("".concat(k.api,"/room/allocate/").concat(W),c);case 4:e.sent,M(!1);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),de=function(){var e=Object(x.a)(h.a.mark((function e(t,a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(W),M(!0),e.next=4,N.a.post("".concat(k.api,"/room/vacate/").concat(W));case 4:e.sent,M(!1);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return P?Object(b.jsx)("div",{children:Object(b.jsx)("h1",{className:"loading",children:"Loading..."})}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"dashboard-main ".concat(F?"mkblr":""),children:[Object(b.jsxs)("h1",{className:"user-name",children:[" Welcome ",localStorage.getItem("email")]}),Object(b.jsxs)("div",{className:"dashboard-box",children:[" ",Object(b.jsxs)("div",{className:"filter",children:[Object(b.jsx)("input",{type:"text",placeholder:"search by room number",onChange:function(e){return r(e.target.value)},value:i}),ie&&Object(b.jsx)("button",{onClick:function(){y(!f),A(!F)},children:"Find a room"})]}),Object(b.jsx)("div",{className:"roomsData",children:Object(b.jsxs)("div",{className:"room",children:[0===d.length&&Object(b.jsx)("h2",{style:{color:"rgb(100 100 100)",textAlign:"center"},children:"No rooms found!!!"}),d.map((function(e){return Object(b.jsxs)("div",{className:"request",children:[Object(b.jsxs)("div",{className:"req-detail",children:[Object(b.jsxs)("span",{children:["Room Number: ",e.roomNumber]}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{children:["Vacant: ",e.isEmpty?"YES":"NO"]}),Object(b.jsx)("br",{}),!e.isEmpty&&Object(b.jsxs)("span",{children:["Enrolment Number:",e.EnrollmentNumber]}),Object(b.jsx)("br",{}),!e.isEmpty&&Object(b.jsxs)("span",{children:["Mobile No.:",e.MobileNumber]}),Object(b.jsx)("br",{}),!e.isEmpty&&Object(b.jsx)("span",{})]}),ie&&e.isEmpty&&Object(b.jsxs)("button",{className:"chat",onClick:function(){z(parseInt(e.roomNumber)),C(!_),A(!F)},children:["Allocate","   "," ",Object(b.jsx)(v.a,{})]}),ie&&!e.isEmpty&&Object(b.jsxs)("button",{className:"chat",onClick:function(){z(parseInt(e.roomNumber)),de()},children:["Vacate","   "," ",Object(b.jsx)(v.a,{})]})]},e.id)}))]})})]})]}),_&&Object(b.jsxs)("div",{className:"requestForm",children:[Object(b.jsxs)("div",{className:"form-head",children:[Object(b.jsx)("h1",{children:"Allocate Rooms"}),Object(b.jsx)("button",{onClick:function(){C(!1),A(!F),H({}),G(!1)},children:Object(b.jsx)(g.a,{})})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{htmlFor:"link",children:"Room No."}),Object(b.jsx)("input",{type:"text",name:"link",value:W,required:!0})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{htmlFor:"link",children:"StudentName"}),Object(b.jsx)("input",{type:"text",name:"link",placeholder:"Student Name",onChange:function(e){X(e.target.value)},required:!0})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{htmlFor:"link",children:"Enrollment number"}),Object(b.jsx)("input",{type:"text",name:"link",placeholder:"Enrollment Number",onChange:function(e){te(e.target.value)},required:!0})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{htmlFor:"link",children:"MobileNo"}),Object(b.jsx)("input",{type:"text",name:"link",placeholder:"Mobile Number",onChange:function(e){ne(e.target.value)},required:!0})]}),Object(b.jsx)("button",{onClick:function(){C(!1),A(!F),H({}),G(!1),je()},children:"Allocate"})]}),Object(b.jsx)(S.a,{})]})},I=(a(71),a.p+"static/media/login-img.c1364340.svg");var w=function(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),i=Object(p.a)(n,2),r=i[0],o=i[1],j=Object(l.e)(),d=function(){var e=Object(x.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={email:a,password:r},e.next=4,N.a.post("".concat(k.api,"/login"),c).then((function(e){console.log(e.data),200===e.status?(Object(S.b)("Successfull logged in"),"admin"===a&&localStorage.setItem("admin",!0),localStorage.setItem("token",e.data.token),localStorage.setItem("email",a),localStorage.setItem("id",e.data._id),j.push("/")):Object(S.b)("".concat(e.data.error))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"parent-box",children:[Object(b.jsxs)("div",{className:"admin-box",children:[Object(b.jsx)("div",{className:"page-img box-item",children:Object(b.jsx)("img",{src:I,alt:""})}),Object(b.jsxs)("div",{className:"login-page box-item",children:[Object(b.jsx)("div",{className:"login-header",children:Object(b.jsx)("div",{className:"login-page-icon"})}),Object(b.jsx)("p",{className:"login-text",children:"SIGN IN"})," ",Object(b.jsx)("span",{className:"Inner-text",children:"Sign in to continue"}),Object(b.jsxs)("form",{action:d,className:"login-form",children:[Object(b.jsxs)("div",{className:"email  login-page-div",children:[Object(b.jsx)("input",{type:"Text",name:"email",id:"",onChange:function(e){return s(e.target.value)},placeholder:"email"}),Object(b.jsx)("i",{className:"fa fa-user"})]}),Object(b.jsxs)("div",{className:"pass login-page-div",children:[Object(b.jsx)("input",{type:"password",name:"Password",id:"",onChange:function(e){return o(e.target.value)},placeholder:"Password"}),Object(b.jsx)("i",{className:"fa fa-lock"})]}),Object(b.jsx)("button",{className:"Login",onClick:d,id:"btn",children:"Log in"})]}),Object(b.jsxs)("p",{className:"login-footer",children:["Don\u2019t have an account?",Object(b.jsx)("a",{href:"#/signUp",children:"Sign up"})," "]})]})]}),Object(b.jsx)(S.a,{})]})})},_=(a(72),a.p+"static/media/SignUp.a037c141.svg");a(73);function C(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),i=Object(p.a)(n,2),r=i[0],o=i[1],j=Object(l.e)(),d=function(){var e=Object(x.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),setTimeout((function(){document.querySelector("#btn").classList.add("clickBtn")}),0),setTimeout((function(){document.querySelector("#btn").classList.remove("clickBtn")}),200),c={email:a,password:r},e.next=6,N.a.post("".concat(k.api,"addprofile/"),c).then((function(e){201===e.status?(Object(S.b)("Success fully created account"),j.push("/login")):Object(S.b)("some error occured")}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"parent-box1",children:[Object(b.jsxs)("div",{className:"admin-box",children:[Object(b.jsx)("div",{className:"page-img box-item",children:Object(b.jsx)("img",{src:_,alt:""})}),Object(b.jsxs)("div",{className:"login-page box-item",children:[Object(b.jsxs)("div",{className:"login-header",children:[Object(b.jsx)("div",{className:"login-page-icon"}),Object(b.jsx)("a",{href:"#/login",className:"login-header-text",children:"Log in"})]}),Object(b.jsx)("p",{className:"login-text",children:"SIGN UP"})," ",Object(b.jsxs)("form",{action:d,className:"login-form",children:[Object(b.jsxs)("div",{className:"email  login-page-div",children:[Object(b.jsx)("input",{type:"email",required:!0,name:"Email",id:"",onChange:function(e){s(e.target.value)},placeholder:"Email"}),Object(b.jsx)("i",{class:"fa fa-envelope-square"})]}),Object(b.jsxs)("div",{className:"pass login-page-div",children:[Object(b.jsx)("input",{type:"password",name:"Password",required:!0,id:"",placeholder:"Password",onChange:function(e){o(e.target.value)}}),Object(b.jsx)("i",{class:"fa fa-lock"})]}),Object(b.jsx)("button",{className:"Login",onClick:d,id:"btn",children:"Sign up"})]})]})]}),Object(b.jsx)(S.a,{})]})})}a(74);var q=a.p+"static/media/logo1.b4805da4.svg";function E(e){var t=e.match,a=Object(c.useState)(""),s=Object(p.a)(a,2),n=s[0],i=s[1],r=Object(c.useState)(""),l=Object(p.a)(r,2),o=l[0],j=l[1];Object(c.useEffect)((function(){i(localStorage.getItem("token")),j(localStorage.getItem("username")),console.log(t)}));return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"navbar",children:[Object(b.jsxs)("div",{className:"logo",children:[Object(b.jsx)("img",{src:q,alt:""}),Object(b.jsx)("h1",{})]}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{className:"nav_items",children:Object(b.jsx)("a",{href:"#/",children:" Home"})}),Object(b.jsxs)("li",{className:"nav_items",children:[Object(b.jsx)("a",{href:"#/".concat(o,"/dashboard"),children:"Dashboard"})," "]}),!n&&Object(b.jsx)("li",{className:"nav_items",children:Object(b.jsx)("a",{href:"#/login",children:" Log in"})}),!n&&Object(b.jsxs)("li",{className:"nav_items",children:[Object(b.jsx)("a",{href:"#/signup",children:"Sign up"})," "]}),n&&Object(b.jsxs)("li",{className:"nav_items",children:[Object(b.jsx)("a",{href:"#/",onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("email"),i(localStorage.getItem("token")),localStorage.removeItem("admin")},children:"Log out"})," "]})]})]})})}var F={admin_name:"xyz",admin_id:"wkdin4",bank_holder:["ICICI","SBI"],requests:[{user_id:"ksdcnsdc",user_name:"crate",product_name:"Head phones",product_link:"Flipkart.com",status:!0,bank:"ICICI",chat_id:"aimIswu92"},{user_id:"ksdcns",user_name:"james",product_name:"bags",product_link:"Flipkart.com",status:!1,bank:"SBI",chat_id:""}]},A=a(38);var L=function(e){var t=e.match,a=Object(c.useState)(""),s=Object(p.a)(a,2),n=s[0],i=s[1],r=Object(c.useState)(F.requests),o=Object(p.a)(r,2),j=o[0],d=o[1],m=Object(c.useState)(!1),u=Object(p.a)(m,2),O=u[0],h=u[1],x=Object(c.useState)({}),g=Object(p.a)(x,2),f=g[0],N=g[1],k=Object(c.useState)(!1),S=Object(p.a)(k,2),y=S[0],I=S[1],w=Object(l.e)(),_=function(e){var a=e.target.getAttribute("datakey");w.push("/admin/".concat(t.params.adminId,"/dashboard/").concat(a))},C=function(e){return e.product_name.toLowerCase().indexOf(n.toLowerCase().trim())>-1};return Object(c.useEffect)((function(){""===n&&d(F.requests),d(F.requests.filter(C))}),[n]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"dashboard-main ".concat(y?"mkblr":""),children:[Object(b.jsxs)("h1",{className:"user-name",children:[" Welcome ",F.admin_name,","]}),Object(b.jsx)("div",{className:"filter",children:Object(b.jsx)("input",{type:"text",placeholder:"search by product name",onChange:function(e){return i(e.target.value)},value:n})}),Object(b.jsx)("div",{className:"userData",children:Object(b.jsxs)("div",{className:"requests",children:[0===j.length&&Object(b.jsx)("h2",{style:{color:"rgb(180 180 180)",textAlign:"center"},children:"No requests found!!!"}),j.map((function(e){return Object(b.jsxs)("div",{className:"request",children:[Object(b.jsxs)("div",{className:"req-detail",children:[Object(b.jsx)("h2",{children:e.product_name}),Object(b.jsxs)("p",{className:"status",children:["status : ",Object(b.jsx)("span",{className:e.status?"success":"fail",children:e.status?"Accepted":"Pending..."})]})]}),e.status&&Object(b.jsxs)("button",{className:"chat",onClick:_,datakey:e.chat_id,children:["Chat","   "," ",Object(b.jsx)(v.a,{})]}),!e.status&&Object(b.jsx)("button",{className:"success",style:{backgroundColor:"#007BFF",color:"white",padding:"2px",borderRadius:"2px"},datakey:e.chat_id,children:"Approve Request"}),Object(b.jsx)("button",{className:"icon",onClick:function(){h(!O),N(e),I(!y)},children:Object(b.jsx)(A.a,{})})]},e.user_id)}))]})})]}),O&&Object(b.jsxs)("div",{className:"prod-details",children:[Object(b.jsx)("h1",{children:"DETAILS"}),Object(b.jsxs)("div",{className:"sub-det",children:[Object(b.jsxs)("h3",{children:["Product name : ",f.product_name]}),Object(b.jsxs)("h3",{children:["Product link : ",Object(b.jsx)("a",{href:f.product_link,target:"_blank",children:"product link"})]}),Object(b.jsxs)("h3",{children:["Status : ",Object(b.jsx)("span",{className:f.status?"success":"fail",children:f.status?"Accepted":"Pending..."})]})]}),Object(b.jsx)("button",{onClick:function(){h(!O),I(!y)},children:Object(b.jsx)("h2",{children:"Close"})})]})]})};var B=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(E,{}),Object(b.jsxs)(r.a,{children:[Object(b.jsx)(l.a,{path:"/",exact:!0,component:m}),Object(b.jsx)(l.a,{path:"/admin",exact:!0,component:u}),Object(b.jsx)(l.a,{path:"/admin/:adminId/dashboard",exact:!0,component:L}),Object(b.jsx)(l.a,{path:"/:userId/dashboard",exact:!0,component:y}),Object(b.jsx)(l.a,{path:"/login",exact:!0,component:w}),Object(b.jsx)(l.a,{path:"/signup",exact:!0,component:C})]})]})};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.5a9053c3.chunk.js.map