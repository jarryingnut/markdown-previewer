(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{14:function(e,n,t){e.exports=t(25)},23:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(10),o=t.n(r),s=t(13),l=(t(23),t(24));var c=function(){var e=Object(s.a)({initialValues:{editor:"# Here you will find a wonderful React Markdown Previewer! (this is a h1 sized header!)\n\n## Below you will find several different examples of how to use this editor! (this is a h2 sized header, note the number of # used to denote what h-number is used)\n\n### Before we start, if you would like to see some of my other projects, check me out at my ) [GitHub](https://github.com/jarryingnut)!\n\nYou make `<p>inline code</p>` with backticks!\n\nYou can also make multiline code by using three backticks in the beginning and end of your code, like this:\n\n```\nclass App extends React.Componenet {\n  constructor(props) {\n    super(props)\n  }\n  render() {\n    return (\n      <span> This is so cool! </span>\n    )\n  }\n}\n```\n\n> Block Quotes will look like this!\n\n- Lists are super simple as well!\n   - Indentation will change your bullet point\n1. And you can even number your list items!\n\n**bold** text works like this...\nand _italic_ like this...\n**_or even both_** like this!\nalways be sure to ~~correct your mistakes~~\n\n\n### Images will even work here!\n![Tehc](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgRjcU7ja96B0D3S_65rP1VqkP2oFvnGdCTw&usqp=CAU)\n"},onSubmit:function(e){console.log(e)}});return i.a.createElement("div",{id:"main_wrapper"},i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",{id:"edit_wrapper",className:"editor"},i.a.createElement("div",{className:"headbar"},i.a.createElement("span",null,"Editor")),i.a.createElement("textarea",{id:"editor",class:"editor",type:"text",name:"editor",value:e.values.editor,onChange:e.handleChange}))),i.a.createElement("div",{id:"preview_wrapper",className:"preview"},i.a.createElement("div",{className:"headbar"},i.a.createElement("span",null,"Preview")),i.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:l(e.values.editor)}})))};o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(c,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a00738ba.chunk.js.map