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
      this.draggedItem = null;
    }
  }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  addNewItem() {
    this.newItems.push(this.item.value!);
    this.isMenuOpen = false;
      this.item = new FormControl<string>('');
  }


  closeMenu(){
    this.isMenuOpen = false;
  }

}
