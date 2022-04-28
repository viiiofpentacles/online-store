import ItemCard from './ItemCard';

const Store = (props) => {
    const itemCards = props?.data?.map((item => {
        return <ItemCard data = {item} addItemToCart = {handleAddToCard} key = {item.id}/>
    }));

    function handleAddToCard() {
    }

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
