import React from 'react';

interface GenericButtonProps {
  onClick: (id: string) => void;
  titulo: string;
  id: string
}

const GenericButton: React.FC<GenericButtonProps> = ({ onClick, titulo, id }) => {
  return (
    <div>
      <button
        id={id}
        onClick={() => onClick(id)}
        type="button"
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        {titulo}
      </button>
    </div>
  );
};

export default GenericButton;
