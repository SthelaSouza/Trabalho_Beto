import React from 'react'
import { useContext, useState } from 'react'
import { DataContext } from '../store/GlobalState'
import CartItem from '../components/CartItem'

const Car = () => {
  const { state, dispatch } = useContext(DataContext)
  const { cart } = state

  const [total, setTotal] = useState(0)

  return (
    <div className="row mx-auto">  
    <div>
        <h2 style={{marginBottom: 30, color: "#696969", marginTop: 20}}>SEU CARRINHO</h2>
        <h2 style={{textAlign: "right",color: "#696969", marginTop: -60 }}> ENVIO </h2>
        <h5 style={{textAlign: "right",color: "#696969", marginTop: -5 }}> ENDEREÇO</h5>
        <input style={{width: 300, marginLeft: 970}} class="form-control" type="text"/>
        <h5 style={{textAlign: "right",color: "#696969", marginTop: 10 }}> CONTATO</h5>
        <input style={{width: 300, marginLeft: 970}} class="form-control" type="text"/>
        <h2 style={{textAlign: "right",color: "#696969", marginTop: 10 }}> TOTAL: </h2>
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