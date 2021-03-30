import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes.js';
export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})
export const changeAddItemAction = (value) => ({
  type: ADD_ITEM,
  value
})
export const changeDeleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
})