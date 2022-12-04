import React from "react";

const DeleteUserModal = ({
  title,
  message,
  cancelDeleteSeller,
  modalData,
  successAction,
}) => {
  console.log(modalData);

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="delete-user-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box neutral">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              htmlFor="delete-user-modal"
              onClick={cancelDeleteSeller}
              cancelDeleteSeller
              className="btn"
            >
              Cancel Process
            </label>
            <label
              onClick={() => successAction(modalData)}
              htmlFor="delete-user-modal"
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

export default DeleteUserModal;
