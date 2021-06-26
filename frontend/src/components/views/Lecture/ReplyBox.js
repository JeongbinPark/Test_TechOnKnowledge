import React, { Fragment, useEffect, useState } from 'react';

const ReplyBox = () => {
  const [replyLists, setReplyLists] = useState('');
  const [clickedItem, setClickedItem] = useState('relativeLecture');

  useEffect(() => {

  })

  const onTitleClick = (e) => {
    setClickedItem(e.target.id);
  }


  return (
    <Fragment>
      <div id="replyBox">
        <div id="replyTitle">
          <div id="relativeLecture" className={clickedItem === "relativeLecture" ? "clicked" : "unclicked"} onClick={onTitleClick}>관련강의</div>
          <div id="review" className={clickedItem === "review" ? "clicked" : "unclicked"} onClick={onTitleClick}>후 기</div>
          <div id="question" className={clickedItem === "question" ? "clicked" : "unclicked"} onClick={onTitleClick}>질 문</div>
        </div>
        <div id="replyContentBox">
          {clickedItem === "relativeLecture"
            && <div className="replyInputBox" >
              <label>제목<input /></label>
              <label>관련강의<input /></label>
              <label>내용<input /></label>
              <button>작성</button>
            </div>
          }
          {clickedItem === "review"
            && <div className="replyInputBox">
              <label>제목<input /></label>
              <label>내용<input /></label>
              <button>작성</button>
            </div>
          }
          {clickedItem === "question"
            && <div className="replyInputBox">
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

