import TanStackProvider from "../tanStack/Provider"
import StyleProvider from "./Style"

const ContextProvider = ({ children }: { children: JSX.Element }) => {

    var Providers = [StyleProvider]

    return (
        Providers.reduce((Parent:any, Child) => {
            return (
                <Parent>
                    <Child>
                        {children}
                    </Child>
                </Parent>
            )
        }, TanStackProvider)
    )
}

export default ContextProvider