
const CartItem = ({ item, dispatch, cart }) => {
  const { _id, inStock, checked, images, title, description, price } = item
  return (
    <div className="card w-50">
      <div className="card-header">
        <h3 className="card-title">{item.title}</h3>
      </div>
      <div style={{ align: "left" }}>
        <img style={{ width: 100, height: 90, align: "left", border: 10, marginTop: 20}} class="card-img-left" src={images[0].url} alt={images[0].url} />
      </div>
      <div style={{marginTop: -100, marginLeft: 120 }}>
        <h4 style={{ color: "#696969" }}>{item.description}</h4>
        <h5>R$ {item.price}</h5>
        <h5>Disponível: {item.inStock}</h5>
      </div>
    </div>

  )
}

export default CartItem

  //<a href="#" class="btn btn-primary">Finalizar Compra</a>