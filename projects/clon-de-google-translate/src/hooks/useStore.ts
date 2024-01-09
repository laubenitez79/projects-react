import { useReducer } from "react";
import { type State, type Action, Language, FromLanguage } from "../types.d";
import { AUTO_LANGUAGES } from "../constants";

// 1. Crear el estado inicial
const initialState: State = {
  fromLanguage: "auto",
  toLanguage: "en",
  fronText: "",
  result: "",
  loading: false,
};

// 2. Crear el reducer
function reducer(state: State, action: Action) {
  const { type } = action;

  if (type === "INTERCHANGE_LANGUAGES") {

    //logica del estado dentro del reducer, evitamos que se haga dentro del componente. 
    if (state.fromLanguage === AUTO_LANGUAGES) return state;
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    };
  }
  if (type === "SET_FROM_LANGUAGE") {
    return {
      ...state,
      fromLanguage: action.payload,
    };
  }
  if (type === "SET_TO_LANGUAGE") {
    return {
      ...state,
      toLanguage: action.payload,
    };
  }
  if (type === "SET_FROM_TEXT") {
    return {
      ...state,
      loading: true,
      fronText: action.payload,
      result: "",
    };
  }
  if (type === "SET_RESULT") {
    return {
      ...state,
      loading: false,
      result: action.payload,
    };
  }

  return state;
}

export function useStore() {
  // 3. Usar el hook use reducer
  // El reducer devuelve un dispatch y el estado actualizado
  const [{ fromLanguage, toLanguage, fronText, result, loading }, dispatch] =
    useReducer(reducer, initialState);

  const interchangeLanguages = () => {
    dispatch({ type: "INTERCHANGE_LANGUAGES" });
  };

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: "SET_FROM_LANGUAGE", payload });
  };

  const setToLanguage = (payload: Language) => {
    dispatch({ type: "SET_TO_LANGUAGE", payload });
  };

  const setFromText = (payload: Language) => {
    dispatch({ type: "SET_FROM_TEXT", payload });
  };

  const setResult = (payload: Language) => {
    dispatch({ type: "SET_RESULT", payload });
  };

  return {
    fromLanguage,
    toLanguage,
    fronText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
  };
}
