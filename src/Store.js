import ItemCard from './ItemCard';
import data from './data';

const Store = (props) => {
      const itemCards = data?.map((item => {
        return <ItemCard data = {item} addItemToCart = {props.handleAddToCartState} key = {item.id}/>
    }));
   
    return (
        <main className='store-contents'>
            <h1>Store</h1>
            <div className="cards-container">
            {itemCards}
            </div>
        </main>
    );
};

export default Store;
