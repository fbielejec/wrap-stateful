// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__28424__auto__ = [];
var len__28417__auto___32561 = arguments.length;
var i__28418__auto___32562 = (0);
while(true){
if((i__28418__auto___32562 < len__28417__auto___32561)){
args__28424__auto__.push((arguments[i__28418__auto___32562]));

var G__32563 = (i__28418__auto___32562 + (1));
i__28418__auto___32562 = G__32563;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq32560){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32560));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__28424__auto__ = [];
var len__28417__auto___32565 = arguments.length;
var i__28418__auto___32566 = (0);
while(true){
if((i__28418__auto___32566 < len__28417__auto___32565)){
args__28424__auto__.push((arguments[i__28418__auto___32566]));

var G__32567 = (i__28418__auto___32566 + (1));
i__28418__auto___32566 = G__32567;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.print,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq32564){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32564));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,(function (){var pred__32571 = cljs.core._EQ_;
var expr__32572 = c;
if(cljs.core.truth_(pred__32571.call(null,"\b",expr__32572))){
return "\\backspace";
} else {
if(cljs.core.truth_(pred__32571.call(null,"\t",expr__32572))){
return "\\tab";
} else {
if(cljs.core.truth_(pred__32571.call(null,"\n",expr__32572))){
return "\\newline";
} else {
if(cljs.core.truth_(pred__32571.call(null,"\f",expr__32572))){
return "\\formfeed";
} else {
if(cljs.core.truth_(pred__32571.call(null,"\r",expr__32572))){
return "\\return";
} else {
if(cljs.core.truth_(pred__32571.call(null,"\"",expr__32572))){
return "\\\"";
} else {
if(cljs.core.truth_(pred__32571.call(null,"\\",expr__32572))){
return "\\\\";
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__28424__auto__ = [];
var len__28417__auto___32575 = arguments.length;
var i__28418__auto___32576 = (0);
while(true){
if((i__28418__auto___32576 < len__28417__auto___32575)){
args__28424__auto__.push((arguments[i__28418__auto___32576]));

var G__32577 = (i__28418__auto___32576 + (1));
i__28418__auto___32576 = G__32577;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq32574){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32574));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__28424__auto__ = [];
var len__28417__auto___32579 = arguments.length;
var i__28418__auto___32580 = (0);
while(true){
if((i__28418__auto___32580 < len__28417__auto___32579)){
args__28424__auto__.push((arguments[i__28418__auto___32580]));

var G__32581 = (i__28418__auto___32580 + (1));
i__28418__auto___32580 = G__32581;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.pr,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq32578){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32578));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first.call(null,lis__$1);
var remainder = cljs.core.next.call(null,lis__$1);
var vec__32585 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.call(null,vec__32585,(0),null);
var new_context = cljs.core.nth.call(null,vec__32585,(1),null);
var G__32588 = new_context;
var G__32589 = remainder;
var G__32590 = cljs.core.conj.call(null,acc,result);
context = G__32588;
lis__$1 = G__32589;
acc = G__32590;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__32594 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__32594,(0),null);
var new_context = cljs.core.nth.call(null,vec__32594,(1),null);
if(cljs.core.not.call(null,result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__32597 = new_context;
var G__32598 = cljs.core.conj.call(null,acc,result);
context = G__32597;
acc = G__32598;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__32602 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__32602,(0),null);
var continue$ = cljs.core.nth.call(null,vec__32602,(1),null);
var new_context = cljs.core.nth.call(null,vec__32602,(2),null);
if(cljs.core.not.call(null,continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__32605 = new_context;
var G__32606 = cljs.core.conj.call(null,acc,result);
context = G__32605;
acc = G__32606;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28092__auto__ = (function cljs$pprint$unzip_map_$_iter__32663(s__32664){
return (new cljs.core.LazySeq(null,(function (){
var s__32664__$1 = s__32664;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32664__$1);
if(temp__4657__auto__){
var s__32664__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32664__$2)){
var c__28090__auto__ = cljs.core.chunk_first.call(null,s__32664__$2);
var size__28091__auto__ = cljs.core.count.call(null,c__28090__auto__);
var b__32666 = cljs.core.chunk_buffer.call(null,size__28091__auto__);
if((function (){var i__32665 = (0);
while(true){
if((i__32665 < size__28091__auto__)){
var vec__32679 = cljs.core._nth.call(null,c__28090__auto__,i__32665);
var k = cljs.core.nth.call(null,vec__32679,(0),null);
var vec__32682 = cljs.core.nth.call(null,vec__32679,(1),null);
var v1 = cljs.core.nth.call(null,vec__32682,(0),null);
var v2 = cljs.core.nth.call(null,vec__32682,(1),null);
cljs.core.chunk_append.call(null,b__32666,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__32719 = (i__32665 + (1));
i__32665 = G__32719;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32666),cljs$pprint$unzip_map_$_iter__32663.call(null,cljs.core.chunk_rest.call(null,s__32664__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32666),null);
}
} else {
var vec__32685 = cljs.core.first.call(null,s__32664__$2);
var k = cljs.core.nth.call(null,vec__32685,(0),null);
var vec__32688 = cljs.core.nth.call(null,vec__32685,(1),null);
var v1 = cljs.core.nth.call(null,vec__32688,(0),null);
var v2 = cljs.core.nth.call(null,vec__32688,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__32663.call(null,cljs.core.rest.call(null,s__32664__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28092__auto__.call(null,m);
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28092__auto__ = (function cljs$pprint$unzip_map_$_iter__32691(s__32692){
return (new cljs.core.LazySeq(null,(function (){
var s__32692__$1 = s__32692;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32692__$1);
if(temp__4657__auto__){
var s__32692__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32692__$2)){
var c__28090__auto__ = cljs.core.chunk_first.call(null,s__32692__$2);
var size__28091__auto__ = cljs.core.count.call(null,c__28090__auto__);
var b__32694 = cljs.core.chunk_buffer.call(null,size__28091__auto__);
if((function (){var i__32693 = (0);
while(true){
if((i__32693 < size__28091__auto__)){
var vec__32707 = cljs.core._nth.call(null,c__28090__auto__,i__32693);
var k = cljs.core.nth.call(null,vec__32707,(0),null);
var vec__32710 = cljs.core.nth.call(null,vec__32707,(1),null);
var v1 = cljs.core.nth.call(null,vec__32710,(0),null);
var v2 = cljs.core.nth.call(null,vec__32710,(1),null);
cljs.core.chunk_append.call(null,b__32694,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__32720 = (i__32693 + (1));
i__32693 = G__32720;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32694),cljs$pprint$unzip_map_$_iter__32691.call(null,cljs.core.chunk_rest.call(null,s__32692__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32694),null);
}
} else {
var vec__32713 = cljs.core.first.call(null,s__32692__$2);
var k = cljs.core.nth.call(null,vec__32713,(0),null);
var vec__32716 = cljs.core.nth.call(null,vec__32713,(1),null);
var v1 = cljs.core.nth.call(null,vec__32716,(0),null);
var v2 = cljs.core.nth.call(null,vec__32716,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__32691.call(null,cljs.core.rest.call(null,s__32692__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28092__auto__.call(null,m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28092__auto__ = (function cljs$pprint$tuple_map_$_iter__32737(s__32738){
return (new cljs.core.LazySeq(null,(function (){
var s__32738__$1 = s__32738;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32738__$1);
if(temp__4657__auto__){
var s__32738__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32738__$2)){
var c__28090__auto__ = cljs.core.chunk_first.call(null,s__32738__$2);
var size__28091__auto__ = cljs.core.count.call(null,c__28090__auto__);
var b__32740 = cljs.core.chunk_buffer.call(null,size__28091__auto__);
if((function (){var i__32739 = (0);
while(true){
if((i__32739 < size__28091__auto__)){
var vec__32747 = cljs.core._nth.call(null,c__28090__auto__,i__32739);
var k = cljs.core.nth.call(null,vec__32747,(0),null);
var v = cljs.core.nth.call(null,vec__32747,(1),null);
cljs.core.chunk_append.call(null,b__32740,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__32753 = (i__32739 + (1));
i__32739 = G__32753;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32740),cljs$pprint$tuple_map_$_iter__32737.call(null,cljs.core.chunk_rest.call(null,s__32738__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32740),null);
}
} else {
var vec__32750 = cljs.core.first.call(null,s__32738__$2);
var k = cljs.core.nth.call(null,vec__32750,(0),null);
var v = cljs.core.nth.call(null,vec__32750,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__32737.call(null,cljs.core.rest.call(null,s__32738__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28092__auto__.call(null,m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count.call(null,s);
if(((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c))){
return cljs.core.subs.call(null,s,(0),(n + (1)));
} else {
var G__32754 = (n - (1));
n = G__32754;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count.call(null,s);
if(((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.call(null,n,len)) || (!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c)))){
return cljs.core.subs.call(null,s,n);
} else {
var G__32755 = (n + (1));
n = G__32755;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_.call(null,val))?cljs.core.set.call(null,val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if((cljs.core._EQ_.call(null,pos,cljs.core.count.call(null,aseq))) || (cljs.core.not.call(null,test.call(null,cljs.core.nth.call(null,aseq,pos))))){
return pos;
} else {
var G__32756 = (pos + (1));
pos = G__32756;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__27972__auto__ = (((pp == null))?null:pp);
var m__27973__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__27972__auto__)]);
if(!((m__27973__auto__ == null))){
return m__27973__auto__.call(null,pp);
} else {
var m__27973__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__27973__auto____$1 == null))){
return m__27973__auto____$1.call(null,pp);
} else {
throw cljs.core.missing_protocol.call(null,"IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
return sym.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599));
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235));
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548));
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548),new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322));
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.call(null,c,"\n")){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(0));

cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235)) + (1)));
} else {
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599)) + (1)));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322)),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var args32758 = [];
var len__28417__auto___32767 = arguments.length;
var i__28418__auto___32768 = (0);
while(true){
if((i__28418__auto___32768 < len__28417__auto___32767)){
args32758.push((arguments[i__28418__auto___32768]));

var G__32769 = (i__28418__auto___32768 + (1));
i__28418__auto___32768 = G__32769;
continue;
} else {
}
break;
}

var G__32760 = args32758.length;
switch (G__32760) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32758.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.call(null,writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max","max",61366548),max_columns,new cljs.core.Keyword(null,"cur","cur",1153190599),(0),new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"base","base",185279322),writer], null));
if(typeof cljs.pprint.t_cljs$pprint32761 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint32761 = (function (writer,max_columns,fields,meta32762){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta32762 = meta32762;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint32761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_32763,meta32762__$1){
var self__ = this;
var _32763__$1 = this;
return (new cljs.pprint.t_cljs$pprint32761(self__.writer,self__.max_columns,self__.fields,meta32762__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint32761.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_32763){
var self__ = this;
var _32763__$1 = this;
return self__.meta32762;
});})(fields))
;

cljs.pprint.t_cljs$pprint32761.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint32761.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint32761.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__32764 = cljs.core._EQ_;
var expr__32765 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__32764.call(null,String,expr__32765))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599)) + cljs.core.count.call(null,s)));
} else {
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),((cljs.core.count.call(null,s) - nl) - (1)));

cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count.call(null,cljs.core.filter.call(null,((function (s,nl,pred__32764,expr__32765,this$__$1,fields){
return (function (p1__32757_SHARP_){
return cljs.core._EQ_.call(null,p1__32757_SHARP_,"\n");
});})(s,nl,pred__32764,expr__32765,this$__$1,fields))
,s))));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"base","base",185279322)),s);
} else {
if(cljs.core.truth_(pred__32764.call(null,Number,expr__32765))){
return cljs.pprint.c_write_char.call(null,this$__$1,x);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__32765)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint32761.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta32762","meta32762",-162927370,null)], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint32761.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint32761.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint32761";

cljs.pprint.t_cljs$pprint32761.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cljs.pprint/t_cljs$pprint32761");
});})(fields))
;

cljs.pprint.__GT_t_cljs$pprint32761 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint32761(writer__$1,max_columns__$1,fields__$1,meta32762){
return (new cljs.pprint.t_cljs$pprint32761(writer__$1,max_columns__$1,fields__$1,meta32762));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint32761(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


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
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27931__auto__,k__27932__auto__){
var self__ = this;
var this__27931__auto____$1 = this;
return this__27931__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__27932__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27933__auto__,k32772,else__27934__auto__){
var self__ = this;
var this__27933__auto____$1 = this;
var G__32774 = k32772;
var G__32774__$1 = (((G__32774 instanceof cljs.core.Keyword))?G__32774.fqn:null);
switch (G__32774__$1) {
case "suffix":
return self__.suffix;

break;
case "indent":
return self__.indent;

break;
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "done-nl":
return self__.done_nl;

break;
case "start-col":
return self__.start_col;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32772,else__27934__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27945__auto__,writer__27946__auto__,opts__27947__auto__){
var self__ = this;
var this__27945__auto____$1 = this;
var pr_pair__27948__auto__ = ((function (this__27945__auto____$1){
return (function (keyval__27949__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27946__auto__,cljs.core.pr_writer,""," ","",opts__27947__auto__,keyval__27949__auto__);
});})(this__27945__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27946__auto__,pr_pair__27948__auto__,"#cljs.pprint.logical-block{",", ","}",opts__27947__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32771){
var self__ = this;
var G__32771__$1 = this;
return (new cljs.core.RecordIter((0),G__32771__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27929__auto__){
var self__ = this;
var this__27929__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27925__auto__){
var self__ = this;
var this__27925__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27935__auto__){
var self__ = this;
var this__27935__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27926__auto__){
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

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27927__auto__,other__27928__auto__){
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

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27940__auto__,k__27941__auto__){
var self__ = this;
var this__27940__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),null,new cljs.core.Keyword(null,"start-col","start-col",668080143),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),null], null), null),k__27941__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27940__auto____$1),self__.__meta),k__27941__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27941__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27938__auto__,k__27939__auto__,G__32771){
var self__ = this;
var this__27938__auto____$1 = this;
var pred__32775 = cljs.core.keyword_identical_QMARK_;
var expr__32776 = k__27939__auto__;
if(cljs.core.truth_(pred__32775.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__32776))){
return (new cljs.pprint.logical_block(G__32771,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32775.call(null,new cljs.core.Keyword(null,"section","section",-300141526),expr__32776))){
return (new cljs.pprint.logical_block(self__.parent,G__32771,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32775.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__32776))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__32771,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32775.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125),expr__32776))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__32771,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32775.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__32776))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__32771,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32775.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__32776))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__32771,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32775.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__32776))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__32771,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32775.call(null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__32776))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__32771,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32775.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__32776))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__32771,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32775.call(null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__32776))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__32771,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27939__auto__,G__32771),null));
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
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27943__auto__){
var self__ = this;
var this__27943__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27930__auto__,G__32771){
var self__ = this;
var this__27930__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__32771,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27936__auto__,entry__27937__auto__){
var self__ = this;
var this__27936__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27937__auto__)){
return this__27936__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__27937__auto__,(0)),cljs.core._nth.call(null,entry__27937__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27936__auto____$1,entry__27937__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"start-col","start-col",-1986355626,null),new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.Symbol(null,"done-nl","done-nl",1259507187,null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",-845608894,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",-1807493956,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",-1041744575,null)], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__27965__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/logical-block");
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__27965__auto__,writer__27966__auto__){
return cljs.core._write.call(null,writer__27966__auto__,"cljs.pprint/logical-block");
});

cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__32773){
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__32773),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__32773),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__32773),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__32773),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__32773),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__32773),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__32773),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__32773),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__32773),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__32773),null,cljs.core.dissoc.call(null,G__32773,new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__32779 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__32779;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq.call(null,l);
if(l__$1){
return (new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,l__$1)) - new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,l__$1)));
} else {
return (0);
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
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27931__auto__,k__27932__auto__){
var self__ = this;
var this__27931__auto____$1 = this;
return this__27931__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__27932__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27933__auto__,k32781,else__27934__auto__){
var self__ = this;
var this__27933__auto____$1 = this;
var G__32783 = k32781;
var G__32783__$1 = (((G__32783 instanceof cljs.core.Keyword))?G__32783.fqn:null);
switch (G__32783__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32781,else__27934__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27945__auto__,writer__27946__auto__,opts__27947__auto__){
var self__ = this;
var this__27945__auto____$1 = this;
var pr_pair__27948__auto__ = ((function (this__27945__auto____$1){
return (function (keyval__27949__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27946__auto__,cljs.core.pr_writer,""," ","",opts__27947__auto__,keyval__27949__auto__);
});})(this__27945__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27946__auto__,pr_pair__27948__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__27947__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32780){
var self__ = this;
var G__32780__$1 = this;
return (new cljs.core.RecordIter((0),G__32780__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27929__auto__){
var self__ = this;
var this__27929__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27925__auto__){
var self__ = this;
var this__27925__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27935__auto__){
var self__ = this;
var this__27935__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27926__auto__){
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

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27927__auto__,other__27928__auto__){
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

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27940__auto__,k__27941__auto__){
var self__ = this;
var this__27940__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__27941__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27940__auto____$1),self__.__meta),k__27941__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27941__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27938__auto__,k__27939__auto__,G__32780){
var self__ = this;
var this__27938__auto____$1 = this;
var pred__32784 = cljs.core.keyword_identical_QMARK_;
var expr__32785 = k__27939__auto__;
if(cljs.core.truth_(pred__32784.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__32785))){
return (new cljs.pprint.buffer_blob(G__32780,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32784.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__32785))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__32780,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32784.call(null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__32785))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__32780,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32784.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__32785))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__32780,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32784.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__32785))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__32780,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27939__auto__,G__32780),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27943__auto__){
var self__ = this;
var this__27943__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27930__auto__,G__32780){
var self__ = this;
var this__27930__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__32780,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27936__auto__,entry__27937__auto__){
var self__ = this;
var this__27936__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27937__auto__)){
return this__27936__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__27937__auto__,(0)),cljs.core._nth.call(null,entry__27937__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27936__auto____$1,entry__27937__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",-1158428773,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__27965__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/buffer-blob");
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__27965__auto__,writer__27966__auto__){
return cljs.core._write.call(null,writer__27966__auto__,"cljs.pprint/buffer-blob");
});

cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__32782){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__32782),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__32782),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__32782),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__32782),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__32782),null,cljs.core.dissoc.call(null,G__32782,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__32495__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__32495__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
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
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27931__auto__,k__27932__auto__){
var self__ = this;
var this__27931__auto____$1 = this;
return this__27931__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__27932__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27933__auto__,k32789,else__27934__auto__){
var self__ = this;
var this__27933__auto____$1 = this;
var G__32791 = k32789;
var G__32791__$1 = (((G__32791 instanceof cljs.core.Keyword))?G__32791.fqn:null);
switch (G__32791__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32789,else__27934__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27945__auto__,writer__27946__auto__,opts__27947__auto__){
var self__ = this;
var this__27945__auto____$1 = this;
var pr_pair__27948__auto__ = ((function (this__27945__auto____$1){
return (function (keyval__27949__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27946__auto__,cljs.core.pr_writer,""," ","",opts__27947__auto__,keyval__27949__auto__);
});})(this__27945__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27946__auto__,pr_pair__27948__auto__,"#cljs.pprint.nl-t{",", ","}",opts__27947__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32788){
var self__ = this;
var G__32788__$1 = this;
return (new cljs.core.RecordIter((0),G__32788__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27929__auto__){
var self__ = this;
var this__27929__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27925__auto__){
var self__ = this;
var this__27925__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27935__auto__){
var self__ = this;
var this__27935__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27926__auto__){
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

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27927__auto__,other__27928__auto__){
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

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27940__auto__,k__27941__auto__){
var self__ = this;
var this__27940__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__27941__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27940__auto____$1),self__.__meta),k__27941__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27941__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27938__auto__,k__27939__auto__,G__32788){
var self__ = this;
var this__27938__auto____$1 = this;
var pred__32792 = cljs.core.keyword_identical_QMARK_;
var expr__32793 = k__27939__auto__;
if(cljs.core.truth_(pred__32792.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__32793))){
return (new cljs.pprint.nl_t(G__32788,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32792.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__32793))){
return (new cljs.pprint.nl_t(self__.type_tag,G__32788,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32792.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__32793))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__32788,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32792.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__32793))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__32788,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32792.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__32793))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__32788,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27939__auto__,G__32788),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27943__auto__){
var self__ = this;
var this__27943__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27930__auto__,G__32788){
var self__ = this;
var this__27930__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__32788,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27936__auto__,entry__27937__auto__){
var self__ = this;
var this__27936__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27937__auto__)){
return this__27936__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__27937__auto__,(0)),cljs.core._nth.call(null,entry__27937__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27936__auto____$1,entry__27937__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__27965__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/nl-t");
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__27965__auto__,writer__27966__auto__){
return cljs.core._write.call(null,writer__27966__auto__,"cljs.pprint/nl-t");
});

cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__32790){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__32790),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__32790),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__32790),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__32790),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__32790),null,cljs.core.dissoc.call(null,G__32790,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__32495__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__32495__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
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
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27931__auto__,k__27932__auto__){
var self__ = this;
var this__27931__auto____$1 = this;
return this__27931__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__27932__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27933__auto__,k32797,else__27934__auto__){
var self__ = this;
var this__27933__auto____$1 = this;
var G__32799 = k32797;
var G__32799__$1 = (((G__32799 instanceof cljs.core.Keyword))?G__32799.fqn:null);
switch (G__32799__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32797,else__27934__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27945__auto__,writer__27946__auto__,opts__27947__auto__){
var self__ = this;
var this__27945__auto____$1 = this;
var pr_pair__27948__auto__ = ((function (this__27945__auto____$1){
return (function (keyval__27949__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27946__auto__,cljs.core.pr_writer,""," ","",opts__27947__auto__,keyval__27949__auto__);
});})(this__27945__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27946__auto__,pr_pair__27948__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__27947__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32796){
var self__ = this;
var G__32796__$1 = this;
return (new cljs.core.RecordIter((0),G__32796__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27929__auto__){
var self__ = this;
var this__27929__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27925__auto__){
var self__ = this;
var this__27925__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27935__auto__){
var self__ = this;
var this__27935__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27926__auto__){
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

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27927__auto__,other__27928__auto__){
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

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27940__auto__,k__27941__auto__){
var self__ = this;
var this__27940__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__27941__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27940__auto____$1),self__.__meta),k__27941__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27941__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27938__auto__,k__27939__auto__,G__32796){
var self__ = this;
var this__27938__auto____$1 = this;
var pred__32800 = cljs.core.keyword_identical_QMARK_;
var expr__32801 = k__27939__auto__;
if(cljs.core.truth_(pred__32800.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__32801))){
return (new cljs.pprint.start_block_t(G__32796,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32800.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__32801))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__32796,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32800.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__32801))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__32796,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32800.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__32801))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__32796,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27939__auto__,G__32796),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27943__auto__){
var self__ = this;
var this__27943__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27930__auto__,G__32796){
var self__ = this;
var this__27930__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__32796,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27936__auto__,entry__27937__auto__){
var self__ = this;
var this__27936__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27937__auto__)){
return this__27936__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__27937__auto__,(0)),cljs.core._nth.call(null,entry__27937__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27936__auto____$1,entry__27937__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__27965__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/start-block-t");
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__27965__auto__,writer__27966__auto__){
return cljs.core._write.call(null,writer__27966__auto__,"cljs.pprint/start-block-t");
});

cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__32798){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__32798),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__32798),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__32798),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__32798),null,cljs.core.dissoc.call(null,G__32798,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__32495__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__32495__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
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
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27931__auto__,k__27932__auto__){
var self__ = this;
var this__27931__auto____$1 = this;
return this__27931__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__27932__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27933__auto__,k32805,else__27934__auto__){
var self__ = this;
var this__27933__auto____$1 = this;
var G__32807 = k32805;
var G__32807__$1 = (((G__32807 instanceof cljs.core.Keyword))?G__32807.fqn:null);
switch (G__32807__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32805,else__27934__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27945__auto__,writer__27946__auto__,opts__27947__auto__){
var self__ = this;
var this__27945__auto____$1 = this;
var pr_pair__27948__auto__ = ((function (this__27945__auto____$1){
return (function (keyval__27949__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27946__auto__,cljs.core.pr_writer,""," ","",opts__27947__auto__,keyval__27949__auto__);
});})(this__27945__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27946__auto__,pr_pair__27948__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__27947__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32804){
var self__ = this;
var G__32804__$1 = this;
return (new cljs.core.RecordIter((0),G__32804__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27929__auto__){
var self__ = this;
var this__27929__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27925__auto__){
var self__ = this;
var this__27925__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27935__auto__){
var self__ = this;
var this__27935__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27926__auto__){
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

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27927__auto__,other__27928__auto__){
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

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27940__auto__,k__27941__auto__){
var self__ = this;
var this__27940__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__27941__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27940__auto____$1),self__.__meta),k__27941__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27941__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27938__auto__,k__27939__auto__,G__32804){
var self__ = this;
var this__27938__auto____$1 = this;
var pred__32808 = cljs.core.keyword_identical_QMARK_;
var expr__32809 = k__27939__auto__;
if(cljs.core.truth_(pred__32808.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__32809))){
return (new cljs.pprint.end_block_t(G__32804,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32808.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__32809))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__32804,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32808.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__32809))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__32804,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32808.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__32809))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__32804,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27939__auto__,G__32804),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27943__auto__){
var self__ = this;
var this__27943__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27930__auto__,G__32804){
var self__ = this;
var this__27930__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__32804,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27936__auto__,entry__27937__auto__){
var self__ = this;
var this__27936__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27937__auto__)){
return this__27936__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__27937__auto__,(0)),cljs.core._nth.call(null,entry__27937__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27936__auto____$1,entry__27937__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__27965__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/end-block-t");
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__27965__auto__,writer__27966__auto__){
return cljs.core._write.call(null,writer__27966__auto__,"cljs.pprint/end-block-t");
});

cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__32806){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__32806),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__32806),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__32806),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__32806),null,cljs.core.dissoc.call(null,G__32806,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__32495__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__32495__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
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
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27931__auto__,k__27932__auto__){
var self__ = this;
var this__27931__auto____$1 = this;
return this__27931__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__27932__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27933__auto__,k32813,else__27934__auto__){
var self__ = this;
var this__27933__auto____$1 = this;
var G__32815 = k32813;
var G__32815__$1 = (((G__32815 instanceof cljs.core.Keyword))?G__32815.fqn:null);
switch (G__32815__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32813,else__27934__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27945__auto__,writer__27946__auto__,opts__27947__auto__){
var self__ = this;
var this__27945__auto____$1 = this;
var pr_pair__27948__auto__ = ((function (this__27945__auto____$1){
return (function (keyval__27949__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27946__auto__,cljs.core.pr_writer,""," ","",opts__27947__auto__,keyval__27949__auto__);
});})(this__27945__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27946__auto__,pr_pair__27948__auto__,"#cljs.pprint.indent-t{",", ","}",opts__27947__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32812){
var self__ = this;
var G__32812__$1 = this;
return (new cljs.core.RecordIter((0),G__32812__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27929__auto__){
var self__ = this;
var this__27929__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27925__auto__){
var self__ = this;
var this__27925__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27935__auto__){
var self__ = this;
var this__27935__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27926__auto__){
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

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27927__auto__,other__27928__auto__){
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

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27940__auto__,k__27941__auto__){
var self__ = this;
var this__27940__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__27941__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27940__auto____$1),self__.__meta),k__27941__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27941__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27938__auto__,k__27939__auto__,G__32812){
var self__ = this;
var this__27938__auto____$1 = this;
var pred__32816 = cljs.core.keyword_identical_QMARK_;
var expr__32817 = k__27939__auto__;
if(cljs.core.truth_(pred__32816.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__32817))){
return (new cljs.pprint.indent_t(G__32812,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32816.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__32817))){
return (new cljs.pprint.indent_t(self__.type_tag,G__32812,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32816.call(null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__32817))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__32812,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32816.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__32817))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__32812,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32816.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__32817))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__32812,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32816.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__32817))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__32812,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27939__auto__,G__32812),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27943__auto__){
var self__ = this;
var this__27943__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27930__auto__,G__32812){
var self__ = this;
var this__27930__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__32812,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27936__auto__,entry__27937__auto__){
var self__ = this;
var this__27936__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27937__auto__)){
return this__27936__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__27937__auto__,(0)),cljs.core._nth.call(null,entry__27937__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27936__auto____$1,entry__27937__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"relative-to","relative-to",1170431476,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__27965__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/indent-t");
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__27965__auto__,writer__27966__auto__){
return cljs.core._write.call(null,writer__27966__auto__,"cljs.pprint/indent-t");
});

cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__32814){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__32814),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__32814),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__32814),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__32814),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__32814),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__32814),null,cljs.core.dissoc.call(null,G__32814,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",528318969),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__32495__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__32495__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__28237__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__28238__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__28239__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__28240__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__28241__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","write-token"),((function (method_table__28237__auto__,prefer_table__28238__auto__,method_cache__28239__auto__,cached_hierarchy__28240__auto__,hierarchy__28241__auto__){
return (function (p1__32821_SHARP_,p2__32820_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__32820_SHARP_);
});})(method_table__28237__auto__,prefer_table__28238__auto__,method_cache__28239__auto__,cached_hierarchy__28240__auto__,hierarchy__28241__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__28241__auto__,method_table__28237__auto__,prefer_table__28238__auto__,method_cache__28239__auto__,cached_hierarchy__28240__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),(function (this$,token){
var temp__4657__auto___32822 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4657__auto___32822)){
var cb_32823 = temp__4657__auto___32822;
cb_32823.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
var temp__4657__auto___32824 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__4657__auto___32824)){
var prefix_32825 = temp__4657__auto___32824;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix_32825);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),(function (this$,token){
var temp__4657__auto___32826 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4657__auto___32826)){
var cb_32827 = temp__4657__auto___32826;
cb_32827.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}

var temp__4657__auto__ = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__4657__auto__)){
var suffix = temp__4657__auto__;
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"indent-t","indent-t",528318969),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__32828 = cljs.core._EQ_;
var expr__32829 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(pred__32828.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__32829))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__32828.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__32829))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__32829)].join('')));
}
}
})()));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),(function (this$,token){
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),(function (this$,token){
if(cljs.core.truth_((function (){var or__27304__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",542802336));
if(or__27304__auto__){
return or__27304__auto__;
} else {
var and__27292__auto__ = !(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",883462889)));
if(and__27292__auto__){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__27292__auto__;
}
}
})())){
cljs.pprint.emit_nl.call(null,this$,token);
} else {
var temp__4655__auto___32831 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4655__auto___32831)){
var tws_32832 = temp__4655__auto___32831;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_32832);
} else {
}
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__32837 = cljs.core.seq.call(null,tokens);
var chunk__32838 = null;
var count__32839 = (0);
var i__32840 = (0);
while(true){
if((i__32840 < count__32839)){
var token = cljs.core._nth.call(null,chunk__32838,i__32840);
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114)))){
var temp__4655__auto___32841 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4655__auto___32841)){
var tws_32842 = temp__4655__auto___32841;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_32842);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_32843 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__27292__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__27292__auto__)){
return tws_32843;
} else {
return and__27292__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_32843);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}

var G__32844 = seq__32837;
var G__32845 = chunk__32838;
var G__32846 = count__32839;
var G__32847 = (i__32840 + (1));
seq__32837 = G__32844;
chunk__32838 = G__32845;
count__32839 = G__32846;
i__32840 = G__32847;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32837);
if(temp__4657__auto__){
var seq__32837__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32837__$1)){
var c__28123__auto__ = cljs.core.chunk_first.call(null,seq__32837__$1);
var G__32848 = cljs.core.chunk_rest.call(null,seq__32837__$1);
var G__32849 = c__28123__auto__;
var G__32850 = cljs.core.count.call(null,c__28123__auto__);
var G__32851 = (0);
seq__32837 = G__32848;
chunk__32838 = G__32849;
count__32839 = G__32850;
i__32840 = G__32851;
continue;
} else {
var token = cljs.core.first.call(null,seq__32837__$1);
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114)))){
var temp__4655__auto___32852 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4655__auto___32852)){
var tws_32853 = temp__4655__auto___32852;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_32853);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_32854 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__27292__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__27292__auto__)){
return tws_32854;
} else {
return and__27292__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_32854);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}

var G__32855 = cljs.core.next.call(null,seq__32837__$1);
var G__32856 = null;
var G__32857 = (0);
var G__32858 = (0);
seq__32837 = G__32855;
chunk__32838 = G__32856;
count__32839 = G__32857;
i__32840 = G__32858;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
return ((maxcol == null)) || (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))) + cljs.pprint.buffer_length.call(null,tokens)) < maxcol));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__27304__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width.call(null,this$);
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
var and__27292__auto__ = miser_width;
if(cljs.core.truth_(and__27292__auto__)){
var and__27292__auto____$1 = maxcol;
if(cljs.core.truth_(and__27292__auto____$1)){
var and__27292__auto____$2 = (cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__27292__auto____$2){
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
} else {
return and__27292__auto____$2;
}
} else {
return and__27292__auto____$1;
}
} else {
return and__27292__auto__;
}
});
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__28237__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__28238__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__28239__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__28240__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__28241__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","emit-nl?"),((function (method_table__28237__auto__,prefer_table__28238__auto__,method_cache__28239__auto__,cached_hierarchy__28240__auto__,hierarchy__28241__auto__){
return (function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__28237__auto__,prefer_table__28238__auto__,method_cache__28239__auto__,cached_hierarchy__28240__auto__,hierarchy__28241__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__28241__auto__,method_table__28237__auto__,prefer_table__28238__auto__,method_cache__28239__auto__,cached_hierarchy__28240__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"linear","linear",872268697),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"miser","miser",-556060186),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"fill","fill",883462889),(function (newl,this$,section,subsection){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
var or__27304__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
var or__27304__auto____$1 = cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,subsection));
if(or__27304__auto____$1){
return or__27304__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}
}
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"mandatory","mandatory",542802336),(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__32859_SHARP_){
return cljs.core.not.call(null,(function (){var and__27292__auto__ = cljs.pprint.nl_t_QMARK_.call(null,p1__32859_SHARP_);
if(cljs.core.truth_(and__27292__auto__)){
return cljs.pprint.ancestor_QMARK_.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__32859_SHARP_),lb);
} else {
return and__27292__auto__;
}
})());
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq.call(null,cljs.core.drop.call(null,(cljs.core.count.call(null,section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__32860_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__32860_SHARP_);
return cljs.core.not.call(null,(function (){var and__27292__auto__ = cljs.pprint.nl_t_QMARK_.call(null,p1__32860_SHARP_);
if(cljs.core.truth_(and__27292__auto__)){
var or__27304__auto__ = cljs.core._EQ_.call(null,nl_lb,lb);
if(or__27304__auto__){
return or__27304__auto__;
} else {
return cljs.pprint.ancestor_QMARK_.call(null,nl_lb,lb);
}
} else {
return and__27292__auto__;
}
})());
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__32861 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__32861;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var istr_32862 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(cljs.core.deref.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count.call(null,prefix))," "));
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),istr_32862);

return cljs.pprint.update_nl_state.call(null,lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__32863_SHARP_){
return cljs.core.not.call(null,cljs.pprint.nl_t_QMARK_.call(null,p1__32863_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__32870 = cljs.pprint.split_at_newline.call(null,tokens);
var a = cljs.core.nth.call(null,vec__32870,(0),null);
var b = cljs.core.nth.call(null,vec__32870,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens.call(null,this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__32873 = cljs.pprint.get_section.call(null,b);
var section = cljs.core.nth.call(null,vec__32873,(0),null);
var remainder = cljs.core.nth.call(null,vec__32873,(1),null);
var newl = cljs.core.first.call(null,b);
var do_nl = cljs.pprint.emit_nl_QMARK_.call(null,newl,this$,section,cljs.pprint.get_sub_section.call(null,b));
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl.call(null,this$,newl);

return cljs.core.next.call(null,b);
})()
:b);
var long_section = cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = cljs.pprint.write_token_string.call(null,this$,section);
if(cljs.core._EQ_.call(null,rem2,section)){
cljs.pprint.write_tokens.call(null,this$,section,false);

return remainder;
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
while(true){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,buffer))){
var new_buffer = cljs.pprint.write_token_string.call(null,this$,buffer);
if(!((buffer === new_buffer))){
var G__32876 = new_buffer;
buffer = G__32876;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj.call(null,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),token));

if(cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))))){
return cljs.pprint.write_line.call(null,this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line.call(null,this$);

var temp__4655__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4655__auto__)){
var buf = temp__4655__auto__;
cljs.pprint.write_tokens.call(null,this$,buf,true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__4657__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4657__auto__)){
var tws = temp__4657__auto__;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.call(null,s,"\n",(-1));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,lines),(1))){
return s;
} else {
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))));
var l = cljs.core.first.call(null,lines);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))))){
var oldpos_32885 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_32886 = (oldpos_32885 + cljs.core.count.call(null,l));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_32886);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,l,null,oldpos_32885,newpos_32886));

cljs.pprint.write_buffered_output.call(null,this$);
} else {
cljs.pprint.write_white_space.call(null,this$);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l);
}

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),"\n");

var seq__32881_32887 = cljs.core.seq.call(null,cljs.core.next.call(null,cljs.core.butlast.call(null,lines)));
var chunk__32882_32888 = null;
var count__32883_32889 = (0);
var i__32884_32890 = (0);
while(true){
if((i__32884_32890 < count__32883_32889)){
var l_32891__$1 = cljs.core._nth.call(null,chunk__32882_32888,i__32884_32890);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_32891__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var G__32892 = seq__32881_32887;
var G__32893 = chunk__32882_32888;
var G__32894 = count__32883_32889;
var G__32895 = (i__32884_32890 + (1));
seq__32881_32887 = G__32892;
chunk__32882_32888 = G__32893;
count__32883_32889 = G__32894;
i__32884_32890 = G__32895;
continue;
} else {
var temp__4657__auto___32896 = cljs.core.seq.call(null,seq__32881_32887);
if(temp__4657__auto___32896){
var seq__32881_32897__$1 = temp__4657__auto___32896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32881_32897__$1)){
var c__28123__auto___32898 = cljs.core.chunk_first.call(null,seq__32881_32897__$1);
var G__32899 = cljs.core.chunk_rest.call(null,seq__32881_32897__$1);
var G__32900 = c__28123__auto___32898;
var G__32901 = cljs.core.count.call(null,c__28123__auto___32898);
var G__32902 = (0);
seq__32881_32887 = G__32899;
chunk__32882_32888 = G__32900;
count__32883_32889 = G__32901;
i__32884_32890 = G__32902;
continue;
} else {
var l_32903__$1 = cljs.core.first.call(null,seq__32881_32897__$1);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_32903__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var G__32904 = cljs.core.next.call(null,seq__32881_32897__$1);
var G__32905 = null;
var G__32906 = (0);
var G__32907 = (0);
seq__32881_32887 = G__32904;
chunk__32882_32888 = G__32905;
count__32883_32889 = G__32906;
i__32884_32890 = G__32907;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"writing","writing",-1486865108));

