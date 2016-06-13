/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
    var head = null;
    var tail = null;
    var node = {};

    function _getHead(){
      return head;
    }

    function _getTail(){
      return tail;
    }

    function _add(value){
      var node = {
        value: value,
        next: null
      }
      if ( head === null && tail === null ){
        head = node,
        tail = node

      } else {
        tail.next = node;
        tail = node;
      }
      return node;

    }
    function _get(number){
      var thisNode = head;
      for ( var i = 0; i < number; i++ ){
        if( thisNode.next === null ){
          return false;
        }
          thisNode.next;
          thisNode = thisNode.next;
      }
      return thisNode;
    }

    function _remove(number){
      var current = _get(number);
      var x = _get(number - 1);
      var y = _get(number + 1);

      if( current === head ){
          head = y;
      }

      if( current === false ){
        return false;
      }

      if( current.next === null ){
        x.next = null;
        tail = x;

      } else {
        x.next = y;
      }
    }

    function _insert( value, index ){
      var position = _get(index);
      var x = _get(index - 1);
      var node = {
        value: value,
        next: null
      }
      if ( position === false || index < 0 ){
        console.log(value, position);
        return false;

      } else if ( index === 0 ){
        node.next = position;
        head = node;

      } else {
      node.next = position;
      x.next = node;

      }

    }

    return{
      getHead: _getHead,
      getTail: _getTail,
      remove: _remove,
      get: _get,
      insert: _insert,
      add: _add
    }

}