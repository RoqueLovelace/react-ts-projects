import React from 'react';
import GenericButton from '../button/GenericButton';

interface GenericTextInputProps {
  onClick: (_title: string, _completado: boolean) => void;
}

const GenericTextInput: React.FC<GenericTextInputProps> = ({ onClick }) => {
  const [title, setTitle] = React.useState<string>('');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <div className="flex m-5">
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Hacer un todo app"
        required
        onChange={handleOnChange}
      />
      <GenericButton onClick={() => onClick(title, false)} />
    </div>
  );
};

export default GenericTextInput;
