// Compiled by ClojureScript 1.9.542 {}
goog.provide('wrap_stateful.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_frisk.core');
goog.require('wrap_stateful.handlers');
goog.require('wrap_stateful.subscriptions');
goog.require('wrap_stateful.db');
goog.require('wrap_stateful.views');
wrap_stateful.core.debug_QMARK_ = goog.DEBUG;
wrap_stateful.core.dev_setup = (function wrap_stateful$core$dev_setup(){
if(cljs.core.truth_(wrap_stateful.core.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

re_frisk.core.enable_re_frisk_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
wrap_stateful.core.mount_root = (function wrap_stateful$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [wrap_stateful.views.main_panel], null),document.getElementById("app"));
});
wrap_stateful.core.init = (function wrap_stateful$core$init(){
wrap_stateful.core.dev_setup.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return wrap_stateful.core.mount_root.call(null);
});
goog.exportSymbol('wrap_stateful.core.init', wrap_stateful.core.init);

//# sourceMappingURL=core.js.map?rel=1497988478995