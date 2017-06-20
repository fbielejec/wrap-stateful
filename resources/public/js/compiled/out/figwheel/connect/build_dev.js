// Compiled by ClojureScript 1.9.542 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('wrap_stateful.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__39801__delegate = function (x){
if(cljs.core.truth_(wrap_stateful.core.mount_root)){
return cljs.core.apply.call(null,wrap_stateful.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'wrap-stateful.core/mount-root' is missing");
}
};
var G__39801 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__39802__i = 0, G__39802__a = new Array(arguments.length -  0);
while (G__39802__i < G__39802__a.length) {G__39802__a[G__39802__i] = arguments[G__39802__i + 0]; ++G__39802__i;}
  x = new cljs.core.IndexedSeq(G__39802__a,0,null);
} 
return G__39801__delegate.call(this,x);};
G__39801.cljs$lang$maxFixedArity = 0;
G__39801.cljs$lang$applyTo = (function (arglist__39803){
var x = cljs.core.seq(arglist__39803);
return G__39801__delegate(x);
});
G__39801.cljs$core$IFn$_invoke$arity$variadic = G__39801__delegate;
return G__39801;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:8080/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1497988479005