import { ChangeNotifier } from "change-notifier";
import { clamp } from "../utils/math_utils";
import PageChangeEvent from "./page_change_event";

export type PageChangeListener = (currentPage: number, previousPage: number)=>void;

export default class SlidesController extends ChangeNotifier {
  public updateValuesFromComponent = (childrenCount: number, sensitivity: number): void => {
    this.childrenCount = childrenCount;
    this.sensitivity = sensitivity;
    this.notifyListeners();
  };

  public onScrolled = (deltaX: number, deltaY: number): void => {
    let scrollDelta: number = deltaX + deltaY;

    if (scrollDelta === 0.0)
      return;

    const scrollFactorDelta: number = scrollDelta/this.sensitivity;        
    
    this.scrollFactor = this.scrollFactor + scrollFactorDelta;
  };

  public toPage = (page: number): void => {
    this.scrollFactor = page;
  };    

  public set scrollFactor(value: number) {
    const clampedValue: number = clamp(value, 0, this.childrenCount);
    
    if(clampedValue == this.scrollFactor)
      return;

    const previousPage: number = this.getCurrentPage();        
    this.previousScrollFactor = this.scrollFactor;
    
    this._scrollFactor = clampedValue;

    if(previousPage < this.getCurrentPage())
      this.pageChangeEvent.invoke(this.getCurrentPage(), previousPage);    
    
    this.notifyListeners();
  }
  
  public get scrollFactor(): number {
    return this._scrollFactor;
  }

  public getSlidesCount(): number {
    return this.childrenCount;
  }

  public addPageChangeListener = (callback: PageChangeListener): void  => this.pageChangeEvent.addListener(callback);

  public removePageChangeListener = (callback: PageChangeListener): void => this.pageChangeEvent.removeListener(callback);

  public getCurrentPage = (): number => {
    let r: number = Math.trunc(this.scrollFactor);
    if(r != 0 && r == this.childrenCount)
      r -= 1;

    return r;
  };



  private _scrollFactor: number = 0.0;
  private previousScrollFactor: number = 0.0;

  private childrenCount: number = 0;
  private sensitivity: number = 0.0;

  private pageChangeEvent: PageChangeEvent = new PageChangeEvent();
}