import ItemCard from './ItemCard';
import data from './data';
import {useLocation} from "react-router-dom";



const Store = (props) => {
    const location = useLocation();
    const itemCards = data?.map((item => {
        return <ItemCard data = {item} addItemToCart = {location.state} key = {item.id}/>
    }));

    return (
        <main>
            <h1>Store</h1>
            <div className="cards-container">
            {itemCards}
            </div>
        </main>
    );
};

export default Store;
