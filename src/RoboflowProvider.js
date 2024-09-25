import React, { createContext, useContext } from 'react';
import useRoboflowModel from './useRoboflowModel';

const RoboflowContext = createContext();

export const RoboflowProvider = ({ children, publishableKey, modelConfig }) => {
  const model = useRoboflowModel(publishableKey, modelConfig);
  return (
    <RoboflowContext.Provider value={model}>
      {children}
    </RoboflowContext.Provider>
  );
};

export const useRoboflow = () => useContext(RoboflowContext);
