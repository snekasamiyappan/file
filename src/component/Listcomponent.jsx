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
        },
        {
          id: 2,
          product: "realme",
          price: "13,999",
        },
        {
          id: 3,
          product: "redmi",
          price: "12,999",
        },
        {
          id: 4,
          product: "oppo",
          price: "14,990",
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>vivo</td>
              <td>14,999</td>
            </tr>
          </tbody>
        </table>
        <h3 className="mt-3 mb-3">(Midnight Galaxy,128 GB) (4 GB RAM)</h3>
        <h3 className="mt-3 mb-3">16.36cm(6.44inch)Full HD+AMOLED Display</h3>
        <h3 className="mt-3 mb-3">500MP+2MP+2MP|16MP Front Camera</h3>
        <h3 className="mt-3 mb-3">5000 mAh Lithium Battery</h3>
        <h3 className="mt-3 mb-3">Qualcomm Snapdragon 680 Processor</h3>
      </div>
    );
  }
}

export default ListComponent;
