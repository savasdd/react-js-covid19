import {GRAFIK_DEGIS} from "./Type";

const defult_state = '';

const GrafikReducer = (state = defult_state, action) => {
    switch (action.type) {
        case GRAFIK_DEGIS:
            return action.payload;
            break;

        default:
            return state;

    }

};
export default GrafikReducer;