// Compiled by ClojureScript 1.9.229 {}
goog.provide('present.core');
goog.require('cljs.core');
goog.require('patterning.sshapes');
goog.require('patterning.view');
goog.require('patterning.groups');
goog.require('patterning.library.std');
goog.require('reagent.core');
goog.require('patterning.color');
goog.require('sablono.core');
goog.require('patterning.layouts');
cljs.core.enable_console_print_BANG_.call(null);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"present.core","present.core",-524388045),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Clojure\n\n## O que \u00E9 Clojure?\n\n* Lisp\n* \"Clean Slate\"\n* Bom Gosto\n* Acima de Java ou Javascript etc.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"present.core","present.core",-524388045),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Lisp\n\n### A mitologia e a realidade\n\n![Lisp](https://imgs.xkcd.com/comics/lisp_cycles.png)\n\n\n![Lisp](https://imgs.xkcd.com/comics/lisp.jpg)\n\n ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"present.core","present.core",-524388045),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Lisp\n\n* Eterno\n* Elegante\n* Poderosa\n* Muitos Par\u00EAnteses\n* Impratic\u00E1vel (mas o Clojure solucionar este ultima)",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"present.core","present.core",-524388045),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Programa\u00E7\u00E3o Funcional\n\nFun\u00E7\u00F5es s\u00E3o \"cidad\u00E3os de primeira classe\"\n\n* Pode ser argumentos pra outras fun\u00E7\u00F5es\n* Pode ser anonimo (lambdas)\n* Pode ser produzidos pela outras fun\u00E7\u00F5es\n\n```\n(defn f [x] (+ x x))\n\n(f 8)\n\n(map (fn [y] (* y y)) (range 10))\n\n(filter even? (range 40))\n\n(defn g [y] (fn [x] (* x y)))\n\n(map (g 3) (range 10))\n```\n\n",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var f = (function (x){
return (x + x);
});
var g = ((function (f){
return (function (y){
return ((function (f){
return (function (x){
return (x * y);
});
;})(f))
});})(f))
;
return React.createElement("div",null,(function (){var attrs45724 = f.call(null,(8));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs45724))?sablono.interpreter.attributes.call(null,attrs45724):null),((cljs.core.map_QMARK_.call(null,attrs45724))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45724)], null)));
})(),(function (){var attrs45725 = [cljs.core.str(cljs.core.map.call(null,((function (f,g){
return (function (y){
return (y * y);
});})(f,g))
,cljs.core.range.call(null,(10))))].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs45725))?sablono.interpreter.attributes.call(null,attrs45725):null),((cljs.core.map_QMARK_.call(null,attrs45725))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45725)], null)));
})(),(function (){var attrs45726 = [cljs.core.str(cljs.core.filter.call(null,cljs.core.even_QMARK_,cljs.core.range.call(null,(40))))].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs45726))?sablono.interpreter.attributes.call(null,attrs45726):null),((cljs.core.map_QMARK_.call(null,attrs45726))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45726)], null)));
})(),(function (){var attrs45727 = [cljs.core.str(cljs.core.map.call(null,g.call(null,(3)),cljs.core.range.call(null,(10))))].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs45727))?sablono.interpreter.attributes.call(null,attrs45727):null),((cljs.core.map_QMARK_.call(null,attrs45727))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45727)], null)));
})());
})(),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"present.core","present.core",-524388045),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Mais Funcional\n\n### Partial Evaluation (Currying)\n\n```\n(def f (partial + 1))\n\n(f 3)\n```\n\n### Compondo Fun\u00E7\u00F5es\n\n```\n(defn g [x] (* x x))\n\n(def h (comp f g))\n\n(map h (range 10))\n```\n\n### Transducers\n```\n(def tx (comp (map f) (map g) (filter even?)))\n\n(eduction tx (range 10))\n```\n",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var f = cljs.core.partial.call(null,cljs.core._PLUS_,(1));
var g = ((function (f){
return (function (x){
return (x * x);
});})(f))
;
var h = cljs.core.comp.call(null,f,g);
var tx = cljs.core.comp.call(null,cljs.core.map.call(null,f),cljs.core.map.call(null,g),cljs.core.filter.call(null,cljs.core.even_QMARK_));
return React.createElement("div",null,(function (){var attrs45729 = [cljs.core.str(f.call(null,(3)))].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs45729))?sablono.interpreter.attributes.call(null,attrs45729):null),((cljs.core.map_QMARK_.call(null,attrs45729))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45729)], null)));
})(),(function (){var attrs45730 = [cljs.core.str(cljs.core.map.call(null,h,cljs.core.range.call(null,(10))))].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs45730))?sablono.interpreter.attributes.call(null,attrs45730):null),((cljs.core.map_QMARK_.call(null,attrs45730))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45730)], null)));
})(),(function (){var attrs45731 = [cljs.core.str(cljs.core.map.call(null,((function (f,g,h,tx){
return (function (p1__45728_SHARP_){
return ([cljs.core.str(p1__45728_SHARP_)].join('') * (1));
});})(f,g,h,tx))
,cljs.core.eduction.call(null,tx,cljs.core.range.call(null,(10)))))].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs45731))?sablono.interpreter.attributes.call(null,attrs45731):null),((cljs.core.map_QMARK_.call(null,attrs45731))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45731)], null)));
})());
})(),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"present.core","present.core",-524388045),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Dados\n\n### Keywords, Vectors, Maps\n```\n:keyword\n\n[1 2 3]\n\n{:a 1 :b 2}\n\n```\n\n### EDN\n\nDa pra combinar em estruturas de dados \"literais\" complexos.\n\nA filosofia de Clojure : melhor 100 funcoes operando um estrutura de dados do que 10 estruturas de dados cada um com 10 funcoes operando em lo.\n\nOs bibliotecas de Clojure construir varias DSLs com EDN.\n\nEg. hiccup\n```\n[:div\n    [:h2 \"Titulo\"]\n    [:p [:em \"Lorem ipsum dolor \"]\n        \"sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... \"]]\n```\n\n\n### Argumentos desestructurados (\"destructing\")\n\n```\n(defn ppt [[x y]] {:x x :y y})\n(defn pp [{:keys [nome idade]}]  (str \"Nome : \" nome \", Idade :  \"  idade ))\n\n(ppt [12 23])\n\n(pp {:nome \"Fred\" :idade 24})\n\n\n```\n",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var ppt = (function (p__45732){
var vec__45733 = p__45732;
var x = cljs.core.nth.call(null,vec__45733,(0),null);
var y = cljs.core.nth.call(null,vec__45733,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
});
var pp = ((function (ppt){
return (function (p__45736){
var map__45737 = p__45736;
var map__45737__$1 = ((((!((map__45737 == null)))?((((map__45737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45737):map__45737);
var nome = cljs.core.get.call(null,map__45737__$1,new cljs.core.Keyword(null,"nome","nome",1100401122));
var idade = cljs.core.get.call(null,map__45737__$1,new cljs.core.Keyword(null,"idade","idade",297389078));
return [cljs.core.str("Nome : "),cljs.core.str(nome),cljs.core.str(", Idade : "),cljs.core.str(idade)].join('');
});})(ppt))
;
return React.createElement("div",null,React.createElement("div",null,React.createElement("h2",null,"Titulo"),React.createElement("p",null,React.createElement("em",null,"Lorem ipsum dolor "),"sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...")),React.createElement("div",null,React.createElement("h3",null,"Argumentos desestruturados"),(function (){var attrs45743 = [cljs.core.str(ppt.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(23)], null)))].join('');
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs45743))?sablono.interpreter.attributes.call(null,attrs45743):null),((cljs.core.map_QMARK_.call(null,attrs45743))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45743)], null)));
})(),(function (){var attrs45744 = [cljs.core.str(pp.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nome","nome",1100401122),"Fred",new cljs.core.Keyword(null,"idade","idade",297389078),"24"], null)))].join('');
return cljs.core.apply.call(null,React.createElement,"p",((cljs.core.map_QMARK_.call(null,attrs45744))?sablono.interpreter.attributes.call(null,attrs45744):null),((cljs.core.map_QMARK_.call(null,attrs45744))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45744)], null)));
})()));
})(),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"present.core","present.core",-524388045),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Biblioteca de sequencias e maps\n\n* APIs comuns\n* Todas estruturas de dados s\u00E3o imut\u00E1veis e pregui\u00E7as\n\n### Reduce\n\n```\n(reduce + [1 2 3 4])\n```\n\n### Listas infinitos\n\n```\n(def xs (iterate (partial + 1) 0))\n\n(take 50 xs)\n\n(def ss (iterate (partial str \"*\") \"\")\n\n(take 20 ss)\n```\n\n ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var xs = cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(1)),(0));
var ss = cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core.str,"*"),"");
return React.createElement("div",null,(function (){var attrs45745 = [cljs.core.str(cljs.core.reduce.call(null,cljs.core._PLUS_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)))].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs45745))?sablono.interpreter.attributes.call(null,attrs45745):null),((cljs.core.map_QMARK_.call(null,attrs45745))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45745)], null)));
})(),(function (){var attrs45746 = [cljs.core.str(cljs.core.take.call(null,(50),xs))].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs45746))?sablono.interpreter.attributes.call(null,attrs45746):null),((cljs.core.map_QMARK_.call(null,attrs45746))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45746)], null)));
})(),(function (){var attrs45747 = [cljs.core.str(cljs.core.take.call(null,(20),ss))].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs45747))?sablono.interpreter.attributes.call(null,attrs45747):null),((cljs.core.map_QMARK_.call(null,attrs45747))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45747)], null)));
})());
})(),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"present.core","present.core",-524388045),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Representa\u00E7\u00E3o gr\u00E1fica de uma fun\u00E7\u00E3o\n\n```\n(let [f (fn [x] (+ 100 (* 2 (* x (Math/sin x)))))\n      coords (fn [f maxy]\n                (let [xs (iterate (partial + 1) 0)]\n                  (map vector xs (map #(- maxy (f %)) xs ))) )\n      make-path (fn [xys]\n                   (let [[x1 y1] (first xys)]\n                      (apply str \"\"\n                         (cons (str \"M\" x1 \" \" y1 \" \")\n                            (map (fn [[x y]] (str \"L \" x \" \" y \" \")) xys)))))\n        ]\n\n    (sab/html\n     [:div\n      [:div (str (take 20 (coords f 200)))]\n      [:div\n       [:h2 \"Graph\"]\n       [:svg {:width \"400\" :height \"200\"}\n        [:path {:fill \"transparent\" :stroke \"green\" :d\n               (-> f\n                    (coords 200)\n                    ((fn [xs] (take 400 xs)))\n                    make-path)\n         ]]]]))\n\n```",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var f = (function (x){
return ((100) + ((x * Math.sin(x)) / (5)));
});
var coords = ((function (f){
return (function (f__$1,maxy){
var xs = cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(1)),(0));
return cljs.core.map.call(null,cljs.core.vector,xs,cljs.core.map.call(null,((function (xs,f){
return (function (p1__45748_SHARP_){
return (maxy - f__$1.call(null,p1__45748_SHARP_));
});})(xs,f))
,xs));
});})(f))
;
var make_path = ((function (f,coords){
return (function (xys){
var vec__45749 = cljs.core.first.call(null,xys);
var x1 = cljs.core.nth.call(null,vec__45749,(0),null);
var y1 = cljs.core.nth.call(null,vec__45749,(1),null);
return cljs.core.apply.call(null,cljs.core.str,"",cljs.core.cons.call(null,[cljs.core.str("M"),cljs.core.str(x1),cljs.core.str(" "),cljs.core.str(y1),cljs.core.str(" ")].join(''),cljs.core.map.call(null,((function (vec__45749,x1,y1,f,coords){
return (function (p__45752){
var vec__45753 = p__45752;
var x = cljs.core.nth.call(null,vec__45753,(0),null);
var y = cljs.core.nth.call(null,vec__45753,(1),null);
return [cljs.core.str("L "),cljs.core.str(x),cljs.core.str(" "),cljs.core.str(y),cljs.core.str(" ")].join('');
});})(vec__45749,x1,y1,f,coords))
,xys)));
});})(f,coords))
;
return React.createElement("div",null,(function (){var attrs45756 = [cljs.core.str(cljs.core.take.call(null,(20),coords.call(null,f,(200))))].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs45756))?sablono.interpreter.attributes.call(null,attrs45756):null),((cljs.core.map_QMARK_.call(null,attrs45756))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45756)], null)));
})(),React.createElement("div",null,React.createElement("h2",null,"Graph"),React.createElement("svg",({"width": "400", "height": "200"}),React.createElement("path",({"fill": "transparent", "stroke": "green", "d": make_path.call(null,((function (f,coords,make_path){
return (function (xs){
return cljs.core.take.call(null,(400),xs);
});})(f,coords,make_path))
.call(null,coords.call(null,f,(200))))})))));
})(),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"present.core","present.core",-524388045),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Padr\u00F5es Decorativos\n\n```\n(let [triangles\n       (layouts/clock-rotate 5 (std/poly 0.5 0.5 0.3 3\n                                  {:stroke (p-color 255 100 100)\n                                   :stroke-weight 2 }))\n      pentagon (std/poly 0 0 0.7 5 {:stroke (p-color 0 0 255)\n                                     :stroke-weight 2}) ]\n        (layouts/checked-layout 6 (repeat pentagon) (repeat triangles)))\n\n```\n",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var p = (function (){var triangles = patterning.layouts.clock_rotate.call(null,(5),patterning.library.std.poly.call(null,0.5,0.5,0.3,(3),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),patterning.color.p_color.call(null,(255),(100),(100)),new cljs.core.Keyword(null,"stroke-weight","stroke-weight",-2128041534),(2)], null)));
var pentagon = patterning.library.std.poly.call(null,(0),(0),0.7,(5),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),patterning.color.p_color.call(null,(0),(0),(255)),new cljs.core.Keyword(null,"stroke-weight","stroke-weight",-2128041534),(2)], null));
return patterning.layouts.checked_layout.call(null,(9),cljs.core.repeat.call(null,pentagon),cljs.core.repeat.call(null,triangles));
})();
return React.createElement("div",null,React.createElement("h3",null,"Visual"),React.createElement("div",({"dangerouslySetInnerHTML": ({"__html": patterning.view.make_svg.call(null,(400),(400),p)})})));
})(),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"present.core","present.core",-524388045),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Contas\n\nExemplo de interatividade em React (com Reagent)\n ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),present.core.contas_component = (function present$core$contas_component(orc){
var with_let45775 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let45775","with-let45775",-1609599880));
var temp__5461__auto___45788 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5461__auto___45788 == null)){
} else {
var c__41069__auto___45789 = temp__5461__auto___45788;
if((with_let45775.generation === c__41069__auto___45789.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error([cljs.core.str("Warning: The same with-let is being used more "),cljs.core.str("than once in the same reactive context.")].join(''));
} else {
}
} else {
}

with_let45775.generation = c__41069__auto___45789.ratomGeneration;
}


