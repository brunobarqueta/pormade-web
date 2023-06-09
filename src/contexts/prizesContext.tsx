import { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

import nova_iorque from "../assets/nova-iorque.png";
import milao from "../assets/milao.png";
import milao2 from "../assets/milao2.png";

export interface Prize {
  id: number;
  title: string;
  picture: string;
  points: number;
}

export interface PrizesContextInterface {
  prizes: Prize[];
  setPrizes: Dispatch<SetStateAction<Prize[]>>;
}

const defaultState: PrizesContextInterface = {
  prizes: [],
  setPrizes: () => {}
};

export const PrizesContext = createContext(defaultState);

type PrizesProviderProps = {
  children: ReactNode;
};

const PrizesProvider = ({ children }: PrizesProviderProps) => {
  const [prizes, setPrizes] = useState<Prize[]>([
    {
      id: 1,
      title: "Viagem para Nova Iorque",
      picture: nova_iorque,
      points: 300000,
    },
    {
      id: 2,
      title: "Viagem para Milão",
      picture: milao,
      points: 480000,
    },
    {
      id: 3,
      title: "Viagem para Milão 2",
      picture: milao2,
      points: 520000,
    },
    {
      id: 4,
      title: "Viagem para Nova Iorque 2",
      picture: nova_iorque,
      points: 120000,
    },
    {
      id: 5,
      title: "Viagem para Milão 3",
      picture: milao,
      points: 96000,
    },
    {
      id: 6,
      title: "Viagem para Milão 4",
      picture: milao2,
      points: 340000,
    },
  ]);

  return (
    <PrizesContext.Provider value={{ prizes, setPrizes }}>
      {children}
    </PrizesContext.Provider>
  );
};

export default PrizesProvider;
