// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__27915__auto__,writer__27916__auto__,opt__27917__auto__){
return cljs.core._write.call(null,writer__27916__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35373 = arguments.length;
var i__28418__auto___35374 = (0);
while(true){
if((i__28418__auto___35374 < len__28417__auto___35373)){
args__28424__auto__.push((arguments[i__28418__auto___35374]));

var G__35375 = (i__28418__auto___35374 + (1));
i__28418__auto___35374 = G__35375;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq35372){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35372));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35377 = arguments.length;
var i__28418__auto___35378 = (0);
while(true){
if((i__28418__auto___35378 < len__28417__auto___35377)){
args__28424__auto__.push((arguments[i__28418__auto___35378]));

var G__35379 = (i__28418__auto___35378 + (1));
i__28418__auto___35378 = G__35379;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq35376){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35376));
});

var g_QMARK__35380 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_35381 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__35380){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__35380))
,null));
var mkg_35382 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__35380,g_35381){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__35380,g_35381))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__35380,g_35381,mkg_35382){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35380).call(null,x);
});})(g_QMARK__35380,g_35381,mkg_35382))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__35380,g_35381,mkg_35382){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_35382).call(null,gfn);
});})(g_QMARK__35380,g_35381,mkg_35382))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__35380,g_35381,mkg_35382){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_35381).call(null,generator);
});})(g_QMARK__35380,g_35381,mkg_35382))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__35344__auto___35402 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__35344__auto___35402){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35403 = arguments.length;
var i__28418__auto___35404 = (0);
while(true){
if((i__28418__auto___35404 < len__28417__auto___35403)){
args__28424__auto__.push((arguments[i__28418__auto___35404]));

var G__35405 = (i__28418__auto___35404 + (1));
i__28418__auto___35404 = G__35405;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35344__auto___35402))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35402){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35402),args);
});})(g__35344__auto___35402))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__35344__auto___35402){
return (function (seq35383){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35383));
});})(g__35344__auto___35402))
;


var g__35344__auto___35406 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__35344__auto___35406){
return (function cljs$spec$gen$alpha$list(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35407 = arguments.length;
var i__28418__auto___35408 = (0);
while(true){
if((i__28418__auto___35408 < len__28417__auto___35407)){
args__28424__auto__.push((arguments[i__28418__auto___35408]));

var G__35409 = (i__28418__auto___35408 + (1));
i__28418__auto___35408 = G__35409;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35344__auto___35406))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35406){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35406),args);
});})(g__35344__auto___35406))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__35344__auto___35406){
return (function (seq35384){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35384));
});})(g__35344__auto___35406))
;


var g__35344__auto___35410 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__35344__auto___35410){
return (function cljs$spec$gen$alpha$map(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35411 = arguments.length;
var i__28418__auto___35412 = (0);
while(true){
if((i__28418__auto___35412 < len__28417__auto___35411)){
args__28424__auto__.push((arguments[i__28418__auto___35412]));

var G__35413 = (i__28418__auto___35412 + (1));
i__28418__auto___35412 = G__35413;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35344__auto___35410))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35410){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35410),args);
});})(g__35344__auto___35410))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__35344__auto___35410){
return (function (seq35385){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35385));
});})(g__35344__auto___35410))
;


var g__35344__auto___35414 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__35344__auto___35414){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35415 = arguments.length;
var i__28418__auto___35416 = (0);
while(true){
if((i__28418__auto___35416 < len__28417__auto___35415)){
args__28424__auto__.push((arguments[i__28418__auto___35416]));

var G__35417 = (i__28418__auto___35416 + (1));
i__28418__auto___35416 = G__35417;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35344__auto___35414))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35414){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35414),args);
});})(g__35344__auto___35414))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__35344__auto___35414){
return (function (seq35386){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35386));
});})(g__35344__auto___35414))
;


var g__35344__auto___35418 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__35344__auto___35418){
return (function cljs$spec$gen$alpha$set(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35419 = arguments.length;
var i__28418__auto___35420 = (0);
while(true){
if((i__28418__auto___35420 < len__28417__auto___35419)){
args__28424__auto__.push((arguments[i__28418__auto___35420]));

var G__35421 = (i__28418__auto___35420 + (1));
i__28418__auto___35420 = G__35421;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35344__auto___35418))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35418){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35418),args);
});})(g__35344__auto___35418))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__35344__auto___35418){
return (function (seq35387){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35387));
});})(g__35344__auto___35418))
;


