goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.math.Integer', 'goog.string.StringBuffer', 'goog.array', 'goog.math.Long']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../cljs/pprint.js", ['cljs.pprint'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer', 'clojure.string']);
goog.addDependency("../devcards/util/utils.js", ['devcards.util.utils'], ['cljs.core', 'cljs.pprint']);
goog.addDependency("../react.inc.js", ['cljsjs.react'], []);
goog.addDependency("../cljs/core/async/impl/protocols.js", ['cljs.core.async.impl.protocols'], ['cljs.core']);
goog.addDependency("../cljs/core/async/impl/buffers.js", ['cljs.core.async.impl.buffers'], ['cljs.core', 'cljs.core.async.impl.protocols']);
goog.addDependency("../cljs/core/async/impl/dispatch.js", ['cljs.core.async.impl.dispatch'], ['cljs.core', 'cljs.core.async.impl.buffers', 'goog.async.nextTick']);
goog.addDependency("../cljs/core/async/impl/channels.js", ['cljs.core.async.impl.channels'], ['cljs.core.async.impl.dispatch', 'cljs.core', 'cljs.core.async.impl.buffers', 'cljs.core.async.impl.protocols']);
goog.addDependency("../cljs/core/async/impl/ioc_helpers.js", ['cljs.core.async.impl.ioc_helpers'], ['cljs.core', 'cljs.core.async.impl.protocols']);
goog.addDependency("../cljs/core/async/impl/timers.js", ['cljs.core.async.impl.timers'], ['cljs.core.async.impl.channels', 'cljs.core.async.impl.dispatch', 'cljs.core', 'cljs.core.async.impl.protocols']);
goog.addDependency("../cljs/core/async.js", ['cljs.core.async'], ['cljs.core.async.impl.channels', 'cljs.core.async.impl.dispatch', 'cljs.core', 'cljs.core.async.impl.buffers', 'cljs.core.async.impl.protocols', 'cljs.core.async.impl.ioc_helpers', 'cljs.core.async.impl.timers']);
goog.addDependency("../clojure/set.js", ['clojure.set'], ['cljs.core']);
goog.addDependency("../sablono/util.js", ['sablono.util'], ['goog.Uri', 'cljs.core', 'clojure.set', 'clojure.string']);
goog.addDependency("../react-dom.inc.js", ['cljsjs.react.dom'], ['cljsjs.react']);
goog.addDependency("../sablono/normalize.js", ['sablono.normalize'], ['sablono.util', 'cljs.core', 'clojure.set', 'clojure.string']);
goog.addDependency("../sablono/interpreter.js", ['sablono.interpreter'], ['sablono.util', 'cljs.core', 'goog.object', 'cljsjs.react', 'sablono.normalize', 'clojure.string']);
goog.addDependency("../sablono/core.js", ['sablono.core'], ['goog.dom', 'sablono.util', 'goog.string', 'cljs.core', 'cljsjs.react', 'cljsjs.react.dom', 'sablono.interpreter', 'sablono.normalize', 'clojure.string']);
goog.addDependency("../devcards/util/edn_renderer.js", ['devcards.util.edn_renderer'], ['devcards.util.utils', 'cljs.core', 'sablono.core']);
goog.addDependency("../devcards/system.js", ['devcards.system'], ['devcards.util.utils', 'cljs.core', 'goog.history.EventType', 'cljsjs.react', 'goog.History', 'cljs.core.async', 'sablono.core', 'cljsjs.react.dom', 'devcards.util.edn_renderer', 'goog.labs.userAgent.device', 'clojure.string', 'goog.events']);
goog.addDependency("../cljs/test.js", ['cljs.test'], ['cljs.core', 'cljs.pprint', 'clojure.string']);
goog.addDependency("../showdown.inc.js", ['cljsjs.showdown'], []);
goog.addDependency("../devcards/util/markdown.js", ['devcards.util.markdown'], ['cljs.core', 'cljsjs.showdown', 'clojure.string']);
goog.addDependency("../devcards/core.js", ['devcards.core'], ['devcards.util.utils', 'devcards.system', 'cljs.core', 'cljs.test', 'cljs.core.async', 'sablono.core', 'devcards.util.edn_renderer', 'devcards.util.markdown', 'clojure.string']);
goog.addDependency("../cljs/reader.js", ['cljs.reader'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../figwheel/client/utils.js", ['figwheel.client.utils'], ['goog.userAgent.product', 'goog.string', 'cljs.core', 'goog.string.StringBuffer', 'cljs.pprint', 'goog.async.Deferred', 'clojure.string', 'cljs.reader']);
goog.addDependency("../figwheel/client/file_reloading.js", ['figwheel.client.file_reloading'], ['goog.string', 'goog.net.jsloader', 'goog.Uri', 'cljs.core', 'goog.object', 'cljs.core.async', 'clojure.set', 'figwheel.client.utils', 'goog.async.Deferred', 'clojure.string']);
goog.addDependency("../cljs/spec/impl/gen.js", ['cljs.spec.impl.gen'], ['cljs.core']);
goog.addDependency("../clojure/walk.js", ['clojure.walk'], ['cljs.core']);
goog.addDependency("../cljs/spec.js", ['cljs.spec'], ['cljs.core', 'goog.object', 'cljs.spec.impl.gen', 'clojure.string', 'clojure.walk']);
goog.addDependency("../cljs/repl.js", ['cljs.repl'], ['cljs.core', 'cljs.spec']);
goog.addDependency("../figwheel/client/socket.js", ['figwheel.client.socket'], ['cljs.core', 'figwheel.client.utils', 'cljs.reader']);
goog.addDependency("../figwheel/client/heads_up.js", ['figwheel.client.heads_up'], ['goog.dom', 'goog.string', 'cljs.core', 'goog.dom.dataset', 'goog.object', 'cljs.core.async', 'cljs.pprint', 'figwheel.client.utils', 'figwheel.client.socket', 'clojure.string']);
goog.addDependency("../figwheel/client.js", ['figwheel.client'], ['goog.userAgent.product', 'goog.Uri', 'cljs.core', 'goog.object', 'cljs.core.async', 'figwheel.client.file_reloading', 'figwheel.client.utils', 'cljs.repl', 'figwheel.client.heads_up', 'figwheel.client.socket', 'clojure.string', 'cljs.reader']);
goog.addDependency("../patterning/maths.js", ['patterning.maths'], ['cljs.core']);
goog.addDependency("../clojure/data.js", ['clojure.data'], ['cljs.core', 'clojure.set']);
goog.addDependency("../patterning/sshapes.js", ['patterning.sshapes'], ['cljs.core', 'patterning.maths', 'clojure.data']);
goog.addDependency("../patterning/groups.js", ['patterning.groups'], ['patterning.sshapes', 'cljs.core', 'patterning.maths', 'clojure.set']);
goog.addDependency("../patterning/strings.js", ['patterning.strings'], ['goog.string', 'cljs.core', 'goog.string.format']);
goog.addDependency("../patterning/color.js", ['patterning.color'], ['cljs.core', 'patterning.maths', 'patterning.strings']);
goog.addDependency("../patterning/view.js", ['patterning.view'], ['patterning.sshapes', 'patterning.groups', 'cljs.core', 'patterning.maths', 'patterning.color', 'patterning.strings', 'clojure.string']);
goog.addDependency("../patterning/macros.js", ['patterning.macros'], ['cljs.core']);
goog.addDependency("../patterning/layouts.js", ['patterning.layouts'], ['patterning.groups', 'cljs.core', 'patterning.maths']);
goog.addDependency("../patterning/library/std.js", ['patterning.library.std'], ['patterning.sshapes', 'patterning.macros', 'patterning.groups', 'cljs.core', 'patterning.maths', 'patterning.layouts']);
goog.addDependency("../create-react-class.inc.js", ['cljsjs.create_react_class'], ['cljsjs.react']);
goog.addDependency("../reagent/interop.js", ['reagent.interop'], ['cljs.core']);
goog.addDependency("../reagent/debug.js", ['reagent.debug'], ['cljs.core']);
goog.addDependency("../reagent/impl/util.js", ['reagent.impl.util'], ['cljsjs.create_react_class', 'reagent.interop', 'cljs.core', 'cljsjs.react', 'reagent.debug', 'clojure.string']);
goog.addDependency("../reagent/impl/batching.js", ['reagent.impl.batching'], ['reagent.impl.util', 'reagent.interop', 'cljs.core', 'reagent.debug', 'clojure.string']);
goog.addDependency("../reagent/ratom.js", ['reagent.ratom'], ['reagent.impl.util', 'cljs.core', 'reagent.impl.batching', 'clojure.set', 'reagent.debug']);
goog.addDependency("../reagent/impl/component.js", ['reagent.impl.component'], ['reagent.impl.util', 'reagent.interop', 'reagent.ratom', 'cljs.core', 'reagent.impl.batching', 'reagent.debug']);
goog.addDependency("../reagent/impl/template.js", ['reagent.impl.template'], ['reagent.impl.util', 'reagent.interop', 'reagent.ratom', 'cljs.core', 'reagent.impl.batching', 'reagent.impl.component', 'reagent.debug', 'clojure.string', 'clojure.walk']);
goog.addDependency("../reagent/dom.js", ['reagent.dom'], ['reagent.impl.util', 'reagent.interop', 'reagent.ratom', 'cljs.core', 'reagent.impl.template', 'reagent.impl.batching', 'cljsjs.react.dom', 'reagent.debug']);
goog.addDependency("../reagent/core.js", ['reagent.core'], ['reagent.impl.util', 'reagent.interop', 'reagent.ratom', 'cljs.core', 'reagent.impl.template', 'reagent.impl.batching', 'reagent.impl.component', 'reagent.debug', 'reagent.dom']);
goog.addDependency("../present/core.js", ['present.core'], ['patterning.sshapes', 'patterning.view', 'patterning.library.std', 'patterning.groups', 'reagent.core', 'cljs.core', 'patterning.color', 'sablono.core', 'patterning.layouts']);
goog.addDependency("../figwheel/connect/devcards.js", ['figwheel.connect.devcards'], ['devcards.core', 'cljs.core', 'figwheel.client', 'figwheel.client.utils', 'present.core']);
