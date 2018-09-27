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
try{var sb__27892__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_36900_36902 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_36901_36903 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_36900_36902,_STAR_print_fn_STAR_36901_36903,sb__27892__auto__){
return (function (x__27893__auto__){
return sb__27892__auto__.append(x__27893__auto__);
});})(_STAR_print_newline_STAR_36900_36902,_STAR_print_fn_STAR_36901_36903,sb__27892__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_36901_36903;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_36900_36902;
}
return [cljs.core.str(sb__27892__auto__)].join('');
}catch (e36898){if((e36898 instanceof Error)){
var e1 = e36898;
try{return obj.toString();
}catch (e36899){if((e36899 instanceof Error)){
var e2 = e36899;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e36899;

}
}} else {
throw e36898;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_36905 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_36905;
}});

//# sourceMappingURL=utils.js.map?rel=1538029295914