import React from 'react'

export default function card(props) {
  return (
    <>
    <>
    <div className="productBox container col" style={{ padding: 10 }}>
      <div className="card-body" style={{padding:'5px',backgroundColor:'azure'}}>
        <div>
          <img
            className="img-fluid"
            src={props.image}
            style={{ padding: 5, height: 150, width: 104 }}
            alt={props.name}
          />
        </div>
        <h5 className="card-title" style={{ padding: 5 }}>
          {props.name}
        </h5>
        <p style={{ display: "none" }}>{props.detail}</p>
        <h6>${props.price}</h6>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#${props.id}`}
          >{props.btnone}</button>
          <button type="button" onClick={props.handleClick(props.id)} id="liveToastBtn" className="btn btn-dark" >
            {props.btntwo}
          </button>
          
        </div>
      </div>
    </div>
    {/* Modal */}
    <div
      className="modal fade"
      id={props.id}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {props.name}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <img
              className="img-fluid"
              id="modalImg"
              src={props.image}
              style={{ padding: 5, height: 300, width: 400 }}
              alt={props.name}
            />
            <div className="prodComp" id="modalDetail">
              <h5>{props.company}</h5>
            </div>
            <div className="prodDet" id="modalDetail">
              <p>{props.detail}</p>
            </div>
            <div className="prodPrice d-flex">
              <h5>Price:&nbsp;</h5>
              <h5 id="modalPrice">${props.price}</h5>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            {/* <button type="button" class="btn btn-primary">Understood</button> */}
          </div>
        </div>
      </div>
    </div>
  </>
  
    </>
  )
}
