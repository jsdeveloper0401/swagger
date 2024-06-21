import { useState } from "react";
import UserModal from "../../components/modal";
import "./cars.css";
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";
const Cars = () => {
  const [cars, setCars] = useState([
    {id: nanoid(),name: "nimadir", price: '321', color: '12', year:'12', brand:'312'}
  ]);
  const [modal,setModal] = useState(false)
  const openModal =()=>{
    console.log('item')
    // setModal(true)
  }
  return (
    <>
    <UserModal open={modal} toggle={()=>setModal(false)} cars={cars} setCars={setCars}/>
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-10 offset-1">
        <div className="row">
            <div className="col-4">
            <button className="btn btn-success" onClick={()=>setModal(true)}>Open modal</button>
            </div>
            <div className="col-8">
        <input type="text" placeholder="Search..." className="form-control"/>
            </div>
        </div>
        </div>
      </div>
      <div className="row mt-3">
        <table className="table table-bordered table-hover table-striped">
            <thead>
                <tr>
                    <td>T/R</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Year</td>
                    <td>Color</td>
                    <td>Brand</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {
                    cars.map((item,index)=>(
                        <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.year}</td>
                        <td>{item.color}</td>
                        <td>{item.brand}</td>
                        <td>
                            <div className="d-flex gap-2 align-items-center">
                            <button className="btn btn-info" onClick={openModal}>
                            {/* <i className="fa-solid fa-pen-to-square"></i> */}
                            edit
                            </button>
                            <button className="btn btn-danger">
                            <i className="fa-regular fa-trash-can"></i>
                            </button>
                            <NavLink to={`/single-car/${item.id}`} className="btn btn-primary">
                                <span><i className="fa-solid fa-eye"></i></span>
                            </NavLink>
                            </div>
                        </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Cars;
