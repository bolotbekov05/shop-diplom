import Header from "./components/Header";
import React from "react";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import { Route, Routes } from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Куртка' ,
          img: 'wind.webp' ,
          desc: 'Спортивная куртка' ,
          category: 'jacket',
          price: '1200'
        },
        {
          id: 2,
          title: 'Куртка' ,
          img: 'jacket.webp' ,
          desc: 'Мужская куртка с винтажным принтом и надписью, прочная дышащая куртка для отдыха на открытом.' ,
          category: 'jacket',
          price: '2100'
        },
        {
          id: 3,
          title: 'Футболка' ,
          img: 'tarchia.webp' ,
          desc: 'Мужская облегающая футболка TARCHIA 2023, новые хлопковые топы с рисунком рок-фестиваля' ,
          category: 't-shirt',
          price: '1300'
        },
        {
          id: 4,
          title: 'Бомбер' ,
          img: 'taoligey.webp' ,
          desc: 'Мужские куртки, осень-весна, ветровка, новинка 2023' ,
          category: 'bomber',
          price: '2500'
        },
        {
          id: 5,
          title: 'Пальто' ,
          img: 'coat.webp' ,
          desc: 'Новинка 2023, Брендовое повседневное шерстяное твидовое пальто MRMT, мужское' ,
          category: 'coat',
          price: '2800'
        },
        {
          id: 6,
          title: 'Свитшот' ,
          img: 'sweatshirt.webp' ,
          desc: 'Свитшот мужской однотонный, худи в стиле Харадзюку, повседневная хлопковая кофта с капюшоном, уличная одежда, весна-осень' ,
          category: 'sweatshirt',
          price: '1100'
        },
        {
          id: 7,
          title: 'Костюм' ,
          img: 'custems.webp',
          desc: 'Мужской деловой костюм с длинным рукавом' ,
          category: 'custems',
          price: '2000'
        },
        {
          id: 8,
          title: 'Спортивная одежда' ,
          img: 'hoodie.jpg',
          desc: 'Мужской однотонный комплект из 2 предметов, толстовка с капюшоном и штаны для бега на осень и зиму 2023' ,
          category: 'sports',
          price: '2100'
        },
        {
          id: 9,
          title: 'Спортивная одежда' ,
          img: 'id9.webp',
          desc: 'Костюм спортивный мужской с капюшоном и брюками, лоскутный костюм с надписью Discovery Channel, теплая спортивная одежда, пуловер с капюшоном, Осень-зима' ,
          category: 'sports',
          price: '1500'
        }
      ],

      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.showFullItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory = {this.chooseCategory} />
        <Items onShowItem={this.onShowItem}  items={this.state.currentItems} onAdd={this.addToOrder}/>
 
        { this.state.showFullItem && <ShowFullItem item={this.state.fullItem} /> }
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({ showFullItem: !this.State.showFullItem })
  }


  chooseCategory(category){

    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return 
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)

    this.setState({orders: [...this.state.orders, item] })
  }
}

export default App;
