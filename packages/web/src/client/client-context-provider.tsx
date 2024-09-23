import { MyOrgClient } from "@myorg/client/src/my-org-client";
import ClientContext, {
  ClientsContext as ClientContextInterface,
} from "./client-context";

export interface ClientProviderOptions {
  myOrgClient: MyOrgClient;
  children?: React.ReactNode;
}

const toClientContextOptions = (
  options: ClientProviderOptions
): ClientContextInterface => ({
  getOrgClient: () => options.myOrgClient,
});

const AppContextProvider = (opts: ClientProviderOptions): JSX.Element => {
  const { children } = opts;
  return (
    <ClientContext.Provider value={toClientContextOptions(opts)}>
      {children}
    </ClientContext.Provider>
  );
};

export default AppContextProvider;
