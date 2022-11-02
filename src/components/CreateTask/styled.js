import styled from "styled-components";

export const Container = styled.div`
    background-color: #69B8B4;
    border-radius: 5px;
    border: 4px solid black;
    padding: 55px;
    gap: 1rem;
`;

export const Content = styled.div`
    margin-top: 1.5rem;
    line-height: 1.6;
    color: yellow;
`;

export const Form = styled.form`
    background-color: #DDCO9E;
    width: 100%;
    margin-top: 3px;
    border-radius: 20px;

    strong {
        line-height: 1.5;
        color: black;
    }

    textarea {
        width: 94.1%;
        resize: none;
        border: 0;
        border-radius: 4px;
        height: 5rem;
        color: black;
        padding: 10px;
        line-height: 1.3;
        margin-top: 1rem;
    }

    button {
        padding: 0.5rem 1rem;
        margin-top: 1rem;
        border-radius: 15px;
        border: 0;
        background-color: #C6A58E;
        transition: background-color 0.5s;
    }

    button[type=submit]:not(:disabled):hover{
        background: white;
    }

`;

export const TaskList = styled.div`
    margin-top: 2rem;
`;