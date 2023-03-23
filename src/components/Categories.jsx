import React, { Component } from 'react'

export class Categories extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'custems',
                    name: 'Костюм'
                },
                {
                    key: 'shoes',
                    name: 'Платье'
                },
                {
                    key: 'palto',
                    name: 'Пальто'
                },
                {
                    key: 'sports',
                    name: 'Спортивный'
                },
                {
                    key: 'cloak',
                    name: 'Плащ'
                }
            ]
        }
    }

  render() {
    return (
      <div className='categories'>
                {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)} >{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories