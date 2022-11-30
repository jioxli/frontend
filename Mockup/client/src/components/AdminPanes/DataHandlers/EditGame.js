import React, { Fragment } from "react";

const EditGame = () => {
    
    return (
        <Fragment data-backdrop="false">
          {/*Add button */}
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#gEditModal"
          >
            Edit
          </button>
    
          {/*Modal*/}
          <div
            class="modal"
            id="gEditModal"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Edit Game</h4>
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
                    placeholder="ID"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="GID"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="Date"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="PID"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="Player Name"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="TID"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="Team Name"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="Side"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="Position"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="Champion"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="Result"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="Kills"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="Deaths"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="Assists"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="First Dragon"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="First Herald"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="First Turret"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="Gold Difference 15"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="XP Difference 15"
                    className="form-control" />
                <input 
                    type="text" 
                    placeholder="Game Length"
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

export default EditGame;