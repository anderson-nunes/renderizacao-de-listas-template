import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {

  const [lista, setLista] = useState([])

  const [novaTarefa, setNovaTarefa] = useState("");



  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    setLista([...lista, novaTarefa])
    setNovaTarefa('')
  };

  const removeTarefa = (item) => {

    const listaFiltrada = lista.filter((tarefa) => tarefa !== item)

    setLista(listaFiltrada)
  };

  const listaRenderizada = lista.map((item, index) => {
    return <Tarefa key={index}>
      <p>{item}</p>
      <RemoveButton onClick={() => removeTarefa(item)}>
        <img src={bin} alt="" width="16px" />
      </RemoveButton>
    </Tarefa>
  })


  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          {listaRenderizada}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
