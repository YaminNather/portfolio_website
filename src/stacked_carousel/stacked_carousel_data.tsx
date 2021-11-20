import { Context, createContext } from "react";

export default interface StackedCarouselData {
  scrollFactor: number;
  horizontalPadding: number;
  width: number;
  offset: number;
  height: number;
  cardWidth: number;
  cardHeight: number;
}

export const stackedCarouselContext: Context<StackedCarouselData | null> = createContext<StackedCarouselData | null>(null);