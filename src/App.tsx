import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import CardItem from "./CardItem";

export interface TodoType {
  id: string;
  boxTitle: string;
  boxContent: string;
  boxDate: string;
  isDone: boolean;
}
const App = () => {
  const initialTodos: TodoType[] = [
    {
      id: uuid(),
      boxTitle: "리액트 공부하기",
      boxContent: '"리액트 기초를 공부해봅시다."',
      boxDate: "23/06/14",
      isDone: false,
    },
    {
      id: uuid(),
      boxTitle: "자바스크립트 공부하기",
      boxContent: '"자바스크립트 기초를 공부해봅시다."',
      boxDate: "23/06/15",
      isDone: false,
    },
    {
      id: uuid(),
      boxTitle: "html 공부하기",
      boxContent: '"html 기초를 공부해봅시다."',
      boxDate: "23/06/11",
      isDone: true,
    },
    {
      id: uuid(),
      boxTitle: "css 공부하기",
      boxContent: '"css 기초를 공부해봅시다."',
      boxDate: "23/06/12",
      isDone: true,
    },
  ];

  const [cards, setCards] = useState<TodoType[]>(initialTodos);
  const [boxTitle, setBoxTitle] = useState<string>("");
  const [boxContent, setBoxContent] = useState<string>("");
  const [boxDate, setBoxDate] = useState<string>("");
  const [isDone, setIsDone] = useState<boolean>(false);

  const onTitleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBoxTitle(event.target.value);
  };
  const onContentChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBoxContent(event.target.value);
  };
  const onDateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBoxDate(event.target.value);
  };

  const addCardHandler = () => {
    const newCard: TodoType = {
      id: uuid(),
      boxTitle: boxTitle,
      boxContent: boxContent,
      boxDate: boxDate,
      isDone: false,
    };

    setBoxTitle("");
    setBoxContent("");
    setBoxDate("");
    setCards([...cards, newCard]);
  };

  const handleCbtn = (id: string) => {
    const doneCardList = cards.map((card: TodoType) => {
      if (card.id === id) {
        return {
          ...card,
          isDone: !card.isDone,
        };
      }
      return card;
    });
    setCards(doneCardList);
  };

  const handleDelete = (id: string) => {
    const newCardList = cards.filter((card) => card.id !== id);
    setCards(newCardList);
  };

  return (
    <div>
      <div className="layout">
        <h1 className="mytodolist">My To do List</h1>

        <div className="inputBox">
          <div className="boxTitle">
            제목
            <input
              type="text"
              id="titleInput"
              placeholder="제목을 적어주세요"
              value={boxTitle}
              onChange={onTitleChangeHandler}
            />
          </div>

          <div className="boxContent">
            내용
            <input
              type="text"
              id="contentInput"
              placeholder="내용을 적어주세요"
              value={boxContent}
              onChange={onContentChangeHandler}
            />
          </div>

          <div className="boxDate">
            날짜
            <input
              type="text"
              id="dateInput"
              placeholder="yy/mm/dd"
              value={boxDate}
              onChange={onDateChangeHandler}
            />
          </div>

          <button onClick={addCardHandler} id="addBtn">
            추가하기
          </button>
        </div>

        <div>
          <div className="mainFont">DO-ing</div>
          <div className="style">
            {cards
              .filter((card: TodoType) => card.isDone !== true)
              .map((card: TodoType) => {
                return (
                  <CardItem
                    card={card}
                    key={card.id}
                    handleDelete={handleDelete}
                    handleCbtn={handleCbtn}
                  />
                );
              })}
          </div>
        </div>

        <div>
          <div className="mainFont">DONE</div>

          <div className="style">
            {cards
              .filter((card: TodoType) => card.isDone === true)
              .map((card: TodoType) => {
                return (
                  <CardItem
                    card={card}
                    key={card.id}
                    handleDelete={handleDelete}
                    handleCbtn={handleCbtn}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
