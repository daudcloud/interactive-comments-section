import { useComments } from "../../context/DataContext";
import Comment from "../Comment";

const Comments = () => {
  const [comments, setComments] = useComments();
  return (
    <div className="comments">
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
};

export default Comments;
