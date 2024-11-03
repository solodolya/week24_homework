import {useState} from 'react';
import data from "../../data/data.json";
import TariffCard from "../TariffCard/TariffCard.jsx";
import "./Tariff.scss";

export default function Tariff() {
    const [selectId, setSelectId] = useState(false);

    function handleClick(id) {
        setSelectId(id);
    }
    return (
        <div className="card-container">
            {data.map((item, index) => (
                <TariffCard key={index} {...item} selectId={selectId} handleClick={handleClick} />
            ))}
        </div>
    );
}