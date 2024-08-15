import React, { useState } from "react";

export default function AddTodo({ addItem }) {
  // 사용자가 입력한 데이터 상태관리
  const [todoItem, setTodoItem] = useState({
    title: "",
  }); // 사용자 입력을 저장할 객체 (id, title, done에 대한 정보를 저장해야하므로 객체)

  // ADD 버튼 클릭시: addItem 함수 실행
  const onButtonClick = () => {
    addItem(todoItem); // add 함수 사용.
    setTodoItem({
      title: "", // 상태 초기화
    });
  };

  // 과제1) add enter키로 실행.
  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      addItem(todoItem);
      setTodoItem({
        title: "",
      });
    }
  };

  return (
    <div className="AddTodo">
      <input
        type="text"
        placeholder="Add your new Todo"
        value={todoItem.title}
        onChange={(e) => setTodoItem({ title: e.target.value })}
        onKeyDown={enterKeyEventHandler}
      />
      <button onClick={onButtonClick}>ADD</button>
    </div>
  );
}