return cljs.core.last.call(null,lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),c);
} else {
if(cljs.core._EQ_.call(null,c,"\n")){
return cljs.pprint.write_initial_lines.call(null,this$,"\n");
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,cljs.core.char$.call(null,c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"buffer-block","buffer-block",-10937307),new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"buffer-level","buffer-level",928864731),new cljs.core.Keyword(null,"buffer","buffer",617295198)],[lb,miser_width,lb,true,null,new cljs.core.Keyword(null,"writing","writing",-1486865108),(0),null,cljs.pprint.column_writer.call(null,writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if(typeof cljs.pprint.t_cljs$pprint32914 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint32914 = (function (writer,max_columns,miser_width,lb,fields,meta32915){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta32915 = meta32915;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint32914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_32916,meta32915__$1){
var self__ = this;
var _32916__$1 = this;
return (new cljs.pprint.t_cljs$pprint32914(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta32915__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint32914.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_32916){
var self__ = this;
var _32916__$1 = this;
return self__.meta32915;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint32914.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint32914.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__32917 = cljs.core._EQ_;
var expr__32918 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__32917.call(null,String,expr__32918))){
var s0 = cljs.pprint.write_initial_lines.call(null,this$__$1,x);
var s = clojure.string.replace_first.call(null,s0,/\s+$/,"");
var white_space = cljs.core.subs.call(null,s0,cljs.core.count.call(null,s));
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
if(cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),s);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),white_space);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
var newpos = (oldpos + cljs.core.count.call(null,s0));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$__$1,cljs.pprint.make_buffer_blob.call(null,s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_(pred__32917.call(null,Number,expr__32918))){
return cljs.pprint.p_write_char.call(null,this$__$1,x);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__32918)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint32914.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.pprint._ppflush.call(null,this$__$1);

return cljs.core._flush.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint32914.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint32914.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),new cljs.core.Keyword(null,"buffering","buffering",-876713613))){
cljs.pprint.write_tokens.call(null,this$__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space.call(null,this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint32914.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta32915","meta32915",-1801693604,null)], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint32914.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint32914.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint32914";

cljs.pprint.t_cljs$pprint32914.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cljs.pprint/t_cljs$pprint32914");
});})(lb,fields))
;

cljs.pprint.__GT_t_cljs$pprint32914 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint32914(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta32915){
return (new cljs.pprint.t_cljs$pprint32914(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta32915));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint32914(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),lb);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

var temp__4657__auto___32920 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4657__auto___32920)){
var cb_32921 = temp__4657__auto___32920;
cb_32921.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count.call(null,prefix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_start_block_t.call(null,lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

if(cljs.core.truth_(suffix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
}

var temp__4657__auto___32922 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4657__auto___32922)){
var cb_32923 = temp__4657__auto___32922;
cb_32923.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}
} else {
var oldpos_32924 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_32925 = (oldpos_32924 + (cljs.core.truth_(suffix)?cljs.core.count.call(null,suffix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_32925);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_end_block_t.call(null,lb,oldpos_32924,newpos_32925));
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"buffering","buffering",-876713613));

var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_nl_t.call(null,type,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__32929 = cljs.core._EQ_;
var expr__32930 = relative_to;
if(cljs.core.truth_(pred__32929.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__32930))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__32929.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__32930))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__32930)].join('')));
}
}
})()));
} else {
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_indent_t.call(null,lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__32932_SHARP_){
var temp__4657__auto__ = cljs.core.get.call(null,t,cljs.core.key.call(null,p1__32932_SHARP_));
if(cljs.core.truth_(temp__4657__auto__)){
var v = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val.call(null,p1__32932_SHARP_)], null);
} else {
return null;
}
}),m));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__27292__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x));
if(and__27292__auto__){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,x)));
} else {
return and__27292__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer.call(null,base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__27292__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__27292__auto__)){
var and__27292__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__27292__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__27292__auto____$1;
}
} else {
return and__27292__auto__;
}
})();
if(!(cljs.pprint._STAR_print_pretty_STAR_)){
cljs.pprint.pr.call(null,object);
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object);
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__28424__auto__ = [];
var len__28417__auto___32953 = arguments.length;
var i__28418__auto___32954 = (0);
while(true){
if((i__28418__auto___32954 < len__28417__auto___32953)){
args__28424__auto__.push((arguments[i__28418__auto___32954]));

var G__32955 = (i__28418__auto___32954 + (1));
i__28418__auto___32954 = G__32955;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((1) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28425__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",1534941648),true], null),cljs.core.apply.call(null,cljs.core.hash_map,kw_args));
var _STAR_print_base_STAR_32939 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_32940 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_32941 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_32942 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_32943 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_32944 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_32945 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_32946 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_32947 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_32948 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_32949 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_32950 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"stream","stream",1534941648)))?new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__32478__auto___32956 = base_writer;
var new_writer__32479__auto___32957 = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__32478__auto___32956));
var _STAR_out_STAR_32951_32958 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__32479__auto___32957)?cljs.pprint.make_pretty_writer.call(null,base_writer__32478__auto___32956,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__32478__auto___32956);

try{cljs.pprint.write_out.call(null,object);

cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_32951_32958;
}} else {
var _STAR_out_STAR_32952_32959 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{cljs.pprint.pr.call(null,object);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_32952_32959;
}}

if(optval === true){
cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
}

if((optval == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_32950;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_32949;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_32948;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_32947;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_32946;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_32945;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_32944;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_32943;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_32942;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_32941;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_32940;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_32939;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq32937){
var G__32938 = cljs.core.first.call(null,seq32937);
var seq32937__$1 = cljs.core.next.call(null,seq32937);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__32938,seq32937__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var args32960 = [];
var len__28417__auto___32966 = arguments.length;
var i__28418__auto___32967 = (0);
while(true){
if((i__28418__auto___32967 < len__28417__auto___32966)){
args32960.push((arguments[i__28418__auto___32967]));

var G__32968 = (i__28418__auto___32967 + (1));
i__28418__auto___32967 = G__32968;
continue;
} else {
}
break;
}

var G__32962 = args32960.length;
switch (G__32962) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32960.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_32963 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.call(null,object,cljs.core._STAR_out_STAR_);

return cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_32963;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__32478__auto__ = writer;
var new_writer__32479__auto__ = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__32478__auto__));
var _STAR_out_STAR_32964 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__32479__auto__)?cljs.pprint.make_pretty_writer.call(null,base_writer__32478__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__32478__auto__);

try{var _STAR_print_pretty_STAR_32965_32970 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out.call(null,object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_32965_32970;
}
if(!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,cljs.core._STAR_out_STAR_)))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_32964;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not.call(null,choices.call(null,arg))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad argument: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),cljs.core.str.cljs$core$IFn$_invoke$arity$1(". It must be one of "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__27292__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__27292__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__27292__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mandatory","mandatory",542802336),null,new cljs.core.Keyword(null,"miser","miser",-556060186),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"linear","linear",872268697),null], null), null));

return cljs.pprint.nl.call(null,cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg.call(null,relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"current","current",-1088038603),null], null), null));

return cljs.pprint.indent.call(null,cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"line-relative","line-relative",1149548219),null,new cljs.core.Keyword(null,"section-relative","section-relative",-658298724),null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__28424__auto__ = [];
var len__28417__auto___32974 = arguments.length;
var i__28418__auto___32975 = (0);
while(true){
if((i__28418__auto___32975 < len__28417__auto___32974)){
args__28424__auto__.push((arguments[i__28418__auto___32975]));

var G__32976 = (i__28418__auto___32975 + (1));
i__28418__auto___32975 = G__32976;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((2) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28425__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format.call(null,format_in):format_in);
var navigator = cljs.pprint.init_navigator.call(null,args);
return cljs.pprint.execute_format.call(null,writer,compiled_format,navigator);
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq32971){
var G__32972 = cljs.core.first.call(null,seq32971);
var seq32971__$1 = cljs.core.next.call(null,seq32971);
var G__32973 = cljs.core.first.call(null,seq32971__$1);
var seq32971__$2 = cljs.core.next.call(null,seq32971__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__32972,G__32973,seq32971__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,offset," "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("^"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
throw Error(full_message);
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
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27931__auto__,k__27932__auto__){
var self__ = this;
var this__27931__auto____$1 = this;
return this__27931__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__27932__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27933__auto__,k32978,else__27934__auto__){
var self__ = this;
var this__27933__auto____$1 = this;
var G__32980 = k32978;
var G__32980__$1 = (((G__32980 instanceof cljs.core.Keyword))?G__32980.fqn:null);
switch (G__32980__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32978,else__27934__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27945__auto__,writer__27946__auto__,opts__27947__auto__){
var self__ = this;
var this__27945__auto____$1 = this;
var pr_pair__27948__auto__ = ((function (this__27945__auto____$1){
return (function (keyval__27949__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27946__auto__,cljs.core.pr_writer,""," ","",opts__27947__auto__,keyval__27949__auto__);
});})(this__27945__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27946__auto__,pr_pair__27948__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__27947__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32977){
var self__ = this;
var G__32977__$1 = this;
return (new cljs.core.RecordIter((0),G__32977__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27929__auto__){
var self__ = this;
var this__27929__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27925__auto__){
var self__ = this;
var this__27925__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27935__auto__){
var self__ = this;
var this__27935__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27926__auto__){
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

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27927__auto__,other__27928__auto__){
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

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27940__auto__,k__27941__auto__){
var self__ = this;
var this__27940__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null,new cljs.core.Keyword(null,"rest","rest",-1241696419),null], null), null),k__27941__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27940__auto____$1),self__.__meta),k__27941__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27941__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27938__auto__,k__27939__auto__,G__32977){
var self__ = this;
var this__27938__auto____$1 = this;
var pred__32981 = cljs.core.keyword_identical_QMARK_;
var expr__32982 = k__27939__auto__;
if(cljs.core.truth_(pred__32981.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__32982))){
return (new cljs.pprint.arg_navigator(G__32977,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32981.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__32982))){
return (new cljs.pprint.arg_navigator(self__.seq,G__32977,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32981.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__32982))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__32977,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27939__auto__,G__32977),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27943__auto__){
var self__ = this;
var this__27943__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27930__auto__,G__32977){
var self__ = this;
var this__27930__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__32977,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27936__auto__,entry__27937__auto__){
var self__ = this;
var this__27936__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27937__auto__)){
return this__27936__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__27937__auto__,(0)),cljs.core._nth.call(null,entry__27937__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27936__auto____$1,entry__27937__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__27965__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/arg-navigator");
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__27965__auto__,writer__27966__auto__){
return cljs.core._write.call(null,writer__27966__auto__,"cljs.pprint/arg-navigator");
});

cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__32979){
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__32979),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__32979),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__32979),null,cljs.core.dissoc.call(null,G__32979,new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq.call(null,s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__32988 = cljs.pprint.next_arg.call(null,navigator);
var raw_format = cljs.core.nth.call(null,vec__32988,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__32988,(1),null);
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format.call(null,raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator))){
return cljs.pprint.relative_reposition.call(null,navigator,(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) - position));
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition.call(null,navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
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
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__27931__auto__,k__27932__auto__){
var self__ = this;
var this__27931__auto____$1 = this;
return this__27931__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__27932__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__27933__auto__,k32992,else__27934__auto__){
var self__ = this;
var this__27933__auto____$1 = this;
var G__32994 = k32992;
var G__32994__$1 = (((G__32994 instanceof cljs.core.Keyword))?G__32994.fqn:null);
switch (G__32994__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32992,else__27934__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__27945__auto__,writer__27946__auto__,opts__27947__auto__){
var self__ = this;
var this__27945__auto____$1 = this;
var pr_pair__27948__auto__ = ((function (this__27945__auto____$1){
return (function (keyval__27949__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__27946__auto__,cljs.core.pr_writer,""," ","",opts__27947__auto__,keyval__27949__auto__);
});})(this__27945__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__27946__auto__,pr_pair__27948__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__27947__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32991){
var self__ = this;
var G__32991__$1 = this;
return (new cljs.core.RecordIter((0),G__32991__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__27929__auto__){
var self__ = this;
var this__27929__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__27925__auto__){
var self__ = this;
var this__27925__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__27935__auto__){
var self__ = this;
var this__27935__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__27926__auto__){
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

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__27927__auto__,other__27928__auto__){
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

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__27940__auto__,k__27941__auto__){
var self__ = this;
var this__27940__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"func","func",-238706040),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"def","def",-1043430536),null], null), null),k__27941__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__27940__auto____$1),self__.__meta),k__27941__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__27941__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__27938__auto__,k__27939__auto__,G__32991){
var self__ = this;
var this__27938__auto____$1 = this;
var pred__32995 = cljs.core.keyword_identical_QMARK_;
var expr__32996 = k__27939__auto__;
if(cljs.core.truth_(pred__32995.call(null,new cljs.core.Keyword(null,"func","func",-238706040),expr__32996))){
return (new cljs.pprint.compiled_directive(G__32991,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32995.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),expr__32996))){
return (new cljs.pprint.compiled_directive(self__.func,G__32991,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32995.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__32996))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__32991,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32995.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__32996))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__32991,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__27939__auto__,G__32991),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__27943__auto__){
var self__ = this;
var this__27943__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__27930__auto__,G__32991){
var self__ = this;
var this__27930__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__32991,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__27936__auto__,entry__27937__auto__){
var self__ = this;
var this__27936__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__27937__auto__)){
return this__27936__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__27937__auto__,(0)),cljs.core._nth.call(null,entry__27937__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__27936__auto____$1,entry__27937__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__27965__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/compiled-directive");
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__27965__auto__,writer__27966__auto__){
return cljs.core._write.call(null,writer__27966__auto__,"cljs.pprint/compiled-directive");
});

cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__32993){
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__32993),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__32993),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__32993),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__32993),null,cljs.core.dissoc.call(null,G__32993,new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__32999,navigator){
var vec__33009 = p__32999;
var param = cljs.core.nth.call(null,vec__33009,(0),null);
var vec__33012 = cljs.core.nth.call(null,vec__33009,(1),null);
var raw_val = cljs.core.nth.call(null,vec__33012,(0),null);
var offset = cljs.core.nth.call(null,vec__33012,(1),null);
var vec__33015 = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg.call(null,navigator):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.call(null,vec__33015,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__33015,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__33021 = cljs.pprint.map_passing_context.call(null,cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.call(null,vec__33021,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__33021,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if(cljs.core._EQ_.call(null,cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__27304__auto__ = cljs.core.get.call(null,cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("r")].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__33027 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__33027,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__33027,(1),null);
var base_output = (function (){var or__27304__auto__ = cljs.pprint.format_simple_number.call(null,arg);
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return print_func.call(null,arg);
}
})();
var base_width = base_output.length;
var min_width = (base_width + new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot.call(null,((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params)) + (1)) * new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(width - base_width),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join(''));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join(''));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_.call(null,x)){
return true;
} else {
if(cljs.pprint.float_QMARK_.call(null,x)){
return cljs.core._EQ_.call(null,x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (p1__33030_SHARP_){
if((p1__33030_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem.call(null,p1__33030_SHARP_,base),cljs.core.quot.call(null,p1__33030_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (xlated_val){
return (function (p1__33031_SHARP_){
if((p1__33031_SHARP_ < (10))){
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"0") + p1__33031_SHARP_));
} else {
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"a") + (p1__33031_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders.call(null,base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str.call(null,base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.reverse.call(null,cljs.core.take.call(null,unit,x))),cljs.core.seq.call(null,cljs.core.drop.call(null,unit,x))], null);
}),cljs.core.reverse.call(null,lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__33036 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__33036,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__33036,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_.call(null,arg))){
var neg_33039 = (arg < (0));
var pos_arg_33040 = ((neg_33039)?(- arg):arg);
var raw_str_33041 = cljs.pprint.opt_base_str.call(null,base,pos_arg_33040);
var group_str_33042 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.call(null,((function (neg_33039,pos_arg_33040,raw_str_33041,vec__33036,arg,arg_navigator__$1){
return (function (p1__33032_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__33032_SHARP_);
});})(neg_33039,pos_arg_33040,raw_str_33041,vec__33036,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_.call(null,new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_33041));
var commas = cljs.core.repeat.call(null,cljs.core.count.call(null,groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.next.call(null,cljs.core.interleave.call(null,commas,groups)));
})():raw_str_33041);
var signed_str_33043 = ((neg_33039)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_33042)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_33042)].join(''):group_str_33042
));
var padded_str_33044 = (((signed_str_33043.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_33043.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_33043)].join(''):signed_str_33043);
cljs.pprint.print.call(null,padded_str_33044);
} else {
cljs.pprint.format_ascii.call(null,cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"colinc","colinc",-584873385),(1),new cljs.core.Keyword(null,"minpad","minpad",323570901),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" hundred")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count.call(null,parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first.call(null,parts);
var remainder = cljs.core.next.call(null,parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_.call(null,this$))) && (!(cljs.core.empty_QMARK_.call(null,acc))))?", ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_.call(null,this$))) && (((pos + offset) > (0))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__33045 = ((cljs.core.empty_QMARK_.call(null,this$))?acc:cljs.core.conj.call(null,acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__33046 = (pos - (1));
var G__33047 = cljs.core.first.call(null,remainder);
var G__33048 = cljs.core.next.call(null,remainder);
acc = G__33045;
pos = G__33046;
this$ = G__33047;
remainder = G__33048;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__33052 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__33052,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__33052,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zero");
} else {
var abs_arg_33055 = (((arg < (0)))?(- arg):arg);
var parts_33056 = cljs.pprint.remainders.call(null,(1000),abs_arg_33055);
if((cljs.core.count.call(null,parts_33056) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_33057 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,parts_33056);
var full_str_33058 = cljs.pprint.add_english_scales.call(null,parts_strs_33057,(0));
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_33058)].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" hundred")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.call(null,cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__33062 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__33062,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__33062,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zeroth");
} else {
var abs_arg_33065 = (((arg < (0)))?(- arg):arg);
var parts_33066 = cljs.pprint.remainders.call(null,(1000),abs_arg_33065);
if((cljs.core.count.call(null,parts_33066) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_33067 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,cljs.core.drop_last.call(null,parts_33066));
var head_str_33068 = cljs.pprint.add_english_scales.call(null,parts_strs_33067,(1));
var tail_str_33069 = cljs.pprint.format_simple_ordinal.call(null,cljs.core.last.call(null,parts_33066));
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_.call(null,head_str_33068))) && (!(cljs.core.empty_QMARK_.call(null,tail_str_33069))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_33068),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_33069)].join(''):((!(cljs.core.empty_QMARK_.call(null,head_str_33068)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_33068),cljs.core.str.cljs$core$IFn$_invoke$arity$1("th")].join(''):tail_str_33069
)))].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));

