import testSlice from "@/store/reducers/test";
import { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const { results } = useSelector((state) => state.test);
  const textRef = useRef();

  const onClickAddSentence = () => {
    dispatch(testSlice.actions.addSentence(textRef.current.value));
    textRef.current.value = "";
  };
  const onClickInit = () => {
    dispatch(testSlice.actions.setState({ state: "results", value: [] }));
  };

  return (
    <div className="m-5">
      <p>redux-toolkit 테스트</p>
      {results.map((v, i) => {
        return <p key={i}>{v}</p>;
      })}
      <Form.Control type="text" className="mb-3" ref={textRef} />
      <Button onClick={onClickAddSentence}>Add Sentence</Button>
      <Button onClick={onClickInit} className="ms-3">
        Init
      </Button>
    </div>
  );
}
