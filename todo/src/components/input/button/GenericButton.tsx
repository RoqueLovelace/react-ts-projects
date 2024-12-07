import React from 'react';

interface GenericButtonProps {
  onClick: () => void;
}

const GenericButton: React.FC<GenericButtonProps> = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        type="button"
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        Agregar
      </button>
    </div>
  );
};

export default GenericButton;
