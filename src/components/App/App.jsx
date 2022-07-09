import {Container, EditForm, Header, SearchForm, Section} from 'components';
import {useState} from 'react';
import {TodoList} from '../Todolist/TodoList';

export const App = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const handleEdit = todo => {
    setCurrentTodo(todo);
    toggleEditing();
  };

  const handleCancel = () => {
    toggleEditing();
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
              onSubmit={toggleEditing}
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
