import React,{useState} from 'react';
import * as Styled from './styles';


/*IMAGENS */
import Imagem from '../../Imgs/filter.png';
import Imagem1 from '../../Imgs/filter1.png';
import Imagem2 from '../../Imgs/filter2.png';

/* COMPONENTES */
import Header from'../../Componets/Header';
import Footer from '../../Componets/Footer';
import Filter from '../../Componets/Filter';
import TaskCard from '../../Componets/TaskCard';


function Home(){
 
 const[filterActive, functionFilter] = useState();
  return(
  <Styled.Container>
       <Header />
        <Styled.ContainerFilter> 
          <button type='button' onClick={() => functionFilter('todos')}>
          <Filter title="TODOS" img={Imagem} actived={filterActive == 'todos'}/>
          </button>
          
          <button type='button' onClick={() => functionFilter('hoje')}>
          <Filter title="HOJE"img={Imagem1} actived={filterActive == 'hoje'}/>
          </button>
          
          <button type='button' onClick={() => functionFilter('semana')}>
          <Filter title="SEMANA"img={Imagem2} actived={filterActive == 'semana'}/>
          </button>
         
          <button type='button' onClick={() => functionFilter('mes')}>
          <Filter title="MÊS"img={Imagem} actived={filterActive == 'mes'}/>
          </button>
          </Styled.ContainerFilter>
          <Styled.ContainerCard> 
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />

            
          </Styled.ContainerCard>

     <Footer/>
   </Styled.Container>
    
  )

}

export default Home;
