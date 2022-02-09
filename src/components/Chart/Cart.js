import {useEffect, useState} from "react";
import {Line, Bar} from "react-chartjs-2";
import {fetchDailyData, fetchData} from "../../util";
import {connect} from "react-redux";

const Chart = ({data, country}) => {
    const [datas, setDatas] = useState([]);


    useEffect(() => {
        const gunluk = async () => {
            setDatas(await fetchDailyData());
        };
        gunluk();
    }, [setDatas]);

    const lineChart = (
        datas.length ? (
            <Line data={{
                labels: datas.map(({date}) => date),
                datasets: [{
                    data: datas.map(({confirmed}) => confirmed),
                    label: 'Bulasma',
                    borderColor: '#3333ff',
                    fill: true
                }, {
                    data: datas.map(({deaths}) => deaths),
                    label: 'Olen',
                    borderColor: 'red',
                    backgroundColor: 'rgb(255,0,0,0.5)',
                    fill: true
                }],

            }}></Line>
        ) : null
    );

    const barChart = (
        data.confirmed ?
            (<Bar
                data={{
                    labels: ['Bulasma Sayisi', 'Iyilesme Sayisi', 'Olum Sayisi'],
                    datasets: [{
                        label: 'Insan',
                        backgroundColor: ['rgba(0,0,255,0.5)', 'rgba(0,255,0,0.5)', 'rgba(255,0,0,0.5)'],
                        data: [data.confirmed.value, data.recovered.value, data.deaths.value],
                    }],
                }}
                options={{
                    legend: {display: false},
                    title: {display: true, text: `${country} Son Durum`},
                }}
            >
            </Bar>) : null
    );

    return (
        <div className="container">
            {country ? barChart : lineChart}
        </div>
    )
};

export default Chart;