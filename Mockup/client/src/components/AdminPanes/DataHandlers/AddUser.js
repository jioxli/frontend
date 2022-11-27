import React, { Fragment } from "react";

const AddUser = () => {
    
  let buttonStr = " Add Account"   //need the space (looks better lol)
    return (
        <Fragment data-backdrop="false">
            {/*Add button */}
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#uAddModal"
          >
            <i class="bi bi-file-earmark-plus-fill"></i>
            {buttonStr}
          </button>
    
          {/*Modal*/}
          <div
            class="modal"
            id="uAddModal"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Add User</h4>
                  <button
                    type="button"
                    class="close"
                    data-bs-dismiss="modal"
                  >
                    &times;
                  </button>
                </div>
    
                <div class="modal-body">
                <input 
                    type="text" 
                    placeholder="AID"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="Username"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="Password"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="isAdmin"
                    className="form-control" />
                
                </div>
    
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      );
};

export default AddUser;