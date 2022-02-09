import Moment from "react-moment";
import 'moment/locale/tr';
import CountUp from "react-countup";

const Card = ({confirmed, recovered, deaths, lastUpdate}) => {
    if (!confirmed)
        return "Loading..";


    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="header19">
                        <h3>COVID-19 TABLOSU</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    <div className="card border-primary mb-3">
                        <div className="card-header">
                            Bulasma Sayisi
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">
                                <CountUp start={0} end={confirmed.value} duration={2.5} separator="."></CountUp>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card border-secondary mb-3">
                        <div className="card-header">
                            Iyilesem Sayisi
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">
                                <CountUp start={0} end={recovered.value} duration={2.5} separator="."></CountUp>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card border-success mb-3">
                        <div className="card-header">
                            Olum Sayisi
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">
                                <CountUp start={0} end={deaths.value} duration={2.5} separator="."></CountUp>
                            </h5>
                        </div>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="card border-danger mb-3">
                        <div className="card-header">
                            Tarih
                        </div>
                        <div className="card-body">
                            <h5>
                                <Moment className="card-title" format="DD/MM/YYYY">{lastUpdate}</Moment>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6">
                </div>
            </div>

        </div>
    )
};
export default Card;