var g__35344__auto___35422 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__35344__auto___35422){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35423 = arguments.length;
var i__28418__auto___35424 = (0);
while(true){
if((i__28418__auto___35424 < len__28417__auto___35423)){
args__28424__auto__.push((arguments[i__28418__auto___35424]));

var G__35425 = (i__28418__auto___35424 + (1));
i__28418__auto___35424 = G__35425;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35344__auto___35422))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35422){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35422),args);
});})(g__35344__auto___35422))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__35344__auto___35422){
return (function (seq35388){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35388));
});})(g__35344__auto___35422))
;


var g__35344__auto___35426 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__35344__auto___35426){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35427 = arguments.length;
var i__28418__auto___35428 = (0);
while(true){
if((i__28418__auto___35428 < len__28417__auto___35427)){
args__28424__auto__.push((arguments[i__28418__auto___35428]));

var G__35429 = (i__28418__auto___35428 + (1));
i__28418__auto___35428 = G__35429;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35344__auto___35426))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35426){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35426),args);
});})(g__35344__auto___35426))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__35344__auto___35426){
return (function (seq35389){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35389));
});})(g__35344__auto___35426))
;


var g__35344__auto___35430 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__35344__auto___35430){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35431 = arguments.length;
var i__28418__auto___35432 = (0);
while(true){
if((i__28418__auto___35432 < len__28417__auto___35431)){
args__28424__auto__.push((arguments[i__28418__auto___35432]));

var G__35433 = (i__28418__auto___35432 + (1));
i__28418__auto___35432 = G__35433;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35344__auto___35430))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35430){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35430),args);
});})(g__35344__auto___35430))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__35344__auto___35430){
return (function (seq35390){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35390));
});})(g__35344__auto___35430))
;


var g__35344__auto___35434 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__35344__auto___35434){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35435 = arguments.length;
var i__28418__auto___35436 = (0);
while(true){
if((i__28418__auto___35436 < len__28417__auto___35435)){
args__28424__auto__.push((arguments[i__28418__auto___35436]));

var G__35437 = (i__28418__auto___35436 + (1));
i__28418__auto___35436 = G__35437;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35344__auto___35434))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35434){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35434),args);
});})(g__35344__auto___35434))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__35344__auto___35434){
return (function (seq35391){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35391));
});})(g__35344__auto___35434))
;


var g__35344__auto___35438 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__35344__auto___35438){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35439 = arguments.length;
var i__28418__auto___35440 = (0);
while(true){
if((i__28418__auto___35440 < len__28417__auto___35439)){
args__28424__auto__.push((arguments[i__28418__auto___35440]));

var G__35441 = (i__28418__auto___35440 + (1));
i__28418__auto___35440 = G__35441;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35344__auto___35438))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35438){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35438),args);
});})(g__35344__auto___35438))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__35344__auto___35438){
return (function (seq35392){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35392));
});})(g__35344__auto___35438))
;


var g__35344__auto___35442 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__35344__auto___35442){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35443 = arguments.length;
var i__28418__auto___35444 = (0);
while(true){
if((i__28418__auto___35444 < len__28417__auto___35443)){
args__28424__auto__.push((arguments[i__28418__auto___35444]));

var G__35445 = (i__28418__auto___35444 + (1));
i__28418__auto___35444 = G__35445;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35344__auto___35442))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35442){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35442),args);
});})(g__35344__auto___35442))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__35344__auto___35442){
return (function (seq35393){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35393));
});})(g__35344__auto___35442))
;


var g__35344__auto___35446 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__35344__auto___35446){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35447 = arguments.length;
var i__28418__auto___35448 = (0);
while(true){
if((i__28418__auto___35448 < len__28417__auto___35447)){
args__28424__auto__.push((arguments[i__28418__auto___35448]));

var G__35449 = (i__28418__auto___35448 + (1));
i__28418__auto___35448 = G__35449;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35344__auto___35446))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35446){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35446),args);
});})(g__35344__auto___35446))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__35344__auto___35446){
return (function (seq35394){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35394));
});})(g__35344__auto___35446))
;


