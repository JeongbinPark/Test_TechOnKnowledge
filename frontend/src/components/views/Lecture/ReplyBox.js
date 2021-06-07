import React, {Fragment, useState} from 'react';
 
const ReplyBox = () => {
  const [replyLists, setReplyLists] = useState('');
  const [isRelativeLecture, setIsRelativeLecture] = useState(true);
  const [isReview, setIsReview] = useState(false);
  const [isQuestion, setIsQuestion] = useState(false);

  const onTitleClick = (e) => {
    setIsRelativeLecture(false);
    setIsReview(false);
    setIsQuestion(false);
    if (e.target.id === "relativeLecture") setIsRelativeLecture(true);
    else if (e.target.id === "review") setIsReview(true);
    else setIsQuestion(true);
  }
  

  return (
    <Fragment>
      <div id="replyBox">
        <div id="replyTitle">
          <div id="relativeLecture" onClick={onTitleClick}>관련강의</div>
          <div id="review" onClick={onTitleClick}>후 기</div>
          <div id="question" onClick={onTitleClick}>질 문</div>
        </div>
        <div id="replyContentBox">
          {isRelativeLecture
          && <div className="replyInputBox" >
              <label>제목<input /></label>
              <label>관련강의<input /></label>
              <label>내용<input /></label>
              <button>작성</button>
            </div>
          }
          {isReview
          &&  <div className="replyInputBox">
              <label>제목<input /></label>
              <label>내용<input /></label>
              <button>작성</button>
            </div>
          }
          {isQuestion
          &&  <div className="replyInputBox">
              <label>제목<input /></label>
              <label>내용<input /></label>
              <button>작성</button>
            </div>
          }
          <div id="replyLists">
            {!replyLists && "아직 남겨진 후기가 없습니다."}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ReplyBox;


const ReplyItem = (props) => {
  return (
    <Fragment>
      <ul>
        <li>제목</li>
        <li>아이디</li>
        {props.isRelativedLecture && <li>관련 강의</li>}
        <li>내용</li>
        <li>작성시간</li>
      </ul>
    </Fragment>
  )
}

