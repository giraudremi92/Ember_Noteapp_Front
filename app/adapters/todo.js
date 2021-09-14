import DS from 'ember-data';
import { inject } from '@ember/service';
import { computed } from '@ember/object';


export default DS.JSONAPIAdapter.extend({

  urlForCreateRecord() {
    return this._super(...arguments) + '/';
  },

  urlForUpdateRecord() {
    return this._super(...arguments) + '/';
  },

    host : 'http://127.0.0.1:8000',


    session: inject('session'),
  
    headers: computed('session.isAuthenticated', 'session.data.authenticated.token', function() {
      if (this.session.isAuthenticated) {
	      return {
          Authorization: `Token ${this.session.data.authenticated.token}`,
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
    },
  });