var g__35344__auto___35450 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__35344__auto___35450){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35451 = arguments.length;
var i__28418__auto___35452 = (0);
while(true){
if((i__28418__auto___35452 < len__28417__auto___35451)){
args__28424__auto__.push((arguments[i__28418__auto___35452]));

var G__35453 = (i__28418__auto___35452 + (1));
i__28418__auto___35452 = G__35453;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35344__auto___35450))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35450){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35450),args);
});})(g__35344__auto___35450))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__35344__auto___35450){
return (function (seq35395){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35395));
});})(g__35344__auto___35450))
;


var g__35344__auto___35454 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__35344__auto___35454){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35455 = arguments.length;
var i__28418__auto___35456 = (0);
while(true){
if((i__28418__auto___35456 < len__28417__auto___35455)){
args__28424__auto__.push((arguments[i__28418__auto___35456]));

var G__35457 = (i__28418__auto___35456 + (1));
i__28418__auto___35456 = G__35457;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35344__auto___35454))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35454){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35454),args);
});})(g__35344__auto___35454))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__35344__auto___35454){
return (function (seq35396){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35396));
});})(g__35344__auto___35454))
;


var g__35344__auto___35458 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__35344__auto___35458){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35459 = arguments.length;
var i__28418__auto___35460 = (0);
while(true){
if((i__28418__auto___35460 < len__28417__auto___35459)){
args__28424__auto__.push((arguments[i__28418__auto___35460]));

var G__35461 = (i__28418__auto___35460 + (1));
i__28418__auto___35460 = G__35461;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35344__auto___35458))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35458){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35458),args);
});})(g__35344__auto___35458))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__35344__auto___35458){
return (function (seq35397){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35397));
});})(g__35344__auto___35458))
;


var g__35344__auto___35462 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__35344__auto___35462){
return (function cljs$spec$gen$alpha$return(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35463 = arguments.length;
var i__28418__auto___35464 = (0);
while(true){
if((i__28418__auto___35464 < len__28417__auto___35463)){
args__28424__auto__.push((arguments[i__28418__auto___35464]));

var G__35465 = (i__28418__auto___35464 + (1));
i__28418__auto___35464 = G__35465;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35344__auto___35462))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35462){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35462),args);
});})(g__35344__auto___35462))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__35344__auto___35462){
return (function (seq35398){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35398));
});})(g__35344__auto___35462))
;


var g__35344__auto___35466 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__35344__auto___35466){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35467 = arguments.length;
var i__28418__auto___35468 = (0);
while(true){
if((i__28418__auto___35468 < len__28417__auto___35467)){
args__28424__auto__.push((arguments[i__28418__auto___35468]));

var G__35469 = (i__28418__auto___35468 + (1));
i__28418__auto___35468 = G__35469;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35344__auto___35466))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35466){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35466),args);
});})(g__35344__auto___35466))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__35344__auto___35466){
return (function (seq35399){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35399));
});})(g__35344__auto___35466))
;


var g__35344__auto___35470 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__35344__auto___35470){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35471 = arguments.length;
var i__28418__auto___35472 = (0);
while(true){
if((i__28418__auto___35472 < len__28417__auto___35471)){
args__28424__auto__.push((arguments[i__28418__auto___35472]));

var G__35473 = (i__28418__auto___35472 + (1));
i__28418__auto___35472 = G__35473;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35344__auto___35470))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35470){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35470),args);
});})(g__35344__auto___35470))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__35344__auto___35470){
return (function (seq35400){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35400));
});})(g__35344__auto___35470))
;


var g__35344__auto___35474 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__35344__auto___35474){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35475 = arguments.length;
var i__28418__auto___35476 = (0);
while(true){
if((i__28418__auto___35476 < len__28417__auto___35475)){
args__28424__auto__.push((arguments[i__28418__auto___35476]));

var G__35477 = (i__28418__auto___35476 + (1));
i__28418__auto___35476 = G__35477;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35344__auto___35474))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35344__auto___35474){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35344__auto___35474),args);
});})(g__35344__auto___35474))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__35344__auto___35474){
return (function (seq35401){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35401));
});})(g__35344__auto___35474))
;

