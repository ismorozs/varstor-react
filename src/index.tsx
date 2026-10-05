import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
  type ReactNode,
  type Context,
} from "react";

import { type IVarstor } from "varstor";

const CONTEXTS = {} as Record<string, Context<Record<string, any>>>;

export type IVarstorProviderProps = {
  children: ReactNode;
  stores: IVarstor[];
};

export const useVarstor = (namespace = "") => useContext(CONTEXTS[namespace]);

export const VarstorProvider = ({
  children,
  stores,
}: IVarstorProviderProps) => {
  const contextProviders = stores.map((store) => {
    const Context = createContext(store.get());
    CONTEXTS[store.namespace()] = Context;

    const ContextProvider = ({ children }: { children: ReactNode }) => {
      const [state, setState] = useState(store.get());
      const contextValues = useMemo(() => state, [state]);

      const onStoreChange = useCallback(
        (_: string[], store: IVarstor) => setState(store.get()),
        [],
      );

      useEffect(() => {
        store.onChange(onStoreChange);
        return () => {
          store.removeListener(onStoreChange);
        };
      }, [onStoreChange]);

      return <Context value={contextValues}>{children}</Context>;
    };

    return ContextProvider;
  });

  return contextProviders.reduce(
    (children, ContextProvider) => (
      <ContextProvider>{children}</ContextProvider>
    ),
    children,
  );
};
