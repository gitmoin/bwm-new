

export interface IRental {

    isLoaded: boolean;

    rLog: ()=> void;
}

export class AppStorage<T> {
    items : T[];
    addItem(item: T):  T {
        this.items.push(item);
        return item;
    }

    getItem(index: number): T {
        return this.items[index];

    }
    getItems(): T[] {
        return this.items.map(item =>{
            console.log(item);
            return item;
            
        })

    }

    

}