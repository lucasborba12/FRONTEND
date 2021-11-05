import React from 'react';
import * as Styled from './style'



function TaskCard(){
    return(
        <Styled.Container>
     <Styled.TopCard>
    <img src="" alt="tarefa"></img>
    <h3>Tarefa</h3>
     </Styled.TopCard>
     <Styled.BottomCard>
    <strong>16/09/2020</strong>
    <span><strong>10:00</strong></span>
     </Styled.BottomCard>
        </Styled.Container>

    )
}
export default TaskCard;