import styled from "styled-components";

export const Container = styled.div`
    background-color: dimgray;
    display: flex;
    gap: 20px;
    border-radius: 5px;
    padding: 15px;
    flex-direction: row;
    justify-content: right;
    margin-bottom: 1rem;

    .itemchecked {
        text-decoration: line-through;
    }
    
    p{
        color: white;
        width: 80%;
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
    }

`
export const TrashButton = styled.button`
    background: #69B8B4;
    border: 0;
    color: white;
    line-height: 0;
    border-radius: 5px;
    :hover {
        color: black;
    }
`
export const CheckButton = styled.button`
    background: #69B8B4;
    border: 0;
    color: white;
    line-height: 0;
    border-radius: 5px;
    :hover {
        color: black;
    }
`