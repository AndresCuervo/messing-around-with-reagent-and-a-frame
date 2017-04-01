(ns mess-with-reagent.prod
  (:require [mess-with-reagent.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
