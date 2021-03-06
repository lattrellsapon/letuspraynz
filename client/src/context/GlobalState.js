import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial State
const initialState = {
  prayerIntentions: [],
  loading: true,
  error: null,
  isPrayerAdded: false,
  isEmailSent: false,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions will go here

  async function getPrayers() {
    try {
      const res = await axios.get('api/prayer-intentions');

      dispatch({
        type: 'GET_PRAYERS',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'PRAYERS_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function addPrayer(newPrayer) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('api/prayer-intentions', newPrayer, config);
      dispatch({
        type: 'ADD_PRAYER',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'PRAYERS_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function sendEmail(newContact) {
    try {
      dispatch({
        type: 'SEND_EMAIL',
        payload: {},
      });
      await axios.post('/send-email', newContact);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        prayerIntentions: state.prayerIntentions,
        error: state.error,
        loading: state.loading,
        isPrayerAdded: state.isPrayerAdded,
        isEmailSent: state.isEmailSent,
        getPrayers,
        addPrayer,
        sendEmail,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
