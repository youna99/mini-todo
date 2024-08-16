import { useEffect, useState } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import './styles/Todo.scss';
import axios from 'axios';

function App() {
  const [todoItems, setTodoItems] = useState([]);
  // AddTodo 컴포넌트는 상위 컴포넌트 items에 접근 불가능.
  // 상위 컴포넌트인 App은 AddTodo에 접근 가능.
  // => App 컴포넌트에 add() 함수를 추가하고 해당 함수를 AddTodo 프로퍼티로 넘겨 AddTodo 이용.

  // Read API
  useEffect(() => {
    console.log('첫 렌더링 완료!');
    console.log(process.env.REACT_APP_DB_HOST);

    const getTodos = async () => {
      let res = await axios.get(`${process.env.REACT_APP_DB_HOST}/api/todos`);

      setTodoItems(res.data);
    };

    getTodos();
  }, []);

  // Creat API
  const addItem = async (newItem) => {
    console.log('newItem >>>', newItem);
    // newItem.id = todoItems.length + 1; // key를 위한 id 추가.
    // newItem.done = false; // done 초기화

    // setTodoItems([...todoItems, newItem]);
    // console.log('newItem >>>>> ', newItem);
    
    const res = await axios.post(`${process.env.REACT_APP_DB_HOST}/api/todo`, newItem)
    setTodoItems([...todoItems, res.data]);
  };

  // Delete API
  const deleteItem = async (targetItem) => {
    // {id: 2, title: 'my todo2', done: false}
    // const newTodoItems = todoItems.filter((e) => e.id !== targetItem.id);
    // setTodoItems(newTodoItems);
    console.log('targetItem >>>> ', targetItem);

    await axios.delete(`${process.env.REACT_APP_DB_HOST}/api/todo/${targetItem.id}`);
    const newTodoItems = todoItems.filter((e) => e.id !== targetItem.id);
    setTodoItems(newTodoItems);
  };

  // => 즉, update() 함수를 App.js에서 만들지 않았어도 됐음. (프론트단)
  // 하지만 API 이용해 update 하려면
  // (1) Server API를 이용해 서버 데이터를 업데이트 한 후
  // (2) 변경된 내용을 화면에 다시 출력하는 두 가지 작업이 필요.

  const updateItem = async (targetItem) => {
    console.log('targetItem >>>', targetItem);
    await axios.patch(`${process.env.REACT_APP_DB_HOST}/api/todo/${targetItem.id}`, targetItem);
  }

  return (
    <div className="App">
      <AddTodo addItem={addItem} />
      <div className='TodoList'>
        {todoItems.map((item) => {
          // console.log('item >>>>> ', item); // {id: 1, title: 'my todo1', done: false}
          return <Todo key={item.id} item={item} deleteItem={deleteItem} updateItem={updateItem}/>;
        })}
      </div>

    </div>
  );
}

export default App;