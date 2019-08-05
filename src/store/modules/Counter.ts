/**
 * Actions
 */

export const DECREMENT = 'DECREMENT' as const;
export const INCREMENT = 'INCREMENT' as const;
export const ADD = 'ADD' as const;

export interface Decrement {
  type: typeof DECREMENT;
}

export interface Increment {
  type: typeof INCREMENT;
}

export interface Add {
  type: typeof ADD;
  payload: { amount: number };
}

export type Action = Decrement | Increment | Add;

/**
 * Action Creators
 */

export const decrement = (): Decrement => ({
  type: DECREMENT,
});

export const increment = (): Increment => ({
  type: INCREMENT,
});

export const add = (amount: number): Add => ({
  type: ADD,
  payload: { amount },
});

/**
 * Initial State
 */
const INITIAL_STATE: State = {
  count: 0,
};

export interface State {
  count: number;
}

/**
 * Reducer
 */
export default (state: State = INITIAL_STATE, action: Action): State => {
  switch (action.type) {
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case ADD:
      return {
        ...state,
        count: state.count + action.payload.amount,
      };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;
      return state;
    }
  }
};
