import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [ReactiveFormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList {
  isMenuOpen = false;
  item = new FormControl<string>('');
  newItems = ['todo list works'];
  draggedItem: HTMLElement | null = null;

  constructor(){
    const savedItems = localStorage.getItem('newItems');
      if (savedItems) {
    this.newItems = JSON.parse(savedItems);
    }
  }

  dragStartHandler(event: DragEvent) {
    this.draggedItem = event.target as HTMLElement;
  }

  dropOverHandler(event: DragEvent) {
    event.preventDefault();
  }

  dragHandler(event: DragEvent) {
    event.preventDefault();
    const dropZone = event.target as HTMLElement;

    if (this.draggedItem && dropZone) {
      dropZone.appendChild(this.draggedItem);
      this.draggedItem = null;
    }
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }
  addNewItem() {
    const value = this.item.value!;
    this.newItems.push(value);
    this.isMenuOpen = false;
    this.item = new FormControl<string>('');
    localStorage.setItem('newItems', JSON.stringify(this.newItems));
  }

  closeMenu(){
    this.isMenuOpen = false;
  }

removeItem(itemToRemove: string) {
  this.newItems = this.newItems.filter(item => item !== itemToRemove);
  localStorage.setItem('newItems', JSON.stringify(this.newItems));
}

}
