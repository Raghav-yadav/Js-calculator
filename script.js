let string = '';
let buttons = document.querySelectorAll('button');

// Adding click events to all buttons
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value === 'C') {
            // Clear the input
            string = '';
            document.querySelector('input').value = string;
        } else if (value === '=') {
            try {
                // Evaluate the input string and update the value
                string = eval(string); // Note: Use eval cautiously
                document.querySelector('input').value = string;
            } catch {
                // Handle invalid expressions
                document.querySelector('input').value = 'Error';
                string = '';
            }
        } else {
            // Append the clicked button value to the input string
            string += value;
            document.querySelector('input').value = string;
        }
    });
});
