(ns figwheel.connect.build-dev (:require [wrap-stateful.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/wrap-stateful.core.mount-root (apply js/wrap-stateful.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'wrap-stateful.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:8080/figwheel-ws"})

