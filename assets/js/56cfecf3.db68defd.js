"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,y=d["".concat(p,".").concat(u)]||d[u]||m[u]||l;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const l={},a="Collecting Metrics",i={unversionedId:"operator-guides/collecting-metrics",id:"operator-guides/collecting-metrics",title:"Collecting Metrics",description:"Airbyte supports two ways to collect metrics - using datadog or open telemetry.",source:"@site/../docs/operator-guides/collecting-metrics.md",sourceDirName:"operator-guides",slug:"/operator-guides/collecting-metrics",permalink:"/operator-guides/collecting-metrics",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/operator-guides/collecting-metrics.md",tags:[],version:"current",frontMatter:{}},p={},s=[{value:"Example",id:"example",level:2},{value:"Run Opentelemetry and Airbyte locally",id:"run-opentelemetry-and-airbyte-locally",level:3},{value:"Run Opentelemetry and Airbyte on kubernetes",id:"run-opentelemetry-and-airbyte-on-kubernetes",level:3},{value:"Metrics",id:"metrics",level:2}],c={toc:s};function m(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"collecting-metrics"},"Collecting Metrics"),(0,o.kt)("p",null,"Airbyte supports two ways to collect metrics - using datadog or open telemetry.\nFill in ",(0,o.kt)("inlineCode",{parentName:"p"},"METRIC_CLIENT")," field in ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file to get started!"),(0,o.kt)("h1",{id:"open-telemetry"},"Open Telemetry"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," change ",(0,o.kt)("inlineCode",{parentName:"li"},"METRIC_CLIENT")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"otel"),". "),(0,o.kt)("li",{parentName:"ol"},"Similarly, configure ",(0,o.kt)("inlineCode",{parentName:"li"},"OTEL_COLLECTOR_ENDPOINT")," to tell Airbyte where to send metrics RPC to.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("h3",{id:"run-opentelemetry-and-airbyte-locally"},"Run Opentelemetry and Airbyte locally"),(0,o.kt)("p",null,"In this example we will run Airbyte locally along with an Open Telemetry Collector. The Open telemetry collector\nwill expose port 4317 to the localhost as the receiving endpoint."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(78892).Z,width:"1382",height:"342"})),(0,o.kt)("p",null,"Steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Setting up Open telemetry. In this example we will use the repository from ",(0,o.kt)("inlineCode",{parentName:"li"},"opentelemetry-java-docs"),".\nRun the following commands to have it up and running.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  git clone https://github.com/open-telemetry/opentelemetry-java-docs\n  cd opentelemetry-java-docs/otlp/docker\n  docker-compose up\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Configure Airbyte ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file. ",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"METRIC_CLIENT")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"otel")," to indicate Airbyte to use Open telemetry to emit metric data."),(0,o.kt)("li",{parentName:"ol"},"Change ",(0,o.kt)("inlineCode",{parentName:"li"},"OTEL_COLLECTOR_ENDPOINT")," to ",(0,o.kt)("inlineCode",{parentName:"li"},'"http://host.docker.internal:4317"')," because Open Telemetry\nCollector has enabled port forward from localhost:4317 to container port 4317. To send data to Collector container port 4317, we want to need to export data to physical machine's localhost:4317, which in docker will be represented as ",(0,o.kt)("inlineCode",{parentName:"li"},"http://host.docker.internal:4317"),". ",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Do ",(0,o.kt)("em",{parentName:"p"},"not")," use ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:4317")," or you will send data to the same container where Airbyte Worker is running."))),(0,o.kt)("li",{parentName:"ol"},"Start Airbyte server by running ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose up")," under airbyte repository. Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:8000")," to visit Airbyte and start a sync, then go to ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:9090")," to access Prometheus - you should be able to see the metrics there. Alternatively, ")))),(0,o.kt)("h3",{id:"run-opentelemetry-and-airbyte-on-kubernetes"},"Run Opentelemetry and Airbyte on kubernetes"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Prerequisite:")," Read ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/docs/deploying-airbyte/on-kubernetes.md"},"https://github.com/airbytehq/airbyte/blob/master/docs/deploying-airbyte/on-kubernetes.md")," to understand how to start Airbyte on Kubernetes")),(0,o.kt)("p",null,"We will use ",(0,o.kt)("inlineCode",{parentName:"p"},"stable")," in this example."),(0,o.kt)("p",null,"Steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run open telemetry collector in the same Kubernetes context. Here we follow example in ",(0,o.kt)("a",{parentName:"li",href:"https://opentelemetry.io/docs/collector/getting-started/#kubernetes"},"OpenTelemetry doc")),(0,o.kt)("li",{parentName:"ol"},"edit ",(0,o.kt)("inlineCode",{parentName:"li"},"kube/overlays/stable/.env")," and add the following lines:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-aidl"},"METRIC_CLIENT=otel\nOTEL_COLLECTOR_ENDPOINT=<address>\n")),(0,o.kt)("p",null,"If you started open telemetry collector in the link above, the address should be ",(0,o.kt)("inlineCode",{parentName:"p"},"http://otel-collector:4317"),".\nNote the format - unlike the base ",(0,o.kt)("inlineCode",{parentName:"p"},".env"),", there is no quote in ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file under kubernetes."),(0,o.kt)("h1",{id:"datadog"},"Datadog"),(0,o.kt)("p",null,"TBD"),(0,o.kt)("h2",{id:"metrics"},"Metrics"),(0,o.kt)("p",null,"Visit ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-metrics/metrics-lib/src/main/java/io/airbyte/metrics/lib/OssMetricsRegistry.java"},"OssMetricsRegistry.java")," to get a complete list of metrics Airbyte is sending."))}m.isMDXComponent=!0},78892:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/open_telemetry_example-f90c71d6f637399884ea40d4aff8874f.png"}}]);