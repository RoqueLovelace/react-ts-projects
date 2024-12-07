import React from 'react';
import classNames from 'classnames';

interface GenericCheckBoxProps {
  cbIndex: number;
  titulo: string;
  completado: boolean;
  handlerCompletarTarea: (index: number, state: boolean) => void;
}

const GenericCheckBox: React.FC<GenericCheckBoxProps> = ({ titulo, completado, handlerCompletarTarea, cbIndex }) => {
  const handleChange = () => {
    handlerCompletarTarea(cbIndex, completado);
  };

  return (
    <div id={cbIndex.toString()} className={classNames('flex items-center m-5', { tachado: completado })}>
      <input
        onChange={handleChange}
        type="checkbox"
        checked={completado}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {titulo}
      </label>
    </div>
  );
};

export default GenericCheckBox;
