// Compiled by ClojureScript 1.9.229 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__26808__auto__ = (function (){var and__26796__auto__ = typeof Symbol !== 'undefined';
if(and__26796__auto__){
var and__26796__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__26796__auto____$1){
var and__26796__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__26796__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__26796__auto____$2;
}
} else {
return and__26796__auto____$1;
}
} else {
return and__26796__auto__;
}
})();
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__36632_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__36632_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args36633 = [];
var len__27992__auto___36636 = arguments.length;
var i__27993__auto___36637 = (0);
while(true){
if((i__27993__auto___36637 < len__27992__auto___36636)){
args36633.push((arguments[i__27993__auto___36637]));

var G__36638 = (i__27993__auto___36637 + (1));
i__27993__auto___36637 = G__36638;
continue;
} else {
}
break;
}

var G__36635 = args36633.length;
switch (G__36635) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36633.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__26796__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__26796__auto__){
var map__36646 = c;
var map__36646__$1 = ((((!((map__36646 == null)))?((((map__36646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36646):map__36646);
var path = cljs.core.get.call(null,map__36646__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__36646__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__26796__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__5457__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__5457__auto__)){
var node = temp__5457__auto__;
var temp__5457__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__5457__auto____$1)){
var hljs = temp__5457__auto____$1;
var temp__5457__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__5457__auto____$2)){
var highlight_block = temp__5457__auto____$2;
return highlight_block.call(null,node);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__35824__auto___36652 = ({"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",({"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))}),React.createElement("code",({"className": (function (){var or__26808__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return "";
}
})(), "ref": "code-ref"}),sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})});
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__35824__auto___36652);
}

var seq__36648_36653 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__36649_36654 = null;
var count__36650_36655 = (0);
var i__36651_36656 = (0);
while(true){
if((i__36651_36656 < count__36650_36655)){
var property__35825__auto___36657 = cljs.core._nth.call(null,chunk__36649_36654,i__36651_36656);
if(cljs.core.truth_((base__35824__auto___36652[property__35825__auto___36657]))){
(devcards.core.CodeHighlight.prototype[property__35825__auto___36657] = (base__35824__auto___36652[property__35825__auto___36657]));
} else {
}

var G__36658 = seq__36648_36653;
var G__36659 = chunk__36649_36654;
var G__36660 = count__36650_36655;
var G__36661 = (i__36651_36656 + (1));
seq__36648_36653 = G__36658;
chunk__36649_36654 = G__36659;
count__36650_36655 = G__36660;
i__36651_36656 = G__36661;
continue;
} else {
var temp__5457__auto___36662 = cljs.core.seq.call(null,seq__36648_36653);
if(temp__5457__auto___36662){
var seq__36648_36663__$1 = temp__5457__auto___36662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36648_36663__$1)){
var c__27712__auto___36664 = cljs.core.chunk_first.call(null,seq__36648_36663__$1);
var G__36665 = cljs.core.chunk_rest.call(null,seq__36648_36663__$1);
var G__36666 = c__27712__auto___36664;
var G__36667 = cljs.core.count.call(null,c__27712__auto___36664);
var G__36668 = (0);
seq__36648_36653 = G__36665;
chunk__36649_36654 = G__36666;
count__36650_36655 = G__36667;
i__36651_36656 = G__36668;
continue;
} else {
var property__35825__auto___36669 = cljs.core.first.call(null,seq__36648_36663__$1);
if(cljs.core.truth_((base__35824__auto___36652[property__35825__auto___36669]))){
(devcards.core.CodeHighlight.prototype[property__35825__auto___36669] = (base__35824__auto___36652[property__35825__auto___36669]));
} else {
}

var G__36670 = cljs.core.next.call(null,seq__36648_36663__$1);
var G__36671 = null;
var G__36672 = (0);
var G__36673 = (0);
seq__36648_36653 = G__36670;
chunk__36649_36654 = G__36671;
count__36650_36655 = G__36672;
i__36651_36656 = G__36673;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,({"code": code_str, "lang": lang}));
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__27832__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__27833__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__27834__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__27835__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__27836__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__27836__auto__,method_table__27832__auto__,prefer_table__27833__auto__,method_cache__27834__auto__,cached_hierarchy__27835__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__36674){
var map__36675 = p__36674;
var map__36675__$1 = ((((!((map__36675 == null)))?((((map__36675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36675):map__36675);
var content = cljs.core.get.call(null,map__36675__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__36677){
var map__36678 = p__36677;
var map__36678__$1 = ((((!((map__36678 == null)))?((((map__36678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36678):map__36678);
var block = map__36678__$1;
var content = cljs.core.get.call(null,map__36678__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,({"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)}));
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__27999__auto__ = [];
var len__27992__auto___36681 = arguments.length;
var i__27993__auto___36682 = (0);
while(true){
if((i__27993__auto___36682 < len__27992__auto___36681)){
args__27999__auto__.push((arguments[i__27993__auto___36682]));

var G__36683 = (i__27993__auto___36682 + (1));
i__27993__auto___36682 = G__36683;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
return React.createElement("div",({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",({"key": i}),sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"}),sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq36680){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36680));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",({"key": "devcards_naked-card", "className": (function (){var G__36685 = devcards.system.devcards_rendered_card_class;
var G__36685__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__36685),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__36685);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__36685__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__36685__$1;
}
})()}),sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args36686 = [];
var len__27992__auto___36694 = arguments.length;
var i__27993__auto___36695 = (0);
while(true){
if((i__27993__auto___36695 < len__27992__auto___36694)){
args36686.push((arguments[i__27993__auto___36695]));

var G__36696 = (i__27993__auto___36695 + (1));
i__27993__auto___36695 = G__36696;
continue;
} else {
}
break;
}

var G__36688 = args36686.length;
switch (G__36688) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36686.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__36689 = card;
var map__36689__$1 = ((((!((map__36689 == null)))?((((map__36689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36689):map__36689);
var path = cljs.core.get.call(null,map__36689__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__36689__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))}),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"}),React.createElement("div",({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__36689,map__36689__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__36689,map__36689__$1,path,options))
)}),sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs36691 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs36691))?sablono.interpreter.attributes.call(null,attrs36691):null),((cljs.core.map_QMARK_.call(null,attrs36691))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36691)], null)));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__27522__auto__ = (((this$ == null))?null:this$);
var m__27523__auto__ = (devcards.core._devcard_options[goog.typeOf(x__27522__auto__)]);
if(!((m__27523__auto__ == null))){
return m__27523__auto__.call(null,this$,devcard_opts);
} else {
var m__27523__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__27523__auto____$1 == null))){
return m__27523__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__27522__auto__ = (((this$ == null))?null:this$);
var m__27523__auto__ = (devcards.core._devcard[goog.typeOf(x__27522__auto__)]);
if(!((m__27523__auto__ == null))){
return m__27523__auto__.call(null,this$,devcard_opts);
} else {
var m__27523__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__27523__auto____$1 == null))){
return m__27523__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__5457__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__5457__auto__)){
var comp = temp__5457__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
var base__35824__auto___36703 = ({"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs36698 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs36698))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs36698)):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_.call(null,attrs36698))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36698)], null)));
})});
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__35824__auto___36703);
}

