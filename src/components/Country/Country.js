import React, {useEffect, useState} from "react";
import {fetchCountry} from "../../util";
import {useDispatch, useSelector, connect} from "react-redux";
import {grafigDegistir} from "../../store/Action";

const Country = ({coutryChange}) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountry = async () => {
            setCountries(await fetchCountry());
        };
        getCountry();
    }, [setCountries]);

    const dispatch = useDispatch();
    const change = (e) => {
        e.preventDefault();
        dispatch(grafigDegistir(e.target.value));
    };

    return (
        <div className="country">
            <select className="form-control form-control-sm" onChange={(e) => change(e)}>
                <option></option>
                {countries.map((x, i) => <option key={i} value={x}>{x}</option>)}
            </select>
        </div>
    )


}
export default Country;