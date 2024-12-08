import React, { useState } from "react";
import GenericTextInput from "../input/field/GenericTextInput";
import GenericCheckBox from "../input/checkbox/GenericCheckBox";
import GenericButton from "../input/button/GenericButton";
const TodoBox = () => {
  const [tareas, setTareas] = useState<{ titulo: string; completado: boolean; index: number }[]>([]);
  const [tareasCompletadas, setTareasCompletadas] = useState<{ titulo: string; completado: boolean; index: number }[]>([]);
  const [titulo, setTitulo] = useState<string>("");

  const handlerAgregarTarea = (id: string) => {
    console.log('AGREGAR');
    if (titulo.trim() === "") return; // previene agregar tareas vacías

    setTareas([{ titulo: titulo, completado: false, index: tareas.length }, ...tareas]);
    setTitulo(""); // limpia el input
  };
  const handlerCambiarEstadoTarea = (index: number, state: boolean) => {
    if (state) {
      const tareaCompletadaIndex = tareasCompletadas.findIndex(tarea => tarea.index === index);
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

  const handlerBorrarTarea = (id: string) => {
    let tIndex = tareas.findIndex(tarea => {
      return tarea.index.toString() === id;
    });

    if (tIndex !== -1) {
      const newTareas = [...tareas];
      newTareas.splice(tIndex, 1);
      setTareas(newTareas);
      return;
    }

    tIndex = tareasCompletadas.findIndex(tarea => {
      return tarea.index.toString() === id;
    });
    const newTareas = [...tareasCompletadas];
    newTareas.splice(tIndex, 1);
    setTareasCompletadas(newTareas);

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
              <div key={index} className="tarea mb-5">
                <GenericCheckBox
                  key={index}
                  cbIndex={tarea.index}
                  titulo={tarea.titulo}
                  completado={tarea.completado}
                  handlerCompletarTarea={handlerCambiarEstadoTarea}
                />

                <GenericButton onClick={handlerBorrarTarea} titulo="Borrar" id={tarea.index.toString()} />
              </div>
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
        onClick={handlerAgregarTarea}
      />

      {
        tareas.map((tarea, index) => (
          <div key={index} className="tarea mb-5">
            <GenericCheckBox
              key={index}
              cbIndex={tarea.index}
              titulo={tarea.titulo}
              completado={tarea.completado}
              handlerCompletarTarea={handlerCambiarEstadoTarea}
            />

            <GenericButton onClick={handlerBorrarTarea} titulo="Borrar" id={tarea.index.toString()} />
          </div>
        ))
      }
      {
        HayTareasCompletadas()
      }
    </>
  );
};

export default TodoBox;