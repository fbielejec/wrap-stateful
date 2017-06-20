// Compiled by ClojureScript 1.9.542 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__38094__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38094 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38095__i = 0, G__38095__a = new Array(arguments.length -  0);
while (G__38095__i < G__38095__a.length) {G__38095__a[G__38095__i] = arguments[G__38095__i + 0]; ++G__38095__i;}
  args = new cljs.core.IndexedSeq(G__38095__a,0,null);
} 
return G__38094__delegate.call(this,args);};
G__38094.cljs$lang$maxFixedArity = 0;
G__38094.cljs$lang$applyTo = (function (arglist__38096){
var args = cljs.core.seq(arglist__38096);
return G__38094__delegate(args);
});
G__38094.cljs$core$IFn$_invoke$arity$variadic = G__38094__delegate;
return G__38094;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__38097__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38097 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38098__i = 0, G__38098__a = new Array(arguments.length -  0);
while (G__38098__i < G__38098__a.length) {G__38098__a[G__38098__i] = arguments[G__38098__i + 0]; ++G__38098__i;}
  args = new cljs.core.IndexedSeq(G__38098__a,0,null);
} 
return G__38097__delegate.call(this,args);};
G__38097.cljs$lang$maxFixedArity = 0;
G__38097.cljs$lang$applyTo = (function (arglist__38099){
var args = cljs.core.seq(arglist__38099);
return G__38097__delegate(args);
});
G__38097.cljs$core$IFn$_invoke$arity$variadic = G__38097__delegate;
return G__38097;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1497988474672