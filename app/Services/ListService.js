import List from "../Models/List.js";
import _store from "../store.js";

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change

  addList(newListData) {
    let newList = new List(newListData);
    _store.State.lists.push(newList);
    _store.saveState();
  }

  deleteList(listId) {
    let index = _store.State.lists.findIndex(list => list.id == listId);
    _store.State.lists.splice(index, 1);
    _store.saveState();
  }

  addItem(newItemData) {
    let newItem = newItemData;
    _store.State.items.push(newItem);
  }
}

const SERVICE = new ListService();
export default SERVICE;
