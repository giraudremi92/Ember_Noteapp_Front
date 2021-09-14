import Model, { attr } from '@ember-data/model';


export default class TodoModel extends Model {


    	@attr title;
    	@attr color;
	@attr description;
	@attr coordx;
	@attr coordy;
}
