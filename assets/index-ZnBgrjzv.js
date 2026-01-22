(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();const V=globalThis,nt=V.ShadowRoot&&(V.ShadyCSS===void 0||V.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,At=Symbol(),ct=new WeakMap;let Ot=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==At)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(nt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ct.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ct.set(e,t))}return t}toString(){return this.cssText}};const B=r=>new Ot(typeof r=="string"?r:r+"",void 0,At),Tt=(r,t)=>{if(nt)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),n=V.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,r.appendChild(i)}},dt=nt?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return B(e)})(r):r;const{is:St,defineProperty:zt,getOwnPropertyDescriptor:Mt,getOwnPropertyNames:It,getOwnPropertySymbols:Dt,getPrototypeOf:Nt}=Object,Z=globalThis,lt=Z.trustedTypes,jt=lt?lt.emptyScript:"",Ut=Z.reactiveElementPolyfillSupport,U=(r,t)=>r,G={toAttribute(r,t){switch(t){case Boolean:r=r?jt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},it=(r,t)=>!St(r,t),pt={attribute:!0,type:String,converter:G,reflect:!1,useDefault:!1,hasChanged:it};Symbol.metadata??=Symbol("metadata"),Z.litPropertyMetadata??=new WeakMap;let M=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=pt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);n!==void 0&&zt(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:s}=Mt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:n,set(o){const c=n?.call(this);s?.call(this,o),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??pt}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const t=Nt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const e=this.properties,i=[...It(e),...Dt(e)];for(const n of i)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,n]of e)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const n=this._$Eu(e,i);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(dt(n))}else t!==void 0&&e.push(dt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Tt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const s=(i.converter?.toAttribute!==void 0?i.converter:G).toAttribute(e,i.type);this._$Em=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const s=i.getPropertyOptions(n),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:G;this._$Em=n;const c=o.fromAttribute(e,s.type);this[n]=c??this._$Ej?.get(n)??c,this._$Em=null}}requestUpdate(t,e,i,n=!1,s){if(t!==void 0){const o=this.constructor;if(n===!1&&(s=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??it)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:s},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),s!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,s]of i){const{wrapped:o}=s,c=this[n];o!==!0||this._$AL.has(n)||c===void 0||this.C(n,void 0,s,c)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[U("elementProperties")]=new Map,M[U("finalized")]=new Map,Ut?.({ReactiveElement:M}),(Z.reactiveElementVersions??=[]).push("2.1.2");const rt=globalThis,ht=r=>r,Y=rt.trustedTypes,ut=Y?Y.createPolicy("lit-html",{createHTML:r=>r}):void 0,_t="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,Pt="?"+E,qt=`<${Pt}>`,S=document,q=()=>S.createComment(""),F=r=>r===null||typeof r!="object"&&typeof r!="function",st=Array.isArray,Ft=r=>st(r)||typeof r?.[Symbol.iterator]=="function",et=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,mt=/>/g,O=RegExp(`>|${et}(?:([^\\s"'>=/]+)(${et}*=${et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gt=/'/g,bt=/"/g,kt=/^(?:script|style|textarea|title)$/i,Lt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),d=Lt(1),I=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),xt=new WeakMap,T=S.createTreeWalker(S,129);function Et(r,t){if(!st(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ut!==void 0?ut.createHTML(t):t}const Rt=(r,t)=>{const e=r.length-1,i=[];let n,s=t===2?"<svg>":t===3?"<math>":"",o=j;for(let c=0;c<e;c++){const a=r[c];let l,u,p=-1,_=0;for(;_<a.length&&(o.lastIndex=_,u=o.exec(a),u!==null);)_=o.lastIndex,o===j?u[1]==="!--"?o=ft:u[1]!==void 0?o=mt:u[2]!==void 0?(kt.test(u[2])&&(n=RegExp("</"+u[2],"g")),o=O):u[3]!==void 0&&(o=O):o===O?u[0]===">"?(o=n??j,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,l=u[1],o=u[3]===void 0?O:u[3]==='"'?bt:gt):o===bt||o===gt?o=O:o===ft||o===mt?o=j:(o=O,n=void 0);const k=o===O&&r[c+1].startsWith("/>")?" ":"";s+=o===j?a+qt:p>=0?(i.push(l),a.slice(0,p)+_t+a.slice(p)+E+k):a+E+(p===-2?c:k)}return[Et(r,s+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class L{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0;const c=t.length-1,a=this.parts,[l,u]=Rt(t,e);if(this.el=L.createElement(l,i),T.currentNode=this.el.content,e===2||e===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(n=T.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const p of n.getAttributeNames())if(p.endsWith(_t)){const _=u[o++],k=n.getAttribute(p).split(E),Q=/([.?@])?(.*)/.exec(_);a.push({type:1,index:s,name:Q[2],strings:k,ctor:Q[1]==="."?Xt:Q[1]==="?"?Qt:Q[1]==="@"?Vt:tt}),n.removeAttribute(p)}else p.startsWith(E)&&(a.push({type:6,index:s}),n.removeAttribute(p));if(kt.test(n.tagName)){const p=n.textContent.split(E),_=p.length-1;if(_>0){n.textContent=Y?Y.emptyScript:"";for(let k=0;k<_;k++)n.append(p[k],q()),T.nextNode(),a.push({type:2,index:++s});n.append(p[_],q())}}}else if(n.nodeType===8)if(n.data===Pt)a.push({type:2,index:s});else{let p=-1;for(;(p=n.data.indexOf(E,p+1))!==-1;)a.push({type:7,index:s}),p+=E.length-1}s++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function D(r,t,e=r,i){if(t===I)return t;let n=i!==void 0?e._$Co?.[i]:e._$Cl;const s=F(t)?void 0:t._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),s===void 0?n=void 0:(n=new s(r),n._$AT(r,e,i)),i!==void 0?(e._$Co??=[])[i]=n:e._$Cl=n),n!==void 0&&(t=D(r,n._$AS(r,t.values),n,i)),t}class Ht{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??S).importNode(e,!0);T.currentNode=n;let s=T.nextNode(),o=0,c=0,a=i[0];for(;a!==void 0;){if(o===a.index){let l;a.type===2?l=new H(s,s.nextSibling,this,t):a.type===1?l=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(l=new Wt(s,this,t)),this._$AV.push(l),a=i[++c]}o!==a?.index&&(s=T.nextNode(),o++)}return T.currentNode=S,n}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class H{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),F(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==I&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ft(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&F(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=L.createElement(Et(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const s=new Ht(n,this),o=s.u(this.options);s.p(e),this.T(o),this._$AH=s}}_$AC(t){let e=xt.get(t.strings);return e===void 0&&xt.set(t.strings,e=new L(t)),e}k(t){st(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new H(this.O(q()),this.O(q()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const i=ht(t).nextSibling;ht(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,s){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}_$AI(t,e=this,i,n){const s=this.strings;let o=!1;if(s===void 0)t=D(this,t,e,0),o=!F(t)||t!==this._$AH&&t!==I,o&&(this._$AH=t);else{const c=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=D(this,c[i+a],e,a),l===I&&(l=this._$AH[a]),o||=!F(l)||l!==this._$AH[a],l===f?t=f:t!==f&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}o&&!n&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Xt extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}}class Qt extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}}class Vt extends tt{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){if((t=D(this,t,e,0)??f)===I)return;const i=this._$AH,n=t===f&&i!==f||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==f&&(i===f||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Wt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}}const Gt=rt.litHtmlPolyfillSupport;Gt?.(L,H),(rt.litHtmlVersions??=[]).push("3.3.2");const Yt=(r,t,e)=>{const i=e?.renderBefore??t;let n=i._$litPart$;if(n===void 0){const s=e?.renderBefore??null;i._$litPart$=n=new H(t.insertBefore(q(),s),s,void 0,e??{})}return n._$AI(r),n};const ot=globalThis;let x=class extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Yt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}};x._$litElement$=!0,x.finalized=!0,ot.litElementHydrateSupport?.({LitElement:x});const Kt=ot.litElementPolyfillSupport;Kt?.({LitElement:x});(ot.litElementVersions??=[]).push("4.2.2");const C=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};const Jt={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:it},Zt=(r=Jt,t,e)=>{const{kind:i,metadata:n}=e;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),s.set(e.name,r),i==="accessor"){const{name:o}=e;return{set(c){const a=t.get.call(this);t.set.call(this,c),this.requestUpdate(o,a,r,!0,c)},init(c){return c!==void 0&&this.C(o,void 0,r,c),c}}}if(i==="setter"){const{name:o}=e;return function(c){const a=this[o];t.call(this,c),this.requestUpdate(o,a,r,!0,c)}}throw Error("Unsupported decorator location: "+i)};function h(r){return(t,e)=>typeof e=="object"?Zt(r,t,e):((i,n,s)=>{const o=n.hasOwnProperty(s);return n.constructor.createProperty(s,i),o?Object.getOwnPropertyDescriptor(n,s):void 0})(r,t,e)}function m(r){return h({...r,state:!0,attribute:!1})}const te=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);function at(r,t){return(e,i,n)=>{const s=o=>o.renderRoot?.querySelector(r)??null;return te(e,i,{get(){return s(this)}})}}const ee=`

/* Top Bar */
.top-bar {
    background-color: #4a4a4a;
    color: white;
    padding: 5px 20px;
    font-size: 11px;
    text-align: center;
}

/* Header */
header {
    background-color: white;
    padding: 15px 40px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.header-container {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
}

.search-bar {
    flex: 0 0 250px;
    display: flex;
    gap: 5px;
}

.search-bar input {
    flex: 1;
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 13px;
}

.search-bar button {
    padding: 8px 12px;
    background-color: #d4d4d4;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.logo {
    text-align: center;
}

.logo h1 {
    font-size: 28px;
    background: linear-gradient(135deg, #ff1493, #ff69b4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-style: italic;
    font-weight: bold;
    margin-bottom: 2px;
}

.logo p {
    font-size: 11px;
    color: #666;
}

.header-actions {
    display: flex;
    gap: 15px;
    align-items: center;
}

.action-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    background-color: #6b4c9a;
    color: white;
    border-radius: 15px;
    font-size: 11px;
    text-decoration: none;
    cursor: pointer;
}

/* Navigation */
nav {
    background-color: white;
    padding: 12px 40px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.nav-container {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 25px;
}

nav a {
    text-decoration: none;
    color: #333;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    transition: color 0.3s;
}

nav a:hover {
    color: #ff1493;
}
`;var ne=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,Bt=(r,t,e,i)=>{for(var n=i>1?void 0:i?ie(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&ne(t,e,n),n};let K=class extends x{constructor(){super(...arguments),this.name="navbar-com"}render(){return d`
             <!-- Header -->
            <header>
                <div class="header-container">
                    <div class="search-bar">
                        <input type="text" placeholder="Buscar productos...">
                        <button>🔍</button>
                    </div>
                    
                    <div class="logo">
                        <h1>Artística RAMOS</h1>
                        <p>Tienda de arte ONLINE</p>
                    </div>
                    
                    <div class="header-actions">
                        <a href="#" class="action-btn">
                            👤 Entrar / Registrarse
                        </a>
                        <a href="#" class="action-btn">
                            🛒 Carrito (0) $0
                        </a>
                    </div>
                </div>
            </header>
            
            <!-- Navigation -->
            <nav>
                <div class="nav-container">
                    <a href="#">CATEGORÍAS ▼</a>
                    <a href="/">INICIO</a>
                    <a href="#">PRODUCTOS</a>
                    <a href="#">CURSOS 100% ONLINE</a>
                    <a href="#">CÓMO COMPRAR</a>
                    <a href="#">CAMBIOS Y DEVOLUCIONES</a>
                    <a href="#">QUIÉNES SOMOS</a>
                </div>
            </nav>
        `}};K.styles=B(ee);Bt([h()],K.prototype,"name",2);K=Bt([C("navbar-com")],K);const re=`
/* Hero Banner */
.hero-banner {
    background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
    padding: 60px 20px;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.hero-content {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}

.hero-banner h2 {
    font-size: 80px;
    color: white;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 5px;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
    line-height: 1.1;
    margin-bottom: 10px;
}

.hero-banner h2 span {
    display: block;
}

.hero-banner .discount {
    font-size: 100px;
    color: white;
    font-weight: 900;
}

.hero-banner .subtitle {
    font-size: 42px;
    color: #ef4444;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-top: 10px;
}

.percentage-icon {
    position: absolute;
    width: 120px;
    height: 120px;
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    font-weight: 900;
    color: #1f2937;
    transform: rotate(-15deg);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
}

.percentage-left {
    left: 10%;
    top: 50%;
    transform: translateY(-50%) rotate(-15deg);
}

.percentage-right {
    right: 10%;
    top: 50%;
    transform: translateY(-50%) rotate(15deg);
}

/* Category Grid */
.category-grid {
    max-width: 1400px;
    margin: 50px auto;
    padding: 0 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.category-card {
    background: white;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
    border: 2px solid #f0f0f0;
}

.category-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.category-card img {
    user-select: none;
    width: 100%;
    height: 150px;
    object-fit: contain;
    margin-bottom: 15px;
}

.category-card h3 {
    font-size: 16px;
    color: #ff1493;
    font-weight: 600;
}

/* Products Section */
.products-section {
    max-width: 1400px;
    margin: 50px auto;
    padding: 0 40px;
}

.section-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 30px;
    color: #333;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    margin-bottom: 20px;
}

.product-card {
    
    background: white;
    border-radius: 8px;
    padding: 15px;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.product-badge {
    background-color: #ff1493;
    color: white;
    padding: 3px 8px;
    border-radius: 3px;
    font-size: 10px;
    font-weight: bold;
    display: inline-block;
    margin-bottom: 10px;
}

.product-card img {
    width: 100%;
    height: 180px;
    object-fit: contain;
    margin-bottom: 10px;
}

.product-name {
    font-size: 13px;
    color: #333;
    margin-bottom: 8px;
    min-height: 40px;
    line-height: 1.3;
}

.product-price {
    margin-bottom: 10px;
}

.old-price {
    text-decoration: line-through;
    color: #999;
    font-size: 11px;
}

.current-price {
    color: #333;
    font-size: 18px;
    font-weight: bold;
    margin: 5px 0;
}

.installments {
    font-size: 11px;
    color: #00a650;
    margin-bottom: 8px;
}

.buy-button {
    width: 100%;
    padding: 8px;
    background-color: #c8ff00;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 13px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.buy-button:hover {
    background-color: #b3e600;
}

.carousel-dots {
    text-align: center;
    margin-top: 20px;
}

.dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #ddd;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
}

.dot.active {
    background-color: #ff1493;
}

/* Benefits Section */
.benefits-section {
    background-color: #8b5cf6;
    padding: 40px 20px;
    margin-top: 60px;
}

.benefits-container {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    color: white;
}

.benefit-item {
    text-align: center;
}

.benefit-icon {
    font-size: 40px;
    margin-bottom: 15px;
}

.benefit-item h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
}

.benefit-item p {
    font-size: 12px;
    opacity: 0.9;
}

/* Brands Section */
.brands-section {
    max-width: 1400px;
    margin: 50px auto;
    padding: 0 40px;
}

.brands-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 20px;
    align-items: center;
}

.brand-logo {
    background: white;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    cursor: pointer;
    transition: transform 0.3s;
}

.brand-logo:hover {
    transform: scale(1.05);
}

.brand-logo img {
    max-width: 100%;
    max-height: 100%;
}

img {
    user-select: none;
    -webkit-user-select: none; /* Chrome, Safari */
    -moz-user-select: none;    /* Firefox */
    -webkit-user-drag: none; /* Chrome, Safari */
    user-drag: none;         /* No estándar, pero ayuda */
    pointer-events: none; /* si NO necesitas interacción */    user-select: none;
}

/* Newsletter */
.newsletter-section {
    max-width: 1400px;
    margin: 50px auto;
    padding: 40px;
    text-align: center;
}

.newsletter-section h2 {
    font-size: 28px;
    margin-bottom: 10px;
}

.newsletter-section p {
    color: #666;
    margin-bottom: 20px;
}

.newsletter-form {
    display: flex;
    gap: 10px;
    max-width: 500px;
    margin: 0 auto;
}

.newsletter-form input {
    flex: 1;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.newsletter-form button {
    padding: 12px 30px;
    background-color: #c8ff00;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
}

.social-follow {
    margin-top: 30px;
    font-size: 20px;
}

/* Footer */
footer {
    background-color: #4a4a4a;
    color: white;
    padding: 40px 40px 20px;
}

.footer-container {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 40px;
    margin-bottom: 30px;
}

.footer-section h4 {
    font-size: 13px;
    margin-bottom: 15px;
    text-transform: uppercase;
    color: #c8ff00;
}

.footer-section p,
.footer-section ul li {
    font-size: 12px;
    color: #ccc;
    margin-bottom: 8px;
    line-height: 1.6;
}

.footer-section ul {
    list-style: none;
}

.footer-section a {
    color: #ccc;
    text-decoration: none;
}

.footer-section a:hover {
    color: white;
}

.payment-methods {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 15px;
}

.payment-icon {
    width: 40px;
    height: 25px;
    background-color: white;
    border-radius: 3px;
}

.footer-bottom {
    max-width: 1400px;
    margin: 0 auto;
    padding-top: 20px;
    border-top: 1px solid #666;
    text-align: center;
    font-size: 11px;
    color: #999;
}

/* WhatsApp Button */
.whatsapp-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background-color: #25d366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 30px;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    z-index: 1000;
}

@media (max-width: 1200px) {
    .products-grid {
        grid-template-columns: repeat(4, 1fr);
    }

    .category-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .brands-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media (max-width: 768px) {
    .hero-banner h2 {
        font-size: 40px;
    }

    .hero-banner .discount {
        font-size: 50px;
    }

    .percentage-icon {
        width: 80px;
        height: 80px;
        font-size: 40px;
    }

    .products-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .category-grid {
        grid-template-columns: 1fr;
    }

    .benefits-container {
        grid-template-columns: repeat(2, 1fr);
    }

    .footer-container {
        grid-template-columns: 1fr;
    }
}`;const $t=new WeakMap,vt=r=>{if((e=>e.pattern!==void 0)(r))return r.pattern;let t=$t.get(r);return t===void 0&&$t.set(r,t=new URLPattern({pathname:r.path})),t};let se=class{constructor(t,e,i){this.routes=[],this.o=[],this.t={},this.i=n=>{if(n.routes===this)return;const s=n.routes;this.o.push(s),s.h=this,n.stopImmediatePropagation(),n.onDisconnect=()=>{this.o?.splice(this.o.indexOf(s)>>>0,1)};const o=wt(this.t);o!==void 0&&s.goto(o)},(this.l=t).addController(this),this.routes=[...e],this.fallback=i?.fallback}link(t){if(t?.startsWith("/"))return t;if(t?.startsWith("."))throw Error("Not implemented");return t??=this.u,(this.h?.link()??"")+t}async goto(t){let e;if(this.routes.length===0&&this.fallback===void 0)e=t,this.u="",this.t={0:e};else{const i=this.p(t);if(i===void 0)throw Error("No route found for "+t);const n=vt(i).exec({pathname:t}),s=n?.pathname.groups??{};if(e=wt(s),typeof i.enter=="function"&&await i.enter(s)===!1)return;this.v=i,this.t=s,this.u=e===void 0?t:t.substring(0,t.length-e.length)}if(e!==void 0)for(const i of this.o)i.goto(e);this.l.requestUpdate()}outlet(){return this.v?.render?.(this.t)}get params(){return this.t}p(t){const e=this.routes.find((i=>vt(i).test({pathname:t})));return e||this.fallback===void 0?e:this.fallback?{...this.fallback,path:"/*"}:void 0}hostConnected(){this.l.addEventListener(R.eventName,this.i);const t=new R(this);this.l.dispatchEvent(t),this._=t.onDisconnect}hostDisconnected(){this._?.(),this.h=void 0}};const wt=r=>{let t;for(const e of Object.keys(r))/\d+/.test(e)&&(t===void 0||e>t)&&(t=e);return t&&r[t]};class R extends Event{constructor(t){super(R.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=t}}R.eventName="lit-routes-connected";const oe=location.origin||location.protocol+"//"+location.host;class ae extends se{constructor(){super(...arguments),this.m=t=>{const e=t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey;if(t.defaultPrevented||e)return;const i=t.composedPath().find((o=>o.tagName==="A"));if(i===void 0||i.target!==""||i.hasAttribute("download")||i.getAttribute("rel")==="external")return;const n=i.href;if(n===""||n.startsWith("mailto:"))return;const s=window.location;i.origin===oe&&(t.preventDefault(),n!==s.href&&(window.history.pushState({},"",n),this.goto(i.pathname)))},this.R=t=>{this.goto(window.location.pathname)}}hostConnected(){super.hostConnected(),window.addEventListener("click",this.m),window.addEventListener("popstate",this.R),this.goto(window.location.pathname)}hostDisconnected(){super.hostDisconnected(),window.removeEventListener("click",this.m),window.removeEventListener("popstate",this.R)}}const N={pages:[],router:null,navigate:r=>{N.router.goto(r),history.pushState(null,"",r)}};var ce=Object.defineProperty,de=Object.getOwnPropertyDescriptor,P=(r,t,e,i)=>{for(var n=i>1?void 0:i?de(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&ce(t,e,n),n};let v=class extends x{constructor(){super(...arguments),this.badge="",this.image="",this.alt="Producto",this.productName="",this.oldPrice="",this.currentPrice="",this.installments="",this.buttonText="Comprar"}render(){return d`
      <div @click=${()=>N.navigate("/product")} class="product-card">
        ${this.badge?d`<div class="product-badge">${this.badge}</div>`:null}

        <img src="${this.image}" alt="${this.alt}" />

        <div class="product-name">${this.productName}</div>

        <div class="product-price">
          ${this.oldPrice?d`<div class="old-price">${this.oldPrice}</div>`:null}

          <div class="current-price">${this.currentPrice}</div>

          ${this.installments?d`<div class="installments">${this.installments}</div>`:null}
        </div>

        <button class="buy-button">${this.buttonText}</button>
      </div>
    `}};v.styles=B(re);P([h({type:String})],v.prototype,"badge",2);P([h({type:String})],v.prototype,"image",2);P([h({type:String})],v.prototype,"alt",2);P([h({type:String})],v.prototype,"productName",2);P([h({type:String})],v.prototype,"oldPrice",2);P([h({type:String})],v.prototype,"currentPrice",2);P([h({type:String})],v.prototype,"installments",2);P([h({type:String})],v.prototype,"buttonText",2);v=P([C("target-prod-com")],v);const le=JSON.parse('[{"title":"Acrílico Decor. EQ x 50cm3 x unidad","detail":"$1.785 con Transferencia Bancaria","pack":"3 x $700 sin interés","offert":["$2.100"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/eq-acrilico-50-elegi-los-colores-1-6fc3bb0a8a2c24f40017463929085910-1024-1024.webp"},{"title":"Acrílico Decor. ETERNA x 50cm3 x unidad","detail":"$1.955 con Transferencia Bancaria","pack":"3 x $766,67 sin interés","offert":["$2.300"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/eterna-acrilico-50-elegi-los-colores-1-617ccd5ba91b13d37317463949867134-1024-1024.webp"},{"title":"5 Espátulas Metálicas Profesionales","detail":"$10.444,80 con Transferencia Bancaria","pack":"3 x $4.096 sin interés","offert":["$12.288"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/5-pinceles1-4377443d8c6bf9fbed16752906710347-1024-1024.webp"},{"title":"Acrílico DecorALBA x 60cm3 x unidad","detail":"$1.767,15 con Transferencia Bancaria","pack":"3 x $693 sin interés","offert":["$2.079"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/decoralba-acrilico-60-elegi-los-colores-1-997f712c855471188d17463935447477-1024-1024.webp"},{"title":"Promo 12 Pintura a la Tiza EQ Arte x 200ml","detail":"$45.900 con Transferencia Bancaria","pack":"3 x $18.000 sin interés","offert":["$54.000","$63.600","15% OFF"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/tiza-eq-x-12un-transp1-bf2aeb17bba93a32e416751077096155-1024-1024.webp"},{"title":"Blanco Base Acrílica EQ x 200ml","detail":"$3.655 con Transferencia Bancaria","pack":"3 x $1.433,33 sin interés","offert":["$4.300"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/blanco11-657f82bfeba903a95b16128882382642-1024-1024.webp"},{"title":"Blister de 6 Pinceles Artist Brush Linner Cortos","detail":"$3.496,90 con Transferencia Bancaria","pack":"3 x $1.371,33 sin interés","offert":["$4.114"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/6-linner-cortos1-da072d274d2f65bfb316752910010047-1024-1024.webp"},{"title":"20 Pinceles Xin Bowen 4 Puntas","detail":"$18.965,20 con Transferencia Bancaria","pack":"3 x $7.437,33 sin interés","offert":["$22.312","$25.592","13% OFF"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/20-pinceles1-80c369f2e99f3c847216823478674779-1024-1024.webp"},{"title":"Promo 12 Acrílicos Decor. EQ x 50cm3","detail":"$19.706,40 con Transferencia Bancaria","pack":"3 x $7.728 sin interés","offert":["$23.184"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/12-acrilicos-eq-x-50ml-transp11-50bfbcb2d489920b4a16760593256079-1024-1024.webp"},{"title":"Pasta de Modelar EQ x 200ml","detail":"$5.601,50 con Transferencia Bancaria","pack":"3 x $2.196,67 sin interés","offert":["$6.590"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/pasta-modelar-eq-200ml11-2129e3db361c359be816764812082313-1024-1024.webp"},{"title":"Blister 4 Pinceletas Bolong Varias Medidas","detail":"$3.944 con Transferencia Bancaria","pack":"3 x $1.546,67 sin interés","offert":["$4.640"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/4-pinceletas-basicas1-bd6a947e5072e3d71916752933922140-1024-1024.webp"},{"title":"Barniz Extra Mate EQarte x 250ml","detail":"$4.382,60 con Transferencia Bancaria","pack":"3 x $1.718,67 sin interés","offert":["$5.156"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/barniz-extramate-eq250ml1-bb1193c4c54b7ac86416764814569063-1024-1024.webp"},{"title":"Promo 6 Pintura a la Tiza EQ Arte x 200ml","detail":"$23.516,10 con Transferencia Bancaria","pack":"3 x $9.222 sin interés","offert":["$27.666","$31.800","13% OFF"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/tiza-eq-x-6un-transp1-fdc2589a6acbea31ea16751076147062-1024-1024.webp"},{"title":"Promo 10 Marcadores 4mm Acrylic Color ALBA 4mm","detail":"$27.688,75 con Transferencia Bancaria","pack":"3 x $10.858,33 sin interés","offert":["$32.575","$40.335","19% OFF"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/m-4mm-x-10-un1-6d8b9b85c29beedbae16750935521947-1024-1024.webp"},{"title":"12 Pinceles Xin Bowen Surtidos","detail":"$9.717,20 con Transferencia Bancaria","pack":"3 x $3.810,67 sin interés","offert":["$11.432"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/xin-bowen-x-12-transp1-62a02df52e58a3c49c16752097755824-1024-1024.webp"},{"title":"Acrílico Decor. ETERNA x 250cm3 x unidad","detail":"$5.933 con Transferencia Bancaria","pack":"3 x $2.326,67 sin interés","offert":["$6.980"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/eterna-acrilico-250-elegi-los-colores-1-502c255b3f788fd80f17463981044737-1024-1024.webp"},{"title":"30x40cm Bastidor Entelado Fime Basic Grano Fino","detail":"$8.770,30 con Transferencia Bancaria","pack":"3 x $3.439,33 sin interés","offert":["$10.318"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/bastidor-fime-m20-basic-40x5011-6ce2496bfba2bb03b315713408135708-1024-1024.webp"},{"title":"30x30 Pack 3 Bastidores Fime Basic Grano Fino","detail":"$21.505 con Transferencia Bancaria","pack":"3 x $8.433,33 sin interés","offert":["$25.300","$29.700","15% OFF"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/30301-89ce91755b1141ded816413111343680-1024-1024.webp"},{"title":"Promo 12 Acrílicos Decor. ETERNA x 50cm3 a Elección","detail":"$21.583,20 con Transferencia Bancaria","pack":"3 x $8.464 sin interés","offert":["$25.392"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/acrilico-eterna-x-12un-transp1-d7da5e7b65e910b71716751103683612-1024-1024.webp"},{"title":"Pack 12 Bases Acrílicas EQ x 200ml","detail":"$37.281 con Transferencia Bancaria","pack":"3 x $14.620 sin interés","offert":["$43.860","$51.600","15% OFF"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/base-eq-200-x-12-transp1-5db1132772aed6aa6d16751088718963-1024-1024.webp"},{"title":"Pasta Flexible EQ x 200ml","detail":"$5.091,50 con Transferencia Bancaria","pack":"3 x $1.996,67 sin interés","offert":["$5.990"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/pasta-flex-eq-200ml1-23d71bada3cdad7c3516764810411984-1024-1024.webp"},{"title":"Blister de 4 Taponadores Cortos Surtidos","detail":"$3.825 con Transferencia Bancaria","pack":"3 x $1.500 sin interés","offert":["$4.500"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/4-taponadores1-366d3cc324553d2aa116752934404070-1024-1024.webp"},{"title":"40x50 Pack 3 Bastidores Fime Basic Grano Fino","detail":"$36.907,85 con Transferencia Bancaria","pack":"3 x $14.473,67 sin interés","offert":["$43.421","$48.246","10% OFF"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/40501-73aded762fb34ed62b16413167514657-1024-1024.webp"},{"title":"Laca Poliuretánica EQ x 100ml","detail":"$4.241,50 con Transferencia Bancaria","pack":"3 x $1.663,33 sin interés","offert":["$4.990"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/laca-poliuretanica-eq-100ml1-2a8b8b9b697b8bcaa416764814226703-1024-1024.webp"},{"title":"Mod Podge EQ x 200ml","detail":"$3.527,50 con Transferencia Bancaria","pack":"3 x $1.383,33 sin interés","offert":["$4.150"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/mod-podge-eq-200ml1-f14884a5f8eab8abe616764808774183-1024-1024.webp"},{"title":"Blister de 6 Pinceles Linner","detail":"$5.156,10 con Transferencia Bancaria","pack":"3 x $2.022 sin interés","offert":["$6.066"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/6-linner-surtidos1-20d7f121a940ee43c716752923619555-1024-1024.webp"},{"title":"20x30 Pack 3 Bastidores Fime Basic Grano Fino","detail":"$22.720,50 con Transferencia Bancaria","pack":"3 x $8.910 sin interés","offert":["$26.730"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/20301-879010ec217048018116413110843910-1024-1024.webp"},{"title":"Blanco Pintura a la Tiza EQ Arte x 200ml","detail":"$4.505 con Transferencia Bancaria","pack":"3 x $1.766,67 sin interés","offert":["$5.300"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/blanco1-f80f1a1336d7f0fa8c16128835777672-1024-1024.webp"},{"title":"Blanco Base Acrílica EQ x 900ml","detail":"$12.304,60 con Transferencia Bancaria","pack":"3 x $4.825,33 sin interés","offert":["$14.476"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/base_900_blanco1-31827e24bd48ed4c2c16433795395012-1024-1024.webp"},{"title":"Promo 24 Acrílicos Decorativos. EQ x 50cm3","detail":"$36.414 con Transferencia Bancaria","pack":"3 x $14.280 sin interés","offert":["$42.840"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/24-acrilicos-eq-x-50ml-transp1-aa471ecef988e806e016903114449373-1024-1024.webp"},{"title":"Blister 3 Pinceles Taponadores Bolong","detail":"$5.705,20 con Transferencia Bancaria","pack":"3 x $2.237,33 sin interés","offert":["$6.712"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/3-brochas-chinas1-b3e1fe20a8632ad0d416752935875788-1024-1024.webp"},{"title":"Pack 6 Óleos Prof. ALBA x 18ML G1, G2 y G3","detail":"$25.070,75 con Transferencia Bancaria","pack":"3 x $9.831,67 sin interés","offert":["$29.495","$31.200","5% OFF"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/promo-6-oleos-x-18ml-transp1-76eb10110a0e4a0c7216753524470837-1024-1024.webp"},{"title":"Pack 12 Óleos Prof. ALBA x 18ML G1, G2 y G3","detail":"$50.141,50 con Transferencia Bancaria","pack":"3 x $19.663,33 sin interés","offert":["$58.990","$65.000","9% OFF"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/promo-12-oleos-x-18ml-transp1-0b2c6bbc4a50e13e4c16753523826223-1024-1024.webp"},{"title":"Pack 3 Pinturas a la Tiza EQ Arte x 200ml Metalizadas (Oro, Plata, Cobre)","detail":"$13.884,75 con Transferencia Bancaria","pack":"3 x $5.445 sin interés","offert":["$16.335","$18.150","10% OFF"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/3-tizas-eq-metalizadas-transp1-079287b37363b577f016753611847029-1024-1024.webp"},{"title":"Blister de 6 Pinceles Artist Brush Linner Largos","detail":"$3.663,50 con Transferencia Bancaria","pack":"3 x $1.436,67 sin interés","offert":["$4.310"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/6-linner-largos-transp1-fb3e3d9808e37626d916790750955928-1024-1024.webp"},{"title":"Barniz Vitrificable EQ x 50ml","detail":"$2.210 con Transferencia Bancaria","pack":"3 x $866,67 sin interés","offert":["$2.600"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/vitrificable-eq-50ml-43b66e3c992b95b22e17328215157484-1024-1024.webp"},{"title":"Paleta MDF N°1 Ovalada 15x20cm","detail":"$2.805 con Transferencia Bancaria","pack":"3 x $1.100 sin interés","offert":["$3.300"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/pprn6g_5f49af333c657_large1-59c40f493b626edcca16464875979799-1024-1024.webp"},{"title":"Pack 6 Bases Acrílicas EQ x 200ml","detail":"$19.737 con Transferencia Bancaria","pack":"3 x $7.740 sin interés","offert":["$23.220","$25.800","10% OFF"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/base-eq-200-x-6-transp1-5cfd75fc7698c8dd2d16751089509812-1024-1024.webp"},{"title":"Negro | Marcador Acrylic Color ALBA 4mm","detail":"$3.825 con Transferencia Bancaria","pack":"3 x $1.500 sin interés","offert":["$4.500"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/negro-m1-a6230531efadeeeff315669333314080-1024-1024.webp"},{"title":"Promo 12 Acrílicos EQ + 12 Pinceles Surtidos","detail":"$21.598,50 con Transferencia Bancaria","pack":"3 x $8.470 sin interés","offert":["$25.410","$29.554","14% OFF"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/12-acrilicos-eq-12-pinceles-transp1-5354e42004a4a465ae16751233651767-1024-1024.webp"},{"title":"Adhesivo Multiproposito EQ x 200ml","detail":"$6.630 con Transferencia Bancaria","pack":"3 x $2.600 sin interés","offert":["$7.800"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/multiporp-eq-200ml1-488551e2c8f813b4b916764809416228-1024-1024.webp"},{"title":"10 Pinceles Bolong Surtidos","detail":"$8.153,20 con Transferencia Bancaria","pack":"3 x $3.197,33 sin interés","offert":["$9.592"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/10-pinceles-celestes-sin-abanico-f1c853bffaf018a64517201064454373-1024-1024.webp"},{"title":"10 Pinceles Suno Da Surtidos","detail":"$8.153,20 con Transferencia Bancaria","pack":"3 x $3.197,33 sin interés","offert":["$9.592"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/10-surtidos-transp1-da6bb6e8728129729916772541285734-1024-1024.webp"},{"title":"Óxido Real EQ x 200ml + Activador x 100ml","detail":"$6.205 con Transferencia Bancaria","pack":"3 x $2.433,33 sin interés","offert":["$7.300","$8.100","10% OFF"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/oxido-real-base-activador1-2ce41dc966e95bc8b616765831293886-1024-1024.webp"},{"title":"Promo 12 Acrílicos DecorALBA x 60ml","detail":"$19.509,20 con Transferencia Bancaria","pack":"3 x $7.650,67 sin interés","offert":["$22.952"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/decoralba-60ml-x-12un-transp1-d90a2715ce4d6081fa16751100415989-1024-1024.webp"},{"title":"Blister 5 Pinceles de Goma","detail":"$7.058,40 con Transferencia Bancaria","pack":"3 x $2.768 sin interés","offert":["$8.304"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/5-pinceles-de-goma-transp-11-d5296354e31302181516752649989293-1024-1024.webp"},{"title":"Barra de Silicona Transparente Fina 7mm x 30cm x Unidad","detail":"$1.190 con Transferencia Bancaria","pack":"3 x $466,67 sin interés","offert":["$1.400"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/silic0021-1846d4e5c9a306719f16350010535363-1024-1024.webp"},{"title":"Kit 12 Marcadores Acrílicos Multi Superficie","detail":"$23.800 con Transferencia Bancaria","pack":"3 x $9.333,33 sin interés","offert":["$28.000","$4","-699900% OFF"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/acrylic-paint-color-12-doble-punta-con-logo1-5747a1aee68b5ce7dd16911541649089-1024-1024.webp"},{"title":"Negro Base Acrílica EQ x 200ml","detail":"$3.289,50 con Transferencia Bancaria","pack":"3 x $1.290 sin interés","offert":["$3.870"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/negro11-47c0d9a8f7fd08040b16128846877141-1024-1024.webp"},{"title":"20x30cm Bastidor Entelado Fime Basic Grano Fino","detail":"$6.638,50 con Transferencia Bancaria","pack":"3 x $2.603,33 sin interés","offert":["$7.810"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/bastidor-fime-m20-basic-40x5011-5d904c6ca748a2659515713403211076-1024-1024.webp"},{"title":"Trementina EQarte x 100ml","detail":"$3.136,50 con Transferencia Bancaria","pack":"3 x $1.230 sin interés","offert":["$3.690"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/trementina-eq-x-100ml1-2b0d4e46e28733709f16766466756677-1024-1024.webp"},{"title":"Blister de 4 Herramientas para Puntillismo","detail":"$5.270 con Transferencia Bancaria","pack":"3 x $2.066,67 sin interés","offert":["$6.200"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/4-puntillismo1-9d986aec6f4329739a16752921940950-1024-1024.webp"},{"title":"610 G2 Blanco Titanio Óleo Prof Alba x 60ml","detail":"$6.729,45 con Transferencia Bancaria","pack":"3 x $2.639 sin interés","offert":["$7.917"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/diapositiva511-a3b601831272f3ec0515660533342103-1024-1024.webp"},{"title":"Craquelador 1 Componente EQ x 50ml","detail":"$1.285,20 con Transferencia Bancaria","pack":"3 x $504 sin interés","offert":["$1.512"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/craquelador-eq-1-comp1-b01c4e469bf75626c516764813295156-1024-1024.webp"},{"title":"Blister de Pinceles x 3 Surtido Abanico","detail":"$3.564,90 con Transferencia Bancaria","pack":"3 x $1.398 sin interés","offert":["$4.194"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/3-abanico-azul-transp1-3f9dc237d14d60931816794954617749-1024-1024.webp"},{"title":"Blanco | Marcador Acrylic Color ALBA 4mm","detail":"$3.825 con Transferencia Bancaria","pack":"3 x $1.500 sin interés","offert":["$4.500"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/marcador-acrylic-alba-blanco1-cfc2514b390a98c17e16705365169341-1024-1024.webp"},{"title":"40x60 Pack 3 Bastidores Fime Basic Grano Fino","detail":"$46.429,55 con Transferencia Bancaria","pack":"3 x $18.207,67 sin interés","offert":["$54.623","$60.693","10% OFF"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/40601-15b3cdae41272df59b16413168570844-1024-1024.webp"},{"title":"Atril de Mesa Pino Natural 83cm de altura C/Corredera y Freno.","detail":"$21.241,50 con Transferencia Bancaria","pack":"3 x $8.330 sin interés","offert":["$24.990"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/atril-mesa-87cm-f0e24034af2184181717329814042430-1024-1024.webp"},{"title":"Blister de 5 Pinceles Bomeijia Plano","detail":"$5.825,90 con Transferencia Bancaria","pack":"3 x $2.284,67 sin interés","offert":["$6.854"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/5-bomeijia-plano-transp1-f04bb542de1b6ab82716752639640233-1024-1024.webp"},{"title":"Pinceleta Plano N°4 Cerda Sintética","detail":"$1.585,25 con Transferencia Bancaria","pack":"3 x $621,67 sin interés","offert":["$1.865"],"img":"https://acdn-us.mitiendanube.com/stores/893/990/products/pinceleta-41-e80ea2688e0b81bc7716944611205592-1024-1024.webp"}]'),W=le;var pe=Object.defineProperty,he=Object.getOwnPropertyDescriptor,X=(r,t,e,i)=>{for(var n=i>1?void 0:i?he(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&pe(t,e,n),n};const ue={id:"123",title:"20 Pinceles Xin Bowen 4 Puntas",code:"XB-4P-20",currentPrice:22312,oldPrice:25354.8,discount:12,bankPrice:18965.2,installments:{count:3,value:7437.33},images:["https://picsum.photos/seed/brushset1/600/600","https://picsum.photos/seed/brushset2/600/600","https://picsum.photos/seed/brushset3/600/600"],description:{subtitle:"Promo Pack 20 Pinceles de 4 Puntas Xin Bowen",items:["1 Blister de 5 Pinceles Punta Plana","1 Blister de 5 Pinceles Punta Angular","1 Blister de 5 Pinceles Punta Redonda"],extra:["Cerda Sintética - Calidad Media/Superior","Ideal para pintar con acrílicos y Óleos."]}};N.pages.push({path:"/product",render:()=>d`
    <product-detail-com
      .product=${ue}
      .similarProducts=${W.slice(1,12)}
    ></product-detail-com>
`});let z=class extends x{constructor(){super(...arguments),this.similarProducts=[],this.selectedImageIndex=0,this.quantity=1}formatCurrency(r){return new Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS"}).format(r)}changeImage(r){this.selectedImageIndex=r}updateQuantity(r){const t=this.quantity+r;t>=1&&(this.quantity=t)}handleAddToCart(){this.dispatchEvent(new CustomEvent("add-to-cart",{detail:{product:this.product,quantity:this.quantity},bubbles:!0,composed:!0})),alert(`Agregado al carrito: ${this.quantity} unidad(es)`)}render(){const r=t=>d`
      <target-prod-com
        badge="Kit Acrílicos + Difuminador"
        image=${t.img}
        alt="Promo"
        productName=${t.title}
        oldPrice=${t.pack}
        currentPrice=${t.offert.join(`
`)}
        installments=${t.detail}
        buttonText="Comprar"
      ></target-prod-com>
    `;return this.product?d`

      
      <!-- Breadcrumb -->
      <div class="breadcrumb">
          <a href="#">Inicio</a> > <a href="#">Pinceles</a> > ${this.product.title}
      </div>
      
      <!-- Product Main Section -->
      <section class="product-section">
          <!-- Gallery -->
          <div class="product-gallery">
              <div class="main-image-container">
                  <div class="watermark">Artística RAMOS</div>
                  <img src="${this.product.images[this.selectedImageIndex]}" alt="Main" class="main-image">
              </div>
              <div class="thumbnail-gallery">
                  ${this.product.images.map((t,e)=>d`
                      <div class="thumbnail ${this.selectedImageIndex===e?"active":""}" 
                           @click=${()=>this.changeImage(e)}>
                          <img src="${t}" alt="Thumb ${e}">
                      </div>
                  `)}
              </div>
          </div>
          
          <!-- Info -->
          <div class="product-info">
              <div class="product-code">•${this.product.images.length} unidades</div>
              <h1 class="product-title">${this.product.title}</h1>
              <div class="product-code">Código: ${this.product.code}</div>
              
              <div class="price-section">
                  <div class="current-price">
                      ${this.formatCurrency(this.product.currentPrice)} 
                      <span class="discount-badge">${this.product.discount}% OFF</span>
                  </div>
                  <div class="old-price">Antes: ${this.formatCurrency(this.product.oldPrice)}</div>
                  <div class="payment-info">${this.formatCurrency(this.product.bankPrice)} con Transferencia Bancaria</div>
              </div>
              
              <div class="stock-info">
                  ${this.product.installments.count} cuotas sin interés de ${this.formatCurrency(this.product.installments.value)}
                  <br>10% de descuento pagando con Transferencia Bancaria
              </div>
              
              <div class="shipping-info">
                  <div class="info-item">
                      <span class="info-icon">✓</span>
                      <span><strong>Compra protegida</strong><br>Tus datos cuidados durante toda la compra.</span>
                  </div>
              </div>
              
              <div class="quantity-selector">
                  <span>Cantidad:</span>
                  <div class="quantity-controls">
                      <button @click=${()=>this.updateQuantity(-1)}>-</button>
                      <input type="number" .value=${this.quantity.toString()} readonly>
                      <button @click=${()=>this.updateQuantity(1)}>+</button>
                  </div>
              </div>
              
              <button class="add-to-cart-btn" @click=${this.handleAddToCart}>Agregar al carrito</button>
          </div>
      </section>
      
      <!-- Description -->
      <section class="description-section">
          <div class="description-content">
              <h2>Descripción</h2>
              <h3>${this.product.description.subtitle}</h3>
              <ul>
                  ${this.product.description.items.map(t=>d`<li>${t}</li>`)}
              </ul>
              ${this.product.description.extra.map(t=>d`<p>${t}</p>`)}
          </div>
      </section>

      <!-- Similar Products (Usando el shelf que creamos antes) -->
      <section class="similar-products">
          <h2>Productos similares</h2>
          <product-shelf-com
            .renderItem=${r}
            .items=${this.similarProducts}
            .itemsPerView=${4}>
          </product-shelf-com>
      </section>

      <!-- Footer & WhatsApp -->
      <footer>... (contenido del footer) ...</footer>
      <div class="whatsapp-btn">💬</div>
    `:d`<p>Cargando producto...</p>`}};z.styles=B(`
    :host { display: block; font-family: sans-serif; background: #f8f8f8; }
    * { box-sizing: border-box; }
    
    .top-bar { background: #4a4a4a; color: white; padding: 8px 40px; display: flex; justify-content: space-between; font-size: 12px; }
    header { background: white; padding: 20px 40px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
    .header-container { max-width: 1400px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; gap: 20px; }
    
    .logo h1 { font-size: 32px; background: linear-gradient(135deg, #ff1493, #ff69b4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-style: italic; margin: 0; }
    .logo p { margin: 0; font-size: 12px; color: #666; }

    .search-bar { display: flex; flex: 0 1 300px; }
    .search-bar input { flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 4px 0 0 4px; }
    .search-bar button { background: #ddd; border: none; padding: 10px; border-radius: 0 4px 4px 0; cursor: pointer; }

    .action-btn { background: #6b4c9a; color: white; padding: 10px 20px; border-radius: 20px; text-decoration: none; font-size: 12px; }

    nav { background: white; padding: 15px; border-top: 1px solid #eee; text-align: center; }
    nav a { margin: 0 15px; text-decoration: none; color: #333; font-size: 13px; font-weight: bold; }

    .breadcrumb { max-width: 1400px; margin: 20px auto; padding: 0 40px; font-size: 12px; color: #666; }
    
    .product-section { max-width: 1400px; margin: 0 auto; padding: 0 40px; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
    
    .main-image-container { background: white; padding: 20px; border-radius: 8px; position: relative; display: flex; justify-content: center; }
    .main-image { max-width: 100%; height: 400px; object-fit: contain; }
    .watermark { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-30deg); font-size: 50px; color: rgba(255, 20, 147, 0.05); pointer-events: none; font-weight: bold; }
    
    .thumbnail-gallery { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 15px; }
    .thumbnail { background: white; padding: 5px; border: 2px solid transparent; cursor: pointer; border-radius: 4px; }
    .thumbnail.active { border-color: #ff1493; }
    .thumbnail img { width: 100%; height: 80px; object-fit: cover; }

    .product-info { background: white; padding: 30px; border-radius: 8px; }
    .product-title { font-size: 24px; margin: 0 0 10px 0; }
    .current-price { font-size: 32px; font-weight: bold; }
    .discount-badge { background: #c8ff00; font-size: 12px; padding: 2px 6px; border-radius: 4px; vertical-align: middle; }
    .old-price { text-decoration: line-through; color: #999; margin-top: 5px; }
    .payment-info { color: #00a650; font-weight: bold; margin-top: 10px; }

    .quantity-selector { display: flex; align-items: center; gap: 15px; margin: 20px 0; }
    .quantity-controls { display: flex; border: 1px solid #ddd; border-radius: 4px; overflow: hidden; }
    .quantity-controls button { width: 40px; height: 40px; border: none; background: white; cursor: pointer; }
    .quantity-controls input { width: 50px; text-align: center; border: none; border-left: 1px solid #ddd; border-right: 1px solid #ddd; }

    .add-to-cart-btn { width: 100%; background: #c8ff00; border: none; padding: 15px; font-weight: bold; font-size: 16px; border-radius: 4px; cursor: pointer; }
    
    .description-section { max-width: 1400px; margin: 40px auto; padding: 0 40px; }
    .description-content { background: white; padding: 30px; border-radius: 8px; line-height: 1.6; }

    .whatsapp-btn { position: fixed; bottom: 20px; right: 20px; background: #25d366; color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 30px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); z-index: 100; cursor: pointer; }

    @media (max-width: 900px) {
      .product-section { grid-template-columns: 1fr; }
    }
  `);X([h({type:Object})],z.prototype,"product",2);X([h({type:Array})],z.prototype,"similarProducts",2);X([m()],z.prototype,"selectedImageIndex",2);X([m()],z.prototype,"quantity",2);z=X([C("product-detail-com")],z);const fe=`:host {
      display: block;
      width: 100%;
      margin: 0 auto;
    }

    .carousel {
      position: relative;
      width: 100%;
      overflow: hidden;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    }

    .carousel-container {
      width: 100%;
      overflow: hidden;
    }

    .carousel-slides {
      display: flex;
      height: 100%;
      transition: transform 0.5s ease-in-out;
    }

    .carousel-slide {
      min-width: 100%;
      position: relative;
    }

    .carousel-slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .carousel-caption {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      color: white;
      padding: 30px 20px 20px;
    }

    .carousel-caption h3 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 600;
    }

    .carousel-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.9);
      border: none;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      color: #333;
      z-index: 10;
    }

    .carousel-button:hover {
      background: white;
      transform: translateY(-50%) scale(1.1);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .carousel-button:active {
      transform: translateY(-50%) scale(0.95);
    }

    .carousel-button.prev {
      left: 20px;
    }

    .carousel-button.next {
      right: 20px;
    }

    .carousel-indicators {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 10px;
      z-index: 10;
    }

    .indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 2px solid white;
      background: transparent;
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 0;
    }

    .indicator:hover {
      background: rgba(255, 255, 255, 0.6);
      transform: scale(1.2);
    }

    .indicator.active {
      background: white;
      transform: scale(1.3);
    }

    @media (max-width: 768px) {
      .carousel-button {
        width: 36px;
        height: 36px;
      }

      .carousel-button.prev {
        left: 10px;
      }

      .carousel-button.next {
        right: 10px;
      }

      .carousel-caption h3 {
        font-size: 1.2rem;
      }
    }



.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  cursor: grab; /* Indica que se puede arrastrar */
}

.carousel:active {
  cursor: grabbing;
}

.carousel-slides {
  display: flex;
  height: 100%;
  will-change: transform;
}

/* Solo aplicamos la animación si la clase 'animate' está presente */
.carousel-slides.animate {
  transition: transform 0.5s ease-in-out;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none; /* Evita que se seleccione la imagen al arrastrar */
  -webkit-user-drag: none;
}

/* Evita que los botones interfieran con el drag si se hace click rápido */
.carousel-button {
  user-select: none;
}`;var me=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,A=(r,t,e,i)=>{for(var n=i>1?void 0:i?ge(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&me(t,e,n),n};let $=class extends x{constructor(){super(...arguments),this.slides=[{url:"https://acdn-us.mitiendanube.com/stores/893/990/themes/brasilia/2-slide-1762781252530-4684319015-e4daca9eca0a921f8afc7cb1be3b6bde1762781253-1024-1024.webp?322508758",alt:"Montañas",title:"Paisaje de Montaña"},{url:"https://acdn-us.mitiendanube.com/stores/893/990/themes/brasilia/2-slide-1740947109727-626708523-2f2dcb037e4b1447c15f63de777bea501740947109-1024-1024.webp?322508758",alt:"Playa",title:"Playa Paradisíaca"},{url:"https://acdn-us.mitiendanube.com/stores/893/990/themes/brasilia/2-slide-1740168985102-5978827947-61fdf3d20bc46ad767449dcbe9607cf11740168988-1024-1024.webp?322508758",alt:"Bosque",title:"Bosque Natural"},{url:"https://acdn-us.mitiendanube.com/stores/893/990/themes/brasilia/2-slide-1742006777777-5309873935-68fd16e9fc11141c7afec5ab4c887c241742006779-1024-1024.webp?322508758",alt:"Lago",title:"Lago al Atardecer"},{url:"https://acdn-us.mitiendanube.com/stores/893/990/themes/brasilia/2-slide-1740168985103-8947526091-a3c5da63b9a2331c2edd78118d09f84e1740168990-1024-1024.webp?322508758",alt:"Ciudad",title:"Ciudad Moderna"}],this.currentIndex=1,this.isAnimating=!1,this.isDragging=!1,this.startX=0,this.dragOffset=0,this.autoplayInterval=5e3,this.autoplay=!0,this.handleMouseDown=r=>{this.isDragging=!0,this.startX="touches"in r?r.touches[0].clientX:r.clientX,this.dragOffset=0,this.stopAutoplay()},this.handleMouseMove=r=>{if(!this.isDragging)return;const t="touches"in r?r.touches[0].clientX:r.clientX;this.dragOffset=t-this.startX},this.handleMouseUp=()=>{if(!this.isDragging)return;this.isDragging=!1;const r=100;this.dragOffset<-r?this.next():this.dragOffset>r&&this.prev(),this.dragOffset=0,this.autoplay&&this.startAutoplay()}}connectedCallback(){super.connectedCallback(),this.autoplay&&this.startAutoplay(),window.addEventListener("mouseup",this.handleMouseUp),window.addEventListener("mousemove",this.handleMouseMove)}disconnectedCallback(){super.disconnectedCallback(),this.stopAutoplay(),window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("mousemove",this.handleMouseMove)}startAutoplay(){this.stopAutoplay(),this.autoplayTimer=window.setInterval(()=>this.next(),this.autoplayInterval)}stopAutoplay(){this.autoplayTimer&&(clearInterval(this.autoplayTimer),this.autoplayTimer=void 0)}next(){this.isAnimating||(this.isAnimating=!0,this.currentIndex++)}prev(){this.isAnimating||(this.isAnimating=!0,this.currentIndex--)}handleTransitionEnd(){this.isAnimating=!1,this.currentIndex>=this.slides.length+1?this.currentIndex=1:this.currentIndex<=0&&(this.currentIndex=this.slides.length)}goToSlide(r){this.isAnimating||(this.isAnimating=!0,this.currentIndex=r+1,this.autoplay&&this.startAutoplay())}render(){const r=[this.slides[this.slides.length-1],...this.slides,this.slides[0]],t=this.container?.offsetWidth||0,e=this.dragOffset/t*100,i=-(this.currentIndex*100)+e;return d`
      <div class="carousel" 
           @mousedown=${this.handleMouseDown}
           @touchstart=${this.handleMouseDown}
           @mouseenter=${this.stopAutoplay}
           @mouseleave=${()=>this.autoplay&&this.startAutoplay()}>
        
        <div class="carousel-container">
          <div class="carousel-slides ${this.isAnimating||!this.isDragging?"animate":""}" 
               style="transform: translateX(${i}%)"
               @transitionend=${this.handleTransitionEnd}>
            ${r.map(n=>d`
              <div class="carousel-slide">
                <img src="${n.url}" alt="${n.alt}" draggable="false" />
                <div class="carousel-caption">
                  <h3>${n.title}</h3>
                </div>
              </div>
            `)}
          </div>
        </div>

        <button class="carousel-button prev" @click=${this.prev} aria-label="Anterior">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <button class="carousel-button next" @click=${this.next} aria-label="Siguiente">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <div class="carousel-indicators">
          ${this.slides.map((n,s)=>d`
            <button 
              class="indicator ${this.currentIndex===s+1||this.currentIndex===0&&s===this.slides.length-1||this.currentIndex===this.slides.length+1&&s===0?"active":""}"
              @click=${()=>this.goToSlide(s)}
              aria-label="Ir a slide ${s+1}">
            </button>
          `)}
        </div>
      </div>
    `}};$.styles=B(fe);A([h({type:Array})],$.prototype,"slides",2);A([m()],$.prototype,"currentIndex",2);A([m()],$.prototype,"isAnimating",2);A([m()],$.prototype,"isDragging",2);A([m()],$.prototype,"startX",2);A([m()],$.prototype,"dragOffset",2);A([h({type:Number})],$.prototype,"autoplayInterval",2);A([h({type:Boolean})],$.prototype,"autoplay",2);A([at(".carousel-slides")],$.prototype,"container",2);$=A([C("carrucel-com")],$);var be=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,w=(r,t,e,i)=>{for(var n=i>1?void 0:i?xe(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&be(t,e,n),n};let g=class extends x{constructor(){super(...arguments),this.items=[],this.renderItem=(r,t)=>d`<div>${JSON.stringify(r)}</div>`,this.currentIndex=1,this.isAnimating=!1,this.isDragging=!1,this.startX=0,this.dragOffset=0,this.autoplayInterval=5e3,this.autoplay=!1,this.handleMouseDown=r=>{this.items.length<=1||(this.isDragging=!0,this.startX="touches"in r?r.touches[0].clientX:r.clientX,this.dragOffset=0,this.stopAutoplay())},this.handleMouseMove=r=>{if(!this.isDragging)return;const t="touches"in r?r.touches[0].clientX:r.clientX;this.dragOffset=t-this.startX},this.handleMouseUp=()=>{if(!this.isDragging)return;this.isDragging=!1;const r=100;this.dragOffset<-r?this.next():this.dragOffset>r&&this.prev(),this.dragOffset=0,this.autoplay&&this.startAutoplay()}}connectedCallback(){super.connectedCallback(),this.autoplay&&this.startAutoplay(),window.addEventListener("mouseup",this.handleMouseUp),window.addEventListener("mousemove",this.handleMouseMove)}disconnectedCallback(){super.disconnectedCallback(),this.stopAutoplay(),window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("mousemove",this.handleMouseMove)}startAutoplay(){this.stopAutoplay(),this.autoplayTimer=window.setInterval(()=>this.next(),this.autoplayInterval)}stopAutoplay(){this.autoplayTimer&&(clearInterval(this.autoplayTimer),this.autoplayTimer=void 0)}next(){this.isAnimating||this.items.length<=1||(this.isAnimating=!0,this.currentIndex++)}prev(){this.isAnimating||this.items.length<=1||(this.isAnimating=!0,this.currentIndex--)}handleTransitionEnd(){this.isAnimating=!1,this.currentIndex>=this.items.length+1?this.currentIndex=1:this.currentIndex<=0&&(this.currentIndex=this.items.length)}render(){if(!this.items||this.items.length===0)return d`<div>No hay items</div>`;const r=[this.items[this.items.length-1],...this.items,this.items[0]],t=this.container?.offsetWidth||1,e=this.dragOffset/t*100,i=-(this.currentIndex*100)+e;return d`
      <div class="carousel-wrapper"
           @mousedown=${this.handleMouseDown}
           @touchstart=${this.handleMouseDown}
           @mouseenter=${this.stopAutoplay}
           @mouseleave=${()=>this.autoplay&&this.startAutoplay()}>
        
        <div class="carousel-viewport">
          <div class="carousel-slides ${this.isAnimating||!this.isDragging?"animate":""}" 
               style="transform: translateX(${i}%)"
               @transitionend=${this.handleTransitionEnd}>
            ${r.map((n,s)=>d`
              <div class="carousel-item">
                ${this.renderItem(n,s)}
              </div>
            `)}
          </div>
        </div>

        <button class="nav-btn prev" @click=${this.prev} aria-label="Anterior">‹</button>
        <button class="nav-btn next" @click=${this.next} aria-label="Siguiente">›</button>

        <div class="indicators">
            ${this.items.map((n,s)=>d`
                <div class="dot ${this.currentIndex===s+1?"active":""}"></div>
            `)}
        </div>
      </div>
    `}};g.styles=B(`
    :host { display: block; width: 100%; }
    .carousel-wrapper { position: relative; overflow: hidden; cursor: grab; user-select: none; }
    .carousel-wrapper:active { cursor: grabbing; }
    .carousel-viewport { width: 100%; overflow: hidden; }
    .carousel-slides { display: flex; will-change: transform; }
    .carousel-slides.animate { transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
    .carousel-item { min-width: 100%; box-sizing: border-box; display: flex; justify-content: center; }
    .nav-btn {
      position: absolute; top: 50%; transform: translateY(-50%);
      background: rgba(255,255,255,0.8); border: none; width: 40px; height: 40px;
      border-radius: 50%; cursor: pointer; z-index: 10; font-size: 24px;
    }
    .prev { left: 10px; }
    .next { right: 10px; }
    .indicators {
      display: flex; justify-content: center; gap: 8px; margin-top: 10px;
    }
    .dot { width: 8px; height: 8px; background: #ccc; border-radius: 50%; transition: 0.3s; }
    .dot.active { background: #333; transform: scale(1.2); }
  `);w([h({type:Array})],g.prototype,"items",2);w([h({attribute:!1})],g.prototype,"renderItem",2);w([m()],g.prototype,"currentIndex",2);w([m()],g.prototype,"isAnimating",2);w([m()],g.prototype,"isDragging",2);w([m()],g.prototype,"startX",2);w([m()],g.prototype,"dragOffset",2);w([h({type:Number})],g.prototype,"autoplayInterval",2);w([h({type:Boolean})],g.prototype,"autoplay",2);w([at(".carousel-slides")],g.prototype,"container",2);g=w([C("generic-carousel-com")],g);const $e=`
/* Hero Banner */
.hero-banner {
    background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
    padding: 60px 20px;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.hero-content {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}

.hero-banner h2 {
    font-size: 80px;
    color: white;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 5px;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
    line-height: 1.1;
    margin-bottom: 10px;
}

.hero-banner h2 span {
    display: block;
}

.hero-banner .discount {
    font-size: 100px;
    color: white;
    font-weight: 900;
}

.hero-banner .subtitle {
    font-size: 42px;
    color: #ef4444;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-top: 10px;
}

.percentage-icon {
    position: absolute;
    width: 120px;
    height: 120px;
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    font-weight: 900;
    color: #1f2937;
    transform: rotate(-15deg);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
}

.percentage-left {
    left: 10%;
    top: 50%;
    transform: translateY(-50%) rotate(-15deg);
}

.percentage-right {
    right: 10%;
    top: 50%;
    transform: translateY(-50%) rotate(15deg);
}

/* Category Grid */
.category-grid {
    max-width: 1400px;
    margin: 50px auto;
    padding: 0 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.category-card {
    background: white;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
    border: 2px solid #f0f0f0;
}

.category-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.category-card img {
    width: 100%;
    height: 150px;
    object-fit: contain;
    margin-bottom: 15px;
}

.category-card h3 {
    font-size: 16px;
    color: #ff1493;
    font-weight: 600;
}

/* Products Section */
.products-section {
    max-width: 1400px;
    margin: 50px auto;
    padding: 0 40px;
}

.section-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 30px;
    color: #333;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    margin-bottom: 20px;
}

.product-card {
    background: white;
    border-radius: 8px;
    padding: 15px;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.product-badge {
    background-color: #ff1493;
    color: white;
    padding: 3px 8px;
    border-radius: 3px;
    font-size: 10px;
    font-weight: bold;
    display: inline-block;
    margin-bottom: 10px;
}

.product-card img {
    width: 100%;
    height: 180px;
    object-fit: contain;
    margin-bottom: 10px;
}

.product-name {
    font-size: 13px;
    color: #333;
    margin-bottom: 8px;
    min-height: 40px;
    line-height: 1.3;
}

.product-price {
    margin-bottom: 10px;
}

.old-price {
    text-decoration: line-through;
    color: #999;
    font-size: 11px;
}

.current-price {
    color: #333;
    font-size: 18px;
    font-weight: bold;
    margin: 5px 0;
}

.installments {
    font-size: 11px;
    color: #00a650;
    margin-bottom: 8px;
}

.buy-button {
    width: 100%;
    padding: 8px;
    background-color: #c8ff00;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 13px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.buy-button:hover {
    background-color: #b3e600;
}

.carousel-dots {
    text-align: center;
    margin-top: 20px;
}

.dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #ddd;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
}

.dot.active {
    background-color: #ff1493;
}

/* Benefits Section */
.benefits-section {
    background-color: #8b5cf6;
    padding: 40px 20px;
    margin-top: 60px;
}

.benefits-container {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    color: white;
}

.benefit-item {
    text-align: center;
}

.benefit-icon {
    font-size: 40px;
    margin-bottom: 15px;
}

.benefit-item h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
}

.benefit-item p {
    font-size: 12px;
    opacity: 0.9;
}

/* Brands Section */
.brands-section {
    max-width: 1400px;
    margin: 50px auto;
    padding: 0 40px;
}

.brands-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 20px;
    align-items: center;
}

.brand-logo {
    background: white;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    cursor: pointer;
    transition: transform 0.3s;
}

.brand-logo:hover {
    transform: scale(1.05);
}

.brand-logo img {
    max-width: 100%;
    max-height: 100%;
}

/* Newsletter */
.newsletter-section {
    max-width: 1400px;
    margin: 50px auto;
    padding: 40px;
    text-align: center;
}

.newsletter-section h2 {
    font-size: 28px;
    margin-bottom: 10px;
}

.newsletter-section p {
    color: #666;
    margin-bottom: 20px;
}

.newsletter-form {
    display: flex;
    gap: 10px;
    max-width: 500px;
    margin: 0 auto;
}

.newsletter-form input {
    flex: 1;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.newsletter-form button {
    padding: 12px 30px;
    background-color: #c8ff00;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
}

.social-follow {
    margin-top: 30px;
    font-size: 20px;
}

/* Footer */
footer {
    background-color: #4a4a4a;
    color: white;
    padding: 40px 40px 20px;
}

.footer-container {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 40px;
    margin-bottom: 30px;
}

.footer-section h4 {
    font-size: 13px;
    margin-bottom: 15px;
    text-transform: uppercase;
    color: #c8ff00;
}

.footer-section p,
.footer-section ul li {
    font-size: 12px;
    color: #ccc;
    margin-bottom: 8px;
    line-height: 1.6;
}

.footer-section ul {
    list-style: none;
}

.footer-section a {
    color: #ccc;
    text-decoration: none;
}

.footer-section a:hover {
    color: white;
}

.payment-methods {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 15px;
}

.payment-icon {
    width: 40px;
    height: 25px;
    background-color: white;
    border-radius: 3px;
}

.footer-bottom {
    max-width: 1400px;
    margin: 0 auto;
    padding-top: 20px;
    border-top: 1px solid #666;
    text-align: center;
    font-size: 11px;
    color: #999;
}

/* WhatsApp Button */
.whatsapp-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background-color: #25d366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 30px;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    z-index: 1000;
}

@media (max-width: 1200px) {
    .products-grid {
        grid-template-columns: repeat(4, 1fr);
    }

    .category-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .brands-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media (max-width: 768px) {
    .hero-banner h2 {
        font-size: 40px;
    }

    .hero-banner .discount {
        font-size: 50px;
    }

    .percentage-icon {
        width: 80px;
        height: 80px;
        font-size: 40px;
    }

    .products-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .category-grid {
        grid-template-columns: 1fr;
    }

    .benefits-container {
        grid-template-columns: repeat(2, 1fr);
    }

    .footer-container {
        grid-template-columns: 1fr;
    }
}


/* Asegura que las secciones de carrusel ocupen todo el ancho disponible */
.carousel-container-full, 
.shelf-container-full {
    width: 100%;
    display: block;
    margin: 0 auto;
}

/* Ajuste para que las tarjetas dentro del carrusel no hereden 
   estilos de rejilla que puedan romper el diseño */
target-prod-com {
    width: 100%;
    display: block;
}

/* Modifica el contenedor de productos si quieres que el título 
   esté alineado con el carrusel */
.products-section {
    max-width: 1400px;
    margin: 50px auto;
    padding: 0 40px;
    overflow: visible; /* Importante para que los botones laterales se vean */
}`;var ve=Object.defineProperty,we=Object.getOwnPropertyDescriptor,Ct=(r,t,e,i)=>{for(var n=i>1?void 0:i?we(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&ve(t,e,n),n};N.pages.push({path:"/",render:()=>d`
    <home-com></home-com>
`});let J=class extends x{constructor(){super(...arguments),this.name="home-com"}render(){const r=e=>d`
      <target-prod-com
        badge="Destacados"
        image=${e.img}
        alt="Promo"
        productName=${e.title}
        oldPrice=${e.pack}
        currentPrice=${e.offert.join(`
`)}
        installments=${e.detail}
        buttonText="Comprar"
      ></target-prod-com>
    `,t=e=>d`
      <target-prod-com
        badge="Kit Acrílicos + Difuminador"
        image=${e.img}
        alt="Promo"
        productName=${e.title}
        oldPrice=${e.pack}
        currentPrice=${e.offert.join(`
`)}
        installments=${e.detail}
        buttonText="Comprar"
      ></target-prod-com>
    `;return d`
    <carrucel-com></carrucel-com>
    
    <section class="category-grid">
        <!-- Tus categorías aquí -->
        <div class="carousel-container-full">
          <generic-carousel-com
            .items=${W.slice(1,5)} 
            .renderItem=${r}
            .autoplay=${!0}
          ></generic-carousel-com>
        </div>
    </section>
    
    <!-- Destacados -->
    <section class="products-section">
        <h2 class="section-title">Destacados</h2>
        <!-- ELIMINAMOS la clase products-grid para que el carrusel use el 100% -->
        <div class="carousel-container-full">
            <product-shelf-com 
                .items=${W.slice(6,11)} 
                .renderItem=${t}
                .itemsPerView=${4}  /* Cambiado a 4 para que se vea como tu foto */
                .gap=${20}>
            </product-shelf-com>
        </div>
    </section>
    
    <!-- Novedades -->
    <section class="products-section">
        <h2 class="section-title">Novedades</h2>
        <!-- USAMOS product-shelf-com fuera de la grid de 5 columnas -->
        <div class="shelf-container-full">
          <product-shelf-com 
            .items=${W.slice(12,22)} 
            .renderItem=${t}
            .itemsPerView=${4}  /* Cambiado a 4 para que se vea como tu foto */
            .gap=${20}>
          </product-shelf-com>
        </div>
    </section>
    
    <!-- Benefits Section -->
    <section class="benefits-section">
        <div class="benefits-container">
            <div class="benefit-item">
                <div class="benefit-icon">🚚</div>
                <h3>ENVÍO GRATIS</h3>
                <p>En compras superiores a $20.000<br>Envíos a todo el país</p>
            </div>
            <div class="benefit-item">
                <div class="benefit-icon">💳</div>
                <h3>Hasta 3 Cuotas Sin INTERÉS</h3>
                <p>En todos los medios de pago</p>
            </div>
            <div class="benefit-item">
                <div class="benefit-icon">💰</div>
                <h3>15% de DESCUENTO</h3>
                <p>Pagando con Transferencia</p>
            </div>
            <div class="benefit-item">
                <div class="benefit-icon">✓</div>
                <h3>Comprá con Confianza</h3>
                <p>Compra protegida y garantizada</p>
            </div>
        </div>
    </section>
    
    `}};J.styles=B($e);Ct([h()],J.prototype,"name",2);J=Ct([C("home-com")],J);const ye=`:host {
    display: block;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    /* Evita desbordamiento del host */
    box-sizing: border-box;
}

* {
    box-sizing: border-box;
}

.shelf-wrapper {
    position: relative;
    width: 100%;
    padding: 0 40px;
    /* Espacio para botones */
}

.shelf-viewport {
    overflow: hidden;
    cursor: grab;
    width: 100%;
    padding: 10px 0;
    touch-action: pan-y;
    /* Permite scroll vertical en móvil pero no horizontal */
}

.shelf-viewport:active {
    cursor: grabbing;
}

.shelf-container {
    display: flex;
    will-change: transform;
}

.shelf-container.animate {
    transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.shelf-item {
    user-select: none;
    -webkit-user-drag: none;
}

.nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background: white;
    border: none;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    z-index: 5;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s;
}

.nav-btn:disabled {
    opacity: 0;
    pointer-events: none;
}

.prev {
    left: 0;
}

.next {
    right: 0;
}

.indicators {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 15px;
}

.dot {
    width: 8px;
    height: 8px;
    background: #ddd;
    border-radius: 50%;
    transition: 0.3s;
}

.dot.active {
    background: #ff0080;
    transform: scale(1.3);
}

@media (max-width: 1024px) {
    .shelf-wrapper {
        padding: 0 30px;
    }
}`;var Ae=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,y=(r,t,e,i)=>{for(var n=i>1?void 0:i?_e(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&Ae(t,e,n),n};let b=class extends x{constructor(){super(...arguments),this.items=[],this.renderItem=r=>d`<div class="default-card">${r.name}</div>`,this.itemsPerView=4,this.gap=16,this.currentIndex=0,this.isAnimating=!1,this.isDragging=!1,this.startX=0,this.dragOffset=0,this.handleMouseDown=r=>{this.items.length<=this.itemsPerView||(this.isDragging=!0,this.startX="touches"in r?r.touches[0].clientX:r.clientX,this.dragOffset=0)},this.handleMouseMove=r=>{if(!this.isDragging)return;const t="touches"in r?r.touches[0].clientX:r.clientX;this.dragOffset=t-this.startX},this.handleMouseUp=()=>{if(!this.isDragging)return;this.isDragging=!1;const r=70;this.dragOffset<-r?this.next():this.dragOffset>r&&this.prev(),this.dragOffset=0}}get clonesCount(){return Math.ceil(this.itemsPerView)}next(){this.isAnimating||(this.isAnimating=!0,this.currentIndex++)}prev(){this.isAnimating||(this.isAnimating=!0,this.currentIndex--)}handleTransitionEnd(){this.isAnimating=!1,this.currentIndex>=this.items.length?this.currentIndex=0:this.currentIndex<0&&(this.currentIndex=this.items.length-1)}render(){if(!this.items.length)return d``;const r=this.items.slice(-this.clonesCount),t=this.items.slice(0,this.clonesCount),e=[...r,...this.items,...t],i=100/this.itemsPerView,n=(this.currentIndex+this.clonesCount)*i,s=this.viewport?.offsetWidth||1,o=this.dragOffset/s*100,c=-n+o;return d`
      <div class="shelf-wrapper">
        <div class="shelf-viewport" 
             @mousedown=${this.handleMouseDown}
             @touchstart=${this.handleMouseDown}
             @mousemove=${this.handleMouseMove}
             @touchmove=${this.handleMouseMove}
             @mouseup=${this.handleMouseUp}
             @touchend=${this.handleMouseUp}
             @mouseleave=${this.handleMouseUp}>
          
          <div class="shelf-container ${this.isAnimating||!this.isDragging?"animate":""}"
               style="transform: translateX(${c}%); gap: ${this.gap}px;"
               @transitionend=${this.handleTransitionEnd}>
            
            ${e.map((a,l)=>{const u=this.gap*(this.itemsPerView-1)/this.itemsPerView;return d`
                <div class="shelf-item" 
                     style="flex: 0 0 calc(${i}% - ${u}px)">
                  ${this.renderItem(a,l)}
                </div>
              `})}
          </div>
        </div>

        <button class="nav-btn prev" @click=${this.prev} ?disabled=${this.items.length<=this.itemsPerView}>‹</button>
        <button class="nav-btn next" @click=${this.next} ?disabled=${this.items.length<=this.itemsPerView}>›</button>

        <div class="indicators">
          ${this.items.map((a,l)=>d`
            <div class="dot ${this.currentIndex===l||this.currentIndex===-1&&l===this.items.length-1||this.currentIndex===this.items.length&&l===0?"active":""}"></div>
          `)}
        </div>
      </div>
    `}};b.styles=B(ye);y([h({type:Array})],b.prototype,"items",2);y([h({attribute:!1})],b.prototype,"renderItem",2);y([h({type:Number})],b.prototype,"itemsPerView",2);y([h({type:Number})],b.prototype,"gap",2);y([m()],b.prototype,"currentIndex",2);y([m()],b.prototype,"isAnimating",2);y([m()],b.prototype,"isDragging",2);y([m()],b.prototype,"startX",2);y([m()],b.prototype,"dragOffset",2);y([at(".shelf-viewport")],b.prototype,"viewport",2);b=y([C("product-shelf-com")],b);var Pe=Object.getOwnPropertyDescriptor,ke=(r,t,e,i)=>{for(var n=i>1?void 0:i?Pe(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=o(n)||n);return n};let yt=class extends x{constructor(){super(),this.router=new ae(this,N.pages),this.render=()=>d` 
    <navbar-com></navbar-com>
    ${this.router.outlet()}
  `,N.router=this.router}};yt=ke([C("my-element")],yt);