var low_two_digits_33070 = cljs.core.rem.call(null,arg,(100));
var not_teens_33071 = (((11) < low_two_digits_33070)) || (((19) > low_two_digits_33070));
var low_digit_33072 = cljs.core.rem.call(null,low_two_digits_33070,(10));
cljs.pprint.print.call(null,((((low_digit_33072 === (1))) && (not_teens_33071))?"st":((((low_digit_33072 === (2))) && (not_teens_33071))?"nd":((((low_digit_33072 === (3))) && (not_teens_33071))?"rd":"th"
))));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__33076 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__33076,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__33076,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_33079 = cljs.pprint.remainders.call(null,(10),arg);
var acc_33080 = cljs.core.PersistentVector.EMPTY;
var pos_33081 = (cljs.core.count.call(null,digits_33079) - (1));
var digits_33082__$1 = digits_33079;
while(true){
if(cljs.core.empty_QMARK_.call(null,digits_33082__$1)){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,acc_33080));
} else {
var digit_33083 = cljs.core.first.call(null,digits_33082__$1);
var G__33084 = ((cljs.core._EQ_.call(null,(0),digit_33083))?acc_33080:cljs.core.conj.call(null,acc_33080,cljs.core.nth.call(null,cljs.core.nth.call(null,table,pos_33081),(digit_33083 - (1)))));
var G__33085 = (pos_33081 - (1));
var G__33086 = cljs.core.next.call(null,digits_33082__$1);
acc_33080 = G__33084;
pos_33081 = G__33085;
digits_33082__$1 = G__33086;
continue;
}
break;
}
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__33090 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__33090,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__33090,(1),null);
var as_int = cljs.pprint.char_code.call(null,c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.call(null,cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.call(null,"Meta-");
} else {
}

cljs.pprint.print.call(null,(cljs.core.truth_(special)?special:(((base_char < (32)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Control-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(base_char + (64))))].join(''):((cljs.core._EQ_.call(null,base_char,(127)))?"Control-?":cljs.core.char$.call(null,base_char)
))));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__33099 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__33099,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__33099,(1),null);
var pred__33102_33105 = cljs.core._EQ_;
var expr__33103_33106 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(pred__33102_33105.call(null,"o",expr__33103_33106))){
cljs.pprint.cl_format.call(null,true,"\\o~3, '0o",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__33102_33105.call(null,"u",expr__33103_33106))){
cljs.pprint.cl_format.call(null,true,"\\u~4, '0x",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__33102_33105.call(null,null,expr__33103_33106))){
cljs.pprint.print_char.call(null,c);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__33103_33106)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__33110 = cljs.pprint.next_arg.call(null,navigator);
var char$ = cljs.core.nth.call(null,vec__33110,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__33110,(1),null);
cljs.pprint.print.call(null,char$);

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first.call(null,context);
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),token)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),token));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second.call(null,cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_.call(null,context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__33119 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__33119,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__33119,(1),null);
var vec__33122 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__33122,(0),null);
var offsets = cljs.core.nth.call(null,vec__33122,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count.call(null,s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(dotloc + (1))))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,(0),exploc),cljs.core.subs.call(null,s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(2),exploc))].join(''),cljs.core.subs.call(null,s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__33128 = cljs.pprint.float_parts_base.call(null,f);
var m = cljs.core.nth.call(null,vec__33128,(0),null);
var e = cljs.core.nth.call(null,vec__33128,(1),null);
var m1 = cljs.pprint.rtrim.call(null,m,"0");
var m2 = cljs.pprint.ltrim.call(null,m1,"0");
var delta = (cljs.core.count.call(null,m1) - cljs.core.count.call(null,m2));
var e__$1 = ((((cljs.core.count.call(null,e) > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,e,(0)),"+")))?cljs.core.subs.call(null,e,(1)):e);
if(cljs.core.empty_QMARK_.call(null,m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count.call(null,s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.call(null,cljs.core.str,"1",cljs.core.repeat.call(null,(len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.call(null,"9",s.charAt(i))){
var G__33131 = (i - (1));
i = G__33131;
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.subs.call(null,s,(0),i),cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,s.charAt(i)) + (1))),cljs.core.repeat.call(null,(len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__27304__auto__ = d;
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count.call(null,m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__27640__auto__ = (2);
var y__27641__auto__ = w;
return ((x__27640__auto__ > y__27641__auto__) ? x__27640__auto__ : y__27641__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__27640__auto__ = (e + (1));
var y__27641__auto__ = (w__$1 - (1));
return ((x__27640__auto__ > y__27641__auto__) ? x__27640__auto__ : y__27641__auto__);
})():(w__$1 + e)
));
var vec__33135 = ((cljs.core._EQ_.call(null,round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("0"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.call(null,vec__33135,(0),null);
var e1 = cljs.core.nth.call(null,vec__33135,(1),null);
var round_pos__$1 = cljs.core.nth.call(null,vec__33135,(2),null);
var len__$1 = cljs.core.nth.call(null,vec__33135,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.call(null,m1,round_pos__$1);
var result = cljs.core.subs.call(null,m1,(0),round_pos__$1);
if((cljs.pprint.char_code.call(null,round_char) >= cljs.pprint.char_code.call(null,"5"))){
var round_up_result = cljs.pprint.inc_s.call(null,result);
var expanded = (cljs.core.count.call(null,round_up_result) > cljs.core.count.call(null,result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.call(null,round_up_result,(0),(cljs.core.count.call(null,round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__33141 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.call(null,vec__33141,(0),null);
var e1 = cljs.core.nth.call(null,vec__33141,(1),null);
var len = cljs.core.count.call(null,m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,(0),loc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal.call(null,cljs.pprint.expand_fixed.call(null,m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,(0),k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var vec__33156 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__33156,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__33156,(1),null);
var vec__33159 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.call(null,vec__33159,(0),null);
var abs = cljs.core.nth.call(null,vec__33159,(1),null);
var abs__$1 = cljs.pprint.convert_ratio.call(null,abs);
var vec__33162 = cljs.pprint.float_parts.call(null,abs__$1);
var mantissa = cljs.core.nth.call(null,vec__33162,(0),null);
var exp = cljs.core.nth.call(null,vec__33162,(1),null);
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__27304__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not.call(null,d)) && (((cljs.core.count.call(null,mantissa) - (1)) <= scaled_exp));
var vec__33165 = cljs.pprint.round_str.call(null,mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.call(null,vec__33165,(0),null);
var scaled_exp__$1 = cljs.core.nth.call(null,vec__33165,(1),null);
var expanded = cljs.core.nth.call(null,vec__33165,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__27292__auto__ = w;
if(cljs.core.truth_(and__27292__auto__)){
var and__27292__auto____$1 = d;
if(cljs.core.truth_(and__27292__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.call(null,fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.call(null,fixed_repr.charAt((1)),".")) && ((cljs.core.count.call(null,fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__27292__auto____$1;
}
} else {
return and__27292__auto__;
}
})())?cljs.core.subs.call(null,fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.call(null,cljs.core.first.call(null,fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_33168 = cljs.core.count.call(null,fixed_repr__$1);
var signed_len_33169 = (cljs.core.truth_(add_sign)?(len_33168 + (1)):len_33168);
var prepend_zero_33170__$1 = (prepend_zero) && (!((signed_len_33169 >= w)));
var append_zero_33171__$1 = (append_zero) && (!((signed_len_33169 >= w)));
var full_len_33172 = (((prepend_zero_33170__$1) || (append_zero_33171__$1))?(signed_len_33169 + (1)):signed_len_33169);
if(cljs.core.truth_((function (){var and__27292__auto__ = (full_len_33172 > w);
if(and__27292__auto__){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__27292__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len_33172),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_33170__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_33171__$1)?"0":null))].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join(''));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__33189 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__33189,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__33189,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var G__33195_33205 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__33196_33206 = G__33195_33205;
var mantissa_33207 = cljs.core.nth.call(null,vec__33196_33206,(0),null);
var exp_33208 = cljs.core.nth.call(null,vec__33196_33206,(1),null);
var G__33195_33209__$1 = G__33195_33205;
while(true){
var vec__33199_33210 = G__33195_33209__$1;
var mantissa_33211__$1 = cljs.core.nth.call(null,vec__33199_33210,(0),null);
var exp_33212__$1 = cljs.core.nth.call(null,vec__33199_33210,(1),null);
var w_33213 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_33214 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_33215 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_33216 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_33217 = (function (){var or__27304__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return "E";
}
})();
var add_sign_33218 = (function (){var or__27304__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_33219 = (k_33216 <= (0));
var scaled_exp_33220 = (exp_33212__$1 - (k_33216 - (1)));
var scaled_exp_str_33221 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_33220))].join('');
var scaled_exp_str_33222__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_33217),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_33220 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_33215)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(e_33215 - cljs.core.count.call(null,scaled_exp_str_33221)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_33221)].join('');
var exp_width_33223 = cljs.core.count.call(null,scaled_exp_str_33222__$1);
var base_mantissa_width_33224 = cljs.core.count.call(null,mantissa_33211__$1);
var scaled_mantissa_33225 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(- k_33216),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_33211__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_33214)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((d_33214 - (base_mantissa_width_33224 - (1))) - (((k_33216 < (0)))?(- k_33216):(0))),"0")):null))].join('');
var w_mantissa_33226 = (cljs.core.truth_(w_33213)?(w_33213 - exp_width_33223):null);
var vec__33202_33227 = cljs.pprint.round_str.call(null,scaled_mantissa_33225,(0),((cljs.core._EQ_.call(null,k_33216,(0)))?(d_33214 - (1)):(((k_33216 > (0)))?d_33214:(((k_33216 < (0)))?(d_33214 - (1)):null))),(cljs.core.truth_(w_mantissa_33226)?(w_mantissa_33226 - (cljs.core.truth_(add_sign_33218)?(1):(0))):null));
var rounded_mantissa_33228 = cljs.core.nth.call(null,vec__33202_33227,(0),null);
var __33229 = cljs.core.nth.call(null,vec__33202_33227,(1),null);
var incr_exp_33230 = cljs.core.nth.call(null,vec__33202_33227,(2),null);
var full_mantissa_33231 = cljs.pprint.insert_scaled_decimal.call(null,rounded_mantissa_33228,k_33216);
var append_zero_33232 = (cljs.core._EQ_.call(null,k_33216,cljs.core.count.call(null,rounded_mantissa_33228))) && ((d_33214 == null));
if(cljs.core.not.call(null,incr_exp_33230)){
if(cljs.core.truth_(w_33213)){
var len_33233 = (cljs.core.count.call(null,full_mantissa_33231) + exp_width_33223);
var signed_len_33234 = (cljs.core.truth_(add_sign_33218)?(len_33233 + (1)):len_33233);
var prepend_zero_33235__$1 = (prepend_zero_33219) && (!(cljs.core._EQ_.call(null,signed_len_33234,w_33213)));
var full_len_33236 = ((prepend_zero_33235__$1)?(signed_len_33234 + (1)):signed_len_33234);
var append_zero_33237__$1 = (append_zero_33232) && ((full_len_33236 < w_33213));
if(cljs.core.truth_((function (){var and__27292__auto__ = (function (){var or__27304__auto__ = (full_len_33236 > w_33213);
if(or__27304__auto__){
return or__27304__auto__;
} else {
var and__27292__auto__ = e_33215;
if(cljs.core.truth_(and__27292__auto__)){
return ((exp_width_33223 - (2)) > e_33215);
} else {
return and__27292__auto__;
}
}
})();
if(cljs.core.truth_(and__27292__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__27292__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w_33213,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((w_33213 - full_len_33236) - ((append_zero_33237__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_33218)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_33235__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_33231),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_33237__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_33222__$1)].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_33218)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_33219)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_33231),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_33232)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_33222__$1)].join(''));
}
} else {
var G__33238 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_33228,(exp_33212__$1 + (1))], null);
G__33195_33209__$1 = G__33238;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__33245 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__33245,(0),null);
var _ = cljs.core.nth.call(null,vec__33245,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var vec__33248 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.call(null,vec__33248,(0),null);
var exp = cljs.core.nth.call(null,vec__33248,(1),null);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.call(null,arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__27640__auto__ = cljs.core.count.call(null,mantissa);
var y__27641__auto__ = (function (){var x__27647__auto__ = n;
var y__27648__auto__ = (7);
return ((x__27647__auto__ < y__27648__auto__) ? x__27647__auto__ : y__27648__auto__);
})();
return ((x__27640__auto__ > y__27641__auto__) ? x__27640__auto__ : y__27641__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",354169001),ww,new cljs.core.Keyword(null,"d","d",1972142424),dd,new cljs.core.Keyword(null,"k","k",-2146297393),(0),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,ee," ")));

return navigator__$1;
} else {
return cljs.pprint.exponential_float.call(null,params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__33260 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__33260,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__33260,(1),null);
var vec__33263 = cljs.pprint.float_parts.call(null,Math.abs(arg));
var mantissa = cljs.core.nth.call(null,vec__33263,(0),null);
var exp = cljs.core.nth.call(null,vec__33263,(1),null);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__27304__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return (arg < (0));
}
})();
var vec__33266 = cljs.pprint.round_str.call(null,mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.call(null,vec__33266,(0),null);
var scaled_exp = cljs.core.nth.call(null,vec__33266,(1),null);
var expanded = cljs.core.nth.call(null,vec__33266,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - fixed_repr.indexOf(".")),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr)].join('');
var full_len = (cljs.core.count.call(null,full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__27292__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__27292__auto__)){
return add_sign;
} else {
return and__27292__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__27292__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params));
if(and__27292__auto__){
return add_sign;
} else {
return and__27292__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr)].join(''));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(params);
var vec__33272 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg.call(null,arg_navigator));
var arg__$1 = cljs.core.nth.call(null,vec__33272,(0),null);
var navigator = cljs.core.nth.call(null,vec__33272,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count.call(null,clauses))))?cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.call(null,clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__33278 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__33278,(0),null);
var navigator = cljs.core.nth.call(null,vec__33278,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second.call(null,clauses):cljs.core.first.call(null,clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__33284 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__33284,(0),null);
var navigator = cljs.core.nth.call(null,vec__33284,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first.call(null,clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,arg_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__33293 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__33293,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__33293,(1),null);
var vec__33296 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__33296,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__33296,(1),null);
var args = cljs.pprint.init_navigator.call(null,arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__27304__auto__ = (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__27304__auto__){
return or__27304__auto__;
} else {
var and__27292__auto__ = max_count;
if(cljs.core.truth_(and__27292__auto__)){
return (count >= max_count);
} else {
return and__27292__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__33299 = (count + (1));
var G__33300 = iter_result;
var G__33301 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__33299;
args__$1 = G__33300;
last_pos = G__33301;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__33308 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__33308,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__33308,(1),null);
var vec__33311 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__33311,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__33311,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__27304__auto__ = (cljs.core.empty_QMARK_.call(null,arg_list__$1)) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__27304__auto__){
return or__27304__auto__;
} else {
var and__27292__auto__ = max_count;
if(cljs.core.truth_(and__27292__auto__)){
return (count >= max_count);
} else {
return and__27292__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,cljs.core.first.call(null,arg_list__$1)),cljs.pprint.init_navigator.call(null,cljs.core.next.call(null,arg_list__$1)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__33314 = (count + (1));
var G__33315 = cljs.core.next.call(null,arg_list__$1);
count = G__33314;
arg_list__$1 = G__33315;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__33319 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__33319,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__33319,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__27304__auto__ = (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__27304__auto__){
return or__27304__auto__;
} else {
var and__27292__auto__ = max_count;
if(cljs.core.truth_(and__27292__auto__)){
return (count >= max_count);
} else {
return and__27292__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return cljs.core.second.call(null,iter_result);
} else {
var G__33322 = (count + (1));
var G__33323 = iter_result;
var G__33324 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__33322;
navigator__$2 = G__33323;
last_pos = G__33324;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__33331 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__33331,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__33331,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__27304__auto__ = (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__27304__auto__){
return or__27304__auto__;
} else {
var and__27292__auto__ = max_count;
if(cljs.core.truth_(and__27292__auto__)){
return (count >= max_count);
} else {
return and__27292__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__33334 = cljs.pprint.next_arg_or_nil.call(null,navigator__$2);
var sublist = cljs.core.nth.call(null,vec__33334,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__33334,(1),null);
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,sublist),navigator__$3);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$3;
} else {
var G__33337 = (count + (1));
var G__33338 = navigator__$3;
count = G__33337;
navigator__$2 = G__33338;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block.call(null,params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses.call(null,params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_.call(null,clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first.call(null,clauses__$1);
var vec__33343 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_33346 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format.call(null,clause,navigator__$1,base_navigator),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_33346;
}})();
var iter_result = cljs.core.nth.call(null,vec__33343,(0),null);
var result_str = cljs.core.nth.call(null,vec__33343,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second.call(null,iter_result)], null);
} else {
var G__33347 = cljs.core.next.call(null,clauses__$1);
var G__33348 = cljs.core.conj.call(null,acc,result_str);
var G__33349 = iter_result;
clauses__$1 = G__33347;
acc = G__33348;
navigator__$1 = G__33349;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__33362 = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__4657__auto__)){
var else$ = temp__4657__auto__;
return cljs.pprint.render_clauses.call(null,else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__33365 = cljs.core.nth.call(null,vec__33362,(0),null);
var eol_str = cljs.core.nth.call(null,vec__33365,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__33362,(1),null);
var navigator__$1 = (function (){var or__27304__auto__ = new_navigator;
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return navigator;
}
})();
var vec__33368 = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__4657__auto__)){
var p = temp__4657__auto__;
return cljs.pprint.realize_parameter_list.call(null,p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.call(null,vec__33368,(0),null);
var new_navigator__$1 = cljs.core.nth.call(null,vec__33368,(1),null);
var navigator__$2 = (function (){var or__27304__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__27304__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__27304__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return cljs.pprint.get_max_column.call(null,cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var vec__33371 = cljs.pprint.render_clauses.call(null,clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.call(null,vec__33371,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__33371,(1),null);
var slots = (function (){var x__27640__auto__ = (1);
var y__27641__auto__ = (((cljs.core.count.call(null,strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__27640__auto__ > y__27641__auto__) ? x__27640__auto__ : y__27641__auto__);
})();
var chars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot.call(null,((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__27640__auto__ = minpad;
var y__27641__auto__ = cljs.core.quot.call(null,total_pad,slots);
return ((x__27640__auto__ > y__27641__auto__) ? x__27640__auto__ : y__27641__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,pad,new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__27292__auto__ = eol_str;
if(cljs.core.truth_(and__27292__auto__)){
return (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__27292__auto__;
}
})())){
cljs.pprint.print.call(null,eol_str);
} else {
}

var slots_33374__$1 = slots;
var extra_pad_33375__$1 = extra_pad;
var strs_33376__$1 = strs;
var pad_only_33377 = (function (){var or__27304__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return (cljs.core._EQ_.call(null,cljs.core.count.call(null,strs_33376__$1),(1))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq.call(null,strs_33376__$1)){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,pad_only_33377))?cljs.core.first.call(null,strs_33376__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__27304__auto__ = pad_only_33377;
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
var or__27304__auto____$1 = cljs.core.next.call(null,strs_33376__$1);
if(or__27304__auto____$1){
return or__27304__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_33375__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null))].join(''));

var G__33378 = (slots_33374__$1 - (1));
var G__33379 = (extra_pad_33375__$1 - (1));
var G__33380 = (cljs.core.truth_(pad_only_33377)?strs_33376__$1:cljs.core.next.call(null,strs_33376__$1));
var G__33381 = false;
slots_33374__$1 = G__33378;
extra_pad_33375__$1 = G__33379;
strs_33376__$1 = G__33380;
pad_only_33377 = G__33381;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint33388 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint33388 = (function (writer,meta33389){
this.writer = writer;
this.meta33389 = meta33389;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint33388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33390,meta33389__$1){
var self__ = this;
var _33390__$1 = this;
return (new cljs.pprint.t_cljs$pprint33388(self__.writer,meta33389__$1));
});

cljs.pprint.t_cljs$pprint33388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33390){
var self__ = this;
var _33390__$1 = this;
return self__.meta33389;
});

cljs.pprint.t_cljs$pprint33388.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint33388.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__33391 = cljs.core._EQ_;
var expr__33392 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__33391.call(null,String,expr__33392))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
} else {
if(cljs.core.truth_(pred__33391.call(null,Number,expr__33392))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__33392)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint33388.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta33389","meta33389",-878680316,null)], null);
});

cljs.pprint.t_cljs$pprint33388.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint33388.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint33388";

cljs.pprint.t_cljs$pprint33388.cljs$lang$ctorPrWriter = (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cljs.pprint/t_cljs$pprint33388");
});

cljs.pprint.__GT_t_cljs$pprint33388 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint33388(writer__$1,meta33389){
return (new cljs.pprint.t_cljs$pprint33388(writer__$1,meta33389));
});

}

return (new cljs.pprint.t_cljs$pprint33388(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint33400 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint33400 = (function (writer,meta33401){
this.writer = writer;
this.meta33401 = meta33401;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint33400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33402,meta33401__$1){
var self__ = this;
var _33402__$1 = this;
return (new cljs.pprint.t_cljs$pprint33400(self__.writer,meta33401__$1));
});

cljs.pprint.t_cljs$pprint33400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33402){
var self__ = this;
var _33402__$1 = this;
return self__.meta33401;
});

cljs.pprint.t_cljs$pprint33400.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint33400.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__33403 = cljs.core._EQ_;
var expr__33404 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__33403.call(null,String,expr__33404))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,s));
} else {
if(cljs.core.truth_(pred__33403.call(null,Number,expr__33404))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__33404)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint33400.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta33401","meta33401",-278554432,null)], null);
});

