import Layout from "@/components/layout/Layout";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "@/actions/userApi";
import { useEffect } from "react";
import useInput from "@/hooks/useInput";
import userSlice from "@/store/reducers/user";
import { useRouter } from "next/router";
import useModal from "@/hooks/useModal";

const Signup = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state);
  const { _alert } = useModal();

  const [nickname, setNickname] = useInput();
  const [email, setEmail] = useInput();
  const [password, setPassword] = useInput();

  const onClickSignup = () => {
    dispatch(signup({ nickname, email, password }));
  };

  useEffect(() => {
    if (user.Done && user.Api == "signup") {
      if (user.Fail) {
        _alert(user.Fail);
      } else {
        router.replace("/auth/login");
      }
      dispatch(userSlice.actions.initApi());
    }
  }, [user.Done]);

  return (
    <Layout>
      <Container className="pt-5">
        <Row>
          <Col>
            <Form>
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="Nickname"
                value={nickname}
                onChange={setNickname}
              />
              <Form.Control
                className="mb-3"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={setEmail}
              />
              <Form.Control
                className="mb-3"
                type="Password"
                placeholder="Password"
                value={password}
                onChange={setPassword}
              />

              <Button className="w-100" onClick={onClickSignup}>
                Signup
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signup;
