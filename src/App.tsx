import Todos from "./components/Todos";
import Todo from "./models/todo";

export default function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn Type Script")];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}