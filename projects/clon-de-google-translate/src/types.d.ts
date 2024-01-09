import { type AUTO_LANGUAGES, type SUPPORTED_LANGUAGES } from "./constants";

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguages = typeof AUTO_LANGUAGES
export type FromLanguage = Language | AutoLanguages

export interface State {
    fromLanguage: fromLanguage;
    toLanguage: Language;
    fronText: string;
    result: string;
    loading: false;
}

export type Action = 
    | { type : 'SET_FROM_LANGUAGE', payload : FromLanguage}
    | {type : 'INTERCHANGE_LANGUAGES'}
    | {type : 'SET_TO_LANGUAGE', payload : Language}
    | {type : 'SET_FROM_TEXT' , payload : string}
    | {type : 'SET_RESULT' , payload : string}

export enum SectionType {
    From = 'from',
    To = 'to'
}