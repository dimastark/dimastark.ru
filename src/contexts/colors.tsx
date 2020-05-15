import { createContext, useContext } from 'react';

export function getPrimaryColor(): string {
    const choices = ['#F53030', '#673AB7', '#03A9F4', '#4CBF50', '#FF5722'];

    return choices[Math.floor(Math.random() * choices.length)];
}

interface IColorsContext {
    primary: string;
}

export const ColorsContext = createContext<IColorsContext>({
    primary: getPrimaryColor(),
});

export function useColors(): IColorsContext {
    return useContext(ColorsContext);
}
