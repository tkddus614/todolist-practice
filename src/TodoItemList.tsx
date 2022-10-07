import React from "react";

import TodoItem from "./TodoItem";

export default function TodoItemList({ todos }: any) {
    return (
        <>
            {todos.map((todo: any) => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </>
    );
}
