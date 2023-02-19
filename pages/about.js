const { default: Layout } = require("@/components/layout/Layout");

import Link from "next/link";

const About = () => {
  return (
    <Layout navbar={false}>
      <p className="p-3">navbar없는 화면 About</p>
      <Link className="p-3" href="/">
        홈으로
      </Link>
    </Layout>
  );
};

export default About;
