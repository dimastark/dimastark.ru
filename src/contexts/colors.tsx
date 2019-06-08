import { createContext, useContext } from 'react';

import { getPrimaryColor } from '../utils/colors';

interface IColorsContext {
    primary: string;
}

export const ColorsContext = createContext<IColorsContext>({
    primary: getPrimaryColor()
});

export function useColors(): IColorsContext {
    return useContext(ColorsContext);
}
