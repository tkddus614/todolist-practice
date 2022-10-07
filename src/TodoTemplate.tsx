import React, { useRef, useState } from "react";
import styled from "styled-components";
import TodoInsert from "./TodoInsert";
import TodoItemList from "./TodoItemList";

export default function TodoTemplate() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "first",
            checked: true,
        },
        {
            id: 2,
            text: "second",
            checked: true,
        },
        {
            id: 3,
            text: "third",
            checked: false,
        },
    ]);

    const nextId = useRef(4);

    const handleSubmit = (text: string) => {
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        };
        setTodos(todos.concat(todo));
        nextId.current += 1;
    };

    const onRemove = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <>
            <TodoTitle>TODO LIST</TodoTitle>
            <TodoInsert onSubmit={handleSubmit} onRemove={onRemove} />
            <TodoItemList todos={todos} />
        </>
    );
}

const TodoTitle = styled.div``;
