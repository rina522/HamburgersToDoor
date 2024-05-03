import React, {useState} from 'react'
import Search from './components/Search'
import MealsList from './components/MealsList'
import SumBox from './components/SumBox'
import CartContext from './store/CartContext'
import Checkout from './components/Checkout'


  const MEALS_DATA = [
    {
        id: '001',
        title: '汉堡包',
        desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
        price: 12,
        img: '/img/meals/1.png'
    },
    {
        id: '002',
        title: '双层吉士汉堡',
        desc: '百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！',
        price: 20,
        img: '/img/meals/2.png'
    },
    {
        id: '003',
        title: '巨无霸',
        desc: '两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！',
        price: 24,
        img: '/img/meals/3.png'
    }, {
        id: '004',
        title: '麦辣鸡腿汉堡',
        desc: '金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！',
        price: 21,
        img: '/img/meals/4.png'
    }, {
        id: '005',
        title: '板烧鸡腿堡',
        desc: '原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！',
        price: 22,
        img: '/img/meals/5.png'
    }, {
        id: '006',
        title: '麦香鸡',
        desc: '清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！',
        price: 14,
        img: '/img/meals/6.png'
    }, {
        id: '007',
        title: '吉士汉堡包',
        desc: '百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！',
        price: 12,
        img: '/img/meals/7.png'
    }
];


export default function App() {

  const [mealsdata, setMealsdata] = useState(MEALS_DATA)
  const [cartItems, setCartItems] = useState([])
  const [sumNumber, setSumNumber] = useState(0)
  const [sumPrice, setSumPrice] = useState(0)


  const filterHandler = i=>{

    // 筛选匹配的数据对象
    let filtData = MEALS_DATA.filter(item => item.title.indexOf(i) !== -1 ||
                                             item.desc.indexOf(i) !== -1)
    
    setMealsdata(filtData)

  }


  const addSum=(item)=>{
    setSumNumber(sumNumber=>sumNumber+1)
    setSumPrice(sumPrice=>sumPrice+item.price)

    let newCart = [...cartItems]

    if (newCart.indexOf(item) === -1){
    
    newCart = [...cartItems, item]
    item.number=1}else{item.number+=1}

    setCartItems(newCart)


  }

  const subSum=(item)=>{
    setSumNumber(sumNumber=>sumNumber-1)
    setSumPrice(sumPrice=>sumPrice-item.price)

    let newCart = [...cartItems]

    if (item.number === 1){
      newCart.splice(newCart.indexOf(item), 1)
      item.number=0
    }else{item.number-=1}

    setCartItems(newCart)
    
  }

  const clearCartData=()=>{
    cartItems.forEach(item => delete item.number)
    setSumNumber(0)
    setSumPrice(0)
    setCartItems([])

  }

  return <CartContext.Provider value={{cartItems, sumNumber, sumPrice, addSum, subSum, clearCartData}}>
    
    <Search onFilter={filterHandler}/>
    <MealsList mealsData={mealsdata} addSum={addSum} subSum={subSum}/>
    <SumBox sum={sumNumber} cartItems={cartItems}/>
  </CartContext.Provider>
  
}
