import { Container, EditForm, Header, SearchForm, Section } from 'components';
import { useState } from 'react';
import { TodoList } from '../Todolist/TodoList';

export const App = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const handleEdit = todo => {
    setCurrentTodo(todo);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };



  return (
    <>
      <Header />
      <Section>
        <Container>
          {isEditing ? (
            <EditForm
              onCancel={handleCancel}
              currentTodo={currentTodo}
              onSubmit={setIsEditing}
            />
          ) : (
            <SearchForm />
          )}
          <TodoList onEdit={handleEdit} />
        </Container>
      </Section>
    </>
  );
};
