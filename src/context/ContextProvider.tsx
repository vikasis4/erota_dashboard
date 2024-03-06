import TanStackProvider from "../tanStack/Provider";
import ApiDataProvider from "./ApiData";
import InitializeProvider from "../config/InitializeProvider";
import GeneralProvider from "./General";

const ContextProvider = ({ children }: { children: JSX.Element }) => {

    var Providers = [
        TanStackProvider,
        ApiDataProvider,
        GeneralProvider
    ];

    var Element = <InitializeProvider>{children}</InitializeProvider>

    return (
        Providers.reduceRight((Child: any, Parent: any) => {
            return (
                <Parent>
                    {Child}
                </Parent>
            )
        }, Element)
    )
}

export default ContextProvider