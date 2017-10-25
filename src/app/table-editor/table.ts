import { Order } from '../orders/order';
import { Plate } from '../room-editor/plate';
import { Waiter } from '../waiters/waiter';

export class Table {
  public id: number;
  public xPos: number;
  public yPos: number;
  public order: Order;
  public plates: Plate[];
  public state: string;
  public waiter: Waiter;
}
