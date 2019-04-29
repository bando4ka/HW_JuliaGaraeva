// Task manager
// 1. создать задачу
//      а. обработка формы
//          - проверить данные перед добавлением (валидация)
//      б. добавить задачу в массив
//      в. добавить данные в таблицу
//      г. очистить форму
// 2. удалить задачу
//      а. подтверждение
//      б. удаление данных из таблицы
//      в. удаление данных из массива
// 3. редактировать задачу
//      а. взять данные из массива
//      б. поместить в форму
//      в. обработать форму на редактирование
//          - валидация
//      г. обновить данные в массиве
//      д. обновить данные в таблице
//      е. офистить форму

// task = {
//     id: {
//         type: 'String',
//         required: true
//     },
//     title: {
//         type: 'String',
//         required: true
//     },
//     text: {
//         type: 'String',
//         required: true
//     }
// }


let storage = {
    todos: []
};

function generateId() {
    const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let id = '';

    for (let char of words) {
        let index = Math.floor(Math.random() * words.length);
        id += words[index];
    }

    return id;
}

function addNewTodoToStorage(title, text) {
    if (!title) return console.log('Введите заголовок задачи');
    if (!text) return console.log('Введите текст задачи');

    const newTask = {
        title,
        text,
        id: generateId()
    };

    storage.todos.push(newTask);

    return storage.todos;
}
console.log(storage.todos);
addNewTodoToStorage('My title 1', 'My text 1');
addNewTodoToStorage('My title 2', 'My text 2');
addNewTodoToStorage('My title 3', 'My text 3');
addNewTodoToStorage('My title 4', 'My text 4');

function deleteTodoFromStorage(id) {
    if (!id) return console.log('Please, enter id');

    const taskIndex = storage.todos.findIndex((task) => task.id === id)

    if (taskIndex === -1) return console.log('id не существует');

    const removedTask = storage.todos.splice(taskIndex, 1);

    return removedTask;
}
//console.log(deleteTodoFromStorage(''));

function editTaskStorage(id, title, text) {
    if (!id) return console.log('Данный id не существует');
    if (!title) return console.log('Please, enter a New Title');
    if (!text) return console.log('Please, enter a New Title');

    const taskIndex = storage.todos.findIndex((task) => task.id === id)

    if (taskIndex === -1) return console.log("This id doesn't exist");

    const removedForEdit = storage.todos.splice(taskIndex, 1);

    const changeTaskStorage = {
        title,
        text,
        id
    };

    storage.todos.push(changeTaskStorage);

    return storage.todos;
}

editTaskStorage('w0tC5upwWcHt6WcF7LSsTtm1QyF7HDogZwjv6c4hjbSVLVqm2oJcj9Y2J1DJcm', 'My New Title', 'My New Text');
//console.log(storage.todos);
// эти строки лучше выполнять в консоли браузера, когда вы сможете
// из массива storage.todos взять уникальный id тасочки
// editTaskStorage('some id', 'new title', 'new text')
// console.log(storage.todos)

// или можете практиковаться на storage.todos[0].id :)