import styled from "styled-components";

export const Container = styled.div`
        width:500px;
        height:150px;
        
        box-shadow: -3px -1px 13px -2px rgba(0, 0, 0, 0.73);
      
        border-radius: 15px;
       
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        margin: 40px;
        
`
export const TopCard = styled.div`
display: flex;
aling-items: center;
justifiy-content: center;
flex-direction: column;

img{
        width: 70px;
        height: 70px;
}

`
export const BottomCard = styled.div`
width: 100%;
display: flex;
justify-content: space-around;

strong{
        color: #0F77A3;
}
span{
        
        color:#000000;
}
`