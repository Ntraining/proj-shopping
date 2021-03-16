
import React from 'react';
import Table1 from './Table1';

class App extends React.Component{
 constructor(props){
     super(props);
     this.state={
         vegFruits:[{name:'orange',type:'fruit',qty:5,price:5},
                    {name:'onion',type:'veg',qty:5,price:7},
                    {name:'Apple',type:'fruit',qty:5,price:3},
                    {name:'carrot',type:'veg',qty:5,price:2},
                    {name:'grapes',type:'fruit',qty:5,price:4},
                    {name:'tomato',type:'veg',qty:5,price:6}
     ],
     total:100, 
     name:'',
     qty:'',
     price:'',
    type:"fruit"
     }
 }
    
buyClick=(item)=>{
   // console.log(e);
    //let d=e.nativeEvent.path[2].innerText;
    //console.log(d);
   // let id=d[0].split(' ');
   // console.log(id);
    let data=[...this.state.vegFruits];
    console.log(data);
    let index=data.findIndex(ob=>ob.name===item);
    console.log(index);
    if(data[index].qty>=1 && this.state.total>0){
    data[index].qty=data[index].qty-1;
    console.log(data);
    this.setState({vegFruits:data});
    this.setState({total:this.state.total+data[index].price});
    let tempStock = [...this.state.vegFruits];
    localStorage.getItem("temparr") &&
      localStorage.removeItem("temparr");
    localStorage.setItem("temparr", JSON.stringify(tempStock));
    let c=this.state.total;
    localStorage.getItem("cash") && localStorage.removeItem("cash");
    localStorage.setItem("cash", JSON.stringify(c));
    }else{
      alert(`${data[index].name} is not in stock`);
    }
  }
  sellClick=(item,type)=>{
   // console.log(e);
   // let d=e.nativeEvent.path[2].innerText;
    // console.log(d);
    // let id=d[0].split(' ');
    // console.log(id);
    let data=[...this.state.vegFruits];
    console.log(data);
    let index=data.findIndex(ob=>ob.name===item);
    console.log(index);
    if(data[index].qty>=1 && this.state.total>0){
    data[index].qty=data[index].qty+1;
    console.log(data);
    this.setState({vegFruits:data});
    this.setState({total:this.state.total-data[index].price});
    let tempStock = [...this.state.vegFruits];
    localStorage.getItem("temparr") &&
      localStorage.removeItem("temparr");
    localStorage.setItem("temparr", JSON.stringify(tempStock));
    let c=this.state.total;
    localStorage.getItem("cash") && localStorage.removeItem("cash");
    localStorage.setItem("cash", JSON.stringify(c));
    }else{
      alert(`${this.state.total} insufficient cash in Machine`);
    }
  }

componentDidMount(){
    let modifiedCash = localStorage.getItem("cash");
    let addedItem = localStorage.getItem("temparr");
    addedItem && this.setState({vegFruits:JSON.parse(addedItem)});
    modifiedCash && this.setState({total:+modifiedCash});
   // this.state.name.current.focus();
  }


  inName = (event) => {
    if (event.key === "Enter") {
      this.cost.current.focus();
    }
  };

  inCost = (event) => {
    if (event.key === "Enter") {
      this.qty.current.focus();
    }
  };

  addItem = () => {
    let temparr = [...this.state.vegFruits];
    let tempName = this.state.name;
    let tempCost = this.state.price;
    let tempCount = this.state.qty;
    let tempType=this.state.type;
    temparr.push({ name: tempName,type:tempType,qty:tempCount, price: tempCost });
    this.setState({vegFruits:temparr});
    console.log(this.state.vegFruits);
    localStorage.getItem("temparr") && localStorage.removeItem("temparr");
    localStorage.setItem("temparr", JSON.stringify(temparr));
    // setName("");
    // setCost("");
    // setCount("");
  }
 render(){
     return(
         <div>
           <h3>The total cash in the Machine is ${this.state.total}</h3>
             <Table1 data={this.state.vegFruits.filter(i=>i.type==='fruit')} buy={this.buyClick} sell={this.sellClick} headers="Fruits"/>
             <Table1 data={this.state.vegFruits.filter(i=>i.type==='veg')} buy={this.buyClick} sell={this.sellClick} headers="Veggies"/>
             <h3>Add new Items to Stock</h3>
      <input
        id="name"
        // value={name}
        placeholder="Name"
        type="text"
        className="text-box"
        onKeyPress={this.inName}
        onChange={(e) => this.setState({name:e.target.value})}
      />{" "}
      <br />
      <input
        id="cost"
        className="Cost"
        placeholder="Cost"
        type="number"
        onKeyPress={this.inCost}
        onChange={(e) =>this.setState({price:parseInt(e.target.value)})}
      />{" "}
      <br />
      <input
        id="count"
        className="Count"
        placeholder="quantity"
        type="number"
        onChange={(e) => this.setState({qty:parseInt(e.target.value)})}
      />{" "}
      <br />
      <select onChange={(e) => this.setState({type:(e.target.value)})}>
        <option value="fruit" selected>
          Fruits
        </option>
        <option value="veg">Vegetables</option>
      </select>
      <br />
      <br />
      <button onClick={this.addItem}>Add to table</button>
      <br />
      <br />
         </div>
     )
 }

}
export default App;
 