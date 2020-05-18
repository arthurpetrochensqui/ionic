import { Item} from './Item';

//export type Items = Item[];
export interface Items {
    offset: number;
    limit: number;
    total?: number;
    results: Item[];
}