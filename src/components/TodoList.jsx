import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Circle, Plus, Trash2 } from "lucide-react";
import SwitchTheme from "@/components/ui/switch-theme.jsx";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2"><div className="flex items-center justify-between w-full">
            <SwitchTheme className="rounded-full h-10 w-10" />
            <div className="flex items-center gap-2 mx-auto">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              <span>Todo List</span>
            </div>
          </div>
          </CardTitle>
          {totalCount > 0 && (
            <p className="text-sm text-muted-foreground text-center">
              {completedCount} of {totalCount} completed
            </p>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Add a new task..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button onClick={addTodo} size="sm" className="px-3">
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-2 max-h-96 overflow-y-auto">
            {todos.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Circle className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>No tasks yet. Add one above!</p>
              </div>
            ) : (
              [
                ...todos.filter((t) => !t.completed),
                ...todos.filter((t) => t.completed),
              ].map((todo) => (
                <div
                  key={todo.id}
                  className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 ${
                    todo.completed
                      ? "bg-muted/50 border-muted"
                      : "bg-background border-border hover:border-primary/50"
                  }`}
                >
                  <Checkbox
                    checked={todo.completed}
                    onCheckedChange={() => toggleTodo(todo.id)}
                    className="flex-shrink-0 border-2 border-gray-400"
                  />
                  <span
                    className={`flex-1 text-sm transition-all duration-200 ${
                      todo.completed
                        ? "line-through text-muted-foreground"
                        : "text-foreground"
                    }`}
                  >
                    {todo.text}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteTodo(todo.id)}
                    className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))
            )}
          </div>

          {completedCount > 0 && (
            <div className="pt-2 border-t">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setTodos(todos.filter((todo) => !todo.completed))
                }
                className="w-full text-muted-foreground hover:text-foreground"
              >
                Clear {completedCount} completed task
                {completedCount !== 1 ? "s" : ""}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
