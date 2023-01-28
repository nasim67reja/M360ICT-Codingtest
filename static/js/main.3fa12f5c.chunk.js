(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,a,t){},153:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(138),c=t(44),i=t(83),s=t(9),m=t(6),u=t(177),o=t(141),d=t(35),E=Object(o.a)({reducerPath:"flightApi",baseQuery:Object(d.d)({baseUrl:"https://api.spacexdata.com/v3/launches"}),endpoints:function(e){return{getFlights:e.query({query:function(){return"/"}}),getFlightByNumber:e.query({query:function(e){return"/".concat(e)}})}}}),h=E.useGetFlightsQuery,g=E.useGetFlightByNumberQuery,f=t(175),v=t(154),p=t(176),y=t(179),b=function(e){var a=new Date(e),t=navigator.language;return new Intl.DateTimeFormat(t,{hour:"numeric",minute:"numeric",day:"numeric",month:"long",year:"numeric"}).format(a)},_=function(e){var a=new Date(e),t=navigator.language;return new Intl.DateTimeFormat(t,{day:"numeric",month:"long",year:"numeric"}).format(a)},k=p.a.Text,w=p.a.Title,N=function(e){var a=e.data,t=e.title;return l.a.createElement("div",null,l.a.createElement(k,{className:"bold mr-05"},t),l.a.createElement(k,null,a))},x=function(e){var a,t,n=e.flight;return l.a.createElement(f.a,{className:"shadow",hoverable:!0,bodyStyle:{padding:"1rem"}},l.a.createElement(i.b,{to:"/".concat(n.flight_number)},l.a.createElement("div",{className:"flex flex-col \r items-center"},l.a.createElement(y.a,{style:{alignSelf:"start"},color:n.launch_success?"success":"error"},n.launch_success?"Success":"Fail"),l.a.createElement("img",{style:{width:"85%"},src:n.links.mission_patch,alt:n.mission_name})),l.a.createElement("div",{className:"flex gap-05 mt-05"},l.a.createElement(w,{level:4},(a=n.mission_name,t=15,a.length>t?a.slice(0,t)+"...":a)),l.a.createElement(k,{className:"translate-y-2"},"(",n.launch_year,")")),l.a.createElement(N,{data:_(n.launch_date_utc),title:"Date:"}),l.a.createElement(N,{data:n.rocket.rocket_name,title:"Rocket:"}),l.a.createElement(N,{data:n.launch_site.site_name,title:"Launch site:"}),l.a.createElement(N,{data:n.upcoming?"Yes":"No",title:"Upcoming :"})))},S=(f.a.Meta,function(){var e=Object(n.useState)(1),a=Object(m.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)(10),s=Object(m.a)(i,2),o=s[0],d=s[1],E=Object(c.e)(function(e){return e.filter.filter}),g=h(),f=g.data,p=(g.error,g.isLoading),y=g.isSuccess,b=Object(c.e)(function(e){return e.search.search}),_=function(e,a){var t=new Date(e.launch_date_utc);return(Date.now()-t.getTime())/864e5<a},k=[];return void 0!==f&&(k=f.filter(function(e){return!0===E?!0===e.upcoming:"launch-fail"===E?!1===e.launch_success:"launch-success"===E?!0===e.launch_success:"all"===E?e:"last-week"===E?_(e,7):"last-month"===E?_(e,30):"last-year"===E?_(e,30):e}),null!==b&&(k=k.filter(function(e){return e.rocket.rocket_name===b}))),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},p&&l.a.createElement("div",{style:{minHeight:"100vh",marginTop:"5rem"}},l.a.createElement(v.a,{loading:p,avatar:!0,active:!0}),l.a.createElement(v.a,{loading:p,avatar:!0,active:!0})," ",l.a.createElement(v.a,{loading:p,avatar:!0,active:!0}),l.a.createElement(v.a,{loading:p,avatar:!0,active:!0}),l.a.createElement(v.a,{loading:p,avatar:!0,active:!0})," ",l.a.createElement(v.a,{loading:p,avatar:!0,active:!0})),y&&l.a.createElement("div",null,l.a.createElement("div",{className:"grid grid-4-cols gap-205"},k.slice((t-1)*o,o*t).map(function(e,a){return l.a.createElement(x,{key:a,flight:e})})),l.a.createElement(u.a,{style:{textAlign:"end",marginTop:"1.5rem",fontSize:"1rem"},total:k.length,pageSize:o,current:t,onChange:function(e){return r(e)},onShowSizeChange:function(e,a){return d(a)}}))))}),j=t(180),O=t(119),F=t(14),L=Object(F.e)({name:"currentFilter",initialState:{filter:null},reducers:{storeFilter:function(e,a){e.filter=a.payload}}}),T=L.actions,D=L.reducer,B=p.a.Text,z=(p.a.Link,function(){var e=Object(c.d)();return l.a.createElement(j.b,{wrap:!0},l.a.createElement(B,null,"Filter By :"),l.a.createElement(O.a,{defaultValue:"All Launch",style:{width:250},onChange:function(a){e(T.storeFilter(a))},options:[{value:"all",label:"All Launch"},{value:"last-week",label:"Last Week"},{value:"last-month",label:"Last Month"},{value:"last-year",label:"Last Year"},{value:"launch-fail",label:"Launching Fail"},{value:"launch-success",label:"Launching Success"},{value:!0,label:"Upcoming"}]}))}),A=t(174),q=t(178),C=Object(F.e)({name:"currentSearch",initialState:{search:null},reducers:{storeSearch:function(e,a){e.search=a.payload}}}),I=C.actions,M=C.reducer,R=function(){var e=Object(c.d)(),a=h(),t=a.data,n=(a.isSuccess,[]),r=[];void 0!==t&&t.forEach(function(e,a){var t=e.rocket.rocket_name;r.includes(t)||(r.push(t),n.push({value:t,label:t}))});return l.a.createElement(A.a,{dropdownMatchSelectWidth:252,style:{width:400},options:n,filterOption:!0},l.a.createElement(q.a.Search,{className:"shadow",size:"large",placeholder:"Search here by rocket name ...",enterButton:!0,onSearch:function(a){e(I.storeSearch(a))}}))},U=function(){return l.a.createElement("footer",{className:"shadow"},l.a.createElement("div",{style:{margin:"5rem 0",padding:"2rem 0"},className:"container  center"},"This is footer"))},H=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container flex justify-between my-2"},l.a.createElement(R,null),l.a.createElement(z,null)),l.a.createElement(S,null),l.a.createElement(U,null))},Q=t(181),W=t(182),Y=t(155),G=t(183),J=p.a.Text,P=p.a.Title,V=function(e){var a=e.data,t=e.title;return l.a.createElement("div",null,l.a.createElement(J,{className:"bold mr-05 text-xl"},t),l.a.createElement(J,null,a))},X=function(){var e=Object(s.o)(),a=Number(e.flight_num),t=g(a),n=t.data,r=t.isLoading,c=(t.isError,t.isSuccess);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("div",{className:"container text-xl"},r&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{minHeight:"100vh"}},l.a.createElement("div",{className:"mb-4"},l.a.createElement(v.a,{paragraph:{rows:1}})),l.a.createElement(Q.a,null,l.a.createElement(W.a,{span:12},l.a.createElement("div",{className:"center h-full"},l.a.createElement(v.a.Image,{active:!0}))),l.a.createElement(W.a,{span:12},l.a.createElement(v.a,{paragraph:{rows:8}}))))),c&&l.a.createElement(l.a.Fragment,null,l.a.createElement(Y.a,{className:"center gap-05 my-2"},l.a.createElement(G.a,null),l.a.createElement(i.b,{to:"/",style:{textDecoration:"none"}},"Back to Home")),l.a.createElement("div",{className:"flex flex-col mb-4"},l.a.createElement(P,{level:1,className:"text-2xl"},n.mission_name),l.a.createElement(j.b,{direction:"horizontal"},l.a.createElement(J,null,"Mission launch in ",n.launch_year,","),l.a.createElement(J,{type:"danger"},"Launch ",n.launch_success?"Succesfully":"Fail"))),l.a.createElement(Q.a,null,l.a.createElement(W.a,{span:12},l.a.createElement("img",{style:{width:"80%"},src:n.links.mission_patch,alt:n.mission_name})),l.a.createElement(W.a,{span:12,style:{padding:"6rem 0rem 0rem 4rem"}},l.a.createElement("div",{className:"flex flex-col gap-1 "},l.a.createElement(V,{title:"Deatails :",data:n.details}),l.a.createElement(V,{title:"Launch date :",data:b(n.launch_date_utc)}),l.a.createElement(V,{title:"Launch site :",data:n.launch_site.site_name_long}),l.a.createElement(V,{title:"Upcoming :",data:n.upcoming?"Yes":"No"}),l.a.createElement("div",{className:"flex gap-2"},l.a.createElement(V,{title:"Rocket name :",data:n.rocket.rocket_name}),l.a.createElement(V,{title:"Type :",data:n.rocket.rocket_type})),l.a.createElement("div",{className:"flex gap-1"},l.a.createElement(V,{title:"Rocket Nationality :",data:n.rocket.second_stage.payloads&&n.rocket.second_stage.payloads[0].nationality}),l.a.createElement(V,{title:"manufacturer :",data:n.rocket.second_stage.payloads&&n.rocket.second_stage.payloads[0].manufacturer})),l.a.createElement(V,{data:n.rocket.second_stage.payloads&&n.rocket.second_stage.payloads[0].customers&&n.rocket.second_stage.payloads[0].customers[0],title:"Customers :"}),l.a.createElement("div",{className:"flex gap-1 translate-y-2"},l.a.createElement("a",{style:{textDecoration:"underline"},target:"_blank",href:n.links.article_link},"Airticle"),l.a.createElement("a",{style:{textDecoration:"underline"},target:"_blank",href:n.links.wikipedia},"Wikipedia"),l.a.createElement("a",{style:{textDecoration:"underline"},target:"_blank",href:n.links.video_link},"Video")))))))),l.a.createElement(U,null))},K=function(){return l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"flex justify-between items-center"},l.a.createElement("h3",null,"SpaceX Launch Tracker"))))};var Z,$=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(K,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",element:l.a.createElement(H,null)}),l.a.createElement(s.a,{path:"/:flight_num",element:l.a.createElement(X,null)})))},ee=(t(149),t(151),t(1)),ae=Object(F.b)({reducer:(Z={},Object(ee.a)(Z,E.reducerPath,E.reducer),Object(ee.a)(Z,"filter",D),Object(ee.a)(Z,"search",M),Z),middleware:function(e){return e().concat(E.middleware)}}),te=document.getElementById("root");Object(r.createRoot)(te).render(l.a.createElement(i.a,null,l.a.createElement(c.a,{store:ae},l.a.createElement($,null))))},158:function(e,a,t){e.exports=t(153)}},[[158,2,1]]]);
//# sourceMappingURL=main.3fa12f5c.chunk.js.map