import React from'react'

export default function Table(props){
    return(
        <div>
            <h5>{props.header}</h5>
           < table title="Fruits"> 
          <thead>
          <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Qty</th>
              <th>Price per qty</th>
              </tr> 
              </thead>
              {props.data.length>0? props.data.map(i=>{
                  return(

                  <tr key={i.id} data-item={i}>
                      <td>{i.id}</td>
                      <td>{i.name}</td>
                      <td>{i.qty}</td>
                      <td>{2}</td>
                      <td><button onClick={props.buyClick}>Buy</button></td>
                      <td><button onClick={props.sellClick}>Sell</button></td>
                  </tr>
                  )
            
              }):""}
        
              </table>
              <h3>total amount in the Machine is</h3>
        </div>
    )
}