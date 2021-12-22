import styled from "styled-components";

const Div = styled.div`
  .scores {
    display: flex;
    flex-direction: column;
  }
  .comment-section {
    display: flex;
  }
  .comment-header {
    display: flex;
    align-items: center;
  }
  .avatar {
    position: relative;
    width: 30px;
    height: 30px;
  }
  .settings {
    margin-left: auto;
  }
  p[contentEditable="true"] .mention {
    color: black;
  }
  .mention {
    color: red;
  }
`;

export default Div;
