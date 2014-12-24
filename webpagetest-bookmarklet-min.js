!function(){var a=React.createClass({displayName:"WPTForm",fieldsDefaults:[{key:"k",label:"API Key",value:"",isRequired:!0},{key:"location",label:"Location + browser",value:"Dulles_MotoE",isRequired:!0},{key:"runs",label:"Number of runs",value:1,isRequired:!0},{key:"fvonly",label:"First and repeat view?",type:"radio",value:0,options:[{value:0,label:"Yes"},{value:1,label:"No"}]},{key:"video",label:"Video",value:1},{key:"url",label:"URL to test",value:"",isRequired:!0},{key:"label",label:"Label",value:""}],getInitialState:function(){var a,b=this.fieldsDefaults;for(a=0;a<b.length;a++)b[a].value=d.get(b[a].key)||b[a].value;return{fields:b}},render:function(){var a=this.state.fields.map(function(a){return React.createElement(b,{key:a.key,id:a.key,label:a.label,value:a.value,type:a.type,options:a.options,required:a.isRequired})});return React.createElement("form",{style:g.form,onSubmit:this.handleSubmit,onChange:this.handleChange},React.createElement(c,null),React.createElement("h2",{style:g.h2},"Run WebPageTest for this page"),a,React.createElement("button",{type:"submit",style:g.button},"Test it"))},handleChange:function(){d.set(event.target.name,event.target.value)},handleSubmit:function(a){var b,c="http://www.webpagetest.org/runtest.php?",d="";for(a.preventDefault(),b=0;b<this.state.options.length;b++)d+="&"+this.state.options[b].key+"="+encodeURIComponent(this.state.options[b].value);window.open(c+d.substr(1)),React.unmountComponentAtNode(h)}}),b=React.createClass({displayName:"WPTField",getInitialState:function(){return{value:this.props.value}},handleChange:function(a){this.setState({value:a.target.value})},render:function(){var a,b=this.props.type||"text",c=!!this.props.isRequired,d=this.props.id,e=d,f=this.props.options||[{value:this.state.value,label:this.props.label}],h="radio"===b&&f.length>1;return a=f.map(function(a){return h&&(d=this.props.id+"["+a.value+"]"),React.createElement("label",{style:g.label},h?"":a.label,React.createElement("input",{type:b,onChange:this.handleChange,style:g.input[b],id:d,name:e,defaultValue:a.value,required:c,defaultChecked:h&&parseInt(this.state.value,10)===parseInt(a.value,10)}),h?a.label:"")},this),React.createElement("p",null,h?this.props.label:"",a)}}),c=React.createClass({displayName:"WPTCloseButton",handleClick:function(){React.unmountComponentAtNode(h)},render:function(){return React.createElement("button",{style:g.closeButton,onClick:this.handleClick},"Close",React.createElement("svg",{style:g.closeButtonIcon,viewPort:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},React.createElement("line",{x1:"1",y1:"11",x2:"11",y2:"1",stroke:"black","stroke-width":"2"}),React.createElement("line",{x1:"1",y1:"1",x2:"11",y2:"11",stroke:"black","stroke-width":"2"})))}}),d=function(){var a=location.hostname.indexOf("codepen.io")>-1,b=JSON.parse(localStorage.wpt_options||"{}"),c={url:function(){var b=location.href;return a&&(b=location.origin.replace(/(https?:\/\/)codepen.io/,"$1s.codepen.io"),b+=location.pathname.replace("/pen/","/debug/")),b},label:function(){var a=document.title;return a||(a=document.querySelector("h1"),a=null!==a?a.textContent:""),a}};return{get:function(a){return c[a]?c[a]():b[a]},set:function(a,c){b[a]=c,"fvonly"===a&&console.log(b[a]),localStorage.wpt_options=JSON.stringify(b)}}}(),e='"Myriad Pro", "Myriad Set Pro", Myriad, "Helvetica Neue", Helvetica, sans-serif',f="rgb(251, 144, 8)",g={form:{position:"fixed",width:"50%",minWidth:"320px",maxWidth:"500px",bottom:"0",left:"50%",WebkitTransform:"translate(-50%, 0)",transform:"translate(-50%, 0)",boxShadow:"0 -1px 3px rgba(0, 0, 0, 0.2)",backgroundColor:"white",padding:"0 1em 1em",margin:"0 auto",fontSize:"14px",fontFamily:e,textShadow:"none"},h2:{color:"rgb(60, 60, 60)",lineHeight:"1.2",textShadow:"inherit",margin:"0.5em 0"},button:{fontFamily:e,fontSize:"1.25em",backgroundColor:f,color:"white",border:"none",borderRadius:"0.25em",padding:"0.25em 0.55em",marginTop:"0.5em",textShadow:"inherit"},label:{overflow:"hidden",lineHeight:"1.5",color:"rgb(90, 90, 90)",textShadow:"inherit"},input:{text:{"float":"right",padding:"0.2em 0.4em",width:"60%",boxModel:"border-box"},radio:{margin:"0 0.5em 0 1em"}},closeButton:{position:"absolute",right:"0.25em",top:"0.85em",width:"20px",height:"0",padding:"20px 0 0",border:"0",backgroundColor:"white",overflow:"hidden",cursor:"pointer"},closeButtonIcon:{position:"absolute",top:"2px",left:"2px",width:"18px",height:"18px"}},h=document.createElement("div");document.body.appendChild(h),React.render(React.createElement(a,null),h)}();