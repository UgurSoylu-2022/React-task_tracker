import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import TaskList from '../tasks/TaskList';

const Home = ({taskList, setTaskList}) => {

    const [taskInfo, setTaskInfo] = useState({
        taskName:"", startDate:"", endDate:""})
        const {taskName, startDate, endDate} = taskInfo
    const addTaskName = (e)=>{
        setTaskInfo({...taskInfo, taskName:`${e.target.value}`})
        
    }
    const addStartDate = (e)=>{
        setTaskInfo({...taskInfo, startDate:`${e.target.value}`})
        
    }
    const addEndDate = (e)=>{
        setTaskInfo({...taskInfo, endDate:`${e.target.value}`})
        
    }
    const sendInfo = ()=>{
        if(!taskName || !startDate || !endDate){
            alert("Please fill out all fields")
        }else{
        setTaskList([...taskList, taskInfo])
        console.log(taskList)
        setTaskInfo({...taskInfo, taskName:"", startDate:"", endDate:""})}        
    }

    
  return (
    <div className="coontainer d-flex flex-column align-items-center  ">
        <h1 className="text-danger m-3">Task Tracker</h1>
        <InputGroup className="m-3 w-50">
        <InputGroup.Text className="w-25 bg-warning" id="basic-addon1">Task name</InputGroup.Text>
        <Form.Control
          placeholder="Your task..."
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={addTaskName}
          value={taskName}
        />
      </InputGroup>

      <InputGroup className="mb-3 w-50">
      <InputGroup.Text className="w-25 bg-warning" id="basic-addon2">Start date</InputGroup.Text>
        <Form.Control
          placeholder="1 Sep 2022"
          aria-label="Start date"
          aria-describedby="basic-addon2"
          onChange={addStartDate}
          value={startDate}
        />        
      </InputGroup>

      <InputGroup className="mb-3 w-50">
      <InputGroup.Text className=" w-25 bg-warning" id="basic-addon3">End date </InputGroup.Text>
        <Form.Control
          placeholder="10 Sep 2022"
          aria-label="10 Sep 2022"
          aria-describedby="basic-addon3"
          onChange={addEndDate}
          value={endDate}
        />        
      </InputGroup>
      <Button onClick={sendInfo} className="mb-5" variant="primary" type="submit" >
        Add Task
      </Button>
     <TaskList taskList = {taskList} setTaskList = {setTaskList} taskInfo ={taskInfo} setTaskInfo={setTaskInfo} />
     
    </div>
  )
}

export default Home;