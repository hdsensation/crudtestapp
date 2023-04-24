import React, { useState } from "react";

export const User = ({ name, email, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [nam, setnam] = useState(name)
  const [em, setem] = useState(email)

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = () => {
    onEdit(id, nam, em);
    setIsEdit(!isEdit);
  };

  return (
    
  <tr>
      <td>{isEdit? <input onChange={(e)=>setnam(e.target.value)} placeholder="Name"  defaultValue={name} style={{borderRadius:'10px',height:'30px'}} />:<span className="user-name">{name}</span> }</td>
      <td>{isEdit? <input onChange={(e)=>setem(e.target.value)} placeholder="Email"  defaultValue={email} style={{borderRadius:'10px',height:'30px'}}/>: <span className="user-email">{email}</span>}
      {isEdit && <button onClick={()=>handleOnEditSubmit()} className="btn btn-outline-primary " style={{marginLeft:'5px'}}>Save</button>}
      </td>
      <td>
      <button type="button" onClick={handleEdit} class="btn btn-outline-warning" style={{marginRight:'5px'}}>Edit</button>
            <button onClick={handleDelete} class="btn btn-outline-danger">Delete</button>

      </td>
    </tr>

    // <div style={{display:'flex',justifyContent:"center"}}>
    //   {isEdit ? (
    //     <form onSubmit={handleOnEditSubmit}>
    //       <input placeholder="Name" name="name" defaultValue={name} />
    //       <input placeholder="Email" name="email" defaultValue={email} />
    //       <button onSubmit={handleOnEditSubmit}>Save</button>
    //     </form>
    //   ) : (
    //     <div className="user">
    //       <span className="user-name">{name}</span>
    //       <span className="user-email">{email}</span>
    //       <div>
    //         <button onClick={handleEdit}>Edit</button>
    //         <button onClick={handleDelete}>Delete</button>
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
};
