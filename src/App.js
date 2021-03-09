
import React,{useState} from 'react';
import Table from './Table';

function App(){
 const [vegFruits,setvegFruits]=useState([{name:'orange', type:'fruit',qty:5,id:1},
    {name:'onion',type:'veg',qty:5,id:2},
    {name:'Apple',type:'fruit',qty:5,id:3},
    {name:'carrot',type:'veg',qty:5,id:4},
    {name:'grapes',type:'fruit',qty:5,id:5},
    {name:'tomato',type:'veg',qty:5,id:6},
]);
const [total,setTotal]=useState({value:100});
const [fruits,setFruits]=useState(vegFruits.filter(item=>item.type==='fruit'));
const [vegies,setVegies]=useState(vegFruits.filter(r=>r.type==='veg'));

  const buyClick=(e)=>{
  console.log(e);
  let d=e.nativeEvent.path[2].innerText;
  console.log(d);
    let id=d[0].split(' ');
    console.log(id);
    let data=[...vegFruits];
    console.log(data);
    let index=data.findIndex(ob=>ob.id==id);
    console.log(index);
    data[index].qty=data[index].qty-1;
    console.log(data);
    let t=total;
    t.value=t.value+2;
    console.log(t);
    setTotal({total:t});
  console.log(total);
    // let res=[...fruits];
    // let data=res.find(a=>a.id===id);
    // console.log(data);
  }
  const sellClick=(e)=>{
    let s=e.nativeEvent.path[2].innerText;
    console.log(s);
    let id=s[0].split(' ');
  let data1=[...vegFruits];
  let index=data1.findIndex(ob=>ob.id==id);
  data1[index].qty=data1[index].qty+1;
  console.log(data1);
  let t=total;
  console.log(t.value);
  t.value=t.value-2;
  console.log(t.value);
  // setTotal({total:t});
  // console.log(total);

  }
    
    return(
        <div>
        <Table data={fruits} header="Fruits" buyClick={buyClick} sellClick={sellClick}/>
        <Table data={vegies} header="veggies"buyClick={buyClick} sellClick={sellClick}/>   
        </div>
    )
}
export default App; 
 