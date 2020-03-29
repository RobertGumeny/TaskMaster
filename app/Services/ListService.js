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

  renameList(newListName, listId) {
    let index = _store.State.lists.findIndex(list => list.id == listId);
    _store.State.lists[index].name = newListName;
    _store.saveState();
  }

  deleteList(listId) {
    let del = confirm("Are you sure?");
    if (del == true) {
      let index = _store.State.lists.findIndex(list => list.id == listId);
      _store.State.lists.splice(index, 1);
      _store.saveState();
    }
  }

  addItem(newItem, listId) {
    let list = _store.State.lists.find(list => list.id == listId);
    list.items.push(newItem);
    console.log(list);
    _store.saveState();
  }
  deleteItem(item) {
    let del = confirm("Are you sure?");
    if (del == true) {
      let index = _store.State.lists.findIndex(list => list.items == item);
      let lists = _store.State.lists;
      for (let i = 0; i < lists.length; i++) {
        lists[i].items.splice(index, 1);
      }
    }
  }
}

const SERVICE = new ListService();
export default SERVICE;
