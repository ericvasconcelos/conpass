
export const changeDescription = event => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
})

export const search = () => {
  return {
    type: 'TODO_SEARCHED', payload: 'Description'
  }
}
export const clear = () => {
  return [
    {
      type: 'TODO_CLEAR'
    },
    search()
  ]
}