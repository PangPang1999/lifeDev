import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Todo } from "../hooks/useTodos";
import axios from "axios";

const TodoForm = () => {
  const queryClient = useQueryClient(); // 1. 获取 QueryClient 实例

  // 2. 使用 useMutation Hook
  const addTodo = useMutation({
    // 3. 定义 mutationFn
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),
    onSuccess: (savedTodo, newTodo) => {
      // 方式一：缓存失效 (JSONPlaceholder不适用此方式看到效果)
      // queryClient.invalidateQueries({
      //    queryKey:['todos']
      // });
      // 方式二：直接更新缓存 (适用于JSONPlaceholder)
      queryClient.setQueryData<Todo[]>(
        ["todos"],
        (todos) => [savedTodo, ...(todos || [])]
        // 将新todo添加到列表顶部
        // - 接收当前缓存中的todos数组
        // - 将新添加的todo ( savedTodo ) 放在数组的最前面
        // - 使用展开运算符 ( ... ) 将原有的todos数组展开
        // - 使用 (todos || []) 确保即使缓存中没有数据也不会出错
      );
    },

    onError: (error: Error) => {
      console.error("Error adding todo:", error.message);
    },
  });
  const ref = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ref.current && ref.current.value)
      // 5. 触发 mutationFn
      addTodo.mutate({
        id: 0,
        title: ref.current?.value,
        completed: false,
        userId: 1,
      });
  };
  return (
    <form className="row mb-3" onSubmit={handleSubmit}>
      <div className="col">
        <input ref={ref} type="text" className="form-control" />
      </div>
      <div className="col">
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
