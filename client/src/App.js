import { useState } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
  // 현재 할 일 데이터 상태관리 / 초기값 객체로 저장
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: "my todo1",
      done: false,
    },
    {
      id: 2,
      title: "my todo2",
      done: false,
    },
    {
      id: 3,
      title: "my todo3",
      done: true,
    },
  ]);

  // AddTodo 컴포넌트는 상위 컴포넌트 items에 접근 불가능.
  // 상위 컴포넌트인 App은 AddTodo에 접근 가능.
  // => App 컴포넌트에 add() 함수를 추가하고 해당 함수를 AddTodo 프로퍼티로 넘겨 AddTodo 이용.
  const addItem = (newItem) => {
    newItem.id = todoItems.length + 1; // key를 위한 id 추가.
    newItem.done = false; // done 초기화

    setTodoItems([...todoItems, newItem]);
    // Create한 데이터
    console.log("newItem >>>>> ", newItem);
  };

  // 할일 삭제
  const deleteItem = (targetItem) => {
    // {id: 2, title: 'my todo2', done: false}
    // delete한 데이터
    console.log("targetItem >>>> ", targetItem);

    const newTodoItems = todoItems.filter((e) => e.id !== targetItem.id);
    setTodoItems(newTodoItems);
  };

  return (
    <div className="App">
      <AddTodo addItem={addItem} />
      {todoItems.map((item) => {
        // console.log('item >>>>> ', item); // {id: 1, title: 'my todo1', done: false}
        return <Todo key={item.id} item={item} deleteItem={deleteItem} />;
      })}
    </div>
  );
}

export default App;
