/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import axios from "axios";
const UserModal = (props) => {
    const [form,setForm] = useState({})
    const {open, toggle, user} = props
    // console.log(user,'user')
    const handleChange =(e)=>{
     const {name,value} = e.target
        setForm({...form, [name]: value})
    }
    // CRUD
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!user.id){
      axios.post("http://localhost:3000/users", form).then(res=>{
        if(res.status === 201){
          window.location.reload()
        }
      })
    }else {
      const payload = {
        name: form.name ? form.name : user.name,
        email: form.email ? form.email : user.email,
        number: form.number ? form.number : user.number
      }
      axios.put(`http://localhost:3000/users/${user.id}`, payload).then(res=>{
        if(res.status === 200){
          window.location.reload()
        }
      })
    }
  };
  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalHeader>
        <h1 className="text-center">Add user</h1>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit} id="submit">
          <input
            type="text"
            placeholder="Name"
            name="name"
            defaultValue={user.name}
            className="form-control my-2"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            defaultValue={user.email}
            className="form-control my-2"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Number"
            name="number"
            defaultValue={user.number}
            className="form-control my-2"
            onChange={handleChange}
          />
        </form>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={toggle}>
          cancel
        </button>
        <button className="btn btn-success" type="submit" form="submit">
          save
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default UserModal;
