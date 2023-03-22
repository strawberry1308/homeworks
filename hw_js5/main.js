const input = document.getElementById('input');
const addBtn = document.getElementById('add');
const output = document.getElementById('output');
addBtn.addEventListener('click', addItem);
function addItem() {
  if (input.value.trim() !== '') {
    const item = document.createElement('div');
    item.classList.add('item');
    const itemInput = document.createElement('input');
    itemInput.setAttribute('type', 'text');
    itemInput.setAttribute('value', input.value);
    item.appendChild(itemInput);
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.textContent = 'Редактировать';
    editBtn.addEventListener('click', () => {
      const newValue = prompt('Введите новое значение', itemInput.value);
      if (newValue !== null && newValue.trim() !== '') {
        itemInput.setAttribute('value', newValue);
      }
    });
    item.appendChild(editBtn);
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = 'Удалить';
    deleteBtn.addEventListener('click', () => {
      item.remove();
    });
    item.appendChild(deleteBtn);
    output.appendChild(item);
    input.value = '';
  }
}