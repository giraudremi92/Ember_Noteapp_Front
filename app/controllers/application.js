// app/controllers/application.js
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import interact from 'interactjs';

export default class ApplicationController extends Controller {
  @service store;

  constructor(owner, args) {
    super(owner, args);
    var Notifexecuted = false;
    let store = this.store;
    // target elements with the "draggable" class
    interact('.draggable').draggable({
      //ignoreFrom: '',
      // enable inertial throwing
      inertia: true,
      // keep the element within the area of it's parent
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: '.drag-section',
          endOnly: true,
        }),
      ],
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
      
      var target = event.target;
      // keep the dragged position in the data-x/data-y attributes
      var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
      var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;


		// Get if of the Note
          let id = event.target.id;
          //Acces au store dans la focntion grace a la variable store et au contructor
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
        },
      },
    });

    function dragMoveListener(event) {
      var target = event.target;
      // keep the dragged position in the data-x/data-y attributes
      var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
      var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

      // translate the element
      target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

      // update the posiion attributes
      target.setAttribute('data-x', x);

      target.setAttribute('data-y', y);
    }

    // this function is used later in the resizing and gesture demos
    window.dragMoveListener = dragMoveListener;
  }
  //End of contstructor
  //
  //

  @service session;

  @action
  invalidateSession() {
    this.session.invalidate();
  }

  @action
  CloseNotif() {
    document.getElementById('notedeplacement').style.display = 'none';
  }
}
