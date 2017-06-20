// Compiled by ClojureScript 1.9.542 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args37154 = [];
var len__28417__auto___37157 = arguments.length;
var i__28418__auto___37158 = (0);
while(true){
if((i__28418__auto___37158 < len__28417__auto___37157)){
args37154.push((arguments[i__28418__auto___37158]));

var G__37159 = (i__28418__auto___37158 + (1));
i__28418__auto___37158 = G__37159;
continue;
} else {
}
break;
}

var G__37156 = args37154.length;
switch (G__37156) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37154.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__28424__auto__ = [];
var len__28417__auto___37162 = arguments.length;
var i__28418__auto___37163 = (0);
while(true){
if((i__28418__auto___37163 < len__28417__auto___37162)){
args__28424__auto__.push((arguments[i__28418__auto___37163]));

var G__37164 = (i__28418__auto___37163 + (1));
i__28418__auto___37163 = G__37164;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37161){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37161));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28424__auto__ = [];
var len__28417__auto___37166 = arguments.length;
var i__28418__auto___37167 = (0);
while(true){
if((i__28418__auto___37167 < len__28417__auto___37166)){
args__28424__auto__.push((arguments[i__28418__auto___37167]));

var G__37168 = (i__28418__auto___37167 + (1));
i__28418__auto___37167 = G__37168;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37165){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37165));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37169){
var map__37172 = p__37169;
var map__37172__$1 = ((((!((map__37172 == null)))?((((map__37172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37172):map__37172);
var message = cljs.core.get.call(null,map__37172__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37172__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27304__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27292__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27292__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27292__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29515__auto___37334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto___37334,ch){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto___37334,ch){
return (function (state_37303){
var state_val_37304 = (state_37303[(1)]);
if((state_val_37304 === (7))){
var inst_37299 = (state_37303[(2)]);
var state_37303__$1 = state_37303;
var statearr_37305_37335 = state_37303__$1;
(statearr_37305_37335[(2)] = inst_37299);

(statearr_37305_37335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (1))){
var state_37303__$1 = state_37303;
var statearr_37306_37336 = state_37303__$1;
(statearr_37306_37336[(2)] = null);

(statearr_37306_37336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (4))){
var inst_37256 = (state_37303[(7)]);
var inst_37256__$1 = (state_37303[(2)]);
var state_37303__$1 = (function (){var statearr_37307 = state_37303;
(statearr_37307[(7)] = inst_37256__$1);

return statearr_37307;
})();
if(cljs.core.truth_(inst_37256__$1)){
var statearr_37308_37337 = state_37303__$1;
(statearr_37308_37337[(1)] = (5));

} else {
var statearr_37309_37338 = state_37303__$1;
(statearr_37309_37338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (15))){
var inst_37263 = (state_37303[(8)]);
var inst_37278 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37263);
var inst_37279 = cljs.core.first.call(null,inst_37278);
var inst_37280 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37279);
var inst_37281 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37280)].join('');
var inst_37282 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37281);
var state_37303__$1 = state_37303;
var statearr_37310_37339 = state_37303__$1;
(statearr_37310_37339[(2)] = inst_37282);

(statearr_37310_37339[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (13))){
var inst_37287 = (state_37303[(2)]);
var state_37303__$1 = state_37303;
var statearr_37311_37340 = state_37303__$1;
(statearr_37311_37340[(2)] = inst_37287);

(statearr_37311_37340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (6))){
var state_37303__$1 = state_37303;
var statearr_37312_37341 = state_37303__$1;
(statearr_37312_37341[(2)] = null);

(statearr_37312_37341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (17))){
var inst_37285 = (state_37303[(2)]);
var state_37303__$1 = state_37303;
var statearr_37313_37342 = state_37303__$1;
(statearr_37313_37342[(2)] = inst_37285);

(statearr_37313_37342[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (3))){
var inst_37301 = (state_37303[(2)]);
var state_37303__$1 = state_37303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37303__$1,inst_37301);
} else {
if((state_val_37304 === (12))){
var inst_37262 = (state_37303[(9)]);
var inst_37276 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37262,opts);
var state_37303__$1 = state_37303;
if(cljs.core.truth_(inst_37276)){
var statearr_37314_37343 = state_37303__$1;
(statearr_37314_37343[(1)] = (15));

} else {
var statearr_37315_37344 = state_37303__$1;
(statearr_37315_37344[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (2))){
var state_37303__$1 = state_37303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37303__$1,(4),ch);
} else {
if((state_val_37304 === (11))){
var inst_37263 = (state_37303[(8)]);
var inst_37268 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37269 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37263);
var inst_37270 = cljs.core.async.timeout.call(null,(1000));
var inst_37271 = [inst_37269,inst_37270];
var inst_37272 = (new cljs.core.PersistentVector(null,2,(5),inst_37268,inst_37271,null));
var state_37303__$1 = state_37303;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37303__$1,(14),inst_37272);
} else {
if((state_val_37304 === (9))){
var inst_37263 = (state_37303[(8)]);
var inst_37289 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37290 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37263);
var inst_37291 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37290);
var inst_37292 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37291)].join('');
var inst_37293 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37292);
var state_37303__$1 = (function (){var statearr_37316 = state_37303;
(statearr_37316[(10)] = inst_37289);

return statearr_37316;
})();
var statearr_37317_37345 = state_37303__$1;
(statearr_37317_37345[(2)] = inst_37293);

(statearr_37317_37345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (5))){
var inst_37256 = (state_37303[(7)]);
var inst_37258 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37259 = (new cljs.core.PersistentArrayMap(null,2,inst_37258,null));
var inst_37260 = (new cljs.core.PersistentHashSet(null,inst_37259,null));
var inst_37261 = figwheel.client.focus_msgs.call(null,inst_37260,inst_37256);
var inst_37262 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37261);
var inst_37263 = cljs.core.first.call(null,inst_37261);
var inst_37264 = figwheel.client.autoload_QMARK_.call(null);
var state_37303__$1 = (function (){var statearr_37318 = state_37303;
(statearr_37318[(9)] = inst_37262);

(statearr_37318[(8)] = inst_37263);

return statearr_37318;
})();
if(cljs.core.truth_(inst_37264)){
var statearr_37319_37346 = state_37303__$1;
(statearr_37319_37346[(1)] = (8));

} else {
var statearr_37320_37347 = state_37303__$1;
(statearr_37320_37347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (14))){
var inst_37274 = (state_37303[(2)]);
var state_37303__$1 = state_37303;
var statearr_37321_37348 = state_37303__$1;
(statearr_37321_37348[(2)] = inst_37274);

(statearr_37321_37348[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (16))){
var state_37303__$1 = state_37303;
var statearr_37322_37349 = state_37303__$1;
(statearr_37322_37349[(2)] = null);

(statearr_37322_37349[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (10))){
var inst_37295 = (state_37303[(2)]);
var state_37303__$1 = (function (){var statearr_37323 = state_37303;
(statearr_37323[(11)] = inst_37295);

return statearr_37323;
})();
var statearr_37324_37350 = state_37303__$1;
(statearr_37324_37350[(2)] = null);

(statearr_37324_37350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (8))){
var inst_37262 = (state_37303[(9)]);
var inst_37266 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37262,opts);
var state_37303__$1 = state_37303;
if(cljs.core.truth_(inst_37266)){
var statearr_37325_37351 = state_37303__$1;
(statearr_37325_37351[(1)] = (11));

} else {
var statearr_37326_37352 = state_37303__$1;
(statearr_37326_37352[(1)] = (12));

}

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
});})(c__29515__auto___37334,ch))
;
return ((function (switch__29403__auto__,c__29515__auto___37334,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29404__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29404__auto____0 = (function (){
var statearr_37330 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37330[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29404__auto__);

(statearr_37330[(1)] = (1));

return statearr_37330;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29404__auto____1 = (function (state_37303){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_37303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e37331){if((e37331 instanceof Object)){
var ex__29407__auto__ = e37331;
var statearr_37332_37353 = state_37303;
(statearr_37332_37353[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37354 = state_37303;
state_37303 = G__37354;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29404__auto__ = function(state_37303){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29404__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29404__auto____1.call(this,state_37303);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29404__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29404__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto___37334,ch))
})();
var state__29517__auto__ = (function (){var statearr_37333 = f__29516__auto__.call(null);
(statearr_37333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto___37334);

return statearr_37333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto___37334,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37355_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37355_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37358 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37358){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37357){if((e37357 instanceof Error)){
var e = e37357;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37358], null));
} else {
var e = e37357;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37358))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37359){
var map__37368 = p__37359;
var map__37368__$1 = ((((!((map__37368 == null)))?((((map__37368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37368):map__37368);
var opts = map__37368__$1;
var build_id = cljs.core.get.call(null,map__37368__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37368,map__37368__$1,opts,build_id){
return (function (p__37370){
var vec__37371 = p__37370;
var seq__37372 = cljs.core.seq.call(null,vec__37371);
var first__37373 = cljs.core.first.call(null,seq__37372);
var seq__37372__$1 = cljs.core.next.call(null,seq__37372);
var map__37374 = first__37373;
var map__37374__$1 = ((((!((map__37374 == null)))?((((map__37374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37374.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37374):map__37374);
var msg = map__37374__$1;
var msg_name = cljs.core.get.call(null,map__37374__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37372__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37371,seq__37372,first__37373,seq__37372__$1,map__37374,map__37374__$1,msg,msg_name,_,map__37368,map__37368__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37371,seq__37372,first__37373,seq__37372__$1,map__37374,map__37374__$1,msg,msg_name,_,map__37368,map__37368__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37368,map__37368__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37382){
var vec__37383 = p__37382;
var seq__37384 = cljs.core.seq.call(null,vec__37383);
var first__37385 = cljs.core.first.call(null,seq__37384);
var seq__37384__$1 = cljs.core.next.call(null,seq__37384);
var map__37386 = first__37385;
var map__37386__$1 = ((((!((map__37386 == null)))?((((map__37386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37386):map__37386);
var msg = map__37386__$1;
var msg_name = cljs.core.get.call(null,map__37386__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37384__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37388){
var map__37400 = p__37388;
var map__37400__$1 = ((((!((map__37400 == null)))?((((map__37400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37400):map__37400);
var on_compile_warning = cljs.core.get.call(null,map__37400__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37400__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37400,map__37400__$1,on_compile_warning,on_compile_fail){
return (function (p__37402){
var vec__37403 = p__37402;
var seq__37404 = cljs.core.seq.call(null,vec__37403);
var first__37405 = cljs.core.first.call(null,seq__37404);
var seq__37404__$1 = cljs.core.next.call(null,seq__37404);
var map__37406 = first__37405;
var map__37406__$1 = ((((!((map__37406 == null)))?((((map__37406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37406):map__37406);
var msg = map__37406__$1;
var msg_name = cljs.core.get.call(null,map__37406__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37404__$1;
var pred__37408 = cljs.core._EQ_;
var expr__37409 = msg_name;
if(cljs.core.truth_(pred__37408.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37409))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37408.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37409))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37400,map__37400__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto__,msg_hist,msg_names,msg){
return (function (state_37637){
var state_val_37638 = (state_37637[(1)]);
if((state_val_37638 === (7))){
var inst_37557 = (state_37637[(2)]);
var state_37637__$1 = state_37637;
if(cljs.core.truth_(inst_37557)){
var statearr_37639_37689 = state_37637__$1;
(statearr_37639_37689[(1)] = (8));

} else {
var statearr_37640_37690 = state_37637__$1;
(statearr_37640_37690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (20))){
var inst_37631 = (state_37637[(2)]);
var state_37637__$1 = state_37637;
var statearr_37641_37691 = state_37637__$1;
(statearr_37641_37691[(2)] = inst_37631);

(statearr_37641_37691[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (27))){
var inst_37627 = (state_37637[(2)]);
var state_37637__$1 = state_37637;
var statearr_37642_37692 = state_37637__$1;
(statearr_37642_37692[(2)] = inst_37627);

(statearr_37642_37692[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (1))){
var inst_37550 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37637__$1 = state_37637;
if(cljs.core.truth_(inst_37550)){
var statearr_37643_37693 = state_37637__$1;
(statearr_37643_37693[(1)] = (2));

} else {
var statearr_37644_37694 = state_37637__$1;
(statearr_37644_37694[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (24))){
var inst_37629 = (state_37637[(2)]);
var state_37637__$1 = state_37637;
var statearr_37645_37695 = state_37637__$1;
(statearr_37645_37695[(2)] = inst_37629);

(statearr_37645_37695[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (4))){
var inst_37635 = (state_37637[(2)]);
var state_37637__$1 = state_37637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37637__$1,inst_37635);
} else {
if((state_val_37638 === (15))){
var inst_37633 = (state_37637[(2)]);
var state_37637__$1 = state_37637;
var statearr_37646_37696 = state_37637__$1;
(statearr_37646_37696[(2)] = inst_37633);

(statearr_37646_37696[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (21))){
var inst_37586 = (state_37637[(2)]);
var inst_37587 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37588 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37587);
var state_37637__$1 = (function (){var statearr_37647 = state_37637;
(statearr_37647[(7)] = inst_37586);

return statearr_37647;
})();
var statearr_37648_37697 = state_37637__$1;
(statearr_37648_37697[(2)] = inst_37588);

(statearr_37648_37697[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (31))){
var inst_37616 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37637__$1 = state_37637;
if(cljs.core.truth_(inst_37616)){
var statearr_37649_37698 = state_37637__$1;
(statearr_37649_37698[(1)] = (34));

} else {
var statearr_37650_37699 = state_37637__$1;
(statearr_37650_37699[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (32))){
var inst_37625 = (state_37637[(2)]);
var state_37637__$1 = state_37637;
var statearr_37651_37700 = state_37637__$1;
(statearr_37651_37700[(2)] = inst_37625);

(statearr_37651_37700[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (33))){
var inst_37612 = (state_37637[(2)]);
var inst_37613 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37614 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37613);
var state_37637__$1 = (function (){var statearr_37652 = state_37637;
(statearr_37652[(8)] = inst_37612);

return statearr_37652;
})();
var statearr_37653_37701 = state_37637__$1;
(statearr_37653_37701[(2)] = inst_37614);

(statearr_37653_37701[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (13))){
var inst_37571 = figwheel.client.heads_up.clear.call(null);
var state_37637__$1 = state_37637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37637__$1,(16),inst_37571);
} else {
if((state_val_37638 === (22))){
var inst_37592 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37593 = figwheel.client.heads_up.append_warning_message.call(null,inst_37592);
var state_37637__$1 = state_37637;
var statearr_37654_37702 = state_37637__$1;
(statearr_37654_37702[(2)] = inst_37593);

(statearr_37654_37702[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (36))){
var inst_37623 = (state_37637[(2)]);
var state_37637__$1 = state_37637;
var statearr_37655_37703 = state_37637__$1;
(statearr_37655_37703[(2)] = inst_37623);

(statearr_37655_37703[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (29))){
var inst_37603 = (state_37637[(2)]);
var inst_37604 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37605 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37604);
var state_37637__$1 = (function (){var statearr_37656 = state_37637;
(statearr_37656[(9)] = inst_37603);

return statearr_37656;
})();
var statearr_37657_37704 = state_37637__$1;
(statearr_37657_37704[(2)] = inst_37605);

(statearr_37657_37704[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (6))){
var inst_37552 = (state_37637[(10)]);
var state_37637__$1 = state_37637;
var statearr_37658_37705 = state_37637__$1;
(statearr_37658_37705[(2)] = inst_37552);

(statearr_37658_37705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (28))){
var inst_37599 = (state_37637[(2)]);
var inst_37600 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37601 = figwheel.client.heads_up.display_warning.call(null,inst_37600);
var state_37637__$1 = (function (){var statearr_37659 = state_37637;
(statearr_37659[(11)] = inst_37599);

return statearr_37659;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37637__$1,(29),inst_37601);
} else {
if((state_val_37638 === (25))){
var inst_37597 = figwheel.client.heads_up.clear.call(null);
var state_37637__$1 = state_37637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37637__$1,(28),inst_37597);
} else {
if((state_val_37638 === (34))){
var inst_37618 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37637__$1 = state_37637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37637__$1,(37),inst_37618);
} else {
if((state_val_37638 === (17))){
var inst_37577 = (state_37637[(2)]);
var inst_37578 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37579 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37578);
var state_37637__$1 = (function (){var statearr_37660 = state_37637;
(statearr_37660[(12)] = inst_37577);

return statearr_37660;
})();
var statearr_37661_37706 = state_37637__$1;
(statearr_37661_37706[(2)] = inst_37579);

(statearr_37661_37706[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (3))){
var inst_37569 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37637__$1 = state_37637;
if(cljs.core.truth_(inst_37569)){
var statearr_37662_37707 = state_37637__$1;
(statearr_37662_37707[(1)] = (13));

} else {
var statearr_37663_37708 = state_37637__$1;
(statearr_37663_37708[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (12))){
var inst_37565 = (state_37637[(2)]);
var state_37637__$1 = state_37637;
var statearr_37664_37709 = state_37637__$1;
(statearr_37664_37709[(2)] = inst_37565);

(statearr_37664_37709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (2))){
var inst_37552 = (state_37637[(10)]);
var inst_37552__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37637__$1 = (function (){var statearr_37665 = state_37637;
(statearr_37665[(10)] = inst_37552__$1);

return statearr_37665;
})();
if(cljs.core.truth_(inst_37552__$1)){
var statearr_37666_37710 = state_37637__$1;
(statearr_37666_37710[(1)] = (5));

} else {
var statearr_37667_37711 = state_37637__$1;
(statearr_37667_37711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (23))){
var inst_37595 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37637__$1 = state_37637;
if(cljs.core.truth_(inst_37595)){
var statearr_37668_37712 = state_37637__$1;
(statearr_37668_37712[(1)] = (25));

} else {
var statearr_37669_37713 = state_37637__$1;
(statearr_37669_37713[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (35))){
var state_37637__$1 = state_37637;
var statearr_37670_37714 = state_37637__$1;
(statearr_37670_37714[(2)] = null);

(statearr_37670_37714[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (19))){
var inst_37590 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37637__$1 = state_37637;
if(cljs.core.truth_(inst_37590)){
var statearr_37671_37715 = state_37637__$1;
(statearr_37671_37715[(1)] = (22));

} else {
var statearr_37672_37716 = state_37637__$1;
(statearr_37672_37716[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (11))){
var inst_37561 = (state_37637[(2)]);
var state_37637__$1 = state_37637;
var statearr_37673_37717 = state_37637__$1;
(statearr_37673_37717[(2)] = inst_37561);

(statearr_37673_37717[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (9))){
var inst_37563 = figwheel.client.heads_up.clear.call(null);
var state_37637__$1 = state_37637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37637__$1,(12),inst_37563);
} else {
if((state_val_37638 === (5))){
var inst_37554 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37637__$1 = state_37637;
var statearr_37674_37718 = state_37637__$1;
(statearr_37674_37718[(2)] = inst_37554);

(statearr_37674_37718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (14))){
var inst_37581 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37637__$1 = state_37637;
if(cljs.core.truth_(inst_37581)){
var statearr_37675_37719 = state_37637__$1;
(statearr_37675_37719[(1)] = (18));

} else {
var statearr_37676_37720 = state_37637__$1;
(statearr_37676_37720[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (26))){
var inst_37607 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37637__$1 = state_37637;
if(cljs.core.truth_(inst_37607)){
var statearr_37677_37721 = state_37637__$1;
(statearr_37677_37721[(1)] = (30));

} else {
var statearr_37678_37722 = state_37637__$1;
(statearr_37678_37722[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (16))){
var inst_37573 = (state_37637[(2)]);
var inst_37574 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37575 = figwheel.client.heads_up.display_exception.call(null,inst_37574);
var state_37637__$1 = (function (){var statearr_37679 = state_37637;
(statearr_37679[(13)] = inst_37573);

return statearr_37679;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37637__$1,(17),inst_37575);
} else {
if((state_val_37638 === (30))){
var inst_37609 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37610 = figwheel.client.heads_up.display_warning.call(null,inst_37609);
var state_37637__$1 = state_37637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37637__$1,(33),inst_37610);
} else {
if((state_val_37638 === (10))){
var inst_37567 = (state_37637[(2)]);
var state_37637__$1 = state_37637;
var statearr_37680_37723 = state_37637__$1;
(statearr_37680_37723[(2)] = inst_37567);

(statearr_37680_37723[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (18))){
var inst_37583 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37584 = figwheel.client.heads_up.display_exception.call(null,inst_37583);
var state_37637__$1 = state_37637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37637__$1,(21),inst_37584);
} else {
if((state_val_37638 === (37))){
var inst_37620 = (state_37637[(2)]);
var state_37637__$1 = state_37637;
var statearr_37681_37724 = state_37637__$1;
(statearr_37681_37724[(2)] = inst_37620);

(statearr_37681_37724[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37638 === (8))){
var inst_37559 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37637__$1 = state_37637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37637__$1,(11),inst_37559);
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
}
}
}
}
}
}
}
});})(c__29515__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29403__auto__,c__29515__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29404__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29404__auto____0 = (function (){
var statearr_37685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37685[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29404__auto__);

(statearr_37685[(1)] = (1));

return statearr_37685;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29404__auto____1 = (function (state_37637){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_37637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e37686){if((e37686 instanceof Object)){
var ex__29407__auto__ = e37686;
var statearr_37687_37725 = state_37637;
(statearr_37687_37725[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37726 = state_37637;
state_37637 = G__37726;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29404__auto__ = function(state_37637){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29404__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29404__auto____1.call(this,state_37637);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29404__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29404__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto__,msg_hist,msg_names,msg))
})();
var state__29517__auto__ = (function (){var statearr_37688 = f__29516__auto__.call(null);
(statearr_37688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto__);

return statearr_37688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto__,msg_hist,msg_names,msg))
);

return c__29515__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29515__auto___37789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto___37789,ch){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto___37789,ch){
return (function (state_37772){
var state_val_37773 = (state_37772[(1)]);
if((state_val_37773 === (1))){
var state_37772__$1 = state_37772;
var statearr_37774_37790 = state_37772__$1;
(statearr_37774_37790[(2)] = null);

(statearr_37774_37790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37773 === (2))){
var state_37772__$1 = state_37772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37772__$1,(4),ch);
} else {
if((state_val_37773 === (3))){
var inst_37770 = (state_37772[(2)]);
var state_37772__$1 = state_37772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37772__$1,inst_37770);
} else {
if((state_val_37773 === (4))){
var inst_37760 = (state_37772[(7)]);
var inst_37760__$1 = (state_37772[(2)]);
var state_37772__$1 = (function (){var statearr_37775 = state_37772;
(statearr_37775[(7)] = inst_37760__$1);

return statearr_37775;
})();
if(cljs.core.truth_(inst_37760__$1)){
var statearr_37776_37791 = state_37772__$1;
(statearr_37776_37791[(1)] = (5));

} else {
var statearr_37777_37792 = state_37772__$1;
(statearr_37777_37792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37773 === (5))){
var inst_37760 = (state_37772[(7)]);
var inst_37762 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37760);
var state_37772__$1 = state_37772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37772__$1,(8),inst_37762);
} else {
if((state_val_37773 === (6))){
var state_37772__$1 = state_37772;
var statearr_37778_37793 = state_37772__$1;
(statearr_37778_37793[(2)] = null);

(statearr_37778_37793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37773 === (7))){
var inst_37768 = (state_37772[(2)]);
var state_37772__$1 = state_37772;
var statearr_37779_37794 = state_37772__$1;
(statearr_37779_37794[(2)] = inst_37768);

(statearr_37779_37794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37773 === (8))){
var inst_37764 = (state_37772[(2)]);
var state_37772__$1 = (function (){var statearr_37780 = state_37772;
(statearr_37780[(8)] = inst_37764);

return statearr_37780;
})();
var statearr_37781_37795 = state_37772__$1;
(statearr_37781_37795[(2)] = null);

(statearr_37781_37795[(1)] = (2));


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
});})(c__29515__auto___37789,ch))
;
return ((function (switch__29403__auto__,c__29515__auto___37789,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29404__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29404__auto____0 = (function (){
var statearr_37785 = [null,null,null,null,null,null,null,null,null];
(statearr_37785[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29404__auto__);

(statearr_37785[(1)] = (1));

return statearr_37785;
});
var figwheel$client$heads_up_plugin_$_state_machine__29404__auto____1 = (function (state_37772){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_37772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e37786){if((e37786 instanceof Object)){
var ex__29407__auto__ = e37786;
var statearr_37787_37796 = state_37772;
(statearr_37787_37796[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37797 = state_37772;
state_37772 = G__37797;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29404__auto__ = function(state_37772){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29404__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29404__auto____1.call(this,state_37772);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29404__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29404__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto___37789,ch))
})();
var state__29517__auto__ = (function (){var statearr_37788 = f__29516__auto__.call(null);
(statearr_37788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto___37789);

return statearr_37788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto___37789,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto__){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto__){
return (function (state_37818){
var state_val_37819 = (state_37818[(1)]);
if((state_val_37819 === (1))){
var inst_37813 = cljs.core.async.timeout.call(null,(3000));
var state_37818__$1 = state_37818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37818__$1,(2),inst_37813);
} else {
if((state_val_37819 === (2))){
var inst_37815 = (state_37818[(2)]);
var inst_37816 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37818__$1 = (function (){var statearr_37820 = state_37818;
(statearr_37820[(7)] = inst_37815);

return statearr_37820;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37818__$1,inst_37816);
} else {
return null;
}
}
});})(c__29515__auto__))
;
return ((function (switch__29403__auto__,c__29515__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29404__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29404__auto____0 = (function (){
var statearr_37824 = [null,null,null,null,null,null,null,null];
(statearr_37824[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29404__auto__);

(statearr_37824[(1)] = (1));

return statearr_37824;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29404__auto____1 = (function (state_37818){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_37818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e37825){if((e37825 instanceof Object)){
var ex__29407__auto__ = e37825;
var statearr_37826_37828 = state_37818;
(statearr_37826_37828[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37829 = state_37818;
state_37818 = G__37829;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29404__auto__ = function(state_37818){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29404__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29404__auto____1.call(this,state_37818);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29404__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29404__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto__))
})();
var state__29517__auto__ = (function (){var statearr_37827 = f__29516__auto__.call(null);
(statearr_37827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto__);

return statearr_37827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto__))
);

return c__29515__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29515__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29515__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__29516__auto__ = (function (){var switch__29403__auto__ = ((function (c__29515__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37852){
var state_val_37853 = (state_37852[(1)]);
if((state_val_37853 === (1))){
var inst_37846 = cljs.core.async.timeout.call(null,(2000));
var state_37852__$1 = state_37852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37852__$1,(2),inst_37846);
} else {
if((state_val_37853 === (2))){
var inst_37848 = (state_37852[(2)]);
var inst_37849 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37850 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37849);
var state_37852__$1 = (function (){var statearr_37854 = state_37852;
(statearr_37854[(7)] = inst_37848);

return statearr_37854;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37852__$1,inst_37850);
} else {
return null;
}
}
});})(c__29515__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__29403__auto__,c__29515__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29404__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29404__auto____0 = (function (){
var statearr_37858 = [null,null,null,null,null,null,null,null];
(statearr_37858[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29404__auto__);

(statearr_37858[(1)] = (1));

return statearr_37858;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29404__auto____1 = (function (state_37852){
while(true){
var ret_value__29405__auto__ = (function (){try{while(true){
var result__29406__auto__ = switch__29403__auto__.call(null,state_37852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29406__auto__;
}
break;
}
}catch (e37859){if((e37859 instanceof Object)){
var ex__29407__auto__ = e37859;
var statearr_37860_37862 = state_37852;
(statearr_37860_37862[(5)] = ex__29407__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29405__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37863 = state_37852;
state_37852 = G__37863;
continue;
} else {
return ret_value__29405__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29404__auto__ = function(state_37852){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29404__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29404__auto____1.call(this,state_37852);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29404__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29404__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29404__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29404__auto__;
})()
;})(switch__29403__auto__,c__29515__auto__,figwheel_version,temp__4657__auto__))
})();
var state__29517__auto__ = (function (){var statearr_37861 = f__29516__auto__.call(null);
(statearr_37861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29515__auto__);

return statearr_37861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29517__auto__);
});})(c__29515__auto__,figwheel_version,temp__4657__auto__))
);

return c__29515__auto__;
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
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37864){
var map__37868 = p__37864;
var map__37868__$1 = ((((!((map__37868 == null)))?((((map__37868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37868):map__37868);
var file = cljs.core.get.call(null,map__37868__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37868__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37868__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37870 = "";
var G__37870__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37870),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37870);
var G__37870__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37870__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37870__$1);
if(cljs.core.truth_((function (){var and__27292__auto__ = line;
if(cljs.core.truth_(and__27292__auto__)){
return column;
} else {
return and__27292__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37870__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37870__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37871){
var map__37878 = p__37871;
var map__37878__$1 = ((((!((map__37878 == null)))?((((map__37878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37878):map__37878);
var ed = map__37878__$1;
var formatted_exception = cljs.core.get.call(null,map__37878__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37878__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37878__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37880_37884 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37881_37885 = null;
var count__37882_37886 = (0);
var i__37883_37887 = (0);
while(true){
if((i__37883_37887 < count__37882_37886)){
var msg_37888 = cljs.core._nth.call(null,chunk__37881_37885,i__37883_37887);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37888);

var G__37889 = seq__37880_37884;
var G__37890 = chunk__37881_37885;
var G__37891 = count__37882_37886;
var G__37892 = (i__37883_37887 + (1));
seq__37880_37884 = G__37889;
chunk__37881_37885 = G__37890;
count__37882_37886 = G__37891;
i__37883_37887 = G__37892;
continue;
} else {
var temp__4657__auto___37893 = cljs.core.seq.call(null,seq__37880_37884);
if(temp__4657__auto___37893){
var seq__37880_37894__$1 = temp__4657__auto___37893;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37880_37894__$1)){
var c__28123__auto___37895 = cljs.core.chunk_first.call(null,seq__37880_37894__$1);
var G__37896 = cljs.core.chunk_rest.call(null,seq__37880_37894__$1);
var G__37897 = c__28123__auto___37895;
var G__37898 = cljs.core.count.call(null,c__28123__auto___37895);
var G__37899 = (0);
seq__37880_37884 = G__37896;
chunk__37881_37885 = G__37897;
count__37882_37886 = G__37898;
i__37883_37887 = G__37899;
continue;
} else {
var msg_37900 = cljs.core.first.call(null,seq__37880_37894__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37900);

var G__37901 = cljs.core.next.call(null,seq__37880_37894__$1);
var G__37902 = null;
var G__37903 = (0);
var G__37904 = (0);
seq__37880_37884 = G__37901;
chunk__37881_37885 = G__37902;
count__37882_37886 = G__37903;
i__37883_37887 = G__37904;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37905){
var map__37908 = p__37905;
var map__37908__$1 = ((((!((map__37908 == null)))?((((map__37908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37908.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37908):map__37908);
var w = map__37908__$1;
var message = cljs.core.get.call(null,map__37908__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__27292__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27292__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27292__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37920 = cljs.core.seq.call(null,plugins);
var chunk__37921 = null;
var count__37922 = (0);
var i__37923 = (0);
while(true){
if((i__37923 < count__37922)){
var vec__37924 = cljs.core._nth.call(null,chunk__37921,i__37923);
var k = cljs.core.nth.call(null,vec__37924,(0),null);
var plugin = cljs.core.nth.call(null,vec__37924,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37930 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37920,chunk__37921,count__37922,i__37923,pl_37930,vec__37924,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37930.call(null,msg_hist);
});})(seq__37920,chunk__37921,count__37922,i__37923,pl_37930,vec__37924,k,plugin))
);
} else {
}

var G__37931 = seq__37920;
var G__37932 = chunk__37921;
var G__37933 = count__37922;
var G__37934 = (i__37923 + (1));
seq__37920 = G__37931;
chunk__37921 = G__37932;
count__37922 = G__37933;
i__37923 = G__37934;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37920);
if(temp__4657__auto__){
var seq__37920__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37920__$1)){
var c__28123__auto__ = cljs.core.chunk_first.call(null,seq__37920__$1);
var G__37935 = cljs.core.chunk_rest.call(null,seq__37920__$1);
var G__37936 = c__28123__auto__;
var G__37937 = cljs.core.count.call(null,c__28123__auto__);
var G__37938 = (0);
seq__37920 = G__37935;
chunk__37921 = G__37936;
count__37922 = G__37937;
i__37923 = G__37938;
continue;
} else {
var vec__37927 = cljs.core.first.call(null,seq__37920__$1);
var k = cljs.core.nth.call(null,vec__37927,(0),null);
var plugin = cljs.core.nth.call(null,vec__37927,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37939 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37920,chunk__37921,count__37922,i__37923,pl_37939,vec__37927,k,plugin,seq__37920__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37939.call(null,msg_hist);
});})(seq__37920,chunk__37921,count__37922,i__37923,pl_37939,vec__37927,k,plugin,seq__37920__$1,temp__4657__auto__))
);
} else {
}

var G__37940 = cljs.core.next.call(null,seq__37920__$1);
var G__37941 = null;
var G__37942 = (0);
var G__37943 = (0);
seq__37920 = G__37940;
chunk__37921 = G__37941;
count__37922 = G__37942;
i__37923 = G__37943;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37944 = [];
var len__28417__auto___37951 = arguments.length;
var i__28418__auto___37952 = (0);
while(true){
if((i__28418__auto___37952 < len__28417__auto___37951)){
args37944.push((arguments[i__28418__auto___37952]));

var G__37953 = (i__28418__auto___37952 + (1));
i__28418__auto___37952 = G__37953;
continue;
} else {
}
break;
}

var G__37946 = args37944.length;
switch (G__37946) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37944.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37947_37955 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37948_37956 = null;
var count__37949_37957 = (0);
var i__37950_37958 = (0);
while(true){
if((i__37950_37958 < count__37949_37957)){
var msg_37959 = cljs.core._nth.call(null,chunk__37948_37956,i__37950_37958);
figwheel.client.socket.handle_incoming_message.call(null,msg_37959);

var G__37960 = seq__37947_37955;
var G__37961 = chunk__37948_37956;
var G__37962 = count__37949_37957;
var G__37963 = (i__37950_37958 + (1));
seq__37947_37955 = G__37960;
chunk__37948_37956 = G__37961;
count__37949_37957 = G__37962;
i__37950_37958 = G__37963;
continue;
} else {
var temp__4657__auto___37964 = cljs.core.seq.call(null,seq__37947_37955);
if(temp__4657__auto___37964){
var seq__37947_37965__$1 = temp__4657__auto___37964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37947_37965__$1)){
var c__28123__auto___37966 = cljs.core.chunk_first.call(null,seq__37947_37965__$1);
var G__37967 = cljs.core.chunk_rest.call(null,seq__37947_37965__$1);
var G__37968 = c__28123__auto___37966;
var G__37969 = cljs.core.count.call(null,c__28123__auto___37966);
var G__37970 = (0);
seq__37947_37955 = G__37967;
chunk__37948_37956 = G__37968;
count__37949_37957 = G__37969;
i__37950_37958 = G__37970;
continue;
} else {
var msg_37971 = cljs.core.first.call(null,seq__37947_37965__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37971);

var G__37972 = cljs.core.next.call(null,seq__37947_37965__$1);
var G__37973 = null;
var G__37974 = (0);
var G__37975 = (0);
seq__37947_37955 = G__37972;
chunk__37948_37956 = G__37973;
count__37949_37957 = G__37974;
i__37950_37958 = G__37975;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__28424__auto__ = [];
var len__28417__auto___37980 = arguments.length;
var i__28418__auto___37981 = (0);
while(true){
if((i__28418__auto___37981 < len__28417__auto___37980)){
args__28424__auto__.push((arguments[i__28418__auto___37981]));

var G__37982 = (i__28418__auto___37981 + (1));
i__28418__auto___37981 = G__37982;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37977){
var map__37978 = p__37977;
var map__37978__$1 = ((((!((map__37978 == null)))?((((map__37978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37978):map__37978);
var opts = map__37978__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37976){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37976));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37984){if((e37984 instanceof Error)){
var e = e37984;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37984;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37988){
var map__37989 = p__37988;
var map__37989__$1 = ((((!((map__37989 == null)))?((((map__37989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37989.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37989):map__37989);
var msg_name = cljs.core.get.call(null,map__37989__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1497988474547