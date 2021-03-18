
let initialState =  {
    friends: [
        {id: 1, name: 'Vika'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Iliya'},
        {id: 4, name: 'Maksim'},
        {id: 5, name: 'Vlad'}
    ]
}

const sideBarReducer = (state = initialState, action) =>{
    return state;
}

export default sideBarReducer;