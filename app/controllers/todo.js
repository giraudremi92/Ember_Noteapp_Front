import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';





export default class TodoController extends Controller {

    

    @service store


    @action
    add(){
        let todo = this.store.createRecord('todo', {
                title:'Title',
                color:'is-warning',
		description: 'Note description'
               });
    
            todo.save();
           //return getOwner(this).lookup('route:todo').refresh();
    }

}
