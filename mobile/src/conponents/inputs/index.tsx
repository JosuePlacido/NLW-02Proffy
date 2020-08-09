import React, { ReactNode, Component } from 'react';
import { View,Image,Text, TextInput } from 'react-native';
import styles from './styles';
import stylesTextArea from './stylesTextArea';

export interface InputProps extends TextInput {
    label:string;
}
export default class InputDefault extends React.Component<InputProps,{}> {
    constructor(props: any) {
      super(props);
    }
  
    render() {
      return (
        <View style={styles.container}>
            <Text style={styles.label}>{this.props.label}</Text>
            <TextInput style={styles.input} 
            placeholderTextColor="#c1bccc"
            {...this.props}/>
        </View>
      );
    }
  }
  export class TextArea extends React.Component<InputProps,{}> {
    constructor(props: any) {
      super(props);
    }
  
    render() {
      return (
        <View style={styles.container}>
            <Text style={styles.label}>{this.props.label}</Text>
            <TextInput style={stylesTextArea.input} 
            placeholderTextColor="#c1bccc"
            multiline={true}
            numberOfLines={10}
            {...this.props}/>
        </View>
      );
    }
  }
/*interface InputProps extends TextInput {
    label:string;
    placeholder?:string;
    value?:string;
    keyboardType?:string;
    changeText?:(t:string)=>void;
}*//*
const InputDefault:React.FC<InputProps> = ({label,...rest}) => {
    return (        
        <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.input} 
        placeholderTextColor="#c1bccc"
        {...rest}/>
    </View>
    );
}*/
//export default InputDefault;