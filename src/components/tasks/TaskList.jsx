import React from 'react'
import Table from 'react-bootstrap/Table';
import {BsTrash} from "react-icons/bs"
// import {AiFillEdit} from "react-icons/ai"

const TaskList = ({taskList, setTaskList, taskInfo, setTaskInfo}) => {
    
    const deleteTask= (index)=>{
        console.log(index)
        taskList.splice(index,1)
        setTaskList(taskList)
        
        console.log(taskList)
        console.log(taskInfo)
        setTaskInfo({...taskInfo, taskName:"", startDate:"", endDate:""})
    }
    
  return (
    <div className="w-75">
        <Table  striped  hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Task Name</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Remove Task</th>
        </tr>
      </thead>
      {taskList.map((task, index)=>{
        console.log(index)
        if(task.taskName) {
            return (<tbody key={index} >
                <tr>
                    <td>{index + 1}</td>
                    <td>{task.taskName.toUpperCase()}</td>
                    <td>{task.startDate}</td>
                    <td>{task.endDate}</td>          
                    {/* <td ><AiFillEdit className="ml-3 text-primary "/></td> */}
                    <td><BsTrash onClick={()=>deleteTask(index)} className="ml-3 text-danger"/></td>
                            
                </tr>           
                    
                </tbody>)}
          
      })}
      
    </Table>
    </div>
  )
}

export default TaskList