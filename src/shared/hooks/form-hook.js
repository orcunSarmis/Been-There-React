import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
    switch (action.type) {
      case "INPUT_CHANGE":
        let formIsValide = true;
        for (const inputId in state.inputs) {
          if (inputId === action.inputId) {
            formIsValide = formIsValide && action.isValid;
          } else {
            formIsValide = formIsValide && state.inputs[inputId].isValid;
          }
        }
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.inputId]: { value: action.value, isValid: action.isValid },
          },
          isValid: formIsValide,
        };
  
      default:
        return state;
    }
  };

export const useForm = (initialInputs, initialFormValidity) => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initialInputs,
        isValid: initialFormValidity,
      });

      const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
          type: "INPUT_CHANGE",
          value: value,
          isValid: isValid,
          inputId: id,
        });
      }, []);

      return [formState, inputHandler];
};