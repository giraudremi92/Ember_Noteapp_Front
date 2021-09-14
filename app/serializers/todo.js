import JSONAPISerializer from "@ember-data/serializer/json-api";

export default class TodoSerializer extends JSONAPISerializer {
	serialize(snapshot, options) {
		let json = super.serialize(...arguments);

		json.data.type = "Todo";

		return json;
	}
}
