import ItemCard from './ItemCard';

const Store = (props) => {
    const itemCards = props?.data?.map((item => {
        return <ItemCard data = {item} addItemToCart = {props.handleAddItemToCartState()} key = {item.id}/>
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
