(this.webpackJsonpcart=this.webpackJsonpcart||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,,,,,,,function(e,t,n){e.exports=n.p+"static/media/shopping-cart.6fedb436.svg"},function(e,t,n){e.exports=n.p+"static/media/loading.93ae4b6f.svg"},,,function(e,t,n){e.exports=n(39)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(20),o=n.n(r),i=(n(30),n(3)),l=n(4),s=n(9),u=n(8),m=n(10),d=(n(13),n(31),n(21)),p=n.n(d),h=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"header centre-content-vertically noselect"},c.a.createElement("h1",{className:"flip-image"},"\ud83d\uded2 "),c.a.createElement("h1",null," \xa0\xa0\xa0Emoji Cart Items"),c.a.createElement("img",{className:"cart-img noselect",src:p.a,alt:"cart icon"}),c.a.createElement("p",{className:"cart-count"},this.props.totalQnty))}}]),t}(c.a.Component),f=(n(32),n(33),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return(c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"cart-item-container"},c.a.createElement("div",{className:"cart-img centre-content-both "},c.a.createElement("h1",null,this.props.product.img)),c.a.createElement("div",{className:"cart-details-cntr"},c.a.createElement("h4",null,this.props.product.title),c.a.createElement("p",null,"Price: ",this.props.product.price),c.a.createElement("p",null,"Quantity: ",this.props.product.qty),c.a.createElement("div",{className:"cart-btns-cntr centre-content-vertically noselect"},c.a.createElement("img",{alt:"add",src:"https://image.flaticon.com/icons/svg/1665/1665578.svg",className:"action-icons",onClick:function(){return e.props.updateQty("+",e.props.product.id)}}),c.a.createElement("img",{alt:"minus",src:"https://image.flaticon.com/icons/svg/1665/1665612.svg",className:"action-icons",onClick:function(){return e.props.updateQty("-",e.props.product.id)}}),c.a.createElement("img",{alt:"delete",src:"https://image.flaticon.com/icons/svg/1214/1214428.svg",className:"action-icons",onClick:function(){return e.props.removeProduct(e.props.product.id)}})))),c.a.createElement("div",{className:"cart-item-dividor"})))}}]),t}(c.a.Component)),v=n(22),y=n.n(v),E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=c.a.createElement("div",{className:"loading-icon"},c.a.createElement("img",{src:y.a,alt:"loading icon"})),n=c.a.createElement("div",{className:"empty-state"},c.a.createElement("h4",null,"\ud83d\udecd\ufe0f",c.a.createElement("br",null)," Cart is Empty.",c.a.createElement("br",null),"Add some emojis!"));return c.a.createElement("div",{className:"cart-container"},this.props.isLoading?t:null,!1===this.props.isLoading&&0===this.props.products.length?n:null,this.props.products.map((function(t){return c.a.createElement(f,{key:t.id,product:t,updateQty:e.props.updateQty,removeProduct:e.props.removeProduct})})))}}]),t}(c.a.Component),j=(n(34),n(35),n(23)),b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"checkEmoji",value:function(){var e=document.querySelector("#emoji-field");2!==document.querySelector("#emoji-field").value.length&&(e.value="")}},{key:"render",value:function(){return window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#emoji-button"),t=new j.a({emojisPerRow:7,rows:5,position:"bottom-start",emojiSize:"30px",autoFocusSearch:!1});t.on("emoji",(function(e){document.querySelector("#emoji-field").value=e.emoji,document.querySelector("#emoji-title").value=e.name,document.querySelector("#emoji-price").value=Math.trunc(10*Math.random()+1),document.querySelector("#emoji-qty").value=Math.trunc(5*Math.random()+1)})),e.addEventListener("click",(function(){t.pickerVisible?t.hidePicker():t.showPicker(e)}))})),c.a.createElement("div",{className:"add-emoji-container centre-content-both "},c.a.createElement("main",{className:"centre-content-both "},c.a.createElement("form",{onSubmit:this.props.addEmoji.bind(this.props.AppThis),autoComplete:"off"},c.a.createElement("div",{className:"emoji-container"},c.a.createElement("input",{id:"emoji-field",type:"text",name:"img",placeholder:"Emoji",required:!0,onChange:this.checkEmoji.bind(this)}),c.a.createElement("button",{type:"button",id:"emoji-button"},"\ud83d\ude42")),c.a.createElement("input",{type:"text",name:"title",id:"emoji-title",placeholder:"Title",required:!0}),c.a.createElement("input",{type:"number",name:"price",id:"emoji-price",placeholder:"Price",min:"0",required:!0}),c.a.createElement("input",{type:"number",name:"qty",id:"emoji-qty",placeholder:"Quantity",min:"1",required:!0}),c.a.createElement("input",{className:"centre-content-both submit-btn",type:"submit",value:"ADD"}))))}}]),t}(c.a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=c.a.createElement("h1",{className:"total-price"},"Total: \ud83d\udcb2 ",this.props.totalPrice);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"side-menu-container"},c.a.createElement(b,{addEmoji:this.props.addEmoji,AppThis:this.props.AppThis}),window.innerWidth>768?e:null),window.innerWidth<=768?e:null)}}]),t}(c.a.Component),O=n(17);n(40);O.a.initializeApp({apiKey:"AIzaSyBRAkphPuvODztms3IbK_S-_BR3_LVLgyE",authDomain:"emoji-cart.firebaseapp.com",projectId:"emoji-cart",storageBucket:"emoji-cart.appspot.com",messagingSenderId:"284812849950",appId:"1:284812849950:web:81787c79c4d7185d524f0f"});var k=O.a,N=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).updateQty=function(t,n){var a,c=e.state.products;c.forEach((function(e,t){e.id===n&&(a=t)})),"+"===t?c[a].qty+=1:c[a].qty>0&&(c[a].qty-=1);var r=c[a].qty,o=c[a].id;k.firestore().collection(e.collectionID).doc(o).update({qty:r}).then((function(){console.log("Document successfully updated!")})).catch((function(e){console.error("Error updating document: ",e)}))},e.removeProduct=function(t){var n,a=e.state.products;a.forEach((function(e,a){e.id===t&&(n=a)}));var c=a[n].id;k.firestore().collection(e.collectionID).doc(c).delete().then(console.log("Emoji removed successfully.")).catch((function(e){return console.log("Error occured: ",e)}))},e.state={products:[],isLoading:!0},e.collectionID="products",e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.firestore().collection(this.collectionID).onSnapshot((function(t){var n=t.docs.map((function(e){var t=e.data();return t.id=e.id,t}));e.setState({products:n,isLoading:!1})}))}},{key:"getTotalQnty",value:function(){return this.state.products.reduce((function(e,t){return e+t.qty}),0)}},{key:"getTotalPrice",value:function(){return this.state.products.reduce((function(e,t){return e+t.qty*t.price}),0)}},{key:"addEmoji",value:function(e){e.preventDefault();var t=new FormData(e.target),n={},a=!0,c=!1,r=void 0;try{for(var o,i=t.entries()[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var l=o.value;Number.isInteger(1*l[1])&&(l[1]=1*l[1]),n[l[0]]=l[1]}}catch(s){c=!0,r=s}finally{try{a||null==i.return||i.return()}finally{if(c)throw r}}k.firestore().collection(this.collectionID).doc(""+Date.now()).set(n).catch((function(e){return console.log("Error occured: ",e)})),e.target.reset()}},{key:"render",value:function(){var e=c.a.createElement(E,{isLoading:this.state.isLoading,products:this.state.products,updateQty:this.updateQty,removeProduct:this.removeProduct}),t=c.a.createElement(g,{totalPrice:this.getTotalPrice(),addEmoji:this.addEmoji,AppThis:this}),n=c.a.createElement(c.a.Fragment,null,t," ",e),a=c.a.createElement(c.a.Fragment,null,e," ",t);return c.a.createElement("div",{className:"App"},c.a.createElement(h,{totalQnty:this.getTotalQnty()}),window.innerWidth<=768?n:a)}}]),t}(c.a.Component),q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),q()}],[[25,1,2]]]);
//# sourceMappingURL=main.390ab0d1.chunk.js.map