import React, { useState } from "react";
import GenericTextInput from "../input/field/GenericTextInput";
import GenericCheckBox from "../input/checkbox/GenericCheckBox";
const TodoBox = () => {
  const [tareas, setTareas] = useState<{ titulo: string; completado: boolean; index: number }[]>([]);
  const [tareasCompletadas, setTareasCompletadas] = useState<{ titulo: string; completado: boolean; index: number }[]>([]);
  const [titulo, setTitulo] = useState<string>("");

  const handlerAgregarTarea = () => {
    if (titulo.trim() === "") return; // previene agregar tareas vacías

    setTareas([{ titulo: titulo, completado: false, index: tareas.length }, ...tareas]);
    setTitulo(""); // limpia el input
  };
  const handlerCambiarEstadoTarea = (index: number, state: boolean) => {
    console.log('Soy la tarea ' + index + ' y ahora soy ' + state);

    if (state) {
      const tareaCompletadaIndex = tareasCompletadas.findIndex(tarea => tarea.index === index);

      console.log('index de la tarea ',);
      const dondeInsertar = tareas.findIndex(tarea => {
        if (tarea.index < index) {
          return true;
        }
      });

      const newTareas = [...tareas];

      const newTarea = tareasCompletadas[tareaCompletadaIndex];
      newTarea.completado = false;

      newTareas.splice(dondeInsertar, 0, newTarea);

      setTareas(newTareas);


      setTareasCompletadas(tareasCompletadas.filter((_, i) => i !== tareaCompletadaIndex));




    } else {
      const tareaIndex = tareas.findIndex(tarea => {
        if (tarea.index === index) {
          return true;
        }
      })
      const newTareasCompletada = { ...tareas[tareaIndex], completado: true };
      setTareasCompletadas([newTareasCompletada, ...tareasCompletadas]);
      setTareas(tareas.filter((_, i) => i !== tareaIndex));


    }
  };

  const HayTareasCompletadas = () => {
    if (tareasCompletadas.length === 0) return;
    else {
      return (
        <>
          <div className="hr-with-text">
            <span>Tareas completadas</span>
          </div>
          {
            tareasCompletadas.map((tarea, index) => (
              <GenericCheckBox
                key={index}
                cbIndex={tarea.index}
                titulo={tarea.titulo}
                completado={tarea.completado}
                handlerCompletarTarea={handlerCambiarEstadoTarea}
              />
            ))
          }
        </>

      );
    }
  }
  return (
    <>
      <GenericTextInput
        titulo={titulo}
        onTituloChange={setTitulo}
        onClick={handlerAgregarTarea} />

      {
        tareas.map((tarea, index) => (
          <GenericCheckBox
            key={index}
            cbIndex={tarea.index}
            titulo={tarea.titulo}
            completado={tarea.completado}
            handlerCompletarTarea={handlerCambiarEstadoTarea}
          />
        ))
      }
      {
        HayTareasCompletadas()
      }
    </>
  );
};

export default TodoBox;