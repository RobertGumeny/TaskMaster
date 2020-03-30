import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.name = data.name || "Unnamed List";
    this.items = data.items || [];
    this.color = data.color || "blue";
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get Template() {
    return /*html*/ `
    <div class="col-md-3 my-4">
            <div class="card">
              <div class="card-header text-center list-header-${this.color}">
                <span id="list-name">${this.name}</span>
                <button type="button" class="close text-danger" onclick="app.listController.deleteList('${this.id}')"><span>&times;</span></button>
              </div>
              <ul class="list-group">
              ${this.Items}
              </ul>
            
              <div class="card-footer bg-white mx-auto">
                <form onsubmit="app.listController.addItem(event, '${this.id}')">
                    <div class="input-group">
                      <input type="text" name="addItem" class="form-control-sm" placeholder="Add item..." required>
                      <div class="input-group-append">
                        <button type="submit" class="btn btn-primary btn-sm">+</button>
                      </div>
                    </div>
                </form>
                <form onsubmit="app.listController.renameList(event, '${this.id}')">
                <div class="input-group mt-1">
                  <input type="text" name="newListName" class="form-control-sm" placeholder="Rename list...">
                  <div class="input-group-append">
                    <button type="submit" class="btn btn-primary btn-sm">+</button>
                  </div>
                </div>
            </form>
              </div>
            </div>
          </div>
        </div>
    
    `;
  }

  get Items() {
    let template = "";

    this.items.forEach(
      item =>
        (template += /*html*/ `                
    
      <li class ="list-group-item">
      <input type="checkbox"/>
      <span id="item-display">${item}</span>
      <button type="button" class="close text-danger" onclick="app.listController.deleteItem('${item}','${this.id}')"><span>&times;</span></button>
      </li>

      `)
    );
    return template;
  }
}
