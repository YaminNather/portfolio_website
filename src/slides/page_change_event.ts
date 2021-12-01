export type PageChangeListener = (currentPage: number, previousPage: number)=>void;

export default class PageChangeEvent {
  public addListener(callback: PageChangeListener): void {
    if(this.listeners.includes(callback))
      return;

    this.listeners.push(callback);
  }

  public removeListener(callback: PageChangeListener): void {
    const index: number = this.listeners.indexOf(callback);

    if(index == -1)
      return;

    this.listeners.splice(index, 1);
  } 

  public invoke = (currentPage: number, previousPage: number): void => {
    if(this.listeners.length == 0)
      return;

    for(const listener of this.listeners) {      
      listener(currentPage, previousPage);
    }
  };


  
  private listeners: PageChangeListener[] = [];
}