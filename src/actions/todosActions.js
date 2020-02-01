import { ADD_ITEM, DELETE_ITEM, CHANGE_ITEM_STATUS, EDIT_ITEM_TITLE, DISPLAY_ITEMS_BY_IMPORTANCE, DETECT_ITEMS_FAILURE, ADD_DATE_COMPLETED, } from './types'

export const addItem = (todo) => dispatch => {
  dispatch({
    type: ADD_ITEM,
    payload: {
      todo
    }
  })
}

export const deleteItem = (id) => dispatch => {
  dispatch({
    type: DELETE_ITEM,
    payload: {
      id
    }
  })
}

export const changeItemStatus = (id, status) => dispatch => {
  dispatch({
    type: CHANGE_ITEM_STATUS,
    payload: {
      id,
      status
    }
  })
}

export const editItemTitle = (id, title) => dispatch => {
  dispatch({
    type: EDIT_ITEM_TITLE,
    payload: {
      id,
      title
    }
  })
}

export const displayItemsByImportance = (value) => dispatch => {
  dispatch({
    type: DISPLAY_ITEMS_BY_IMPORTANCE,
    payload: {
      value
    }
  })
}

export const detectItemsFailure = () => dispatch => {
  dispatch({
    type: DETECT_ITEMS_FAILURE
  })
}

export const addDateCompleted = (id, dateCompleted) => dispatch => {
  dispatch({
    type: ADD_DATE_COMPLETED,
    payload: {
      id,
      dateCompleted
    }
  })
}
