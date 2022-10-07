import React from "react";
import styled from "styled-components";

export default function TodoItem({ todo, onRemove }: any) {
    const { id, text, checked } = todo;
    return (
        <>
            <DoneButton>{checked ? <CheckBox /> : null}</DoneButton>
            <Topic
                style={{
                    color: checked ? "#ccc" : "#000",
                }}
            >
                {text}
            </Topic>
            <DeleteButton onClick={() => onRemove(id)}>
                <div>X</div>
            </DeleteButton>
        </>
    );
}

const CheckBox = styled.div``;
const DeleteButton = styled.button``;
const Topic = styled.span``;
const DoneButton = styled.div``;
