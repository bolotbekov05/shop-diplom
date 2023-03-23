import Header from "./components/Header";
import React from "react";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: '' ,
          img: '' ,
          desc: '' ,
          category: '',
          price: ''
        },
        {
          id: 2,
          title: '' ,
          img: '' ,
          desc: '' ,
          category: '',
          price: ''
        },
        {
          id: 3,
          title: '' ,
          img: 'https://ae04.alicdn.com/kf/Sfb69945bf41e439ca119c8ebc46667c0o.jpg_640x640.jpg' ,
          desc: '' ,
          category: '',
          price: ''
        },
        {
          id: 4,
          title: '' ,
          img: 'https://ae04.alicdn.com/kf/H5d152acd5b3e47b6a14f8ae8c6e795b2M.jpg' ,
          desc: '' ,
          category: '',
          price: ''
        },
        {
          id: 5,
          title: '' ,
          img: 'https://ae04.alicdn.com/kf/S6b10d157b2004b00b01962e3e5c8e6fej.jpg_640x640.jpg' ,
          desc: '' ,
          category: '',
          price: ''
        },
        {
          id: 6,
          title: '' ,
          img: 'https://ae04.alicdn.com/kf/S1531d560a7a64f7b8cb69119fe232a09L.jpg' ,
          desc: '' ,
          category: '',
          price: ''
        },
        {
          id: 7,
          title: '' ,
          img: 'https://ae04.alicdn.com/kf/S1bc9fd808f4c491086592460618a26afh.jpg_640x640.jpg' ,
          desc: '' ,
          category: '',
          price: ''
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
