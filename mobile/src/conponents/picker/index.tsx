import React, { ReactNode } from 'react';
import { View,Picker,Text } from 'react-native';
import styles from './styles';
export interface PickerProps extends Picker {
    label:string;
}
export default class PickerDefault extends React.Component<PickerProps,{}> {
    constructor(props: any) {
      super(props);
    }
  
    render() {
      return (
        <View style={styles.container}>
            <Text style={styles.label}>{this.props.label}</Text>
            <View style={styles.pickerPanel}>
                <Picker style={styles.picker} {...this.props}>
                        {this.props.children}
                </Picker>
            </View>
        </View>
      );
    }
  }