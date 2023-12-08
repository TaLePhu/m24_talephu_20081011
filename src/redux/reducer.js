
// action


export const deleteUser = (id) =>({
    type: 'DELETE',
    payload: id
})

//Reducer
const initialState = {
    user: [{
        id:0,
        email: 'phu@gamil.conm',
        password: '123456',
        todo: [
            {
                abc: 'content',
                message: 'user'
            }
        ]
    }]
}

const reducer = (state= initialState, action)=>{
    switch(action.type){
        case 'DELETE':
            const userIdToDelete = action.payload;
            const newUserAfterDelete = state.user.filter(user => user.id !== userIdToDelete);
            return {
                ...state,
                user: newUserAfterDelete,
            }
        default:
            return state
    }
}

export default reducer