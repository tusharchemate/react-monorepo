import { MyOrgClient } from "@myorg/client/src/my-org-client";
import React from "react";

export interface ClientsContext {
  getOrgClient: () => MyOrgClient;
}

const stub = (): never => {
  throw new Error(
    "You forgot to wrap your component in <ClientContextProvider>."
  );
};

const initialContext: ClientsContext = {
  getOrgClient: stub,
};

const clientsContext = React.createContext<ClientsContext>(initialContext);

export default clientsContext;
