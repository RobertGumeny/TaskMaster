import _listService from "../Services/ListService.js";
import _store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = "";
  let lists = _store.State.lists;

  lists.forEach(list => (template += list.Template));
  document.getElementById("list-display").innerHTML = template;
}
function _drawItems() {
  let newItem = _store.State.items;
  document.getElementById("item-display").innerText = newItem[0];
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  // NOTE Add a new list and draw it to our page
  addList(event) {
    let formData = event.target;
    let newListData = {
      name: formData.listName.value
    };
    _listService.addList(newListData);
    _drawLists();
    formData.reset();
  }

  // NOTE Delete a list when user clicks 'delete'
  deleteList(listId) {
    _listService.deleteList(listId);
    _drawLists();
  }

  // NOTE Add item to already existing list.
  addItem(event) {
    let formData = event.target;
    let newItemData = formData.addItem.value;

    _listService.addItem(newItemData);
    _drawLists();
    formData.reset();
  }

  // NOTE Remove item from list when user clicks 'delete'
  deleteItem() {}

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
