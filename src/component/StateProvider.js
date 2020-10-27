import React, {createContext, useContext, useReducer} from "react"

//Prepare the Data layer
export const StateContext = createContext();

//Wrap our app and provide access to data layer to all components
export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from the data layer
export const useStateValue = () => useContext(StateContext);