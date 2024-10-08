const saveForm = (payload, actionType) => {
  return {
    type: actionType,
    payload,
  };
};

export const formAction = {
  saveForm,
};
