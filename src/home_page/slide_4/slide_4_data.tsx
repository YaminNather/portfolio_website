import { Context, createContext, Dispatch, SetStateAction } from "react";
import { ExperienceType } from "./experience_card/experience_card_details";

export default interface Slide4Data {
  experienceType: ExperienceType | null;
  setExperienceType: Dispatch<SetStateAction<ExperienceType | null>>;  
}

export const slide4DataContext: Context<Slide4Data | null> = createContext<Slide4Data | null>(null);