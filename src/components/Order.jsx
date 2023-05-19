/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'


export class Order extends Component {
  render() {
    return (
      <div className="item">
        <img width={150} height={150} src={"./img/" + this.props.item.img} />
         <NavLink to="/checkout"><button>Оформить заказ</button> </NavLink>
        <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    )
  }
}

export default Order