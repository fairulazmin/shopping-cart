import React from "react";

const Counter = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Items</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Total Price</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr className="align-middle">
          <td>
            <span>1</span>
          </td>
          <td>
            <form className="form-control">props.counter.item</form>
          </td>
          <td className="btn-group">
            <button className="btn btn-secondary">-</button>
            <form className="form-control rounded-0">
              props.counter.quantity
            </form>
            <button className="btn btn-secondary">+</button>
          </td>
          <td className="align-middle">props.counter.price</td>
          <td className="align-middle">RM10.00</td>
          <td>
            <button className="btn btn-danger">delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Counter;

/*
<div className="d-flex p-2 bg-dark text-light rounded ">
<span className="lead mr-2">3</span>
<div>
  <button className="btn btn-secondary btn-sm mr-2">+</button>
  <form className="form-control"></form>
  <button className="btn btn-secondary btn-sm mr-2">-</button>
  <button className="btn btn-danger btn-sm mr-2">delete</button>
</div>
</div>
*/
