import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./style.css";

const InstructionModal = props => {
  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="closeModal" onClick={props.onClose} >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<path d="M15 5L5 15" stroke="#007575" stroke-width="3" stroke-linecap="square" stroke-linejoin="round"/>
<path d="M5 5L15 15" stroke="#007575" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </div>
          <div className="modal-header">
            <h4 className="modal-title">Instructions</h4>
          </div>
          <div className="modal-body">
              <p>
              You can redeem this voucher on the Roving Heights website by clicking on the “Redeem Now” button.
              </p>
              <p>
              The discount code will be applied automatically. If not applied, manually copy and paste the discount code and follow the checkout instructions.
              </p>
              <p>
              Delivery is also covered so that you don't have to make any further payments.
              </p>
          </div>
          <div className="modal-footer">
            <button onClick={props.onClose} className="button">
              OK
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default InstructionModal;