import React from 'react';
import StatementsForm from './StatementsForm/StatementsForm';
import Visualisation from '@learninglocker/visualisations/dist/components/Visualisation';
import { updateModel } from 'ui/redux/modules/models';

export const VisualiseFormOld = ({ model, exportVisualisation }) =>
  <StatementsForm model={model} exportVisualisation={exportVisualisation} />;

const VisualiseForm = ({ model }) => {
  console.log('001');
  // return <div>001</div>;
  const actions = {
    updateModel
  };

  return <Visualisation model={model} actions={actions} />;
};

export default VisualiseForm;
