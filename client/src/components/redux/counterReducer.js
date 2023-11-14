import { toast } from 'react-toastify';
const initialState = {
    count: 0,
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENTO':
            return {
                count: state.count +1,
            };
        case 'DECREMENTO':
            if (state.count > 0){
            return {
                count: state.count -1,
            };
        }else{
            toast.error('A quantidade já está em 0!', { autoClose: 3000 });
            return state;
        }
        default:
            return state;
    }
}

export default counterReducer;