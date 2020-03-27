import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.name = data.name;
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get Template() {
    return /*html*/ `
    <div class="col-md-3">
            <div class="card">
              <div class="card-header text-center list-header-bg">
                <span id="list-name">${this.name}</span>
                <button type="button" class="close text-danger" onclick="app.listController.deleteList('${this.id}')"><span>&times;</span></button>
              </div>
              <ul class="list-group">
                <li class="list-group-item">
                  <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="check1" />
                  <label for="check1" class="custom-control-label"><span id="item-display">Item 1</span></label>
                  </div>
                </li>
              </ul>
            
              <div class="card-footer">
                <form onsubmit="app.listController.addItem()">
                  <div class="form-row">
                    <div class="input-group">
                      <input type="text" name="addItem" id="add-item" class="form-control" placeholder="Add item...">
                      <div class="input-group-append">
                        <button type="submit" class="btn btn-primary"><i class="fas fa-plus"></i></button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    
    `;
  }
}
