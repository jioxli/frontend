import React, { Fragment } from "react";

const AddPlayer = () => {
    
  let buttonStr = " Add Player"   //need the space (looks better lol)
    return (
        <Fragment data-backdrop="false">
          {/*Add button */}
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#pAddModal"
          >
            <i class="bi bi-file-earmark-plus-fill"></i>
            {buttonStr}
          </button>
    
          {/*Modal*/}
          <div
            class="modal"
            id="pAddModal"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Add Players</h4>
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
                    placeholder="IGN"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="Team"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="Region"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="Position"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="KDA"
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

export default AddPlayer;