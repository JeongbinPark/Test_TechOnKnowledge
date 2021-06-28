import React, { Fragment, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const tempData0 = [
  {
    id: 55,
    title: "C로 배우는 자료구조 및 여러가지 예제 실습",
    date: "2021.05.08",
    explain: "연결리스트, 스택, 큐를 배울 수 있는 강의",
    recommendationBefore: 12,
    recommendationAfter: 3
  },
  {
    id: 67,
    title: "파이썬 알고리즘 문제풀이",
    date: "2021.05.28",
    explain: "파이썬으로 배울 수 있는 강의",
    recommendationBefore: 4,
    recommendationAfter: 1
  }
];

const tempData1 = [
  {
    id: 1,
    title: "아주 좋았어요",
    date: "2021.06.13",
    explain: "설명을 친절하게 해주셔요",
    recommendation: 2
  },
  {
    id: 2,
    title: "초보에게 듣기 좋아요",
    date: "2021.07.28",
    explain: "꼭 들어보세요",
    recommendation: 1
  }
];

const tempData2 = [
  {
    id: 1,
    title: "3번째 강의 실습에 에러가 나요ㅠㅠ",
    date: "2021.06.01",
    explain: "설명해주신 ~~에 ~~ 에러가 나네요ㅠㅠ",
    recommendation: 2
  }
]
const ReplyBox = () => {
  const [replyDatas, setReplyDatas] = useState([]);
  const [clickedItem, setClickedItem] = useState('relativeLecture');

  useEffect(() => {
    if (clickedItem === "relativeLecture") {
      setReplyDatas(tempData0);
    } else if (clickedItem === "review") {
      setReplyDatas(tempData1);
    } else {
      setReplyDatas(tempData2);
    }
  }, [clickedItem])

  const onTitleClick = (e) => {
    setClickedItem(e.target.id);
  }

  const replyLists = replyDatas.map(data =>
    <ReplyItem
      key={data.id}
      type={clickedItem}
      id={data.id}
      title={data.title}
      date={data.date}
      explain={data.explain}
      recommendationBefore={data.recommendationBefore}
      recommendationAfter={data.recommendationAfter}
      recommendation={data.recommendation}
    />
  );

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
              <div>
                <label><input placeholder="관련 강의 링크를 입력해주세요" /></label>
                <label><input placeholder="내용을 입력해주세요" /></label>
              </div>
              <button>작성</button>
            </div>
          }
          {clickedItem === "review"
            && <div className="replyInputBox">
              <div>
                <label><input placeholder="제목을 입력해주세요" /></label>
                <label><input placeholder="내용을 입력해주세요" /></label>
              </div>
              <button>작성</button>
            </div>
          }
          {clickedItem === "question"
            && <div className="replyInputBox">
              <div>
                <label><input placeholder="제목을 입력해주세요" /></label>
                <label><input placeholder="내용을 입력해주세요" /></label>
              </div>
              <button>작성</button>
            </div>
          }
          <div id="replyLists">
            {replyLists ? replyLists : "아직 남겨진 후기가 없습니다."}
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
      <div className="replyItem">
        <div id="replyItem_info">
          <div>
            {props.type === "relativeLecture"
              ? <Link to={`/lecture/:${props.id}`}>{props.title}</Link>
              : <div>{props.title}</div>
            }
          </div>
          <div>{props.date}</div>
          <div>{props.explain}</div>
        </div>
        {props.type === "relativeLecture" ?
          <div id="replyItem_recommendation">
            <div>{props.recommendationBefore}</div>
            <div>{props.recommendationAfter}</div>
          </div>
          :
          <div id="replyItem_recommendation">
            <div>{props.recommendation}</div>
          </div>
        }
      </div>
    </Fragment>
  )
}