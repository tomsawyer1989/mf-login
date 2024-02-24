import { createAction, createReducer, on } from '@ngrx/store';

export const updateState = createAction('[LOGIN] Update State', (payload: any) => ({ payload }));

export const initialState: any = {};

export const globalReducer = createReducer(
  initialState,
  on(updateState, (state, { payload }) => ({ ...state, ...payload }))
);
