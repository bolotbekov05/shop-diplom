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
                    key: 't-shirt',
                    name: 'Футболка'
                },
                {
                    key: 'coat',
                    name: 'Пальто'
                },
                {
                    key: 'sports',
                    name: 'Спортивная одежда'
                },
                {
                    key: 'hoodie',
                    name: 'Худи'
                },
                {
                    key: 'windbreaker',
                    name: 'Ветровка'
                },
                {
                    key: 'jacket',
                    name: 'Куртка'
                },
                {
                    key: 'bomber',
                    name: 'Бомбер'
                },
                {
                    key: 'sweatshirt',
                    name: 'Свитшот'
                },
                {
                    key: 'boots',
                    name: 'Бутсы'
                },

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