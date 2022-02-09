import axios from "axios";

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (param) => {
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(param ? `${url}/countries/${param}` : url);

        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        return modifiedData;
    } catch (e) {
        console.log(e);
    }
};

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map((x) => ({
            confirmed: x.confirmed.total,
            deaths: x.deaths.total,
            date: x.reportDate,
        }));
        return modifiedData;
    } catch (error) {
    }
};

export const fetchCountry = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);
        return countries.map((count) => count.name);
    } catch (e) {

    }
};