import './TariffCard.scss';

// eslint-disable-next-line react/prop-types
export default function TariffCard({name, price, speed, info, color, id, selectId, handleClick}) {
    const activeSelectId = selectId === id;

    return (
        <div className={`${color} color ${activeSelectId ? "select" : ""}`} onClick={() => handleClick(id)}>
            <div className="card-name">{name || "Не указано"}</div>
            <div className="card-price">{price || "Не указано"}</div>
            <div className="card-speed">{speed || "Не указано"}</div>
            <div className="card-info">{info || "Не указано"}</div>
        </div>
    );
}