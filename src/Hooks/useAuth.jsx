import { useContext } from "react";
import{ ContextProvider } from "../Context/Context";

const useAuth = () => {

    const all = useContext(ContextProvider);

    return all
};

export default useAuth;