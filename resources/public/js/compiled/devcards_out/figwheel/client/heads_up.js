// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.dataset');
goog.require('goog.string');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__27998__auto__ = [];
var len__27991__auto___34091 = arguments.length;
var i__27992__auto___34092 = (0);
while(true){
if((i__27992__auto___34092 < len__27991__auto___34091)){
args__27998__auto__.push((arguments[i__27992__auto___34092]));

var G__34093 = (i__27992__auto___34092 + (1));
i__27992__auto___34092 = G__34093;
continue;
} else {
}
break;
}

var argseq__27999__auto__ = ((((2) < args__27998__auto__.length))?(new cljs.core.IndexedSeq(args__27998__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27999__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__34083_34094 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__34084_34095 = null;
var count__34085_34096 = (0);
var i__34086_34097 = (0);
while(true){
if((i__34086_34097 < count__34085_34096)){
var k_34098 = cljs.core._nth.call(null,chunk__34084_34095,i__34086_34097);
e.setAttribute(cljs.core.name.call(null,k_34098),cljs.core.get.call(null,attrs,k_34098));

var G__34099 = seq__34083_34094;
var G__34100 = chunk__34084_34095;
var G__34101 = count__34085_34096;
var G__34102 = (i__34086_34097 + (1));
seq__34083_34094 = G__34099;
chunk__34084_34095 = G__34100;
count__34085_34096 = G__34101;
i__34086_34097 = G__34102;
continue;
} else {
var temp__5457__auto___34103 = cljs.core.seq.call(null,seq__34083_34094);
if(temp__5457__auto___34103){
var seq__34083_34104__$1 = temp__5457__auto___34103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34083_34104__$1)){
var c__27711__auto___34105 = cljs.core.chunk_first.call(null,seq__34083_34104__$1);
var G__34106 = cljs.core.chunk_rest.call(null,seq__34083_34104__$1);
var G__34107 = c__27711__auto___34105;
var G__34108 = cljs.core.count.call(null,c__27711__auto___34105);
var G__34109 = (0);
seq__34083_34094 = G__34106;
chunk__34084_34095 = G__34107;
count__34085_34096 = G__34108;
i__34086_34097 = G__34109;
continue;
} else {
var k_34110 = cljs.core.first.call(null,seq__34083_34104__$1);
e.setAttribute(cljs.core.name.call(null,k_34110),cljs.core.get.call(null,attrs,k_34110));

var G__34111 = cljs.core.next.call(null,seq__34083_34104__$1);
var G__34112 = null;
var G__34113 = (0);
var G__34114 = (0);
seq__34083_34094 = G__34111;
chunk__34084_34095 = G__34112;
count__34085_34096 = G__34113;
i__34086_34097 = G__34114;
continue;
}
} else {
}
}
break;
}

var seq__34087_34115 = cljs.core.seq.call(null,children);
var chunk__34088_34116 = null;
var count__34089_34117 = (0);
var i__34090_34118 = (0);
while(true){
if((i__34090_34118 < count__34089_34117)){
var ch_34119 = cljs.core._nth.call(null,chunk__34088_34116,i__34090_34118);
e.appendChild(ch_34119);

var G__34120 = seq__34087_34115;
var G__34121 = chunk__34088_34116;
var G__34122 = count__34089_34117;
var G__34123 = (i__34090_34118 + (1));
seq__34087_34115 = G__34120;
chunk__34088_34116 = G__34121;
count__34089_34117 = G__34122;
i__34090_34118 = G__34123;
continue;
} else {
var temp__5457__auto___34124 = cljs.core.seq.call(null,seq__34087_34115);
if(temp__5457__auto___34124){
var seq__34087_34125__$1 = temp__5457__auto___34124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34087_34125__$1)){
var c__27711__auto___34126 = cljs.core.chunk_first.call(null,seq__34087_34125__$1);
var G__34127 = cljs.core.chunk_rest.call(null,seq__34087_34125__$1);
var G__34128 = c__27711__auto___34126;
var G__34129 = cljs.core.count.call(null,c__27711__auto___34126);
var G__34130 = (0);
seq__34087_34115 = G__34127;
chunk__34088_34116 = G__34128;
count__34089_34117 = G__34129;
i__34090_34118 = G__34130;
continue;
} else {
var ch_34131 = cljs.core.first.call(null,seq__34087_34125__$1);
e.appendChild(ch_34131);

var G__34132 = cljs.core.next.call(null,seq__34087_34125__$1);
var G__34133 = null;
var G__34134 = (0);
var G__34135 = (0);
seq__34087_34115 = G__34132;
chunk__34088_34116 = G__34133;
count__34089_34117 = G__34134;
i__34090_34118 = G__34135;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq34080){
var G__34081 = cljs.core.first.call(null,seq34080);
var seq34080__$1 = cljs.core.next.call(null,seq34080);
var G__34082 = cljs.core.first.call(null,seq34080__$1);
var seq34080__$2 = cljs.core.next.call(null,seq34080__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__34081,G__34082,seq34080__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__27831__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__27832__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__27833__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__27834__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__27835__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__27831__auto__,prefer_table__27832__auto__,method_cache__27833__auto__,cached_hierarchy__27834__auto__,hierarchy__27835__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__27831__auto__,prefer_table__27832__auto__,method_cache__27833__auto__,cached_hierarchy__27834__auto__,hierarchy__27835__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__27835__auto__,method_table__27831__auto__,prefer_table__27832__auto__,method_cache__27833__auto__,cached_hierarchy__27834__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_34136 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;"),cljs.core.str("text-align: left;")].join('')], null));
el_34136.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_34136.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_34136.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_34136);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__34137,st_map){
var map__34144 = p__34137;
var map__34144__$1 = ((((!((map__34144 == null)))?((((map__34144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34144):map__34144);
var container_el = cljs.core.get.call(null,map__34144__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__34144,map__34144__$1,container_el){
return (function (p__34146){
var vec__34147 = p__34146;
var k = cljs.core.nth.call(null,vec__34147,(0),null);
var v = cljs.core.nth.call(null,vec__34147,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__34144,map__34144__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__34150,dom_str){
var map__34153 = p__34150;
var map__34153__$1 = ((((!((map__34153 == null)))?((((map__34153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34153):map__34153);
var c = map__34153__$1;
var content_area_el = cljs.core.get.call(null,map__34153__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__34155){
var map__34158 = p__34155;
var map__34158__$1 = ((((!((map__34158 == null)))?((((map__34158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34158):map__34158);
var content_area_el = cljs.core.get.call(null,map__34158__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__29456__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto__){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto__){
return (function (state_34201){
var state_val_34202 = (state_34201[(1)]);
if((state_val_34202 === (1))){
var inst_34186 = (state_34201[(7)]);
var inst_34186__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34187 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34188 = ["10px","10px","100%","68px","1.0"];
var inst_34189 = cljs.core.PersistentHashMap.fromArrays(inst_34187,inst_34188);
var inst_34190 = cljs.core.merge.call(null,inst_34189,style);
var inst_34191 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34186__$1,inst_34190);
var inst_34192 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34186__$1,msg);
var inst_34193 = cljs.core.async.timeout.call(null,(300));
var state_34201__$1 = (function (){var statearr_34203 = state_34201;
(statearr_34203[(7)] = inst_34186__$1);

(statearr_34203[(8)] = inst_34192);

(statearr_34203[(9)] = inst_34191);

return statearr_34203;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34201__$1,(2),inst_34193);
} else {
if((state_val_34202 === (2))){
var inst_34186 = (state_34201[(7)]);
var inst_34195 = (state_34201[(2)]);
var inst_34196 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_34197 = ["auto"];
var inst_34198 = cljs.core.PersistentHashMap.fromArrays(inst_34196,inst_34197);
var inst_34199 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34186,inst_34198);
var state_34201__$1 = (function (){var statearr_34204 = state_34201;
(statearr_34204[(10)] = inst_34195);

return statearr_34204;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34201__$1,inst_34199);
} else {
return null;
}
}
});})(c__29456__auto__))
;
return ((function (switch__29342__auto__,c__29456__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__29343__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__29343__auto____0 = (function (){
var statearr_34208 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34208[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__29343__auto__);

(statearr_34208[(1)] = (1));

return statearr_34208;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__29343__auto____1 = (function (state_34201){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_34201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e34209){if((e34209 instanceof Object)){
var ex__29346__auto__ = e34209;
var statearr_34210_34212 = state_34201;
(statearr_34210_34212[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34213 = state_34201;
state_34201 = G__34213;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__29343__auto__ = function(state_34201){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__29343__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__29343__auto____1.call(this,state_34201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__29343__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__29343__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto__))
})();
var state__29458__auto__ = (function (){var statearr_34211 = f__29457__auto__.call(null);
(statearr_34211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto__);

return statearr_34211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto__))
);

return c__29456__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args34214 = [];
var len__27991__auto___34217 = arguments.length;
var i__27992__auto___34218 = (0);
while(true){
if((i__27992__auto___34218 < len__27991__auto___34217)){
args34214.push((arguments[i__27992__auto___34218]));

var G__34219 = (i__27992__auto___34218 + (1));
i__27992__auto___34218 = G__34219;
continue;
} else {
}
break;
}

var G__34216 = args34214.length;
switch (G__34216) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34214.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str(" <span style=\""),cljs.core.str("display: inline-block;"),cljs.core.str("font-size: 13px;"),cljs.core.str("\">"),cljs.core.str(sub_head),cljs.core.str("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\" data-file-column=\""),cljs.core.str(column_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__34221){
var map__34224 = p__34221;
var map__34224__$1 = ((((!((map__34224 == null)))?((((map__34224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34224):map__34224);
var file = cljs.core.get.call(null,map__34224__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34224__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34224__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__26808__auto__ = file;
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str("<span style='"),cljs.core.str(style),cljs.core.str("'>"),cljs.core.str("<span style='color: #757575;'>"),cljs.core.str(line_number),cljs.core.str("  </span>"),cljs.core.str(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__34226){
var vec__34233 = p__34226;
var typ = cljs.core.nth.call(null,vec__34233,(0),null);
var line_number = cljs.core.nth.call(null,vec__34233,(1),null);
var line = cljs.core.nth.call(null,vec__34233,(2),null);
var pred__34236 = cljs.core._EQ_;
var expr__34237 = typ;
if(cljs.core.truth_(pred__34236.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__34237))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__34236.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__34237))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__34236.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__34237))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__34239_SHARP_){
return cljs.core.update_in.call(null,p1__34239_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str("<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str(clojure.string.join.call(null,"\n",lines)),cljs.core.str("</pre>")].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__34240_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__34240_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__34243){
var map__34246 = p__34243;
var map__34246__$1 = ((((!((map__34246 == null)))?((((map__34246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34246):map__34246);
var exception = map__34246__$1;
var message = cljs.core.get.call(null,map__34246__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__34246__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__34246__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__34246__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__34246__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__34246__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__34246__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__34246__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__34246__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__34246__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__34246__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__26796__auto__ = file;
if(cljs.core.truth_(and__26796__auto__)){
return line;
} else {
return and__26796__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__34246,map__34246__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__34241_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__34241_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__34246,map__34246__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(class$)?[cljs.core.str(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str(": ")].join(''):"")),cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join(''),(cljs.core.truth_(display_ex_data)?[cljs.core.str("<pre>"),cljs.core.str(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),cljs.core.str("</pre>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__34246,map__34246__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__34242_SHARP_){
return [cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__34242_SHARP_))),cljs.core.str(": "),cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__34242_SHARP_)))].join('');
});})(last_message,map__34246,map__34246__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__34248){
var map__34251 = p__34248;
var map__34251__$1 = ((((!((map__34251 == null)))?((((map__34251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34251):map__34251);
var file = cljs.core.get.call(null,map__34251__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34251__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34251__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__34256 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__34256__$1 = ((((!((map__34256 == null)))?((((map__34256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34256):map__34256);
var head = cljs.core.get.call(null,map__34256__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__34256__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__34256__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__34256__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__34256__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34256__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34256__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__34259){
var map__34262 = p__34259;
var map__34262__$1 = ((((!((map__34262 == null)))?((((map__34262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34262):map__34262);
var warning_data = map__34262__$1;
var file = cljs.core.get.call(null,map__34262__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34262__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34262__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__34262__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__34262__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__26796__auto__ = file;
if(cljs.core.truth_(and__26796__auto__)){
return line;
} else {
return and__26796__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__34262,map__34262__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__34258_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__34258_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__34262,map__34262__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__34266 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__34266__$1 = ((((!((map__34266 == null)))?((((map__34266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34266):map__34266);
var head = cljs.core.get.call(null,map__34266__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__34266__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__34266__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__34266__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__34266__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34266__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34266__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__34268){
var map__34272 = p__34268;
var map__34272__$1 = ((((!((map__34272 == null)))?((((map__34272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34272):map__34272);
var warning_data = map__34272__$1;
var message = cljs.core.get.call(null,map__34272__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__34272__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34272__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34272__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__34274 = message;
var G__34274__$1 = (cljs.core.truth_(line)?[cljs.core.str(G__34274),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__34274);
var G__34274__$2 = (cljs.core.truth_((function (){var and__26796__auto__ = line;
if(cljs.core.truth_(and__26796__auto__)){
return column;
} else {
return and__26796__auto__;
}
})())?[cljs.core.str(G__34274__$1),cljs.core.str(", column "),cljs.core.str(column)].join(''):G__34274__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str(G__34274__$2),cljs.core.str(" in file "),cljs.core.str(file)].join('');
} else {
return G__34274__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__34275){
var map__34280 = p__34275;
var map__34280__$1 = ((((!((map__34280 == null)))?((((map__34280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34280):map__34280);
var warning_data = map__34280__$1;
var message = cljs.core.get.call(null,map__34280__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__34280__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34280__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34280__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__34282 = figwheel.client.heads_up.ensure_container.call(null);
var map__34282__$1 = ((((!((map__34282 == null)))?((((map__34282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34282):map__34282);
var content_area_el = cljs.core.get.call(null,map__34282__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__5457__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__5457__auto__)){
var last_child = temp__5457__auto__;
var temp__5455__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__5455__auto__)){
var message_count = temp__5455__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str(message_count__$1),cljs.core.str(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__29456__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto__){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto__){
return (function (state_34330){
var state_val_34331 = (state_34330[(1)]);
if((state_val_34331 === (1))){
var inst_34313 = (state_34330[(7)]);
var inst_34313__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34314 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34315 = ["0.0"];
var inst_34316 = cljs.core.PersistentHashMap.fromArrays(inst_34314,inst_34315);
var inst_34317 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34313__$1,inst_34316);
var inst_34318 = cljs.core.async.timeout.call(null,(300));
var state_34330__$1 = (function (){var statearr_34332 = state_34330;
(statearr_34332[(8)] = inst_34317);

(statearr_34332[(7)] = inst_34313__$1);

return statearr_34332;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34330__$1,(2),inst_34318);
} else {
if((state_val_34331 === (2))){
var inst_34313 = (state_34330[(7)]);
var inst_34320 = (state_34330[(2)]);
var inst_34321 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_34322 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_34323 = cljs.core.PersistentHashMap.fromArrays(inst_34321,inst_34322);
var inst_34324 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34313,inst_34323);
var inst_34325 = cljs.core.async.timeout.call(null,(200));
var state_34330__$1 = (function (){var statearr_34333 = state_34330;
(statearr_34333[(9)] = inst_34324);

(statearr_34333[(10)] = inst_34320);

return statearr_34333;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34330__$1,(3),inst_34325);
} else {
if((state_val_34331 === (3))){
var inst_34313 = (state_34330[(7)]);
var inst_34327 = (state_34330[(2)]);
var inst_34328 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34313,"");
var state_34330__$1 = (function (){var statearr_34334 = state_34330;
(statearr_34334[(11)] = inst_34327);

return statearr_34334;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34330__$1,inst_34328);
} else {
return null;
}
}
}
});})(c__29456__auto__))
;
return ((function (switch__29342__auto__,c__29456__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__29343__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__29343__auto____0 = (function (){
var statearr_34338 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34338[(0)] = figwheel$client$heads_up$clear_$_state_machine__29343__auto__);

(statearr_34338[(1)] = (1));

return statearr_34338;
});
var figwheel$client$heads_up$clear_$_state_machine__29343__auto____1 = (function (state_34330){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_34330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e34339){if((e34339 instanceof Object)){
var ex__29346__auto__ = e34339;
var statearr_34340_34342 = state_34330;
(statearr_34340_34342[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34343 = state_34330;
state_34330 = G__34343;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__29343__auto__ = function(state_34330){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__29343__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__29343__auto____1.call(this,state_34330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__29343__auto____0;
figwheel$client$heads_up$clear_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__29343__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto__))
})();
var state__29458__auto__ = (function (){var statearr_34341 = f__29457__auto__.call(null);
(statearr_34341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto__);

return statearr_34341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto__))
);

return c__29456__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__29456__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29456__auto__){
return (function (){
var f__29457__auto__ = (function (){var switch__29342__auto__ = ((function (c__29456__auto__){
return (function (state_34375){
var state_val_34376 = (state_34375[(1)]);
if((state_val_34376 === (1))){
var inst_34365 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_34375__$1 = state_34375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34375__$1,(2),inst_34365);
} else {
if((state_val_34376 === (2))){
var inst_34367 = (state_34375[(2)]);
var inst_34368 = cljs.core.async.timeout.call(null,(400));
var state_34375__$1 = (function (){var statearr_34377 = state_34375;
(statearr_34377[(7)] = inst_34367);

return statearr_34377;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34375__$1,(3),inst_34368);
} else {
if((state_val_34376 === (3))){
var inst_34370 = (state_34375[(2)]);
var inst_34371 = figwheel.client.heads_up.clear.call(null);
var state_34375__$1 = (function (){var statearr_34378 = state_34375;
(statearr_34378[(8)] = inst_34370);

return statearr_34378;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34375__$1,(4),inst_34371);
} else {
if((state_val_34376 === (4))){
var inst_34373 = (state_34375[(2)]);
var state_34375__$1 = state_34375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34375__$1,inst_34373);
} else {
return null;
}
}
}
}
});})(c__29456__auto__))
;
return ((function (switch__29342__auto__,c__29456__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__29343__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__29343__auto____0 = (function (){
var statearr_34382 = [null,null,null,null,null,null,null,null,null];
(statearr_34382[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__29343__auto__);

(statearr_34382[(1)] = (1));

return statearr_34382;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__29343__auto____1 = (function (state_34375){
while(true){
var ret_value__29344__auto__ = (function (){try{while(true){
var result__29345__auto__ = switch__29342__auto__.call(null,state_34375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29345__auto__;
}
break;
}
}catch (e34383){if((e34383 instanceof Object)){
var ex__29346__auto__ = e34383;
var statearr_34384_34386 = state_34375;
(statearr_34384_34386[(5)] = ex__29346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34387 = state_34375;
state_34375 = G__34387;
continue;
} else {
return ret_value__29344__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__29343__auto__ = function(state_34375){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__29343__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__29343__auto____1.call(this,state_34375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__29343__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__29343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__29343__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__29343__auto__;
})()
;})(switch__29342__auto__,c__29456__auto__))
})();
var state__29458__auto__ = (function (){var statearr_34385 = f__29457__auto__.call(null);
(statearr_34385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29456__auto__);

return statearr_34385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29458__auto__);
});})(c__29456__auto__))
);

return c__29456__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__5457__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str("position: absolute;"),cljs.core.str("z-index: 9000;"),cljs.core.str("width: 100vw;"),cljs.core.str("height: 100vh;"),cljs.core.str("top: 0px; left: 0px;"),cljs.core.str("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str("color: #FFF5DB;"),cljs.core.str("width: 100vw;"),cljs.core.str("margin: auto;"),cljs.core.str("margin-top: 10px;"),cljs.core.str("text-align: center; "),cljs.core.str("padding: 2px 0px;"),cljs.core.str("font-size: 13px;"),cljs.core.str("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1538029291333