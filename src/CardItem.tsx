import React from 'react'
import {TodoType} from "./App"

interface CardItemProps {
  card: TodoType
  key:string
  handleDelete:(id:string)=>void;
  handleCbtn:(id:string)=>void;
}
function CardItem({card,handleDelete,handleCbtn}:CardItemProps) {
  const btnName = card.isDone ? '취소' : '완료';
  return (
    <div className="squareStyle">
      <div>
        <h3>{card.boxTitle}</h3>
        <h5>{card.boxContent}</h5>
        <h6>{card.boxDate}</h6>
        <div className="bottomBtn">
          <button className="delBtn" onClick={() => handleDelete(card.id)}>
            삭제
          </button>
          <button className="doneBtn" onClick={() => handleCbtn(card.id)}>
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardItem;