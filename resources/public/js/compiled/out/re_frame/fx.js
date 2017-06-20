// Compiled by ClojureScript 1.9.542 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__39146 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39147 = null;
var count__39148 = (0);
var i__39149 = (0);
while(true){
if((i__39149 < count__39148)){
var vec__39150 = cljs.core._nth.call(null,chunk__39147,i__39149);
var effect_k = cljs.core.nth.call(null,vec__39150,(0),null);
var value = cljs.core.nth.call(null,vec__39150,(1),null);
var temp__4655__auto___39156 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___39156)){
var effect_fn_39157 = temp__4655__auto___39156;
effect_fn_39157.call(null,value);
} else {
}

var G__39158 = seq__39146;
var G__39159 = chunk__39147;
var G__39160 = count__39148;
var G__39161 = (i__39149 + (1));
seq__39146 = G__39158;
chunk__39147 = G__39159;
count__39148 = G__39160;
i__39149 = G__39161;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39146);
if(temp__4657__auto__){
var seq__39146__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39146__$1)){
var c__28123__auto__ = cljs.core.chunk_first.call(null,seq__39146__$1);
var G__39162 = cljs.core.chunk_rest.call(null,seq__39146__$1);
var G__39163 = c__28123__auto__;
var G__39164 = cljs.core.count.call(null,c__28123__auto__);
var G__39165 = (0);
seq__39146 = G__39162;
chunk__39147 = G__39163;
count__39148 = G__39164;
i__39149 = G__39165;
continue;
} else {
var vec__39153 = cljs.core.first.call(null,seq__39146__$1);
var effect_k = cljs.core.nth.call(null,vec__39153,(0),null);
var value = cljs.core.nth.call(null,vec__39153,(1),null);
var temp__4655__auto___39166 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___39166)){
var effect_fn_39167 = temp__4655__auto___39166;
effect_fn_39167.call(null,value);
} else {
}

var G__39168 = cljs.core.next.call(null,seq__39146__$1);
var G__39169 = null;
var G__39170 = (0);
var G__39171 = (0);
seq__39146 = G__39168;
chunk__39147 = G__39169;
count__39148 = G__39170;
i__39149 = G__39171;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__39172 = cljs.core.seq.call(null,value);
var chunk__39173 = null;
var count__39174 = (0);
var i__39175 = (0);
while(true){
if((i__39175 < count__39174)){
var map__39176 = cljs.core._nth.call(null,chunk__39173,i__39175);
var map__39176__$1 = ((((!((map__39176 == null)))?((((map__39176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39176.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39176):map__39176);
var effect = map__39176__$1;
var ms = cljs.core.get.call(null,map__39176__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39176__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39172,chunk__39173,count__39174,i__39175,map__39176,map__39176__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39172,chunk__39173,count__39174,i__39175,map__39176,map__39176__$1,effect,ms,dispatch))
,ms);
}

var G__39180 = seq__39172;
var G__39181 = chunk__39173;
var G__39182 = count__39174;
var G__39183 = (i__39175 + (1));
seq__39172 = G__39180;
chunk__39173 = G__39181;
count__39174 = G__39182;
i__39175 = G__39183;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39172);
if(temp__4657__auto__){
var seq__39172__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39172__$1)){
var c__28123__auto__ = cljs.core.chunk_first.call(null,seq__39172__$1);
var G__39184 = cljs.core.chunk_rest.call(null,seq__39172__$1);
var G__39185 = c__28123__auto__;
var G__39186 = cljs.core.count.call(null,c__28123__auto__);
var G__39187 = (0);
seq__39172 = G__39184;
chunk__39173 = G__39185;
count__39174 = G__39186;
i__39175 = G__39187;
continue;
} else {
var map__39178 = cljs.core.first.call(null,seq__39172__$1);
var map__39178__$1 = ((((!((map__39178 == null)))?((((map__39178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39178.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39178):map__39178);
var effect = map__39178__$1;
var ms = cljs.core.get.call(null,map__39178__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39178__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39172,chunk__39173,count__39174,i__39175,map__39178,map__39178__$1,effect,ms,dispatch,seq__39172__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__39172,chunk__39173,count__39174,i__39175,map__39178,map__39178__$1,effect,ms,dispatch,seq__39172__$1,temp__4657__auto__))
,ms);
}

var G__39188 = cljs.core.next.call(null,seq__39172__$1);
var G__39189 = null;
var G__39190 = (0);
var G__39191 = (0);
seq__39172 = G__39188;
chunk__39173 = G__39189;
count__39174 = G__39190;
i__39175 = G__39191;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__39192 = cljs.core.seq.call(null,value);
var chunk__39193 = null;
var count__39194 = (0);
var i__39195 = (0);
while(true){
if((i__39195 < count__39194)){
var event = cljs.core._nth.call(null,chunk__39193,i__39195);
re_frame.router.dispatch.call(null,event);

var G__39196 = seq__39192;
var G__39197 = chunk__39193;
var G__39198 = count__39194;
var G__39199 = (i__39195 + (1));
seq__39192 = G__39196;
chunk__39193 = G__39197;
count__39194 = G__39198;
i__39195 = G__39199;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39192);
if(temp__4657__auto__){
var seq__39192__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39192__$1)){
var c__28123__auto__ = cljs.core.chunk_first.call(null,seq__39192__$1);
var G__39200 = cljs.core.chunk_rest.call(null,seq__39192__$1);
var G__39201 = c__28123__auto__;
var G__39202 = cljs.core.count.call(null,c__28123__auto__);
var G__39203 = (0);
seq__39192 = G__39200;
chunk__39193 = G__39201;
count__39194 = G__39202;
i__39195 = G__39203;
continue;
} else {
var event = cljs.core.first.call(null,seq__39192__$1);
re_frame.router.dispatch.call(null,event);

var G__39204 = cljs.core.next.call(null,seq__39192__$1);
var G__39205 = null;
var G__39206 = (0);
var G__39207 = (0);
seq__39192 = G__39204;
chunk__39193 = G__39205;
count__39194 = G__39206;
i__39195 = G__39207;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__39208 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__39209 = null;
var count__39210 = (0);
var i__39211 = (0);
while(true){
if((i__39211 < count__39210)){
var event = cljs.core._nth.call(null,chunk__39209,i__39211);
clear_event.call(null,event);

var G__39212 = seq__39208;
var G__39213 = chunk__39209;
var G__39214 = count__39210;
var G__39215 = (i__39211 + (1));
seq__39208 = G__39212;
chunk__39209 = G__39213;
count__39210 = G__39214;
i__39211 = G__39215;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39208);
if(temp__4657__auto__){
var seq__39208__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39208__$1)){
var c__28123__auto__ = cljs.core.chunk_first.call(null,seq__39208__$1);
var G__39216 = cljs.core.chunk_rest.call(null,seq__39208__$1);
var G__39217 = c__28123__auto__;
var G__39218 = cljs.core.count.call(null,c__28123__auto__);
var G__39219 = (0);
seq__39208 = G__39216;
chunk__39209 = G__39217;
count__39210 = G__39218;
i__39211 = G__39219;
continue;
} else {
var event = cljs.core.first.call(null,seq__39208__$1);
clear_event.call(null,event);

var G__39220 = cljs.core.next.call(null,seq__39208__$1);
var G__39221 = null;
var G__39222 = (0);
var G__39223 = (0);
seq__39208 = G__39220;
chunk__39209 = G__39221;
count__39210 = G__39222;
i__39211 = G__39223;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1497988477782