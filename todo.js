let userInput = prompt('What would you like to do?');
const todo = ['eating', 'sleeping', 'studying', 'shopping', 'book reading'];

while (userInput !== 'quit') {
    if (userInput === 'list') {
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i} : ${todo[i]}`);
        }
    } else if (userInput === 'new') {
        const neww = prompt('Enter a new todo');
        todo.push(neww);
    } else if (userInput === 'delete') {
        const index = parseInt(prompt('Ok! Enter an index to delete.'));
        if (!Number.isNaN(index)) {
            const deleted = todo.splice(index, 1);
            console.log(`Ok! Deleted ${deleted[0]}`)
        } else {
            console.log('Unknown Index')
        }

    }
    userInput = prompt('What would you like to do?'); // Update userInput inside the loop
}

console.log('OK! You Quit the App');
