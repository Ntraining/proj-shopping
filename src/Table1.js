import React from 'react';
import "./Table.css";

class Table1 extends React.Component{
    render(){
  return (
    <>
      <h2>{this.props.headers}</h2>
      <hr />
      <table className="tab">
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Available Stock</th>
            <th>Cost per quantity(In $)</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((item) => {
            return (
              <tr className="side-head" key={item.name}>
          
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    id="buy"
                    onClick={()=>this.props.buy(item.name)}
                  >
                    User Buy's
                  </button>
                </td>
                <td>
                  <button
                    id="sell"
                    onClick={()=>this.props.sell(item.name)}
                  >
                    User Sell's
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
    </>
  );
}
}

export default Table1;
