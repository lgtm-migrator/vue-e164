/**
 * vue-e164 v1.1.0
 * (c) 2018 Stanislav Mihaylov
 * @license MIT
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.vueE164=e.vueE164||{})}(this,function(e){"use strict";function n(e){var n=e.match(/[0-9]{0,14}/g);return null===n?"":"+"+n.join("").substring(0,15)}function t(e,t){if(!e)return"";var r=/^(\+)(\d)(\d{2,3})(\d{3})(\d{2})(\d{2})/gi,i=t.plus?"+":"",o=t.brackets?{l:"(",r:")"}:{l:"",r:""},u=t.space?" ":"",d=t.dash?"-":"",f=n(e),a=r.exec(f),s=t.areaCode?a[2]:"";return""+(t.areaCode?i:"")+s+(t.areaCode?u:"")+o.l+a[3]+o.r+u+a[4]+u+d+(t.dash?u:"")+a[5]+u+d+(t.dash?u:"")+a[6]}var r={};r.install=function(e,n){e.filter("phone",function(e){return t(e,n)}),e.directive("phone",function(e,n){e.innerHTML=t(e.innerHTML,n.value)}),e.prototype.$filterPhone=t},"undefined"!=typeof window&&window.Vue&&window.Vue.use(r),e.filter=t,e.default=r,Object.defineProperty(e,"__esModule",{value:!0})});
