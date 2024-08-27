import React, { useState } from 'react';

function TodoList(props) {
    const [activity,setActivity]=useState("");
    const [listData,setListData]=useState([])

    function addActivity(){
        // setListData([...listData,activity])
        // console.log(listData)
        setListData((listData)=>{
            const updateList=[...listData,activity]
            setActivity('')
        console.log(updateList)
       return updateList
        })
    }
    function removeActivity(i){
        const updatelistData=listData.filter((elem,id)=>{
            return i!=id;
        })
        setListData(updatelistData)
    }
function removeALL(){
    setListData([])
}

    return (
       <>
       <div className='container'>
       <div className='header'>To do List</div>
       <input type='text' placeholder='Add activity'
        value={activity} onChange={(e)=>setActivity(e.target.value)}/>
      <button className='addToDo' onClick={addActivity}>Add</button>

      <h2 className='list-heading'>Your ToDo List Items:</h2>
      {listData!=[] && listData.map((data,i)=>{
        return(
            <>
        <p key={i} className='todoContainer'>
        <div className='listData'>{data}</div>
        <div className='removeButton'>
            <button onClick={()=>removeActivity(i)}>Remove</button>
        </div>
        </p>
            </>
        )
      })}
      {listData.length >= 1 && <button className='removeAll' onClick={removeALL}>Remove All</button>}
        </div>
       </>
    );
}

export default TodoList;