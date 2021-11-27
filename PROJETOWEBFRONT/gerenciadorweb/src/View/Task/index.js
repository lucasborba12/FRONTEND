import React,{useState, useEffect} from 'react';
import * as Styled from './styles';
import api from '../../services/api';
import { format } from 'date-fns';

import { useParams } from 'react-router';

import { Navigate } from 'react-router';

/*IMAGENS */
import Imagem from '../../Imgs/filter.png';
import Imagem1 from '../../Imgs/filter1.png';
import Imagem2 from '../../Imgs/filter2.png';

/* COMPONENTES */
import Header from'../../Componets/Header';
import Footer from '../../Componets/Footer';
import Filter from '../../Componets/Filter';
import TaskCard from '../../Componets/TaskCard';
import iconUtils from '../../utils/icons';
import styled from 'styled-components';

function Task(){
    const {id} = useParams();

    const [navigate, setNavigate] = useState(false);
   const [type, setType] = useState();
   const [done, setDone] = useState(false);
   const [title, setTitle] = useState();
   const [description, setDescription] = useState();
   const [date, setDate] = useState();
   const [hour, setHour] = useState();
   const [macadress, setMacadress] = useState('11:11:11:11:11:11');
    
    async function save(){
        if(id){
            await api.put(`/task/${id}`, {
                macadress,
                done,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            }).then(() => setNavigate(true))
        }else{
            await api.post('/task', {
                macadress,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            }).then(() => setNavigate(true))
        }}
         
      async function loadTask(){
        await api.get(`/task/${id}`)
        .then( response => {
            setType(response.data.type)
            setTitle(response.data.title)
            setDescription(response.data.description)
            setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
            setHour(format(new Date(response.data.when), 'HH:mm'))
        })
    }

    useEffect(() => {
        loadTask();
    }, [])


            return(
  <Styled.Container>
      {navigate && <Navigate to="/"></Navigate>}
       <Header />
      <Styled.Form>
          <Styled.Icons>
              {
                  iconUtils.map((icon, index) => (
                      index > 0 &&
                      <button type="button" onClick={() => setType(index)}>
                      <img src={icon} alt="Tarefa" className={type && type != index && 'off'} />
                      </button>
                      ))
              }
               </Styled.Icons>
           
           <Styled.Input>
           <input type="text" placeholder="Título" onChange={e => setTitle(e.target.value)} value={title}></input>
          </Styled.Input>

          <Styled.TextArea>
          <input type="textarea" placeholder="Descrição" onChange={e => setDescription(e.target.value)} value={description}></input>
          </Styled.TextArea>
          
          <Styled.Input>
          <input type="date" onChange={e => setDate(e.target.value)} value={date}></input>
          </Styled.Input>

          <Styled.Input>
          <input type="time" onChange={e => setHour(e.target.value)} value={hour}></input>
          </Styled.Input>
          
          <Styled.Option>
              <div>
              <input type="checkbox" check={done} onChange={e => setDone(e.target.value)}></input>
                  <span>CONCLUÍDO</span>
              </div>
              <button type="button">EXCLUIR</button>
          </Styled.Option>
         
          <Styled.Save>
          <button type="button" onClick={save}>SALVAR</button>
             </Styled.Save>
             </Styled.Form>   
          
            <Footer/>
            </Styled.Container>
    
  )
            }         

export default Task;
