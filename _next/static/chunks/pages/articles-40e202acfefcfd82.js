(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{9682:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/articles",function(){return i(557)}])},5975:function(e,t,i){"use strict";var n=i(5893);i(7294);var a=i(2122);let s={initial:{opacity:1},animate:{opacity:1,transition:{delay:.5,staggerChildren:.08}}},r={initial:{opacity:0,y:50},animate:{opacity:1,y:0,transition:{duration:1}}};t.Z=e=>{let{text:t,className:i=""}=e;return(0,n.jsx)("div",{className:"w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0",children:(0,n.jsx)(a.E.h1,{className:"inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl ".concat(i),variants:s,initial:"initial",animate:"animate",children:t.split(" ").map((e,t)=>(0,n.jsxs)(a.E.span,{className:"inline-block",variants:r,children:[e,"\xa0"]},e+"-"+t))})})}},4235:function(e,t,i){"use strict";var n=i(5893);i(7294);var a=i(2122);t.Z=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.E.div,{className:"fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary",initial:{x:"100%",width:"100%"},animate:{x:"0%",width:"0%"},exit:{x:["0%","100%"],width:["0%","100%"]},transition:{duration:.8,ease:"easeInOut"}}),(0,n.jsx)(a.E.div,{className:"fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light",initial:{x:"100%",width:"100%"},animate:{x:"0%",width:"0%"},exit:{x:["0%","100%"],width:["0%","100%"]},transition:{delay:.2,duration:.8,ease:"easeInOut"}}),(0,n.jsx)(a.E.div,{className:"fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark",initial:{x:"100%",width:"100%"},animate:{x:"0%",width:"0%"},exit:{x:["0%","100%"],width:["0%","100%"]},transition:{delay:.4,duration:.8,ease:"easeInOut"}})]})},557:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return pages_articles}});var n=i(5893),a=i(5975),s=i(2103),r=i(7294),l=i(9008),A=i.n(l),o=i(1664),c=i.n(o),d=i(5675),u=i.n(d),m={src:"/_next/static/media/pagination component in reactjs.030eba6a.jpg",height:720,width:1280,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAtg//xAAcEAABAwUAAAAAAAAAAAAAAAASAQQWAAITFEH/2gAIAQEAAT8AkTiWIwwWCr3XPogdf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:5},x={src:"/_next/static/media/form validation in reactjs using custom react hook.b1a35b31.png",height:720,width:1280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAhklEQVR42mNgYNAws3Kvb2jNzSstLqmqrWuprGqIS8hgcPUI8QuKjY3PyCkonzJ15py5C2bMnNvR1c/QP2v+i9dvz126mpuamZqYmVtQlpGaHRsWw1DT0vPg6cuf37+s6CpjYGBnAILwAoaCLob4lLySypbmtn7f8BRGOTNdSS2V/HaFtoUALLE0gxcCBa4AAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},h=i(2122),g=i(4960),p=i(4235);let b=(0,h.E)(u()),MovingImg=e=>{let{title:t,img:i,link:a}=e,s=(0,g.c)(0),l=(0,g.c)(0),A=(0,r.useRef)(null);return(0,n.jsxs)(c(),{href:a,target:"_blank",onMouseMove:function(e){A.current.style.display="inline-block",s.set(e.pageX),l.set(-10)},onMouseLeave:function(e){A.current.style.display="none",s.set(0),l.set(0)},children:[(0,n.jsx)("h2",{className:"capitalize text-xl font-semibold hover:underline",children:t}),(0,n.jsx)(b,{style:{x:s,y:l},intial:{opacity:0},whileInView:{opacity:1,transition:{duration:.2}},ref:A,src:i,alt:t,className:"z-20 w-96 h-auto  hidden absolute rounded-lg object-cover md:!hidden"})]})},Article=e=>{let{img:t,title:i,time:a,link:s}=e;return(0,n.jsxs)(h.E.li,{intial:{y:200},whileInView:{y:0,transition:{duration:.5,ease:"easeInOut"}},viewport:{once:!0},className:"relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4   dark:border-light dark:bg-dark dark:text-light sm:flex-col",children:[(0,n.jsx)(MovingImg,{title:i,img:t,link:s}),(0,n.jsx)("span",{className:"text-primary font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm",children:a})]})},FeaturedArticle=e=>{let{img:t,title:i,time:a,summary:s,link:r}=e;return(0,n.jsxs)("li",{className:"relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl",children:[(0,n.jsx)("div",{className:"absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl"}),(0,n.jsx)(c(),{href:r,target:"_blank",className:"w-full inline-block cursor-pointer overflow-hidden rounded-lg",children:(0,n.jsx)(b,{src:t,alt:i,className:"w-full h-auto",whileHover:{scale:1.05},transition:{duration:.2}})}),(0,n.jsx)(c(),{href:r,target:"_blank",children:(0,n.jsx)("h2",{className:"capitalize text-2xl font-bold mt-4 my-2 hover:underline xs:text-lg",children:i})}),(0,n.jsx)("p",{className:"text-sm mb-2 sm:text-hidden",children:s}),(0,n.jsx)("span",{className:"text-primary font-semibold",children:a})]})};var pages_articles=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(A(),{children:[(0,n.jsx)("title",{children:"Hasan | Articles Page"}),(0,n.jsx)("meta",{name:"description",content:"any description"})]}),(0,n.jsx)(p.Z,{}),(0,n.jsx)("main",{className:"w-full pb-16 mb-16 flex flex-col items-center justify-center overflow-hidden",children:(0,n.jsxs)(s.Z,{underConstruction:!0,className:"pt-16 ",children:[(0,n.jsx)(a.Z,{text:"I Don't Know, Satan Is Pretty Cool",className:"mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"}),(0,n.jsxs)("ul",{className:"grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1 ",children:[(0,n.jsx)(FeaturedArticle,{title:"Build A Custom Pagination Component In Reactjs From Scratch",summary:"Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.",time:"9 min read",link:"/",img:m}),(0,n.jsx)(FeaturedArticle,{title:"Build A Custom Pagination Component In Reactjs From Scratch",summary:"Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project.",time:"9 min read",link:"/",img:m})]}),(0,n.jsx)("h2",{className:"font-bold text-4xl w-full text-center my-16 mt-32",children:"All Articles"}),(0,n.jsx)("ul",{children:(0,n.jsx)(Article,{title:"Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling",time:"5 min",link:"/",img:x})})]})})]})},4960:function(e,t,i){"use strict";i.d(t,{c:function(){return useMotionValue}});var n=i(7294),a=i(3234),s=i(6014),r=i(6681);function useMotionValue(e){let t=(0,r.h)(()=>(0,a.BX)(e)),{isStatic:i}=(0,n.useContext)(s._);if(i){let[,i]=(0,n.useState)(e);(0,n.useEffect)(()=>t.on("change",i),[])}return t}}},function(e){e.O(0,[675,774,888,179],function(){return e(e.s=9682)}),_N_E=e.O()}]);