cljs.pprint.t_cljs$pprint33400.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint33400.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint33400";

cljs.pprint.t_cljs$pprint33400.cljs$lang$ctorPrWriter = (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cljs.pprint/t_cljs$pprint33400");
});

cljs.pprint.__GT_t_cljs$pprint33400 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint33400(writer__$1,meta33401){
return (new cljs.pprint.t_cljs$pprint33400(writer__$1,meta33401));
});

}

return (new cljs.pprint.t_cljs$pprint33400(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first.call(null,s);
var s__$1 = (cljs.core.truth_((function (){var and__27292__auto__ = first_QMARK_;
if(cljs.core.truth_(and__27292__auto__)){
var and__27292__auto____$1 = f;
if(cljs.core.truth_(and__27292__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__27292__auto____$1;
}
} else {
return and__27292__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(1)))].join(''):s);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_.call(null,s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__27292__auto__ = m;
if(cljs.core.truth_(and__27292__auto__)){
return (m.index + (1));
} else {
return and__27292__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s__$2,offset)))].join(''),cljs.core.subs.call(null,s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.call(null,true);
if(typeof cljs.pprint.t_cljs$pprint33412 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint33412 = (function (writer,last_was_whitespace_QMARK_,meta33413){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta33413 = meta33413;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint33412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_33414,meta33413__$1){
var self__ = this;
var _33414__$1 = this;
return (new cljs.pprint.t_cljs$pprint33412(self__.writer,self__.last_was_whitespace_QMARK_,meta33413__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint33412.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_33414){
var self__ = this;
var _33414__$1 = this;
return self__.meta33413;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint33412.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint33412.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__33415 = cljs.core._EQ_;
var expr__33416 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__33415.call(null,String,expr__33416))){
var s = x;
cljs.core._write.call(null,self__.writer,cljs.pprint.capitalize_string.call(null,s.toLowerCase(),cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1)))));
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__33415.call(null,Number,expr__33416))){
var c = cljs.core.char$.call(null,x);
var mod_c = (cljs.core.truth_(cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_))?clojure.string.upper_case.call(null,c):c);
cljs.core._write.call(null,self__.writer,mod_c);

return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__33416)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint33412.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta33413","meta33413",1537524758,null)], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint33412.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint33412.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint33412";

cljs.pprint.t_cljs$pprint33412.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cljs.pprint/t_cljs$pprint33412");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t_cljs$pprint33412 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint33412(writer__$1,last_was_whitespace_QMARK___$1,meta33413){
return (new cljs.pprint.t_cljs$pprint33412(writer__$1,last_was_whitespace_QMARK___$1,meta33413));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint33412(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.call(null,false);
if(typeof cljs.pprint.t_cljs$pprint33424 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint33424 = (function (writer,capped,meta33425){
this.writer = writer;
this.capped = capped;
this.meta33425 = meta33425;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint33424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_33426,meta33425__$1){
var self__ = this;
var _33426__$1 = this;
return (new cljs.pprint.t_cljs$pprint33424(self__.writer,self__.capped,meta33425__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint33424.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_33426){
var self__ = this;
var _33426__$1 = this;
return self__.meta33425;
});})(capped))
;

cljs.pprint.t_cljs$pprint33424.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint33424.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__33427 = cljs.core._EQ_;
var expr__33428 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__33427.call(null,String,expr__33428))){
var s = clojure.string.lower_case.call(null,x);
if(cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__27292__auto__ = m;
if(cljs.core.truth_(and__27292__auto__)){
return m.index;
} else {
return and__27292__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write.call(null,self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_.call(null,self__.capped,true);
} else {
return cljs.core._write.call(null,self__.writer,s);
}
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
}
} else {
if(cljs.core.truth_(pred__33427.call(null,Number,expr__33428))){
var c = cljs.core.char$.call(null,x);
if(cljs.core.truth_((function (){var and__27292__auto__ = cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped));
if(and__27292__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__27292__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,self__.capped,true);

return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,c));
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,c));
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__33428)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint33424.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta33425","meta33425",2144064437,null)], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint33424.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint33424.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint33424";

cljs.pprint.t_cljs$pprint33424.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cljs.pprint/t_cljs$pprint33424");
});})(capped))
;

