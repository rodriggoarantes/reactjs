import React from 'react';

export const DevContext = React.createContext(null);

export const reducer = (state, action) => {
  switch (action.type) {
    case 'load':
      return [...action.payload];
    case 'update':
      return [action.payload, ...state];
    default:
      return [];
  }
};
