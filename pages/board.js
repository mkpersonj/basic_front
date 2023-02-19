const { default: Layout } = require("@/components/layout/Layout");

const Board = () => {
  return (
    <Layout navbar={true}>
      <p className="p-3">Board</p>
    </Layout>
  );
};

export default Board;
