// Compiled by ClojureScript 1.9.542 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__39002_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__39002_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", given an empty interceptor chain")].join(''));
} else {
}

var temp__4657__auto___39003 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___39003)){
var not_i_39004 = temp__4657__auto___39003;
if(cljs.core.fn_QMARK_.call(null,not_i_39004)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_39004);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected interceptors, but got:")].join(''),not_i_39004);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: while handling \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_frame.events._STAR_handling_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\", dispatch-sync was called for \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_v),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_39019 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_39020 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__38977__auto___39033 = re_frame.interop.now.call(null);
var duration__38978__auto___39034 = (end__38977__auto___39033 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__39021_39035 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__39022_39036 = null;
var count__39023_39037 = (0);
var i__39024_39038 = (0);
while(true){
if((i__39024_39038 < count__39023_39037)){
var vec__39025_39039 = cljs.core._nth.call(null,chunk__39022_39036,i__39024_39038);
var k__38979__auto___39040 = cljs.core.nth.call(null,vec__39025_39039,(0),null);
var cb__38980__auto___39041 = cljs.core.nth.call(null,vec__39025_39039,(1),null);
try{cb__38980__auto___39041.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38978__auto___39034,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39028){if((e39028 instanceof java.lang.Exception)){
var e__38981__auto___39042 = e39028;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38979__auto___39040,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38981__auto___39042);
} else {
throw e39028;

}
}
var G__39043 = seq__39021_39035;
var G__39044 = chunk__39022_39036;
var G__39045 = count__39023_39037;
var G__39046 = (i__39024_39038 + (1));
seq__39021_39035 = G__39043;
chunk__39022_39036 = G__39044;
count__39023_39037 = G__39045;
i__39024_39038 = G__39046;
continue;
} else {
var temp__4657__auto___39047 = cljs.core.seq.call(null,seq__39021_39035);
if(temp__4657__auto___39047){
var seq__39021_39048__$1 = temp__4657__auto___39047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39021_39048__$1)){
var c__28123__auto___39049 = cljs.core.chunk_first.call(null,seq__39021_39048__$1);
var G__39050 = cljs.core.chunk_rest.call(null,seq__39021_39048__$1);
var G__39051 = c__28123__auto___39049;
var G__39052 = cljs.core.count.call(null,c__28123__auto___39049);
var G__39053 = (0);
seq__39021_39035 = G__39050;
chunk__39022_39036 = G__39051;
count__39023_39037 = G__39052;
i__39024_39038 = G__39053;
continue;
} else {
var vec__39029_39054 = cljs.core.first.call(null,seq__39021_39048__$1);
var k__38979__auto___39055 = cljs.core.nth.call(null,vec__39029_39054,(0),null);
var cb__38980__auto___39056 = cljs.core.nth.call(null,vec__39029_39054,(1),null);
try{cb__38980__auto___39056.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38978__auto___39034,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e39032){if((e39032 instanceof java.lang.Exception)){
var e__38981__auto___39057 = e39032;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__38979__auto___39055,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__38981__auto___39057);
} else {
throw e39032;

}
}
var G__39058 = cljs.core.next.call(null,seq__39021_39048__$1);
var G__39059 = null;
var G__39060 = (0);
var G__39061 = (0);
seq__39021_39035 = G__39058;
chunk__39022_39036 = G__39059;
count__39023_39037 = G__39060;
i__39024_39038 = G__39061;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_39020;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_39019;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1497988477447