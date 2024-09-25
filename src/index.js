import React, { useEffect, useState } from 'react';
import Roboflow from 'roboflow';

const useRoboflowModel = (publishableKey, modelConfig) => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    const roboflow = new Roboflow();
    roboflow.auth({ publishable_key: publishableKey })
      .then(() => roboflow.load(modelConfig))
      .then(loadedModel => setModel(loadedModel))
      .catch(err => console.error('Error loading Roboflow model:', err));
  }, [publishableKey, modelConfig]);

  return model;
};

export default useRoboflowModel;
