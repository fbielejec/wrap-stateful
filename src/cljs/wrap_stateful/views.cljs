(ns wrap-stateful.views
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            d3-lib))



#_(defn- ace-editor-component
    []
    (let [ace-editor (atom nil)
          update (fn [props]
                   (let [{:keys [content]} (reagent/props props)]
                     (-> @ace-editor
                         .getSession
                         (.setValue content))))]
      (reagent/create-class
       {:reagent-render (fn [args]
                          (let [id (:id args)]
                            [:div {:id (-> id
                                           name
                                           str)
                                   :class "ace-text-editor"
                                   :on-drag-enter #(.preventDefault %)
                                   :on-drag-start #(.preventDefault %)
                                   :on-drag-end #(.preventDefault %)
                                   :on-drag-leave #(.preventDefault %)
                                   :on-drag-over #(.preventDefault %)
                                   :on-drag #(.preventDefault %)
                                   :on-drop #(handle-drop id %)}]))
        :component-did-mount (fn [props]
                               (let [id (-> props
                                            reagent/props
                                            :id)
                                     ace-obj (js/ace.edit (-> id
                                                              name
                                                              str))]
                                 (doto ace-obj
                                   (.setOptions ace-options)
                                   (.setShowPrintMargin false)
                                   (-> .getSession (.setUseWrapMode true))
                                   (aset "$blockScrolling" "Infinity")
                                   (.on "blur" #(handle-change id (.getValue ace-obj))))
                                 (reset! ace-editor ace-obj))
                               (update props))
        :component-did-update update})))

#_(defn ace-editor-container [id]
    (let [content (re-frame/subscribe [:content {:id id}])]
      (fn []
        [ace-editor-component {:id id :content @content}])))

(defn main-panel []
  (let []
    (fn []
      (let [d3-chart-id :d3-chart]
        [:div{:class "container"}
         [:h1 "Select data to render"]
         #_[ace-editor-container ace-editor-id]]))))