cljs.pprint.__GT_t_cljs$pprint33424 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint33424(writer__$1,capped__$1,meta33425){
return (new cljs.pprint.t_cljs$pprint33424(writer__$1,capped__$1,meta33425));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint33424(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_33431 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = make_writer.call(null,cljs.core._STAR_out_STAR_);

try{return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_33431;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_.call(null,writer))){
return writer;
} else {
return cljs.pprint.pretty_writer.call(null,writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$)))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))))))){
return cljs.pprint.prn.call(null);
} else {
return null;
}
} else {
return cljs.pprint.prn.call(null);
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_33434 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_33435 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_33436 = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))));
var space_count_33437 = (((current_33436 < colnum_33434))?(colnum_33434 - current_33436):((cljs.core._EQ_.call(null,colinc_33435,(0)))?(0):(colinc_33435 - cljs.core.rem.call(null,(current_33436 - colnum_33434),colinc_33435))
));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_33437," ")));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_33438 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_33439 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_33440 = (colrel_33438 + cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))));
var offset_33441 = (((colinc_33439 > (0)))?cljs.core.rem.call(null,start_col_33440,colinc_33439):(0));
var space_count_33442 = (colrel_33438 + ((cljs.core._EQ_.call(null,(0),offset_33441))?(0):(colinc_33439 - offset_33441)));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_33442," ")));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count.call(null,clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.first.call(null,clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.call(null,clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__33448 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__33448,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__33448,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_33451_33453 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_33452_33454 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format.call(null,body,cljs.pprint.init_navigator.call(null,arg),new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_33452_33454;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_33451_33453;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"current","current",-1088038603):new cljs.core.Keyword(null,"block","block",664686210));
cljs.pprint.pprint_indent.call(null,relative_to,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"mandatory","mandatory",542802336):new cljs.core.Keyword(null,"fill","fill",883462889)):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"miser","miser",-556060186):new cljs.core.Keyword(null,"linear","linear",872268697)));
cljs.pprint.pprint_newline.call(null,kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"A",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__33455_SHARP_,p2__33456_SHARP_,p3__33457_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.print_str,p1__33455_SHARP_,p2__33456_SHARP_,p3__33457_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__33458_SHARP_,p2__33459_SHARP_,p3__33460_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.pr_str,p1__33458_SHARP_,p2__33459_SHARP_,p3__33460_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__33461_SHARP_,p2__33462_SHARP_,p3__33463_SHARP_){
return cljs.pprint.format_integer.call(null,(10),p1__33461_SHARP_,p2__33462_SHARP_,p3__33463_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__33464_SHARP_,p2__33465_SHARP_,p3__33466_SHARP_){
return cljs.pprint.format_integer.call(null,(2),p1__33464_SHARP_,p2__33465_SHARP_,p3__33466_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__33467_SHARP_,p2__33468_SHARP_,p3__33469_SHARP_){
return cljs.pprint.format_integer.call(null,(8),p1__33467_SHARP_,p2__33468_SHARP_,p3__33469_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__33470_SHARP_,p2__33471_SHARP_,p3__33472_SHARP_){
return cljs.pprint.format_integer.call(null,(16),p1__33470_SHARP_,p2__33471_SHARP_,p3__33472_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__33473_SHARP_,p2__33474_SHARP_,p3__33475_SHARP_){
return cljs.pprint.format_integer.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__33473_SHARP_),p1__33473_SHARP_,p2__33474_SHARP_,p3__33475_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__27292__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__27292__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__27292__auto__;
}
})())){
return (function (p1__33476_SHARP_,p2__33477_SHARP_,p3__33478_SHARP_){
return cljs.pprint.format_old_roman.call(null,p1__33476_SHARP_,p2__33477_SHARP_,p3__33478_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__33479_SHARP_,p2__33480_SHARP_,p3__33481_SHARP_){
return cljs.pprint.format_new_roman.call(null,p1__33479_SHARP_,p2__33480_SHARP_,p3__33481_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__33482_SHARP_,p2__33483_SHARP_,p3__33484_SHARP_){
return cljs.pprint.format_ordinal_english.call(null,p1__33482_SHARP_,p2__33483_SHARP_,p3__33484_SHARP_);
});
} else {
return (function (p1__33485_SHARP_,p2__33486_SHARP_,p3__33487_SHARP_){
return cljs.pprint.format_cardinal_english.call(null,p1__33485_SHARP_,p2__33486_SHARP_,p3__33487_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"P",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition.call(null,navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__33497 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg = cljs.core.nth.call(null,vec__33497,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__33497,(1),null);
cljs.pprint.print.call(null,((cljs.core._EQ_.call(null,arg,(1)))?cljs.core.first.call(null,strs):cljs.core.second.call(null,strs)));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"C",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"char-format","char-format",-1016499218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"F",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"E",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"G",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"$",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"%",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__28227__auto___33515 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_33516 = (0);
while(true){
if((i_33516 < n__28227__auto___33515)){
cljs.pprint.prn.call(null);

var G__33517 = (i_33516 + (1));
i_33516 = G__33517;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"&",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_33518 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_33518 > (0))){
cljs.pprint.fresh_line.call(null);
} else {
}

var n__28227__auto___33519 = (cnt_33518 - (1));
var i_33520 = (0);
while(true){
if((i_33520 < n__28227__auto___33519)){
cljs.pprint.prn.call(null);

var G__33521 = (i_33520 + (1));
i_33520 = G__33521;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"|",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__28227__auto___33522 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_33523 = (0);
while(true){
if((i_33523 < n__28227__auto___33522)){
cljs.pprint.print.call(null,"\f");

var G__33524 = (i_33523 + (1));
i_33523 = G__33524;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"~",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"~")));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"\n",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn.call(null);
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"T",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"colnum","colnum",2023796854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__33488_SHARP_,p2__33489_SHARP_,p3__33490_SHARP_){
return cljs.pprint.relative_tabulation.call(null,p1__33488_SHARP_,p2__33489_SHARP_,p3__33490_SHARP_);
});
} else {
return (function (p1__33491_SHARP_,p2__33492_SHARP_,p3__33493_SHARP_){
return cljs.pprint.absolute_tabulation.call(null,p1__33491_SHARP_,p2__33492_SHARP_,p3__33493_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"*",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition.call(null,navigator,n);
} else {
return cljs.pprint.relative_reposition.call(null,navigator,(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"?",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__33500 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__33500,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__33500,(1),null);
return cljs.pprint.execute_sub_format.call(null,subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__33503 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__33503,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__33503,(1),null);
var vec__33506 = cljs.pprint.next_arg.call(null,navigator__$1);
var subargs = cljs.core.nth.call(null,vec__33506,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__33506,(1),null);
var sub_navigator = cljs.pprint.init_navigator.call(null,subargs);
cljs.pprint.execute_sub_format.call(null,subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"(",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),null,new cljs.core.Keyword(null,"else","else",-1508377146),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__27292__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__27292__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__27292__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__33494_SHARP_,p2__33495_SHARP_,p3__33496_SHARP_){
return cljs.pprint.modify_case.call(null,mod_case_writer,p1__33494_SHARP_,p2__33495_SHARP_,p3__33496_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),")",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"[",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),"]",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),";",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"max-columns","max-columns",1742323262),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator","separator",-1628749125),true], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"]",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"{",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),"}",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),false], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var and__27292__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__27292__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__27292__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"}",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"<",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),">",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),">",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"^",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(3),[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007):new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333));
if(cljs.core.truth_((function (){var and__27292__auto__ = arg1;
if(cljs.core.truth_(and__27292__auto__)){
var and__27292__auto____$1 = arg2;
if(cljs.core.truth_(and__27292__auto____$1)){
return arg3;
} else {
return and__27292__auto____$1;
}
} else {
return and__27292__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__27292__auto__ = arg1;
if(cljs.core.truth_(and__27292__auto__)){
return arg2;
} else {
return and__27292__auto__;
}
})())){
if(cljs.core._EQ_.call(null,arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.call(null,arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"W",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var or__27304__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"length","length",588987862),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__33509 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__33509,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__33509,(1),null);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__33512 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__33512,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__33512,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out.call(null,arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"_",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"I",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335),null,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196),null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__33525){
var vec__33529 = p__33525;
var s = cljs.core.nth.call(null,vec__33529,(0),null);
var offset = cljs.core.nth.call(null,vec__33529,(1),null);
var saw_comma = cljs.core.nth.call(null,vec__33529,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first.call(null,param);
var remainder = cljs.core.subs.call(null,s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.call(null,",",cljs.core.nth.call(null,remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error.call(null,"Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume.call(null,cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__33532){
var vec__33536 = p__33532;
var p = cljs.core.nth.call(null,vec__33536,(0),null);
var offset = cljs.core.nth.call(null,vec__33536,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,p.length,(0)))?null:(((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.call(null,p,(0)))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196):(((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core._EQ_.call(null,"#",cljs.core.nth.call(null,p,(0)))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335):(((cljs.core._EQ_.call(null,p.length,(2))) && (cljs.core._EQ_.call(null,"'",cljs.core.nth.call(null,p,(0)))))?cljs.core.nth.call(null,p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",-965200945),"@",new cljs.core.Keyword(null,"at","at",1476951349)], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume.call(null,(function (p__33543){
var vec__33544 = p__33543;
var s__$1 = cljs.core.nth.call(null,vec__33544,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__33544,(1),null);
var flags = cljs.core.nth.call(null,vec__33544,(2),null);
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.call(null,cljs.pprint.flag_defs,cljs.core.first.call(null,s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_.call(null,flags,flag)){
return cljs.pprint.format_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Flag \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,s__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" appears more than once in a directive")].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.call(null,flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__27292__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__27292__auto__){
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__27292__auto__;
}
})())){
cljs.pprint.format_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"@\" is an illegal flag for format directive \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__27292__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__27292__auto__){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__27292__auto__;
}
})())){
cljs.pprint.format_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\":\" is an illegal flag for format directive \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__27292__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"both","both",-393648840).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__27292__auto__){
var and__27292__auto____$1 = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__27292__auto____$1)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__27292__auto____$1;
}
} else {
return and__27292__auto__;
}
})())){
return cljs.pprint.format_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot combine \"@\" and \":\" flags for format directive \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''),(function (){var x__27647__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__27648__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__27647__auto__ < y__27648__auto__) ? x__27647__auto__ : y__27648__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags.call(null,def,flags);

if((cljs.core.count.call(null,params) > cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error.call(null,cljs.pprint.cl_format.call(null,null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def),cljs.core.count.call(null,params),cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def))),cljs.core.second.call(null,cljs.core.first.call(null,params)));
} else {
}

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__33547_SHARP_,p2__33548_SHARP_){
var val = cljs.core.first.call(null,p1__33547_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_.call(null,cljs.pprint.special_params,val)) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,cljs.core.second.call(null,p2__33548_SHARP_)),cljs.core.type.call(null,val))))){
return cljs.pprint.format_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.first.call(null,p2__33548_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" has bad type in directive \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,val))].join(''),cljs.core.second.call(null,p1__33547_SHARP_));
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,(function (){var iter__28092__auto__ = (function cljs$pprint$map_params_$_iter__33580(s__33581){
return (new cljs.core.LazySeq(null,(function (){
var s__33581__$1 = s__33581;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33581__$1);
if(temp__4657__auto__){
var s__33581__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33581__$2)){
var c__28090__auto__ = cljs.core.chunk_first.call(null,s__33581__$2);
var size__28091__auto__ = cljs.core.count.call(null,c__28090__auto__);
var b__33583 = cljs.core.chunk_buffer.call(null,size__28091__auto__);
if((function (){var i__33582 = (0);
while(true){
if((i__33582 < size__28091__auto__)){
var vec__33596 = cljs.core._nth.call(null,c__28090__auto__,i__33582);
var name = cljs.core.nth.call(null,vec__33596,(0),null);
var vec__33599 = cljs.core.nth.call(null,vec__33596,(1),null);
var default$ = cljs.core.nth.call(null,vec__33599,(0),null);
cljs.core.chunk_append.call(null,b__33583,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__33608 = (i__33582 + (1));
i__33582 = G__33608;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33583),cljs$pprint$map_params_$_iter__33580.call(null,cljs.core.chunk_rest.call(null,s__33581__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33583),null);
}
} else {
var vec__33602 = cljs.core.first.call(null,s__33581__$2);
var name = cljs.core.nth.call(null,vec__33602,(0),null);
var vec__33605 = cljs.core.nth.call(null,vec__33602,(1),null);
var default$ = cljs.core.nth.call(null,vec__33605,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__33580.call(null,cljs.core.rest.call(null,s__33581__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28092__auto__.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.call(null,(function (p1__33549_SHARP_,p2__33550_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__33549_SHARP_,p2__33550_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__33551_SHARP_){
return cljs.core.first.call(null,cljs.core.nth.call(null,p1__33551_SHARP_,(1)));
}),cljs.core.zipmap.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags);
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__33621 = cljs.pprint.extract_params.call(null,s,offset);
var raw_params = cljs.core.nth.call(null,vec__33621,(0),null);
var vec__33624 = cljs.core.nth.call(null,vec__33621,(1),null);
var rest = cljs.core.nth.call(null,vec__33624,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__33624,(1),null);
var vec__33627 = cljs.pprint.extract_flags.call(null,rest,offset__$1);
var _ = cljs.core.nth.call(null,vec__33627,(0),null);
var vec__33630 = cljs.core.nth.call(null,vec__33627,(1),null);
var rest__$1 = cljs.core.nth.call(null,vec__33630,(0),null);
var offset__$2 = cljs.core.nth.call(null,vec__33630,(1),null);
var flags = cljs.core.nth.call(null,vec__33630,(2),null);
var directive = cljs.core.first.call(null,rest__$1);
var def = cljs.core.get.call(null,cljs.pprint.directive_table,clojure.string.upper_case.call(null,directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params.call(null,def,cljs.core.map.call(null,cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not.call(null,directive)){
cljs.pprint.format_error.call(null,"Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not.call(null,def)){
cljs.pprint.format_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Directive \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" is undefined")].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656).cljs$core$IFn$_invoke$arity$1(def).call(null,params,offset__$2),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.call(null,rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.call(null,"\n",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count.call(null,remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.call(null,remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.call(null,s);

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__27292__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__27292__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__27292__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__33636 = cljs.pprint.collect_clauses.call(null,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.call(null,vec__33636,(0),null);
var remainder__$1 = cljs.core.nth.call(null,vec__33636,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map.call(null,subex,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$))),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume.call(null,(function (remainder__$1){
if(cljs.core.empty_QMARK_.call(null,remainder__$1)){
return cljs.pprint.format_error.call(null,"No closing bracket found.",offset);
} else {
var this$ = cljs.core.first.call(null,remainder__$1);
var remainder__$2 = cljs.core.next.call(null,remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket.call(null,this$))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket_info),new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second.call(null,cljs.pprint.consume.call(null,(function (p__33649){
var vec__33650 = p__33649;
var clause_map = cljs.core.nth.call(null,vec__33650,(0),null);
var saw_else = cljs.core.nth.call(null,vec__33650,(1),null);
var remainder__$1 = cljs.core.nth.call(null,vec__33650,(2),null);
var vec__33653 = cljs.pprint.process_clause.call(null,bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.call(null,vec__33653,(0),null);
var vec__33656 = cljs.core.nth.call(null,vec__33653,(1),null);
var type = cljs.core.nth.call(null,vec__33656,(0),null);
var right_params = cljs.core.nth.call(null,vec__33656,(1),null);
var else_params = cljs.core.nth.call(null,vec__33656,(2),null);
var remainder__$2 = cljs.core.nth.call(null,vec__33656,(3),null);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?new cljs.core.Keyword(null,"else","else",-1508377146):new cljs.core.Keyword(null,"clauses","clauses",1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"right-params","right-params",-1790676237),right_params])),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"else","else",-1508377146))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error.call(null,"Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error.call(null,"The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"else-params","else-params",-832171646),else_params], null)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"separator","separator",-1628749125))){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error.call(null,"A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (remainder){
var this$ = cljs.core.first.call(null,remainder);
var remainder__$1 = cljs.core.next.call(null,remainder);
var bracket = new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_33664 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (_STAR_format_str_STAR_33664){
return (function (p__33665){
var vec__33666 = p__33665;
var s = cljs.core.nth.call(null,vec__33666,(0),null);
var offset = cljs.core.nth.call(null,vec__33666,(1),null);
if(cljs.core.empty_QMARK_.call(null,s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive.call(null,cljs.core.subs.call(null,s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,cljs.core.subs.call(null,s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_33664))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_33664;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_.call(null,format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__27304__auto__ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1))));
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
var or__27304__auto____$1 = cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
if(cljs.core.truth_(or__27304__auto____$1)){
return or__27304__auto____$1;
} else {
return cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
}
}
})())){
return true;
} else {
var G__33669 = cljs.core.next.call(null,format__$1);
format__$1 = G__33669;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var args33670 = [];
var len__28417__auto___33680 = arguments.length;
var i__28418__auto___33681 = (0);
while(true){
if((i__28418__auto___33681 < len__28417__auto___33680)){
args33670.push((arguments[i__28418__auto___33681]));

var G__33682 = (i__28418__auto___33681 + (1));
i__28418__auto___33681 = G__33682;
continue;
} else {
}
break;
}

var G__33672 = args33670.length;
switch (G__33672) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33670.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not.call(null,stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__27292__auto__ = cljs.pprint.needs_pretty.call(null,format);
if(cljs.core.truth_(and__27292__auto__)){
return cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,real_stream));
} else {
return and__27292__auto__;
}
})())?cljs.pprint.get_pretty_writer.call(null,real_stream):real_stream);
var _STAR_out_STAR_33673 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.call(null,format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush.call(null,wrapped_stream);
} else {
}
}
if(cljs.core.not.call(null,stream)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(stream === true){
return cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_33673;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_.call(null,context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__33674 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__33674,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__33674,(1),null);
var vec__33677 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__33677,(0),null);
var offsets = cljs.core.nth.call(null,vec__33677,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize.call(null,cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method.call(null,multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",1377916282,null),"'",new cljs.core.Symbol(null,"var","var",870848730,null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",1013085760,null),"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = cljs.pprint.reader_macros.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_((function (){var and__27292__auto__ = macro_char;
if(cljs.core.truth_(and__27292__auto__)){
return cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,alis));
} else {
return and__27292__auto__;
}
})())){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_33687_33690 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_33688_33691 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

var length_count33689_33692 = (0);
var alis_33693__$1 = cljs.core.seq.call(null,alis);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count33689_33692 < cljs.core._STAR_print_length_STAR_))){
if(alis_33693__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_33693__$1));

if(cljs.core.next.call(null,alis_33693__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__33694 = (length_count33689_33692 + (1));
var G__33695 = cljs.core.next.call(null,alis_33693__$1);
length_count33689_33692 = G__33694;
alis_33693__$1 = G__33695;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_33688_33691;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_33687_33690;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
return cljs.pprint.pprint_simple_list.call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_33699_33702 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_33700_33703 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count33701_33704 = (0);
var aseq_33705 = cljs.core.seq.call(null,avec);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count33701_33704 < cljs.core._STAR_print_length_STAR_))){
if(aseq_33705){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,aseq_33705));

if(cljs.core.next.call(null,aseq_33705)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__33706 = (length_count33701_33704 + (1));
var G__33707 = cljs.core.next.call(null,aseq_33705);
length_count33701_33704 = G__33706;
aseq_33705 = G__33707;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_33700_33703;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_33699_33702;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__32539__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (format_in__32539__auto__,cf__32540__auto__){
return (function() { 
var G__33708__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33708 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33709__i = 0, G__33709__a = new Array(arguments.length -  0);
while (G__33709__i < G__33709__a.length) {G__33709__a[G__33709__i] = arguments[G__33709__i + 0]; ++G__33709__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33709__a,0,null);
} 
return G__33708__delegate.call(this,args__32541__auto__);};
G__33708.cljs$lang$maxFixedArity = 0;
G__33708.cljs$lang$applyTo = (function (arglist__33710){
var args__32541__auto__ = cljs.core.seq(arglist__33710);
return G__33708__delegate(args__32541__auto__);
});
G__33708.cljs$core$IFn$_invoke$arity$variadic = G__33708__delegate;
return G__33708;
})()
;
;})(format_in__32539__auto__,cf__32540__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__33719 = ((!(cljs.core.record_QMARK_.call(null,amap)))?new cljs.core.Var(function(){return cljs.core.lift_ns;},new cljs.core.Symbol("cljs.core","lift-ns","cljs.core/lift-ns",463499081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"lift-ns","lift-ns",602311926,null),"cljs/core.cljs",(15),(1),(9612),(9612),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)])).call(null,amap):null);
var ns = cljs.core.nth.call(null,vec__33719,(0),null);
var lift_map = cljs.core.nth.call(null,vec__33719,(1),null);
var amap__$1 = (function (){var or__27304__auto__ = lift_map;
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("{")].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_33722_33727 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_33723_33728 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count33724_33729 = (0);
var aseq_33730 = cljs.core.seq.call(null,amap__$1);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count33724_33729 < cljs.core._STAR_print_length_STAR_))){
if(aseq_33730){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_33725_33731 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_33726_33732 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out.call(null,cljs.core.ffirst.call(null,aseq_33730));

cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out.call(null,cljs.core.fnext.call(null,cljs.core.first.call(null,aseq_33730)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_33726_33732;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_33725_33731;
}}


if(cljs.core.next.call(null,aseq_33730)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__33733 = (length_count33724_33729 + (1));
var G__33734 = cljs.core.next.call(null,aseq_33730);
length_count33724_33729 = G__33733;
aseq_33730 = G__33734;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_33723_33728;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_33722_33727;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,obj));
});
cljs.pprint.pprint_set = (function (){var format_in__32539__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (format_in__32539__auto__,cf__32540__auto__){
return (function() { 
var G__33735__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33735 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33736__i = 0, G__33736__a = new Array(arguments.length -  0);
while (G__33736__i < G__33736__a.length) {G__33736__a[G__33736__i] = arguments[G__33736__i + 0]; ++G__33736__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33736__a,0,null);
} 
return G__33735__delegate.call(this,args__32541__auto__);};
G__33735.cljs$lang$maxFixedArity = 0;
G__33735.cljs$lang$applyTo = (function (arglist__33737){
var args__32541__auto__ = cljs.core.seq(arglist__33737);
return G__33735__delegate(args__32541__auto__);
});
G__33735.cljs$core$IFn$_invoke$arity$variadic = G__33735__delegate;
return G__33735;
})()
;
;})(format_in__32539__auto__,cf__32540__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__27304__auto__ = (function (){var temp__4657__auto__ = cljs.core.re_find.call(null,/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__4657__auto__)){
var match = temp__4657__auto__;
return cljs.pprint.type_map.call(null,match);
} else {
return null;
}
})();
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#<"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type.call(null,cljs.core.type.call(null,o).name)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("@"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_33742_33746 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_33743_33747 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(- (cljs.core.count.call(null,prefix) - (2))));

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint.write_out.call(null,(((function (){var and__27292__auto__ = ((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$)))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o));
if(and__27292__auto__){
return !(cljs.core._realized_QMARK_.call(null,o));
} else {
return and__27292__auto__;
}
})())?new cljs.core.Keyword(null,"not-delivered","not-delivered",1599158697):cljs.core.deref.call(null,o)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_33743_33747;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_33742_33746;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__32539__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (format_in__32539__auto__,cf__32540__auto__){
return (function() { 
var G__33748__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33748 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33749__i = 0, G__33749__a = new Array(arguments.length -  0);
while (G__33749__i < G__33749__a.length) {G__33749__a[G__33749__i] = arguments[G__33749__i + 0]; ++G__33749__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33749__a,0,null);
} 
return G__33748__delegate.call(this,args__32541__auto__);};
G__33748.cljs$lang$maxFixedArity = 0;
G__33748.cljs$lang$applyTo = (function (arglist__33750){
var args__32541__auto__ = cljs.core.seq(arglist__33750);
return G__33748__delegate(args__32541__auto__);
});
G__33748.cljs$core$IFn$_invoke$arity$variadic = G__33748__delegate;
return G__33748;
})()
;
;})(format_in__32539__auto__,cf__32540__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return new cljs.core.Keyword(null,"queue","queue",1455835879);
} else {
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj))){
return new cljs.core.Keyword(null,"deref","deref",-145586795);
} else {
if((obj instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if(cljs.core.seq_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.map_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.vector_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.set_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((obj == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__28237__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__28238__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__28239__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__28240__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__28241__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__28241__auto__,method_table__28237__auto__,prefer_table__28238__auto__,method_cache__28239__auto__,cached_hierarchy__28240__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_list);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,null));
}));
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_.call(null,form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_.call(null,reference)){
var vec__33769 = cljs.pprint.brackets.call(null,reference);
var start = cljs.core.nth.call(null,vec__33769,(0),null);
var end = cljs.core.nth.call(null,vec__33769,(1),null);
var vec__33772 = reference;
var seq__33773 = cljs.core.seq.call(null,vec__33772);
var first__33774 = cljs.core.first.call(null,seq__33773);
var seq__33773__$1 = cljs.core.next.call(null,seq__33773);
var keyw = first__33774;
var args = seq__33773__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_33775_33785 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_33776_33786 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__32539__auto__ = "~w~:i";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (format_in__32539__auto__,cf__32540__auto__,_STAR_current_level_STAR_33775_33785,_STAR_current_length_STAR_33776_33786,vec__33769,start,end,vec__33772,seq__33773,first__33774,seq__33773__$1,keyw,args){
return (function() { 
var G__33787__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33787 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33788__i = 0, G__33788__a = new Array(arguments.length -  0);
while (G__33788__i < G__33788__a.length) {G__33788__a[G__33788__i] = arguments[G__33788__i + 0]; ++G__33788__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33788__a,0,null);
} 
return G__33787__delegate.call(this,args__32541__auto__);};
G__33787.cljs$lang$maxFixedArity = 0;
G__33787.cljs$lang$applyTo = (function (arglist__33789){
var args__32541__auto__ = cljs.core.seq(arglist__33789);
return G__33787__delegate(args__32541__auto__);
});
G__33787.cljs$core$IFn$_invoke$arity$variadic = G__33787__delegate;
return G__33787;
})()
;
;})(format_in__32539__auto__,cf__32540__auto__,_STAR_current_level_STAR_33775_33785,_STAR_current_length_STAR_33776_33786,vec__33769,start,end,vec__33772,seq__33773,first__33774,seq__33773__$1,keyw,args))
})().call(null,keyw);

var args_33790__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_33790__$1)){
(function (){var format_in__32539__auto__ = " ";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (args_33790__$1,format_in__32539__auto__,cf__32540__auto__,_STAR_current_level_STAR_33775_33785,_STAR_current_length_STAR_33776_33786,vec__33769,start,end,vec__33772,seq__33773,first__33774,seq__33773__$1,keyw,args){
return (function() { 
var G__33791__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33791 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33792__i = 0, G__33792__a = new Array(arguments.length -  0);
while (G__33792__i < G__33792__a.length) {G__33792__a[G__33792__i] = arguments[G__33792__i + 0]; ++G__33792__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33792__a,0,null);
} 
return G__33791__delegate.call(this,args__32541__auto__);};
G__33791.cljs$lang$maxFixedArity = 0;
G__33791.cljs$lang$applyTo = (function (arglist__33793){
var args__32541__auto__ = cljs.core.seq(arglist__33793);
return G__33791__delegate(args__32541__auto__);
});
G__33791.cljs$core$IFn$_invoke$arity$variadic = G__33791__delegate;
return G__33791;
})()
;
;})(args_33790__$1,format_in__32539__auto__,cf__32540__auto__,_STAR_current_level_STAR_33775_33785,_STAR_current_length_STAR_33776_33786,vec__33769,start,end,vec__33772,seq__33773,first__33774,seq__33773__$1,keyw,args))
})().call(null);

var arg_33794 = cljs.core.first.call(null,args_33790__$1);
if(cljs.core.sequential_QMARK_.call(null,arg_33794)){
var vec__33777_33795 = cljs.pprint.brackets.call(null,arg_33794);
var start_33796__$1 = cljs.core.nth.call(null,vec__33777_33795,(0),null);
var end_33797__$1 = cljs.core.nth.call(null,vec__33777_33795,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_33780_33798 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_33781_33799 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start_33796__$1,null,end_33797__$1);

if((cljs.core._EQ_.call(null,cljs.core.count.call(null,arg_33794),(3))) && ((cljs.core.second.call(null,arg_33794) instanceof cljs.core.Keyword))){
var vec__33782_33800 = arg_33794;
var ns_33801 = cljs.core.nth.call(null,vec__33782_33800,(0),null);
var kw_33802 = cljs.core.nth.call(null,vec__33782_33800,(1),null);
var lis_33803 = cljs.core.nth.call(null,vec__33782_33800,(2),null);
(function (){var format_in__32539__auto__ = "~w ~w ";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (args_33790__$1,format_in__32539__auto__,cf__32540__auto__,vec__33782_33800,ns_33801,kw_33802,lis_33803,_STAR_current_level_STAR_33780_33798,_STAR_current_length_STAR_33781_33799,vec__33777_33795,start_33796__$1,end_33797__$1,arg_33794,_STAR_current_level_STAR_33775_33785,_STAR_current_length_STAR_33776_33786,vec__33769,start,end,vec__33772,seq__33773,first__33774,seq__33773__$1,keyw,args){
return (function() { 
var G__33804__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33804 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33805__i = 0, G__33805__a = new Array(arguments.length -  0);
while (G__33805__i < G__33805__a.length) {G__33805__a[G__33805__i] = arguments[G__33805__i + 0]; ++G__33805__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33805__a,0,null);
} 
return G__33804__delegate.call(this,args__32541__auto__);};
G__33804.cljs$lang$maxFixedArity = 0;
G__33804.cljs$lang$applyTo = (function (arglist__33806){
var args__32541__auto__ = cljs.core.seq(arglist__33806);
return G__33804__delegate(args__32541__auto__);
});
G__33804.cljs$core$IFn$_invoke$arity$variadic = G__33804__delegate;
return G__33804;
})()
;
;})(args_33790__$1,format_in__32539__auto__,cf__32540__auto__,vec__33782_33800,ns_33801,kw_33802,lis_33803,_STAR_current_level_STAR_33780_33798,_STAR_current_length_STAR_33781_33799,vec__33777_33795,start_33796__$1,end_33797__$1,arg_33794,_STAR_current_level_STAR_33775_33785,_STAR_current_length_STAR_33776_33786,vec__33769,start,end,vec__33772,seq__33773,first__33774,seq__33773__$1,keyw,args))
})().call(null,ns_33801,kw_33802);

