import Layout from "@/components/layout/Layout";
import useModal from "@/hooks/useModal";
import { Button } from "react-bootstrap";

export default function Home() {
  const { _alert, _confirm } = useModal();

  const onClickAlert = () => {
    _alert("alert창 테스트입니다.");
  };

  const onClickConfirm = () => {
    _confirm(
      "confirm창 테스트입니다.",
      () => {
        alert("true callbak");
      },
      () => {
        alert("false callbak");
      }
    );
  };

  return (
    <Layout navbar={true}>
      <div className="p-3">
        <p className="mt-3">홈화면</p>
        <Button onClick={onClickAlert}>alert창 테스트</Button>
        <Button className="ms-3" onClick={onClickConfirm}>
          confirm창 테스트
        </Button>
      </div>
    </Layout>
  );
}
