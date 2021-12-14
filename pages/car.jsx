import React from 'react'
import { useContext, useState } from 'react'
import { DataContext } from '../store/GlobalState'
import CartItem from '../components/CartItem'

const Car = () => {
  const { state, dispatch } = useContext(DataContext)
  const { cart } = state

  const [total, setTotal] = useState(0)

  return (
    <div style={{display: "flex", flexDirection:"column"}}>
      <div style={{ display: "flex", flexDirection: "row", position: "relative" }}>
        <h2 style={{ color: "#696969" }}>SEU CARRINHO</h2>
        <h2 style={{ color: "#696969", marginLeft: 970 }}> ENVIO </h2>
      </div>
      <div style={{position: "relative" }}>
        <h5 style={{ textAlign: "right", color: "#696969", marginLeft: 100 }}>ENDEREÇO</h5>
        <input style={{ width: 300, marginLeft: 1000, marginTop: 10}} class="form-control" type="text" />
      </div>
      <div style={{position: "relative" }}>
        <h5 style={{ textAlign: "right", color: "#696969", marginLeft: 1180, marginTop: 10}}>CONTATO</h5>
        <input style={{ width: 300, marginLeft: 1000, marginTop: 10}} class="form-control" type="text" />
      </div>
     <div>
     <h2 style={{textAlign: "right",color: "#696969", marginTop: 10 }}> TOTAL: </h2>
     <a href="#" class="btn btn-dark" style={{marginLeft: 1120}}>FINALIZAR COMPRA</a>
     </div>
      <table>
        <tbody>
          {cart.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              dispatch={dispatch}
              cart={cart}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Car

        