var g__35357__auto___35499 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__35357__auto___35499){
return (function cljs$spec$gen$alpha$any(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35500 = arguments.length;
var i__28418__auto___35501 = (0);
while(true){
if((i__28418__auto___35501 < len__28417__auto___35500)){
args__28424__auto__.push((arguments[i__28418__auto___35501]));

var G__35502 = (i__28418__auto___35501 + (1));
i__28418__auto___35501 = G__35502;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35357__auto___35499))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35499){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35499);
});})(g__35357__auto___35499))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__35357__auto___35499){
return (function (seq35478){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35478));
});})(g__35357__auto___35499))
;


var g__35357__auto___35503 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__35357__auto___35503){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35504 = arguments.length;
var i__28418__auto___35505 = (0);
while(true){
if((i__28418__auto___35505 < len__28417__auto___35504)){
args__28424__auto__.push((arguments[i__28418__auto___35505]));

var G__35506 = (i__28418__auto___35505 + (1));
i__28418__auto___35505 = G__35506;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35357__auto___35503))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35503){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35503);
});})(g__35357__auto___35503))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__35357__auto___35503){
return (function (seq35479){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35479));
});})(g__35357__auto___35503))
;


var g__35357__auto___35507 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__35357__auto___35507){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35508 = arguments.length;
var i__28418__auto___35509 = (0);
while(true){
if((i__28418__auto___35509 < len__28417__auto___35508)){
args__28424__auto__.push((arguments[i__28418__auto___35509]));

var G__35510 = (i__28418__auto___35509 + (1));
i__28418__auto___35509 = G__35510;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35357__auto___35507))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35507){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35507);
});})(g__35357__auto___35507))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__35357__auto___35507){
return (function (seq35480){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35480));
});})(g__35357__auto___35507))
;


var g__35357__auto___35511 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__35357__auto___35511){
return (function cljs$spec$gen$alpha$char(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35512 = arguments.length;
var i__28418__auto___35513 = (0);
while(true){
if((i__28418__auto___35513 < len__28417__auto___35512)){
args__28424__auto__.push((arguments[i__28418__auto___35513]));

var G__35514 = (i__28418__auto___35513 + (1));
i__28418__auto___35513 = G__35514;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35357__auto___35511))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35511){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35511);
});})(g__35357__auto___35511))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__35357__auto___35511){
return (function (seq35481){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35481));
});})(g__35357__auto___35511))
;


var g__35357__auto___35515 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__35357__auto___35515){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35516 = arguments.length;
var i__28418__auto___35517 = (0);
while(true){
if((i__28418__auto___35517 < len__28417__auto___35516)){
args__28424__auto__.push((arguments[i__28418__auto___35517]));

var G__35518 = (i__28418__auto___35517 + (1));
i__28418__auto___35517 = G__35518;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35357__auto___35515))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35515){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35515);
});})(g__35357__auto___35515))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__35357__auto___35515){
return (function (seq35482){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35482));
});})(g__35357__auto___35515))
;


var g__35357__auto___35519 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__35357__auto___35519){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35520 = arguments.length;
var i__28418__auto___35521 = (0);
while(true){
if((i__28418__auto___35521 < len__28417__auto___35520)){
args__28424__auto__.push((arguments[i__28418__auto___35521]));

var G__35522 = (i__28418__auto___35521 + (1));
i__28418__auto___35521 = G__35522;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35357__auto___35519))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35519){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35519);
});})(g__35357__auto___35519))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__35357__auto___35519){
return (function (seq35483){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35483));
});})(g__35357__auto___35519))
;


var g__35357__auto___35523 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__35357__auto___35523){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35524 = arguments.length;
var i__28418__auto___35525 = (0);
while(true){
if((i__28418__auto___35525 < len__28417__auto___35524)){
args__28424__auto__.push((arguments[i__28418__auto___35525]));

var G__35526 = (i__28418__auto___35525 + (1));
i__28418__auto___35525 = G__35526;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35357__auto___35523))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35523){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35523);
});})(g__35357__auto___35523))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__35357__auto___35523){
return (function (seq35484){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35484));
});})(g__35357__auto___35523))
;


var g__35357__auto___35527 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__35357__auto___35527){
return (function cljs$spec$gen$alpha$double(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35528 = arguments.length;
var i__28418__auto___35529 = (0);
while(true){
if((i__28418__auto___35529 < len__28417__auto___35528)){
args__28424__auto__.push((arguments[i__28418__auto___35529]));

var G__35530 = (i__28418__auto___35529 + (1));
i__28418__auto___35529 = G__35530;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35357__auto___35527))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35527){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35527);
});})(g__35357__auto___35527))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__35357__auto___35527){
return (function (seq35485){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35485));
});})(g__35357__auto___35527))
;