var seq__36699_36704 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__36700_36705 = null;
var count__36701_36706 = (0);
var i__36702_36707 = (0);
while(true){
if((i__36702_36707 < count__36701_36706)){
var property__35825__auto___36708 = cljs.core._nth.call(null,chunk__36700_36705,i__36702_36707);
if(cljs.core.truth_((base__35824__auto___36703[property__35825__auto___36708]))){
(devcards.core.DontUpdate.prototype[property__35825__auto___36708] = (base__35824__auto___36703[property__35825__auto___36708]));
} else {
}

var G__36709 = seq__36699_36704;
var G__36710 = chunk__36700_36705;
var G__36711 = count__36701_36706;
var G__36712 = (i__36702_36707 + (1));
seq__36699_36704 = G__36709;
chunk__36700_36705 = G__36710;
count__36701_36706 = G__36711;
i__36702_36707 = G__36712;
continue;
} else {
var temp__5457__auto___36713 = cljs.core.seq.call(null,seq__36699_36704);
if(temp__5457__auto___36713){
var seq__36699_36714__$1 = temp__5457__auto___36713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36699_36714__$1)){
var c__27712__auto___36715 = cljs.core.chunk_first.call(null,seq__36699_36714__$1);
var G__36716 = cljs.core.chunk_rest.call(null,seq__36699_36714__$1);
var G__36717 = c__27712__auto___36715;
var G__36718 = cljs.core.count.call(null,c__27712__auto___36715);
var G__36719 = (0);
seq__36699_36704 = G__36716;
chunk__36700_36705 = G__36717;
count__36701_36706 = G__36718;
i__36702_36707 = G__36719;
continue;
} else {
var property__35825__auto___36720 = cljs.core.first.call(null,seq__36699_36714__$1);
if(cljs.core.truth_((base__35824__auto___36703[property__35825__auto___36720]))){
(devcards.core.DontUpdate.prototype[property__35825__auto___36720] = (base__35824__auto___36703[property__35825__auto___36720]));
} else {
}

var G__36721 = cljs.core.next.call(null,seq__36699_36714__$1);
var G__36722 = null;
var G__36723 = (0);
var G__36724 = (0);
seq__36699_36704 = G__36721;
chunk__36700_36705 = G__36722;
count__36701_36706 = G__36723;
i__36702_36707 = G__36724;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,({"change_count": change_count, "children_thunk": children_thunk}));
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__26808__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__5457__auto__)){
var docu = temp__5457__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom)):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",({"key": "devcards-main-section"}),sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__27735__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__27735__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__27735__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__27735__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27735__auto____$3);
})(),x__27735__auto____$2);
})(),x__27735__auto____$1);
})(),x__27735__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",({"className": "com-rigsomelight-devcards-frameless"}),sablono.interpreter.interpret.call(null,children));
}
});
var base__35824__auto___36731 = ({"getInitialState": (function (){
return ({"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)});
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__26808__auto__ = (function (){var and__26796__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__26796__auto__)){
return this$.state;
} else {
return and__26796__auto__;
}
})();
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data.call(null,this$)});
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__26796__auto__ = data_atom;
if(cljs.core.truth_(and__26796__auto__)){
return id;
} else {
return and__26796__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__5457__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__5457__auto__)){
var data_atom = temp__5457__auto__;
var temp__5457__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__5457__auto____$1)){
var id = temp__5457__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__5457__auto____$1,data_atom,temp__5457__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))}));
});})(id,temp__5457__auto____$1,data_atom,temp__5457__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})});
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__35824__auto___36731);
}

var seq__36727_36732 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__36728_36733 = null;
var count__36729_36734 = (0);
var i__36730_36735 = (0);
while(true){
if((i__36730_36735 < count__36729_36734)){
var property__35825__auto___36736 = cljs.core._nth.call(null,chunk__36728_36733,i__36730_36735);
if(cljs.core.truth_((base__35824__auto___36731[property__35825__auto___36736]))){
(devcards.core.DevcardBase.prototype[property__35825__auto___36736] = (base__35824__auto___36731[property__35825__auto___36736]));
} else {
}

var G__36737 = seq__36727_36732;
var G__36738 = chunk__36728_36733;
var G__36739 = count__36729_36734;
var G__36740 = (i__36730_36735 + (1));
seq__36727_36732 = G__36737;
chunk__36728_36733 = G__36738;
count__36729_36734 = G__36739;
i__36730_36735 = G__36740;
continue;
} else {
var temp__5457__auto___36741 = cljs.core.seq.call(null,seq__36727_36732);
if(temp__5457__auto___36741){
var seq__36727_36742__$1 = temp__5457__auto___36741;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36727_36742__$1)){
var c__27712__auto___36743 = cljs.core.chunk_first.call(null,seq__36727_36742__$1);
var G__36744 = cljs.core.chunk_rest.call(null,seq__36727_36742__$1);
var G__36745 = c__27712__auto___36743;
var G__36746 = cljs.core.count.call(null,c__27712__auto___36743);
var G__36747 = (0);
seq__36727_36732 = G__36744;
chunk__36728_36733 = G__36745;
count__36729_36734 = G__36746;
i__36730_36735 = G__36747;
continue;
} else {
var property__35825__auto___36748 = cljs.core.first.call(null,seq__36727_36742__$1);
if(cljs.core.truth_((base__35824__auto___36731[property__35825__auto___36748]))){
(devcards.core.DevcardBase.prototype[property__35825__auto___36748] = (base__35824__auto___36731[property__35825__auto___36748]));
} else {
}

var G__36749 = cljs.core.next.call(null,seq__36727_36742__$1);
var G__36750 = null;
var G__36751 = (0);
var G__36752 = (0);
seq__36727_36732 = G__36749;
chunk__36728_36733 = G__36750;
count__36729_36734 = G__36751;
i__36730_36735 = G__36752;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__5457__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__5457__auto__)){
var node_fn = temp__5457__auto__;
var temp__5457__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__5457__auto____$1)){
var node = temp__5457__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__35824__auto___36757 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')});
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__26796__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__26796__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__26796__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__5457__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__5457__auto__)){
var node = temp__5457__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div(({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))}),"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))});
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__35824__auto___36757);
}

