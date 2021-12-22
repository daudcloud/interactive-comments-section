import Image from "next/image";
import { useState } from "react";

const Card = ({ comment, reply }) => {
  const [editable, setEditable] = useState(false);
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
            <span className="username">{comment.username}</span>
            <span className="createdat">{comment.createdAt}</span>
            <span className="reply">Reply</span>
          </div>
          {/* end comment header */}
          <div className="comment-content">
            <p contentEditable={editable}>
              {reply && <span className="mention">@{comment.replyingTo} </span>}

              {comment.content}
            </p>
          </div>
          {/* end comment content */}
        </div>
        {/* end comment body */}
      </div>
      {/* end comment section */}
    </>
  );
};

export default Card;
