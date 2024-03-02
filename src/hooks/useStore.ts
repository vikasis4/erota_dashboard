import { useContext } from "react";
import { StyleContext } from "../context/Style";

const useStore = (dataSet: string) => {

    const STYLE = useContext(StyleContext);

    const contexts = {
        'style': STYLE
    }

    const keyTyped = dataSet as keyof typeof contexts
    return contexts[keyTyped]

}

export default useStore