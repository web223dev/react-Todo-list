import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import Palette from './components/Palette';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 3;
  state = {
    input: '',
    todos: [
      { id: 0, text: 'React', checked: false},
      { id: 1, text: 'React1', checked: true},
      { id: 2, text: 'React2', checked: false}
    ],
    colors: ['#343a40', '#f03e3e', '#12b886', '#228ae6'],
    color: '#343a40'
  }

  handleChange = (e) =>{
    this.setState({
      input: e.target.value
    })
  }

  handleCreate = () =>{
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })    
  }
  

  handleToggle = (id) => {
    const { todos } = this.state; 
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    }
    
    this.setState({
      todos: nextTodos
    })
  }

  // handleToggle()함수를 아래와 같이 구현할수있다.

  // handleToggle = (id) => {
  //   const { todos } = this.state;
  //   const index = todos.findIndex(todo => todo.id === id);

  //   const selected = todos[index];

  //   this.setState({
  //     todos: [
  //       ...todos.slice(0, index), // 첫번째부터 선택하기전까지의 배렬을 얻는다.
  //       {
  //         ...selected,
  //         checked: !selected.checked
  //       },
  //       ...todos.slice(index + 1, todos.length) //선택한다음부터 todos 마지막까지의 배렬을 얻는다.

            // 이렇게하는 목적이 배렬에서 선택된 요소를 제외한 나머지 배렬요소를 얻자는것이다.
            // 그래서 오직 선택된 요소만 변화시키기 위해서이다.
  //     ]
  //   });
  // }

  handleSelect = (color) => {
    this.setState({
      color: color
    })
  }

  render() {
    const {input, todos, colors, color} = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelect
    } = this;
    return (
      <div>
        <TodoListTemplate 
          form={(
            <Form
              value={input}
              onChange={handleChange}
              onCreate={handleCreate}
              onKeyPress={handleKeyPress}
              color={color}
            />
          )}
          palette={(
            <Palette colors={colors} selected={color} onSelect={handleSelect} />
          )}
        >
          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;