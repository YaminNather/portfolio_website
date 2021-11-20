import classNames from "classnames";
import { Component, CSSProperties } from "react";
import './age_indicator.scss';

export interface AgeIndicatorProps {
  factor: number;
  className?: string;
  style?: CSSProperties;
}

export default class AgeIndicator extends Component<AgeIndicatorProps> {
  public constructor(props: AgeIndicatorProps) {
    super(props);
  }

  public render = (): JSX.Element => {
    return (
      <div 
        className={classNames('age_indicator', this.props.className)} 
        style={{width: `${this.props.factor * 100}%`, ...this.props.style}} 
      />
    );
  };
}