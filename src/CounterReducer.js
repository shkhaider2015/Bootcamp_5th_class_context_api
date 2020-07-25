
const counterReducer = (state, action) =>
{
    switch(action)
    {
        case 'Update':
            return state + 1;
    }
}

export default counterReducer