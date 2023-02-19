import { test } from "@/actions/userApi";
import Layout from "@/components/layout/Layout";
import userSlice from "@/store/reducers/user";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { me } = useSelector((state) => state.user);

  const onClickSignup = () => {
    router.replace("/auth/signup");
  };
  const onClickLogin = () => {
    router.replace("/auth/login");
  };
  const onClickTest = () => {
    dispatch(test({ token: me.token }));
  };
  const onClickLogout = () => {
    dispatch(userSlice.actions.setState({ state: "me", value: null }));
  };

  return (
    <Layout navbar={true}>
      <div className="p-5">
        <p>로그인 테스트</p>
        {me ? (
          <div>
            <h3 className="text-success">
              passport-local 인증으로 로그인 성공!
            </h3>
            <p>
              nickname: {me.nickname} / email: {me.email}
            </p>
            {me.test && (
              <h3 className="text-danger mt-5">
                passport-jwt 인증으로 test 호출 성공!
              </h3>
            )}
            <p>{me.test}</p>
            <Button onClick={onClickTest}>Test</Button>
            <Button className="ms-3" onClick={onClickLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <Button onClick={onClickSignup}>Signup</Button>
            <Button className="ms-3" onClick={onClickLogin}>
              Login
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}
