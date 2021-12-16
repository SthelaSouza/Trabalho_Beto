import { useContext } from 'react'
import { DataContext } from '../../store/GlobalState'
import { addToCart } from '../../store/Action'
import Link from 'next/link'

/* eslint-disable @next/next/no-img-element */

const ProductItem = ({ product, handleCheck }) => {
  const { state, dispatch } = useContext(DataContext)
  const { auth, cart } = state
  const { _id, inStock, checked, images, title, description, price } = product
  const userLink = () => {
    return (
      <>
        <Link href={`product/${_id}`}>
          <a className="btn btn-info" style={{ marginRight: '5px', flex: 1, color: '#25573E', borderRadius: '15px', backgroundColor: 'white' }}>
            ABRIR
          </a>
        </Link>
        <button
          className="btn btn-success"
          style={{ marginLeft: '5px', flex: 1, color: '#25573E', backgroundColor: 'white', borderRadius: '15px' }}
          disabled={inStock === 0 ? true : false}
          onClick={() => dispatch(addToCart(product, cart))}
        >
          COMPRAR
        </button>
      </>
    )
  }

  return (
    <div className="card" style={{ width: '18rem' }}>
      {auth.user && auth.user.role === 'admin' && (
        <input
          type="checkbox"
          checked={checked}
          className="position-absolute"
          style={{ height: '20px', width: '20px' }}
          onChange={() => handleCheck(_id)}
        />
      )}
      <img style={{ width: 100, height: 100, display: "inline-block", marginTop: 10, alignItems: "end", marginRight: -30, fontFamily:'monospace' }} className="card-img-left" src={images[0].url} alt={images[0].url} />
      <div className="card-body">
        <p style={{textAlign: "left", marginTop: -100, marginLeft: 80, textShadow: '0.1em 0.1em 0.2em black', fontFamily:'monospace'}}title={title}> {title} </p>
        <div style={{ display: "inline-block", marginLeft:80}}>
          <p style={{textShadow: '0.1em 0.1em 0.2em black', fontFamily:'monospace'}}>R$ {price}</p>
          {inStock > 0 ? (
            <p style={{textShadow: '0.1em 0.1em 0.2em black', fontFamily:'monospace'}}>Em estoque: {inStock}</p>
          ) : (
            <p style={{textShadow: '0.1em 0.1em 0.2em black', fontFamily:'monospace'}}>Não disponível</p>
          )}
          <p style={{textShadow: '0.1em 0.1em 0.2em black', fontFamily:'monospace'}} title={description}> Descrição: {description}</p>
        </div>

        <div className="row justify-content-between mx-0">
          {!auth.user || auth.user.role !== 'admin' ? userLink() : adminLink()}
        </div>
      </div>
    </div>
  )
}

export default ProductItem