var init45776 = (with_let45775.length === (0));
var som = ((init45776)?(with_let45775[(0)] = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.deref.call(null,orc))):(with_let45775[(0)]));
var entrada = ((init45776)?(with_let45775[(1)] = reagent.core.atom.call(null,(0))):(with_let45775[(1)]));
var res__41070__auto__ = React.createElement("div",null,React.createElement("table",null,React.createElement("tbody",null,React.createElement("tr",null,React.createElement("th",null,"Receitas"),React.createElement("th",null,"Gastas")),cljs.core.into_array.call(null,(function (){var iter__27663__auto__ = ((function (init45776,som,entrada,with_let45775){
return (function present$core$contas_component_$_iter__45779(s__45780){
return (new cljs.core.LazySeq(null,((function (init45776,som,entrada,with_let45775){
return (function (){
var s__45780__$1 = s__45780;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__45780__$1);
if(temp__5457__auto__){
var s__45780__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45780__$2)){
var c__27661__auto__ = cljs.core.chunk_first.call(null,s__45780__$2);
var size__27662__auto__ = cljs.core.count.call(null,c__27661__auto__);
var b__45782 = cljs.core.chunk_buffer.call(null,size__27662__auto__);
if((function (){var i__45781 = (0);
while(true){
if((i__45781 < size__27662__auto__)){
var item = cljs.core._nth.call(null,c__27661__auto__,i__45781);
cljs.core.chunk_append.call(null,b__45782,((((0) < item))?React.createElement("tr",null,(function (){var attrs45783 = item;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs45783))?sablono.interpreter.attributes.call(null,attrs45783):null),((cljs.core.map_QMARK_.call(null,attrs45783))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45783)], null)));
})(),React.createElement("td",null)):React.createElement("tr",null,React.createElement("td",null),React.createElement("td",null,React.createElement("span",({"style": ({"color": "red"})}),sablono.interpreter.interpret.call(null,((0) - item)))))));

var G__45790 = (i__45781 + (1));
i__45781 = G__45790;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45782),present$core$contas_component_$_iter__45779.call(null,cljs.core.chunk_rest.call(null,s__45780__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45782),null);
}
} else {
var item = cljs.core.first.call(null,s__45780__$2);
return cljs.core.cons.call(null,((((0) < item))?React.createElement("tr",null,(function (){var attrs45783 = item;
return cljs.core.apply.call(null,React.createElement,"td",((cljs.core.map_QMARK_.call(null,attrs45783))?sablono.interpreter.attributes.call(null,attrs45783):null),((cljs.core.map_QMARK_.call(null,attrs45783))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45783)], null)));
})(),React.createElement("td",null)):React.createElement("tr",null,React.createElement("td",null),React.createElement("td",null,React.createElement("span",({"style": ({"color": "red"})}),sablono.interpreter.interpret.call(null,((0) - item)))))),present$core$contas_component_$_iter__45779.call(null,cljs.core.rest.call(null,s__45780__$2)));
}
} else {
return null;
}
break;
}
});})(init45776,som,entrada,with_let45775))
,null,null));
});})(init45776,som,entrada,with_let45775))
;
return iter__27663__auto__.call(null,cljs.core.deref.call(null,orc));
})()))),React.createElement("div",null,"Som : ",sablono.interpreter.interpret.call(null,som)),React.createElement("div",null,sablono.interpreter.create_element.call(null,"input",({"type": "text", "value": cljs.core.deref.call(null,entrada), "onChange": ((function (init45776,som,entrada,with_let45775){
return (function (p1__45761_SHARP_){
return cljs.core.reset_BANG_.call(null,entrada,(p1__45761_SHARP_.target.value * (1)));
});})(init45776,som,entrada,with_let45775))
})),React.createElement("button",({"onClick": ((function (init45776,som,entrada,with_let45775){
return (function (){
return cljs.core.reset_BANG_.call(null,orc,cljs.core.cons.call(null,cljs.core.deref.call(null,entrada),cljs.core.deref.call(null,orc)));
});})(init45776,som,entrada,with_let45775))
}),"Adicionar")));

return res__41070__auto__;
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
present.core.main = (function present$core$main(){
var temp__5455__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__5455__auto__)){
var node = temp__5455__auto__;
return ReactDOM.render(React.createElement("div",null,"This is working"),node);
} else {
return null;
}
});
present.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1538013744431