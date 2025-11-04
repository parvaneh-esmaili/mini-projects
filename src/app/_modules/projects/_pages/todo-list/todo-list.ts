import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList {
  isMenuOpen = false;
  newItems = ['hello'];
  draggedItem: HTMLElement | null = null;

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
      console.log('Item dropped into:', dropZone);
      this.draggedItem = null;
    }
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  addNewItem(){
    this.isMenuOpen = false;
  }

  closeMenu(){
    this.isMenuOpen = false;

  }

}
