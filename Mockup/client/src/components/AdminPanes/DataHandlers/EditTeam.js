import React, { Fragment } from "react";

const EditTeam = () => {

    return (
        <Fragment data-backdrop="false">
            {/*Edit button*/}
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#tAddModal"
          >
            Edit
          </button>
    
          {/*Modal*/}
          <div
            class="modal"
            id="tAddModal"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Edit Player</h4>
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
                    placeholder="TID"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="name"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="Games"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="Wins"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="Losses"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="First Dragon"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="First Turret"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="First Herald"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="GD15"
                    className="form-control" />
                </div>
                
    
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary"
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

export default EditTeam;