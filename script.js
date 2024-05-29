document.addEventListener('DOMContentLoaded', function() {
    let rowCount = 1;

    document.getElementById('addRow').addEventListener('click', function() {
        rowCount++;
        const newRow = document.createElement('div');
        newRow.classList.add('formRow');
        newRow.innerHTML = `
            <input type="text" id="name${rowCount}" name="name" placeholder="Name" required>
            <input type="email" id="email${rowCount}" name="email" placeholder="Email" required>
            <input type="number" id="age${rowCount}" name="age" placeholder="Age" required>
            <button class="removeRow">-</button>
        `;
        document.getElementById('formRows').appendChild(newRow);
    });

    document.getElementById('entryForm').addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('removeRow')) {
            e.target.parentElement.remove();
        }
    });

    document.getElementById('entryForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const rows = document.querySelectorAll('.formRow');
        let resultText = '';

        rows.forEach((row, index) => {
            const name = document.getElementById(`name${index + 1}`).value;
            const email = document.getElementById(`email${index + 1}`).value;
            const age = document.getElementById(`age${index + 1}`).value;
            resultText += `Name: ${name}, Email: ${email}, Age: ${age}\n`;
        });

        const result = document.getElementById('result');
        result.textContent = resultText;
    });
});
