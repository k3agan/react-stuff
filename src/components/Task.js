import Delete from '@material-ui/icons/Delete'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className = 'task'
         onDoubleClick = {(id) => onToggle(id)} 
         >
            <h3>{task.something} 
                <Delete onClick = {() => {onDelete(task.id)}} color = 'secondary' />
            </h3>
            <h3>{task.id}</h3>
            
        </div>
    )
}

export default Task