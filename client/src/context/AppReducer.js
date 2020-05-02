export default (state, action) => {
  switch (action.type) {
    case 'GET_PRAYERS':
      return {
        ...state,
        prayerIntentions: action.payload,
        loading: false,
      };
    case 'ADD_PRAYER':
      return {
        ...state,
        prayerIntentions: [...state.prayerIntentions, action.payload],
        isPrayerAdded: true,
      };
    case 'SEND_EMAIL':
      return {
        ...state,
        isEmailSent: true,
      };
    case 'PRAYERS_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
