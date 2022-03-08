import './style.css';

const Categories = () => {
    return (
        <div id="searchByCategory">
            <div id="searchByCategoryTitle">
                <h2>Buscar por tipo de acomodação</h2>
                <p>Escolha a sua preferência</p>
            </div>

            <div id="categories">
                <div className="category">
                    <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    <div className="categoryInfo">
                        <h5>Hotéis</h5>
                        <p>807.105 hotéis</p>
                    </div>
                </div>
                <div className="category">
                    <img src="https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    <div className="categoryInfo">
                        <h5>Pousadas</h5>
                        <p>807.105 pousadas</p>
                    </div>
                </div>
                <div className="category">
                    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <div className="categoryInfo">
                        <h5>Resorts</h5>
                        <p>807.105 resorts</p>
                    </div>
                </div>
                <div className="category">
                    <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="" />
                    <div className="categoryInfo">
                        <h5>Hostels</h5>
                        <p>807.105 hostels</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;