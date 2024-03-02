import React from "react";

interface StyleType {
    style: {};
    setStyle: React.Dispatch<React.SetStateAction<{}>>;
}
export const StyleContext = React.createContext<StyleType | null>(null)

const StyleProvider = ({ children }: { children: React.JSX.Element }) => {

    const [style, setStyle] = React.useState({})

    return (
        <StyleContext.Provider value={{ style, setStyle }}>
            {children}
        </StyleContext.Provider>
    )
}

export default StyleProvider