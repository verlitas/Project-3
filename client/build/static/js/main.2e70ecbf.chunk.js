(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,a){},139:function(e,a,t){"use strict";var n=t(24),r=t(0),s=t.n(r),c=(t(191),t(19));function o(){c.a.signOut().then(function(e){console.log("signed out: ",e)}).catch(function(e){return console.log(e)})}var l=function(){return s.a.createElement("button",{className:"btn navSignOut",onClick:o},"Sign Out")},i=t(45);a.a=function(e){var a=Object(i.b)(),t=Object(n.a)(a,2),r=t[0];return t[1],s.a.createElement("nav",{className:"navBar",onClick:function(){return e.updateFormState("base")}},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col "},s.a.createElement("h1",{className:" my-1 navTitle col",href:"#"},"Web Space")),r.user&&r.user.signInUserSession&&s.a.createElement("div",null,s.a.createElement(l,null)))))}},149:function(e,a,t){},191:function(e,a,t){},225:function(e,a,t){"use strict";(function(e){var n=t(32),r=t.n(n),s=t(63),c=t(24),o=t(0),l=t.n(o),i=t(38),u=t(139),m=t(231),p=t(232),d=t(19),f=t(45),g=t(47);function E(){return(E=Object(s.a)(r.a.mark(function e(a){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.currentAuthenticatedUser();case 3:t=e.sent,console.log("user: ",t),a({type:"SET_USER",user:t}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("err: ",e.t0),a({type:"LOADED"});case 12:case"end":return e.stop()}},e,null,[[0,8]])}))).apply(this,arguments)}a.a=Object(i.f)(function(a){console.log(a);var t=Object(o.useState)("base"),n=Object(c.a)(t,2),r=n[0],s=n[1],i=Object(f.b)(),b=Object(c.a)(i,2),h=b[0],v=b[1],N=Object(o.useState)({}),w=Object(c.a)(N,2);return w[0],w[1],Object(o.useEffect)(function(){d.b.listen("auth",function(t){var n=t.payload;"signIn"===n.event&&(d.a.currentAuthenticatedUser().then(function(e){var t=e.attributes.name,n=e.attributes.email,r=e.attributes.picture;g.a.getUserByEmail(n).then(function(e){console.log(e),e.data||(g.a.saveUser({name:t,email:n,picture:r}).then(function(e){console.log("User Created")}).catch(function(e){console.log("User creation failed")}),a.history.push("/register")),e.data&&(g.a.getUserByEmail(n).then(function(e){console.log("User Created")}).catch(function(e){console.log("User creation failed")}),a.history.push("/main"))})}),e(function(){return v({type:"SET_USER",user:n.data})}),s("base")),"signOut"===n.event&&setTimeout(function(){return v({type:"SET_USER",user:null})},350)}),window.location.search.includes("?signedin=true")||function(e){E.apply(this,arguments)}(v)},[]),"email"===r?l.a.createElement("div",null,l.a.createElement(u.a,{updateFormState:s}),l.a.createElement(p.a,null)):l.a.createElement("div",null,l.a.createElement(u.a,{updateFormState:s}),h.loading&&l.a.createElement("div",{className:""},l.a.createElement("p",null,"Loading...")),!h.user&&!h.loading&&l.a.createElement(m.a,{updateFormState:s}))})}).call(this,t(190).setImmediate)},231:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=(t(768),t(19)),c=t(138);a.a=function(e){return r.a.createElement("div",{className:"container bCard"},r.a.createElement("img",{src:t(769),className:"bPic"}),r.a.createElement("h4",{className:"bBio"},"Build and engage in your personal network circle"),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"bGoogle",onClick:function(){return s.a.federatedSignIn({provider:"Google"})}},r.a.createElement(c.b,{className:"mx-2 my-2",color:"red"}),r.a.createElement("p",{className:"bGoogletext  my-2"},"Sign In with Google"))),r.a.createElement("button",{className:"bEmail",onClick:function(){return e.updateFormState("email")}},r.a.createElement(c.a,{className:" mx-2 my-1 text-white"}),r.a.createElement("p",{className:"bEmailtext my-2"},"Sign Up with Email")))}},232:function(e,a,t){"use strict";t.d(a,"a",function(){return b});var n=t(32),r=t.n(n),s=t(24),c=t(63),o=t(92),l=t(71),i=t(0),u=t.n(i),m=t(19),p=(t(772),{username:"",password:"",email:"",confirmationCode:""});function d(e,a){switch(a.type){case"updateFormState":return Object(l.a)({},e,Object(o.a)({},a.e.target.name,a.e.target.value));default:return e}}function f(){return(f=Object(c.a)(r.a.mark(function e(a,t){var n,s,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.username,s=a.password,c=a.email,e.prev=1,e.next=4,m.a.signUp({username:n,password:s,attributes:{email:c}});case 4:console.log("sign up success!"),t("confirmSignUp"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0.message);case 11:case"end":return e.stop()}},e,null,[[1,8]])}))).apply(this,arguments)}function g(){return(g=Object(c.a)(r.a.mark(function e(a,t){var n,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.username,s=a.confirmationCode,e.prev=1,e.next=4,m.a.confirmSignUp(n,s);case 4:console.log("confirm sign up success!"),t("signIn"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0.message);case 12:case"end":return e.stop()}},e,null,[[1,8]])}))).apply(this,arguments)}function E(){return(E=Object(c.a)(r.a.mark(function e(a){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.username,n=a.password,e.prev=1,e.next=4,m.a.signIn(t,n);case 4:console.log("sign in success!"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),alert(e.t0.message);case 11:case"end":return e.stop()}},e,null,[[1,7]])}))).apply(this,arguments)}function b(e){var a=Object(i.useState)("signUp"),t=Object(s.a)(a,2),n=t[0],r=t[1],c=Object(i.useReducer)(d,p),o=Object(s.a)(c,2),l=o[0],m=o[1];return u.a.createElement("div",{className:""},u.a.createElement("div",null,function(){switch(n){case"signUp":return u.a.createElement(h,{signUp:function(){return function(e,a){return f.apply(this,arguments)}(l,r)},updateFormState:function(e){return m({type:"updateFormState",e:e})}});case"confirmSignUp":return u.a.createElement(N,{confirmSignUp:function(){return function(e,a){return g.apply(this,arguments)}(l,r)},updateFormState:function(e){return m({type:"updateFormState",e:e})}});case"signIn":return u.a.createElement(v,{signIn:function(){return function(e){return E.apply(this,arguments)}(l)},updateFormState:function(e){return m({type:"updateFormState",e:e})}});default:return null}}()),"signUp"===n&&u.a.createElement("p",{className:"have-acct"},"Already have an account?",u.a.createElement("span",{className:"signIn-link mx-1",onClick:function(){return r("signIn")}},"Sign In")),"signIn"===n&&u.a.createElement("p",{className:"need-acct"},"Need an account?"," ",u.a.createElement("span",{className:"anchor",onClick:function(){return r("signUp")}},"Sign Up")))}function h(e){return u.a.createElement("div",{className:"signUpContainer container"},u.a.createElement("h6",{className:"create-acct"},"Create an Account"),u.a.createElement("label",{className:"labelsForm",htmlFor:"email"},"username/email:"),u.a.createElement("input",{name:"username",onChange:function(a){a.persist(),e.updateFormState(a)},className:"userNameInput",placeholder:"email"}),u.a.createElement("label",{className:"labelsForm",htmlFor:"password"},"password:"),u.a.createElement("input",{type:"password",name:"password",onChange:function(a){a.persist(),e.updateFormState(a)},className:"passwordInput",placeholder:"password"}),u.a.createElement("button",{onClick:e.signUp,className:"signUpButton"},"Sign Up"))}function v(e){return u.a.createElement("div",{className:"container signInContainer"},u.a.createElement("h6",{className:"log-acct"},"Log in"),u.a.createElement("label",{className:"labelsForm",htmlFor:"email"},"email:"),u.a.createElement("input",{name:"username",onChange:function(a){a.persist(),e.updateFormState(a)},className:"userNameInput",placeholder:"email"}),u.a.createElement("label",{className:"labelsForm",htmlFor:"password"},"password:"),u.a.createElement("input",{type:"password",name:"password",onChange:function(a){a.persist(),e.updateFormState(a)},className:"passwordInput",placeholder:"password"}),u.a.createElement("button",{className:"signInbutton",onClick:e.signIn},"Sign In"))}function N(e){return u.a.createElement("div",{className:""},u.a.createElement("input",{name:"confirmationCode",placeholder:"Confirmation Code",onChange:function(a){a.persist(),e.updateFormState(a)},className:"confirmSignInput"}),u.a.createElement("button",{onClick:e.confirmSignUp,className:"confirmSignInButton"},"Confirm Sign Up"))}},237:function(e,a,t){e.exports=t(776)},258:function(e,a,t){},45:function(e,a,t){"use strict";t.d(a,"a",function(){return p}),t.d(a,"b",function(){return d});var n=t(24),r=t(222),s=t(71),c=t(0),o=t.n(c),l=Object(c.createContext)(),i=l.Provider,u=function(e,a){switch(a.type){case"SET_USER":return Object(s.a)({},e,{user:a.user,loading:!1});case"LOADED":return Object(s.a)({},e,{loading:!1});default:return e}},m={user:null,loading:!0},p=function(e){e.value;var a=Object(r.a)(e,["value"]),t=Object(c.useReducer)(u,m),s=Object(n.a)(t,2),l=s[0],p=s[1];return o.a.createElement(i,Object.assign({value:[l,p]},a))},d=function(){return Object(c.useContext)(l)}},47:function(e,a,t){"use strict";var n=t(39),r=t.n(n);a.a={getUsers:function(){return r.a.get("/api/users")},getUser:function(e){return r.a.get("/api/users/"+e)},getUserByEmail:function(e){return r.a.get("/api/users/email/"+e)},saveUser:function(e){return r.a.post("/api/users",e)},updateUser:function(e){return r.a.put("/api/users/user",e)}}},768:function(e,a,t){},769:function(e,a,t){e.exports=t.p+"static/media/image1.4ef0e478.png"},772:function(e,a,t){},774:function(e,a,t){},775:function(e,a,t){},776:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(35),c=t.n(s),o=t(133),l=t(38),i=t(89),u=t(90),m=t(98),p=t(91),d=t(99),f=t(47),g=t(100);t(258);var E=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},e.results&&e.results.map(function(e){return r.a.createElement(g.a,{className:"userCard flip-box",style:{width:"13rem",height:"20rem"}},r.a.createElement("div",{className:"flip-box-inner"},r.a.createElement("div",{className:"flip-box-front"},r.a.createElement("div",{className:" "},r.a.createElement("img",{className:"  userImage",src:e.picture,alt:"userPicture"}),r.a.createElement("h6",{className:"user-name text-center"},e.name),r.a.createElement("small",{className:"smallMotives text-center"},"What brings ",e.name," here today?"),r.a.createElement("span",{className:"align-center"},r.a.createElement("p",{className:" text-center motives"},e.motives)))),r.a.createElement(g.a.Body,{className:"flip-box-back"},r.a.createElement("p",{className:"user-name text-center"}," About "),r.a.createElement("p",{className:"bio text-center"},e.bio),r.a.createElement(g.a.Text,null,r.a.createElement("div",{className:" profile-info  "},r.a.createElement("p",{className:"email"}," ",r.a.createElement("a",{href:"mailto:"},e.email)," "),r.a.createElement("p",{className:"profession"}," ",r.a.createElement("a",{href:"http://"},e.profession)," "))))))})))},b=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={users:[]},t}return Object(d.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.getUsers().then(function(a){return e.setState({users:a.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,{results:this.state.users}))}}]),a}(n.Component),h=t(97),v=t(24),N=(t(149),t(45)),w=t(234),S=t(74),y=function(e){var a=e.touched,t=e.message;return a?t?r.a.createElement("div",{className:"form-message invalid"},t):r.a.createElement("div",{className:"form-message valid"},"all good"):r.a.createElement("div",{className:"form-message invalid"},"\xa0")},O=S.object().shape({name:S.string().min(5,"Too Short!").max(255,"Too Long!").required("Required"),email:S.string().email("Must be a valid e-mail!").max(255,"Too Long!").required("Required"),bio:S.string().min(2,"C'mon , we want to know more about you!").max(255,"Too Long!").required("Required")});var j=function(e){console.log(e);var a=Object(N.b)(),t=Object(v.a)(a,2),n=t[0];return t[1],console.log(n),r.a.createElement("div",null,r.a.createElement(w.a,{initialValues:{picture:n.user.signInUserSession.idToken.payload.picture,name:n.user.signInUserSession.idToken.payload.name,email:n.user.signInUserSession.idToken.payload.email,bio:""},validationSchema:O,onSubmit:function(a,t){t.setSubtmitting,a.email,f.a.updateUser({picture:a.picture,name:a.name,bio:a.bio,profession:a.profession,email:a.email,motives:a.motives}).then(function(a){e.handleModalClose(),console.log("Saved to database")})}},function(e){var a=e.values,t=e.errors,n=e.touched,s=e.handleChange,c=e.handleBlur,o=e.handleSubmit,l=e.isSubmitting;return r.a.createElement("form",{onSubmit:o},r.a.createElement("nav",{className:" modalNav  p-1"},"Your Profile"),r.a.createElement("div",{className:"container  modalStyle"},r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col-6 text-center"},r.a.createElement("img",{className:"userImageForm",src:a.picture,alt:"userPicture"}),r.a.createElement("p",{className:" \nnameRegisterForm text-center ",name:"name",id:"name"}," ",a.name),r.a.createElement("p",{className:" emailRegisterForm text-center",type:"email",name:"email",id:"user_email"},a.email)),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"row   my-2 form-group"},r.a.createElement("label",{htmlFor:""}),r.a.createElement("textarea",{name:"bio",placeholder:"Write a brief description about yourself...",value:a.bio,rows:"4",cols:"45",onChange:s,className:n.bio&&t.bio?"has-error":null}," "),r.a.createElement("div",{className:"inputError"},r.a.createElement(y,{touched:n.bio,message:t.bio}))),r.a.createElement("div",{className:"row form-group"},r.a.createElement("label",{htmlFor:"profession"},"Profession:"),r.a.createElement("input",{className:"input-group-append",type:"text",name:"profession",id:"user_profession",value:a.profession,onChange:s}),r.a.createElement("i",{className:"fas fa-pen mx-2"})),r.a.createElement("div",{className:" form-group"},r.a.createElement("p",{className:"motivesLabel"},"What brings you here today?"),r.a.createElement("select",{onChange:s,onBlur:c,className:"custom-select col-8 form-select",name:"motives",value:a.motives,id:"user_motive"},r.a.createElement("option",{value:"Networking"},"Networking"),r.a.createElement("option",{value:"Looking for a position"},"Looking for a position"),r.a.createElement("option",{value:"I am a recruiter"},"I am a recruiter")),r.a.createElement("div",{className:"  float-right"},r.a.createElement("button",{className:" button submitBtn",type:"submit",disabled:l},r.a.createElement("i",{className:"fas fa-check"}))))))))}))},x=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={show:!0},t.handleModalClose=function(){t.setState({show:!1}),t.props.history.push("/main")},t}return Object(d.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{className:"registerModal","aria-labelledby":"",centered:!0,size:"lg",show:this.state.show,onHide:this.handleClose},r.a.createElement(h.a.Body,null,r.a.createElement(j,{handleModalClose:this.handleModalClose})))}}]),a}(n.Component),C=t(225);t(774);var U=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"appFooter navbar justify-content-center fixed-bottom "},r.a.createElement("small",null,"Copyright 2019 \xa9")))};var k=function(){return r.a.createElement(N.a,null,r.a.createElement(o.a,null,r.a.createElement(C.a,null),r.a.createElement("div",{className:"App"},r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/register",component:x}),r.a.createElement(l.a,{exact:!0,path:"/main",component:b})),r.a.createElement(U,null))))},I=t(19),F={aws_project_region:"us-west-2",aws_cognito_identity_pool_id:"us-west-2:a62c46bf-fef9-430d-ad32-3e42fbdfca59",aws_cognito_region:"us-west-2",aws_user_pools_id:"us-west-2_gNSTliNbG",aws_user_pools_web_client_id:"51j0qb92bnjv04s64pb62unktv",oauth:{domain:"webspaceproject3-projfinal.auth.us-west-2.amazoncognito.com",scope:["phone","email","openid","profile","aws.cognito.signin.user.admin"],redirectSignIn:"https://rocky-atoll-63520.herokuapp.com/",redirectSignOut:"https://rocky-atoll-63520.herokuapp.com/",responseType:"code"},federationTarget:"COGNITO_USER_POOLS"};t(775);I.c.configure(F),c.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[237,1,2]]]);
//# sourceMappingURL=main.2e70ecbf.chunk.js.map