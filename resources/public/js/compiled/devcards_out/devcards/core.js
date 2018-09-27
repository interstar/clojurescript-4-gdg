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
document.body.addEventListener("figwheel.js-reload",(function (p1__37578_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__37578_SHARP_.detail], null));
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
var args37579 = [];
var len__27991__auto___37582 = arguments.length;
var i__27992__auto___37583 = (0);
while(true){
if((i__27992__auto___37583 < len__27991__auto___37582)){
args37579.push((arguments[i__27992__auto___37583]));

var G__37584 = (i__27992__auto___37583 + (1));
i__27992__auto___37583 = G__37584;
continue;
} else {
}
break;
}

var G__37581 = args37579.length;
switch (G__37581) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37579.length)].join('')));

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
var map__37592 = c;
var map__37592__$1 = ((((!((map__37592 == null)))?((((map__37592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37592):map__37592);
var path = cljs.core.get.call(null,map__37592__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__37592__$1,new cljs.core.Keyword(null,"func","func",-238706040));
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
var base__36952__auto___37598 = ({"componentDidMount": (function (){
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
devcards.core.CodeHighlight = React.createClass(base__36952__auto___37598);
}

var seq__37594_37599 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__37595_37600 = null;
var count__37596_37601 = (0);
var i__37597_37602 = (0);
while(true){
if((i__37597_37602 < count__37596_37601)){
var property__36953__auto___37603 = cljs.core._nth.call(null,chunk__37595_37600,i__37597_37602);
if(cljs.core.truth_((base__36952__auto___37598[property__36953__auto___37603]))){
(devcards.core.CodeHighlight.prototype[property__36953__auto___37603] = (base__36952__auto___37598[property__36953__auto___37603]));
} else {
}

var G__37604 = seq__37594_37599;
var G__37605 = chunk__37595_37600;
var G__37606 = count__37596_37601;
var G__37607 = (i__37597_37602 + (1));
seq__37594_37599 = G__37604;
chunk__37595_37600 = G__37605;
count__37596_37601 = G__37606;
i__37597_37602 = G__37607;
continue;
} else {
var temp__5457__auto___37608 = cljs.core.seq.call(null,seq__37594_37599);
if(temp__5457__auto___37608){
var seq__37594_37609__$1 = temp__5457__auto___37608;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37594_37609__$1)){
var c__27711__auto___37610 = cljs.core.chunk_first.call(null,seq__37594_37609__$1);
var G__37611 = cljs.core.chunk_rest.call(null,seq__37594_37609__$1);
var G__37612 = c__27711__auto___37610;
var G__37613 = cljs.core.count.call(null,c__27711__auto___37610);
var G__37614 = (0);
seq__37594_37599 = G__37611;
chunk__37595_37600 = G__37612;
count__37596_37601 = G__37613;
i__37597_37602 = G__37614;
continue;
} else {
var property__36953__auto___37615 = cljs.core.first.call(null,seq__37594_37609__$1);
if(cljs.core.truth_((base__36952__auto___37598[property__36953__auto___37615]))){
(devcards.core.CodeHighlight.prototype[property__36953__auto___37615] = (base__36952__auto___37598[property__36953__auto___37615]));
} else {
}

var G__37616 = cljs.core.next.call(null,seq__37594_37609__$1);
var G__37617 = null;
var G__37618 = (0);
var G__37619 = (0);
seq__37594_37599 = G__37616;
chunk__37595_37600 = G__37617;
count__37596_37601 = G__37618;
i__37597_37602 = G__37619;
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
devcards.core.markdown_block__GT_react = (function (){var method_table__27831__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__27832__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__27833__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__27834__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__27835__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__27835__auto__,method_table__27831__auto__,prefer_table__27832__auto__,method_cache__27833__auto__,cached_hierarchy__27834__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__37620){
var map__37621 = p__37620;
var map__37621__$1 = ((((!((map__37621 == null)))?((((map__37621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37621):map__37621);
var content = cljs.core.get.call(null,map__37621__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__37623){
var map__37624 = p__37623;
var map__37624__$1 = ((((!((map__37624 == null)))?((((map__37624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37624):map__37624);
var block = map__37624__$1;
var content = cljs.core.get.call(null,map__37624__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,({"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)}));
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__27998__auto__ = [];
var len__27991__auto___37627 = arguments.length;
var i__27992__auto___37628 = (0);
while(true){
if((i__27992__auto___37628 < len__27991__auto___37627)){
args__27998__auto__.push((arguments[i__27992__auto___37628]));

var G__37629 = (i__27992__auto___37628 + (1));
i__27992__auto___37628 = G__37629;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
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

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq37626){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37626));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",({"key": "devcards_naked-card", "className": (function (){var G__37631 = devcards.system.devcards_rendered_card_class;
var G__37631__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__37631),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__37631);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__37631__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__37631__$1;
}
})()}),sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args37632 = [];
var len__27991__auto___37640 = arguments.length;
var i__27992__auto___37641 = (0);
while(true){
if((i__27992__auto___37641 < len__27991__auto___37640)){
args37632.push((arguments[i__27992__auto___37641]));

var G__37642 = (i__27992__auto___37641 + (1));
i__27992__auto___37641 = G__37642;
continue;
} else {
}
break;
}

var G__37634 = args37632.length;
switch (G__37634) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37632.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__37635 = card;
var map__37635__$1 = ((((!((map__37635 == null)))?((((map__37635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37635):map__37635);
var path = cljs.core.get.call(null,map__37635__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__37635__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))}),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"}),React.createElement("div",({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__37635,map__37635__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__37635,map__37635__$1,path,options))
)}),sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs37637 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs37637))?sablono.interpreter.attributes.call(null,attrs37637):null),((cljs.core.map_QMARK_.call(null,attrs37637))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37637)], null)));
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
var x__27521__auto__ = (((this$ == null))?null:this$);
var m__27522__auto__ = (devcards.core._devcard_options[goog.typeOf(x__27521__auto__)]);
if(!((m__27522__auto__ == null))){
return m__27522__auto__.call(null,this$,devcard_opts);
} else {
var m__27522__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__27522__auto____$1 == null))){
return m__27522__auto____$1.call(null,this$,devcard_opts);
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
var x__27521__auto__ = (((this$ == null))?null:this$);
var m__27522__auto__ = (devcards.core._devcard[goog.typeOf(x__27521__auto__)]);
if(!((m__27522__auto__ == null))){
return m__27522__auto__.call(null,this$,devcard_opts);
} else {
var m__27522__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__27522__auto____$1 == null))){
return m__27522__auto____$1.call(null,this$,devcard_opts);
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
var base__36952__auto___37649 = ({"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs37644 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37644))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs37644)):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_.call(null,attrs37644))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37644)], null)));
})});
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__36952__auto___37649);
}

var seq__37645_37650 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__37646_37651 = null;
var count__37647_37652 = (0);
var i__37648_37653 = (0);
while(true){
if((i__37648_37653 < count__37647_37652)){
var property__36953__auto___37654 = cljs.core._nth.call(null,chunk__37646_37651,i__37648_37653);
if(cljs.core.truth_((base__36952__auto___37649[property__36953__auto___37654]))){
(devcards.core.DontUpdate.prototype[property__36953__auto___37654] = (base__36952__auto___37649[property__36953__auto___37654]));
} else {
}

var G__37655 = seq__37645_37650;
var G__37656 = chunk__37646_37651;
var G__37657 = count__37647_37652;
var G__37658 = (i__37648_37653 + (1));
seq__37645_37650 = G__37655;
chunk__37646_37651 = G__37656;
count__37647_37652 = G__37657;
i__37648_37653 = G__37658;
continue;
} else {
var temp__5457__auto___37659 = cljs.core.seq.call(null,seq__37645_37650);
if(temp__5457__auto___37659){
var seq__37645_37660__$1 = temp__5457__auto___37659;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37645_37660__$1)){
var c__27711__auto___37661 = cljs.core.chunk_first.call(null,seq__37645_37660__$1);
var G__37662 = cljs.core.chunk_rest.call(null,seq__37645_37660__$1);
var G__37663 = c__27711__auto___37661;
var G__37664 = cljs.core.count.call(null,c__27711__auto___37661);
var G__37665 = (0);
seq__37645_37650 = G__37662;
chunk__37646_37651 = G__37663;
count__37647_37652 = G__37664;
i__37648_37653 = G__37665;
continue;
} else {
var property__36953__auto___37666 = cljs.core.first.call(null,seq__37645_37660__$1);
if(cljs.core.truth_((base__36952__auto___37649[property__36953__auto___37666]))){
(devcards.core.DontUpdate.prototype[property__36953__auto___37666] = (base__36952__auto___37649[property__36953__auto___37666]));
} else {
}

var G__37667 = cljs.core.next.call(null,seq__37645_37660__$1);
var G__37668 = null;
var G__37669 = (0);
var G__37670 = (0);
seq__37645_37650 = G__37667;
chunk__37646_37651 = G__37668;
count__37647_37652 = G__37669;
i__37648_37653 = G__37670;
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
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__27734__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__27734__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__27734__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__27734__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27734__auto____$3);
})(),x__27734__auto____$2);
})(),x__27734__auto____$1);
})(),x__27734__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",({"className": "com-rigsomelight-devcards-frameless"}),sablono.interpreter.interpret.call(null,children));
}
});
var base__36952__auto___37677 = ({"getInitialState": (function (){
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
devcards.core.DevcardBase = React.createClass(base__36952__auto___37677);
}

var seq__37673_37678 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__37674_37679 = null;
var count__37675_37680 = (0);
var i__37676_37681 = (0);
while(true){
if((i__37676_37681 < count__37675_37680)){
var property__36953__auto___37682 = cljs.core._nth.call(null,chunk__37674_37679,i__37676_37681);
if(cljs.core.truth_((base__36952__auto___37677[property__36953__auto___37682]))){
(devcards.core.DevcardBase.prototype[property__36953__auto___37682] = (base__36952__auto___37677[property__36953__auto___37682]));
} else {
}

var G__37683 = seq__37673_37678;
var G__37684 = chunk__37674_37679;
var G__37685 = count__37675_37680;
var G__37686 = (i__37676_37681 + (1));
seq__37673_37678 = G__37683;
chunk__37674_37679 = G__37684;
count__37675_37680 = G__37685;
i__37676_37681 = G__37686;
continue;
} else {
var temp__5457__auto___37687 = cljs.core.seq.call(null,seq__37673_37678);
if(temp__5457__auto___37687){
var seq__37673_37688__$1 = temp__5457__auto___37687;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37673_37688__$1)){
var c__27711__auto___37689 = cljs.core.chunk_first.call(null,seq__37673_37688__$1);
var G__37690 = cljs.core.chunk_rest.call(null,seq__37673_37688__$1);
var G__37691 = c__27711__auto___37689;
var G__37692 = cljs.core.count.call(null,c__27711__auto___37689);
var G__37693 = (0);
seq__37673_37678 = G__37690;
chunk__37674_37679 = G__37691;
count__37675_37680 = G__37692;
i__37676_37681 = G__37693;
continue;
} else {
var property__36953__auto___37694 = cljs.core.first.call(null,seq__37673_37688__$1);
if(cljs.core.truth_((base__36952__auto___37677[property__36953__auto___37694]))){
(devcards.core.DevcardBase.prototype[property__36953__auto___37694] = (base__36952__auto___37677[property__36953__auto___37694]));
} else {
}

var G__37695 = cljs.core.next.call(null,seq__37673_37688__$1);
var G__37696 = null;
var G__37697 = (0);
var G__37698 = (0);
seq__37673_37678 = G__37695;
chunk__37674_37679 = G__37696;
count__37675_37680 = G__37697;
i__37676_37681 = G__37698;
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
var base__36952__auto___37703 = ({"getInitialState": (function (){
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
devcards.core.DomComponent = React.createClass(base__36952__auto___37703);
}

var seq__37699_37704 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__37700_37705 = null;
var count__37701_37706 = (0);
var i__37702_37707 = (0);
while(true){
if((i__37702_37707 < count__37701_37706)){
var property__36953__auto___37708 = cljs.core._nth.call(null,chunk__37700_37705,i__37702_37707);
if(cljs.core.truth_((base__36952__auto___37703[property__36953__auto___37708]))){
(devcards.core.DomComponent.prototype[property__36953__auto___37708] = (base__36952__auto___37703[property__36953__auto___37708]));
} else {
}

var G__37709 = seq__37699_37704;
var G__37710 = chunk__37700_37705;
var G__37711 = count__37701_37706;
var G__37712 = (i__37702_37707 + (1));
seq__37699_37704 = G__37709;
chunk__37700_37705 = G__37710;
count__37701_37706 = G__37711;
i__37702_37707 = G__37712;
continue;
} else {
var temp__5457__auto___37713 = cljs.core.seq.call(null,seq__37699_37704);
if(temp__5457__auto___37713){
var seq__37699_37714__$1 = temp__5457__auto___37713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37699_37714__$1)){
var c__27711__auto___37715 = cljs.core.chunk_first.call(null,seq__37699_37714__$1);
var G__37716 = cljs.core.chunk_rest.call(null,seq__37699_37714__$1);
var G__37717 = c__27711__auto___37715;
var G__37718 = cljs.core.count.call(null,c__27711__auto___37715);
var G__37719 = (0);
seq__37699_37704 = G__37716;
chunk__37700_37705 = G__37717;
count__37701_37706 = G__37718;
i__37702_37707 = G__37719;
continue;
} else {
var property__36953__auto___37720 = cljs.core.first.call(null,seq__37699_37714__$1);
if(cljs.core.truth_((base__36952__auto___37703[property__36953__auto___37720]))){
(devcards.core.DomComponent.prototype[property__36953__auto___37720] = (base__36952__auto___37703[property__36953__auto___37720]));
} else {
}

var G__37721 = cljs.core.next.call(null,seq__37699_37714__$1);
var G__37722 = null;
var G__37723 = (0);
var G__37724 = (0);
seq__37699_37704 = G__37721;
chunk__37700_37705 = G__37722;
count__37701_37706 = G__37723;
i__37702_37707 = G__37724;
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
return (function (p1__37725_SHARP_){
return !(p1__37725_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__37734 = opts;
var map__37734__$1 = ((((!((map__37734 == null)))?((((map__37734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37734):map__37734);
var name = cljs.core.get.call(null,map__37734__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__37734__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__37734__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__37734__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
})()], null),cljs.core.mapv.call(null,((function (map__37734,map__37734__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__37726_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__37726_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__37734,map__37734__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})}),sablono.interpreter.interpret.call(null,React.createElement("code",({"style": ({"flex": "1 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",({"style": ({"flex": "3 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",({"style": ({"flex": "1 100px"})})," Received: ",(function (){var attrs37742 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs37742))?sablono.interpreter.attributes.call(null,attrs37742):null),((cljs.core.map_QMARK_.call(null,attrs37742))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37742)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",({"className": "com-rigsomelight-devcards-card-base-no-pad"}),(function (){var attrs37746 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37746))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs37746)):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_.call(null,attrs37746))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37746)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs37747 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37747))?sablono.interpreter.attributes.call(null,attrs37747):null),((cljs.core.map_QMARK_.call(null,attrs37747))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37747)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs37748 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37748))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs37748)):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_.call(null,attrs37748))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37748)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__37749_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__37749_SHARP_);
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
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27478__auto__,k__27479__auto__){
var self__ = this;
var this__27478__auto____$1 = this;
return cljs.core._lookup.call(null,this__27478__auto____$1,k__27479__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27480__auto__,k37751,else__27481__auto__){
var self__ = this;
var this__27480__auto____$1 = this;
var G__37753 = (((k37751 instanceof cljs.core.Keyword))?k37751.fqn:null);
switch (G__37753) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37751,else__27481__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27492__auto__,writer__27493__auto__,opts__27494__auto__){
var self__ = this;
var this__27492__auto____$1 = this;
var pr_pair__27495__auto__ = ((function (this__27492__auto____$1){
return (function (keyval__27496__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27493__auto__,cljs.core.pr_writer,""," ","",opts__27494__auto__,keyval__27496__auto__);
});})(this__27492__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27493__auto__,pr_pair__27495__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__27494__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37750){
var self__ = this;
var G__37750__$1 = this;
return (new cljs.core.RecordIter((0),G__37750__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27476__auto__){
var self__ = this;
var this__27476__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27472__auto__){
var self__ = this;
var this__27472__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27482__auto__){
var self__ = this;
var this__27482__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27473__auto__){
var self__ = this;
var this__27473__auto____$1 = this;
var h__27245__auto__ = self__.__hash;
if(!((h__27245__auto__ == null))){
return h__27245__auto__;
} else {
var h__27245__auto____$1 = cljs.core.hash_imap.call(null,this__27473__auto____$1);
self__.__hash = h__27245__auto____$1;

return h__27245__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27474__auto__,other__27475__auto__){
var self__ = this;
var this__27474__auto____$1 = this;
if(cljs.core.truth_((function (){var and__26796__auto__ = other__27475__auto__;
if(cljs.core.truth_(and__26796__auto__)){
var and__26796__auto____$1 = (this__27474__auto____$1.constructor === other__27475__auto__.constructor);
if(and__26796__auto____$1){
return cljs.core.equiv_map.call(null,this__27474__auto____$1,other__27475__auto__);
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

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27487__auto__,k__27488__auto__){
var self__ = this;
var this__27487__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__27488__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27487__auto____$1),self__.__meta),k__27488__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27488__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27485__auto__,k__27486__auto__,G__37750){
var self__ = this;
var this__27485__auto____$1 = this;
var pred__37754 = cljs.core.keyword_identical_QMARK_;
var expr__37755 = k__27486__auto__;
if(cljs.core.truth_(pred__37754.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__37755))){
return (new devcards.core.IdentiyOptions(G__37750,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27486__auto__,G__37750),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27490__auto__){
var self__ = this;
var this__27490__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27477__auto__,G__37750){
var self__ = this;
var this__27477__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__37750,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27483__auto__,entry__27484__auto__){
var self__ = this;
var this__27483__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27484__auto__)){
return cljs.core._assoc.call(null,this__27483__auto____$1,cljs.core._nth.call(null,entry__27484__auto__,(0)),cljs.core._nth.call(null,entry__27484__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27483__auto____$1,entry__27484__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__27514__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__27514__auto__,writer__27515__auto__){
return cljs.core._write.call(null,writer__27515__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__37752){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__37752),null,cljs.core.dissoc.call(null,G__37752,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__37758){
var map__37761 = p__37758;
var map__37761__$1 = ((((!((map__37761 == null)))?((((map__37761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37761):map__37761);
var devcard_opts = map__37761__$1;
var options = cljs.core.get.call(null,map__37761__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__37761,map__37761__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__37761,map__37761__$1,devcard_opts,options))
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
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27478__auto__,k__27479__auto__){
var self__ = this;
var this__27478__auto____$1 = this;
return cljs.core._lookup.call(null,this__27478__auto____$1,k__27479__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27480__auto__,k37764,else__27481__auto__){
var self__ = this;
var this__27480__auto____$1 = this;
var G__37766 = (((k37764 instanceof cljs.core.Keyword))?k37764.fqn:null);
switch (G__37766) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37764,else__27481__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27492__auto__,writer__27493__auto__,opts__27494__auto__){
var self__ = this;
var this__27492__auto____$1 = this;
var pr_pair__27495__auto__ = ((function (this__27492__auto____$1){
return (function (keyval__27496__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27493__auto__,cljs.core.pr_writer,""," ","",opts__27494__auto__,keyval__27496__auto__);
});})(this__27492__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27493__auto__,pr_pair__27495__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__27494__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37763){
var self__ = this;
var G__37763__$1 = this;
return (new cljs.core.RecordIter((0),G__37763__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27476__auto__){
var self__ = this;
var this__27476__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27472__auto__){
var self__ = this;
var this__27472__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27482__auto__){
var self__ = this;
var this__27482__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27473__auto__){
var self__ = this;
var this__27473__auto____$1 = this;
var h__27245__auto__ = self__.__hash;
if(!((h__27245__auto__ == null))){
return h__27245__auto__;
} else {
var h__27245__auto____$1 = cljs.core.hash_imap.call(null,this__27473__auto____$1);
self__.__hash = h__27245__auto____$1;

return h__27245__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27474__auto__,other__27475__auto__){
var self__ = this;
var this__27474__auto____$1 = this;
if(cljs.core.truth_((function (){var and__26796__auto__ = other__27475__auto__;
if(cljs.core.truth_(and__26796__auto__)){
var and__26796__auto____$1 = (this__27474__auto____$1.constructor === other__27475__auto__.constructor);
if(and__26796__auto____$1){
return cljs.core.equiv_map.call(null,this__27474__auto____$1,other__27475__auto__);
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

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27487__auto__,k__27488__auto__){
var self__ = this;
var this__27487__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__27488__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27487__auto____$1),self__.__meta),k__27488__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27488__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27485__auto__,k__27486__auto__,G__37763){
var self__ = this;
var this__27485__auto____$1 = this;
var pred__37767 = cljs.core.keyword_identical_QMARK_;
var expr__37768 = k__27486__auto__;
if(cljs.core.truth_(pred__37767.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__37768))){
return (new devcards.core.AtomLikeOptions(G__37763,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27486__auto__,G__37763),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27490__auto__){
var self__ = this;
var this__27490__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27477__auto__,G__37763){
var self__ = this;
var this__27477__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__37763,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27483__auto__,entry__27484__auto__){
var self__ = this;
var this__27483__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27484__auto__)){
return cljs.core._assoc.call(null,this__27483__auto____$1,cljs.core._nth.call(null,entry__27484__auto__,(0)),cljs.core._nth.call(null,entry__27484__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27483__auto____$1,entry__27484__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__27514__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__27514__auto__,writer__27515__auto__){
return cljs.core._write.call(null,writer__27515__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__37765){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__37765),null,cljs.core.dissoc.call(null,G__37765,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
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
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27478__auto__,k__27479__auto__){
var self__ = this;
var this__27478__auto____$1 = this;
return cljs.core._lookup.call(null,this__27478__auto____$1,k__27479__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27480__auto__,k37774,else__27481__auto__){
var self__ = this;
var this__27480__auto____$1 = this;
var G__37776 = (((k37774 instanceof cljs.core.Keyword))?k37774.fqn:null);
switch (G__37776) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k37774,else__27481__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27492__auto__,writer__27493__auto__,opts__27494__auto__){
var self__ = this;
var this__27492__auto____$1 = this;
var pr_pair__27495__auto__ = ((function (this__27492__auto____$1){
return (function (keyval__27496__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27493__auto__,cljs.core.pr_writer,""," ","",opts__27494__auto__,keyval__27496__auto__);
});})(this__27492__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27493__auto__,pr_pair__27495__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__27494__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37773){
var self__ = this;
var G__37773__$1 = this;
return (new cljs.core.RecordIter((0),G__37773__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27476__auto__){
var self__ = this;
var this__27476__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27472__auto__){
var self__ = this;
var this__27472__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27482__auto__){
var self__ = this;
var this__27482__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27473__auto__){
var self__ = this;
var this__27473__auto____$1 = this;
var h__27245__auto__ = self__.__hash;
if(!((h__27245__auto__ == null))){
return h__27245__auto__;
} else {
var h__27245__auto____$1 = cljs.core.hash_imap.call(null,this__27473__auto____$1);
self__.__hash = h__27245__auto____$1;

return h__27245__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27474__auto__,other__27475__auto__){
var self__ = this;
var this__27474__auto____$1 = this;
if(cljs.core.truth_((function (){var and__26796__auto__ = other__27475__auto__;
if(cljs.core.truth_(and__26796__auto__)){
var and__26796__auto____$1 = (this__27474__auto____$1.constructor === other__27475__auto__.constructor);
if(and__26796__auto____$1){
return cljs.core.equiv_map.call(null,this__27474__auto____$1,other__27475__auto__);
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

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27487__auto__,k__27488__auto__){
var self__ = this;
var this__27487__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__27488__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27487__auto____$1),self__.__meta),k__27488__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27488__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27485__auto__,k__27486__auto__,G__37773){
var self__ = this;
var this__27485__auto____$1 = this;
var pred__37777 = cljs.core.keyword_identical_QMARK_;
var expr__37778 = k__27486__auto__;
if(cljs.core.truth_(pred__37777.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__37778))){
return (new devcards.core.EdnLikeOptions(G__37773,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27486__auto__,G__37773),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27490__auto__){
var self__ = this;
var this__27490__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27477__auto__,G__37773){
var self__ = this;
var this__27477__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__37773,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27483__auto__,entry__27484__auto__){
var self__ = this;
var this__27483__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27484__auto__)){
return cljs.core._assoc.call(null,this__27483__auto____$1,cljs.core._nth.call(null,entry__27484__auto__,(0)),cljs.core._nth.call(null,entry__27484__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27483__auto____$1,entry__27484__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__27514__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__27514__auto__,writer__27515__auto__){
return cljs.core._write.call(null,writer__27515__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__37775){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__37775),null,cljs.core.dissoc.call(null,G__37775,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
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
if((function (){var G__37792 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__37792 == null))){
if((false) || (G__37792.devcards$core$IDevcard$)){
return true;
} else {
if((!G__37792.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__37792);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__37792);
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
var map__37795 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__37795__$1 = ((((!((map__37795 == null)))?((((map__37795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37795):map__37795);
var history = cljs.core.get.call(null,map__37795__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__37795__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
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
var map__37799 = cljs.core.deref.call(null,history_atom);
var map__37799__$1 = ((((!((map__37799 == null)))?((((map__37799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37799):map__37799);
var history = cljs.core.get.call(null,map__37799__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__37799__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
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
var map__37803 = cljs.core.deref.call(null,history_atom);
var map__37803__$1 = ((((!((map__37803 == null)))?((((map__37803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37803):map__37803);
var history = cljs.core.get.call(null,map__37803__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__37803__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
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
var map__37807 = cljs.core.deref.call(null,history_atom);
var map__37807__$1 = ((((!((map__37807 == null)))?((((map__37807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37807):map__37807);
var history = cljs.core.get.call(null,map__37807__$1,new cljs.core.Keyword(null,"history","history",-247395220));
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
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__27734__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27734__auto__);
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
return (function (p__37809){
var map__37810 = p__37809;
var map__37810__$1 = ((((!((map__37810 == null)))?((((map__37810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37810):map__37810);
var ha = map__37810__$1;
var pointer = cljs.core.get.call(null,map__37810__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__37810__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__37810__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
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
var _STAR_current_env_STAR_37825 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_37825;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__27831__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__27832__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__27833__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__27834__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__27835__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__27835__auto__,method_table__27831__auto__,prefer_table__27832__auto__,method_cache__27833__auto__,cached_hierarchy__27834__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs37826 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37826))?sablono.interpreter.attributes.call(null,attrs37826):null),((cljs.core.map_QMARK_.call(null,attrs37826))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37826)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__37827,body){
var map__37831 = p__37827;
var map__37831__$1 = ((((!((map__37831 == null)))?((((map__37831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37831):map__37831);
var message = cljs.core.get.call(null,map__37831__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs37833 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs37833))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs37833)):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_.call(null,attrs37833))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37833)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__37834){
var map__37842 = p__37834;
var map__37842__$1 = ((((!((map__37842 == null)))?((((map__37842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37842):map__37842);
var m = map__37842__$1;
var expected = cljs.core.get.call(null,map__37842__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__37842__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__37842__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs37844 = React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37844))?sablono.interpreter.attributes.call(null,attrs37844):null),((cljs.core.map_QMARK_.call(null,attrs37844))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37844),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs37851 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs37851))?sablono.interpreter.attributes.call(null,attrs37851):null),((cljs.core.map_QMARK_.call(null,attrs37851))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37851)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs37852 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37852))?sablono.interpreter.attributes.call(null,attrs37852):null),((cljs.core.map_QMARK_.call(null,attrs37852))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37852)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__37853){
var map__37854 = p__37853;
var map__37854__$1 = ((((!((map__37854 == null)))?((((map__37854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37854):map__37854);
var testing_contexts = cljs.core.get.call(null,map__37854__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs37856 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__37854,map__37854__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__37854,map__37854__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__27734__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27734__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37856))?sablono.interpreter.attributes.call(null,attrs37856):null),((cljs.core.map_QMARK_.call(null,attrs37856))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37856)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs37865 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__37866,p__37867){
var map__37868 = p__37866;
var map__37868__$1 = ((((!((map__37868 == null)))?((((map__37868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37868):map__37868);
var last_context = cljs.core.get.call(null,map__37868__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__37868__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__37869 = p__37867;
var i = cljs.core.nth.call(null,vec__37869,(0),null);
var t = cljs.core.nth.call(null,vec__37869,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__27734__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27734__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs37865))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs37865)):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_.call(null,attrs37865))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs37865)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__37885){
var map__37886 = p__37885;
var map__37886__$1 = ((((!((map__37886 == null)))?((((map__37886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37886):map__37886);
var type = cljs.core.get.call(null,map__37886__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__37884 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__37884__$1 = ((((!((map__37884 == null)))?((((map__37884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37884):map__37884);
var fail = cljs.core.get.call(null,map__37884__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__37884__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__37884__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"}),React.createElement("div",({"className": "com-rigsomelight-devcards-panel-heading"}),React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__37884,map__37884__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__37884,map__37884__$1,fail,pass,error,error__$1))
)}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__37884,map__37884__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(error_QMARK_,tests,some_tests,total_tests,map__37884,map__37884__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__37884,map__37884__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__37884,map__37884__$1,fail,pass,error,error__$1){
return (function (p__37889){
var map__37890 = p__37889;
var map__37890__$1 = ((((!((map__37890 == null)))?((((map__37890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37890):map__37890);
var type = cljs.core.get.call(null,map__37890__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__37884,map__37884__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__37884,map__37884__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__37884,map__37884__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__37884,map__37884__$1,fail,pass,error,error__$1){
return (function (p__37892){
var map__37893 = p__37892;
var map__37893__$1 = ((((!((map__37893 == null)))?((((map__37893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37893):map__37893);
var type = cljs.core.get.call(null,map__37893__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__37884,map__37884__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__37884,map__37884__$1,fail,pass,error,error__$1))
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
devcards.core.test_loop = (function (){var c__29456__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto__){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto__){
return (function (state_37983){
var state_val_37984 = (state_37983[(1)]);
if((state_val_37984 === (7))){
var state_37983__$1 = state_37983;
var statearr_37985_38034 = state_37983__$1;
(statearr_37985_38034[(2)] = false);

(statearr_37985_38034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (20))){
var inst_37922 = (state_37983[(7)]);
var inst_37941 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37922);
var state_37983__$1 = state_37983;
var statearr_37986_38035 = state_37983__$1;
(statearr_37986_38035[(2)] = inst_37941);

(statearr_37986_38035[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (27))){
var inst_37958 = (state_37983[(8)]);
var inst_37946 = (state_37983[(9)]);
var inst_37962 = inst_37946.call(null,inst_37958);
var state_37983__$1 = state_37983;
var statearr_37987_38036 = state_37983__$1;
(statearr_37987_38036[(2)] = inst_37962);

(statearr_37987_38036[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (1))){
var state_37983__$1 = state_37983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37983__$1,(2),devcards.core.test_channel);
} else {
if((state_val_37984 === (24))){
var state_37983__$1 = state_37983;
var statearr_37988_38037 = state_37983__$1;
(statearr_37988_38037[(2)] = null);

(statearr_37988_38037[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (4))){
var state_37983__$1 = state_37983;
var statearr_37989_38038 = state_37983__$1;
(statearr_37989_38038[(2)] = false);

(statearr_37989_38038[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (15))){
var state_37983__$1 = state_37983;
var statearr_37990_38039 = state_37983__$1;
(statearr_37990_38039[(2)] = false);

(statearr_37990_38039[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (21))){
var inst_37922 = (state_37983[(7)]);
var state_37983__$1 = state_37983;
var statearr_37991_38040 = state_37983__$1;
(statearr_37991_38040[(2)] = inst_37922);

(statearr_37991_38040[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (13))){
var inst_37981 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37983__$1,inst_37981);
} else {
if((state_val_37984 === (22))){
var inst_37945 = (state_37983[(10)]);
var inst_37944 = (state_37983[(2)]);
var inst_37945__$1 = cljs.core.get.call(null,inst_37944,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_37946 = cljs.core.get.call(null,inst_37944,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_37983__$1 = (function (){var statearr_37992 = state_37983;
(statearr_37992[(10)] = inst_37945__$1);

(statearr_37992[(9)] = inst_37946);

return statearr_37992;
})();
if(cljs.core.truth_(inst_37945__$1)){
var statearr_37993_38041 = state_37983__$1;
(statearr_37993_38041[(1)] = (23));

} else {
var statearr_37994_38042 = state_37983__$1;
(statearr_37994_38042[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (29))){
var inst_37972 = (state_37983[(2)]);
var inst_37973 = cljs.test.clear_env_BANG_.call(null);
var state_37983__$1 = (function (){var statearr_37995 = state_37983;
(statearr_37995[(11)] = inst_37973);

(statearr_37995[(12)] = inst_37972);

return statearr_37995;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37983__$1,(30),devcards.core.test_channel);
} else {
if((state_val_37984 === (6))){
var state_37983__$1 = state_37983;
var statearr_37996_38043 = state_37983__$1;
(statearr_37996_38043[(2)] = true);

(statearr_37996_38043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (28))){
var inst_37946 = (state_37983[(9)]);
var inst_37964 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_37965 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_37966 = cljs.core.PersistentHashMap.fromArrays(inst_37964,inst_37965);
var inst_37967 = devcards.core.collect_test.call(null,inst_37966);
var inst_37968 = cljs.test.get_current_env.call(null);
var inst_37969 = cljs.core.assoc.call(null,inst_37968,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_37970 = inst_37946.call(null,inst_37969);
var state_37983__$1 = (function (){var statearr_37997 = state_37983;
(statearr_37997[(13)] = inst_37967);

return statearr_37997;
})();
var statearr_37998_38044 = state_37983__$1;
(statearr_37998_38044[(2)] = inst_37970);

(statearr_37998_38044[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (25))){
var inst_37979 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
var statearr_37999_38045 = state_37983__$1;
(statearr_37999_38045[(2)] = inst_37979);

(statearr_37999_38045[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (17))){
var state_37983__$1 = state_37983;
var statearr_38000_38046 = state_37983__$1;
(statearr_38000_38046[(2)] = true);

(statearr_38000_38046[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (3))){
var inst_37899 = (state_37983[(14)]);
var inst_37904 = inst_37899.cljs$lang$protocol_mask$partition0$;
var inst_37905 = (inst_37904 & (64));
var inst_37906 = inst_37899.cljs$core$ISeq$;
var inst_37907 = (inst_37905) || (inst_37906);
var state_37983__$1 = state_37983;
if(cljs.core.truth_(inst_37907)){
var statearr_38001_38047 = state_37983__$1;
(statearr_38001_38047[(1)] = (6));

} else {
var statearr_38002_38048 = state_37983__$1;
(statearr_38002_38048[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (12))){
var inst_37922 = (state_37983[(7)]);
var inst_37926 = (inst_37922 == null);
var inst_37927 = cljs.core.not.call(null,inst_37926);
var state_37983__$1 = state_37983;
if(inst_37927){
var statearr_38003_38049 = state_37983__$1;
(statearr_38003_38049[(1)] = (14));

} else {
var statearr_38004_38050 = state_37983__$1;
(statearr_38004_38050[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (2))){
var inst_37899 = (state_37983[(14)]);
var inst_37899__$1 = (state_37983[(2)]);
var inst_37901 = (inst_37899__$1 == null);
var inst_37902 = cljs.core.not.call(null,inst_37901);
var state_37983__$1 = (function (){var statearr_38005 = state_37983;
(statearr_38005[(14)] = inst_37899__$1);

return statearr_38005;
})();
if(inst_37902){
var statearr_38006_38051 = state_37983__$1;
(statearr_38006_38051[(1)] = (3));

} else {
var statearr_38007_38052 = state_37983__$1;
(statearr_38007_38052[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (23))){
var inst_37945 = (state_37983[(10)]);
var inst_37951 = (state_37983[(15)]);
var inst_37951__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_37952 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37953 = devcards.core.run_card_tests.call(null,inst_37945);
var inst_37954 = [inst_37953,inst_37951__$1];
var inst_37955 = (new cljs.core.PersistentVector(null,2,(5),inst_37952,inst_37954,null));
var state_37983__$1 = (function (){var statearr_38008 = state_37983;
(statearr_38008[(15)] = inst_37951__$1);

return statearr_38008;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37983__$1,(26),inst_37955);
} else {
if((state_val_37984 === (19))){
var inst_37936 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
var statearr_38009_38053 = state_37983__$1;
(statearr_38009_38053[(2)] = inst_37936);

(statearr_38009_38053[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (11))){
var inst_37899 = (state_37983[(14)]);
var inst_37919 = (state_37983[(2)]);
var inst_37920 = cljs.core.get.call(null,inst_37919,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_37921 = cljs.core.get.call(null,inst_37919,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_37922 = inst_37899;
var state_37983__$1 = (function (){var statearr_38010 = state_37983;
(statearr_38010[(16)] = inst_37920);

(statearr_38010[(7)] = inst_37922);

(statearr_38010[(17)] = inst_37921);

return statearr_38010;
})();
var statearr_38011_38054 = state_37983__$1;
(statearr_38011_38054[(2)] = null);

(statearr_38011_38054[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (9))){
var inst_37899 = (state_37983[(14)]);
var inst_37916 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37899);
var state_37983__$1 = state_37983;
var statearr_38012_38055 = state_37983__$1;
(statearr_38012_38055[(2)] = inst_37916);

(statearr_38012_38055[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (5))){
var inst_37914 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
if(cljs.core.truth_(inst_37914)){
var statearr_38013_38056 = state_37983__$1;
(statearr_38013_38056[(1)] = (9));

} else {
var statearr_38014_38057 = state_37983__$1;
(statearr_38014_38057[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (14))){
var inst_37922 = (state_37983[(7)]);
var inst_37929 = inst_37922.cljs$lang$protocol_mask$partition0$;
var inst_37930 = (inst_37929 & (64));
var inst_37931 = inst_37922.cljs$core$ISeq$;
var inst_37932 = (inst_37930) || (inst_37931);
var state_37983__$1 = state_37983;
if(cljs.core.truth_(inst_37932)){
var statearr_38015_38058 = state_37983__$1;
(statearr_38015_38058[(1)] = (17));

} else {
var statearr_38016_38059 = state_37983__$1;
(statearr_38016_38059[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (26))){
var inst_37951 = (state_37983[(15)]);
var inst_37957 = (state_37983[(2)]);
var inst_37958 = cljs.core.nth.call(null,inst_37957,(0),null);
var inst_37959 = cljs.core.nth.call(null,inst_37957,(1),null);
var inst_37960 = cljs.core.not_EQ_.call(null,inst_37959,inst_37951);
var state_37983__$1 = (function (){var statearr_38017 = state_37983;
(statearr_38017[(8)] = inst_37958);

return statearr_38017;
})();
if(inst_37960){
var statearr_38018_38060 = state_37983__$1;
(statearr_38018_38060[(1)] = (27));

} else {
var statearr_38019_38061 = state_37983__$1;
(statearr_38019_38061[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (16))){
var inst_37939 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
if(cljs.core.truth_(inst_37939)){
var statearr_38020_38062 = state_37983__$1;
(statearr_38020_38062[(1)] = (20));

} else {
var statearr_38021_38063 = state_37983__$1;
(statearr_38021_38063[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (30))){
var inst_37975 = (state_37983[(2)]);
var inst_37922 = inst_37975;
var state_37983__$1 = (function (){var statearr_38022 = state_37983;
(statearr_38022[(7)] = inst_37922);

return statearr_38022;
})();
var statearr_38023_38064 = state_37983__$1;
(statearr_38023_38064[(2)] = null);

(statearr_38023_38064[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (10))){
var inst_37899 = (state_37983[(14)]);
var state_37983__$1 = state_37983;
var statearr_38024_38065 = state_37983__$1;
(statearr_38024_38065[(2)] = inst_37899);

(statearr_38024_38065[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (18))){
var state_37983__$1 = state_37983;
var statearr_38025_38066 = state_37983__$1;
(statearr_38025_38066[(2)] = false);

(statearr_38025_38066[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37984 === (8))){
var inst_37911 = (state_37983[(2)]);
var state_37983__$1 = state_37983;
var statearr_38026_38067 = state_37983__$1;
(statearr_38026_38067[(2)] = inst_37911);

(statearr_38026_38067[(1)] = (5));


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
});})(c__29456__auto__))
;
return ((function (switch__29342__auto__,c__29456__auto__){
return (function() {
var devcards$core$state_machine__29343__auto__ = null;
var devcards$core$state_machine__29343__auto____0 = (function (){
var statearr_38030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38030[(0)] = devcards$core$state_machine__29343__auto__);

(statearr_38030[(1)] = (1));

return statearr_38030;
});
var devcards$core$state_machine__29343__auto____1 = (function (state_37983){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_37983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e38031){if((e38031 instanceof Object)){
var ex__29346__auto__ = e38031;
var statearr_38032_38068 = state_37983;
(statearr_38032_38068[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38069 = state_37983;
state_37983 = G__38069;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
devcards$core$state_machine__29343__auto__ = function(state_37983){
switch(arguments.length){
case 0:
return devcards$core$state_machine__29343__auto____0.call(this);
case 1:
return devcards$core$state_machine__29343__auto____1.call(this,state_37983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__29343__auto____0;
devcards$core$state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__29343__auto____1;
return devcards$core$state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto__))
})();
var state__29458__auto__ = (function (){var statearr_38033 = f__29457__auto__.call(null);
(statearr_38033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto__);

return statearr_38033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto__))
);

return c__29456__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
var base__36952__auto___38074 = ({"componentWillMount": (function (){
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
devcards.core.TestDevcard = React.createClass(base__36952__auto___38074);
}

var seq__38070_38075 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__38071_38076 = null;
var count__38072_38077 = (0);
var i__38073_38078 = (0);
while(true){
if((i__38073_38078 < count__38072_38077)){
var property__36953__auto___38079 = cljs.core._nth.call(null,chunk__38071_38076,i__38073_38078);
if(cljs.core.truth_((base__36952__auto___38074[property__36953__auto___38079]))){
(devcards.core.TestDevcard.prototype[property__36953__auto___38079] = (base__36952__auto___38074[property__36953__auto___38079]));
} else {
}

var G__38080 = seq__38070_38075;
var G__38081 = chunk__38071_38076;
var G__38082 = count__38072_38077;
var G__38083 = (i__38073_38078 + (1));
seq__38070_38075 = G__38080;
chunk__38071_38076 = G__38081;
count__38072_38077 = G__38082;
i__38073_38078 = G__38083;
continue;
} else {
var temp__5457__auto___38084 = cljs.core.seq.call(null,seq__38070_38075);
if(temp__5457__auto___38084){
var seq__38070_38085__$1 = temp__5457__auto___38084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38070_38085__$1)){
var c__27711__auto___38086 = cljs.core.chunk_first.call(null,seq__38070_38085__$1);
var G__38087 = cljs.core.chunk_rest.call(null,seq__38070_38085__$1);
var G__38088 = c__27711__auto___38086;
var G__38089 = cljs.core.count.call(null,c__27711__auto___38086);
var G__38090 = (0);
seq__38070_38075 = G__38087;
chunk__38071_38076 = G__38088;
count__38072_38077 = G__38089;
i__38073_38078 = G__38090;
continue;
} else {
var property__36953__auto___38091 = cljs.core.first.call(null,seq__38070_38085__$1);
if(cljs.core.truth_((base__36952__auto___38074[property__36953__auto___38091]))){
(devcards.core.TestDevcard.prototype[property__36953__auto___38091] = (base__36952__auto___38074[property__36953__auto___38091]));
} else {
}

var G__38092 = cljs.core.next.call(null,seq__38070_38085__$1);
var G__38093 = null;
var G__38094 = (0);
var G__38095 = (0);
seq__38070_38075 = G__38092;
chunk__38071_38076 = G__38093;
count__38072_38077 = G__38094;
i__38073_38078 = G__38095;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__27998__auto__ = [];
var len__27991__auto___38100 = arguments.length;
var i__27992__auto___38101 = (0);
while(true){
if((i__27992__auto___38101 < len__27991__auto___38100)){
args__27998__auto__.push((arguments[i__27992__auto___38101]));

var G__38102 = (i__27992__auto___38101 + (1));
i__27992__auto___38101 = G__38102;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((0) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__27999__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core38097 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core38097 = (function (test_thunks,meta38098){
this.test_thunks = test_thunks;
this.meta38098 = meta38098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core38097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38099,meta38098__$1){
var self__ = this;
var _38099__$1 = this;
return (new devcards.core.t_devcards$core38097(self__.test_thunks,meta38098__$1));
});

devcards.core.t_devcards$core38097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38099){
var self__ = this;
var _38099__$1 = this;
return self__.meta38098;
});

devcards.core.t_devcards$core38097.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core38097.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,({"test_thunks": self__.test_thunks, "path": path}));
});

devcards.core.t_devcards$core38097.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta38098","meta38098",-1692160773,null)], null);
});

devcards.core.t_devcards$core38097.cljs$lang$type = true;

devcards.core.t_devcards$core38097.cljs$lang$ctorStr = "devcards.core/t_devcards$core38097";

devcards.core.t_devcards$core38097.cljs$lang$ctorPrWriter = (function (this__27460__auto__,writer__27461__auto__,opt__27462__auto__){
return cljs.core._write.call(null,writer__27461__auto__,"devcards.core/t_devcards$core38097");
});

devcards.core.__GT_t_devcards$core38097 = (function devcards$core$__GT_t_devcards$core38097(test_thunks__$1,meta38098){
return (new devcards.core.t_devcards$core38097(test_thunks__$1,meta38098));
});

}

return (new devcards.core.t_devcards$core38097(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq38096){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38096));
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

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs38104 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38104))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs38104)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs38104))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38104)], null)));
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
return React.render((function (){var attrs38106 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs38106))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs38106)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs38106))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs38106)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__29456__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto__){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto__){
return (function (state_38136){
var state_val_38137 = (state_38136[(1)]);
if((state_val_38137 === (1))){
var inst_38127 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_38136__$1 = state_38136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38136__$1,(2),inst_38127);
} else {
if((state_val_38137 === (2))){
var inst_38129 = (state_38136[(2)]);
var inst_38130 = cljs.core.async.timeout.call(null,(100));
var state_38136__$1 = (function (){var statearr_38138 = state_38136;
(statearr_38138[(7)] = inst_38129);

return statearr_38138;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38136__$1,(3),inst_38130);
} else {
if((state_val_38137 === (3))){
var inst_38132 = (state_38136[(2)]);
var inst_38133 = (function (){return ((function (inst_38132,state_val_38137,c__29456__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_38132,state_val_38137,c__29456__auto__))
})();
var inst_38134 = setTimeout(inst_38133,(0));
var state_38136__$1 = (function (){var statearr_38139 = state_38136;
(statearr_38139[(8)] = inst_38132);

return statearr_38139;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38136__$1,inst_38134);
} else {
return null;
}
}
}
});})(c__29456__auto__))
;
return ((function (switch__29342__auto__,c__29456__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__29343__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__29343__auto____0 = (function (){
var statearr_38143 = [null,null,null,null,null,null,null,null,null];
(statearr_38143[(0)] = devcards$core$mount_namespace_$_state_machine__29343__auto__);

(statearr_38143[(1)] = (1));

return statearr_38143;
});
var devcards$core$mount_namespace_$_state_machine__29343__auto____1 = (function (state_38136){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_38136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e38144){if((e38144 instanceof Object)){
var ex__29346__auto__ = e38144;
var statearr_38145_38147 = state_38136;
(statearr_38145_38147[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38148 = state_38136;
state_38136 = G__38148;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__29343__auto__ = function(state_38136){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__29343__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__29343__auto____1.call(this,state_38136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__29343__auto____0;
devcards$core$mount_namespace_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__29343__auto____1;
return devcards$core$mount_namespace_$_state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto__))
})();
var state__29458__auto__ = (function (){var statearr_38146 = f__29457__auto__.call(null);
(statearr_38146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto__);

return statearr_38146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto__))
);

return c__29456__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1538029297627