import React from "react";

interface MyComponentProps {
  children: React.ReactNode;
}


const NeonContainer = ({ children }: MyComponentProps) => {
  return (
    <div
      className="flex-col justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
    >
      {children}
    </div>
  );
}

export default NeonContainer;