var seq__36753_36758 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__36754_36759 = null;
var count__36755_36760 = (0);
var i__36756_36761 = (0);
while(true){
if((i__36756_36761 < count__36755_36760)){
var property__35825__auto___36762 = cljs.core._nth.call(null,chunk__36754_36759,i__36756_36761);
if(cljs.core.truth_((base__35824__auto___36757[property__35825__auto___36762]))){
(devcards.core.DomComponent.prototype[property__35825__auto___36762] = (base__35824__auto___36757[property__35825__auto___36762]));
} else {
}

var G__36763 = seq__36753_36758;
var G__36764 = chunk__36754_36759;
var G__36765 = count__36755_36760;
var G__36766 = (i__36756_36761 + (1));
seq__36753_36758 = G__36763;
chunk__36754_36759 = G__36764;
count__36755_36760 = G__36765;
i__36756_36761 = G__36766;
continue;
} else {
var temp__5457__auto___36767 = cljs.core.seq.call(null,seq__36753_36758);
if(temp__5457__auto___36767){
var seq__36753_36768__$1 = temp__5457__auto___36767;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36753_36768__$1)){
var c__27712__auto___36769 = cljs.core.chunk_first.call(null,seq__36753_36768__$1);
var G__36770 = cljs.core.chunk_rest.call(null,seq__36753_36768__$1);
var G__36771 = c__27712__auto___36769;
var G__36772 = cljs.core.count.call(null,c__27712__auto___36769);
var G__36773 = (0);
seq__36753_36758 = G__36770;
chunk__36754_36759 = G__36771;
count__36755_36760 = G__36772;
i__36756_36761 = G__36773;
continue;
} else {
var property__35825__auto___36774 = cljs.core.first.call(null,seq__36753_36768__$1);
if(cljs.core.truth_((base__35824__auto___36757[property__35825__auto___36774]))){
(devcards.core.DomComponent.prototype[property__35825__auto___36774] = (base__35824__auto___36757[property__35825__auto___36774]));
} else {
}

var G__36775 = cljs.core.next.call(null,seq__36753_36768__$1);
var G__36776 = null;
var G__36777 = (0);
var G__36778 = (0);
seq__36753_36758 = G__36775;
chunk__36754_36759 = G__36776;
count__36755_36760 = G__36777;
i__36756_36761 = G__36778;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__26808__auto__ = x === true;
if(or__26808__auto__){
return or__26808__auto__;
} else {
var or__26808__auto____$1 = x === false;
if(or__26808__auto____$1){
return or__26808__auto____$1;
} else {
var or__26808__auto____$2 = (x == null);
if(or__26808__auto____$2){
return or__26808__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__26808__auto__ = typeof x === 'string';
if(or__26808__auto__){
return or__26808__auto__;
} else {
var or__26808__auto____$1 = (x == null);
if(or__26808__auto____$1){
return or__26808__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__26808__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__36779_SHARP_){
return !(p1__36779_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__36788 = opts;
var map__36788__$1 = ((((!((map__36788 == null)))?((((map__36788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36788):map__36788);
var name = cljs.core.get.call(null,map__36788__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__36788__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__36788__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__36788__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__26808__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__26808__auto__){
return or__26808__auto__;
} else {
var or__26808__auto____$1 = (options == null);
if(or__26808__auto____$1){
return or__26808__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__26808__auto__ = (initial_data == null);
if(or__26808__auto__){
return or__26808__auto__;
} else {
var or__26808__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__26808__auto____$1){
return or__26808__auto____$1;
} else {
var or__26808__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__26808__auto____$2){
return or__26808__auto____$2;
} else {
var or__26808__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__26808__auto____$3){
return or__26808__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__36788,map__36788__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__36780_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__36780_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__36788,map__36788__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})}),sablono.interpreter.interpret.call(null,React.createElement("code",({"style": ({"flex": "1 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",({"style": ({"flex": "3 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",({"style": ({"flex": "1 100px"})})," Received: ",(function (){var attrs36796 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs36796))?sablono.interpreter.attributes.call(null,attrs36796):null),((cljs.core.map_QMARK_.call(null,attrs36796))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36796)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",({"className": "com-rigsomelight-devcards-card-base-no-pad"}),(function (){var attrs36800 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs36800))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs36800)):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_.call(null,attrs36800))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36800)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs36801 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs36801))?sablono.interpreter.attributes.call(null,attrs36801):null),((cljs.core.map_QMARK_.call(null,attrs36801))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36801)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs36802 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs36802))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs36802)):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_.call(null,attrs36802))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36802)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__36803_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__36803_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,({"card": devcards.core.add_environment_defaults.call(null,card_options)}));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27479__auto__,k__27480__auto__){
var self__ = this;
var this__27479__auto____$1 = this;
return cljs.core._lookup.call(null,this__27479__auto____$1,k__27480__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27481__auto__,k36805,else__27482__auto__){
var self__ = this;
var this__27481__auto____$1 = this;
var G__36807 = (((k36805 instanceof cljs.core.Keyword))?k36805.fqn:null);
switch (G__36807) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36805,else__27482__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27493__auto__,writer__27494__auto__,opts__27495__auto__){
var self__ = this;
var this__27493__auto____$1 = this;
var pr_pair__27496__auto__ = ((function (this__27493__auto____$1){
return (function (keyval__27497__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27494__auto__,cljs.core.pr_writer,""," ","",opts__27495__auto__,keyval__27497__auto__);
});})(this__27493__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27494__auto__,pr_pair__27496__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__27495__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36804){
var self__ = this;
var G__36804__$1 = this;
return (new cljs.core.RecordIter((0),G__36804__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27477__auto__){
var self__ = this;
var this__27477__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27473__auto__){
var self__ = this;
var this__27473__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27483__auto__){
var self__ = this;
var this__27483__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27474__auto__){
var self__ = this;
var this__27474__auto____$1 = this;
var h__27246__auto__ = self__.__hash;
if(!((h__27246__auto__ == null))){
return h__27246__auto__;
} else {
var h__27246__auto____$1 = cljs.core.hash_imap.call(null,this__27474__auto____$1);
self__.__hash = h__27246__auto____$1;

return h__27246__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27475__auto__,other__27476__auto__){
var self__ = this;
var this__27475__auto____$1 = this;
if(cljs.core.truth_((function (){var and__26796__auto__ = other__27476__auto__;
if(cljs.core.truth_(and__26796__auto__)){
var and__26796__auto____$1 = (this__27475__auto____$1.constructor === other__27476__auto__.constructor);
if(and__26796__auto____$1){
return cljs.core.equiv_map.call(null,this__27475__auto____$1,other__27476__auto__);
} else {
return and__26796__auto____$1;
}
} else {
return and__26796__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27488__auto__,k__27489__auto__){
var self__ = this;
var this__27488__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__27489__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27488__auto____$1),self__.__meta),k__27489__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27489__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27486__auto__,k__27487__auto__,G__36804){
var self__ = this;
var this__27486__auto____$1 = this;
var pred__36808 = cljs.core.keyword_identical_QMARK_;
var expr__36809 = k__27487__auto__;
if(cljs.core.truth_(pred__36808.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__36809))){
return (new devcards.core.IdentiyOptions(G__36804,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27487__auto__,G__36804),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27491__auto__){
var self__ = this;
var this__27491__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27478__auto__,G__36804){
var self__ = this;
var this__27478__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__36804,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27484__auto__,entry__27485__auto__){
var self__ = this;
var this__27484__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27485__auto__)){
return cljs.core._assoc.call(null,this__27484__auto____$1,cljs.core._nth.call(null,entry__27485__auto__,(0)),cljs.core._nth.call(null,entry__27485__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27484__auto____$1,entry__27485__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__27515__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__27515__auto__,writer__27516__auto__){
return cljs.core._write.call(null,writer__27516__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__36806){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__36806),null,cljs.core.dissoc.call(null,G__36806,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__36812){
var map__36815 = p__36812;
var map__36815__$1 = ((((!((map__36815 == null)))?((((map__36815.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36815.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36815):map__36815);
var devcard_opts = map__36815__$1;
var options = cljs.core.get.call(null,map__36815__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__36815,map__36815__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__36815,map__36815__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27479__auto__,k__27480__auto__){
var self__ = this;
var this__27479__auto____$1 = this;
return cljs.core._lookup.call(null,this__27479__auto____$1,k__27480__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27481__auto__,k36818,else__27482__auto__){
var self__ = this;
var this__27481__auto____$1 = this;
var G__36820 = (((k36818 instanceof cljs.core.Keyword))?k36818.fqn:null);
switch (G__36820) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36818,else__27482__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27493__auto__,writer__27494__auto__,opts__27495__auto__){
var self__ = this;
var this__27493__auto____$1 = this;
var pr_pair__27496__auto__ = ((function (this__27493__auto____$1){
return (function (keyval__27497__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27494__auto__,cljs.core.pr_writer,""," ","",opts__27495__auto__,keyval__27497__auto__);
});})(this__27493__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27494__auto__,pr_pair__27496__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__27495__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36817){
var self__ = this;
var G__36817__$1 = this;
return (new cljs.core.RecordIter((0),G__36817__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27477__auto__){
var self__ = this;
var this__27477__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27473__auto__){
var self__ = this;
var this__27473__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27483__auto__){
var self__ = this;
var this__27483__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27474__auto__){
var self__ = this;
var this__27474__auto____$1 = this;
var h__27246__auto__ = self__.__hash;
if(!((h__27246__auto__ == null))){
return h__27246__auto__;
} else {
var h__27246__auto____$1 = cljs.core.hash_imap.call(null,this__27474__auto____$1);
self__.__hash = h__27246__auto____$1;

return h__27246__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27475__auto__,other__27476__auto__){
var self__ = this;
var this__27475__auto____$1 = this;
if(cljs.core.truth_((function (){var and__26796__auto__ = other__27476__auto__;
if(cljs.core.truth_(and__26796__auto__)){
var and__26796__auto____$1 = (this__27475__auto____$1.constructor === other__27476__auto__.constructor);
if(and__26796__auto____$1){
return cljs.core.equiv_map.call(null,this__27475__auto____$1,other__27476__auto__);
} else {
return and__26796__auto____$1;
}
} else {
return and__26796__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27488__auto__,k__27489__auto__){
var self__ = this;
var this__27488__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__27489__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27488__auto____$1),self__.__meta),k__27489__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27489__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27486__auto__,k__27487__auto__,G__36817){
var self__ = this;
var this__27486__auto____$1 = this;
var pred__36821 = cljs.core.keyword_identical_QMARK_;
var expr__36822 = k__27487__auto__;
if(cljs.core.truth_(pred__36821.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__36822))){
return (new devcards.core.AtomLikeOptions(G__36817,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27487__auto__,G__36817),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27491__auto__){
var self__ = this;
var this__27491__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27478__auto__,G__36817){
var self__ = this;
var this__27478__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__36817,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27484__auto__,entry__27485__auto__){
var self__ = this;
var this__27484__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27485__auto__)){
return cljs.core._assoc.call(null,this__27484__auto____$1,cljs.core._nth.call(null,entry__27485__auto__,(0)),cljs.core._nth.call(null,entry__27485__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27484__auto____$1,entry__27485__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__27515__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__27515__auto__,writer__27516__auto__){
return cljs.core._write.call(null,writer__27516__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__36819){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__36819),null,cljs.core.dissoc.call(null,G__36819,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27479__auto__,k__27480__auto__){
var self__ = this;
var this__27479__auto____$1 = this;
return cljs.core._lookup.call(null,this__27479__auto____$1,k__27480__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27481__auto__,k36828,else__27482__auto__){
var self__ = this;
var this__27481__auto____$1 = this;
var G__36830 = (((k36828 instanceof cljs.core.Keyword))?k36828.fqn:null);
switch (G__36830) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k36828,else__27482__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27493__auto__,writer__27494__auto__,opts__27495__auto__){
var self__ = this;
var this__27493__auto____$1 = this;
var pr_pair__27496__auto__ = ((function (this__27493__auto____$1){
return (function (keyval__27497__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27494__auto__,cljs.core.pr_writer,""," ","",opts__27495__auto__,keyval__27497__auto__);
});})(this__27493__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27494__auto__,pr_pair__27496__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__27495__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36827){
var self__ = this;
var G__36827__$1 = this;
return (new cljs.core.RecordIter((0),G__36827__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27477__auto__){
var self__ = this;
var this__27477__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27473__auto__){
var self__ = this;
var this__27473__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27483__auto__){
var self__ = this;
var this__27483__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27474__auto__){
var self__ = this;
var this__27474__auto____$1 = this;
var h__27246__auto__ = self__.__hash;
if(!((h__27246__auto__ == null))){
return h__27246__auto__;
} else {
var h__27246__auto____$1 = cljs.core.hash_imap.call(null,this__27474__auto____$1);
self__.__hash = h__27246__auto____$1;

return h__27246__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27475__auto__,other__27476__auto__){
var self__ = this;
var this__27475__auto____$1 = this;
if(cljs.core.truth_((function (){var and__26796__auto__ = other__27476__auto__;
if(cljs.core.truth_(and__26796__auto__)){
var and__26796__auto____$1 = (this__27475__auto____$1.constructor === other__27476__auto__.constructor);
if(and__26796__auto____$1){
return cljs.core.equiv_map.call(null,this__27475__auto____$1,other__27476__auto__);
} else {
return and__26796__auto____$1;
}
} else {
return and__26796__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27488__auto__,k__27489__auto__){
var self__ = this;
var this__27488__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__27489__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27488__auto____$1),self__.__meta),k__27489__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27489__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27486__auto__,k__27487__auto__,G__36827){
var self__ = this;
var this__27486__auto____$1 = this;
var pred__36831 = cljs.core.keyword_identical_QMARK_;
var expr__36832 = k__27487__auto__;
if(cljs.core.truth_(pred__36831.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__36832))){
return (new devcards.core.EdnLikeOptions(G__36827,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27487__auto__,G__36827),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27491__auto__){
var self__ = this;
var this__27491__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27478__auto__,G__36827){
var self__ = this;
var this__27478__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__36827,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27484__auto__,entry__27485__auto__){
var self__ = this;
var this__27484__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27485__auto__)){
return cljs.core._assoc.call(null,this__27484__auto____$1,cljs.core._nth.call(null,entry__27485__auto__,(0)),cljs.core._nth.call(null,entry__27485__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27484__auto____$1,entry__27485__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__27515__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__27515__auto__,writer__27516__auto__){
return cljs.core._write.call(null,writer__27516__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__36829){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__36829),null,cljs.core.dissoc.call(null,G__36829,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__26796__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__26796__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__26796__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__36846 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__36846 == null))){
if((false) || (G__36846.devcards$core$IDevcard$)){
return true;
} else {
if((!G__36846.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__36846);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__36846);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,({"node_fn": node_fn, "data_atom": data_atom}));
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__36849 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__36849__$1 = ((((!((map__36849 == null)))?((((map__36849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36849):map__36849);
var history = cljs.core.get.call(null,map__36849__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__36849__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__36853 = cljs.core.deref.call(null,history_atom);
var map__36853__$1 = ((((!((map__36853 == null)))?((((map__36853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36853):map__36853);
var history = cljs.core.get.call(null,map__36853__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__36853__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__36857 = cljs.core.deref.call(null,history_atom);
var map__36857__$1 = ((((!((map__36857 == null)))?((((map__36857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36857):map__36857);
var history = cljs.core.get.call(null,map__36857__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__36857__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__36861 = cljs.core.deref.call(null,history_atom);
var map__36861__$1 = ((((!((map__36861 == null)))?((((map__36861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36861):map__36861);
var history = cljs.core.get.call(null,map__36861__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass(({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))});
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__27735__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27735__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__26796__auto__ = data_atom;
if(cljs.core.truth_(and__26796__auto__)){
return id;
} else {
return and__26796__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__36863){
var map__36864 = p__36863;
var map__36864__$1 = ((((!((map__36864 == null)))?((((map__36864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36864):map__36864);
var ha = map__36864__$1;
var pointer = cljs.core.get.call(null,map__36864__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__36864__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__36864__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__26808__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",({"style": ({"display": (cljs.core.truth_((function (){var or__26808__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"}),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-left"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-stop"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-right"}),"")));
})(),(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-block"}))));
})());
} else {
return null;
}
})}));
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,({"data_atom": data_atom, "key": "devcards-history-control-bar"}));
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_36879 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_36879;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__27832__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__27833__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__27834__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__27835__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__27836__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__27836__auto__,method_table__27832__auto__,prefer_table__27833__auto__,method_cache__27834__auto__,cached_hierarchy__27835__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs36880 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs36880))?sablono.interpreter.attributes.call(null,attrs36880):null),((cljs.core.map_QMARK_.call(null,attrs36880))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36880)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__36881,body){
var map__36885 = p__36881;
var map__36885__$1 = ((((!((map__36885 == null)))?((((map__36885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36885):map__36885);
var message = cljs.core.get.call(null,map__36885__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs36887 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs36887))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs36887)):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_.call(null,attrs36887))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36887)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__36888){
var map__36896 = p__36888;
var map__36896__$1 = ((((!((map__36896 == null)))?((((map__36896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36896):map__36896);
var m = map__36896__$1;
var expected = cljs.core.get.call(null,map__36896__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__36896__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__36896__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs36898 = React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs36898))?sablono.interpreter.attributes.call(null,attrs36898):null),((cljs.core.map_QMARK_.call(null,attrs36898))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36898),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs36905 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs36905))?sablono.interpreter.attributes.call(null,attrs36905):null),((cljs.core.map_QMARK_.call(null,attrs36905))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36905)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs36906 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs36906))?sablono.interpreter.attributes.call(null,attrs36906):null),((cljs.core.map_QMARK_.call(null,attrs36906))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36906)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__36907){
var map__36908 = p__36907;
var map__36908__$1 = ((((!((map__36908 == null)))?((((map__36908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36908):map__36908);
var testing_contexts = cljs.core.get.call(null,map__36908__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs36910 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__36908,map__36908__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__36908,map__36908__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__27735__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27735__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs36910))?sablono.interpreter.attributes.call(null,attrs36910):null),((cljs.core.map_QMARK_.call(null,attrs36910))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36910)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs36919 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__36920,p__36921){
var map__36922 = p__36920;
var map__36922__$1 = ((((!((map__36922 == null)))?((((map__36922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36922):map__36922);
var last_context = cljs.core.get.call(null,map__36922__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__36922__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__36923 = p__36921;
var i = cljs.core.nth.call(null,vec__36923,(0),null);
var t = cljs.core.nth.call(null,vec__36923,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__27735__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27735__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs36919))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs36919)):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_.call(null,attrs36919))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs36919)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__36939){
var map__36940 = p__36939;
var map__36940__$1 = ((((!((map__36940 == null)))?((((map__36940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36940):map__36940);
var type = cljs.core.get.call(null,map__36940__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__36938 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__36938__$1 = ((((!((map__36938 == null)))?((((map__36938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36938):map__36938);
var fail = cljs.core.get.call(null,map__36938__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__36938__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__36938__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"}),React.createElement("div",({"className": "com-rigsomelight-devcards-panel-heading"}),React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__36938,map__36938__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__36938,map__36938__$1,fail,pass,error,error__$1))
)}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__36938,map__36938__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(error_QMARK_,tests,some_tests,total_tests,map__36938,map__36938__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__36938,map__36938__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__36938,map__36938__$1,fail,pass,error,error__$1){
return (function (p__36943){
var map__36944 = p__36943;
var map__36944__$1 = ((((!((map__36944 == null)))?((((map__36944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36944):map__36944);
var type = cljs.core.get.call(null,map__36944__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__36938,map__36938__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__36938,map__36938__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__36938,map__36938__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__36938,map__36938__$1,fail,pass,error,error__$1){
return (function (p__36946){
var map__36947 = p__36946;
var map__36947__$1 = ((((!((map__36947 == null)))?((((map__36947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36947):map__36947);
var type = cljs.core.get.call(null,map__36947__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__36938,map__36938__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__36938,map__36938__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",({"className": devcards.system.devcards_rendered_card_class}),sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__26808__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__29457__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto__){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto__){
return (function (state_37037){
var state_val_37038 = (state_37037[(1)]);
if((state_val_37038 === (7))){
var state_37037__$1 = state_37037;
var statearr_37039_37088 = state_37037__$1;
(statearr_37039_37088[(2)] = false);

(statearr_37039_37088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (20))){
var inst_36976 = (state_37037[(7)]);
var inst_36995 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36976);
var state_37037__$1 = state_37037;
var statearr_37040_37089 = state_37037__$1;
(statearr_37040_37089[(2)] = inst_36995);

(statearr_37040_37089[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (27))){
var inst_37000 = (state_37037[(8)]);
var inst_37012 = (state_37037[(9)]);
var inst_37016 = inst_37000.call(null,inst_37012);
var state_37037__$1 = state_37037;
var statearr_37041_37090 = state_37037__$1;
(statearr_37041_37090[(2)] = inst_37016);

(statearr_37041_37090[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (1))){
var state_37037__$1 = state_37037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37037__$1,(2),devcards.core.test_channel);
} else {
if((state_val_37038 === (24))){
var state_37037__$1 = state_37037;
var statearr_37042_37091 = state_37037__$1;
(statearr_37042_37091[(2)] = null);

(statearr_37042_37091[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (4))){
var state_37037__$1 = state_37037;
var statearr_37043_37092 = state_37037__$1;
(statearr_37043_37092[(2)] = false);

(statearr_37043_37092[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (15))){
var state_37037__$1 = state_37037;
var statearr_37044_37093 = state_37037__$1;
(statearr_37044_37093[(2)] = false);

(statearr_37044_37093[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (21))){
var inst_36976 = (state_37037[(7)]);
var state_37037__$1 = state_37037;
var statearr_37045_37094 = state_37037__$1;
(statearr_37045_37094[(2)] = inst_36976);

(statearr_37045_37094[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (13))){
var inst_37035 = (state_37037[(2)]);
var state_37037__$1 = state_37037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37037__$1,inst_37035);
} else {
if((state_val_37038 === (22))){
var inst_36999 = (state_37037[(10)]);
var inst_36998 = (state_37037[(2)]);
var inst_36999__$1 = cljs.core.get.call(null,inst_36998,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_37000 = cljs.core.get.call(null,inst_36998,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_37037__$1 = (function (){var statearr_37046 = state_37037;
(statearr_37046[(8)] = inst_37000);

(statearr_37046[(10)] = inst_36999__$1);

return statearr_37046;
})();
if(cljs.core.truth_(inst_36999__$1)){
var statearr_37047_37095 = state_37037__$1;
(statearr_37047_37095[(1)] = (23));

} else {
var statearr_37048_37096 = state_37037__$1;
(statearr_37048_37096[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (29))){
var inst_37026 = (state_37037[(2)]);
var inst_37027 = cljs.test.clear_env_BANG_.call(null);
var state_37037__$1 = (function (){var statearr_37049 = state_37037;
(statearr_37049[(11)] = inst_37026);

(statearr_37049[(12)] = inst_37027);

return statearr_37049;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37037__$1,(30),devcards.core.test_channel);
} else {
if((state_val_37038 === (6))){
var state_37037__$1 = state_37037;
var statearr_37050_37097 = state_37037__$1;
(statearr_37050_37097[(2)] = true);

(statearr_37050_37097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (28))){
var inst_37000 = (state_37037[(8)]);
var inst_37018 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_37019 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_37020 = cljs.core.PersistentHashMap.fromArrays(inst_37018,inst_37019);
var inst_37021 = devcards.core.collect_test.call(null,inst_37020);
var inst_37022 = cljs.test.get_current_env.call(null);
var inst_37023 = cljs.core.assoc.call(null,inst_37022,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_37024 = inst_37000.call(null,inst_37023);
var state_37037__$1 = (function (){var statearr_37051 = state_37037;
(statearr_37051[(13)] = inst_37021);

return statearr_37051;
})();
var statearr_37052_37098 = state_37037__$1;
(statearr_37052_37098[(2)] = inst_37024);

(statearr_37052_37098[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (25))){
var inst_37033 = (state_37037[(2)]);
var state_37037__$1 = state_37037;
var statearr_37053_37099 = state_37037__$1;
(statearr_37053_37099[(2)] = inst_37033);

(statearr_37053_37099[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (17))){
var state_37037__$1 = state_37037;
var statearr_37054_37100 = state_37037__$1;
(statearr_37054_37100[(2)] = true);

(statearr_37054_37100[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (3))){
var inst_36953 = (state_37037[(14)]);
var inst_36958 = inst_36953.cljs$lang$protocol_mask$partition0$;
var inst_36959 = (inst_36958 & (64));
var inst_36960 = inst_36953.cljs$core$ISeq$;
var inst_36961 = (inst_36959) || (inst_36960);
var state_37037__$1 = state_37037;
if(cljs.core.truth_(inst_36961)){
var statearr_37055_37101 = state_37037__$1;
(statearr_37055_37101[(1)] = (6));

} else {
var statearr_37056_37102 = state_37037__$1;
(statearr_37056_37102[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (12))){
var inst_36976 = (state_37037[(7)]);
var inst_36980 = (inst_36976 == null);
var inst_36981 = cljs.core.not.call(null,inst_36980);
var state_37037__$1 = state_37037;
if(inst_36981){
var statearr_37057_37103 = state_37037__$1;
(statearr_37057_37103[(1)] = (14));

} else {
var statearr_37058_37104 = state_37037__$1;
(statearr_37058_37104[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (2))){
var inst_36953 = (state_37037[(14)]);
var inst_36953__$1 = (state_37037[(2)]);
var inst_36955 = (inst_36953__$1 == null);
var inst_36956 = cljs.core.not.call(null,inst_36955);
var state_37037__$1 = (function (){var statearr_37059 = state_37037;
(statearr_37059[(14)] = inst_36953__$1);

return statearr_37059;
})();
if(inst_36956){
var statearr_37060_37105 = state_37037__$1;
(statearr_37060_37105[(1)] = (3));

} else {
var statearr_37061_37106 = state_37037__$1;
(statearr_37061_37106[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (23))){
var inst_37005 = (state_37037[(15)]);
var inst_36999 = (state_37037[(10)]);
var inst_37005__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_37006 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37007 = devcards.core.run_card_tests.call(null,inst_36999);
var inst_37008 = [inst_37007,inst_37005__$1];
var inst_37009 = (new cljs.core.PersistentVector(null,2,(5),inst_37006,inst_37008,null));
var state_37037__$1 = (function (){var statearr_37062 = state_37037;
(statearr_37062[(15)] = inst_37005__$1);

return statearr_37062;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37037__$1,(26),inst_37009);
} else {
if((state_val_37038 === (19))){
var inst_36990 = (state_37037[(2)]);
var state_37037__$1 = state_37037;
var statearr_37063_37107 = state_37037__$1;
(statearr_37063_37107[(2)] = inst_36990);

(statearr_37063_37107[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (11))){
var inst_36953 = (state_37037[(14)]);
var inst_36973 = (state_37037[(2)]);
var inst_36974 = cljs.core.get.call(null,inst_36973,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_36975 = cljs.core.get.call(null,inst_36973,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_36976 = inst_36953;
var state_37037__$1 = (function (){var statearr_37064 = state_37037;
(statearr_37064[(7)] = inst_36976);

(statearr_37064[(16)] = inst_36975);

(statearr_37064[(17)] = inst_36974);

return statearr_37064;
})();
var statearr_37065_37108 = state_37037__$1;
(statearr_37065_37108[(2)] = null);

(statearr_37065_37108[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (9))){
var inst_36953 = (state_37037[(14)]);
var inst_36970 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36953);
var state_37037__$1 = state_37037;
var statearr_37066_37109 = state_37037__$1;
(statearr_37066_37109[(2)] = inst_36970);

(statearr_37066_37109[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (5))){
var inst_36968 = (state_37037[(2)]);
var state_37037__$1 = state_37037;
if(cljs.core.truth_(inst_36968)){
var statearr_37067_37110 = state_37037__$1;
(statearr_37067_37110[(1)] = (9));

} else {
var statearr_37068_37111 = state_37037__$1;
(statearr_37068_37111[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (14))){
var inst_36976 = (state_37037[(7)]);
var inst_36983 = inst_36976.cljs$lang$protocol_mask$partition0$;
var inst_36984 = (inst_36983 & (64));
var inst_36985 = inst_36976.cljs$core$ISeq$;
var inst_36986 = (inst_36984) || (inst_36985);
var state_37037__$1 = state_37037;
if(cljs.core.truth_(inst_36986)){
var statearr_37069_37112 = state_37037__$1;
(statearr_37069_37112[(1)] = (17));

} else {
var statearr_37070_37113 = state_37037__$1;
(statearr_37070_37113[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (26))){
var inst_37005 = (state_37037[(15)]);
var inst_37011 = (state_37037[(2)]);
var inst_37012 = cljs.core.nth.call(null,inst_37011,(0),null);
var inst_37013 = cljs.core.nth.call(null,inst_37011,(1),null);
var inst_37014 = cljs.core.not_EQ_.call(null,inst_37013,inst_37005);
var state_37037__$1 = (function (){var statearr_37071 = state_37037;
(statearr_37071[(9)] = inst_37012);

return statearr_37071;
})();
if(inst_37014){
var statearr_37072_37114 = state_37037__$1;
(statearr_37072_37114[(1)] = (27));

} else {
var statearr_37073_37115 = state_37037__$1;
(statearr_37073_37115[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (16))){
var inst_36993 = (state_37037[(2)]);
var state_37037__$1 = state_37037;
if(cljs.core.truth_(inst_36993)){
var statearr_37074_37116 = state_37037__$1;
(statearr_37074_37116[(1)] = (20));

} else {
var statearr_37075_37117 = state_37037__$1;
(statearr_37075_37117[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (30))){
var inst_37029 = (state_37037[(2)]);
var inst_36976 = inst_37029;
var state_37037__$1 = (function (){var statearr_37076 = state_37037;
(statearr_37076[(7)] = inst_36976);

return statearr_37076;
})();
var statearr_37077_37118 = state_37037__$1;
(statearr_37077_37118[(2)] = null);

(statearr_37077_37118[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (10))){
var inst_36953 = (state_37037[(14)]);
var state_37037__$1 = state_37037;
var statearr_37078_37119 = state_37037__$1;
(statearr_37078_37119[(2)] = inst_36953);

(statearr_37078_37119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (18))){
var state_37037__$1 = state_37037;
var statearr_37079_37120 = state_37037__$1;
(statearr_37079_37120[(2)] = false);

(statearr_37079_37120[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37038 === (8))){
var inst_36965 = (state_37037[(2)]);
var state_37037__$1 = state_37037;
var statearr_37080_37121 = state_37037__$1;
(statearr_37080_37121[(2)] = inst_36965);

(statearr_37080_37121[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29457__auto__))
;
return ((function (switch__29343__auto__,c__29457__auto__){
return (function() {
var devcards$core$state_machine__29344__auto__ = null;
var devcards$core$state_machine__29344__auto____0 = (function (){
var statearr_37084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37084[(0)] = devcards$core$state_machine__29344__auto__);

(statearr_37084[(1)] = (1));

return statearr_37084;
});
var devcards$core$state_machine__29344__auto____1 = (function (state_37037){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_37037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e37085){if((e37085 instanceof Object)){
var ex__29347__auto__ = e37085;
var statearr_37086_37122 = state_37037;
(statearr_37086_37122[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37123 = state_37037;
state_37037 = G__37123;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
devcards$core$state_machine__29344__auto__ = function(state_37037){
switch(arguments.length){
case 0:
return devcards$core$state_machine__29344__auto____0.call(this);
case 1:
return devcards$core$state_machine__29344__auto____1.call(this,state_37037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__29344__auto____0;
devcards$core$state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__29344__auto____1;
return devcards$core$state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto__))
})();
var state__29459__auto__ = (function (){var statearr_37087 = f__29458__auto__.call(null);
(statearr_37087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto__);

return statearr_37087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto__))
);

return c__29457__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
var base__35824__auto___37128 = ({"componentWillMount": (function (){
var this$ = this;
var temp__5457__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__5457__auto__)){
var test_thunks = temp__5457__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__5457__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__5457__auto__)){
var test_thunks = temp__5457__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})});
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__35824__auto___37128);
}

var seq__37124_37129 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__37125_37130 = null;
var count__37126_37131 = (0);
var i__37127_37132 = (0);
while(true){
if((i__37127_37132 < count__37126_37131)){
var property__35825__auto___37133 = cljs.core._nth.call(null,chunk__37125_37130,i__37127_37132);
if(cljs.core.truth_((base__35824__auto___37128[property__35825__auto___37133]))){
(devcards.core.TestDevcard.prototype[property__35825__auto___37133] = (base__35824__auto___37128[property__35825__auto___37133]));
} else {
}

var G__37134 = seq__37124_37129;
var G__37135 = chunk__37125_37130;
var G__37136 = count__37126_37131;
var G__37137 = (i__37127_37132 + (1));
seq__37124_37129 = G__37134;
chunk__37125_37130 = G__37135;
count__37126_37131 = G__37136;
i__37127_37132 = G__37137;
continue;
} else {
var temp__5457__auto___37138 = cljs.core.seq.call(null,seq__37124_37129);
if(temp__5457__auto___37138){
var seq__37124_37139__$1 = temp__5457__auto___37138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37124_37139__$1)){
var c__27712__auto___37140 = cljs.core.chunk_first.call(null,seq__37124_37139__$1);
var G__37141 = cljs.core.chunk_rest.call(null,seq__37124_37139__$1);
var G__37142 = c__27712__auto___37140;
var G__37143 = cljs.core.count.call(null,c__27712__auto___37140);
var G__37144 = (0);
seq__37124_37129 = G__37141;
chunk__37125_37130 = G__37142;
count__37126_37131 = G__37143;
i__37127_37132 = G__37144;
continue;
} else {
var property__35825__auto___37145 = cljs.core.first.call(null,seq__37124_37139__$1);
if(cljs.core.truth_((base__35824__auto___37128[property__35825__auto___37145]))){
(devcards.core.TestDevcard.prototype[property__35825__auto___37145] = (base__35824__auto___37128[property__35825__auto___37145]));
} else {
}

var G__37146 = cljs.core.next.call(null,seq__37124_37139__$1);
var G__37147 = null;
var G__37148 = (0);
var G__37149 = (0);
seq__37124_37129 = G__37146;
chunk__37125_37130 = G__37147;
count__37126_37131 = G__37148;
i__37127_37132 = G__37149;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__27999__auto__ = [];
var len__27992__auto___37154 = arguments.length;
var i__27993__auto___37155 = (0);
while(true){
if((i__27993__auto___37155 < len__27992__auto___37154)){
args__27999__auto__.push((arguments[i__27993__auto___37155]));

var G__37156 = (i__27993__auto___37155 + (1));
i__27993__auto___37155 = G__37156;
continue;
} else {
}
break;
}

var argseq__28000__auto__ = ((((0) < args__27999__auto__.length))?(new cljs.core.IndexedSeq(args__27999__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__28000__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core37151 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core37151 = (function (test_thunks,meta37152){
this.test_thunks = test_thunks;
this.meta37152 = meta37152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core37151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37153,meta37152__$1){
var self__ = this;
var _37153__$1 = this;
return (new devcards.core.t_devcards$core37151(self__.test_thunks,meta37152__$1));
});

devcards.core.t_devcards$core37151.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37153){
var self__ = this;
var _37153__$1 = this;
return self__.meta37152;
});

devcards.core.t_devcards$core37151.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core37151.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,({"test_thunks": self__.test_thunks, "path": path}));
});

devcards.core.t_devcards$core37151.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta37152","meta37152",1404656312,null)], null);
});

devcards.core.t_devcards$core37151.cljs$lang$type = true;

devcards.core.t_devcards$core37151.cljs$lang$ctorStr = "devcards.core/t_devcards$core37151";

devcards.core.t_devcards$core37151.cljs$lang$ctorPrWriter = (function (this__27461__auto__,writer__27462__auto__,opt__27463__auto__){
return cljs.core._write.call(null,writer__27462__auto__,"devcards.core/t_devcards$core37151");
});

devcards.core.__GT_t_devcards$core37151 = (function devcards$core$__GT_t_devcards$core37151(test_thunks__$1,meta37152){
return (new devcards.core.t_devcards$core37151(test_thunks__$1,meta37152));
});

}

return (new devcards.core.t_devcards$core37151(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq37150){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37150));
});

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__5457__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__5457__auto__)){
var cards = temp__5457__auto__;
var temp__5457__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__5457__auto____$1)){
var card = temp__5457__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__5457__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__5457__auto__)){
var base_card_options = temp__5457__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__5457__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__5457__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__5457__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__5457__auto__)){
var card = temp__5457__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs37158 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37158))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs37158)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs37158))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37158)], null)));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__5457__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__5457__auto__)){
var card = temp__5457__auto__;
return React.render((function (){var attrs37160 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37160))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs37160)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs37160))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37160)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__29457__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29457__auto__){
return (function (){
var f__29458__auto__ = (function (){var switch__29343__auto__ = ((function (c__29457__auto__){
return (function (state_37190){
var state_val_37191 = (state_37190[(1)]);
if((state_val_37191 === (1))){
var inst_37181 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_37190__$1 = state_37190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37190__$1,(2),inst_37181);
} else {
if((state_val_37191 === (2))){
var inst_37183 = (state_37190[(2)]);
var inst_37184 = cljs.core.async.timeout.call(null,(100));
var state_37190__$1 = (function (){var statearr_37192 = state_37190;
(statearr_37192[(7)] = inst_37183);

return statearr_37192;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37190__$1,(3),inst_37184);
} else {
if((state_val_37191 === (3))){
var inst_37186 = (state_37190[(2)]);
var inst_37187 = (function (){return ((function (inst_37186,state_val_37191,c__29457__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_37186,state_val_37191,c__29457__auto__))
})();
var inst_37188 = setTimeout(inst_37187,(0));
var state_37190__$1 = (function (){var statearr_37193 = state_37190;
(statearr_37193[(8)] = inst_37186);

return statearr_37193;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37190__$1,inst_37188);
} else {
return null;
}
}
}
});})(c__29457__auto__))
;
return ((function (switch__29343__auto__,c__29457__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__29344__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__29344__auto____0 = (function (){
var statearr_37197 = [null,null,null,null,null,null,null,null,null];
(statearr_37197[(0)] = devcards$core$mount_namespace_$_state_machine__29344__auto__);

(statearr_37197[(1)] = (1));

return statearr_37197;
});
var devcards$core$mount_namespace_$_state_machine__29344__auto____1 = (function (state_37190){
while(true){
var ret_value__29345__auto__ = (function (){try{while(true){
var result__29346__auto__ = switch__29343__auto__.call(null,state_37190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29346__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29346__auto__;
}
break;
}
}catch (e37198){if((e37198 instanceof Object)){
var ex__29347__auto__ = e37198;
var statearr_37199_37201 = state_37190;
(statearr_37199_37201[(5)] = ex__29347__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37202 = state_37190;
state_37190 = G__37202;
continue;
} else {
return ret_value__29345__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__29344__auto__ = function(state_37190){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__29344__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__29344__auto____1.call(this,state_37190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__29344__auto____0;
devcards$core$mount_namespace_$_state_machine__29344__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__29344__auto____1;
return devcards$core$mount_namespace_$_state_machine__29344__auto__;
})()
;})(switch__29343__auto__,c__29457__auto__))
})();
var state__29459__auto__ = (function (){var statearr_37200 = f__29458__auto__.call(null);
(statearr_37200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29457__auto__);

return statearr_37200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29459__auto__);
});})(c__29457__auto__))
);

return c__29457__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1537985798113