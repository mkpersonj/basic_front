import modalSlice from "@/store/reducers/modal";
import { useDispatch } from "react-redux";

const useModal = () => {
  const dispatch = useDispatch();

  const _alert = (msg, true_callback, button_name) => {
    dispatch(
      modalSlice.actions.setState({
        state: "alert",
        value: { msg, button_name, true_callback },
      })
    );
  };
  const _confirm = (msg, true_callback, false_callback, button_name) => {
    dispatch(
      modalSlice.actions.setState({
        state: "confirm",
        value: { msg, button_name, true_callback, false_callback },
      })
    );
  };

  const hideModal = (type) => {
    dispatch(
      modalSlice.actions.setState({
        state: type,
        value: null,
      })
    );
  };

  return { _alert, _confirm, hideModal };
};

export default useModal;
