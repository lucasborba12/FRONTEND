import styled from "styled-components";

export const Container = styled.div`
        width: 100%;
        height: 60px;
        background: #000000;

        border-bottom: 6px solid #0F77A3;
        
       
`

export const Menu = styled.div`
         width: 50%;
         height: 70px;
         display: flex;
         align-items: center;
         
         a{
                 color:#FFF;
                 font-weight: bold;
                 text-decoration: none;
                 margin: 0 10px;
                 
                }

                .barra::after{
                        content:"|";
                        margin: 0 10px;
                        color:#348EF5
                }

                a:hover{
                        color:#0F77A3
                }
`
                
        