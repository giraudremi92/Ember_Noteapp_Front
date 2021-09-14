'use strict';



;define("simple-auth-app/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("simple-auth-app/adapters/application", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // app/adapters/application.js
  var _default = _emberData.default.JSONAPIAdapter.extend({});

  _exports.default = _default;
});
;define("simple-auth-app/adapters/drf", ["exports", "ember-django-adapter/adapters/drf", "simple-auth-app/config/environment"], function (_exports, _drf, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _drf.default.extend({
    host: Ember.computed(function () {
      return _environment.default.APP.API_HOST;
    }),
    namespace: Ember.computed(function () {
      return _environment.default.APP.API_NAMESPACE;
    })
  });

  _exports.default = _default;
});
;define("simple-auth-app/adapters/todo", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.JSONAPIAdapter.extend({
    urlForCreateRecord() {
      return this._super(...arguments) + '/';
    },

    urlForUpdateRecord() {
      return this._super(...arguments) + '/';
    },

    host: 'http://127.0.0.1:8000',
    session: Ember.inject.service('session'),
    headers: Ember.computed('session.isAuthenticated', 'session.data.authenticated.token', function () {
      if (this.session.isAuthenticated) {
        return {
          Authorization: `Token ${this.session.data.authenticated.token}`
        };
      } else {
        return {};
      }
    }),

    handleResponse(status) {
      if (status === 401 && this.session.isAuthenticated) {
        this.session.invalidate();
      }

      return this._super(...arguments);
    }

  });

  _exports.default = _default;
});
;define("simple-auth-app/app", ["exports", "ember-resolver", "ember-load-initializers", "simple-auth-app/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("simple-auth-app/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("simple-auth-app/components/draggable-object-target", ["exports", "ember-drag-drop/components/draggable-object-target"], function (_exports, _draggableObjectTarget) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _draggableObjectTarget.default;
  _exports.default = _default;
});
;define("simple-auth-app/components/draggable-object", ["exports", "ember-drag-drop/components/draggable-object"], function (_exports, _draggableObject) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _draggableObject.default;
  _exports.default = _default;
});
;define("simple-auth-app/components/navbar", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
  	<div class="navbar-brand">
  		<a
  			role="button"
  			class="navbar-burger"
  			aria-label="menu"
  			aria-expanded="false"
  			data-target="navbarBasicExample"
  		>
  			<span aria-hidden="true"></span>
  			<span aria-hidden="true"></span>
  			<span aria-hidden="true"></span>
  		</a>
  	</div>
  
  	<div id="navbarBasicExample" class="navbar-menu">
  		<div class="navbar-start">
  			<a class="navbar-item">
  				{{#link-to "index"}}
  					Home
  				{{/link-to}}
  
  			</a>
  
  			<a class="navbar-item">
  
  				{{#link-to "todo"}}
  					Todos
  				{{/link-to}}
  			</a>
  
  		</div>
  
  		<div class="navbar-end">
  			<div class="navbar-item">
  				<div class="buttons">
  					<a class="button is-light">
  						{{yield}}
  					</a>
  				</div>
  			</div>
  		</div>
  	</div>
  </nav>
  
  */
  {
    "id": "lVuo6mDI",
    "block": "[[[10,\"nav\"],[14,0,\"navbar is-primary\"],[14,\"role\",\"navigation\"],[14,\"aria-label\",\"main navigation\"],[12],[1,\"\\n\\t\"],[10,0],[14,0,\"navbar-brand\"],[12],[1,\"\\n\\t\\t\"],[10,3],[14,\"role\",\"button\"],[14,0,\"navbar-burger\"],[14,\"aria-label\",\"menu\"],[14,\"aria-expanded\",\"false\"],[14,\"data-target\",\"navbarBasicExample\"],[12],[1,\"\\n\\t\\t\\t\"],[10,1],[14,\"aria-hidden\",\"true\"],[12],[13],[1,\"\\n\\t\\t\\t\"],[10,1],[14,\"aria-hidden\",\"true\"],[12],[13],[1,\"\\n\\t\\t\\t\"],[10,1],[14,\"aria-hidden\",\"true\"],[12],[13],[1,\"\\n\\t\\t\"],[13],[1,\"\\n\\t\"],[13],[1,\"\\n\\n\\t\"],[10,0],[14,1,\"navbarBasicExample\"],[14,0,\"navbar-menu\"],[12],[1,\"\\n\\t\\t\"],[10,0],[14,0,\"navbar-start\"],[12],[1,\"\\n\\t\\t\\t\"],[10,3],[14,0,\"navbar-item\"],[12],[1,\"\\n\"],[6,[39,0],null,[[\"route\"],[\"index\"]],[[\"default\"],[[[[1,\"\\t\\t\\t\\t\\tHome\\n\"]],[]]]]],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\"],[10,3],[14,0,\"navbar-item\"],[12],[1,\"\\n\\n\"],[6,[39,0],null,[[\"route\"],[\"todo\"]],[[\"default\"],[[[[1,\"\\t\\t\\t\\t\\tTodos\\n\"]],[]]]]],[1,\"\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\"],[10,0],[14,0,\"navbar-end\"],[12],[1,\"\\n\\t\\t\\t\"],[10,0],[14,0,\"navbar-item\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"buttons\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,3],[14,0,\"button is-light\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[18,1,null],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\"],[13],[1,\"\\n\\t\"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"&default\"],false,[\"link-to\",\"yield\"]]",
    "moduleName": "simple-auth-app/components/navbar.hbs",
    "isStrictMode": false
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("simple-auth-app/components/object-bin", ["exports", "ember-drag-drop/components/object-bin"], function (_exports, _objectBin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _objectBin.default;
  _exports.default = _default;
});
;define("simple-auth-app/components/sortable-objects", ["exports", "ember-drag-drop/components/sortable-objects"], function (_exports, _sortableObjects) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _sortableObjects.default;
  _exports.default = _default;
});
;define("simple-auth-app/components/todolist", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _descriptor, _descriptor2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="container drag-section">
  
  	{{#each @t as |d|}}
  
  		<div
  			id={{d.id}}
  			class="notification drag
  				{{d.color}}
  				draggable is-inline-flex"
  			style="transform: translate({{d.coordx}}px, {{d.coordy}}px);"
  		>
  			<button
  				class="delete"
  				onclick={{action DeleteNote}}
  			></button>
  			<div>
  				<h1 class="title is-5">
  					{{d.title}}
  				</h1>
  				<p class="description">{{d.description}}</p>
  			</div>
  
  			<div id="more" class="dropdown btn-more is-hoverable">
  				<div class="dropdown-trigger">
  					<button
  						class="button"
  						aria-haspopup="true"
  						aria-controls="dropdown-menu3"
  					>
  						<span class="icon">
  							<i
  								class="fas fa-angle-down"
  								aria-hidden="true"
  							></i>
  						</span>
  					</button>
  				</div>
  				<div
  					class="dropdown-menu"
  					id="dropdown-menu3"
  					role="menu"
  				>
  					<div class="dropdown-content">
  						<a
  							class="dropdown-item"
  							onclick={{action Color}}
  						>
  							<span class="icon">
  								<i
  									class="fas fa-exclamation"
  									aria-hidden="true"
  								></i>
  							</span>
  							Urgent note
  
  						</a>
  						<hr class="dropdown-divider" />
  						<a
  							href="#"
  							class="dropdown-item"
  							onclick={{action
  								ChangeNote
  							}}
  						>
  							<span class="icon">
  								<i
  									class="fas fa-edit"
  									aria-hidden="true"
  								></i>
  							</span>
  							Edit note
  						</a>
  					</div>
  				</div>
  			</div>
  
  		</div>
  	{{/each}}
  
  </div>
  
  <div id="ModalModifs" class="modal">
  	<div class="modal-background" onclick={{action UndoModal}}></div>
  	<div class="modal-card">
  		<header class="modal-card-head">
  			<p class="modal-card-title">Edit note</p>
  			<button
  				class="delete"
  				aria-label="close"
  				onclick={{action UndoModal}}
  			></button>
  		</header>
  		<section class="modal-card-body">
  			<div class="field">
  				<h1 class="title is-3">Title :</h1>
  				<input
  					id="textarea1"
  					class="input"
  					placeholder="Change note title"
  				/>
  			</div>
  			<div class="field">
  				<h1 class="title is-3">Description :</h1>
  				<textarea
  					id="textarea2"
  					class="textarea"
  				></textarea>
  			</div>
  
  		</section>
  		<footer class="modal-card-foot">
  			<button
  				class="button is-success"
  				onclick={{action ValideNote}}
  			>Update
  			</button>
  			<button
  				class="button"
  				onclick={{action UndoModal}}
  			>Cancel</button>
  		</footer>
  	</div>
  </div>
  
  */
  {
    "id": "9lCmCUZB",
    "block": "[[[10,0],[14,0,\"container drag-section\"],[12],[1,\"\\n\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,1]],null]],null],null,[[[1,\"\\n\\t\\t\"],[10,0],[15,1,[30,2,[\"id\"]]],[15,0,[29,[\"notification drag\\n\\t\\t\\t\\t\",[30,2,[\"color\"]],\"\\n\\t\\t\\t\\tdraggable is-inline-flex\"]]],[15,5,[29,[\"transform: translate(\",[30,2,[\"coordx\"]],\"px, \",[30,2,[\"coordy\"]],\"px);\"]]],[12],[1,\"\\n\\t\\t\\t\"],[10,\"button\"],[14,0,\"delete\"],[15,\"onclick\",[28,[37,2],[[30,0],[33,3]],null]],[12],[13],[1,\"\\n\\t\\t\\t\"],[10,0],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,\"h1\"],[14,0,\"title is-5\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[1,[30,2,[\"title\"]]],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[10,2],[14,0,\"description\"],[12],[1,[30,2,[\"description\"]]],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\\t\"],[10,0],[14,1,\"more\"],[14,0,\"dropdown btn-more is-hoverable\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"dropdown-trigger\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,\"button\"],[14,0,\"button\"],[14,\"aria-haspopup\",\"true\"],[14,\"aria-controls\",\"dropdown-menu3\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,1],[14,0,\"icon\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,\"i\"],[14,0,\"fas fa-angle-down\"],[14,\"aria-hidden\",\"true\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[10,0],[14,0,\"dropdown-menu\"],[14,1,\"dropdown-menu3\"],[14,\"role\",\"menu\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"dropdown-content\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,3],[14,0,\"dropdown-item\"],[15,\"onclick\",[28,[37,2],[[30,0],[33,4]],null]],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[14,0,\"icon\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"i\"],[14,0,\"fas fa-exclamation\"],[14,\"aria-hidden\",\"true\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\tUrgent note\\n\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,\"hr\"],[14,0,\"dropdown-divider\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,3],[14,6,\"#\"],[14,0,\"dropdown-item\"],[15,\"onclick\",[28,[37,2],[[30,0],[33,5]],null]],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,1],[14,0,\"icon\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"i\"],[14,0,\"fas fa-edit\"],[14,\"aria-hidden\",\"true\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\tEdit note\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\"],[13],[1,\"\\n\"]],[2]],null],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,0],[14,1,\"ModalModifs\"],[14,0,\"modal\"],[12],[1,\"\\n\\t\"],[10,0],[14,0,\"modal-background\"],[15,\"onclick\",[28,[37,2],[[30,0],[33,6]],null]],[12],[13],[1,\"\\n\\t\"],[10,0],[14,0,\"modal-card\"],[12],[1,\"\\n\\t\\t\"],[10,\"header\"],[14,0,\"modal-card-head\"],[12],[1,\"\\n\\t\\t\\t\"],[10,2],[14,0,\"modal-card-title\"],[12],[1,\"Edit note\"],[13],[1,\"\\n\\t\\t\\t\"],[10,\"button\"],[14,0,\"delete\"],[14,\"aria-label\",\"close\"],[15,\"onclick\",[28,[37,2],[[30,0],[33,6]],null]],[12],[13],[1,\"\\n\\t\\t\"],[13],[1,\"\\n\\t\\t\"],[10,\"section\"],[14,0,\"modal-card-body\"],[12],[1,\"\\n\\t\\t\\t\"],[10,0],[14,0,\"field\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,\"h1\"],[14,0,\"title is-3\"],[12],[1,\"Title :\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[10,\"input\"],[14,1,\"textarea1\"],[14,0,\"input\"],[14,\"placeholder\",\"Change note title\"],[12],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[10,0],[14,0,\"field\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,\"h1\"],[14,0,\"title is-3\"],[12],[1,\"Description :\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[10,\"textarea\"],[14,1,\"textarea2\"],[14,0,\"textarea\"],[12],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\n\\t\\t\"],[13],[1,\"\\n\\t\\t\"],[10,\"footer\"],[14,0,\"modal-card-foot\"],[12],[1,\"\\n\\t\\t\\t\"],[10,\"button\"],[14,0,\"button is-success\"],[15,\"onclick\",[28,[37,2],[[30,0],[33,7]],null]],[12],[1,\"Update\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[10,\"button\"],[14,0,\"button\"],[15,\"onclick\",[28,[37,2],[[30,0],[33,6]],null]],[12],[1,\"Cancel\"],[13],[1,\"\\n\\t\\t\"],[13],[1,\"\\n\\t\"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"@t\",\"d\"],false,[\"each\",\"-track-array\",\"action\",\"DeleteNote\",\"Color\",\"ChangeNote\",\"UndoModal\",\"ValideNote\"]]",
    "moduleName": "simple-auth-app/components/todolist.hbs",
    "isStrictMode": false
  });

  let TodolistComponent = (_dec = Ember._tracked, _dec2 = Ember.inject.service, _dec3 = Ember._action, _dec4 = Ember._action, _dec5 = Ember._action, _dec6 = Ember._action, _dec7 = Ember._action, (_class = class TodolistComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "Noteid", _descriptor, this);

      _initializerDefineProperty(this, "store", _descriptor2, this);
    }

    UndoModal(event) {
      // Inactive button
      document.getElementById('ModalModifs').classList.remove('is-active');
    }

    Color(event) {
      //Get id de la note
      let id = event.target.parentNode.parentElement.parentElement.parentElement.id; // Update de la note avec la couleur rouge

      this.store.findRecord('todo', id).then(function (todo) {
        // ...after the record has loaded
        todo.color = 'is-danger';
        todo.save();
      });
    }

    ChangeNote(event) {
      let id = event.target.parentNode.parentElement.parentElement.parentElement.id;
      this.Noteid = id;
      this.store.findRecord('todo', this.Noteid).then(function (todo) {
        document.getElementById('textarea1').value = todo.title;
        document.getElementById('textarea2').value = todo.description;
      });
      document.getElementById('ModalModifs').classList.add("is-active");
    }

    ValideNote(event) {
      this.store.findRecord('todo', this.Noteid).then(function (todo) {
        todo.title = document.getElementById('textarea1').value;
        todo.description = document.getElementById('textarea2').value;

        if (todo.title == '') {
          alert('Note title must not be empty');
          document.getElementById('textarea1').value = 'My Title';
          todo.title = 'My title';
          todo.description = document.getElementById('textarea2').value;
        } else {
          todo.save();
          document.getElementById('ModalModifs').classList.remove("is-active");
        }
      });
    }

    DeleteNote(event) {
      //id de la note parentElement
      var id = event.target.parentElement.id;
      let todo = this.store.peekRecord('todo', id); //Cherche la data a supprimer

      todo.destroyRecord(); // Suppression de la DB
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "Noteid", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "store", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "UndoModal", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "UndoModal"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "Color", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "Color"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "ChangeNote", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "ChangeNote"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "ValideNote", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "ValideNote"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "DeleteNote", [_dec7], Object.getOwnPropertyDescriptor(_class.prototype, "DeleteNote"), _class.prototype)), _class));
  _exports.default = TodolistComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, TodolistComponent);
});
;define("simple-auth-app/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("simple-auth-app/controllers/application", ["exports", "interactjs"], function (_exports, _interactjs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ApplicationController = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, _dec3 = Ember._action, _dec4 = Ember._action, (_class = class ApplicationController extends Ember.Controller {
    constructor(owner, args) {
      super(owner, args);

      _initializerDefineProperty(this, "store", _descriptor, this);

      _initializerDefineProperty(this, "session", _descriptor2, this);

      var Notifexecuted = false;
      let store = this.store; // target elements with the "draggable" class

      (0, _interactjs.default)('.draggable').draggable({
        //ignoreFrom: '',
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        modifiers: [_interactjs.default.modifiers.restrictRect({
          restriction: '.drag-section',
          endOnly: true
        })],
        // enable autoScroll
        autoScroll: true,
        listeners: {
          // call this function on every dragmove event
          move: dragMoveListener,

          // call this function on every dragend event
          end(event) {
            if (Notifexecuted == false) {
              Notifexecuted = true;
            }

            var target = event.target; // keep the dragged position in the data-x/data-y attributes

            var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
            var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy; // Get if of the Note

            let id = event.target.id; //Acces au store dans la focntion grace a la variable store et au contructor
            //Push note coordinates

            store.findRecord('todo', id).then(function (todo) {
              todo.coordx = x;
              todo.coordy = y;
              todo.save();
            });
            /*var textEl = event.target.querySelector('p')
            *
                   textEl && (textEl.textContent =
            'moved a distance of ' +
            (Math.sqrt(Math.pow(event.pageX - event.x-1, 2) +
                       Math.pow(event.pageY - event.y0, 2) | 0))
              .toFixed(2) + 'px')
              */
          }

        }
      });

      function dragMoveListener(event) {
        var target = event.target; // keep the dragged position in the data-x/data-y attributes

        var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy; // translate the element

        target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'; // update the posiion attributes

        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
      } // this function is used later in the resizing and gesture demos


      window.dragMoveListener = dragMoveListener;
    } //End of contstructor
    //
    //


    invalidateSession() {
      this.session.invalidate();
    }

    CloseNotif() {
      document.getElementById('notedeplacement').style.display = 'none';
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "session", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "invalidateSession", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "invalidateSession"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "CloseNotif", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "CloseNotif"), _class.prototype)), _class));
  _exports.default = ApplicationController;
});
;define("simple-auth-app/controllers/login", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _obj, _init;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  var _default = Ember.Controller.extend((_dec = Ember._tracked, (_obj = {
    show: 'not-active',
    session: Ember.inject.service('session'),
    actions: {
      authenticate: async function () {
        const credentials = this.getProperties('username', 'password');
        const authenticator = 'authenticator:token'; // or 'authenticator:jwt'
        // authenticate

        await this.session.authenticate(authenticator, credentials).catch(err => {
          if (err.status === 400) {
            this.show = 'actived';
          }
        }); //Redirection to todo Route if authenticate

        this.session.handleAuthentication('todo');
      }
    }
  }, (_applyDecoratedDescriptor(_obj, "show", [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, "show"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init;
    }
  }), _obj)), _obj)));

  _exports.default = _default;
});
;define("simple-auth-app/controllers/todo", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let TodoController = (_dec = Ember.inject.service, _dec2 = Ember._action, (_class = class TodoController extends Ember.Controller {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "store", _descriptor, this);
    }

    add() {
      let todo = this.store.createRecord('todo', {
        title: 'Title',
        color: 'is-warning',
        description: 'Note description'
      });
      todo.save(); //return getOwner(this).lookup('route:todo').refresh();
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "add", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "add"), _class.prototype)), _class));
  _exports.default = TodoController;
});
;define("simple-auth-app/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("simple-auth-app/helpers/app-version", ["exports", "simple-auth-app/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("simple-auth-app/helpers/append", ["exports", "ember-composable-helpers/helpers/append"], function (_exports, _append) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _append.default;
    }
  });
  Object.defineProperty(_exports, "append", {
    enumerable: true,
    get: function () {
      return _append.append;
    }
  });
});
;define("simple-auth-app/helpers/call", ["exports", "ember-composable-helpers/helpers/call"], function (_exports, _call) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _call.default;
    }
  });
  Object.defineProperty(_exports, "call", {
    enumerable: true,
    get: function () {
      return _call.call;
    }
  });
});
;define("simple-auth-app/helpers/chunk", ["exports", "ember-composable-helpers/helpers/chunk"], function (_exports, _chunk) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _chunk.default;
    }
  });
  Object.defineProperty(_exports, "chunk", {
    enumerable: true,
    get: function () {
      return _chunk.chunk;
    }
  });
});
;define("simple-auth-app/helpers/compact", ["exports", "ember-composable-helpers/helpers/compact"], function (_exports, _compact) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compact.default;
    }
  });
});
;define("simple-auth-app/helpers/compute", ["exports", "ember-composable-helpers/helpers/compute"], function (_exports, _compute) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compute.default;
    }
  });
  Object.defineProperty(_exports, "compute", {
    enumerable: true,
    get: function () {
      return _compute.compute;
    }
  });
});
;define("simple-auth-app/helpers/contains", ["exports", "ember-composable-helpers/helpers/contains"], function (_exports, _contains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _contains.default;
    }
  });
  Object.defineProperty(_exports, "contains", {
    enumerable: true,
    get: function () {
      return _contains.contains;
    }
  });
});
;define("simple-auth-app/helpers/dec", ["exports", "ember-composable-helpers/helpers/dec"], function (_exports, _dec) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dec.default;
    }
  });
  Object.defineProperty(_exports, "dec", {
    enumerable: true,
    get: function () {
      return _dec.dec;
    }
  });
});
;define("simple-auth-app/helpers/drop", ["exports", "ember-composable-helpers/helpers/drop"], function (_exports, _drop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _drop.default;
    }
  });
});
;define("simple-auth-app/helpers/entries", ["exports", "ember-composable-helpers/helpers/entries"], function (_exports, _entries) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _entries.default;
    }
  });
  Object.defineProperty(_exports, "entries", {
    enumerable: true,
    get: function () {
      return _entries.entries;
    }
  });
});
;define("simple-auth-app/helpers/filter-by", ["exports", "ember-composable-helpers/helpers/filter-by"], function (_exports, _filterBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filterBy.default;
    }
  });
});
;define("simple-auth-app/helpers/filter", ["exports", "ember-composable-helpers/helpers/filter"], function (_exports, _filter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filter.default;
    }
  });
});
;define("simple-auth-app/helpers/find-by", ["exports", "ember-composable-helpers/helpers/find-by"], function (_exports, _findBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _findBy.default;
    }
  });
});
;define("simple-auth-app/helpers/flatten", ["exports", "ember-composable-helpers/helpers/flatten"], function (_exports, _flatten) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flatten.default;
    }
  });
  Object.defineProperty(_exports, "flatten", {
    enumerable: true,
    get: function () {
      return _flatten.flatten;
    }
  });
});
;define("simple-auth-app/helpers/from-entries", ["exports", "ember-composable-helpers/helpers/from-entries"], function (_exports, _fromEntries) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fromEntries.default;
    }
  });
  Object.defineProperty(_exports, "fromEntries", {
    enumerable: true,
    get: function () {
      return _fromEntries.fromEntries;
    }
  });
});
;define("simple-auth-app/helpers/group-by", ["exports", "ember-composable-helpers/helpers/group-by"], function (_exports, _groupBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _groupBy.default;
    }
  });
});
;define("simple-auth-app/helpers/has-next", ["exports", "ember-composable-helpers/helpers/has-next"], function (_exports, _hasNext) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasNext.default;
    }
  });
  Object.defineProperty(_exports, "hasNext", {
    enumerable: true,
    get: function () {
      return _hasNext.hasNext;
    }
  });
});
;define("simple-auth-app/helpers/has-previous", ["exports", "ember-composable-helpers/helpers/has-previous"], function (_exports, _hasPrevious) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(_exports, "hasPrevious", {
    enumerable: true,
    get: function () {
      return _hasPrevious.hasPrevious;
    }
  });
});
;define("simple-auth-app/helpers/inc", ["exports", "ember-composable-helpers/helpers/inc"], function (_exports, _inc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inc.default;
    }
  });
  Object.defineProperty(_exports, "inc", {
    enumerable: true,
    get: function () {
      return _inc.inc;
    }
  });
});
;define("simple-auth-app/helpers/includes", ["exports", "ember-composable-helpers/helpers/includes"], function (_exports, _includes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _includes.default;
    }
  });
  Object.defineProperty(_exports, "includes", {
    enumerable: true,
    get: function () {
      return _includes.includes;
    }
  });
});
;define("simple-auth-app/helpers/intersect", ["exports", "ember-composable-helpers/helpers/intersect"], function (_exports, _intersect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _intersect.default;
    }
  });
});
;define("simple-auth-app/helpers/invoke", ["exports", "ember-composable-helpers/helpers/invoke"], function (_exports, _invoke) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _invoke.default;
    }
  });
  Object.defineProperty(_exports, "invoke", {
    enumerable: true,
    get: function () {
      return _invoke.invoke;
    }
  });
});
;define("simple-auth-app/helpers/join", ["exports", "ember-composable-helpers/helpers/join"], function (_exports, _join) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _join.default;
    }
  });
});
;define("simple-auth-app/helpers/keys", ["exports", "ember-composable-helpers/helpers/keys"], function (_exports, _keys) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _keys.default;
    }
  });
  Object.defineProperty(_exports, "keys", {
    enumerable: true,
    get: function () {
      return _keys.keys;
    }
  });
});
;define("simple-auth-app/helpers/loc", ["exports", "@ember/string/helpers/loc"], function (_exports, _loc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _loc.default;
    }
  });
  Object.defineProperty(_exports, "loc", {
    enumerable: true,
    get: function () {
      return _loc.loc;
    }
  });
});
;define("simple-auth-app/helpers/map-by", ["exports", "ember-composable-helpers/helpers/map-by"], function (_exports, _mapBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mapBy.default;
    }
  });
});
;define("simple-auth-app/helpers/map", ["exports", "ember-composable-helpers/helpers/map"], function (_exports, _map) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _map.default;
    }
  });
});
;define("simple-auth-app/helpers/next", ["exports", "ember-composable-helpers/helpers/next"], function (_exports, _next) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _next.default;
    }
  });
  Object.defineProperty(_exports, "next", {
    enumerable: true,
    get: function () {
      return _next.next;
    }
  });
});
;define("simple-auth-app/helpers/noop", ["exports", "ember-composable-helpers/helpers/noop"], function (_exports, _noop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _noop.default;
    }
  });
  Object.defineProperty(_exports, "noop", {
    enumerable: true,
    get: function () {
      return _noop.noop;
    }
  });
});
;define("simple-auth-app/helpers/object-at", ["exports", "ember-composable-helpers/helpers/object-at"], function (_exports, _objectAt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _objectAt.default;
    }
  });
  Object.defineProperty(_exports, "objectAt", {
    enumerable: true,
    get: function () {
      return _objectAt.objectAt;
    }
  });
});
;define("simple-auth-app/helpers/optional", ["exports", "ember-composable-helpers/helpers/optional"], function (_exports, _optional) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _optional.default;
    }
  });
  Object.defineProperty(_exports, "optional", {
    enumerable: true,
    get: function () {
      return _optional.optional;
    }
  });
});
;define("simple-auth-app/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("simple-auth-app/helpers/pick", ["exports", "ember-composable-helpers/helpers/pick"], function (_exports, _pick) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pick.default;
    }
  });
  Object.defineProperty(_exports, "pick", {
    enumerable: true,
    get: function () {
      return _pick.pick;
    }
  });
});
;define("simple-auth-app/helpers/pipe-action", ["exports", "ember-composable-helpers/helpers/pipe-action"], function (_exports, _pipeAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipeAction.default;
    }
  });
});
;define("simple-auth-app/helpers/pipe", ["exports", "ember-composable-helpers/helpers/pipe"], function (_exports, _pipe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipe.default;
    }
  });
  Object.defineProperty(_exports, "pipe", {
    enumerable: true,
    get: function () {
      return _pipe.pipe;
    }
  });
});
;define("simple-auth-app/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("simple-auth-app/helpers/previous", ["exports", "ember-composable-helpers/helpers/previous"], function (_exports, _previous) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _previous.default;
    }
  });
  Object.defineProperty(_exports, "previous", {
    enumerable: true,
    get: function () {
      return _previous.previous;
    }
  });
});
;define("simple-auth-app/helpers/queue", ["exports", "ember-composable-helpers/helpers/queue"], function (_exports, _queue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _queue.default;
    }
  });
  Object.defineProperty(_exports, "queue", {
    enumerable: true,
    get: function () {
      return _queue.queue;
    }
  });
});
;define("simple-auth-app/helpers/range", ["exports", "ember-composable-helpers/helpers/range"], function (_exports, _range) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _range.default;
    }
  });
  Object.defineProperty(_exports, "range", {
    enumerable: true,
    get: function () {
      return _range.range;
    }
  });
});
;define("simple-auth-app/helpers/reduce", ["exports", "ember-composable-helpers/helpers/reduce"], function (_exports, _reduce) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reduce.default;
    }
  });
});
;define("simple-auth-app/helpers/reject-by", ["exports", "ember-composable-helpers/helpers/reject-by"], function (_exports, _rejectBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rejectBy.default;
    }
  });
});
;define("simple-auth-app/helpers/repeat", ["exports", "ember-composable-helpers/helpers/repeat"], function (_exports, _repeat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _repeat.default;
    }
  });
  Object.defineProperty(_exports, "repeat", {
    enumerable: true,
    get: function () {
      return _repeat.repeat;
    }
  });
});
;define("simple-auth-app/helpers/reverse", ["exports", "ember-composable-helpers/helpers/reverse"], function (_exports, _reverse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reverse.default;
    }
  });
});
;define("simple-auth-app/helpers/shuffle", ["exports", "ember-composable-helpers/helpers/shuffle"], function (_exports, _shuffle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _shuffle.default;
    }
  });
  Object.defineProperty(_exports, "shuffle", {
    enumerable: true,
    get: function () {
      return _shuffle.shuffle;
    }
  });
});
;define("simple-auth-app/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("simple-auth-app/helpers/slice", ["exports", "ember-composable-helpers/helpers/slice"], function (_exports, _slice) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slice.default;
    }
  });
});
;define("simple-auth-app/helpers/sort-by", ["exports", "ember-composable-helpers/helpers/sort-by"], function (_exports, _sortBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sortBy.default;
    }
  });
});
;define("simple-auth-app/helpers/take", ["exports", "ember-composable-helpers/helpers/take"], function (_exports, _take) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _take.default;
    }
  });
});
;define("simple-auth-app/helpers/toggle-action", ["exports", "ember-composable-helpers/helpers/toggle-action"], function (_exports, _toggleAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggleAction.default;
    }
  });
});
;define("simple-auth-app/helpers/toggle", ["exports", "ember-composable-helpers/helpers/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  Object.defineProperty(_exports, "toggle", {
    enumerable: true,
    get: function () {
      return _toggle.toggle;
    }
  });
});
;define("simple-auth-app/helpers/union", ["exports", "ember-composable-helpers/helpers/union"], function (_exports, _union) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _union.default;
    }
  });
});
;define("simple-auth-app/helpers/values", ["exports", "ember-composable-helpers/helpers/values"], function (_exports, _values) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _values.default;
    }
  });
  Object.defineProperty(_exports, "values", {
    enumerable: true,
    get: function () {
      return _values.values;
    }
  });
});
;define("simple-auth-app/helpers/without", ["exports", "ember-composable-helpers/helpers/without"], function (_exports, _without) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _without.default;
    }
  });
  Object.defineProperty(_exports, "without", {
    enumerable: true,
    get: function () {
      return _without.without;
    }
  });
});
;define("simple-auth-app/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "simple-auth-app/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("simple-auth-app/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("simple-auth-app/initializers/coordinator-setup", ["exports", "simple-auth-app/models/coordinator"], function (_exports, _coordinator) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: "setup coordinator",
    initialize: function () {
      let app = arguments[1] || arguments[0];
      app.register("drag:coordinator", _coordinator.default);
    }
  };
  _exports.default = _default;
});
;define("simple-auth-app/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("simple-auth-app/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("simple-auth-app/initializers/ember-simple-auth", ["exports", "simple-auth-app/config/environment", "ember-simple-auth/configuration", "ember-simple-auth/initializers/setup-session", "ember-simple-auth/initializers/setup-session-service", "ember-simple-auth/initializers/setup-session-restoration"], function (_exports, _environment, _configuration, _setupSession, _setupSessionService, _setupSessionRestoration) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-simple-auth',

    initialize(registry) {
      const config = _environment.default['ember-simple-auth'] || {};
      config.rootURL = _environment.default.rootURL || _environment.default.baseURL;

      _configuration.default.load(config);

      (0, _setupSession.default)(registry);
      (0, _setupSessionService.default)(registry);
      (0, _setupSessionRestoration.default)(registry);
    }

  };
  _exports.default = _default;
});
;define("simple-auth-app/initializers/export-application-global", ["exports", "simple-auth-app/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("simple-auth-app/initializers/simple-auth-token", ["exports", "ember-simple-auth-token/authenticators/token", "ember-simple-auth-token/authenticators/jwt"], function (_exports, _token, _jwt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
    Ember Simple Auth Token's Initializer.
    By default load both the Token and JWT (with refresh) Authenticators.
  */
  var _default = {
    name: 'ember-simple-auth-token',
    before: 'ember-simple-auth',

    initialize(container) {
      container.register('authenticator:token', _token.default);
      container.register('authenticator:jwt', _jwt.default);
    }

  };
  _exports.default = _default;
});
;define("simple-auth-app/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("simple-auth-app/instance-initializers/ember-simple-auth", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // This is only needed for backwards compatibility and will be removed in the
  // next major release of ember-simple-auth. Unfortunately, there is no way to
  // deprecate this without hooking into Ember's internals…
  var _default = {
    name: 'ember-simple-auth',

    initialize() {}

  };
  _exports.default = _default;
});
;define("simple-auth-app/models/coordinator", ["exports", "simple-auth-app/models/obj-hash", "ember-drag-drop/utils/proxy-unproxy-objects"], function (_exports, _objHash, _proxyUnproxyObjects) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Object.extend(Ember.Evented, {
    objectMap: Ember.computed(function () {
      return _objHash.default.create();
    }),
    getObject: function (id, ops) {
      ops = ops || {};
      var payload = this.get('objectMap').getObj(id);

      if (payload.ops.source && !payload.ops.source.isDestroying && !payload.ops.source.isDestroyed) {
        const action = payload.ops.source['action']; // Support when action is a function

        if (typeof action === 'function') {
          action(payload.obj);
        } // Support when action is a string


        if (typeof action === 'string' && typeof payload.ops.source.target[action] === 'function') {
          payload.ops.source.target[action](payload.obj);
        }
      }

      if (payload.ops.target && !payload.ops.target.isDestroying && !payload.ops.target.isDestroyed) {
        const action = payload.ops.target['action']; // Support when action is a function

        if (typeof action === 'function') {
          action(payload.obj);
        } // Support when action is a string


        if (typeof action === 'string' && typeof payload.ops.target.source[action] === 'function') {
          payload.ops.target.source[action](payload.obj);
        }
      }

      this.trigger("objectMoved", {
        obj: (0, _proxyUnproxyObjects.unwrapper)(payload.obj),
        source: payload.ops.source,
        target: ops.target
      });
      return (0, _proxyUnproxyObjects.unwrapper)(payload.obj);
    },
    setObject: function (obj, ops) {
      ops = ops || {};
      return this.get('objectMap').add({
        obj: obj,
        ops: ops
      });
    }
  });

  _exports.default = _default;
});
;define("simple-auth-app/models/obj-hash", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Object.extend({
    contentLength: 0,
    length: Ember.computed.alias('contentLength'),
    init: function () {
      this._super();

      this.content = {};
    },
    add: function (obj) {
      var id = this.generateId();
      this.get('content')[id] = obj;
      this.incrementProperty("contentLength");
      return id;
    },
    getObj: function (key) {
      var res = this.get('content')[key];

      if (!res) {
        throw new Error("no obj for key " + key);
      }

      return res;
    },
    generateId: function () {
      var num = Math.random() * 1000000000000.0;
      num = parseInt(num);
      num = "" + num;
      return num;
    },
    keys: function () {
      var res = [];

      for (var key in this.get('content')) {
        res.push(key);
      }

      return Ember.A(res);
    }
  });

  _exports.default = _default;
});
;define("simple-auth-app/models/todo", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let TodoModel = (_class = class TodoModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "title", _descriptor, this);

      _initializerDefineProperty(this, "color", _descriptor2, this);

      _initializerDefineProperty(this, "description", _descriptor3, this);

      _initializerDefineProperty(this, "coordx", _descriptor4, this);

      _initializerDefineProperty(this, "coordy", _descriptor5, this);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "title", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "color", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "description", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "coordx", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "coordy", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = TodoModel;
});
;define("simple-auth-app/router", ["exports", "simple-auth-app/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('todo');
    this.route('login');
  });
});
;define("simple-auth-app/routes/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // Ensure the application route exists for ember-simple-auth's `setup-session-restoration` initializer
  var _default = Ember.Route.extend();

  _exports.default = _default;
});
;define("simple-auth-app/routes/login", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class LoginRoute extends Ember.Route {}

  _exports.default = LoginRoute;
});
;define("simple-auth-app/routes/todo", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let TodoRoute = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, (_class = class TodoRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "session", _descriptor, this);

      _initializerDefineProperty(this, "store", _descriptor2, this);

      _defineProperty(this, "action", void 0);
    }

    reloadModel() {
      this.refresh();
    }

    beforeModel(transition) {
      this.session.requireAuthentication(transition, "login");
    }

    async model() {
      return Ember.RSVP.hash({
        todo: this.store.findAll("todo", {
          reload: true
        })
      });
    }

    setupController(controller, models) {
      controller.set("todo", models.todo);
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "session", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "store", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = TodoRoute;
});
;define("simple-auth-app/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("simple-auth-app/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("simple-auth-app/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("simple-auth-app/serializers/application", ["exports", "simple-auth-app/serializers/drf"], function (_exports, _drf) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _drf.default;
  _exports.default = _default;
});
;define("simple-auth-app/serializers/drf", ["exports", "ember-django-adapter/serializers/drf"], function (_exports, _drf) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _drf.default;
  _exports.default = _default;
});
;define("simple-auth-app/serializers/todo", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class TodoSerializer extends _jsonApi.default {
    serialize(snapshot, options) {
      let json = super.serialize(...arguments);
      json.data.type = "Todo";
      return json;
    }

  }

  _exports.default = TodoSerializer;
});
;define("simple-auth-app/services/cookies", ["exports", "ember-cookies/services/cookies"], function (_exports, _cookies) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _cookies.default;
  _exports.default = _default;
});
;define("simple-auth-app/services/drag-coordinator", ["exports", "ember-drag-drop/services/drag-coordinator"], function (_exports, _dragCoordinator) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _dragCoordinator.default;
  _exports.default = _default;
});
;define("simple-auth-app/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("simple-auth-app/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("simple-auth-app/services/session", ["exports", "ember-simple-auth/services/session"], function (_exports, _session) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _session.default;
  _exports.default = _default;
});
;define("simple-auth-app/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("simple-auth-app/session-stores/application", ["exports", "ember-simple-auth/session-stores/adaptive"], function (_exports, _adaptive) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _adaptive.default.extend();

  _exports.default = _default;
});
;define("simple-auth-app/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "BzxMH+uq",
    "block": "[[[1,[28,[35,0],[\"Note App Emberjs Django\"],null]],[1,\"\\n\\n\"],[6,[39,1],null,null,[[\"default\"],[[[[41,[30,0,[\"session\",\"isAuthenticated\"]],[[[1,\"\\t\\t\"],[11,3],[4,[38,3],[\"click\",[30,0,[\"invalidateSession\"]]],null],[12],[1,\"Logout\"],[13],[1,\"\\n\"]],[]],[[[1,\"\\t\\t\"],[6,[39,4],null,[[\"route\"],[\"login\"]],[[\"default\"],[[[[1,\"Login\"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"\\n\"]],[]]]]],[1,\"\\n\"],[46,[28,[37,6],null,null],null,null,null],[1,\"\\n\"]],[],false,[\"page-title\",\"navbar\",\"if\",\"on\",\"link-to\",\"component\",\"-outlet\"]]",
    "moduleName": "simple-auth-app/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("simple-auth-app/templates/components/draggable-object-target", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "NGRb95av",
    "block": "[[[41,[30,1],[[[1,\"  \"],[11,3],[24,6,\"#\"],[4,[38,1],[[30,0,[\"acceptForDrop\"]]],null],[12],[1,\"\\n    \"],[18,2,null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]],[[[1,\"  \"],[18,2,null],[1,\"\\n\"]],[]]]],[\"@enableClicking\",\"&default\"],false,[\"if\",\"fn\",\"yield\"]]",
    "moduleName": "simple-auth-app/templates/components/draggable-object-target.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("simple-auth-app/templates/components/draggable-object", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "MWRskUYy",
    "block": "[[[41,[30,1],[[[1,\"  \"],[11,3],[24,6,\"#\"],[4,[38,1],[[30,0,[\"selectForDrag\"]]],null],[12],[1,\"\\n    \"],[18,2,null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]],[[[1,\"  \"],[18,2,null],[1,\"\\n\"]],[]]]],[\"@enableClicking\",\"&default\"],false,[\"if\",\"fn\",\"yield\"]]",
    "moduleName": "simple-auth-app/templates/components/draggable-object.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("simple-auth-app/templates/components/sortable-objects", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "tfiHHmOv",
    "block": "[[[18,1,null]],[\"&default\"],false,[\"yield\"]]",
    "moduleName": "simple-auth-app/templates/components/sortable-objects.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("simple-auth-app/templates/login", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "AaqqbwMN",
    "block": "[[[1,\"\\n\"],[10,0],[14,0,\"container\"],[12],[1,\"\\n\\n\\t\"],[11,\"form\"],[4,[38,0],[[30,0],\"authenticate\"],[[\"on\"],[\"submit\"]]],[12],[1,\"\\n\\t\\t\"],[10,0],[14,0,\"field\"],[12],[1,\"\\n\\t\\t\\t\"],[10,2],[14,0,\"control has-icons-left has-icons-right\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[1,[28,[35,1],null,[[\"class\",\"id\",\"placeholder\",\"value\"],[\"input\",\"username\",\"Enter Login\",[33,2]]]]],[1,\"\\n\\t\\t\\t\\t\"],[10,1],[14,0,\"icon is-small is-left\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,\"i\"],[14,0,\"fas fa-envelope\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\"],[13],[1,\"\\n\\t\\t\"],[10,0],[14,0,\"field\"],[12],[1,\"\\n\\t\\t\\t\"],[10,2],[14,0,\"control has-icons-left\"],[12],[1,\"\\n\\t\\t\\t\\t\"],[1,[28,[35,1],null,[[\"class\",\"id\",\"placeholder\",\"type\",\"value\"],[\"input\",\"password\",\"Enter Password\",\"password\",[33,3]]]]],[1,\"\\n\\t\\t\\t\\t\"],[10,1],[14,0,\"icon is-small is-left\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\"],[10,\"i\"],[14,0,\"fas fa-lock\"],[12],[13],[1,\"\\n\\t\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\"],[13],[1,\"\\n\\t\\t\"],[10,\"button\"],[14,0,\"button is-link\"],[14,4,\"submit\"],[12],[1,\"Login\"],[13],[1,\"\\n\\t\"],[13],[1,\"\\n\\n\\t\"],[10,0],[15,0,[29,[\"notification is-danger \",[30,0,[\"show\"]]]]],[12],[1,\"\\n\\t\\t\"],[10,\"button\"],[14,0,\"delete\"],[12],[13],[1,\"\\n\\t\\tBad Credentials\\n\\t\"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"action\",\"input\",\"username\",\"password\"]]",
    "moduleName": "simple-auth-app/templates/login.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("simple-auth-app/templates/todo", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "C6VSNc3h",
    "block": "[[[1,[28,[35,0],[\"Todo\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@t\"],[[36,2]]],null],[1,\"\\n\\n\"],[10,\"button\"],[14,0,\"button is-success is-outlined btn-ajouter\"],[15,\"onclick\",[28,[37,3],[[30,0],[30,0,[\"add\"]]],null]],[12],[1,\"\\n\\t\"],[10,1],[12],[1,\"Add a note\"],[13],[1,\"\\n\\t\"],[10,1],[14,0,\"icon\"],[12],[1,\"\\n\\t\\t\"],[10,\"i\"],[14,0,\"fas fa-pencil-alt\"],[14,\"aria-hidden\",\"true\"],[12],[13],[1,\"\\n\\t\"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"page-title\",\"todolist\",\"todo\",\"action\"]]",
    "moduleName": "simple-auth-app/templates/todo.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("simple-auth-app/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("simple-auth-app/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("simple-auth-app/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("simple-auth-app/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('simple-auth-app/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("simple-auth-app/app")["default"].create({"name":"simple-auth-app","version":"0.0.0","API_HOST":"http://localhost:8000","API_NAMESPACE":"api","API_ADD_TRAILING_SLASHES":true});
          }
        
//# sourceMappingURL=simple-auth-app.map
