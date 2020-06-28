(this["webpackJsonpcity-search"]=this["webpackJsonpcity-search"]||[]).push([[0],{20:function(e,t,a){e.exports=a(44)},25:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(14),r=a.n(c),l=(a(25),a(3)),s=a.n(l),o=a(4),u=a(15),p=a(16),m=a(17),h=a(19),d=a(18),v=function(e){var t=e.title,a=e.city,n=e.zips;return i.a.createElement("nav",{className:"navbar navbar-light",style:{textAlign:"center",backgroundColor:"black"}},i.a.createElement("a",{className:"navbar-brand",href:"#",style:{color:"white",letterSpacing:2,textDecoration:"none"}},t),i.a.createElement("p",{style:{color:"white",fontSize:17,marginRight:"1%"}},"City ",a&&a,i.a.createElement("span",{style:{marginLeft:50}},"Matches ",n&&"no result"!==n&&n.length)))},f=function(e){var t=e.view,a=e.onSelect;return i.a.createElement("select",{value:t,onChange:a,style:{marginLeft:"1.5vw"}},i.a.createElement("option",{value:"all"},"all zips"),i.a.createElement("option",{value:"states"},"states with city"),i.a.createElement("option",{value:"details"},"details of city"))},y=function(e){var t=e.onChange,a=e.onSubmit,n=e.view,c=e.onSelect;return i.a.createElement("div",{className:"input-form",style:{marginLeft:"38%",marginTop:"2vh"}},i.a.createElement("label",{style:{marginRight:5}},"City Name"),i.a.createElement("input",{placeholder:"Type in a city",onChange:t,id:"city",style:{height:40}}),i.a.createElement("button",{className:"btn btn-primary",onClick:function(e){return a(e)},style:{marginLeft:5,height:40,marginBottom:5}},"Search"),i.a.createElement(f,{view:n,onSelect:c}))},g=function(e){var t=e.zips;return"all"===e.view&&i.a.createElement("div",{className:"container",style:{textAlign:"center"}},t&&i.a.createElement("div",{className:"card",style:{textAlign:"center",height:"500px",overflowY:"scroll"}},i.a.createElement("h5",{className:"card-header"},"All Zips in City"),i.a.createElement("div",{className:"card-body"},t.map((function(e,t){return i.a.createElement("p",{className:"card-text",key:e},t+1,":",i.a.createElement("p",{style:{fontWeight:"bold"}},e))})))))},E=a(2),b=a.n(E),w=function(e){var t=e.states,a=e.view,n=e.city;return"states"===a?i.a.createElement("div",{className:"container card",style:{textAlign:"center"}},i.a.createElement("div",{className:"card-body"},i.a.createElement("h5",{className:"card-title"},"States with a city named ",n?n.toUpperCase():"None"),i.a.createElement("p",null,t.join(" | ")))):null};function S(e){var t=[];if(e)for(var a=0;a<e.length;a++)b.a.get("https://ctp-zip-api.herokuapp.com/zip/".concat(e[a])).then((function(e){e.data&&(t.includes(e.data[0].State)||t.push(e.data[0].State))}));return t}function N(e){var t=[];if(e)for(var a=0;a<e.length;a++)b.a.get("https://ctp-zip-api.herokuapp.com/zip/".concat(e[a])).then((function(e){if(e.data){var a=e.data[0],n=a.Zipcode,i=a.City,c=a.Lat,r=a.Long,l=a.EstimatedPopulation,s=a.TotalWages;t.push("".concat(n,", ").concat(i,", (").concat(c," , ").concat(r,"), ").concat(l?l+" pop":" Population Not Reported",", ").concat(s?"$"+s:" Wages Not Reported"))}}));return t}var C=function(e){var t=e.cities;return"details"===e.view&&i.a.createElement("div",{className:"container",style:{textAlign:"center",height:"500px",overflowY:"scroll"}},i.a.createElement("p",{style:{marginLeft:"120px"}},"Zip Details Order | City, Geolocation, Population, Total Wages"," "),t&&t.map((function(e){return i.a.createElement("div",{class:"card",style:{fontWeight:"bolder",width:"40rem",textAlign:"center",marginLeft:"30%"}},i.a.createElement("div",{className:"card-body"},i.a.createElement("h5",{className:"card-title",style:{fontSize:25}},"Zip: ",e.substring(0,5)),i.a.createElement("p",{className:"card-text"},e.substring(6)),i.a.createElement("p",null,"-----------------------------------------")))})))},k=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(u.a)({},e.target.id,e.target.value))},n.handleSelect=function(e){n.setState({view:e.target.value})},n.onSubmitCity=function(){var e=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.setState({view:"all"}),!n.state.city){e.next=3;break}return e.abrupt("return",n.fetchZips(n.state.city.toUpperCase()));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.fetchZips=function(e){b.a.get("https://ctp-zip-api.herokuapp.com/city/".concat(e)).then((function(e){e.data&&n.setState({zips:e.data,states:S(e.data),cities:N(e.data)})})).catch((function(e){n.setState({zips:["NO RESULT"],states:["NO RESULT"],cities:null})}))},n.state={zips:null,city:null,states:null,cities:null,view:"all"},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.city){e.next=2;break}return e.abrupt("return",this.fetchZips(this.state.city.toUpperCase()));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.zips,a=e.city,n=e.view,c=e.states,r=e.cities;return i.a.createElement(i.a.Fragment,null,i.a.createElement(v,{title:"CitySearch",zips:t,city:a}),i.a.createElement(y,{onChange:this.handleChange,onSubmit:this.onSubmitCity,view:n,onSelect:this.handleSelect}),i.a.createElement(g,{zips:this.state.zips,view:n}),i.a.createElement(w,{states:c,view:n,city:a}),i.a.createElement(C,{cities:r,view:n}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.062fe43b.chunk.js.map