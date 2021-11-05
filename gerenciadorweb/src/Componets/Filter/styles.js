import styled from "styled-components";

export const Container = styled.div`
        width: 150px;
        height: 50px;
        background: ${props => props.activation ? '#6077A3' : '#000000'};

        border-radius: 5px;
        padding: 10px;
        cursor:pointer;
        display: flex;
        width:160px;
                height:70px;
                border:solid 2px;
                border-radius:12px;
                color: #00000;
                


        img{
                width: 80px;
                height: 78px;
                margin-top: -14px;
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