import React from "react";

const DeleteBuyerModal = ({
  title,
  message,
  cancelDeletBuyer,
  successAction,
  modalData,
}) => {
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="delete-buyer-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              htmlFor="delete-buyer-modal"
              onClik={cancelDeletBuyer}
              cancelDeleteSeller
              className="btn"
            >
              Cancel Process
            </label>
            <label
              onClick={successAction(modalData)}
              htmlFor="delete-buyer-modal"
              className="btn"
            >
              Confirm Delet
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBuyerModal;
