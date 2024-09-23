import { Config } from "./config/config";
import { MyOrgClient } from "./my-org-client";

//it will create an instance of MyOrgClient and initialize it.
export const createAndInitializeMyorgClient = async (
  config: Config
): Promise<MyOrgClient> => {
  const myOrgClient = new MyOrgClient(config); // creates a new instance of the MyorgClient class by passing the config object into its constructor
  await myOrgClient.init();
  return myOrgClient;
};
