import { useContext } from "react";
import { ApiDataContext } from "../context/ApiData";
import { GeneralContext } from "../context/General";

const useStore = () => {

    const API = useContext(ApiDataContext);
    const GEN = useContext(GeneralContext);

    return {API, GEN}

}

export default useStore