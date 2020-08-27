import React from 'react';
import { Picker } from 'react-native';
import { Label } from '../inputs/styles';
import { PickerPanel,PickerStyled } from './styles';
export interface PickerProps extends Picker {
    label:string;
}
export default class PickerDefault extends React.Component<PickerProps,{}> {
    constructor(props: any) {
      super(props);
    }
  
    render() {
      return (
        <>
            <Label>{this.props.label}</Label>
            <PickerPanel>
                <PickerStyled {...this.props}>
                        {this.props.children}
                </PickerStyled>
            </PickerPanel>
        </>
      );
    }
  }