var g__35357__auto___35531 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__35357__auto___35531){
return (function cljs$spec$gen$alpha$int(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35532 = arguments.length;
var i__28418__auto___35533 = (0);
while(true){
if((i__28418__auto___35533 < len__28417__auto___35532)){
args__28424__auto__.push((arguments[i__28418__auto___35533]));

var G__35534 = (i__28418__auto___35533 + (1));
i__28418__auto___35533 = G__35534;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35357__auto___35531))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35531){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35531);
});})(g__35357__auto___35531))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__35357__auto___35531){
return (function (seq35486){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35486));
});})(g__35357__auto___35531))
;


var g__35357__auto___35535 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__35357__auto___35535){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35536 = arguments.length;
var i__28418__auto___35537 = (0);
while(true){
if((i__28418__auto___35537 < len__28417__auto___35536)){
args__28424__auto__.push((arguments[i__28418__auto___35537]));

var G__35538 = (i__28418__auto___35537 + (1));
i__28418__auto___35537 = G__35538;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35357__auto___35535))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35535){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35535);
});})(g__35357__auto___35535))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__35357__auto___35535){
return (function (seq35487){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35487));
});})(g__35357__auto___35535))
;


var g__35357__auto___35539 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__35357__auto___35539){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35540 = arguments.length;
var i__28418__auto___35541 = (0);
while(true){
if((i__28418__auto___35541 < len__28417__auto___35540)){
args__28424__auto__.push((arguments[i__28418__auto___35541]));

var G__35542 = (i__28418__auto___35541 + (1));
i__28418__auto___35541 = G__35542;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35357__auto___35539))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35539){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35539);
});})(g__35357__auto___35539))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__35357__auto___35539){
return (function (seq35488){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35488));
});})(g__35357__auto___35539))
;


var g__35357__auto___35543 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__35357__auto___35543){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35544 = arguments.length;
var i__28418__auto___35545 = (0);
while(true){
if((i__28418__auto___35545 < len__28417__auto___35544)){
args__28424__auto__.push((arguments[i__28418__auto___35545]));

var G__35546 = (i__28418__auto___35545 + (1));
i__28418__auto___35545 = G__35546;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35357__auto___35543))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35543){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35543);
});})(g__35357__auto___35543))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__35357__auto___35543){
return (function (seq35489){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35489));
});})(g__35357__auto___35543))
;


var g__35357__auto___35547 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__35357__auto___35547){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35548 = arguments.length;
var i__28418__auto___35549 = (0);
while(true){
if((i__28418__auto___35549 < len__28417__auto___35548)){
args__28424__auto__.push((arguments[i__28418__auto___35549]));

var G__35550 = (i__28418__auto___35549 + (1));
i__28418__auto___35549 = G__35550;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35357__auto___35547))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35547){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35547);
});})(g__35357__auto___35547))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__35357__auto___35547){
return (function (seq35490){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35490));
});})(g__35357__auto___35547))
;


var g__35357__auto___35551 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__35357__auto___35551){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35552 = arguments.length;
var i__28418__auto___35553 = (0);
while(true){
if((i__28418__auto___35553 < len__28417__auto___35552)){
args__28424__auto__.push((arguments[i__28418__auto___35553]));

var G__35554 = (i__28418__auto___35553 + (1));
i__28418__auto___35553 = G__35554;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35357__auto___35551))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35551){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35551);
});})(g__35357__auto___35551))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__35357__auto___35551){
return (function (seq35491){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35491));
});})(g__35357__auto___35551))
;


var g__35357__auto___35555 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__35357__auto___35555){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35556 = arguments.length;
var i__28418__auto___35557 = (0);
while(true){
if((i__28418__auto___35557 < len__28417__auto___35556)){
args__28424__auto__.push((arguments[i__28418__auto___35557]));

var G__35558 = (i__28418__auto___35557 + (1));
i__28418__auto___35557 = G__35558;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35357__auto___35555))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35555){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35555);
});})(g__35357__auto___35555))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__35357__auto___35555){
return (function (seq35492){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35492));
});})(g__35357__auto___35555))
;


