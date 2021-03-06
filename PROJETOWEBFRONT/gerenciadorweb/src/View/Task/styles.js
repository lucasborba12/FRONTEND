import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Form = styled.div`   
    width: 50%;
`
  
  export const Icons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img{
     width:  60px;
     heigth: 50px;
     cursor: pointer;
     margin: 8px;
  }

  button{
      border: none;
      background: none;
  }
  .off{
     opacity: 0.4;
}
 
  `
  export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; 
  margin: 20px 0;

 input{
     font-size: 15px;
     padding: 10px;
     border: 2px solid #3977A3;
 } 
  `
  export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    
    input{
           font-size: 15px;
           padding 10px;
           border: 2px solid #3977A3;
       }
`
export const Option = styled.div`
    display: flex;
    justify-content: space-between;
    
    button{
        font-weight: bold;
        color: #3977A3;
        border: none;
        background: none;
        cursor: pointer;
        font-size: 15px;

 
        &:hover{
            opacity:0.7;
        }
    }

    div{
        display: flex;
        align-items: center;
        color: #3977A3;
        font-size: 15px;

    }
    `
    export const Save = styled.div`
    width: 100%;
    margin-top: 20px;
    button{
        width: 100%;
        background: #3977A3;
        border: none;
        font-size: 20px;
        color: white;
        border-radius: 20px;
        cursor: pointer;
    }
       
`
