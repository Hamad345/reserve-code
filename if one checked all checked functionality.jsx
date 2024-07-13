import React, { useEffect, useState } from 'react'
import overview from '../images/overview.png'
import { IoIosSearch } from "react-icons/io";
import girl from '../images/girl.png';  
import { Link } from 'react-router-dom';

const userData = [
  { check: <input type='checkbox' className='accent-black'/>, img : girl, name: "Michael Dom", email: 'MichaelDom390@gmail.com', Acc:'User' ,action: "...", isSelected: false  },
  { check: <input type='checkbox' className='accent-black'/>, img : girl, name: "Joseph Gonzalez", email:'JosephGonzalez2@gmail.com', Acc:'Vendor' ,action: "..." , isSelected: false },
  { check: <input type='checkbox' className='accent-black'/>, img : girl, name: "John", email: 'MichaelDom390@gmail.com', Acc:'User' ,action: "...", isSelected: false  },  
  { check: <input type='checkbox' className='accent-black'/>, img : girl, name: "King", email: 'MichaelDom390@gmail.com', Acc:'User' ,action: "...", isSelected: false },
  { check: <input type='checkbox' className='accent-black'/>, img : girl, name: "Dom", email: 'MichaelDom390@gmail.com', Acc:'User' ,action: "...", isSelected: false },
  { check: <input type='checkbox' className='accent-black'/>, img : girl, name: "Linn", email: 'MichaelDom390@gmail.com', Acc:'User' ,action: "...", isSelected: false },
  { check: <input type='checkbox' className='accent-black'/>, img : girl, name: "Cristian", email: 'MichaelDom390@gmail.com', Acc:'User' ,action: "...", isSelected: false },
  { check: <input type='checkbox' className='accent-black'/>, img : girl, name: "Daud", email: 'MichaelDom390@gmail.com', Acc:'User' ,action: "...", isSelected: false },

];


export default function UserManage() {
  const [users, setUsers] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
      setSelectedCount(checked ? users.length : 0);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
       
       const updatedCount = checked ? selectedCount + 1 : selectedCount - 1;
       setSelectedCount(updatedCount); 
    }
  };

 
 

  
  return (
    <>
    <div className='flex '>
      
        <div className='bg-[#E6E6EB] w-52 h-[900px] '>
        <div className='fixed'>
        <Link to="/DashBoard"><button className='flex ml-5 gap-x-6 w-40 h-12 pt-3 border rounded-xl text-md font-[Poppins]  font-medium mt-40 hover:bg-black active:bg-black active:text-white hover:text-white'><span className='pl-4 '><img src={overview}></img></span>Overview</button></Link>
        <Link to="/UserManage"> <button className='flex ml-5 pl- gap-x-2 w-40 h-12  border rounded-xl text-md font-[Poppins] font-medium mt-6 hover:bg-black active:bg-black active:text-white hover:text-white'><span className='pl-4 pt-3 '><img src={overview}></img></span>User management </button></Link>
        <Link to='/CategoryManage'><button className='flex ml-5 gap-x- w-40 h-12   border rounded-xl text-md font-[Poppins] font-medium mt-6 hover:bg-black active:bg-black active:text-white hover:text-white'><span className='pl-4 pt-3'><img src={overview}></img></span>Category management</button>  </Link> 
        </div>
       </div> 
       {/* nav */}
       <div >
         <h1 className='font-[Poppins] text-2xl font-bold mt-4 ml-4'>User management</h1>
         <div className='flex'>
         <h1 className='font-[Poppins] text-lg font-   mt-4 ml-4'>All Users</h1>
         <IoIosSearch className="ml-[232px] absolute text-md mt-6"/> 
         <input type="text" placeholder='Search User' className='h-7 pl-5 mt-4 w-40 border rounded-3xl bg-[#F3F3F3]  ml-36 placeholder:-pl-1 placeholder:text-black placeholder:text-sm ' />
         <select className='bg-[#F3F3F3] w-32 hover:text-white font-[Poppins] hover:bg-black border-1 border-black rounded-lg h-8 mt-4 text-sm ml-80'>
          <option>All Users</option>
         </select>
         
         <button
  className={`bg-[#F3F3F3] w-40 border-1 border-black rounded-3xl h-8 mt-4 text-sm ml-2 hover:bg-[${selectedCount >= 1 ? '#FF0000' : '#00000'}] hover:text-white font-[Poppins]`}
  disabled={selectedCount === 0} 
       
      >
       {selectedCount >= 1 ? "Selected Delete" : "Create New User"}
      </button>         </div>
       </div>
       {/* nav ends */}
     
    </div>
    {/* table start */}
 
    <table className=' w-[990px] -mt-[725px] ml-56 ' cellPadding={18} > 
      
         <thead className=' bg-[#F3F3F3]  w-[990px] h-14 border rounded-2xl absolute -mt-14' >
             <tr className='' >
             <th className='accent-black'> <input type="checkbox" className="form-check-input" name="allSelect" checked={!users.some((user) => user?.isChecked !== true)} onChange={handleChange} /></th>
             <th className='absolute ml-5 font-extralight font-[Poppins]'>Full name</th>
             <th className=' absolute ml-[340px] font-extralight font-[Poppins]' >Email</th>
             <th className='absolute ml-[720px] font-extralight font-[Poppins]' >Account type</th>
             <th className='font-extralight font-[Poppins] absolute ml-[850px]' >Action</th>
             </tr>
      </thead>   
      <tbody className='' >
        {users.map((user, index)=>(
          <tr key={user}  className='mt-[00px]'>
            <td className='font-semibold font-[Poppins] accent-black '> <input type="checkbox" className="form-check-input" name={user.name}  checked={user?.isChecked || false} onChange={handleChange}  /></td>
            <td className="flex gap-x-2 font-semibold font-[Poppins]"><img src={user.img}></img>{user.name}</td>
            <td className='font-semibold font-[Poppins]'>{user.email}</td>
            <td className='font-semibold font-[Poppins]'>{user.Acc}</td>
            <td className='font-semibold font-[Poppins]'> {user.action}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
   
    </>
  )
}
