"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[645],{8068:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"components/subscribe","title":"Subscribe","description":"The subscribe component is used to subscribe to MQTT topics and process incoming messages. It takes a topic","source":"@site/docs/components/subscribe.md","sourceDirName":"components","slug":"/components/subscribe","permalink":"/mqtt-mimic/docs/components/subscribe","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/subscribe.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Publish","permalink":"/mqtt-mimic/docs/components/publish"},"next":{"title":"Action","permalink":"/mqtt-mimic/docs/components/action"}}');var r=n(4848),c=n(8453);const l={sidebar_position:3},o="Subscribe",t={},d=[{value:"Basic Syntax",id:"basic-syntax",level:2},{value:"Properties",id:"properties",level:2},{value:"1. <code>topicFilter</code>",id:"1-topicfilter",level:3},{value:"2. <code>handler</code>",id:"2-handler",level:3},{value:"The msg Object",id:"the-msg-object",level:3},{value:"Key Features",id:"key-features",level:2},{value:"Usage Examples",id:"usage-examples",level:2},{value:"1. Simple Subscription",id:"1-simple-subscription",level:3},{value:"2. Dynamic Filter",id:"2-dynamic-filter",level:3},{value:"3. Wildcard Subscription",id:"3-wildcard-subscription",level:3},{value:"4. Controlling Actions",id:"4-controlling-actions",level:3},{value:"Notes",id:"notes",level:2}];function a(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"subscribe",children:"Subscribe"})}),"\n",(0,r.jsx)(s.p,{children:"The subscribe component is used to subscribe to MQTT topics and process incoming messages. It takes a topic\nfilter and a closure that runs for each message, enabling subscription and handling with details about the topic and content."}),"\n",(0,r.jsx)(s.h2,{id:"basic-syntax",children:"Basic Syntax"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"subscribe"})," block specifies a topic filter and a handler:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-groovy",children:'subscribe("greetings") { msg ->\n    println "Received: ${msg.payload}"\n}\n'})}),"\n",(0,r.jsxs)(s.p,{children:["Subscribes to the ",(0,r.jsx)(s.code,{children:"greetings"})," topic and prints the message content."]}),"\n",(0,r.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(s.h3,{id:"1-topicfilter",children:["1. ",(0,r.jsx)(s.code,{children:"topicFilter"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Description"}),": The MQTT topic filter (supports ",(0,r.jsx)(s.code,{children:"+"})," and ",(0,r.jsx)(s.code,{children:"#"})," or dynamic Groovy expressions)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Type"}),": String."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Required"}),": Yes."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Example"}),": ",(0,r.jsx)(s.code,{children:'"mqtt-mimic/${env.prefix}/greetings"'})]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"2-handler",children:["2. ",(0,r.jsx)(s.code,{children:"handler"})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Description"}),": A closure to process messages, receiving an msg object."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Type"}),": Closure."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Required"}),": Yes."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Example"}),": ",(0,r.jsx)(s.code,{children:"{ msg -> println msg.payload }"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"the-msg-object",children:"The msg Object"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"msg"})," object is passed to the handler and contains:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"topic"}),": Topic name (string)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"payload"}),": Message content (string, UTF-8)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"qos"}),": QoS level (0, 1, or 2)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"retain"}),": Retained message flag (",(0,r.jsx)(s.code,{children:"true"}),"/",(0,r.jsx)(s.code,{children:"false"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Example"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-groovy",children:'subscribe("test/#") { msg ->\n    println "${msg.topic}: ${msg.payload}"\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"key-features",children:"Key Features"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Filters"}),": Supports ",(0,r.jsx)(s.code,{children:"+"})," (single level) and ",(0,r.jsx)(s.code,{children:"#"})," (all sublevels), e.g., ",(0,r.jsx)(s.code,{children:"sensors/#"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Dynamic"}),": Filters can use Groovy expressions, like ",(0,r.jsx)(s.code,{children:"${env.prefix}"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Processing"}),": The handler gets ",(0,r.jsx)(s.code,{children:"msg"})," for custom logic."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Interaction"}),": Call ",(0,r.jsx)(s.code,{children:"doAction"}),", ",(0,r.jsx)(s.code,{children:"activateAction"}),", or ",(0,r.jsx)(s.code,{children:"deactivateAction"})," from the handler."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,r.jsx)(s.h3,{id:"1-simple-subscription",children:"1. Simple Subscription"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-groovy",children:'subscribe("greetings") { msg ->\n    println msg.payload\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"2-dynamic-filter",children:"2. Dynamic Filter"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-groovy",children:'env.prefix = UUID.randomUUID().toString()\nsubscribe("mqtt-mimic/${env.prefix}/greetings") { msg ->\n    println "Topic: ${msg.topic}, Data: ${msg.payload}"\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"3-wildcard-subscription",children:"3. Wildcard Subscription"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-groovy",children:'subscribe("sensors/#") { msg ->\n    println "${msg.topic}: ${msg.payload}"\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"4-controlling-actions",children:"4. Controlling Actions"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-groovy",children:'env.prefix = UUID.randomUUID().toString()\npublish("sendHello") {\n    topic = "mqtt-mimic/${env.prefix}/greetings"\n    payload = "Hello!"\n    schedule { interval = 5_000; startImmediately = false }\n}\nsubscribe("mqtt-mimic/${env.prefix}/on") { msg ->\n    activateAction("sendHello")\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Required"}),": Both ",(0,r.jsx)(s.code,{children:"topicFilter"})," and ",(0,r.jsx)(s.code,{children:"handler"})," must be provided."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Filters"}),": Use ",(0,r.jsx)(s.code,{children:"+"})," and ",(0,r.jsx)(s.code,{children:"#"})," carefully; check ",(0,r.jsx)(s.code,{children:"msg.topic"})," if needed."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Timeout"}),": Subscription has a 10-second timeout; check logs for errors."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>o});var i=n(6540);const r={},c=i.createContext(r);function l(e){const s=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);