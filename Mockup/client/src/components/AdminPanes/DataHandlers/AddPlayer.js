import React, { Fragment } from "react";

const AddPlayer = () => {
    
    return (
        <Fragment data-backdrop="false">
            {/*Edit button*/}
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            <i class="bi bi-file-earmark-plus-fill"></i>
            Add Player
          </button>
    
          {/*Modal*/}
          <div
            class="modal"
            id="myModal"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Edit Players</h4>
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
                    class="btn btn-warning"
                    data-bs-dismiss="modal"
                  >
                    Edit
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