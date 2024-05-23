interface shoppingItem {
    text: string;
    checked: boolean;
  }
  
  class Shopplist {
    items: shoppingItem[] = [];
    ulElement: HTMLUListElement;
    inputElement: HTMLInputElement;
    addButton: HTMLButtonElement;
  
    constructor(
      ulElement: HTMLUListElement,
      inputElement: HTMLInputElement,
      addButton: HTMLButtonElement
    ) {
      this.ulElement = ulElement;
      this.inputElement = inputElement;
      this.addButton = addButton;
  
      this.addButton.addEventListener('click', () => this.addItem());
  
      this.render();
    }
  
    addItem() {
      const text = this.inputElement.value.trim();
      if (text === '') {
        alert('We must write something!');
        return;
      }
  
      const newItem: shoppingItem = { text, checked: false };
      this.items.push(newItem);
      this.inputElement.value = '';
      this.render();
    }
  
    toggleItem(index: number) {
      this.items[index].checked = !this.items[index].checked;
      this.render();
    }
  
    deleteItem(index: number) {
      this.items.splice(index, 2);
      this.render();
    }
  
    render() {
      this.ulElement.innerHTML = '';
      this.items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.text;
        if (item.checked) {
          li.classList.add('checked');
        }
  
        li.addEventListener('click', () => this.toggleItem(index));
  
        const closeBtn = document.createElement('span');
        closeBtn.className = 'close';
        closeBtn.textContent = '\u00D7';
        closeBtn.addEventListener('click', (event) => {
          event.stopPropagation();
          this.deleteItem(index);
        });
  
        li.appendChild(closeBtn);
        this.ulElement.appendChild(li);
      });
    }
  }
  
  function Initializeshoppinglist() {
    const ulElement = document.getElementById('myUL') as HTMLUListElement;
    const inputElement = document.getElementById('myInput') as HTMLInputElement;
    const addButton = document.getElementById('addBtn') as HTMLButtonElement;
  
    if (ulElement && inputElement && addButton) {
      const shoppingList = new Shopplist(ulElement, inputElement, addButton);
      console.log(shoppingList);
    } else {
      console.error('One or more elements not found');
    }
  }
  
  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', Initializeshoppinglist);
  }
  console.log(Shopplist);

