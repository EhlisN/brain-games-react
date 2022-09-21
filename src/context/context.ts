import { createContext, Dispatch, SetStateAction } from 'react';

const Context = createContext({} as IModal & IAuth);

export default Context;

interface IModal {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

interface IAuth {
  isLoginUser: boolean;
  setIsLoginUser: Dispatch<SetStateAction<boolean>>;
}
