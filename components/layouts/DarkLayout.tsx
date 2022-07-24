import React, { FC, ReactNode } from "react";

interface IDarkLayout {
  children: ReactNode;
}

const DarkLayout: FC<IDarkLayout> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderRadius: '5px',
      padding: '10px',
    }}>
      <h3>Dark Layout</h3>
      <div>
        { children }
      </div>
    </div>
  )
}

export default DarkLayout;