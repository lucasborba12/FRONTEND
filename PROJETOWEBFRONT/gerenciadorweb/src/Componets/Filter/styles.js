import styled from "styled-components";

export const Container = styled.div`
        width: 150px;
        height: 50px;
        background: ${props => props.activation ? '#6077A3' : '#000000'};

        border-radius: 5px;
        padding: 12px;
        cursor:pointer;
        display: flex;
        width:140px;
                height:45px;
                border:solid 5px;
                border-radius:5px;
                color: #00000;
                


        img{
                width: 79px;
                height: 79px;
                margin-top: -18px;
                margin-left: -15px;
                
        }
        span{
                color: #FFF;
                font-weight: bold;
                margin-top: 18px;
                font-size: 15px;        
                
                        
        }
        &:hover{
                background:#3977A3`