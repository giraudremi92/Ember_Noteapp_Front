// app/controllers/login.js
import Controller from '@ember/controller';
import { inject } from '@ember/service';
import { tracked } from '@glimmer/tracking';


export default Controller.extend({
	
	@tracked show : 'not-active',

	session: inject('session'),


  actions: {
    authenticate: async function () {
      const credentials = this.getProperties('username', 'password');
      const authenticator = 'authenticator:token'; // or 'authenticator:jwt'

      // authenticate
      await this.session
        .authenticate(authenticator, credentials)
        .catch((err) => {
          if (err.status === 400) {
		  this.show = 'actived'
          }
        });
      //Redirection to todo Route if authenticate
      this.session.handleAuthentication('todo');
    },
  },
});
