(ns figwheel.connect.devcards (:require [devcards.core :include-macros true] [figwheel.client] [figwheel.client.utils] [present.core]))
(figwheel.client/start {:devcards true, :open-urls ["http://localhost:3449/cards.html"], :build-id "devcards", :websocket-url "ws://localhost:3450/figwheel-ws"})
(devcards.core/start-devcard-ui!)

