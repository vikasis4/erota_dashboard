import { useEffect, useState } from "react";

const useDelay = () => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsReady(true), 300);
    }, []);

    return isReady;
};

export default useDelay;