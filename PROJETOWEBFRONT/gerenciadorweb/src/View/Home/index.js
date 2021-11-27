import React,{useState, useEffect} from 'react';
import * as Styled from './styles';
import api from '../../services/api';

import { Link } from 'react-router-dom';


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
 
 const[filterActive, functionFilter] = useState('all');
 
 const[tasks, setTasks] = useState([]);

 async function loadTasks(){
  await api.get(`/task//filter/${filterActive}/11:11:11:11:11:11`)
  .then(response => {
    setTasks(response.data)
  })
}

useEffect(() => {
    loadTasks();
  }, [filterActive])
 
 return(
  <Styled.Container>
       <Header />
        <Styled.ContainerFilter> 
          <button type='button' onClick={() => functionFilter('all')}>
          <Filter title="TODOS" img={Imagem} actived={filterActive == 'todos'}/>
          </button>
          
          <button type='button' onClick={() => functionFilter('today')}>
          <Filter title="HOJE"img={Imagem1} actived={filterActive == 'hoje'}/>
          </button>
          
          <button type='button' onClick={() => functionFilter('week')}>
          <Filter title="SEMANA"img={Imagem2} actived={filterActive == 'semana'}/>
          </button>
         
          <button type='button' onClick={() => functionFilter('month')}>
          <Filter title="MÊS"img={Imagem} actived={filterActive == 'mes'}/>
          </button>
          </Styled.ContainerFilter>
          <Styled.ContainerCard>
{
  tasks.map( t => (
    <Link to={`/task/${t._id}`}>  
    <TaskCard type={t.type} title={t.title} when={t.when}/>
  </Link>))
}
</Styled.ContainerCard>
 <Footer/>
   </Styled.Container>
    
  )

}

export default Home;

