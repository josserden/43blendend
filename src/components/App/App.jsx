import {
  Container,
  EditForm,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';
import { useLocalStorage } from 'hooks';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const App = () => {
  const { value: todos, setValue: setTodos } = useLocalStorage('todos', []);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
    };

    setTodos([...todos, todo]);
  };
  const handleSubmit = data => {
    addTodo(data);
  };

  const deleteTodo = id => {
    setTodos(state => state.filter(todo => todo.id !== id));
  };

  const handleEdit = todo => {
    setCurrentTodo({ ...todo });
    // setIsEditing(true);
    toggleEditing();
  };

  const handleCancel = () => {
    // setIsEditing(false);
    toggleEditing();
  };

  const handleInputEditChange = e => {
    setCurrentTodo({ ...currentTodo, text: e.target.value.trim() });
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedItem = todos.map(todo => {
      return todo.id === id ? updatedTodo : todo;
    });

    // setIsEditing(false);
    toggleEditing();
    setTodos(updatedItem);
  };

  const handleEditFormUpdate = e => {
    e.preventDefault();

    if (currentTodo.text === '') {
      return alert('Enter some text!');
    }

    handleUpdateTodo(currentTodo.id, currentTodo);
  };

  const toggleEditing = () => setIsEditing(state => !state);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {isEditing ? (
            <EditForm
              onCancel={handleCancel}
              currentTodo={currentTodo}
              onUpdate={handleEditFormUpdate}
              onChange={handleInputEditChange}
            />
          ) : (
            <SearchForm onSubmit={handleSubmit} />
          )}

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid>
            {todos.length > 0 &&
              todos.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo
                    id={todo.id}
                    text={todo.text}
                    counter={index + 1}
                    onClick={deleteTodo}
                    onEdit={() => handleEdit(todo)}
                    disabled={isEditing}
                  />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
