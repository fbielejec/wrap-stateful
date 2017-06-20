// Compiled by ClojureScript 1.9.542 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__27304__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__27304__auto__)){
return or__27304__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_38413 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_38413){
return (function (){
var _STAR_always_update_STAR_38414 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_38414;
}});})(_STAR_always_update_STAR_38413))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_38413;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args38415 = [];
var len__28417__auto___38418 = arguments.length;
var i__28418__auto___38419 = (0);
while(true){
if((i__28418__auto___38419 < len__28417__auto___38418)){
args38415.push((arguments[i__28418__auto___38419]));

var G__38420 = (i__28418__auto___38419 + (1));
i__28418__auto___38419 = G__38420;
continue;
} else {
}
break;
}

var G__38417 = args38415.length;
switch (G__38417) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38415.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__38426_38430 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__38427_38431 = null;
var count__38428_38432 = (0);
var i__38429_38433 = (0);
while(true){
if((i__38429_38433 < count__38428_38432)){
var v_38434 = cljs.core._nth.call(null,chunk__38427_38431,i__38429_38433);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_38434);

var G__38435 = seq__38426_38430;
var G__38436 = chunk__38427_38431;
var G__38437 = count__38428_38432;
var G__38438 = (i__38429_38433 + (1));
seq__38426_38430 = G__38435;
chunk__38427_38431 = G__38436;
count__38428_38432 = G__38437;
i__38429_38433 = G__38438;
continue;
} else {
var temp__4657__auto___38439 = cljs.core.seq.call(null,seq__38426_38430);
if(temp__4657__auto___38439){
var seq__38426_38440__$1 = temp__4657__auto___38439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38426_38440__$1)){
var c__28123__auto___38441 = cljs.core.chunk_first.call(null,seq__38426_38440__$1);
var G__38442 = cljs.core.chunk_rest.call(null,seq__38426_38440__$1);
var G__38443 = c__28123__auto___38441;
var G__38444 = cljs.core.count.call(null,c__28123__auto___38441);
var G__38445 = (0);
seq__38426_38430 = G__38442;
chunk__38427_38431 = G__38443;
count__38428_38432 = G__38444;
i__38429_38433 = G__38445;
continue;
} else {
var v_38446 = cljs.core.first.call(null,seq__38426_38440__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_38446);

var G__38447 = cljs.core.next.call(null,seq__38426_38440__$1);
var G__38448 = null;
var G__38449 = (0);
var G__38450 = (0);
seq__38426_38430 = G__38447;
chunk__38427_38431 = G__38448;
count__38428_38432 = G__38449;
i__38429_38433 = G__38450;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1497988475977