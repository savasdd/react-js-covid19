import {GRAFIK_DEGIS} from "./Type";

export const grafigDegistir = (value) => {
    return {
        type: GRAFIK_DEGIS,
        payload: value,
    };
};