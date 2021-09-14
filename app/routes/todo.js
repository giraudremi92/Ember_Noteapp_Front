import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class TodoRoute extends Route {
	@service session;
	@service store;

	action;
	reloadModel() {
		this.refresh();
	}

	beforeModel(transition) {
		this.session.requireAuthentication(transition, "login");
	}

	async model() {
		return Ember.RSVP.hash({
			todo: this.store.findAll("todo", { reload: true }),
		});
	}

	setupController(controller, models) {
		controller.set("todo", models.todo);
	}
}
