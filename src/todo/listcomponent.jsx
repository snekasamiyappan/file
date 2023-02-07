import React from "react";

class ListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {
          id: 1,
          product: "vivo",
          price: "14,999",
          createdDate: new Date()
        },
        {
          id: 2,
          product: "realme",
          price: "13,999",
          createdDate: new Date()
        },
        {
          id: 3,
          product: "redmi",
          price: "12,999",
          createdDate: new Date()
        },
        {
          id: 4,
          product: "oppo",
          price: "14,990",
          createdDate: new Date()
        },
      ],
    };
  }
  render() {
    return (
        
      <div className="container">
        <h3 className="mt-3 mb-3">PRODUCT LIST</h3>
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th>id</th>
              <th>product Name</th>
              <th>price</th>
              <th>date</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
           {this.state.productList.map((product ,index)=>(
            <tr key={index}>
                <td>{product.id}</td>
                <td>{product.product}</td>
                <td>{product.price}</td>
                <td>{product.createdDate.toString()}</td>
                <td>
                  <button className="btn btn-warning">Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger">delete</button>
                </td>
            </tr>
          ))}
          </tbody>
        </table>
        
        </div>
         );
  }
}

export default ListComponent;