// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_.call(null,(state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),new cljs.core.Keyword(null,"finished","finished",-1018867731));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29419 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29419 = (function (f,meta29420){
this.f = f;
this.meta29420 = meta29420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29421,meta29420__$1){
var self__ = this;
var _29421__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29419(self__.f,meta29420__$1));
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29421){
var self__ = this;
var _29421__$1 = this;
return self__.meta29420;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29419.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29419.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29419.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29419.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta29420","meta29420",218552068,null)], null);
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29419.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29419.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers29419";

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29419.cljs$lang$ctorPrWriter = (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers29419");
});

cljs.core.async.impl.ioc_helpers.__GT_t_cljs$core$async$impl$ioc_helpers29419 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t_cljs$core$async$impl$ioc_helpers29419(f__$1,meta29420){
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29419(f__$1,meta29420));
});

}

return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers29419(f,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e29423){if((e29423 instanceof Object)){
var ex = e29423;
cljs.core.async.impl.protocols.close_BANG_.call(null,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.USER_START_IDX));

throw ex;
} else {
throw e29423;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__4655__auto__ = cljs.core.async.impl.protocols.take_BANG_.call(null,c,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (x){
var statearr_29426_29428 = state;
(statearr_29426_29428[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_29426_29428[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));
if(cljs.core.truth_(temp__4655__auto__)){
var cb = temp__4655__auto__;
var statearr_29427_29429 = state;
(statearr_29427_29429[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));

(statearr_29427_29429[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,c,val,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,(function (ret_val){
var statearr_29432_29434 = state;
(statearr_29432_29434[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_29432_29434[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
})));
if(cljs.core.truth_(temp__4655__auto__)){
var cb = temp__4655__auto__;
var statearr_29433_29435 = state;
(statearr_29433_29435[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));

(statearr_29433_29435[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
cljs.core.async.impl.protocols.put_BANG_.call(null,c,value,cljs.core.async.impl.ioc_helpers.fn_handler.call(null,((function (c){
return (function (){
return null;
});})(c))
));
}

cljs.core.async.impl.protocols.close_BANG_.call(null,c);

return c;
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
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27931__auto__,k__27932__auto__){
var self__ = this;
var this__27931__auto____$1 = this;
return this__27931__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__27932__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27933__auto__,k29437,else__27934__auto__){
var self__ = this;
var this__27933__auto____$1 = this;
var G__29439 = k29437;
var G__29439__$1 = (((G__29439 instanceof cljs.core.Keyword))?G__29439.fqn:null);
switch (G__29439__$1) {
case "catch-block":
return self__.catch_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "finally-block":
return self__.finally_block;

break;
case "continue-block":
return self__.continue_block;

break;
case "prev":
return self__.prev;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29437,else__27934__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27945__auto__,writer__27946__auto__,opts__27947__auto__){
var self__ = this;
var this__27945__auto____$1 = this;
var pr_pair__27948__auto__ = ((function (this__27945__auto____$1){
return (function (keyval__27949__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27946__auto__,cljs.core.pr_writer,""," ","",opts__27947__auto__,keyval__27949__auto__);
});})(this__27945__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27946__auto__,pr_pair__27948__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__27947__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29436){
var self__ = this;
var G__29436__$1 = this;
return (new cljs.core.RecordIter((0),G__29436__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),new cljs.core.Keyword(null,"finally-block","finally-block",832982472),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),new cljs.core.Keyword(null,"prev","prev",-1597069226)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27929__auto__){
var self__ = this;
var this__27929__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27925__auto__){
var self__ = this;
var this__27925__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27935__auto__){
var self__ = this;
var this__27935__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27926__auto__){
var self__ = this;
var this__27926__auto____$1 = this;
var h__27744__auto__ = self__.__hash;
if(!((h__27744__auto__ == null))){
return h__27744__auto__;
} else {
var h__27744__auto____$1 = cljs.core.hash_imap.call(null,this__27926__auto____$1);
self__.__hash = h__27744__auto____$1;

return h__27744__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27927__auto__,other__27928__auto__){
var self__ = this;
var this__27927__auto____$1 = this;
if(cljs.core.truth_((function (){var and__27292__auto__ = other__27928__auto__;
if(cljs.core.truth_(and__27292__auto__)){
return ((this__27927__auto____$1.constructor === other__27928__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__27927__auto____$1,other__27928__auto__));
} else {
return and__27292__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27940__auto__,k__27941__auto__){
var self__ = this;
var this__27940__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null,new cljs.core.Keyword(null,"prev","prev",-1597069226),null,new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),null], null), null),k__27941__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27940__auto____$1),self__.__meta),k__27941__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27941__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27938__auto__,k__27939__auto__,G__29436){
var self__ = this;
var this__27938__auto____$1 = this;
var pred__29440 = cljs.core.keyword_identical_QMARK_;
var expr__29441 = k__27939__auto__;
if(cljs.core.truth_(pred__29440.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),expr__29441))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__29436,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29440.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),expr__29441))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__29436,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29440.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),expr__29441))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__29436,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29440.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),expr__29441))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__29436,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29440.call(null,new cljs.core.Keyword(null,"prev","prev",-1597069226),expr__29441))){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__29436,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27939__auto__,G__29436),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27943__auto__){
var self__ = this;
var this__27943__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",832982472),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",-1597069226),self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27930__auto__,G__29436){
var self__ = this;
var this__27930__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__29436,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27936__auto__,entry__27937__auto__){
var self__ = this;
var this__27936__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27937__auto__)){
return this__27936__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__27937__auto__,(0)),cljs.core._nth.call(null,entry__27937__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27936__auto____$1,entry__27937__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"catch-block","catch-block",-1479223021,null),cljs.core.with_meta(new cljs.core.Symbol(null,"catch-exception","catch-exception",-356775268,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Class","Class",2064526977,null)], null)),new cljs.core.Symbol(null,"finally-block","finally-block",-1821453297,null),new cljs.core.Symbol(null,"continue-block","continue-block",-211516323,null),new cljs.core.Symbol(null,"prev","prev",43462301,null)], null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__27965__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__27965__auto__,writer__27966__auto__){
return cljs.core._write.call(null,writer__27966__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$map__GT_ExceptionFrame(G__29438){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(G__29438),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(G__29438),new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(G__29438),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(G__29438),new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(G__29438),null,cljs.core.dissoc.call(null,G__29438,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),new cljs.core.Keyword(null,"finally-block","finally-block",832982472),new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850),new cljs.core.Keyword(null,"prev","prev",-1597069226)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function cljs$core$async$impl$ioc_helpers$add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_29445 = state;
(statearr_29445[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame.call(null,catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_29445;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function cljs$core$async$impl$ioc_helpers$process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",1175212748).cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795).cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__27292__auto__ = exception;
if(cljs.core.truth_(and__27292__auto__)){
return cljs.core.not.call(null,exception_frame);
} else {
return and__27292__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__27292__auto__ = exception;
if(cljs.core.truth_(and__27292__auto__)){
var and__27292__auto____$1 = catch_block;
if(cljs.core.truth_(and__27292__auto____$1)){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),catch_exception)) || ((exception instanceof catch_exception));
} else {
return and__27292__auto____$1;
}
} else {
return and__27292__auto__;
}
})())){
var statearr_29451 = state;
(statearr_29451[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_29451[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_29451[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_29451[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",1175212748),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",-1997306795),null));

return statearr_29451;
} else {
if(cljs.core.truth_((function (){var and__27292__auto__ = exception;
if(cljs.core.truth_(and__27292__auto__)){
return (cljs.core.not.call(null,catch_block)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__27292__auto__;
}
})())){
var statearr_29452_29456 = state;
(statearr_29452_29456[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__29457 = state;
state = G__29457;
continue;
} else {
if(cljs.core.truth_((function (){var and__27292__auto__ = exception;
if(cljs.core.truth_(and__27292__auto__)){
var and__27292__auto____$1 = cljs.core.not.call(null,catch_block);
if(and__27292__auto____$1){
return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__27292__auto____$1;
}
} else {
return and__27292__auto__;
}
})())){
var statearr_29453 = state;
(statearr_29453[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_29453[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));

return statearr_29453;
} else {
if(cljs.core.truth_((function (){var and__27292__auto__ = cljs.core.not.call(null,exception);
if(and__27292__auto__){
return new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__27292__auto__;
}
})())){
var statearr_29454 = state;
(statearr_29454[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_29454[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.call(null,exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",832982472),null));

return statearr_29454;
} else {
if((cljs.core.not.call(null,exception)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",832982472).cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_29455 = state;
(statearr_29455[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",-1852047850).cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_29455[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_29455;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});

//# sourceMappingURL=ioc_helpers.js.map?rel=1497988463071