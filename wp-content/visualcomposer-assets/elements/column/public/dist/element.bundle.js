webpackJsonp([1],{"./column/component.js":function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var c=t("./node_modules/babel-runtime/helpers/extends.js"),l=o(c),s=t("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),a=o(s),d=t("./node_modules/babel-runtime/helpers/classCallCheck.js"),i=o(d),r=t("./node_modules/babel-runtime/helpers/createClass.js"),p=o(r),m=t("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),u=o(m),v=t("./node_modules/babel-runtime/helpers/inherits.js"),x=o(v),g=t("./node_modules/react/react.js"),f=o(g),h=t("./node_modules/vc-cake/index.js"),b=o(h),w=b["default"].getService("api"),k=function(e){function n(){return(0,i["default"])(this,n),(0,u["default"])(this,(n.__proto__||(0,a["default"])(n)).apply(this,arguments))}return(0,x["default"])(n,e),(0,p["default"])(n,[{key:"getContent",value:function(e,n){var t=b["default"].getService("document").get(this.props.atts.parent),o=this.props.children,c="";return c="top"===t.contentPosition?f["default"].createElement("div",(0,l["default"])({className:"vce-col-inner"},n,e),o):f["default"].createElement("div",(0,l["default"])({className:"vce-col-inner"},n,e),f["default"].createElement("div",{className:"vce-col-content"},o))}},{key:"render",value:function(){var e=this.props,n=e.id,o=e.atts,c=e.editor,s=e.isBackend,a=o.size,d=o.customClass,i=o.metaCustomId,r=o.designOptionsAdvanced,p=o.lastInRow,m=o.firstInRow,u=o.hidden,v=t("./node_modules/classnames/index.js"),x={},g={},h=[];h=["vce-col"],h.push("vce-col--md-"+(a?a.replace("/","-").replace("%","p").replace(",","-").replace(".","-"):"auto")),h.push("vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first"),h.push(this.getBackgroundClass(r)),u&&s&&h.push("vce-wpbackend-element-hidden"),p&&h.push("vce-col--md-last vce-col--lg-last vce-col--xl-last"),m&&h.push("vce-col--md-first vce-col--lg-first vce-col--xl-first"),"string"==typeof d&&d.length&&h.push(d);var b=v(h);i&&(g.id=i),g["data-vce-element-content"]=!0;var w=this.applyDO("background"),k=this.applyDO("padding margin animation border");return f["default"].createElement("div",(0,l["default"])({className:b},x,{id:"el-"+n},c,w),this.getBackgroundTypeContent(),this.getContainerDivider(),this.getContent(k,g))}}]),n}(w.elementComponent);n["default"]=k},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var c=t("./node_modules/vc-cake/index.js"),l=o(c),s=t("./column/component.js"),a=o(s),d=l["default"].getService("cook").add;d(t("./column/settings.json"),function(e){e.add(a["default"])},{css:t("./node_modules/raw-loader/index.js!./column/styles.css"),editorCss:t("./node_modules/raw-loader/index.js!./column/editor.css")},"")},"./column/settings.json":function(e,n){e.exports={size:{type:"string",access:"public",value:"100%"},lastInRow:{type:"string",access:"public",value:!1},firstInRow:{type:"string",access:"public",value:!1},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},designOptionsAdvanced:{type:"designOptionsAdvanced",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["metaCustomId","customClass"],options:{label:"General"}},dividers:{type:"divider",access:"public",value:{},options:{label:"Dividers"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptionsAdvanced","dividers"]},containerFor:{type:"group",access:"protected",value:["General"]},relatedTo:{type:"group",access:"protected",value:["Column"]},assetsLibrary:{access:"public",type:"string",value:["animate","backgroundSlider","backgroundSimple","backgroundZoom","backgroundColorGradient","backgroundVideoYoutube","backgroundVideoVimeo","backgroundVideoEmbed","parallaxFade","parallaxBackground"]},backendView:{type:"string",access:"protected",value:"frontend"},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only)."}},tag:{access:"protected",type:"string",value:"column"},hidden:{type:"string",access:"public",value:!1}}},"./node_modules/raw-loader/index.js!./column/editor.css":function(e,n){e.exports=".vce-col {\n  min-height: 1em;\n}"},"./node_modules/raw-loader/index.js!./column/styles.css":function(e,n){e.exports="/* ----------------------------------------------\n * Column\n * ---------------------------------------------- */\n.vce-col {\n  -ms-flex: 0 0 100%;\n      flex: 0 0 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-width: 1em;\n  position: relative;\n}\n.vce-col--auto {\n  -ms-flex: 1;\n      flex: 1;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.vce-col-content,\n.vce-col-inner {\n  position: relative;\n  overflow-wrap: break-word;\n}\n.vce-col-inner {\n  width: 100%;\n}\n.vce-col-direction--rtl {\n  direction: rtl;\n}\n.vce-row-content--top > .vce-row-content > .vce-element--has-background > .vce-col-inner,\n.vce-row-content--middle > .vce-row-content > .vce-element--has-background > .vce-col-inner > .vce-col-content,\n.vce-row-content--bottom > .vce-row-content > .vce-element--has-background > .vce-col-inner > .vce-col-content {\n  padding-top: 30px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n/* styles for mobile-portrait */\n@media (min-width: 0) {\n  .vce-col--xs-auto {\n    -ms-flex: 1 1 0;\n        flex: 1 1 0;\n    width: 1px;\n  }\n  .vce-col--xs-1 {\n    -ms-flex: 0 0 100%;\n        flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n/* styles for mobile-landscape */\n@media (min-width: 544px) {\n  .vce-col--sm-auto {\n    -ms-flex: 1 1 0;\n        flex: 1 1 0;\n    width: 1px;\n  }\n  .vce-col--sm-1 {\n    -ms-flex: 0 0 100%;\n        flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n/* styles for mobile-landscape */\n@media (min-width: 768px) {\n  .vce-col--md-auto {\n    -ms-flex: 1 1 0;\n        flex: 1 1 0;\n    width: 1px;\n  }\n  .vce-col--md-1 {\n    -ms-flex: 0 0 100%;\n        flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n/* styles for mobile-landscape */\n@media (min-width: 992px) {\n  .vce-col--lg-auto {\n    -ms-flex: 1 1 0;\n        flex: 1 1 0;\n    width: 1px;\n  }\n  .vce-col--lg-1 {\n    -ms-flex: 0 0 100%;\n        flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n/* styles for mobile-landscape */\n@media (min-width: 1200px) {\n  .vce-col--xl-auto {\n    -ms-flex: 1 1 0;\n        flex: 1 1 0;\n    width: 1px;\n  }\n  .vce-col--xl-1 {\n    -ms-flex: 0 0 100%;\n        flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n@media (min-width: 0) and (max-width: 543px) {\n  .vce-row-content--top > .vce-row-content > .vce-element--xs--has-background > .vce-col-inner,\n  .vce-row-content--middle > .vce-row-content > .vce-element--xs--has-background > .vce-col-inner > .vce-col-content,\n  .vce-row-content--bottom > .vce-row-content > .vce-element--xs--has-background > .vce-col-inner > .vce-col-content {\n    padding-top: 30px;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media (min-width: 544px) and (max-width: 767px) {\n  .vce-row-content--top > .vce-row-content > .vce-element--sm--has-background > .vce-col-inner,\n  .vce-row-content--middle > .vce-row-content > .vce-element--sm--has-background > .vce-col-inner > .vce-col-content,\n  .vce-row-content--bottom > .vce-row-content > .vce-element--sm--has-background > .vce-col-inner > .vce-col-content {\n    padding-top: 30px;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .vce-row-content--top > .vce-row-content > .vce-element--md--has-background > .vce-col-inner,\n  .vce-row-content--middle > .vce-row-content > .vce-element--md--has-background > .vce-col-inner > .vce-col-content,\n  .vce-row-content--bottom > .vce-row-content > .vce-element--md--has-background > .vce-col-inner > .vce-col-content {\n    padding-top: 30px;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .vce-row-content--top > .vce-row-content > .vce-element--lg--has-background > .vce-col-inner,\n  .vce-row-content--middle > .vce-row-content > .vce-element--lg--has-background > .vce-col-inner > .vce-col-content,\n  .vce-row-content--bottom > .vce-row-content > .vce-element--lg--has-background > .vce-col-inner > .vce-col-content {\n    padding-top: 30px;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n@media (min-width: 1200px) {\n  .vce-row-content--top > .vce-row-content > .vce-element--xl--has-background > .vce-col-inner,\n  .vce-row-content--middle > .vce-row-content > .vce-element--xl--has-background > .vce-col-inner > .vce-col-content,\n  .vce-row-content--bottom > .vce-row-content > .vce-element--xl--has-background > .vce-col-inner > .vce-col-content {\n    padding-top: 30px;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n"}});