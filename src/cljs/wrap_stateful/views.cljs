(ns wrap-stateful.views
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [chart :as chart]))

(defn handle-file-read
  [id evt]
  (let [content (-> evt .-target .-result)]
    (re-frame/dispatch [:set-content {:id id :content content}])))

(defn handle-upload [id evt]
  (let [target (.-currentTarget evt)
        file (-> target .-files (aget 0))
        reader (js/FileReader.)]
    (set! (.-value target) "")
    (set! (.-onload reader) #(handle-file-read id %))
    (.readAsText reader file)))

(defn upload-button [id]
  (fn []
    [:label {:for "file-upload" :class "custom-file-upload"}
     [:i {:class "btn-upload"}] "Custom Upload"]
    [:input {:class "none"
             :id "file-upload"
             :type "file"
             :on-change #(handle-upload id %)}]))

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
      (let [d3-chart-id :d3-chart
            data-id :data
            data @(re-frame/subscribe [:content {:id data-id}])
            ]
        [:div{:class "container"}
         [:h1 "Upload data to render"]
         [upload-button data-id]
         (if data
           (do
             (prn "data loaded")
             (prn chart))
           (prn "no data loaded"))
         #_[ace-editor-container ace-editor-id]]))))
