import { TodoList } from "@/components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
