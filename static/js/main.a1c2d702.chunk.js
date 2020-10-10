(this["webpackJsonpda-epoca-portugal-client"]=this["webpackJsonpda-epoca-portugal-client"]||[]).push([[0],{66:function(e,n,t){e.exports=t(81)},71:function(e,n,t){},72:function(e,n,t){},81:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),o=t(31),c=t.n(o),i=t(20);t(71),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(72);var u,l,d=t(8);function s(){var e=Object(d.a)(["\n    query getProductsInSeason {\n  getProductsInSeason {\n    name\n    name_en\n    type\n    photo\n    newInSeason\n    inEndOfSeason\n  }\n}\n    "]);return s=function(){return e},e}!function(e){e.Fruit="FRUIT",e.Vegetable="VEGETABLE"}(u||(u={})),function(e){e.Public="PUBLIC",e.Private="PRIVATE"}(l||(l={}));var f=Object(i.gql)(s());var m=t(38),p={products:[],type:u.Fruit},g=Object(m.b)({name:"products",initialState:p,reducers:{fetchProducts:function(e,n){e.products=n.payload},setType:function(e,n){e.type=n.payload}}}),h=g.actions,b=h.fetchProducts,v=h.setType,C=function(e){return e[g.name].products},E=function(e){return e[g.name].type},O=g.reducer,y=t(19),x=t(9),j={colors:{fruityOrange:"#ED7014",veggieGreen:"#457D00",candyAppleRed:"#FF0800",gray:"#707070",grayDark:"#222222",grayLight:"#BABABA",white:"#FFFFFF"},fonts:{default:"Fredoka One"},fontSizes:{xs:"0.75rem",small:"1rem",medium:"1.25rem",large:"2rem"},spacing:{1:"0.5rem",2:"1rem",3:"1.5rem",4:"2rem",5:"2.5rem",6:"3rem"}},w=function(e){var n=e.children;return a.a.createElement(x.a,{theme:j},n)};function F(){var e=Object(d.a)(["\n  position: relative;\n  padding-bottom: 100%;\n  border-radius: 12px;\n\n  img {\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 100%;\n    height: 100%;\n    border-radius: 8px;\n    object-fit: cover;\n  }\n\n  .in-end-of-season & {\n    border: 4px solid ",";\n  }\n\n  .new-in-season & {\n    border: 4px solid ",";\n  }\n"]);return F=function(){return e},e}function k(){var e=Object(d.a)(["\n  background-color: ",";\n"]);return k=function(){return e},e}function z(){var e=Object(d.a)(["\n  background-color: ",";\n"]);return z=function(){return e},e}function S(){var e=Object(d.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 0.2rem;\n  color: ",";\n  font-size: ",";\n  border-radius: 8px 8px 0 0;\n"]);return S=function(){return e},e}function I(){var e=Object(d.a)(["\n  position: relative;\n\n  font-size: ",";\n  font-family: Fredoka One;\n  text-align: center;\n\n  strong {\n    display: block;\n\n    text-transform: capitalize;\n    font-weight: normal;\n    height: 2em;\n    font-size: ",";\n  }\n"]);return I=function(){return e},e}var T=x.c.article(I(),(function(e){return e.theme.fontSizes.medium}),(function(e){return e.theme.fontSizes.small})),P=x.c.span(S(),(function(e){return e.theme.colors.white}),(function(e){return e.theme.fontSizes.xs})),V=Object(x.c)(P)(z(),(function(e){return e.theme.colors.fruityOrange})),B=Object(x.c)(P)(k(),(function(e){return e.theme.colors.veggieGreen})),A=x.c.div(F(),(function(e){return e.theme.colors.fruityOrange}),(function(e){return e.theme.colors.veggieGreen})),L=function(e){var n=e.product;return r.createElement(w,null,r.createElement(T,{className:n.inEndOfSeason?"in-end-of-season":n.newInSeason?"new-in-season":""},r.createElement(A,null,r.createElement("img",{alt:"",src:n.photo||"http://placehold.it/80/80"})),n.inEndOfSeason?r.createElement(V,null,"Fim de \xc9poca"):n.newInSeason?r.createElement(B,null,"In\xedcio de \xc9poca"):"",r.createElement("strong",null,n.name)))};function R(){var e=Object(d.a)(["\n  box-sizing: border-box;\n  margin: 0 auto 64px;\n  width: 100%;\n  min-width: 360px;\n  max-width: 480px;\n  padding: 0 ",";\n\n  font-size: ",";\n  font-family: Fredoka One;\n\n  ul {\n    list-style-type: none;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: ",";\n    padding: 0;\n  }\n\n  h1,\n  h2 {\n    font-weight: normal;\n    font-size: ",";\n  }\n"]);return R=function(){return e},e}var G=x.c.section(R(),(function(e){return e.theme.spacing[2]}),(function(e){return e.theme.fontSizes.medium}),(function(e){return e.theme.spacing[3]}),(function(e){return e.theme.fontSizes.medium})),M=function(){var e=Object(y.c)(C),n=Object(y.c)(E),t=Object(r.useCallback)((function(){return e.filter((function(e){return e.type===n}))}),[e,n]);return a.a.createElement(w,null,a.a.createElement(G,null,a.a.createElement("h1",null,"Produtos da \xc9poca"),a.a.createElement("ul",null,t().map((function(e,n){return a.a.createElement("li",{key:n},a.a.createElement(L,{product:e}))})))))},Z=function(){var e,n=Object(y.b)(),t=i.useQuery(f,e),r=t.data,o=t.error;return t.loading?a.a.createElement("div",null,"Loading..."):o||!r?a.a.createElement("div",null,"ERROR"):(n(b(r.getProductsInSeason)),a.a.createElement(M,null))},D=function(){return r.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none"},r.createElement("path",{d:"M27.4181 12.3151C30.6989 17.2364 22.4969 32 19.2161 32C15.9353 32 15.9353 30.3596 14.2949 30.3596C12.6545 30.3596 12.6545 32 9.37364 32C6.09283 32 -2.10919 17.2364 1.17162 12.3151C4.45243 7.39392 9.37364 7.39392 12.6545 9.03433V4.11311C3.43538 9.14915 1.35206 2.11182 1.35206 2.11182C1.35206 2.11182 5.71554 -3.77724 12.6545 4.11311V0.8323H15.9353V9.03433C19.2161 7.39392 24.1373 7.39392 27.4181 12.3151Z",fill:"#222222"}))},q=function(){return r.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none"},r.createElement("path",{d:"M12.2925 30.1764C12.4405 30.4794 12.6913 30.8123 12.9578 31.0415C13.2835 31.3216 13.6893 31.5196 14.1188 31.6786C14.4187 31.7896 14.8149 31.8864 15.1353 31.9439C15.4674 32.0036 15.8751 32.0025 16.2595 31.9983C16.9423 31.9908 17.4813 31.9272 18.0896 31.7791C18.4729 31.6857 18.8369 31.582 19.1324 31.4657C19.6904 31.2462 20.0461 31.0024 20.1203 30.8443C20.0646 30.5829 19.977 30.1712 19.9118 29.8012C19.8536 29.4693 19.8053 29.1358 19.7669 28.8011C19.6833 28.0761 19.7263 27.566 19.8189 26.7227C19.9554 25.4806 20.2206 24.9148 20.6079 24.1767C20.9778 23.4717 21.5884 22.4864 22.0589 21.8517C22.5495 21.19 23.7777 19.8967 24.2257 19.4162C24.3819 19.4624 24.6837 19.5631 25.1504 19.6552C25.506 19.7254 25.9201 19.8091 26.4413 19.7915C27.682 19.7497 28.1337 19.5125 28.8554 19.0419C29.5103 18.6151 30.1369 17.7608 30.4649 16.9422C30.7172 16.3128 30.7948 15.6719 30.6851 14.9199C30.6112 14.414 30.4478 13.8149 30.3171 13.4188C30.175 12.9879 29.9519 12.5251 29.7646 12.1749C29.7646 12.1749 30.5178 11.2749 30.8193 10.5241C31.0788 9.87763 31.1998 9.04575 31.1478 8.52581C31.0939 7.98619 30.6359 6.99619 30.3479 6.64288C29.9686 6.17738 29.5978 5.69475 29.1293 5.31638C28.67 4.94538 28.1499 4.64175 27.6052 4.41419C27.0408 4.17844 26.3655 4.04194 25.8303 3.94794C25.7499 3.51919 25.6392 3.22025 25.3442 2.70438C24.9758 2.04188 24.5712 1.74263 23.9353 1.277C23.1462 0.699317 22.0464 0.10338 20.979 0.0217548C20.5191 -0.0133701 19.845 -0.0278701 18.9973 0.154442C18.2601 0.312942 17.5335 0.612442 16.981 0.894754C15.8716 0.46988 14.8352 0.53263 14.0176 0.754692C13.328 0.941879 13.1809 1.05425 12.55 1.4255C11.9306 1.69307 11.2578 2.31525 10.7368 3.03563C8.79608 3.09069 7.18064 3.77332 6.03052 4.426C4.72239 5.16838 3.54846 6.58738 3.08883 7.49C2.57583 8.49738 2.06346 9.92231 2.49633 12.126C-0.36254 13.8837 -0.0685406 16.6952 1.53865 18.2651C2.94815 19.642 5.28321 20.0709 7.49489 19.8479C8.15564 20.5177 10.6553 23.546 10.6553 23.546C10.6553 23.546 13.1731 26.3834 12.2925 30.1764ZM9.58008 18.4306C9.9222 18.0886 10.2155 17.5998 10.4435 17.2251C10.7023 17.2395 11.2338 17.2744 11.7565 17.2504C12.2805 17.2262 12.8358 17.1489 13.0578 17.0191C13.1201 17.206 13.5537 18.754 13.5812 19.7052C13.6173 20.9524 13.5826 21.1734 13.381 21.6112C13.2713 21.6631 13.1645 21.6857 13.0298 21.6373C12.55 21.4651 11.7505 20.8659 11.1772 20.3311C10.2894 19.5029 9.58008 18.4306 9.58008 18.4306ZM19.463 18.1672C19.4458 18.3187 19.4348 18.8625 19.508 19.3375C19.5824 19.8199 19.6555 20.2682 19.8374 20.4423C20.4768 20.3271 20.9233 19.9169 21.3092 19.6289C21.3092 19.6289 22.5617 18.651 22.8036 18.4264C22.6193 18.2594 22.3601 17.8677 22.268 17.6316C22.268 17.6316 21.3866 17.8897 20.943 17.9819C20.3844 18.1029 19.7279 18.1557 19.463 18.1672Z",fill:"#222222"}))};function H(){var e=Object(d.a)(["\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"]);return H=function(){return e},e}var J=Object(x.b)(H());function N(){var e=Object(d.a)(["\n  position: relative;\n  left: 0;\n  height: 32px;\n  transition: left 1s ease-in-out;\n\n  .has-selected-vegetables & {\n    left: 32px;\n  }\n"]);return N=function(){return e},e}function U(){var e=Object(d.a)(["\n  margin-left: 16px;\n  width: 80px;\n  height: 48px;\n  background: #bababa;\n  border-radius: 24px;\n  padding: 8px;\n  display: flex;\n  justify-content: flex-start;\n"]);return U=function(){return e},e}function W(){var e=Object(d.a)(["\n  color: ",";\n  text-decoration: none;\n\n  .has-selected-vegetables & {\n    color: ",";\n    text-decoration: underline;\n  }\n"]);return W=function(){return e},e}function Q(){var e=Object(d.a)(["\n  color: ",";\n  text-decoration: underline;\n\n  .has-selected-vegetables & {\n    color: ",";\n    text-decoration: none;\n  }\n"]);return Q=function(){return e},e}function $(){var e=Object(d.a)(["\n  font-family: ",";\n"]);return $=function(){return e},e}function _(){var e=Object(d.a)(["\n  margin-left: -80px;\n  padding-left: calc(80px + 16px);\n  z-index: 1;\n\n  .has-selected-vegetables & {\n    z-index: 0;\n  }\n"]);return _=function(){return e},e}function K(){var e=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  z-index: 0;\n  cursor: pointer;\n\n  .has-selected-vegetables & {\n    z-index: 1;\n  }\n"]);return K=function(){return e},e}function X(){var e=Object(d.a)(["\n  ","\n"]);return X=function(){return e},e}function Y(){var e=Object(d.a)(["\n  ","\n"]);return Y=function(){return e},e}function ee(){var e=Object(d.a)(["\n  border: none;\n  padding: 0;\n  margin: 0;\n"]);return ee=function(){return e},e}function ne(){var e=Object(d.a)(["\n  position: fixed;\n  padding: "," 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  background-image: linear-gradient(to top, white 80%, rgba(255, 255, 255, 0));\n"]);return ne=function(){return e},e}var te=x.c.div(ne(),(function(e){return e.theme.spacing[1]})),re=x.c.fieldset(ee()),ae=x.c.legend(Y(),J),oe=x.c.input(X(),J),ce=x.c.label(K()),ie=Object(x.c)(ce)(_()),ue=x.c.span($(),(function(e){return e.theme.fonts.default})),le=Object(x.c)(ue)(Q(),(function(e){return e.theme.colors.fruityOrange}),(function(e){return e.theme.colors.gray})),de=Object(x.c)(ue)(W(),(function(e){return e.theme.colors.gray}),(function(e){return e.theme.colors.veggieGreen})),se=x.c.div(U()),fe=x.c.div(N()),me=function(){var e=Object(y.b)(),n=Object(y.c)(E);return a.a.createElement(w,null,a.a.createElement(re,null,a.a.createElement(te,{className:n===u.Vegetable?"has-selected-vegetables":""},a.a.createElement(ae,null,"Tipo de produto"),a.a.createElement(oe,{type:"radio",name:"productType",id:"productType-fruit",value:"fruit",onChange:function(){return e(v(u.Fruit))},checked:n===u.Fruit}),a.a.createElement(ce,{htmlFor:"productType-fruit"},a.a.createElement(le,null,"Frutas"),a.a.createElement(se,null,a.a.createElement(fe,null,a.a.createElement("div",{hidden:n===u.Vegetable},a.a.createElement(D,null)),a.a.createElement("div",{hidden:n===u.Fruit},a.a.createElement(q,null))))),a.a.createElement(oe,{type:"radio",name:"productType",id:"productType-vegetable",value:"vegetable",onChange:function(){return e(v(u.Vegetable))},checked:n===u.Vegetable}),a.a.createElement(ie,{htmlFor:"productType-vegetable"},a.a.createElement(de,null,"Legumes")))))};var pe=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Z,null),a.a.createElement(me,null))},ge=t(18),he=Object(ge.c)({products:O}),be=Object(m.a)({reducer:he}),ve=new i.ApolloClient({link:Object(i.createHttpLink)({uri:"https://da-epoca-portugal-api.herokuapp.com/"}),cache:new i.InMemoryCache});c.a.render(a.a.createElement(y.a,{store:be},a.a.createElement(i.ApolloProvider,{client:ve},a.a.createElement(pe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.a1c2d702.chunk.js.map