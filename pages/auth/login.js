import { login } from "@/actions/userApi";
import Layout from "@/components/layout/Layout";
import useInput from "@/hooks/useInput";
import useModal from "@/hooks/useModal";
import userSlice from "@/store/reducers/user";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { user } = useSelector((state) => state);
  const { _alert } = useModal();

  const [username, setUsername] = useInput();
  const [password, setPassword] = useInput();

  const onClickLogin = () => {
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    if (user.Done && user.Api == "login") {
      if (user.Fail) {
        _alert(user.Fail);
      } else {
        router.replace("/");
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
                placeholder="Nickname or Email Address"
                value={username}
                onChange={setUsername}
              />
              <Form.Control
                className="mb-3"
                type="Password"
                placeholder="Password"
                value={password}
                onChange={setPassword}
              />

              <Button className="w-100" onClick={onClickLogin}>
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Login;