var g__35357__auto___35559 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__35357__auto___35559){
return (function cljs$spec$gen$alpha$string(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35560 = arguments.length;
var i__28418__auto___35561 = (0);
while(true){
if((i__28418__auto___35561 < len__28417__auto___35560)){
args__28424__auto__.push((arguments[i__28418__auto___35561]));

var G__35562 = (i__28418__auto___35561 + (1));
i__28418__auto___35561 = G__35562;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35357__auto___35559))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35559){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35559);
});})(g__35357__auto___35559))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__35357__auto___35559){
return (function (seq35493){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35493));
});})(g__35357__auto___35559))
;


var g__35357__auto___35563 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__35357__auto___35563){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35564 = arguments.length;
var i__28418__auto___35565 = (0);
while(true){
if((i__28418__auto___35565 < len__28417__auto___35564)){
args__28424__auto__.push((arguments[i__28418__auto___35565]));

var G__35566 = (i__28418__auto___35565 + (1));
i__28418__auto___35565 = G__35566;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35357__auto___35563))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35563){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35563);
});})(g__35357__auto___35563))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__35357__auto___35563){
return (function (seq35494){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35494));
});})(g__35357__auto___35563))
;


var g__35357__auto___35567 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__35357__auto___35567){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35568 = arguments.length;
var i__28418__auto___35569 = (0);
while(true){
if((i__28418__auto___35569 < len__28417__auto___35568)){
args__28424__auto__.push((arguments[i__28418__auto___35569]));

var G__35570 = (i__28418__auto___35569 + (1));
i__28418__auto___35569 = G__35570;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35357__auto___35567))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35567){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35567);
});})(g__35357__auto___35567))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__35357__auto___35567){
return (function (seq35495){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35495));
});})(g__35357__auto___35567))
;


var g__35357__auto___35571 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__35357__auto___35571){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35572 = arguments.length;
var i__28418__auto___35573 = (0);
while(true){
if((i__28418__auto___35573 < len__28417__auto___35572)){
args__28424__auto__.push((arguments[i__28418__auto___35573]));

var G__35574 = (i__28418__auto___35573 + (1));
i__28418__auto___35573 = G__35574;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35357__auto___35571))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35571){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35571);
});})(g__35357__auto___35571))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__35357__auto___35571){
return (function (seq35496){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35496));
});})(g__35357__auto___35571))
;


var g__35357__auto___35575 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__35357__auto___35575){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35576 = arguments.length;
var i__28418__auto___35577 = (0);
while(true){
if((i__28418__auto___35577 < len__28417__auto___35576)){
args__28424__auto__.push((arguments[i__28418__auto___35577]));

var G__35578 = (i__28418__auto___35577 + (1));
i__28418__auto___35577 = G__35578;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35357__auto___35575))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35575){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35575);
});})(g__35357__auto___35575))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__35357__auto___35575){
return (function (seq35497){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35497));
});})(g__35357__auto___35575))
;


var g__35357__auto___35579 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__35357__auto___35579){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35580 = arguments.length;
var i__28418__auto___35581 = (0);
while(true){
if((i__28418__auto___35581 < len__28417__auto___35580)){
args__28424__auto__.push((arguments[i__28418__auto___35581]));

var G__35582 = (i__28418__auto___35581 + (1));
i__28418__auto___35581 = G__35582;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});})(g__35357__auto___35579))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35357__auto___35579){
return (function (args){
return cljs.core.deref.call(null,g__35357__auto___35579);
});})(g__35357__auto___35579))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__35357__auto___35579){
return (function (seq35498){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35498));
});})(g__35357__auto___35579))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__28424__auto__ = [];
var len__28417__auto___35585 = arguments.length;
var i__28418__auto___35586 = (0);
while(true){
if((i__28418__auto___35586 < len__28417__auto___35585)){
args__28424__auto__.push((arguments[i__28418__auto___35586]));

var G__35587 = (i__28418__auto___35586 + (1));
i__28418__auto___35586 = G__35587;
continue;
} else {
}
break;
}

var argseq__28425__auto__ = ((((0) < args__28424__auto__.length))?(new cljs.core.IndexedSeq(args__28424__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__28425__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__35583_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35583_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq35584){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35584));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__35588_SHARP_){
return (new Date(p1__35588_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1497988471161