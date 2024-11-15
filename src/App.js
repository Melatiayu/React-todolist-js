import React, { useState } from 'react';
import { Container, Button, Form, InputGroup } from 'react-bootstrap';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';

function App() {
    const [tasks, setTasks] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);
    const [searchTerm, setSearchTerm] = useState(''); // State untuk menyimpan input pencarian

    const handleShowForm = () => setShowForm(true);
    const handleCloseForm = () => {
        setShowForm(false);
        setTaskToEdit(null);
    };

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now() }]);
    };

    const editTask = (updatedTask) => {
        setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const showEditForm = (task) => {
        setTaskToEdit(task);
        handleShowForm();
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value); // Update state pencarian
    };

    const filteredTasks = tasks.filter(task => 
        task.name.toLowerCase().includes(searchTerm.toLowerCase())
    ); // Filter tugas berdasarkan pencarian

    return (
        <Container className="my-5">
            <h1 className="mb-4">Task List</h1>
            <div className="button-container mb-3">
                <Button variant="primary" onClick={handleShowForm}>+ Add Task</Button>
            </div>
            <div className="mb-3">
                <InputGroup>
                    <Form.Control
                        type="text"
                        placeholder="Search Task"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <Button variant="outline-secondary" style={{ textDecoration: 'none' }} onClick={() => {/* Optional: Add search functionality */}}>
                        <FaSearch />
                    </Button>
                </InputGroup>
            </div>
            <div className="mt-4">
                <TaskList tasks={filteredTasks} deleteTask={deleteTask} showEditForm={showEditForm} />
                <TaskForm
                    show={showForm}
                    handleClose={handleCloseForm}
                    addTask={addTask}
                    editTask={editTask}
                    taskToEdit={taskToEdit}
                />
            </div>
        </Container>
    );
}

export default App;