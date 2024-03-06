import React from 'react'

interface pageNumberType {
    user: number,
    order: number,
    query: number
}
interface GeneralType {
    pageNumber: pageNumberType
    setPageNumber: React.Dispatch<React.SetStateAction<pageNumberType>>
}
var stateFxn: React.Dispatch<React.SetStateAction<pageNumberType>> = (pageNumberType): void => { };
const initialValue = {
    pageNumber: {
        user: 1,
        order: 1,
        query: 1
    },
    setPageNumber: stateFxn
}


export const GeneralContext = React.createContext<GeneralType>(initialValue)

const GeneralProvider = ({ children }: { children: React.JSX.Element }) => {

    const [pageNumber, setPageNumber] = React.useState(initialValue.pageNumber)

    return (
        <GeneralContext.Provider value={{ pageNumber, setPageNumber }}>
            {children}
        </GeneralContext.Provider>
    )
}

export default GeneralProvider