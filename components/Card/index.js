import Image from "next/image";
import { useState } from "react";
import { useComments, useUser } from "../../context/DataContext";

const Card = ({ comment, reply }) => {
  const [editable, setEditable] = useState(false);
  const [comments, setComments] = useComments();
  const user = useUser();
  const update = () => {
    setEditable(false);
  };
  const deleteComment = () => {
    const temp = comments.map((com) => {
      const tempReplies = com.replies.filter((r) => r.id !== comment.id);
      return { ...com, replies: tempReplies };
    });
    setComments(temp);
  };
  return (
    <>
      <div className="comment-section">
        <div className="scores">
          <button>+</button>
          {comment.score}
          <button>-</button>
        </div>
        {/* end scores */}
        <div className="comment-body">
          <div className="comment-header">
            <span className="avatar">
              <Image
                src={comment.user.image.png}
                layout="fill"
                objectFit="cover"
              />
            </span>
            <span className="username">{comment.user.username}</span>
            <span className="createdat">{comment.createdAt}</span>
            {comment.user.username === user.username ? (
              <>
                <span className="settings delete" onClick={deleteComment}>
                  Delete
                </span>
                <span
                  classname="settings edit"
                  onClick={() => setEditable(true)}
                >
                  Edit
                </span>
              </>
            ) : (
              <span className="settings reply">Reply</span>
            )}
          </div>
          {/* end comment header */}
          <div className="comment-content">
            <p contentEditable={editable}>
              {reply && <span className="mention">@{comment.replyingTo} </span>}

              {comment.content}
            </p>
          </div>
          {/* end comment content */}
          {editable && <button onClick={update}>Update</button>}
        </div>
        {/* end comment body */}
      </div>
      {/* end comment section */}
    </>
  );
};

export default Card;
