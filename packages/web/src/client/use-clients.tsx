import { useContext } from "react";
import clientsContext, { ClientsContext } from "./client-context";

const useClientsContext = () => useContext(clientsContext) as ClientsContext;

export default useClientsContext;
