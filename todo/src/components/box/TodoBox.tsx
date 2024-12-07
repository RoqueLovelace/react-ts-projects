import React, { useState } from "react";
import GenericTextInput from "../input/field/GenericTextInput";
import GenericCheckBox from "../input/checkbox/GenericCheckBox";
const TodoBox = () => {
  interface Tarea {
    tarea: JSX.Element;
  }

  const [tareas, setTareas] = useState<Tarea[]>([]);



  const handlerAgregarTarea = (_title: string, _completado: boolean) => {

    console.log(_title, _completado);

    const tarea = <GenericCheckBox titulo={_title} completado={_completado} />;

    setTareas([...tareas, { tarea }]);
  };

  return (
    <>
      <GenericTextInput onClick={handlerAgregarTarea} />

      {
        tareas.map((tarea, index) => {
          return (
            <div key={index}>
              {tarea.tarea}
            </div>
          );
        })
      }
    </>
  );
};

export default TodoBox;