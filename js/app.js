window.addEventListener('load', () => {

    const form = document.getElementsByTagName('form')[0]
    const taskList = document.getElementById('task-list')
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let taskDescription = document.getElementById('description')

        if (taskDescription.value) {
            addTask(taskDescription.value)
        }
        form.reset()
    })

    const addTask = (description) => {
        const taskDiv = document.createElement('div')
        const taskCheckbox = document.createElement('input')
        const taskLabel = document.createElement('label')
        const taskTextNode = document.createTextNode(description)

        taskDiv.setAttribute('class', 'task')
        taskCheckbox.setAttribute('type', 'checkbox')
        taskCheckbox.setAttribute('name', description)
        taskCheckbox.setAttribute('id', description)
        taskLabel.setAttribute('for', description)

        taskLabel.append(taskTextNode)
        taskDiv.appendChild(taskCheckbox)
        taskDiv.appendChild(taskLabel)
        taskList.appendChild(taskDiv)

        taskDiv.addEventListener('click', () => {
            if (taskDiv.childNodes[0].checked) {
                taskLabel.style.textDecoration = 'line-through'
            } else {
                taskLabel.style.textDecoration = 'none'
            }
        })
    }
})







