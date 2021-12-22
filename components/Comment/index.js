import Card from "../Card";
import Div from "./style";

const Comment = ({ comment }) => {
  return (
    <Div>
      <Card comment={comment} />
      {comment.replies !== 0 &&
        comment.replies.map((reply) => <Card comment={reply} reply />)}
    </Div>
  );
};

export default Comment;