if(cljs.core.sequential_QMARK_.call(null,lis_33803)){
(function (){var format_in__32539__auto__ = ((cljs.core.vector_QMARK_.call(null,lis_33803))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (args_33790__$1,format_in__32539__auto__,cf__32540__auto__,vec__33782_33800,ns_33801,kw_33802,lis_33803,_STAR_current_level_STAR_33780_33798,_STAR_current_length_STAR_33781_33799,vec__33777_33795,start_33796__$1,end_33797__$1,arg_33794,_STAR_current_level_STAR_33775_33785,_STAR_current_length_STAR_33776_33786,vec__33769,start,end,vec__33772,seq__33773,first__33774,seq__33773__$1,keyw,args){
return (function() { 
var G__33807__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33807 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33808__i = 0, G__33808__a = new Array(arguments.length -  0);
while (G__33808__i < G__33808__a.length) {G__33808__a[G__33808__i] = arguments[G__33808__i + 0]; ++G__33808__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33808__a,0,null);
} 
return G__33807__delegate.call(this,args__32541__auto__);};
G__33807.cljs$lang$maxFixedArity = 0;
G__33807.cljs$lang$applyTo = (function (arglist__33809){
var args__32541__auto__ = cljs.core.seq(arglist__33809);
return G__33807__delegate(args__32541__auto__);
});
G__33807.cljs$core$IFn$_invoke$arity$variadic = G__33807__delegate;
return G__33807;
})()
;
;})(args_33790__$1,format_in__32539__auto__,cf__32540__auto__,vec__33782_33800,ns_33801,kw_33802,lis_33803,_STAR_current_level_STAR_33780_33798,_STAR_current_length_STAR_33781_33799,vec__33777_33795,start_33796__$1,end_33797__$1,arg_33794,_STAR_current_level_STAR_33775_33785,_STAR_current_length_STAR_33776_33786,vec__33769,start,end,vec__33772,seq__33773,first__33774,seq__33773__$1,keyw,args))
})().call(null,lis_33803);
} else {
cljs.pprint.write_out.call(null,lis_33803);
}
} else {
cljs.core.apply.call(null,(function (){var format_in__32539__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (args_33790__$1,format_in__32539__auto__,cf__32540__auto__,_STAR_current_level_STAR_33780_33798,_STAR_current_length_STAR_33781_33799,vec__33777_33795,start_33796__$1,end_33797__$1,arg_33794,_STAR_current_level_STAR_33775_33785,_STAR_current_length_STAR_33776_33786,vec__33769,start,end,vec__33772,seq__33773,first__33774,seq__33773__$1,keyw,args){
return (function() { 
var G__33810__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33810 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33811__i = 0, G__33811__a = new Array(arguments.length -  0);
while (G__33811__i < G__33811__a.length) {G__33811__a[G__33811__i] = arguments[G__33811__i + 0]; ++G__33811__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33811__a,0,null);
} 
return G__33810__delegate.call(this,args__32541__auto__);};
G__33810.cljs$lang$maxFixedArity = 0;
G__33810.cljs$lang$applyTo = (function (arglist__33812){
var args__32541__auto__ = cljs.core.seq(arglist__33812);
return G__33810__delegate(args__32541__auto__);
});
G__33810.cljs$core$IFn$_invoke$arity$variadic = G__33810__delegate;
return G__33810;
})()
;
;})(args_33790__$1,format_in__32539__auto__,cf__32540__auto__,_STAR_current_level_STAR_33780_33798,_STAR_current_length_STAR_33781_33799,vec__33777_33795,start_33796__$1,end_33797__$1,arg_33794,_STAR_current_level_STAR_33775_33785,_STAR_current_length_STAR_33776_33786,vec__33769,start,end,vec__33772,seq__33773,first__33774,seq__33773__$1,keyw,args))
})(),arg_33794);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_33781_33799;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_33780_33798;
}}


if(cljs.core.next.call(null,args_33790__$1)){
(function (){var format_in__32539__auto__ = "~_";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (args_33790__$1,format_in__32539__auto__,cf__32540__auto__,vec__33777_33795,start_33796__$1,end_33797__$1,arg_33794,_STAR_current_level_STAR_33775_33785,_STAR_current_length_STAR_33776_33786,vec__33769,start,end,vec__33772,seq__33773,first__33774,seq__33773__$1,keyw,args){
return (function() { 
var G__33813__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33813 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33814__i = 0, G__33814__a = new Array(arguments.length -  0);
while (G__33814__i < G__33814__a.length) {G__33814__a[G__33814__i] = arguments[G__33814__i + 0]; ++G__33814__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33814__a,0,null);
} 
return G__33813__delegate.call(this,args__32541__auto__);};
G__33813.cljs$lang$maxFixedArity = 0;
G__33813.cljs$lang$applyTo = (function (arglist__33815){
var args__32541__auto__ = cljs.core.seq(arglist__33815);
return G__33813__delegate(args__32541__auto__);
});
G__33813.cljs$core$IFn$_invoke$arity$variadic = G__33813__delegate;
return G__33813;
})()
;
;})(args_33790__$1,format_in__32539__auto__,cf__32540__auto__,vec__33777_33795,start_33796__$1,end_33797__$1,arg_33794,_STAR_current_level_STAR_33775_33785,_STAR_current_length_STAR_33776_33786,vec__33769,start,end,vec__33772,seq__33773,first__33774,seq__33773__$1,keyw,args))
})().call(null);
} else {
}
} else {
cljs.pprint.write_out.call(null,arg_33794);

if(cljs.core.next.call(null,args_33790__$1)){
(function (){var format_in__32539__auto__ = "~:_";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (args_33790__$1,format_in__32539__auto__,cf__32540__auto__,arg_33794,_STAR_current_level_STAR_33775_33785,_STAR_current_length_STAR_33776_33786,vec__33769,start,end,vec__33772,seq__33773,first__33774,seq__33773__$1,keyw,args){
return (function() { 
var G__33816__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33816 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33817__i = 0, G__33817__a = new Array(arguments.length -  0);
while (G__33817__i < G__33817__a.length) {G__33817__a[G__33817__i] = arguments[G__33817__i + 0]; ++G__33817__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33817__a,0,null);
} 
return G__33816__delegate.call(this,args__32541__auto__);};
G__33816.cljs$lang$maxFixedArity = 0;
G__33816.cljs$lang$applyTo = (function (arglist__33818){
var args__32541__auto__ = cljs.core.seq(arglist__33818);
return G__33816__delegate(args__32541__auto__);
});
G__33816.cljs$core$IFn$_invoke$arity$variadic = G__33816__delegate;
return G__33816;
})()
;
;})(args_33790__$1,format_in__32539__auto__,cf__32540__auto__,arg_33794,_STAR_current_level_STAR_33775_33785,_STAR_current_length_STAR_33776_33786,vec__33769,start,end,vec__33772,seq__33773,first__33774,seq__33773__$1,keyw,args))
})().call(null);
} else {
}
}

var G__33819 = cljs.core.next.call(null,args_33790__$1);
args_33790__$1 = G__33819;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_33776_33786;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_33775_33785;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next.call(null,alis)){
var vec__33831 = alis;
var seq__33832 = cljs.core.seq.call(null,vec__33831);
var first__33833 = cljs.core.first.call(null,seq__33832);
var seq__33832__$1 = cljs.core.next.call(null,seq__33832);
var ns_sym = first__33833;
var first__33833__$1 = cljs.core.first.call(null,seq__33832__$1);
var seq__33832__$2 = cljs.core.next.call(null,seq__33832__$1);
var ns_name = first__33833__$1;
var stuff = seq__33832__$2;
var vec__33834 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__33834,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__33834,(1),null);
var vec__33837 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__33837,(0),null);
var references = cljs.core.nth.call(null,vec__33837,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_33840_33842 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_33841_33843 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__32539__auto__ = "~w ~1I~@_~w";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (format_in__32539__auto__,cf__32540__auto__,_STAR_current_level_STAR_33840_33842,_STAR_current_length_STAR_33841_33843,vec__33831,seq__33832,first__33833,seq__33832__$1,ns_sym,first__33833__$1,seq__33832__$2,ns_name,stuff,vec__33834,doc_str,stuff__$1,vec__33837,attr_map,references){
return (function() { 
var G__33844__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33844 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33845__i = 0, G__33845__a = new Array(arguments.length -  0);
while (G__33845__i < G__33845__a.length) {G__33845__a[G__33845__i] = arguments[G__33845__i + 0]; ++G__33845__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33845__a,0,null);
} 
return G__33844__delegate.call(this,args__32541__auto__);};
G__33844.cljs$lang$maxFixedArity = 0;
G__33844.cljs$lang$applyTo = (function (arglist__33846){
var args__32541__auto__ = cljs.core.seq(arglist__33846);
return G__33844__delegate(args__32541__auto__);
});
G__33844.cljs$core$IFn$_invoke$arity$variadic = G__33844__delegate;
return G__33844;
})()
;
;})(format_in__32539__auto__,cf__32540__auto__,_STAR_current_level_STAR_33840_33842,_STAR_current_length_STAR_33841_33843,vec__33831,seq__33832,first__33833,seq__33832__$1,ns_sym,first__33833__$1,seq__33832__$2,ns_name,stuff,vec__33834,doc_str,stuff__$1,vec__33837,attr_map,references))
})().call(null,ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__27304__auto__ = doc_str;
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
var or__27304__auto____$1 = attr_map;
if(cljs.core.truth_(or__27304__auto____$1)){
return or__27304__auto____$1;
} else {
return cljs.core.seq.call(null,references);
}
}
})())){
(function (){var format_in__32539__auto__ = "~@:_";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (format_in__32539__auto__,cf__32540__auto__,_STAR_current_level_STAR_33840_33842,_STAR_current_length_STAR_33841_33843,vec__33831,seq__33832,first__33833,seq__33832__$1,ns_sym,first__33833__$1,seq__33832__$2,ns_name,stuff,vec__33834,doc_str,stuff__$1,vec__33837,attr_map,references){
return (function() { 
var G__33847__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33847 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33848__i = 0, G__33848__a = new Array(arguments.length -  0);
while (G__33848__i < G__33848__a.length) {G__33848__a[G__33848__i] = arguments[G__33848__i + 0]; ++G__33848__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33848__a,0,null);
} 
return G__33847__delegate.call(this,args__32541__auto__);};
G__33847.cljs$lang$maxFixedArity = 0;
G__33847.cljs$lang$applyTo = (function (arglist__33849){
var args__32541__auto__ = cljs.core.seq(arglist__33849);
return G__33847__delegate(args__32541__auto__);
});
G__33847.cljs$core$IFn$_invoke$arity$variadic = G__33847__delegate;
return G__33847;
})()
;
;})(format_in__32539__auto__,cf__32540__auto__,_STAR_current_level_STAR_33840_33842,_STAR_current_length_STAR_33841_33843,vec__33831,seq__33832,first__33833,seq__33832__$1,ns_sym,first__33833__$1,seq__33832__$2,ns_name,stuff,vec__33834,doc_str,stuff__$1,vec__33837,attr_map,references))
})().call(null);
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.call(null,true,"\"~a\"~:[~;~:@_~]",doc_str,(function (){var or__27304__auto__ = attr_map;
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return cljs.core.seq.call(null,references);
}
})());
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__32539__auto__ = "~w~:[~;~:@_~]";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (format_in__32539__auto__,cf__32540__auto__,_STAR_current_level_STAR_33840_33842,_STAR_current_length_STAR_33841_33843,vec__33831,seq__33832,first__33833,seq__33832__$1,ns_sym,first__33833__$1,seq__33832__$2,ns_name,stuff,vec__33834,doc_str,stuff__$1,vec__33837,attr_map,references){
return (function() { 
var G__33850__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33850 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33851__i = 0, G__33851__a = new Array(arguments.length -  0);
while (G__33851__i < G__33851__a.length) {G__33851__a[G__33851__i] = arguments[G__33851__i + 0]; ++G__33851__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33851__a,0,null);
} 
return G__33850__delegate.call(this,args__32541__auto__);};
G__33850.cljs$lang$maxFixedArity = 0;
G__33850.cljs$lang$applyTo = (function (arglist__33852){
var args__32541__auto__ = cljs.core.seq(arglist__33852);
return G__33850__delegate(args__32541__auto__);
});
G__33850.cljs$core$IFn$_invoke$arity$variadic = G__33850__delegate;
return G__33850;
})()
;
;})(format_in__32539__auto__,cf__32540__auto__,_STAR_current_level_STAR_33840_33842,_STAR_current_length_STAR_33841_33843,vec__33831,seq__33832,first__33833,seq__33832__$1,ns_sym,first__33833__$1,seq__33832__$2,ns_name,stuff,vec__33834,doc_str,stuff__$1,vec__33837,attr_map,references))
})().call(null,attr_map,cljs.core.seq.call(null,references));
} else {
}

var references_33853__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference.call(null,cljs.core.first.call(null,references_33853__$1));

var temp__4657__auto___33854 = cljs.core.next.call(null,references_33853__$1);
if(temp__4657__auto___33854){
var references_33855__$2 = temp__4657__auto___33854;
cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__33856 = references_33855__$2;
references_33853__$1 = G__33856;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_33841_33843;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_33840_33842;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__32539__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (format_in__32539__auto__,cf__32540__auto__){
return (function() { 
var G__33857__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33857 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33858__i = 0, G__33858__a = new Array(arguments.length -  0);
while (G__33858__i < G__33858__a.length) {G__33858__a[G__33858__i] = arguments[G__33858__i + 0]; ++G__33858__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33858__a,0,null);
} 
return G__33857__delegate.call(this,args__32541__auto__);};
G__33857.cljs$lang$maxFixedArity = 0;
G__33857.cljs$lang$applyTo = (function (arglist__33859){
var args__32541__auto__ = cljs.core.seq(arglist__33859);
return G__33857__delegate(args__32541__auto__);
});
G__33857.cljs$core$IFn$_invoke$arity$variadic = G__33857__delegate;
return G__33857;
})()
;
;})(format_in__32539__auto__,cf__32540__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__32539__auto__ = " ~_";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (format_in__32539__auto__,cf__32540__auto__){
return (function() { 
var G__33860__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33860 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33861__i = 0, G__33861__a = new Array(arguments.length -  0);
while (G__33861__i < G__33861__a.length) {G__33861__a[G__33861__i] = arguments[G__33861__i + 0]; ++G__33861__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33861__a,0,null);
} 
return G__33860__delegate.call(this,args__32541__auto__);};
G__33860.cljs$lang$maxFixedArity = 0;
G__33860.cljs$lang$applyTo = (function (arglist__33862){
var args__32541__auto__ = cljs.core.seq(arglist__33862);
return G__33860__delegate(args__32541__auto__);
});
G__33860.cljs$core$IFn$_invoke$arity$variadic = G__33860__delegate;
return G__33860;
})()
;
;})(format_in__32539__auto__,cf__32540__auto__))
})().call(null);
} else {
(function (){var format_in__32539__auto__ = " ~@_";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (format_in__32539__auto__,cf__32540__auto__){
return (function() { 
var G__33863__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33863 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33864__i = 0, G__33864__a = new Array(arguments.length -  0);
while (G__33864__i < G__33864__a.length) {G__33864__a[G__33864__i] = arguments[G__33864__i + 0]; ++G__33864__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33864__a,0,null);
} 
return G__33863__delegate.call(this,args__32541__auto__);};
G__33863.cljs$lang$maxFixedArity = 0;
G__33863.cljs$lang$applyTo = (function (arglist__33865){
var args__32541__auto__ = cljs.core.seq(arglist__33865);
return G__33863__delegate(args__32541__auto__);
});
G__33863.cljs$core$IFn$_invoke$arity$variadic = G__33863__delegate;
return G__33863;
})()
;
;})(format_in__32539__auto__,cf__32540__auto__))
})().call(null);
}

return (function (){var format_in__32539__auto__ = "~{~w~^ ~_~}";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (format_in__32539__auto__,cf__32540__auto__){
return (function() { 
var G__33866__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33866 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33867__i = 0, G__33867__a = new Array(arguments.length -  0);
while (G__33867__i < G__33867__a.length) {G__33867__a[G__33867__i] = arguments[G__33867__i + 0]; ++G__33867__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33867__a,0,null);
} 
return G__33866__delegate.call(this,args__32541__auto__);};
G__33866.cljs$lang$maxFixedArity = 0;
G__33866.cljs$lang$applyTo = (function (arglist__33868){
var args__32541__auto__ = cljs.core.seq(arglist__33868);
return G__33866__delegate(args__32541__auto__);
});
G__33866.cljs$core$IFn$_invoke$arity$variadic = G__33866__delegate;
return G__33866;
})()
;
;})(format_in__32539__auto__,cf__32540__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
return (function (){var format_in__32539__auto__ = " ~_~{~w~^ ~_~}";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (format_in__32539__auto__,cf__32540__auto__){
return (function() { 
var G__33869__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33869 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33870__i = 0, G__33870__a = new Array(arguments.length -  0);
while (G__33870__i < G__33870__a.length) {G__33870__a[G__33870__i] = arguments[G__33870__i + 0]; ++G__33870__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33870__a,0,null);
} 
return G__33869__delegate.call(this,args__32541__auto__);};
G__33869.cljs$lang$maxFixedArity = 0;
G__33869.cljs$lang$applyTo = (function (arglist__33871){
var args__32541__auto__ = cljs.core.seq(arglist__33871);
return G__33869__delegate(args__32541__auto__);
});
G__33869.cljs$core$IFn$_invoke$arity$variadic = G__33869__delegate;
return G__33869;
})()
;
;})(format_in__32539__auto__,cf__32540__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next.call(null,alis)){
var vec__33883 = alis;
var seq__33884 = cljs.core.seq.call(null,vec__33883);
var first__33885 = cljs.core.first.call(null,seq__33884);
var seq__33884__$1 = cljs.core.next.call(null,seq__33884);
var defn_sym = first__33885;
var first__33885__$1 = cljs.core.first.call(null,seq__33884__$1);
var seq__33884__$2 = cljs.core.next.call(null,seq__33884__$1);
var defn_name = first__33885__$1;
var stuff = seq__33884__$2;
var vec__33886 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__33886,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__33886,(1),null);
var vec__33889 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__33889,(0),null);
var stuff__$2 = cljs.core.nth.call(null,vec__33889,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_33892_33894 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_33893_33895 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__32539__auto__ = "~w ~1I~@_~w";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (format_in__32539__auto__,cf__32540__auto__,_STAR_current_level_STAR_33892_33894,_STAR_current_length_STAR_33893_33895,vec__33883,seq__33884,first__33885,seq__33884__$1,defn_sym,first__33885__$1,seq__33884__$2,defn_name,stuff,vec__33886,doc_str,stuff__$1,vec__33889,attr_map,stuff__$2){
return (function() { 
var G__33896__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33896 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33897__i = 0, G__33897__a = new Array(arguments.length -  0);
while (G__33897__i < G__33897__a.length) {G__33897__a[G__33897__i] = arguments[G__33897__i + 0]; ++G__33897__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33897__a,0,null);
} 
return G__33896__delegate.call(this,args__32541__auto__);};
G__33896.cljs$lang$maxFixedArity = 0;
G__33896.cljs$lang$applyTo = (function (arglist__33898){
var args__32541__auto__ = cljs.core.seq(arglist__33898);
return G__33896__delegate(args__32541__auto__);
});
G__33896.cljs$core$IFn$_invoke$arity$variadic = G__33896__delegate;
return G__33896;
})()
;
;})(format_in__32539__auto__,cf__32540__auto__,_STAR_current_level_STAR_33892_33894,_STAR_current_length_STAR_33893_33895,vec__33883,seq__33884,first__33885,seq__33884__$1,defn_sym,first__33885__$1,seq__33884__$2,defn_name,stuff,vec__33886,doc_str,stuff__$1,vec__33889,attr_map,stuff__$2))
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__32539__auto__ = " ~_~w";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (format_in__32539__auto__,cf__32540__auto__,_STAR_current_level_STAR_33892_33894,_STAR_current_length_STAR_33893_33895,vec__33883,seq__33884,first__33885,seq__33884__$1,defn_sym,first__33885__$1,seq__33884__$2,defn_name,stuff,vec__33886,doc_str,stuff__$1,vec__33889,attr_map,stuff__$2){
return (function() { 
var G__33899__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33899 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33900__i = 0, G__33900__a = new Array(arguments.length -  0);
while (G__33900__i < G__33900__a.length) {G__33900__a[G__33900__i] = arguments[G__33900__i + 0]; ++G__33900__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33900__a,0,null);
} 
return G__33899__delegate.call(this,args__32541__auto__);};
G__33899.cljs$lang$maxFixedArity = 0;
G__33899.cljs$lang$applyTo = (function (arglist__33901){
var args__32541__auto__ = cljs.core.seq(arglist__33901);
return G__33899__delegate(args__32541__auto__);
});
G__33899.cljs$core$IFn$_invoke$arity$variadic = G__33899__delegate;
return G__33899;
})()
;
;})(format_in__32539__auto__,cf__32540__auto__,_STAR_current_level_STAR_33892_33894,_STAR_current_length_STAR_33893_33895,vec__33883,seq__33884,first__33885,seq__33884__$1,defn_sym,first__33885__$1,seq__33884__$2,defn_name,stuff,vec__33886,doc_str,stuff__$1,vec__33889,attr_map,stuff__$2))
})().call(null,doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__32539__auto__ = " ~_~w";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (format_in__32539__auto__,cf__32540__auto__,_STAR_current_level_STAR_33892_33894,_STAR_current_length_STAR_33893_33895,vec__33883,seq__33884,first__33885,seq__33884__$1,defn_sym,first__33885__$1,seq__33884__$2,defn_name,stuff,vec__33886,doc_str,stuff__$1,vec__33889,attr_map,stuff__$2){
return (function() { 
var G__33902__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33902 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33903__i = 0, G__33903__a = new Array(arguments.length -  0);
while (G__33903__i < G__33903__a.length) {G__33903__a[G__33903__i] = arguments[G__33903__i + 0]; ++G__33903__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33903__a,0,null);
} 
return G__33902__delegate.call(this,args__32541__auto__);};
G__33902.cljs$lang$maxFixedArity = 0;
G__33902.cljs$lang$applyTo = (function (arglist__33904){
var args__32541__auto__ = cljs.core.seq(arglist__33904);
return G__33902__delegate(args__32541__auto__);
});
G__33902.cljs$core$IFn$_invoke$arity$variadic = G__33902__delegate;
return G__33902;
})()
;
;})(format_in__32539__auto__,cf__32540__auto__,_STAR_current_level_STAR_33892_33894,_STAR_current_length_STAR_33893_33895,vec__33883,seq__33884,first__33885,seq__33884__$1,defn_sym,first__33885__$1,seq__33884__$2,defn_name,stuff,vec__33886,doc_str,stuff__$1,vec__33889,attr_map,stuff__$2))
})().call(null,attr_map);
} else {
}

