webpackJsonp([1],{"./imageMasonryGallery/component.js":function(e,n,a){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var l=a("./node_modules/babel-runtime/helpers/extends.js"),i=t(l),o=a("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),r=t(o),s=a("./node_modules/babel-runtime/helpers/classCallCheck.js"),c=t(s),m=a("./node_modules/babel-runtime/helpers/createClass.js"),g=t(m),u=a("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),p=t(u),d=a("./node_modules/babel-runtime/helpers/inherits.js"),b=t(d),y=a("./node_modules/react/react.js"),h=t(y),v=a("./node_modules/vc-cake/index.js"),f=t(v),x=f["default"].getService("api"),k=function(e){function n(e){(0,c["default"])(this,n);var a=(0,p["default"])(this,(n.__proto__||(0,r["default"])(n)).call(this,e));return a.currentImg=0,a.loadingIndex=0,a.data=[],a.loadImage=a.loadImage.bind(a),a}return(0,b["default"])(n,e),(0,g["default"])(n,[{key:"componentDidMount",value:function(){this.prepareImages(this.props.atts)}},{key:"componentWillReceiveProps",value:function(e){this.currentImg=0,this.data=[],this.loadingIndex++,this.prepareImages(e.atts,!0)}},{key:"prepareImages",value:function(e){for(var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e.image,t=this.getImageUrl(a),l=e.columns<=0?1:e.columns,i=[],o=0;o<l;o++)i.push(0),this.data.push([]);if(n){i=[];for(var r=0;r<l;r++)i.push(0)}this.loadImage(t,i)}},{key:"loadImage",value:function(e,n){if(!e.length)return void this.setState({columnData:this.data});var a=new window.Image;a.loadingIndex=this.loadingIndex,a.onload=this.imgLoadHandler.bind(this,e,n,a),a.src=e[this.currentImg]}},{key:"imgLoadHandler",value:function(e,n,a){if(a.loadingIndex===this.loadingIndex){var t=this.getImageHeight(a.width,a.height),l=this.getSmallestFromArray(n);n[l]+=t,this.data[l].push(this.props.atts.image[this.currentImg]),this.currentImg++,this.currentImg<e.length?this.loadImage(e,n):this.setState({columnData:this.data})}}},{key:"getImageHeight",value:function(e,n){var a=50,t=e/a;return n/t}},{key:"getSmallestFromArray",value:function(e){var n=0,a=e[0];return e.forEach(function(t,l){t<a&&(a=e[l],n=l)}),n}},{key:"getPublicImage",value:function(e){var n=this.props.atts.metaAssetsPath;return e?e.match("^(https?:)?\\/\\/?")?e:n+e:""}},{key:"getImageUrl",value:function(e,n){var a=this,t=void 0;if(n&&e&&e[n])t=e[n];else if(e instanceof Array){var l=[];e.forEach(function(e){var n=e&&e.full&&e.id?e.full:e&&e.full?a.getPublicImage(e.full):a.getPublicImage(e);l.push(n)}),t=l}else t=e&&e.full&&e.id?e.full:e&&e.full?this.getPublicImage(e.full):this.getPublicImage(e);return t}},{key:"render",value:function(){var e=this,n=this.props,a=n.id,t=n.atts,l=n.editor,o=(t.image,t.shape),r=t.customClass,s=t.metaCustomId,c=t.clickableOptions,m=["vce-image-masonry-gallery"],g=["vce-image-masonry-gallery-wrapper vce"],u={},p="div",d=this.state&&this.state.columnData,b=[];d&&d.forEach(function(n,t){var l=[];n&&n.forEach(function(n,t){var o=e.getImageUrl(n),r={},s="vce-image-masonry-gallery-item",m="vce-image-masonry-gallery-img",g={alt:n&&n.alt?n.alt:""};if("url"===c&&n.link&&n.link.url){p="a";var u=n.link,d=u.url,b=u.title,y=u.targetBlank,v=u.relNofollow;r={href:d,title:b,target:y?"_blank":void 0,rel:v?"nofollow":void 0}}else"imageNewTab"===c?(p="a",r={href:o,target:"_blank"}):"lightbox"===c&&(p="a",r={href:o,"data-lightbox":"lightbox-"+a});l.push(h["default"].createElement(p,(0,i["default"])({},r,{className:s,key:"vce-image-masonry-gallery-item-"+t+"-"+a}),h["default"].createElement("img",(0,i["default"])({className:m,src:e.getImageUrl(n)},g))))}),b.push(h["default"].createElement("div",{className:"vce-image-masonry-gallery-column",key:"vce-image-masonry-gallery-col-"+t+"-"+a},l))}),"string"==typeof r&&r&&m.push(r);var y=this.getMixinData("imageGalleryGap");y&&g.push("vce-image-masonry-gallery--gap-"+y.selector),y=this.getMixinData("imageGalleryColumns"),y&&g.push("vce-image-masonry-gallery--columns-"+y.selector),"rounded"===o&&m.push("vce-image-masonry-gallery--border-rounded"),s&&(u.id=s);var v=this.applyDO("all");return h["default"].createElement("div",(0,i["default"])({className:m.join(" ")},l,u),h["default"].createElement("div",(0,i["default"])({className:g.join(" "),id:"el-"+a},v),h["default"].createElement("div",{className:"vce-image-masonry-gallery-list"},b)))}}]),n}(x.elementComponent);n["default"]=k},0:function(e,n,a){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}var l=a("./node_modules/vc-cake/index.js"),i=t(l),o=a("./imageMasonryGallery/component.js"),r=t(o),s=i["default"].getService("cook").add;s(a("./imageMasonryGallery/settings.json"),function(e){e.add(r["default"])},{css:a("./node_modules/raw-loader/index.js!./imageMasonryGallery/styles.css"),editorCss:a("./node_modules/raw-loader/index.js!./imageMasonryGallery/editor.css"),mixins:{imageGalleryColumns:{mixin:a("./node_modules/raw-loader/index.js!./imageMasonryGallery/cssMixins/imageGalleryColumns.pcss")},imageGalleryGap:{mixin:a("./node_modules/raw-loader/index.js!./imageMasonryGallery/cssMixins/imageGalleryGap.pcss")}}},"")},"./imageMasonryGallery/settings.json":function(e,n){e.exports={image:{type:"attachimage",access:"public",value:["image-masonry-1.jpg","image-masonry-2.jpg","image-masonry-3.jpg","image-masonry-4.jpg","image-masonry-5.jpg","image-masonry-6.jpg"],options:{label:"Images",multiple:!0,onChange:{rules:{clickableOptions:{rule:"value",options:{value:"url"}}},actions:[{action:"attachImageUrls"}]},url:!1}},shape:{type:"buttonGroup",access:"public",value:"square",options:{label:"Shape",values:[{label:"Square",value:"square",icon:"vcv-ui-icon-attribute-shape-square"},{label:"Rounded",value:"rounded",icon:"vcv-ui-icon-attribute-shape-rounded"}]}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["clickableOptions","image","columns","gap","shape","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General"]},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},clickableOptions:{type:"dropdown",access:"public",value:"lightbox",options:{label:"OnClick action",values:[{label:"None",value:""},{label:"Lightbox",value:"lightbox"},{label:"Open Image in New Tab",value:"imageNewTab"},{label:"Link selector",value:"url"}]}},assetsLibrary:{access:"public",type:"string",value:["animate"]},gap:{type:"number",access:"public",value:"10",options:{label:"Gap",description:"Enter gap in pixels (Example: 5).",cssMixin:{mixin:"imageGalleryGap",property:"gap",namePattern:"[\\da-f]+"}}},columns:{type:"number",access:"public",value:"3",options:{label:"Number of Columns",cssMixin:{mixin:"imageGalleryColumns",property:"columns",namePattern:"[\\da-f]+"}}},metaBackendLabels:{type:"group",access:"protected",value:[{value:["clickableOptions"]},{value:["image"]}]},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only)."}},tag:{access:"protected",type:"string",value:"imageMasonryGallery"},metaPublicJs:{access:"protected",type:"string",value:{libraries:[{rules:{clickableOptions:{rule:"value",options:{value:"lightbox"}}},libPaths:"public/dist/lightbox.min.js"}]}}}},"./node_modules/raw-loader/index.js!./imageMasonryGallery/cssMixins/imageGalleryColumns.pcss":function(e,n){e.exports="@media (min-width: 544px) {\n  .vce-image-masonry-gallery {\n    &--columns-$selector {\n      .vce-image-masonry-gallery-column {\n        @if $columns != false {\n          flex: 0 0 calc(100% / $columns);\n          max-width: calc(100% / $columns);\n        }\n      }\n    }\n  }\n}\n\n\n"},"./node_modules/raw-loader/index.js!./imageMasonryGallery/cssMixins/imageGalleryGap.pcss":function(e,n){e.exports=".vce-image-masonry-gallery {\n  &--gap-$selector {\n    @if $gap != false {\n      .vce-image-masonry-gallery-list {\n        margin-left: calc(-$(gap)px / 2);\n        margin-right: calc(-$(gap)px / 2);\n        margin-bottom: -$(gap)px;\n      }\n    }\n\n    @if $gap != false {\n      .vce-image-masonry-gallery-item {\n        padding-left: calc($(gap)px / 2);\n        padding-right: calc($(gap)px / 2);\n        margin-bottom: $(gap)px;\n      }\n    }\n  }\n}\n\n"},"./node_modules/raw-loader/index.js!./imageMasonryGallery/editor.css":function(e,n){e.exports=".vce-image-masonry-gallery {\n  min-height: 1em;\n}\n"},"./node_modules/raw-loader/index.js!./imageMasonryGallery/styles.css":function(e,n){e.exports=".vce-image-masonry-gallery-wrapper {\n  overflow: hidden;\n}\n\n.vce-image-masonry-gallery-list {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  align-content: flex-start;\n}\n\n.vce-image-masonry-gallery-column {\n  flex: 0 0 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n\n.vce-image-masonry-gallery-item {\n  display: block;\n}\n\na.vce-image-masonry-gallery-item {\n  color: transparent;\n  border-bottom: 0;\n  text-decoration: none;\n}\n\n.vce-image-masonry-gallery-img {\n  width: 100%;\n  height: auto;\n}\n\n.vce-image-masonry-gallery--border-rounded .vce-image-masonry-gallery-img {\n  border-radius: 5px;\n}\n\n/* =====  Lightbox  ===== */\n/* Preload images */\nbody:after {\n  content: url('public/close.png') url('public/loading.gif') url('public/prev.png') url('public/next.png');\n  display: none;\n}\n\nbody.vce-lb-disable-scrolling {\n  overflow: hidden;\n}\n\n.vce-lightboxOverlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  background-color: black;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);\n  opacity: 0.8;\n  display: none;\n}\n\n.vce-lightbox {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  z-index: 10000;\n  text-align: center;\n  line-height: 0;\n  font-weight: normal;\n}\n\n.vce-lightbox .vce-lb-image {\n  display: block;\n  height: auto;\n  max-width: inherit;\n  border-radius: 3px;\n  transition: none;\n}\n\n.vce-lightbox a img {\n  border: none;\n}\n\n.vce-lb-outerContainer {\n  position: relative;\n  background-color: white;\n  *zoom: 1;\n  width: 250px;\n  height: 250px;\n  margin: 0 auto;\n  border-radius: 4px;\n}\n\n.vce-lb-outerContainer:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.vce-lb-loader {\n  position: absolute;\n  top: 43%;\n  left: 0;\n  height: 25%;\n  width: 100%;\n  text-align: center;\n  line-height: 0;\n}\n\n.vce-lb-cancel {\n  display: block;\n  width: 32px;\n  height: 32px;\n  margin: 0 auto;\n  background: url('public/loading.gif') no-repeat;\n}\n\n.vce-lb-nav {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 10;\n}\n\n.vce-lb-container > .nav {\n  left: 0;\n}\n\n.vce-lb-nav a {\n  outline: none;\n  background-image: url('data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');\n}\n\n.vce-lb-prev, .vce-lb-next {\n  height: 100%;\n  cursor: pointer;\n  display: block;\n}\n\n.vce-lb-nav a.vce-lb-prev {\n  width: 34%;\n  left: 0;\n  float: left;\n  background: url('public/prev.png') left 48% no-repeat;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n  opacity: 0;\n  -webkit-transition: opacity 0.6s;\n  -moz-transition: opacity 0.6s;\n  -o-transition: opacity 0.6s;\n  transition: opacity 0.6s;\n}\n\n.vce-lb-nav a.vce-lb-prev:hover {\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity: 1;\n}\n\n.vce-lb-nav a.vce-lb-next {\n  width: 64%;\n  right: 0;\n  float: right;\n  background: url('public/next.png') right 48% no-repeat;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n  opacity: 0;\n  -webkit-transition: opacity 0.6s;\n  -moz-transition: opacity 0.6s;\n  -o-transition: opacity 0.6s;\n  transition: opacity 0.6s;\n}\n\n.vce-lb-nav a.vce-lb-next:hover {\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity: 1;\n}\n\n.vce-lb-dataContainer {\n  margin: 0 auto;\n  padding-top: 5px;\n  *zoom: 1;\n  width: 100%;\n  -moz-border-radius-bottomleft: 4px;\n  -webkit-border-bottom-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  -moz-border-radius-bottomright: 4px;\n  -webkit-border-bottom-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n\n.vce-lb-dataContainer:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.vce-lb-data {\n  padding: 0 4px;\n  color: #ccc;\n}\n\n.vce-lb-data .vce-lb-details {\n  width: 85%;\n  float: left;\n  text-align: left;\n  line-height: 1.1em;\n}\n\n.vce-lb-data .vce-lb-caption {\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 1em;\n}\n\n.vce-lb-data .vce-lb-number {\n  display: block;\n  clear: left;\n  padding-bottom: 1em;\n  font-size: 12px;\n  color: #999;\n}\n\n.vce-lb-data .vce-lb-close {\n  display: block;\n  float: right;\n  width: 30px;\n  height: 30px;\n  background: url('public/close.png') top right no-repeat;\n  text-align: right;\n  outline: none;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=70);\n  opacity: 0.7;\n  -webkit-transition: opacity 0.2s;\n  -moz-transition: opacity 0.2s;\n  -o-transition: opacity 0.2s;\n  transition: opacity 0.2s;\n}\n\n.vce-lb-data .vce-lb-close:hover {\n  cursor: pointer;\n  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity: 1;\n}\n"}});