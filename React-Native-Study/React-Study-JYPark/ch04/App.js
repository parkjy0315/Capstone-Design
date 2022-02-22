import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import DateHead from './components/DateHead';
import {SafeAreaProvider } from 'react-native-safe-area-context';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';
import todosStorage from './storages/todosStorage';


function App() {
  const today = new Date();

  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: '리액트 네이티브 기초 공부', done: false},
    {id: 3, text: '투두리스트 만들어보기', done: false},
  ]);

  //load
  useEffect(() => {
    todosStorage
    .get()
    .then(setTodos)
    .catch(console.error);
  }, []);

  //save
  useEffect(() => {
    todosStorage.set(todos).catch(console.error);
  }, [todos]);


  const onInsert = text => {
    // 새로 등록할 항목 아이디 구하기
    // 등록된 항목 중 가장 큰 아이디 구해, 그 값에 1을 더함
    // 만약 리스트가 비었다면 1을 아이디로 사용
    const nextId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    // ...(spread 연산자) : 배열 안의 모든 원소 순서대로 함수 인자로 넣어줌
    // todos.map( todo => todo.id ) : 할일 항목들의 id를 선택해 새로운 배열 만듬
    const todo = {
      id: nextId,
      text, //=단축된 속성명 [얘랑 똑같음 -> text: {text}, ]
      done: false,
    };

    setTodos(todos.concat(todo))
  };

  const onToggle = id => {
    const nextTodos = todos.map(todo => 
      todo.id === id ? {...todo, done: !todo.done} : todo,
      );
      setTodos(nextTodos);
  };

  const onRemove = id => {
    const nextTodos = todos.filter(todo =>todo.id !== id);
    setTodos(nextTodos);
  };

  return (
    <SafeAreaProvider stlye={styles.block}>
        {/*
        잘 적용이 안됌 
        <SafeAreaView edges={['bottom']}>
          <DateHead date={today}/>
        </SafeAreaView> 
        */}
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding', android: undefined})}
          style={styles.avoid}>
          <DateHead date={today}/>
          {todos.length === 0 ? (
              <Empty />
            ) : (
              <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
            )}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});

export default App;