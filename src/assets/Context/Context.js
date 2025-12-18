import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useReducer } from "react";
const initialState = {
    isLight: true,
};
const ThemeContext = createContext({
    state: initialState,
    dispatch: () => null
});
function themeReducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_THEME': {
            return { isLight: !state.isLight };
        }
        default: {
            return state;
        }
    }
}
export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);
    return (_jsx(ThemeContext.Provider, { value: { state, dispatch }, children: children }));
};
export default ThemeContext;
