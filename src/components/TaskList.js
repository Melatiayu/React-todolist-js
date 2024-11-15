import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { FaCircle, FaRegCircle, FaDotCircle } from 'react-icons/fa';
import { BiTask, BiLoader, BiCheckCircle } from 'react-icons/bi'; // Menggunakan ikon dari react-icons
import './TaskList.css'; // Import file CSS di sini

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'High':
                return 'red';
            case 'Medium':
                return 'yellow';
            case 'Low':
                return 'green';
            default:
                return 'black';
        }
    };

    const getProgressIcon = (status) => {
        switch (status) {
            case 'To Do':
                return <BiTask style={{ color: '#ccc' }} />; // Ikon untuk "To Do"
            case 'In Progress':
                return <BiLoader style={{ color: '#007bff' }} />; // Ikon untuk "In Progress"
            case 'Done':
                return <BiCheckCircle style={{ color: '#28a745' }} />; // Ikon untuk "Done"
            default:
                return null;
        }
    };

    return (
        <Button variant="link" style={{ width: '100%', padding: '0', backgroundColor: 'transparent', border: 'none' }}>
            <div>
                {tasks.map((task, index) => (
                    <Card className="mb-3" key={index}>
                        <Card.Body className="d-flex justify-content-between align-items-center task-row">
                            <div className="task-item">
                                <div className="label">Task</div>
                                <div className="task-name">{task.name}</div>
                            </div>
                            <div className="task-item">
                                <div className="label">Priority</div>
                                <div className="priority" style={{ color: getPriorityColor(task.priority) }}>
                                    {task.priority}
                                </div>
                            </div>
                            <div className="task-item">
                                <div className="label">Status</div>
                                <span className="badge bg-secondary">{task.status}</span>
                            </div>
                            <div className="task-item">
                                <div className="label">Progress</div>
                                <div className="progress-icon">
                                    {getProgressIcon(task.status)} {/* Menggunakan ikon baru */}
                                </div>
                            </div>
                            <div className="task-item">
                                <div className="label">Date</div>
                                <div className="task-date">{task.date}</div>
                            </div>
                            <div className="actions">
                                <Button variant="link" onClick={() => showEditForm(task)}>
                                    <FaEdit />
                                </Button>
                                <Button variant="link" onClick={() => deleteTask(task.id)} className="text-danger">
                                    <FaTrash />
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Button>
    );
};

export default TaskList;