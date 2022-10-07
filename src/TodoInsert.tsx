import React, { useState } from "react";
import styled from "styled-components";

export default function TodoInsert(props: any) {
    const [value, setValue] = useState("");

    const handleChange = (e: any) => {
        setValue(e.target.value);
    };

    const handleKeyPress = (e: any) => {
        if (e.key === "Enter") {
            props.handleSubmit();
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault(); // onSubmit 이벤트는 브라우저를 새로고치기 때문에 막아주기
        if (!value) return;
        // 만약 input 창이 빈채로 submit을 하려고 할 땐 return시키기
        props.onSubmit(value);
        setValue("");
        // submit을 한 후에는 input 창을 비우기
    };

    return (
        <>
            <form>
                <TextInput
                    type="text"
                    name="text"
                    placeholder="Hey, input here -"
                    value={value}
                    onChange={handleChange}
                />
                <AddButton
                    type="submit"
                    onClick={handleSubmit}
                    onKeyPress={handleKeyPress}
                >
                    ADD
                </AddButton>
            </form>
        </>
    );
}
const AddButton = styled.button``;
const TextInput = styled.input``;
