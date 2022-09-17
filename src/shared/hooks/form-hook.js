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
        case 'SET_DATA':
          return {
            inputs: action.inputs,
            isValid: action.formIsValide
          }
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

      const setFormData = useCallback((inputData, formValidity) => {
        dispatch({
          type: 'SET_DATA',
          inputs: inputData,
          formIsValide: formValidity
        });
      }, []);

      return [formState, inputHandler, setFormData];
};