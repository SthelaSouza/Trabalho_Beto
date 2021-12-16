import { useContext } from 'react'
import React from 'react'
import { useRouter } from 'next/router'
import { DataContext } from '../store/GlobalState'
import Link from 'next/link'

function NavBar() {
  const router = useRouter()
  const { state, dispatch } = useContext(DataContext)
  const { auth, cart } = state

  const handleLogout = () => {
    localStorage.removeItem('primeiroLogin')
  }

  const logout = () => {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {auth.user.nome}
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            {/* <a className="dropdown-item" href="#"> */}
            <button className="dropdown-item" onClick={handleLogout}>
              Logout
            </button>
            {/* </a> */}
          </li>
        </ul>
      </li>
    )
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid" style={{ borderColor: 'black' }}>
        <Link href="/">
          <a className="navbar-brand">e-Commerce Sthelinha</a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/car">
                <a className="nav-link active" aria-current="page">
                  <i className=" position-relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-tree" viewBox="0 0 16 16">
                      <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507z" />
                    </svg>
                    <span
                      className="position-absolute"
                      style={{
                        padding: '3px 6px',
                        background: '#ed143dc2',
                        borderRadius: '50%',
                        top: '-10px',
                        right: '-10px',
                        color: 'white',
                        fontSize: '14px',
                      }}
                    >
                      {cart.length}
                    </span>
                  </i>
                </a>
              </Link>
            </li>

            {Object.keys(auth).length === 0 ? (
              <li className="nav-item">
                <Link href="/login">
                  <a className="nav-link" href="#">
                    <i className="fas fa-user"></i> Entrar
                  </a>
                </Link>
              </li>
            ) : (
              logout()
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar