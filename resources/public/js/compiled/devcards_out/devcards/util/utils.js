// Compiled by ClojureScript 1.9.229 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5455__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5455__auto__)){
var doc = temp__5455__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__27893__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_34905_34907 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_34906_34908 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_34905_34907,_STAR_print_fn_STAR_34906_34908,sb__27893__auto__){
return (function (x__27894__auto__){
return sb__27893__auto__.append(x__27894__auto__);
});})(_STAR_print_newline_STAR_34905_34907,_STAR_print_fn_STAR_34906_34908,sb__27893__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34906_34908;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34905_34907;
}
return [cljs.core.str(sb__27893__auto__)].join('');
}catch (e34903){if((e34903 instanceof Error)){
var e1 = e34903;
try{return obj.toString();
}catch (e34904){if((e34904 instanceof Error)){
var e2 = e34904;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e34904;

}
}} else {
throw e34903;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_34910 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_34910;
}});

//# sourceMappingURL=utils.js.map?rel=1537985795460