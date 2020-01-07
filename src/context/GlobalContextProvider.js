import React, { useReducer } from 'react';

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
  isModalOpen: false,
  isNavigationOpen: false
}

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_MODAL': {
      return {
        ...state,
        isModalOpen: state.isModalOpen === false ? true : false
      }
    }
    case 'TOGGLE_NAVIGATION': {
      return {
        ...state,
        isNavigationOpen: state.isNavigationOpen === false ? true : false
      }
    }
    default: throw new Error('Bad action type')
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider