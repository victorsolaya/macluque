webpackJsonp([0],{"1/oy":function(e,a){},"9M+g":function(e,a){},"A/2Q":function(e,a,t){e.exports=t.p+"static/img/business.67af493.gif"},Biyx:function(e,a,t){e.exports=t.p+"static/img/astronaut.c2ccaa3.gif"},Ezgk:function(e,a,t){e.exports=t.p+"static/img/chef.e58122f.gif"},I0jz:function(e,a,t){e.exports=t.p+"static/img/teacher.8006d6a.png"},Id91:function(e,a){},JHXR:function(e,a){},JPH0:function(e,a){},Jmt5:function(e,a){},KzCS:function(e,a,t){e.exports=t.p+"static/img/image1.8dc6fd3.jpg"},MGnt:function(e,a){},NHnr:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t("7+uW"),n={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"main"}},[a("router-view")],1)])},staticRenderFns:[]};var s=t("VU/8")({name:"App"},n,!1,function(e){t("qb9g")},null,null).exports,o=t("/ocq"),r={name:"Header",data:function(){return{Title:"LEARNING NOT STUDYING",isDisplayed:!1}},methods:{checkDisplay:function(){"false"===this.$children[0].$el.getAttribute("aria-expanded")?this.$data.isDisplayed=!0:"none"===document.querySelector("#nav_dropdown_collapse").display&&(this.$data.isDisplayed=!1)}}},c={render:function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"v-container"},[i("div",{staticClass:"upper-container"},[i("b-navbar",{staticClass:"v-navbar",attrs:{type:"dark",variant:"primary",toggleable:""}},[i("b-navbar",{attrs:{variant:"faded",type:"light"}},[i("b-navbar-brand",{attrs:{href:"/"}},[i("img",{staticClass:"d-inline-block align-top logo",attrs:{src:t("f+bo")}})])],1),e._v(" "),i("div",{staticClass:"v-title"},[e._v("\n        "+e._s(e.Title)+"\n        ")]),e._v(" "),i("b-navbar-nav",{staticClass:"ml-auto",on:{click:e.checkDisplay}},[i("div",[i("b-navbar-toggle",{attrs:{target:"nav_dropdown_collapse"}}),e._v(" "),i("b-collapse",{attrs:{"is-nav":"",id:"nav_dropdown_collapse"}},[i("b-navbar-nav",{class:{"v-wrap":e.isDisplayed}},[i("b-nav-item",{attrs:{to:"/"}},[e._v("Main")]),e._v(" "),i("b-nav-item",{attrs:{to:"/about"}},[e._v("About")]),e._v(" "),i("b-nav-item",{attrs:{to:"/about"}},[e._v("Contacto")]),e._v(" "),i("b-nav-item",{attrs:{to:"/about"}},[e._v("Horarios")]),e._v(" "),i("b-nav-item",{attrs:{to:"/about"}},[e._v("Localización")]),e._v(" "),i("b-nav-item",{attrs:{to:"/about"}},[e._v("Precios")]),e._v(" "),i("b-nav-item-dropdown",{attrs:{text:"Condiciones generales",right:""}},[i("b-dropdown-item",{attrs:{href:"#"}},[e._v("Condiciones generales")]),e._v(" "),i("b-dropdown-item",{attrs:{href:"#"}},[e._v("Condiciones generales privadas")])],1)],1)],1)],1)])],1)],1)])},staticRenderFns:[]};var l=t("VU/8")(r,c,!1,function(e){t("JHXR")},"data-v-27bd6688",null).exports,d=(t("v2ns"),t("7QTg")),p={name:"ImageGallery",components:{swiper:d.swiper,swiperSlide:d.swiperSlide},data:function(){return{images:[{tag:t("KzCS")},{tag:t("tGCg")},{tag:t("z+uz")},{tag:t("w5t1")}],swiperOption:{spaceBetween:30,centeredSlides:!0,autoplay:{delay:4e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},mousewheel:!0,keyboard:{enabled:!0},loop:!0,slidesPerView:1}}}},u={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"v-gallery"},[a("swiper",{attrs:{options:this.swiperOption}},[this._l(this.images,function(e,t){return a("swiper-slide",{key:t},[a("img",{staticClass:"v-image-tag",attrs:{src:e.tag}})])}),this._v(" "),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var g={name:"MainPage",components:{Header:l,ImageGallery:t("VU/8")(p,u,!1,function(e){t("JPH0")},null,null).exports}},m={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",[a("Header"),this._v(" "),a("ImageGallery")],1)},staticRenderFns:[]};var v=t("VU/8")(g,m,!1,function(e){t("MGnt")},null,null).exports,f={name:"AboutMe",components:{swiper:d.swiper,swiperSlide:d.swiperSlide},data:function(){return{timeline:[{text:"En 1989 comencé mis estudios de Filología Inglesa en la Universidad Autónoma de Madrid. Me licencié en 1993.",tag:t("s8Ug")},{text:"Realizo trabajos de traducción escrita y de conferencias. He corregido las pruebas de imprenta de la European Journal of Psychological Assessment durante 7 años..",tag:t("bBh4")},{text:"He estado 11 años en el hospital Gregorio Marañón dando clase tanto a médicos como a técnicos.",tag:t("ii/X")},{text:"Dentro del Turismo y la Hostelería he impartido cursos de Guía de Ruta, Informador Turístico, Recepcionista de Hotel, Atención al Público, Empleado Agencia de Viajes, Azafata de Congresos, Camarera de Piso, Cocinero, Gobernanta ...",tag:t("Ezgk")},{text:"Relacionado con el mundo de los negocios (Business English): Inglés Financiero, Inglés Comercial, Lengua Extranjera Profesional para la Gestión Administrativa en la Relación con el Cliente, Interacciones Orales en el Entorno Empresarial ...",tag:t("A/2Q")},{text:"E incluso he impartido un curso de Inglés Técnico Aeronáutico además de innumerables cursos de inglés básico, medio y avanzado.",tag:t("Biyx")},{text:"Las necesidades de mis alumnos me han animado a escribir numerosos libros para su uso en el aula. He desarrollado varios escritos con explicaciones gramaticales dirigidas a diferentes niveles de aprendizaje, y otros libros con un nivel enfocado a cada alumno.",tag:t("ddrq"),width:"200px",height:"200px"},{text:"Pero mi gran pasión es la enseñanza. Llevo dedicándome a impartir clases de inglés desde que comencé mis estudios universitarios. La docencia me aporta una gran satisfacción personal y profesional.",tag:t("Yhq7")},{text:"Llevo más de 25 años convirtiendo mi vocación en mi profesión: la enseñanza.",tag:t("I0jz")},{text:"Esta gran dedicación hace que mis alumnos, aprendan disfrutando en mis clases. Se pierde el miedo al inglés.",tag:t("ja21")},{text:"En 2013 y gracias a la ayuda de mis hermanos nació Macluque School of English. Para estos tres cursos ya he elaborado más de 25 libros con un equilibrio perfecto entre use of English, reading, writing, listening & speaking. Están diseñados para superar los exámenes de Cambridge.",tag:t("V8mV")}],swiperOption:{spaceBetween:30,centeredSlides:!0,autoplay:{delay:6e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},mousewheel:!0,keyboard:{enabled:!0},loop:!0,slidesPerView:1}}}},b={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("swiper",{attrs:{options:e.swiperOption}},e._l(e.timeline,function(a,i){return t("swiper-slide",{key:i},[t("div",{attrs:{clas:"v-text"}},[t("p",{staticClass:"p-text"},[e._v("\n            "+e._s(a.text)+"\n          ")])]),e._v(" "),t("div",{staticClass:"image-container"},[t("img",{staticClass:"slides",attrs:{src:a.tag}})])])}))},staticRenderFns:[]};var h={name:"About",components:{Header:l,AboutMe:t("VU/8")(f,b,!1,function(e){t("TmzG")},null,null).exports},data:function(){return{name:"Carmen Sanchez Luque",address:"MACLUQUE School of English. Tesoro, 14 - Malasaña"}}},_={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",[a("Header"),this._v(" "),a("div",{staticClass:"about"},[a("div",{staticClass:"div-name"},[a("p",{staticClass:"name"},[this._v(this._s(this.name))])]),this._v(" "),a("AboutMe")],1)],1)},staticRenderFns:[]};var x=t("VU/8")(h,_,!1,function(e){t("Plfq")},null,null).exports;i.a.use(o.a);var w=new o.a({routes:[{path:"/",name:"Inicio",component:v},{path:"/about",name:"About",component:x}]}),y=t("e6fC");t("Jmt5"),t("9M+g");i.a.use(y.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:w,components:{App:s},template:"<App/>"})},Plfq:function(e,a){},TmzG:function(e,a){},V8mV:function(e,a,t){e.exports=t.p+"static/img/macluque.81962a3.jpg"},Yhq7:function(e,a,t){e.exports=t.p+"static/img/teacher.27d2ee8.gif"},bBh4:function(e,a,t){e.exports=t.p+"static/img/correctexams.31454fe.gif"},ddrq:function(e,a,t){e.exports=t.p+"static/img/writer.6cf816d.gif"},"f+bo":function(e,a,t){e.exports=t.p+"static/img/macluque-logo.305081a.jpg"},"ii/X":function(e,a,t){e.exports=t.p+"static/img/doctor.7513e12.gif"},ja21:function(e,a,t){e.exports=t.p+"static/img/nofear.26fdd3a.gif"},qb9g:function(e,a){},s8Ug:function(e,a,t){e.exports=t.p+"static/img/graduation.bd8a202.gif"},tGCg:function(e,a,t){e.exports=t.p+"static/img/image2.a9d9bbb.jpg"},v2ns:function(e,a){},w5t1:function(e,a,t){e.exports=t.p+"static/img/image4.f873943.jpg"},"z+uz":function(e,a,t){e.exports=t.p+"static/img/image3.83ae49f.jpg"},zj2Q:function(e,a){}},["NHnr"]);
//# sourceMappingURL=app.5fa1a1023051fae98fb8.js.map