(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),s=a(6),i=a(4),o=a(7),c=a(0),l=a.n(c),u=a(5),m=a.n(u),d=(a(14),{summer:{text:"Let's hit the beach",iconName:"sun"},winter:{text:"Brrr, it's chilly",iconName:"snowflake"}}),v=function(e){var t,a,n=(t=e.lat,(a=(new Date).getMonth())>2&&a<9?t>0?"summer":"winter":t>0?"winter":"summer"),r=d[n],s=r.text,i=r.iconName;return l.a.createElement("div",{className:"season-display ".concat(n)},l.a.createElement("i",{"aria-hidden":"true",className:"icon-left ".concat(i," massive icon")}),l.a.createElement("h1",null,s),l.a.createElement("i",{"aria-hidden":"true",className:"icon-right ".concat(i," massive icon")}))},g=function(e){return l.a.createElement("div",{class:"ui active transition visible dimmer"},l.a.createElement("div",{class:"content"},l.a.createElement("div",{class:"ui text loader"},e.message)))};g.defaultProps={message:"Loading..."};var f=g,h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={lat:null,errorMessage:""},a.renderContent=function(){return!a.state.errorMessage&&a.state.lat?l.a.createElement(v,{lat:a.state.lat}):a.state.errorMessage&&!a.state.lat?l.a.createElement("div",null,"Error: ",a.state.errorMessage):l.a.createElement(f,{message:"Please allow location Access."})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition(function(t){return e.setState({lat:t.coords.latitude})},function(t){return e.setState({errorMessage:t.message})})}},{key:"render",value:function(){return this.renderContent()}}]),t}(l.a.Component);m.a.render(l.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(16)}},[[8,2,1]]]);
//# sourceMappingURL=main.9cb24a01.chunk.js.map