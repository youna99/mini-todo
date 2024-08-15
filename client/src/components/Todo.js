import React, { useState } from "react";

export default function Todo({ item, deleteItem }) {
  // 재렌더링 되는 모든 활동 시
  console.log("item >>>>> ", item); // {id: 1, title: 'my todo1', done: false}

  const [todoItem, setTodoItem] = useState(item); // 수정, 삭제 된 데이터 상태관리
  const [readOnly, setReadOnly] = useState(true); // 수정 시 필요한 input 속성(readonly) 상태관리

  // delete 버튼 클릭시 props로 받은 daleteItem 함수 실행 : 변경된 데이터
  const onDeleteButtonClick = () => {
    deleteItem(todoItem);
  };

  // title 클릭 시 실행될 함수 : readOnly를 false로 변경
  const offReadOnlyMode = () => {
    setReadOnly(false);
  };

  // readOnly true: enter키 누르면 readOnly를 true로 변경
  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      setReadOnly(true);
    }
  };

  // 커서가 깜빡인다고 수정 가능한 것은 아님.
  // 사용자가 키보드 입력할 때마다 item 새 값으로 변경.
  const editEventHandler = (e) => {
    // rest: id, done 정보
    const { title, ...rest } = todoItem;
    setTodoItem({
      title: e.target.value,
      ...rest,
    });
  };

  // checkbox 업데이트
  const checkboxEventHandler = (e) => {
    const { done, ...rest } = todoItem;

    setTodoItem({
      done: e.target.checked,
      ...rest,
    });
    // checked의 상태
    console.log("e.target.checked >>>> ", e.target.checked); // true, false
  };

  return (
    <div className="Todo">
      <input
        className="checkbox"
        type="checkbox"
        id={`todo${todoItem.id}`}
        name={`todo${todoItem.id}`}
        value={`todo${todoItem.id}`}
        defaultChecked={todoItem.done} // true, o // false, x
        onChange={checkboxEventHandler}
      />
      <input
        className="todoTitle"
        type="text"
        value={todoItem.title}
        readOnly={readOnly}
        onClick={offReadOnlyMode}
        onChange={editEventHandler}
        onKeyDown={enterKeyEventHandler}
      />
      {/* <label htmlFor="todo0">{item.title}</label> */}
      <button className="deleteButton" onClick={onDeleteButtonClick}>
        DELETE
      </button>
    </div>
  );
}
