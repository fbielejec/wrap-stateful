// Compiled by ClojureScript 1.9.542 {}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.trace');
re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Runs on-dispose for all subscriptions we have in the subscription cache.
 *   Used to force recreation of new subscriptions. Should only be necessary
 *   in development.
 * 
 *   The on-dispose functions for the subscriptions will remove themselves from the
 *   cache.
 * 
 *   Useful when reloading Figwheel code after a React exception, as React components
 *   aren't cleaned up properly. This means a subscription's on-dispose function isn't
 *   run when the components are destroyed. If a bad subscription caused your exception,
 *   then you can't fix it without reloading your browser.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__39313_39323 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
var chunk__39314_39324 = null;
var count__39315_39325 = (0);
var i__39316_39326 = (0);
while(true){
if((i__39316_39326 < count__39315_39325)){
var vec__39317_39327 = cljs.core._nth.call(null,chunk__39314_39324,i__39316_39326);
var k_39328 = cljs.core.nth.call(null,vec__39317_39327,(0),null);
var rxn_39329 = cljs.core.nth.call(null,vec__39317_39327,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_39329);

var G__39330 = seq__39313_39323;
var G__39331 = chunk__39314_39324;
var G__39332 = count__39315_39325;
var G__39333 = (i__39316_39326 + (1));
seq__39313_39323 = G__39330;
chunk__39314_39324 = G__39331;
count__39315_39325 = G__39332;
i__39316_39326 = G__39333;
continue;
} else {
var temp__4657__auto___39334 = cljs.core.seq.call(null,seq__39313_39323);
if(temp__4657__auto___39334){
var seq__39313_39335__$1 = temp__4657__auto___39334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39313_39335__$1)){
var c__28123__auto___39336 = cljs.core.chunk_first.call(null,seq__39313_39335__$1);
var G__39337 = cljs.core.chunk_rest.call(null,seq__39313_39335__$1);
var G__39338 = c__28123__auto___39336;
var G__39339 = cljs.core.count.call(null,c__28123__auto___39336);
var G__39340 = (0);
seq__39313_39323 = G__39337;
chunk__39314_39324 = G__39338;
count__39315_39325 = G__39339;
i__39316_39326 = G__39340;
continue;
} else {
var vec__39320_39341 = cljs.core.first.call(null,seq__39313_39335__$1);
var k_39342 = cljs.core.nth.call(null,vec__39320_39341,(0),null);
var rxn_39343 = cljs.core.nth.call(null,vec__39320_39341,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_39343);

var G__39344 = cljs.core.next.call(null,seq__39313_39335__$1);
var G__39345 = null;
var G__39346 = (0);
var G__39347 = (0);
seq__39313_39323 = G__39344;
chunk__39314_39324 = G__39345;
count__39315_39325 = G__39346;
i__39316_39326 = G__39347;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.call(null,re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_39361 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__38977__auto___39374 = re_frame.interop.now.call(null);
var duration__38978__auto___39375 = (end__38977__auto___39374 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__39362_39376 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__39363_39377 = null;
var count__39364_39378 = (0);
var i__39365_39379 = (0);
while(true){
if((i__39365_39379 < count__39364_39378)){
var vec__39366_39380 = cljs.core._nth.call(null,chunk__39363_39377,i__39365_39379);
var k__38979__auto___39381 = cljs.core.nth.call(null,vec__39366_39380,(0),null);
var cb__38980__auto___39382 = cljs.core.nth.call(null,vec__39366_39380,(1),null);
try{cb__38980__auto___39382.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38978__auto___39375,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39369){if((e39369 instanceof java.lang.Exception)){
var e__38981__auto___39383 = e39369;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38979__auto___39381,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38981__auto___39383);
} else {
throw e39369;

}
}
var G__39384 = seq__39362_39376;
var G__39385 = chunk__39363_39377;
var G__39386 = count__39364_39378;
var G__39387 = (i__39365_39379 + (1));
seq__39362_39376 = G__39384;
chunk__39363_39377 = G__39385;
count__39364_39378 = G__39386;
i__39365_39379 = G__39387;
continue;
} else {
var temp__4657__auto___39388 = cljs.core.seq.call(null,seq__39362_39376);
if(temp__4657__auto___39388){
var seq__39362_39389__$1 = temp__4657__auto___39388;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39362_39389__$1)){
var c__28123__auto___39390 = cljs.core.chunk_first.call(null,seq__39362_39389__$1);
var G__39391 = cljs.core.chunk_rest.call(null,seq__39362_39389__$1);
var G__39392 = c__28123__auto___39390;
var G__39393 = cljs.core.count.call(null,c__28123__auto___39390);
var G__39394 = (0);
seq__39362_39376 = G__39391;
chunk__39363_39377 = G__39392;
count__39364_39378 = G__39393;
i__39365_39379 = G__39394;
continue;
} else {
var vec__39370_39395 = cljs.core.first.call(null,seq__39362_39389__$1);
var k__38979__auto___39396 = cljs.core.nth.call(null,vec__39370_39395,(0),null);
var cb__38980__auto___39397 = cljs.core.nth.call(null,vec__39370_39395,(1),null);
try{cb__38980__auto___39397.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38978__auto___39375,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39373){if((e39373 instanceof java.lang.Exception)){
var e__38981__auto___39398 = e39373;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38979__auto___39396,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38981__auto___39398);
} else {
throw e39373;

}
}
var G__39399 = cljs.core.next.call(null,seq__39362_39389__$1);
var G__39400 = null;
var G__39401 = (0);
var G__39402 = (0);
seq__39362_39376 = G__39399;
chunk__39363_39377 = G__39400;
count__39364_39378 = G__39401;
i__39365_39379 = G__39402;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_39361;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38994__auto___39403 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38994__auto___39403;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var args39404 = [];
var len__28417__auto___39407 = arguments.length;
var i__28418__auto___39408 = (0);
while(true){
if((i__28418__auto___39408 < len__28417__auto___39407)){
args39404.push((arguments[i__28418__auto___39408]));

var G__39409 = (i__28418__auto___39408 + (1));
i__28418__auto___39408 = G__39409;
continue;
} else {
}
break;
}

var G__39406 = args39404.length;
switch (G__39406) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39404.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Returns a Reagent/reaction which contains a computation
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var args39411 = [];
var len__28417__auto___39440 = arguments.length;
var i__28418__auto___39441 = (0);
while(true){
if((i__28418__auto___39441 < len__28417__auto___39440)){
args39411.push((arguments[i__28418__auto___39441]));

var G__39442 = (i__28418__auto___39441 + (1));
i__28418__auto___39441 = G__39442;
continue;
} else {
}
break;
}

var G__39413 = args39411.length;
switch (G__39413) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39411.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_39414 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38994__auto___39444 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38994__auto___39444;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38994__auto___39445 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38994__auto___39445;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38994__auto___39446 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38994__auto___39446;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__38977__auto___39447 = re_frame.interop.now.call(null);
var duration__38978__auto___39448 = (end__38977__auto___39447 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__39415_39449 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__39416_39450 = null;
var count__39417_39451 = (0);
var i__39418_39452 = (0);
while(true){
if((i__39418_39452 < count__39417_39451)){
var vec__39419_39453 = cljs.core._nth.call(null,chunk__39416_39450,i__39418_39452);
var k__38979__auto___39454 = cljs.core.nth.call(null,vec__39419_39453,(0),null);
var cb__38980__auto___39455 = cljs.core.nth.call(null,vec__39419_39453,(1),null);
try{cb__38980__auto___39455.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38978__auto___39448,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39422){if((e39422 instanceof java.lang.Exception)){
var e__38981__auto___39456 = e39422;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38979__auto___39454,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38981__auto___39456);
} else {
throw e39422;

}
}
var G__39457 = seq__39415_39449;
var G__39458 = chunk__39416_39450;
var G__39459 = count__39417_39451;
var G__39460 = (i__39418_39452 + (1));
seq__39415_39449 = G__39457;
chunk__39416_39450 = G__39458;
count__39417_39451 = G__39459;
i__39418_39452 = G__39460;
continue;
} else {
var temp__4657__auto___39461 = cljs.core.seq.call(null,seq__39415_39449);
if(temp__4657__auto___39461){
var seq__39415_39462__$1 = temp__4657__auto___39461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39415_39462__$1)){
var c__28123__auto___39463 = cljs.core.chunk_first.call(null,seq__39415_39462__$1);
var G__39464 = cljs.core.chunk_rest.call(null,seq__39415_39462__$1);
var G__39465 = c__28123__auto___39463;
var G__39466 = cljs.core.count.call(null,c__28123__auto___39463);
var G__39467 = (0);
seq__39415_39449 = G__39464;
chunk__39416_39450 = G__39465;
count__39417_39451 = G__39466;
i__39418_39452 = G__39467;
continue;
} else {
var vec__39423_39468 = cljs.core.first.call(null,seq__39415_39462__$1);
var k__38979__auto___39469 = cljs.core.nth.call(null,vec__39423_39468,(0),null);
var cb__38980__auto___39470 = cljs.core.nth.call(null,vec__39423_39468,(1),null);
try{cb__38980__auto___39470.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38978__auto___39448,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39426){if((e39426 instanceof java.lang.Exception)){
var e__38981__auto___39471 = e39426;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38979__auto___39469,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38981__auto___39471);
} else {
throw e39426;

}
}
var G__39472 = cljs.core.next.call(null,seq__39415_39462__$1);
var G__39473 = null;
var G__39474 = (0);
var G__39475 = (0);
seq__39415_39449 = G__39472;
chunk__39416_39450 = G__39473;
count__39417_39451 = G__39474;
i__39418_39452 = G__39475;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_39414;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38994__auto___39476 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38994__auto___39476;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38994__auto___39477 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38994__auto___39477;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38994__auto___39478 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38994__auto___39478;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (v,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_39427 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),v,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38994__auto___39479 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38994__auto___39479;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38994__auto___39480 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38994__auto___39480;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___39481 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___39481)){
var not_reactive_39482 = temp__4657__auto___39481;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_39482);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38994__auto___39483 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38994__auto___39483;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_39427){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_39427))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_39427){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_39427))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_39427){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_39427))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__38977__auto___39484 = re_frame.interop.now.call(null);
var duration__38978__auto___39485 = (end__38977__auto___39484 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__39428_39486 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__39429_39487 = null;
var count__39430_39488 = (0);
var i__39431_39489 = (0);
while(true){
if((i__39431_39489 < count__39430_39488)){
var vec__39432_39490 = cljs.core._nth.call(null,chunk__39429_39487,i__39431_39489);
var k__38979__auto___39491 = cljs.core.nth.call(null,vec__39432_39490,(0),null);
var cb__38980__auto___39492 = cljs.core.nth.call(null,vec__39432_39490,(1),null);
try{cb__38980__auto___39492.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38978__auto___39485,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39435){if((e39435 instanceof java.lang.Exception)){
var e__38981__auto___39493 = e39435;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38979__auto___39491,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38981__auto___39493);
} else {
throw e39435;

}
}
var G__39494 = seq__39428_39486;
var G__39495 = chunk__39429_39487;
var G__39496 = count__39430_39488;
var G__39497 = (i__39431_39489 + (1));
seq__39428_39486 = G__39494;
chunk__39429_39487 = G__39495;
count__39430_39488 = G__39496;
i__39431_39489 = G__39497;
continue;
} else {
var temp__4657__auto___39498 = cljs.core.seq.call(null,seq__39428_39486);
if(temp__4657__auto___39498){
var seq__39428_39499__$1 = temp__4657__auto___39498;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39428_39499__$1)){
var c__28123__auto___39500 = cljs.core.chunk_first.call(null,seq__39428_39499__$1);
var G__39501 = cljs.core.chunk_rest.call(null,seq__39428_39499__$1);
var G__39502 = c__28123__auto___39500;
var G__39503 = cljs.core.count.call(null,c__28123__auto___39500);
var G__39504 = (0);
seq__39428_39486 = G__39501;
chunk__39429_39487 = G__39502;
count__39430_39488 = G__39503;
i__39431_39489 = G__39504;
continue;
} else {
var vec__39436_39505 = cljs.core.first.call(null,seq__39428_39499__$1);
var k__38979__auto___39506 = cljs.core.nth.call(null,vec__39436_39505,(0),null);
var cb__38980__auto___39507 = cljs.core.nth.call(null,vec__39436_39505,(1),null);
try{cb__38980__auto___39507.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38978__auto___39485,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39439){if((e39439 instanceof java.lang.Exception)){
var e__38981__auto___39508 = e39439;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38979__auto___39506,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38981__auto___39508);
} else {
throw e39439;

}
}
var G__39509 = cljs.core.next.call(null,seq__39428_39499__$1);
var G__39510 = null;
var G__39511 = (0);
var G__39512 = (0);
seq__39428_39486 = G__39509;
chunk__39429_39487 = G__39510;
count__39430_39488 = G__39511;
i__39431_39489 = G__39512;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_39427;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38994__auto___39513 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38994__auto___39513;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38994__auto___39514 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38994__auto___39514;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___39515 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___39515)){
var not_reactive_39516 = temp__4657__auto___39515;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_39516);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38994__auto___39517 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38994__auto___39517;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__))
));
}
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__39522){
var vec__39523 = p__39522;
var k = cljs.core.nth.call(null,vec__39523,(0),null);
var v = cljs.core.nth.call(null,vec__39523,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__38994__auto___39526 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__38994__auto___39526;

} else {
}

return signals__$1;
});
/**
 * Associate the given `query id` with a handler function and an optional signal function.
 * 
 *   There's 3 ways this function can be called
 * 
 *   1. (reg-sub
 *     :test-sub
 *     (fn [db [_]] db))
 *   The value in app-db is passed to the computation function as the 1st argument.
 * 
 *   2. (reg-sub
 *     :a-b-sub
 *     (fn [q-vec d-vec]
 *       [(subs/subscribe [:a-sub])
 *        (subs/subscribe [:b-sub])])
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   Two functions provided. The 2nd is computation function, as before. The 1st
 *   is returns what `input signals` should be provided to the computation. The
 *   `input signals` function is called with two arguments: the query vector
 *   and the dynamic vector. The return value can be singleton reaction or
 *   a sequence of reactions.
 * 
 *   3. (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))```
 *   This 3rd variation is just syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. `:<-` is supplied followed by the subscription
 *   vector.
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__28424__auto__ = [];
var len__28417__auto___39585 = arguments.length;
var i__28418__auto___39586 = (0);
while(true){
if((i__28418__auto___39586 < len__28417__auto___39585)){
args__28424__auto__.push((arguments[i__28418__auto___39586]));

var G__39587 = (i__28418__auto___39586 + (1));
i__28418__auto___39586 = G__39587;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((1) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28425__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: reg-sub for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", ")].join('');
var inputs_fn = (function (){var G__39529 = cljs.core.count.call(null,input_args);
switch (G__39529) {
case (0):
return ((function (G__39529,computation_fn,input_args,err_header){
return (function() {
var G__39589 = null;
var G__39589__1 = (function (_){
return re_frame.db.app_db;
});
var G__39589__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__39589 = function(_,___$1){
switch(arguments.length){
case 1:
return G__39589__1.call(this,_);
case 2:
return G__39589__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__39589.cljs$core$IFn$_invoke$arity$1 = G__39589__1;
G__39589.cljs$core$IFn$_invoke$arity$2 = G__39589__2;
return G__39589;
})()
;})(G__39529,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
var vec__39530 = input_args;
var marker = cljs.core.nth.call(null,vec__39530,(0),null);
var vec = cljs.core.nth.call(null,vec__39530,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected :<-, got:",marker);
}

return ((function (vec__39530,marker,vec,G__39529,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.call(null,vec);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.call(null,vec);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(vec__39530,marker,vec,G__39529,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var markers = cljs.core.map.call(null,cljs.core.first,pairs);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if((cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs))){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,markers,vecs,G__39529,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__39529,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_39559 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__38977__auto___39590 = re_frame.interop.now.call(null);
var duration__38978__auto___39591 = (end__38977__auto___39590 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__39560_39592 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__39561_39593 = null;
var count__39562_39594 = (0);
var i__39563_39595 = (0);
while(true){
if((i__39563_39595 < count__39562_39594)){
var vec__39564_39596 = cljs.core._nth.call(null,chunk__39561_39593,i__39563_39595);
var k__38979__auto___39597 = cljs.core.nth.call(null,vec__39564_39596,(0),null);
var cb__38980__auto___39598 = cljs.core.nth.call(null,vec__39564_39596,(1),null);
try{cb__38980__auto___39598.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38978__auto___39591,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39567){if((e39567 instanceof java.lang.Exception)){
var e__38981__auto___39599 = e39567;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38979__auto___39597,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38981__auto___39599);
} else {
throw e39567;

}
}
var G__39600 = seq__39560_39592;
var G__39601 = chunk__39561_39593;
var G__39602 = count__39562_39594;
var G__39603 = (i__39563_39595 + (1));
seq__39560_39592 = G__39600;
chunk__39561_39593 = G__39601;
count__39562_39594 = G__39602;
i__39563_39595 = G__39603;
continue;
} else {
var temp__4657__auto___39604 = cljs.core.seq.call(null,seq__39560_39592);
if(temp__4657__auto___39604){
var seq__39560_39605__$1 = temp__4657__auto___39604;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39560_39605__$1)){
var c__28123__auto___39606 = cljs.core.chunk_first.call(null,seq__39560_39605__$1);
var G__39607 = cljs.core.chunk_rest.call(null,seq__39560_39605__$1);
var G__39608 = c__28123__auto___39606;
var G__39609 = cljs.core.count.call(null,c__28123__auto___39606);
var G__39610 = (0);
seq__39560_39592 = G__39607;
chunk__39561_39593 = G__39608;
count__39562_39594 = G__39609;
i__39563_39595 = G__39610;
continue;
} else {
var vec__39568_39611 = cljs.core.first.call(null,seq__39560_39605__$1);
var k__38979__auto___39612 = cljs.core.nth.call(null,vec__39568_39611,(0),null);
var cb__38980__auto___39613 = cljs.core.nth.call(null,vec__39568_39611,(1),null);
try{cb__38980__auto___39613.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38978__auto___39591,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39571){if((e39571 instanceof java.lang.Exception)){
var e__38981__auto___39614 = e39571;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38979__auto___39612,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38981__auto___39614);
} else {
throw e39571;

}
}
var G__39615 = cljs.core.next.call(null,seq__39560_39605__$1);
var G__39616 = null;
var G__39617 = (0);
var G__39618 = (0);
seq__39560_39592 = G__39615;
chunk__39561_39593 = G__39616;
count__39562_39594 = G__39617;
i__39563_39595 = G__39618;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_39559;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_39572 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__38977__auto___39619 = re_frame.interop.now.call(null);
var duration__38978__auto___39620 = (end__38977__auto___39619 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__39573_39621 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__39574_39622 = null;
var count__39575_39623 = (0);
var i__39576_39624 = (0);
while(true){
if((i__39576_39624 < count__39575_39623)){
var vec__39577_39625 = cljs.core._nth.call(null,chunk__39574_39622,i__39576_39624);
var k__38979__auto___39626 = cljs.core.nth.call(null,vec__39577_39625,(0),null);
var cb__38980__auto___39627 = cljs.core.nth.call(null,vec__39577_39625,(1),null);
try{cb__38980__auto___39627.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38978__auto___39620,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39580){if((e39580 instanceof java.lang.Exception)){
var e__38981__auto___39628 = e39580;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38979__auto___39626,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38981__auto___39628);
} else {
throw e39580;

}
}
var G__39629 = seq__39573_39621;
var G__39630 = chunk__39574_39622;
var G__39631 = count__39575_39623;
var G__39632 = (i__39576_39624 + (1));
seq__39573_39621 = G__39629;
chunk__39574_39622 = G__39630;
count__39575_39623 = G__39631;
i__39576_39624 = G__39632;
continue;
} else {
var temp__4657__auto___39633 = cljs.core.seq.call(null,seq__39573_39621);
if(temp__4657__auto___39633){
var seq__39573_39634__$1 = temp__4657__auto___39633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39573_39634__$1)){
var c__28123__auto___39635 = cljs.core.chunk_first.call(null,seq__39573_39634__$1);
var G__39636 = cljs.core.chunk_rest.call(null,seq__39573_39634__$1);
var G__39637 = c__28123__auto___39635;
var G__39638 = cljs.core.count.call(null,c__28123__auto___39635);
var G__39639 = (0);
seq__39573_39621 = G__39636;
chunk__39574_39622 = G__39637;
count__39575_39623 = G__39638;
i__39576_39624 = G__39639;
continue;
} else {
var vec__39581_39640 = cljs.core.first.call(null,seq__39573_39634__$1);
var k__38979__auto___39641 = cljs.core.nth.call(null,vec__39581_39640,(0),null);
var cb__38980__auto___39642 = cljs.core.nth.call(null,vec__39581_39640,(1),null);
try{cb__38980__auto___39642.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38978__auto___39620,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39584){if((e39584 instanceof java.lang.Exception)){
var e__38981__auto___39643 = e39584;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38979__auto___39641,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38981__auto___39643);
} else {
throw e39584;

}
}
var G__39644 = cljs.core.next.call(null,seq__39573_39634__$1);
var G__39645 = null;
var G__39646 = (0);
var G__39647 = (0);
seq__39573_39621 = G__39644;
chunk__39574_39622 = G__39645;
count__39575_39623 = G__39646;
i__39576_39624 = G__39647;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_39572;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq39527){
var G__39528 = cljs.core.first.call(null,seq39527);
var seq39527__$1 = cljs.core.next.call(null,seq39527);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__39528,seq39527__$1);
});


//# sourceMappingURL=subs.js.map?rel=1497988478458