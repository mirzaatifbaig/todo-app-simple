import { TodoList } from "@/components/TodoList";
import "./App.css";
import SwitchTheme from "@/components/ui/switch-theme.jsx";

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
