import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TodolistComponent extends Component {

    @tracked Noteid = '';


    @service store
    

    @action
    UndoModal(event){
      // Inactive button
      document.getElementById('ModalModifs').classList.remove('is-active')
      
    }



    @action
    Color(event){
      //Get id de la note
      let id = event.target.parentNode.parentElement.parentElement.parentElement.id
      // Update de la note avec la couleur rouge
      this.store.findRecord('todo', id).then(function(todo) {
        // ...after the record has loaded
        todo.color = 'is-danger';
        todo.save(); 
      });
    }

    @action
    ChangeNote(event){
	
	let id = event.target.parentNode.parentElement.parentElement.parentElement.id
	this.Noteid = id;    
	this.store.findRecord('todo', this.Noteid).then(function(todo) {
		document.getElementById('textarea1').value = todo.title;
		document.getElementById('textarea2').value = todo.description;
      });
	document.getElementById('ModalModifs').classList.add("is-active")
    }

    @action
	ValideNote(event){

	this.store.findRecord('todo', this.Noteid).then(function(todo) {
		todo.title = document.getElementById('textarea1').value;
		todo.description = document.getElementById('textarea2').value; 
		if (todo.title == ''){
			alert('Note title must not be empty')	
			document.getElementById('textarea1').value = 'My Title'
			todo.title = 'My title'
			todo.description =  document.getElementById('textarea2').value; 

		} else {
			
		todo.save();
		document.getElementById('ModalModifs').classList.remove("is-active")

		}
		
			
		});	

	}	

    


    @action
    DeleteNote(event) {
      //id de la note parentElement
      
      var id = event.target.parentElement.id
      let todo = this.store.peekRecord('todo', id); //Cherche la data a supprimer
      todo.destroyRecord(); // Suppression de la DB
    
    }


}
