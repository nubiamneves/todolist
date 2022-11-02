import { useState } from 'react';
import {TrashSimple, Check} from 'phosphor-react'
import { Container, TrashButton, CheckButton } from "./styled";

export function Task({task, onDeleteTask}){

    function handleDeleteTask() {
        onDeleteTask(task.id)
    }
    
    const [check, setCheck] = useState(false)

    function handleCheckTask() {
       setCheck(checked => !checked)        
    }

    return (
        <Container>
            <p className={check ? 'itemchecked': ''}>{task.content}</p>

            <TrashButton onClick={handleDeleteTask} title="deletar item">
                <TrashSimple size={23}/>
            </TrashButton>

            <CheckButton onClick={handleCheckTask} title="checar item">
                <Check size={27}/>
            </CheckButton>
        </Container>
    )
}