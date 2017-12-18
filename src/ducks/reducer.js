const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_PROP = "UPDATE_PROP";
const UPDATE_FOUND = "UPDATE_FOUND";
const UPDATE_AGENT = "UPDATE_AGENT";
const UPDATE_COST = "UPDATE_COST";
const UPDATE_AMOUNT = "UPDATE_AMOUNT";
const UPDATE_CREDIT = "UPDATE_CREDIT";
const UPDATE_HISTORY = "UPDATE_HISTORY";
const UPDATE_ONE = "UPDATE_ONE";
const UPDATE_TWO = "UPDATE_TWO";
const UPDATE_THREE = "UPDATE_THREE";
const UPDATE_FIRST = "UPDATE_FIRST";
const UPDATE_LAST = "UPDATE_LAST";
const UPDATE_EMAIL = "UPDATE_EMAIL";
const START_OVER = "START_OVER";

const initialState = {
  loanType: "Home Purchase",
  propertyType: "Single Family Home",
  city: "",
  propToBeUsedOn: "",
  found: "false",
  realEstateAgent: "false",
  cost: 0,
  downPayment: 0,
  credit: "",
  history: "",
  addressOne: "",
  addressTwo: "",
  addressThree: "",
  firstName: "",
  lastName: "",
  email: ""
};

export const startOver = () => {
  return {
    type: START_OVER,
    payload: initialState
  };
};

export const updateLoanType = loanType => {
  return {
    type: UPDATE_LOAN_TYPE,
    payload: loanType
  };
};

export const updatePropertyType = property => {
  return {
    type: UPDATE_PROPERTY_TYPE,
    payload: property
  };
};

export const updateCity = city => {
  return {
    type: UPDATE_CITY,
    payload: city
  };
};

export const updateProp = prop => {
  return {
    type: UPDATE_PROP,
    payload: prop
  };
};

export const updateFound = found => {
  return {
    type: UPDATE_FOUND,
    payload: found
  };
};

export const updateAgent = agent => {
  return {
    type: UPDATE_AGENT,
    payload: agent
  };
};

export const updateCost = cost => {
  return {
    type: UPDATE_COST,
    payload: cost
  };
};

export const updateAmount = amount => {
  return {
    type: UPDATE_AMOUNT,
    payload: amount
  };
};

export const updateCredit = credit => {
  return {
    type: UPDATE_CREDIT,
    payload: credit
  };
};

export const updateHistory = history => {
  return {
    type: UPDATE_HISTORY,
    payload: history
  };
};

export const updateOne = one => {
  return {
    type: UPDATE_ONE,
    payload: one
  };
};

export const updateTwo = two => {
  return {
    type: UPDATE_TWO,
    payload: two
  };
};

export const updateThree = three => {
  return {
    type: UPDATE_THREE,
    payload: three
  };
};

export const updateFirst = first => {
  return {
    type: UPDATE_FIRST,
    payload: first
  };
};

export const updateLast = last => {
  return {
    type: UPDATE_LAST,
    payload: last
  };
};

export const updateEmail = email => {
  return {
    type: UPDATE_EMAIL,
    payload: email
  };
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOAN_TYPE:
      return Object.assign({}, state, { loanType: action.payload });
    case UPDATE_PROPERTY_TYPE:
      return Object.assign({}, state, { propertyType: action.payload });
    case UPDATE_CITY:
      return Object.assign({}, state, { city: action.payload });
    case UPDATE_PROP:
      return Object.assign({}, state, { propToBeUsedOn: action.payload });
    case UPDATE_FOUND:
      return Object.assign({}, state, { found: action.payload });
    case UPDATE_AGENT:
      return Object.assign({}, state, { realEstateAgent: action.payload });
    case UPDATE_COST:
      return Object.assign({}, state, { cost: action.payload });
    case UPDATE_AMOUNT:
      return Object.assign({}, state, { downPayment: action.payload });
    case UPDATE_CREDIT:
      return Object.assign({}, state, { credit: action.payload });
    case UPDATE_HISTORY:
      return Object.assign({}, state, { history: action.payload });
    case UPDATE_ONE:
      return Object.assign({}, state, { addressOne: action.payload });
    case UPDATE_TWO:
      return Object.assign({}, state, { addressTwo: action.payload });
    case UPDATE_THREE:
      return Object.assign({}, state, { addressThree: action.payload });
    case UPDATE_FIRST:
      return Object.assign({}, state, { firstName: action.payload });
    case UPDATE_LAST:
      return Object.assign({}, state, { lastName: action.payload });
    case UPDATE_EMAIL:
      return Object.assign({}, state, { email: action.payload });
    case START_OVER:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export default reducer;
