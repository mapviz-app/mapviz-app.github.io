(this["webpackJsonpmapviz-app.github.io"]=this["webpackJsonpmapviz-app.github.io"]||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(36),i=a.n(o),c=(a(91),a(62)),l=a(18),m=a(21),s=a(22);function h(){var e=Object(m.a)(["\n  color: #61dafb;\n"]);return h=function(){return e},e}function u(){var e=Object(m.a)(["\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n"]);return u=function(){return e},e}function d(){var e=Object(m.a)(["\n  height: 40vmin;\n  pointer-events: none;\n  animation: "," infinite 20s linear;\n  user-select: none;\n"]);return d=function(){return e},e}function g(){var e=Object(m.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return g=function(){return e},e}function E(){var e=Object(m.a)(["\n  text-align: center;\n"]);return E=function(){return e},e}var p=s.a.div(E()),w=Object(s.b)(g()),y=s.a.img(d(),w),f=s.a.header(u()),v=s.a.a(h()),S=a(73),b=a.n(S),_=function(){return n.a.createElement(p,null,n.a.createElement(f,null,n.a.createElement(y,{src:b.a,alt:"logo"}),n.a.createElement("p",null,"This page should be removed in the near future. It is still here just to have one extra test route :P"),n.a.createElement(v,{href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};function M(){var e=Object(m.a)(["\n  max-width: 680px;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  padding: 20px;\n"]);return M=function(){return e},e}var j=s.a.div(M()),O=a(82);function x(){var e=Object(m.a)(["\n  font-size: 18px;\n  font-weight: bold;\n  border: none;\n  color: white;\n  background-color: #3167ff;\n  padding: 20px 30px;\n  border-radius: 6px;\n  cursor: pointer;\n  margin-bottom: 12px;\n"]);return x=function(){return e},e}var k=s.a.button(x()),P=function(e){var t=e.children,a=e.route,r=Object(O.a)(e,["children","route"]),o=Object(l.f)();return n.a.createElement(k,Object.assign({onClick:function(){return e=a,o.push(e);var e}},r),t)},R=function(){return n.a.createElement(j,null,n.a.createElement("h1",null,"Main page"),n.a.createElement(P,{route:"/dashboard"},"Dashboard"),n.a.createElement(P,{route:"/mapdemo"},"Map Demo"),n.a.createElement(P,{route:"/vrdemo"},"VR Demo"),n.a.createElement(P,{route:"/threejstest"},"Three.js Test"),n.a.createElement(P,{route:"/reactthreefiber"},"React Three Fiber Test"),n.a.createElement(P,{route:"/template"},"Old Template"))},C=function(){return n.a.createElement("h1",null,"Map demo page")},I=a(0);function T(){var e=Object(m.a)(["\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: red;\n"]);return T=function(){return e},e}var z=s.a.div(T()),L=function(){var e=Object(r.useRef)(null),t=new I.Scene,a=new I.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),o=new I.WebGLRenderer,i=new I.BoxGeometry,c=new I.MeshBasicMaterial({color:65280}),l=new I.Mesh(i,c);return Object(r.useEffect)((function(){o.setSize(window.innerWidth,window.innerHeight),e.current.appendChild(o.domElement),t.add(l),a.position.z=5;!function e(){requestAnimationFrame(e),l.rotation.x+=.01,l.rotation.y+=.01,o.render(t,a)}()})),n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Three.js test page"),n.a.createElement(z,{ref:e}))},B=function(){return n.a.createElement("h1",null,"Dashboard page")},G=a(9),W=a(8),D=a(35);function F(){var e=Object(m.a)(["\n  width: 100vw;\n  height: 100vh;\n"]);return F=function(){return e},e}var A=s.a.div(F()),H=function(){var e=function(e){var t=e.position,a=Object(r.useRef)(null),o=Object(r.useState)(!1),i=Object(G.a)(o,2),c=i[0],l=i[1],m=Object(r.useState)(!1),s=Object(G.a)(m,2),h=s[0],u=s[1];return Object(W.e)((function(){a.current&&(a.current.rotation.x+=.01,a.current.rotation.y+=.01)})),n.a.createElement("mesh",{position:t,ref:a,scale:h?[1.5,1.5,1.5]:[1,1,1],onClick:function(){u(!h)},onPointerOver:function(){l(!0),document.body.style.cursor="pointer"},onPointerOut:function(){l(!1),document.body.style.cursor="grab"}},n.a.createElement("boxBufferGeometry",{args:[1,1,1]}),n.a.createElement("meshStandardMaterial",{color:c?"orange":"slategray"}))};return Object(r.useEffect)((function(){return function(){document.body.style.cursor="default"}})),n.a.createElement(A,null,n.a.createElement(W.a,{onPointerOver:function(){return document.body.style.cursor="grab"}},n.a.createElement("ambientLight",null),n.a.createElement("pointLight",{position:[10,10,10]}),n.a.createElement(e,{position:[-1.2,0,0]}),n.a.createElement(e,{position:[1.2,0,0]}),n.a.createElement(D.c,null)))},J=a(68),q=a(39);function V(e){var t=Object(r.useRef)(),a=Object(q.a)("gltf/nokia_3310/scene.gltf"),o=a.nodes,i=a.materials;return n.a.createElement("group",Object.assign({ref:t},e),n.a.createElement("group",{rotation:[-Math.PI/2,0,0]},n.a.createElement("group",{position:[0,-0,0],rotation:[0,0,0]},n.a.createElement("mesh",{castShadow:!0,material:i.initialShadingGroup,geometry:o.mesh_0.geometry}))))}function $(e){var t=Object(r.useRef)(),a=Object(q.a)("gltf/cabin_in_the_woods/scene.gltf"),o=a.nodes,i=a.materials;return n.a.createElement("group",Object.assign({ref:t},e),n.a.createElement("group",{rotation:[-Math.PI/2,0,0]},n.a.createElement("group",{position:[4.08,1.01,5.9],rotation:[-.27,.6,1.93],scale:[1,1,1]}),n.a.createElement("group",{scale:[2.78,2.78,.21]},n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i.Material,geometry:o.Cabin_0.geometry}),n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.004"],geometry:o.Cabin_1.geometry}),n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.005"],geometry:o.Cabin_2.geometry}),n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.009"],geometry:o.Cabin_3.geometry})),n.a.createElement("group",{position:[.3,.01,2.35],rotation:[0,0,-Math.PI],scale:[.12,.18,.12]},n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.005"],geometry:o.cabin_2nd_floor_0.geometry}),n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.009"],geometry:o.cabin_2nd_floor_1.geometry}),n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.008"],geometry:o.cabin_2nd_floor_2.geometry}),n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.004"],geometry:o.cabin_2nd_floor_3.geometry})),n.a.createElement("group",{position:[-1.43,1.76,3.02],scale:[.5,.5,.5]},n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.001"],geometry:o.water_tank__0.geometry}),n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.003"],geometry:o.water_tank__1.geometry})),n.a.createElement("group",{position:[-2.17,-2.5,.9],rotation:[.05,0,0],scale:[.18,.18,.22]},n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.002"],geometry:o.trees005_0.geometry}),n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.003"],geometry:o.trees005_1.geometry}),n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.011"],geometry:o.trees005_2.geometry}),n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.013"],geometry:o.trees005_3.geometry}),n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.012"],geometry:o.trees005_4.geometry})),n.a.createElement("group",{position:[-2.63,2.08,.87],rotation:[-.16,-.05,.04],scale:[.18,.18,.22]},n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.012"],geometry:o.trees004_0.geometry}),n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.003"],geometry:o.trees004_1.geometry}),n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.002"],geometry:o.trees004_2.geometry})),n.a.createElement("group",{position:[4.01,.56,5.53],rotation:[-.3,.68,1.87],scale:[1,1,1]}),n.a.createElement("group",{position:[4.33,1.04,5.67],rotation:[-.21,.65,1.8],scale:[1,1,1]}),n.a.createElement("group",{position:[.77,-.12,.19],rotation:[0,0,-.8],scale:[.12,.07,.03]},n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.006"],geometry:o.stones_0.geometry})),n.a.createElement("group",{position:[-2.51,.63,.68],rotation:[-.18,.05,-.54],scale:[.14,.14,.17]},n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.013"],geometry:o.trees003_0.geometry}),n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.003"],geometry:o.trees003_1.geometry}),n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.002"],geometry:o.trees003_2.geometry}),n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.012"],geometry:o.trees003_3.geometry})),n.a.createElement("group",{position:[-2.08,.63,.48],rotation:[-.01,.02,-.23],scale:[.09,.09,.11]},n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.002"],geometry:o.trees002_0.geometry}),n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.003"],geometry:o.trees002_1.geometry})),n.a.createElement("group",{position:[2.39,1.13,.68],rotation:[-.19,-.03,-.11],scale:[.14,.14,.17]},n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.012"],geometry:o.trees001_0.geometry}),n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.003"],geometry:o.trees001_1.geometry}),n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.013"],geometry:o.trees001_2.geometry}),n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.002"],geometry:o.trees001_3.geometry}),n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.011"],geometry:o.trees001_4.geometry})),n.a.createElement("group",{position:[-1.66,-2.42,.45],scale:[.22,.22,.22]},n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.007"],geometry:o.stone004_0.geometry})),n.a.createElement("group",{position:[-1.41,-1.87,.33],rotation:[0,0,-.49],scale:[.16,.16,.12]},n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.007"],geometry:o.stone003_0.geometry})),n.a.createElement("group",{position:[2.69,-2.09,.77],rotation:[.02,-.06,-.03],scale:[.13,.13,.16]},n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.002"],geometry:o.trees_0.geometry}),n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.003"],geometry:o.trees_1.geometry}),n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.011"],geometry:o.trees_2.geometry})),n.a.createElement("group",{position:[1.52,-1.87,.33],rotation:[-.02,0,-.5],scale:[.16,.16,.12]},n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.007"],geometry:o.stone002_0.geometry})),n.a.createElement("group",{position:[1.97,-1.87,.31],rotation:[0,0,-1.65],scale:[.11,.09,.08]},n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.007"],geometry:o.stone001_0.geometry})),n.a.createElement("group",{position:[1.71,1.25,.45],rotation:[0,.01,0],scale:[.17,.17,.17]},n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.007"],geometry:o.stone_0.geometry})),n.a.createElement("group",{position:[-.29,-1.81,-.14],scale:[1.43,.87,.25]},n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i["Material.010"],geometry:o.water_0.geometry})),n.a.createElement("group",{position:[.3,-1.78,7.31],scale:[.14,.14,.14]},n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i.Root,geometry:o.cloud_0.geometry})),n.a.createElement("group",{position:[-.08,-3.7,6.9],rotation:[0,-.24,Math.PI],scale:[.15,.15,.15]},n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i.Root,geometry:o.Cloud_big_0.geometry})),n.a.createElement("group",{position:[3.09,.79,5.66],scale:[.14,.14,.14]},n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i.Root,geometry:o.cloud001_0.geometry})),n.a.createElement("group",{position:[1.99,.05,6.9],scale:[.13,.13,.13]},n.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,material:i.Root,geometry:o.cloud002_0.geometry}))))}function K(){var e=Object(m.a)(["\n  width: 100vw;\n  height: 100vh;\n"]);return K=function(){return e},e}q.a.preload("/scene.gltf"),q.a.preload("gltf/cabin_in_the_woods/scene.gltf");var N=s.a.div(K()),Q=function(){Object(D.e)({frustrum:3.75,size:.007,near:9.4,samples:17,rings:10});var e=function(){return n.a.createElement("mesh",{rotation:[-Math.PI/2,0,0],receiveShadow:!0},n.a.createElement("planeBufferGeometry",{attach:"geometry",args:[100,100]}),n.a.createElement("shadowMaterial",{attach:"material",opacity:1}))},t=function(e){var t=Object(W.g)().clock,a=Object(r.useRef)();return Object(W.e)((function(){a.current&&(a.current.position.y=e.position[1]+.5*Math.sin(t.getElapsedTime()),a.current.rotation.y+=.02)})),n.a.createElement("mesh",{ref:a},n.a.createElement(V,e),";")},a=function(t){var a=t.initialCamPosition,r=Object(W.g)().camera;return n.a.createElement(n.a.Fragment,null,n.a.createElement("group",{position:a},n.a.createElement("primitive",{object:r})),n.a.createElement(D.d,null),n.a.createElement("ambientLight",{intensity:.2}),n.a.createElement("pointLight",{position:[0,1,-20],intensity:.1}),n.a.createElement("directionalLight",{castShadow:!0,position:[15,10,10],intensity:.7}),n.a.createElement("fog",{attach:"fog",args:["white",15,25]}),n.a.createElement(e,null))};return n.a.createElement(N,null,n.a.createElement(J.b,{colorManagement:!0,shadowMap:!0},n.a.createElement(r.Suspense,{fallback:n.a.createElement(D.b,null,n.a.createElement("h1",null,"loading..."))},n.a.createElement(a,{initialCamPosition:[0,0,2]}),n.a.createElement(D.c,{maxPolarAngle:Math.PI/2.2}),n.a.createElement(D.a,{position:[-2,.5,0],castShadow:!0},n.a.createElement("meshStandardMaterial",{attach:"material",color:"orange"})),n.a.createElement(t,{position:[0,1,0],scale:[.15,.15,.15]}),n.a.createElement($,{position:[5,.25,2]}),n.a.createElement(J.a,null))))},U=function(){return n.a.createElement(c.a,null,n.a.createElement(l.c,null,n.a.createElement(l.a,{path:"/dashboard"},n.a.createElement(B,null)),n.a.createElement(l.a,{path:"/threejstest"},n.a.createElement(L,null)),n.a.createElement(l.a,{path:"/reactthreefiber"},n.a.createElement(H,null)),n.a.createElement(l.a,{path:"/vrdemo"},n.a.createElement(Q,null)),n.a.createElement(l.a,{path:"/mapdemo"},n.a.createElement(C,null)),n.a.createElement(l.a,{path:"/template"},n.a.createElement(_,null)),n.a.createElement(l.a,{path:"/"},n.a.createElement(R,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},86:function(e,t,a){e.exports=a(109)},91:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.6be8ecf0.chunk.js.map