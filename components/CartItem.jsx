
const CartItem = ({ item, dispatch, cart }) => {
  const { _id, inStock, checked, images, title, description, price } = item
  return (
    <div class="card border-dark mb-3" style={{ maxWidth: 600, position:"relative"}}>
      <div class="card-header" style={{ display: "flex", flexDirection: "row", position: "relative", color: 'white', backgroundColor: 'red' }}>
        <h3 style={{textShadow: '0.1em 0.1em 0.5em black', fontFamily:'monospace'}}>{item.title}</h3>
      </div>
      <div class="card">
        <div class="card-body text-red">
          <img style={{ width: 100, height: 100, display: "inline-block", marginTop: -100, alignItems: "end" }} class="card-img-left" src={images[0].url} alt={images[0].url} />
          <div style={{ display: "inline-block" }}>
            <h4>{item.description}</h4>
            <h4 style={{textShadow: '0.1em 0.1em 0.5em black', fontFamily:'monospace'}}>R$ {item.price}</h4>
            <h4 style={{textShadow: '0.1em 0.1em 0.5em black', fontFamily:'monospace'}}>Disponível: {item.inStock}</h4>
          </div>
          <a href="#" class="btn btn-dark" style={{alignItems:"right"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CartItem

 
