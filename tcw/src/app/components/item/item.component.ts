import { Component, Input } from '@angular/core';
import { Item } from '../../model/Item';
@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {//implements OnInit {

  @Input() item: Item;

  constructor() { }

  //ngOnInit() {}

}
