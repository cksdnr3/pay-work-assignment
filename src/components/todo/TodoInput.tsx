import React, { ChangeEvent, FormEvent } from 'react';
import { AddTodoRequest } from 'api/todo';
import Spinner from 'components/common/Spinner';
import { useState } from 'react';
import styled from 'styled-components';
import { getDateString, getDayString } from 'utils/formatDate';

interface TodoInputProps {
    dispatchAdd: (content: AddTodoRequest) => void;
    addTodoLoading: boolean;
}

const TodoInput: React.FC<TodoInputProps> = ({ dispatchAdd, addTodoLoading }) => {
    const [now] = useState(new Date());
    const [input, setInput] = useState('');
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInput(value);
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatchAdd({ content: input });
        setInput('');
    }

    return (
        <Container>
            <Title>Todo List</Title>
            <Timer>{`${getDateString(now)} ${getDayString(now)}`}</Timer>
            <Form
            onSubmit={handleSubmit}>
                <Input 
                onChange={handleInputChange}
                value={input}
                placeholder='할 일 제목' />
                {addTodoLoading 
                ? <Spinner width='37' height='37' /> 
                : <Button>추가</Button>} 
            </Form>
        </Container>
    )
}

const Container = styled.div`
    padding: 10px 30px;
    border-bottom: 1px solid gray;
    div {
        margin-bottom: 10px;
    }
`;

const Title = styled.div`
    font-size: 28px;
    font-weight: 600;
`

const Timer = styled.div`
    font-size: 18px;
    font-weight: 500;
`

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 20px 0;
`

const Input = styled.input`
    padding: 10px;
    border: 1px solid #000000;
    border-radius: 5px;
    width: 90%;
    margin-right: 10px;
`

const Button = styled.button`
    cursor: pointer;
    width: 10%;
`

export default TodoInput;