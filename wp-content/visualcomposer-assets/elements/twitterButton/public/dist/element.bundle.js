webpackJsonp([1],{"./twitterButton/component.js":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("./node_modules/babel-runtime/helpers/extends.js"),s=a(o),i=n("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),l=a(i),r=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),u=a(r),c=n("./node_modules/babel-runtime/helpers/createClass.js"),p=a(c),d=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),m=a(d),b=n("./node_modules/babel-runtime/helpers/inherits.js"),h=a(b),v=n("./node_modules/react/react.js"),g=a(v),w=n("./node_modules/vc-cake/index.js"),y=a(w),f=y["default"].getService("api"),T=(y["default"].getService("cook"),function(e){function t(){return(0,u["default"])(this,t),(0,m["default"])(this,(t.__proto__||(0,l["default"])(t)).apply(this,arguments))}return(0,h["default"])(t,e),(0,p["default"])(t,[{key:"componentDidMount",value:function(){this.insertTwitterJs(this.props.atts)}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.atts,n=t.shareText,a=t.tweetAccount,o=t.tweetButtonSize,s=t.buttonType,i=t.username,l=t.showUsername,r=t.hashtagTopic,u=t.tweetText,c="customProps:"+this.props.id+"-"+s+"-"+n+"-"+a+"-"+o+"-"+i+"-"+l+"-"+r+"-"+u,p=e.atts,d="customProps:"+e.id+"-"+p.buttonType+"-"+p.shareText+"-"+p.tweetAccount+"-"+p.tweetButtonSize+"-"+p.username+"-"+p.showUsername+"-"+p.hashtagTopic+"-"+p.tweetText;c!==d&&this.insertTwitterJs(e.atts)}},{key:"insertTwitterJs",value:function(e){var t=this.createElementTag(e),n='<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';n=t+n;var a=this.getDomNode().querySelector(".vce-tweet-button-inner");this.updateInlineHtml(a,n)}},{key:"createElementTag",value:function(e){var t=document.createElement("a"),n=e.shareText,a=e.tweetAccount,o=e.tweetButtonSize,s=e.buttonType,i=e.username,l=e.showUsername,r=e.hashtagTopic,u=e.tweetText,c="twitter-"+s+"-button";s&&"share"===s&&n&&t.setAttribute("data-text",n),s&&("mention"===s||"hashtag"===s)&&u&&t.setAttribute("data-text",u),s&&"share"===s&&a&&(a=a.split("@").pop(),t.setAttribute("data-via",a)),o&&"large"===o&&t.setAttribute("data-size",o),i&&(i=i.split("@").pop(),i=i.split("https://twitter.com/").pop(),i=i.replace(/\s+/g,"")),r&&(r=r.split("https://twitter.com/hashtag/").pop(),r=r.replace("?src=hash",""),r=r.replace(/\s+/g,"")),s&&"follow"===s&&t.setAttribute("data-show-screen-name",l.toString());var p={share:"https://twitter.com/share",follow:"https://twitter.com/"+i,mention:"https://twitter.com/intent/tweet?screen_name="+i,hashtag:"https://twitter.com/intent/tweet?button_hashtag="+r},d=p[s],m={share:"Tweet",follow:l?"Follow @"+i:"Follow",mention:"Tweet to @"+i,hashtag:r.split("#").pop()},b=m[s];t.setAttribute("href",d),t.setAttribute("data-show-count","false"),t.className=c,t.innerHTML=b;var h=document.createElement("div");return h.appendChild(t),h.innerHTML}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.atts,a=e.editor,o=n.customClass,i=n.alignment,l=n.metaCustomId,r="vce-tweet-button",u="vce-tweet-button-inner",c="vce-tweet-button-wrapper vce",p={};"string"==typeof o&&o&&(r+=" "+o),i&&(r+=" vce-tweet-button--align-"+i),l&&(p.id=l);var d=this.applyDO("all");return g["default"].createElement("div",(0,s["default"])({},p,{className:r},a),g["default"].createElement("div",(0,s["default"])({className:c,id:"el-"+t},d),g["default"].createElement("div",{className:u})))}}]),t}(f.elementComponent));t["default"]=T},0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var o=n("./node_modules/vc-cake/index.js"),s=a(o),i=n("./twitterButton/component.js"),l=a(i),r=s["default"].getService("cook").add;r(n("./twitterButton/settings.json"),function(e){e.add(l["default"])},{css:n("./node_modules/raw-loader/index.js!./twitterButton/styles.css"),editorCss:n("./node_modules/raw-loader/index.js!./twitterButton/editor.css")},"")},"./twitterButton/settings.json":function(e,t){e.exports={designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["buttonType","shareText","tweetText","tweetAccount","hashtagTopic","username","showUsername","tweetButtonSize","alignment","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General"]},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},buttonType:{type:"dropdown",access:"public",value:"share",options:{label:"Button type",values:[{label:"Share Button",value:"share"},{label:"Follow Button",value:"follow"},{label:"Mention Button",value:"mention"},{label:"Hashtag Button",value:"hashtag"}]}},shareText:{type:"string",access:"public",value:"",options:{label:"Tweet text",description:"Add custom tweet text or leave empty to use Auto-suggested. Link to the page will be added automatically.",onChange:{rules:{buttonType:{rule:"value",options:{value:"share"}}},actions:[{action:"toggleVisibility"}]}}},tweetText:{type:"string",access:"public",value:"",options:{label:"Tweet text",onChange:{rules:{buttonType:{rule:"valueIn",options:{values:["mention","hashtag"]}}},actions:[{action:"toggleVisibility"}]}}},tweetAccount:{type:"string",access:"public",value:"",options:{label:"Recommend Account (@username)",description:"Adds via @username at the end of the tweet.",onChange:{rules:{buttonType:{rule:"value",options:{value:"share"}}},actions:[{action:"toggleVisibility"}]}}},hashtagTopic:{type:"string",access:"public",value:"#madeinvc",options:{label:"Paste a hashtag URL or #hashtag",onChange:{rules:{buttonType:{rule:"value",options:{value:"hashtag"}}},actions:[{action:"toggleVisibility"}]}}},username:{type:"string",access:"public",value:"wpbakery",options:{label:"Paste a profile URL or @username",onChange:{rules:{buttonType:{rule:"valueIn",options:{values:["follow","mention"]}}},actions:[{action:"toggleVisibility"}]}}},tweetButtonSize:{type:"dropdown",access:"public",value:"normal",options:{label:"Size",values:[{label:"Normal",value:"normal"},{label:"Large",value:"large"}]}},assetsLibrary:{access:"public",type:"string",value:["animate"]},alignment:{type:"buttonGroup",access:"public",value:"left",options:{label:"Alignment",values:[{label:"Left",value:"left",icon:"vcv-ui-icon-attribute-alignment-left"},{label:"Center",value:"center",icon:"vcv-ui-icon-attribute-alignment-center"},{label:"Right",value:"right",icon:"vcv-ui-icon-attribute-alignment-right"}]}},showUsername:{type:"toggle",access:"public",value:!0,options:{label:"Show username",onChange:{rules:{buttonType:{rule:"value",options:{value:"follow"}}},actions:[{action:"toggleVisibility"}]}}},metaDisableInteractionInEditor:{type:"toggle",access:"protected",value:!0},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only)."}},tag:{access:"protected",type:"string",value:"twitterButton"}}},"./node_modules/raw-loader/index.js!./twitterButton/editor.css":function(e,t){e.exports='[data-vcv-element-disable-interaction="true"] .vce-tweet-button-inner {\n  position: relative;\n}\n\n[data-vcv-element-disable-interaction="true"] .vce-tweet-button-inner::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 999;\n}\n\n.vce-tweet-button {\n  min-height: 1em;\n}\n'},"./node_modules/raw-loader/index.js!./twitterButton/styles.css":function(e,t){e.exports=".vce-tweet-button {\n  line-height: 1;\n}\n\n.vce-tweet-button-wrapper {\n  display: inline-block;\n}\n\n.vce-tweet-button iframe {\n  display: block;\n  vertical-align: top;\n}\n\n.vce-tweet-button--align-center {\n  text-align: center;\n}\n\n.vce-tweet-button--align-right {\n  text-align: right;\n}\n\n.vce-tweet-button--align-left {\n  text-align: left;\n}\n\n.vce-tweet-button-inner {\n  vertical-align: top;\n  display: inline-block;\n}\n"}});