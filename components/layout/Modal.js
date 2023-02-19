import useModal from "@/hooks/useModal";
import { useSelector } from "react-redux";
import css from "@/styles/Modal.module.css";

const Modal = () => {
  const { hideModal } = useModal();
  const { alert, confirm } = useSelector((state) => state.modal);

  return (
    <>
      {(alert != null || confirm != null) && (
        <div className={css.modal}>
          {alert ? (
            <div>
              <p className="mt-3">{alert.msg}</p>
              <a
                className={`${css.ok}`}
                onClick={() => {
                  hideModal("alert");
                  if (alert.true_callback) {
                    alert.true_callback();
                  }
                }}
              >
                {alert.button_text ? alert.button_text.ok : "OK"}
              </a>
            </div>
          ) : (
            <div>
              <p className="mt-3">{confirm.msg}</p>
              <a
                className={`${css.yes}`}
                onClick={() => {
                  hideModal("confirm");
                  if (confirm.true_callback) {
                    confirm.true_callback();
                  }
                }}
              >
                {confirm.button_text ? confirm.button_text.yes : "Yes"}
              </a>
              <a
                className={`${css.no}`}
                onClick={() => {
                  hideModal("confirm");
                  if (confirm.false_callback) {
                    confirm.false_callback();
                  }
                }}
              >
                {confirm.button_text ? confirm.button_text.no : "No"}
              </a>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Modal;