if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,stuff__$2))){
cljs.pprint.single_defn.call(null,stuff__$2,(function (){var or__27304__auto__ = doc_str;
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn.call(null,stuff__$2,(function (){var or__27304__auto__ = doc_str;
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_33893_33895;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_33892_33894;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_33910_33915 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_33911_33916 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count33912_33917 = (0);
var binding_33918 = binding_vec;
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count33912_33917 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq.call(null,binding_33918)){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_33913_33919 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_33914_33920 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,binding_33918));

if(cljs.core.next.call(null,binding_33918)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,binding_33918));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_33914_33920;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_33913_33919;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,binding_33918))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__33921 = (length_count33912_33917 + (1));
var G__33922 = cljs.core.next.call(null,cljs.core.rest.call(null,binding_33918));
length_count33912_33917 = G__33921;
binding_33918 = G__33922;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_33911_33916;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_33910_33915;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first.call(null,alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_33925_33927 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_33926_33928 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next.call(null,alis)) && (cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,alis)))){
(function (){var format_in__32539__auto__ = "~w ~1I~@_";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (format_in__32539__auto__,cf__32540__auto__,_STAR_current_level_STAR_33925_33927,_STAR_current_length_STAR_33926_33928,base_sym){
return (function() { 
var G__33929__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33929 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33930__i = 0, G__33930__a = new Array(arguments.length -  0);
while (G__33930__i < G__33930__a.length) {G__33930__a[G__33930__i] = arguments[G__33930__i + 0]; ++G__33930__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33930__a,0,null);
} 
return G__33929__delegate.call(this,args__32541__auto__);};
G__33929.cljs$lang$maxFixedArity = 0;
G__33929.cljs$lang$applyTo = (function (arglist__33931){
var args__32541__auto__ = cljs.core.seq(arglist__33931);
return G__33929__delegate(args__32541__auto__);
});
G__33929.cljs$core$IFn$_invoke$arity$variadic = G__33929__delegate;
return G__33929;
})()
;
;})(format_in__32539__auto__,cf__32540__auto__,_STAR_current_level_STAR_33925_33927,_STAR_current_length_STAR_33926_33928,base_sym))
})().call(null,base_sym);

cljs.pprint.pprint_binding_form.call(null,cljs.core.second.call(null,alis));

(function (){var format_in__32539__auto__ = " ~_~{~w~^ ~_~}";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (format_in__32539__auto__,cf__32540__auto__,_STAR_current_level_STAR_33925_33927,_STAR_current_length_STAR_33926_33928,base_sym){
return (function() { 
var G__33932__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33932 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33933__i = 0, G__33933__a = new Array(arguments.length -  0);
while (G__33933__i < G__33933__a.length) {G__33933__a[G__33933__i] = arguments[G__33933__i + 0]; ++G__33933__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33933__a,0,null);
} 
return G__33932__delegate.call(this,args__32541__auto__);};
G__33932.cljs$lang$maxFixedArity = 0;
G__33932.cljs$lang$applyTo = (function (arglist__33934){
var args__32541__auto__ = cljs.core.seq(arglist__33934);
return G__33932__delegate(args__32541__auto__);
});
G__33932.cljs$core$IFn$_invoke$arity$variadic = G__33932__delegate;
return G__33932;
})()
;
;})(format_in__32539__auto__,cf__32540__auto__,_STAR_current_level_STAR_33925_33927,_STAR_current_length_STAR_33926_33928,base_sym))
})().call(null,cljs.core.next.call(null,cljs.core.rest.call(null,alis)));
} else {
cljs.pprint.pprint_simple_code_list.call(null,alis);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_33926_33928;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_33925_33927;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__32539__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (format_in__32539__auto__,cf__32540__auto__){
return (function() { 
var G__33935__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33935 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33936__i = 0, G__33936__a = new Array(arguments.length -  0);
while (G__33936__i < G__33936__a.length) {G__33936__a[G__33936__i] = arguments[G__33936__i + 0]; ++G__33936__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33936__a,0,null);
} 
return G__33935__delegate.call(this,args__32541__auto__);};
G__33935.cljs$lang$maxFixedArity = 0;
G__33935.cljs$lang$applyTo = (function (arglist__33937){
var args__32541__auto__ = cljs.core.seq(arglist__33937);
return G__33935__delegate(args__32541__auto__);
});
G__33935.cljs$core$IFn$_invoke$arity$variadic = G__33935__delegate;
return G__33935;
})()
;
;})(format_in__32539__auto__,cf__32540__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_33943_33948 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_33944_33949 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis));

if(cljs.core.next.call(null,alis)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var length_count33945_33950 = (0);
var alis_33951__$1 = cljs.core.next.call(null,alis);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count33945_33950 < cljs.core._STAR_print_length_STAR_))){
if(alis_33951__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_33946_33952 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_33947_33953 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_33951__$1));

if(cljs.core.next.call(null,alis_33951__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_33951__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_33947_33953;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_33946_33952;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_33951__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__33954 = (length_count33945_33950 + (1));
var G__33955 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_33951__$1));
length_count33945_33950 = G__33954;
alis_33951__$1 = G__33955;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_33944_33949;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_33943_33948;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count.call(null,alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_33961_33966 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_33962_33967 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.core.apply.call(null,(function (){var format_in__32539__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (format_in__32539__auto__,cf__32540__auto__,_STAR_current_level_STAR_33961_33966,_STAR_current_length_STAR_33962_33967){
return (function() { 
var G__33968__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33968 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33969__i = 0, G__33969__a = new Array(arguments.length -  0);
while (G__33969__i < G__33969__a.length) {G__33969__a[G__33969__i] = arguments[G__33969__i + 0]; ++G__33969__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33969__a,0,null);
} 
return G__33968__delegate.call(this,args__32541__auto__);};
G__33968.cljs$lang$maxFixedArity = 0;
G__33968.cljs$lang$applyTo = (function (arglist__33970){
var args__32541__auto__ = cljs.core.seq(arglist__33970);
return G__33968__delegate(args__32541__auto__);
});
G__33968.cljs$core$IFn$_invoke$arity$variadic = G__33968__delegate;
return G__33968;
})()
;
;})(format_in__32539__auto__,cf__32540__auto__,_STAR_current_level_STAR_33961_33966,_STAR_current_length_STAR_33962_33967))
})(),alis);

var length_count33963_33971 = (0);
var alis_33972__$1 = cljs.core.seq.call(null,cljs.core.drop.call(null,(3),alis));
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count33963_33971 < cljs.core._STAR_print_length_STAR_))){
if(alis_33972__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_33964_33973 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_33965_33974 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_33972__$1));

if(cljs.core.next.call(null,alis_33972__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_33972__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_33965_33974;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_33964_33973;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_33972__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__33975 = (length_count33963_33971 + (1));
var G__33976 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_33972__$1));
length_count33963_33971 = G__33975;
alis_33972__$1 = G__33976;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_33962_33967;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_33961_33966;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second.call(null,alis);
var nlis = cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,alis)));
if(cljs.core.vector_QMARK_.call(null,args)){
var _STAR_symbol_map_STAR_33980 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,args),"%"]):cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (_STAR_symbol_map_STAR_33980,args,nlis){
return (function (p1__33977_SHARP_,p2__33978_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__33977_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__33978_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_33980,args,nlis))
,args,cljs.core.range.call(null,(1),(cljs.core.count.call(null,args) + (1))))));

try{return (function (){var format_in__32539__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__32540__auto__ = ((typeof format_in__32539__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__32539__auto__):format_in__32539__auto__);
return ((function (format_in__32539__auto__,cf__32540__auto__,_STAR_symbol_map_STAR_33980,args,nlis){
return (function() { 
var G__33981__delegate = function (args__32541__auto__){
var navigator__32542__auto__ = cljs.pprint.init_navigator.call(null,args__32541__auto__);
return cljs.pprint.execute_format.call(null,cf__32540__auto__,navigator__32542__auto__);
};
var G__33981 = function (var_args){
var args__32541__auto__ = null;
if (arguments.length > 0) {
var G__33982__i = 0, G__33982__a = new Array(arguments.length -  0);
while (G__33982__i < G__33982__a.length) {G__33982__a[G__33982__i] = arguments[G__33982__i + 0]; ++G__33982__i;}
  args__32541__auto__ = new cljs.core.IndexedSeq(G__33982__a,0,null);
} 
return G__33981__delegate.call(this,args__32541__auto__);};
G__33981.cljs$lang$maxFixedArity = 0;
G__33981.cljs$lang$applyTo = (function (arglist__33983){
var args__32541__auto__ = cljs.core.seq(arglist__33983);
return G__33981__delegate(args__32541__auto__);
});
G__33981.cljs$core$IFn$_invoke$arity$variadic = G__33981__delegate;
return G__33981;
})()
;
;})(format_in__32539__auto__,cf__32540__auto__,_STAR_symbol_map_STAR_33980,args,nlis))
})().call(null,nlis);
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_33980;
}} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_33987_33990 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_33988_33991 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

var length_count33989_33992 = (0);
var alis_33993__$1 = cljs.core.seq.call(null,alis);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count33989_33992 < cljs.core._STAR_print_length_STAR_))){
if(alis_33993__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_33993__$1));

if(cljs.core.next.call(null,alis_33993__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__33994 = (length_count33989_33992 + (1));
var G__33995 = cljs.core.next.call(null,alis_33993__$1);
length_count33989_33992 = G__33994;
alis_33993__$1 = G__33995;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_33988_33991;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_33987_33990;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__28092__auto__ = (function cljs$pprint$two_forms_$_iter__34000(s__34001){
return (new cljs.core.LazySeq(null,(function (){
var s__34001__$1 = s__34001;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34001__$1);
if(temp__4657__auto__){
var s__34001__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34001__$2)){
var c__28090__auto__ = cljs.core.chunk_first.call(null,s__34001__$2);
var size__28091__auto__ = cljs.core.count.call(null,c__28090__auto__);
var b__34003 = cljs.core.chunk_buffer.call(null,size__28091__auto__);
if((function (){var i__34002 = (0);
while(true){
if((i__34002 < size__28091__auto__)){
var x = cljs.core._nth.call(null,c__28090__auto__,i__34002);
cljs.core.chunk_append.call(null,b__34003,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null));

var G__34004 = (i__34002 + (1));
i__34002 = G__34004;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34003),cljs$pprint$two_forms_$_iter__34000.call(null,cljs.core.chunk_rest.call(null,s__34001__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34003),null);
}
} else {
var x = cljs.core.first.call(null,s__34001__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null),cljs$pprint$two_forms_$_iter__34000.call(null,cljs.core.rest.call(null,s__34001__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28092__auto__.call(null,amap);
})()));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (core){
return (function (p1__34005_SHARP_){
var vec__34009 = p1__34005_SHARP_;
var s = cljs.core.nth.call(null,vec__34009,(0),null);
var f = cljs.core.nth.call(null,vec__34009,(1),null);
if(cljs.core.not.call(null,(function (){var or__27304__auto__ = cljs.core.namespace.call(null,s);
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
return cljs.core.special_symbol_QMARK_.call(null,s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,core,cljs.core.name.call(null,s)),f], null);
} else {
return p1__34005_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms.call(null,cljs.pprint.add_core_ns.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"struct","struct",325972931,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
var temp__4655__auto__ = cljs.pprint._STAR_code_table_STAR_.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_(temp__4655__auto__)){
var special_form = temp__4655__auto__;
return special_form.call(null,alis);
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__4655__auto__ = sym.call(null,cljs.pprint._STAR_symbol_map_STAR_);
if(cljs.core.truth_(temp__4655__auto__)){
var arg_num = temp__4655__auto__;
return cljs.pprint.print.call(null,arg_num);
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.call(null,cljs.core.name.call(null,sym));
} else {
return cljs.pprint.pr.call(null,sym);
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__28237__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__28238__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__28239__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__28240__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__28241__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__28241__auto__,method_table__28237__auto__,prefer_table__28238__auto__,method_cache__28239__auto__,cached_hierarchy__28240__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_code_list);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.pprint.pprint_pqueue);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"deref","deref",-145586795),cljs.pprint.pprint_ideref);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__27640__auto__ = (0);
var y__27641__auto__ = (width - cljs.core.count.call(null,s));
return ((x__27640__auto__ > y__27641__auto__) ? x__27640__auto__ : y__27641__auto__);
})();
return cljs.core.apply.call(null,cljs.core.str,clojure.string.join.call(null,cljs.core.repeat.call(null,padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var args34015 = [];
var len__28417__auto___34039 = arguments.length;
var i__28418__auto___34040 = (0);
while(true){
if((i__28418__auto___34040 < len__28417__auto___34039)){
args34015.push((arguments[i__28418__auto___34040]));

var G__34041 = (i__28418__auto___34040 + (1));
i__28418__auto___34040 = G__34041;
continue;
} else {
}
break;
}

var G__34017 = args34015.length;
switch (G__34017) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34015.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_34018 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq.call(null,rows)){
var widths = cljs.core.map.call(null,((function (_STAR_print_newline_STAR_34018){
return (function (k){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.map.call(null,((function (_STAR_print_newline_STAR_34018){
return (function (p1__34012_SHARP_){
return cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,p1__34012_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_34018))
,rows));
});})(_STAR_print_newline_STAR_34018))
,ks);
var spacers = cljs.core.map.call(null,((function (widths,_STAR_print_newline_STAR_34018){
return (function (p1__34013_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,p1__34013_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_34018))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_34018){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,divider,(function (){var iter__28092__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_34018){
return (function cljs$pprint$iter__34019(s__34020){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_34018){
return (function (){
var s__34020__$1 = s__34020;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34020__$1);
if(temp__4657__auto__){
var s__34020__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34020__$2)){
var c__28090__auto__ = cljs.core.chunk_first.call(null,s__34020__$2);
var size__28091__auto__ = cljs.core.count.call(null,c__28090__auto__);
var b__34022 = cljs.core.chunk_buffer.call(null,size__28091__auto__);
if((function (){var i__34021 = (0);
while(true){
if((i__34021 < size__28091__auto__)){
var vec__34029 = cljs.core._nth.call(null,c__28090__auto__,i__34021);
var col = cljs.core.nth.call(null,vec__34029,(0),null);
var width = cljs.core.nth.call(null,vec__34029,(1),null);
cljs.core.chunk_append.call(null,b__34022,cljs.pprint.add_padding.call(null,width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')));

var G__34043 = (i__34021 + (1));
i__34021 = G__34043;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34022),cljs$pprint$iter__34019.call(null,cljs.core.chunk_rest.call(null,s__34020__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34022),null);
}
} else {
var vec__34032 = cljs.core.first.call(null,s__34020__$2);
var col = cljs.core.nth.call(null,vec__34032,(0),null);
var width = cljs.core.nth.call(null,vec__34032,(1),null);
return cljs.core.cons.call(null,cljs.pprint.add_padding.call(null,width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),cljs$pprint$iter__34019.call(null,cljs.core.rest.call(null,s__34020__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_34018))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_34018))
;
return iter__28092__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,((function (iter__28092__auto__,widths,spacers,_STAR_print_newline_STAR_34018){
return (function (p1__34014_SHARP_){
return cljs.core.get.call(null,row,p1__34014_SHARP_);
});})(iter__28092__auto__,widths,spacers,_STAR_print_newline_STAR_34018))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_34018))
;
cljs.core.println.call(null);

cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",cljs.core.zipmap.call(null,ks,ks)));

cljs.core.println.call(null,fmt_row.call(null,"|-","-+-","-|",cljs.core.zipmap.call(null,ks,spacers)));

var seq__34035 = cljs.core.seq.call(null,rows);
var chunk__34036 = null;
var count__34037 = (0);
var i__34038 = (0);
while(true){
if((i__34038 < count__34037)){
var row = cljs.core._nth.call(null,chunk__34036,i__34038);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));

var G__34044 = seq__34035;
var G__34045 = chunk__34036;
var G__34046 = count__34037;
var G__34047 = (i__34038 + (1));
seq__34035 = G__34044;
chunk__34036 = G__34045;
count__34037 = G__34046;
i__34038 = G__34047;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34035);
if(temp__4657__auto__){
var seq__34035__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34035__$1)){
var c__28123__auto__ = cljs.core.chunk_first.call(null,seq__34035__$1);
var G__34048 = cljs.core.chunk_rest.call(null,seq__34035__$1);
var G__34049 = c__28123__auto__;
var G__34050 = cljs.core.count.call(null,c__28123__auto__);
var G__34051 = (0);
seq__34035 = G__34048;
chunk__34036 = G__34049;
count__34037 = G__34050;
i__34038 = G__34051;
continue;
} else {
var row = cljs.core.first.call(null,seq__34035__$1);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));

var G__34052 = cljs.core.next.call(null,seq__34035__$1);
var G__34053 = null;
var G__34054 = (0);
var G__34055 = (0);
seq__34035 = G__34052;
chunk__34036 = G__34053;
count__34037 = G__34054;
i__34038 = G__34055;
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
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34018;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=pprint.js.map?rel=1497988468973