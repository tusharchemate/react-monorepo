import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import configureServiceClients from "./app-initializers/configure-clients.ts";
import AppContextProvider from "./client/client-context-provider.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

// Placeholder for your initializer functions
const initializers: any = [configureServiceClients];
const queryClient = new QueryClient();

async function initApplication() {
  let appInitContext: any = {};

  // Execute each initializer's init method
  for (const initializer of initializers) {
    if (initializer.init) {
      appInitContext = await initializer.init(appInitContext);
    }
  }

  // Execute each initializer's beforeAppRender method, if available
  for (const initializer of initializers) {
    if (initializer.beforeAppRender) {
      await initializer.beforeAppRender(appInitContext);
    }
  }

  return appInitContext;
}

async function renderApp() {
  // Wait for app initialization to complete
  const appContext = await initApplication();

  const sdkProvider = appContext?.ServiceProvider;

  console.log("=>sdkProvider", sdkProvider);

  // Now render the React app
  const root = ReactDOM.createRoot(document.getElementById("root")!);
  root.render(
    <AppContextProvider myOrgClient={sdkProvider.MyOrgClient}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AppContextProvider>
  );
}

// Initialize and render the app
renderApp().catch((error) => {
  console.error("Error during app initialization", error);
});
