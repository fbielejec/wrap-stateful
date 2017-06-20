// Compiled by ClojureScript 1.9.542 {}
goog.provide('wrap_stateful.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('wrap_stateful.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return wrap_stateful.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-content","set-content",-1737386860),(function (db,p__39784){
var vec__39785 = p__39784;
var _ = cljs.core.nth.call(null,vec__39785,(0),null);
var params = cljs.core.nth.call(null,vec__39785,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(params));
}));

//# sourceMappingURL=handlers.js.map?rel=1497988478955