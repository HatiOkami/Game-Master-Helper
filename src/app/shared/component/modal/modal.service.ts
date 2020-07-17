import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private modals: any[] = [];

  add(modal: any): void {
    this.modals.push(modal);
  }

  close(id: string): void {
    const modal = this.modals.find(m => m.id === id);
    modal.close();
  }

  closeAll(): void {
    this.modals.forEach(m => m.close());
  }

  isOpen(id: string): boolean {
    const modal = this.modals.find(m => m.id === id);

    return modal && modal.isOpened;
  }

  open(id: string): void {
    const modal = this.modals.find(m => m.id === id);
    modal.open();
  }

  remove(id: string): void {
    this.modals = this.modals.filter(m => m.id !== id);
  }
}
