import { createMyOrgClient } from "@myorg/client";
import { MyOrgClient } from "@myorg/client/src/my-org-client";

/*
In a larger application, you might have multiple service clients that need to be initialized (e.g., for handling different APIs,
   authentication, or third-party services). This configureServiceClients module could be one part of the application's
 startup process to ensure that all service clients are initialized and ready to use.
 */

const configureServiceClients: any = {
  init: async (c: { ServiceProvider: { MyOrgClient: MyOrgClient } }) => {
    const _myorgConfig: any = {
      baseURL: "https://dummyjson.com/",
    };
    const _myorgClient: MyOrgClient = await createMyOrgClient(_myorgConfig);

    c.ServiceProvider = {
      MyOrgClient: _myorgClient,
    };

    return c;
  },
};

export default configureServiceClients;
