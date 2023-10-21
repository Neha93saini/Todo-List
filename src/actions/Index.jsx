export const addTodo = (data) => {
    console.log('data', data);
    return {
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}
export const deleteTodo = (id) => {
    return {
        type: "REMOVE_TODO",
        payload: {
            id: id
        }
    }
}
