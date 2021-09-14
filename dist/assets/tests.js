'use strict';

define("simple-auth-app/tests/helpers/data-transfer", ["exports", "ember-drag-drop/test-support/helpers/data-transfer"], function (_exports, _dataTransfer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dataTransfer.default;
    }
  });
});
define("simple-auth-app/tests/helpers/drag-drop", ["exports", "ember-drag-drop/test-support/helpers/drag-drop"], function (_exports, _dragDrop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  var _exportNames = {};
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dragDrop.default;
    }
  });
  Object.keys(_dragDrop).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    if (key in _exports && _exports[key] === _dragDrop[key]) return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function () {
        return _dragDrop[key];
      }
    });
  });
});
define("simple-auth-app/tests/helpers/ember-drag-drop", ["exports", "simple-auth-app/tests/helpers/data-transfer"], function (_exports, _dataTransfer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.drag = drag;

  function drop($dragHandle, dropCssPath, dragEvent) {
    let dropTarget = document.querySelector(dropCssPath);

    if (dropTarget.length === 0) {
      throw new Error(`There are no drop targets by the given selector: '${dropCssPath}'`);
    }

    Ember.run(() => {
      triggerEvent(dropTarget, 'dragover', _dataTransfer.default.makeMockEvent());
    });
    Ember.run(() => {
      triggerEvent(dropTarget, 'drop', _dataTransfer.default.makeMockEvent(dragEvent.dataTransfer.get('data.payload')));
    });
    Ember.run(() => {
      triggerEvent($dragHandle, 'dragend', _dataTransfer.default.makeMockEvent());
    });
  }

  function drag(cssPath, options = {}) {
    let dragEvent = _dataTransfer.default.makeMockEvent();

    let dragHandle = document.querySelector(cssPath);
    Ember.run(() => {
      triggerEvent(dragHandle, 'mouseover');
    });
    Ember.run(() => {
      triggerEvent(dragHandle, 'dragstart', dragEvent);
    });
    andThen(function () {
      if (options.beforeDrop) {
        options.beforeDrop.call();
      }
    });
    andThen(function () {
      if (options.drop) {
        drop(dragHandle, options.drop, dragEvent);
      }
    });
  }
});
define("simple-auth-app/tests/helpers/mock-event", ["exports", "ember-drag-drop/test-support/helpers/mock-event"], function (_exports, _mockEvent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  var _exportNames = {};
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mockEvent.default;
    }
  });
  Object.keys(_mockEvent).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    if (key in _exports && _exports[key] === _mockEvent[key]) return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function () {
        return _mockEvent[key];
      }
    });
  });
});
define("simple-auth-app/tests/integration/components/navbar-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | navbar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Navbar />
      */
      {
        "id": "Fxy8E5qS",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"navbar\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Navbar>
              template block text
            </Navbar>
          
      */
      {
        "id": "kiRmRujy",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"navbar\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("simple-auth-app/tests/integration/components/todolist-class-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | todolist-class', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <TodolistClass />
      */
      {
        "id": "Kzmxca5T",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"todolist-class\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <TodolistClass>
              template block text
            </TodolistClass>
          
      */
      {
        "id": "chPbKdkl",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"todolist-class\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("simple-auth-app/tests/integration/components/todolist-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | todolist', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Todolist />
      */
      {
        "id": "PUfj5PEZ",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"todolist\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Todolist>
              template block text
            </Todolist>
          
      */
      {
        "id": "TG4zHF1p",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"todolist\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("simple-auth-app/tests/test-helper", ["simple-auth-app/app", "simple-auth-app/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("simple-auth-app/tests/unit/adapters/todo-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Adapter | todo', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:todo');
      assert.ok(adapter);
    });
  });
});
define("simple-auth-app/tests/unit/controllers/login-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:login');
      assert.ok(controller);
    });
  });
});
define("simple-auth-app/tests/unit/controllers/todo-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | todo', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:todo');
      assert.ok(controller);
    });
  });
});
define("simple-auth-app/tests/unit/models/todo-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | todo', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('todo', {});
      assert.ok(model);
    });
  });
});
define("simple-auth-app/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("simple-auth-app/tests/unit/routes/login-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:login');
      assert.ok(route);
    });
  });
});
define("simple-auth-app/tests/unit/routes/todo-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | todo', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:todo');
      assert.ok(route);
    });
  });
});
define("simple-auth-app/tests/unit/serializers/todo-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Serializer | todo', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let serializer = store.serializerFor('todo');
      assert.ok(serializer);
    });
    (0, _qunit.test)('it serializes records', function (assert) {
      let store = this.owner.lookup('service:store');
      let record = store.createRecord('todo', {});
      let serializedRecord = record.serialize();
      assert.ok(serializedRecord);
    });
  });
});
define("simple-auth-app/tests/unit/services/testservice-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | testservice', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:testservice');
      assert.ok(service);
    });
  });
});
define('simple-auth-app/config/environment', [], function() {
  var prefix = 'simple-auth-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('simple-auth-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
