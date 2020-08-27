import React, { ReactNode, Component } from 'react';
import { View,Image,Text, TextInput } from 'react-native';
import {ViewCondensed,TextInputDefault,Label,TextAreaDefault,
  TextInputCondensed,LabelCondensed} from './styles';

export interface InputProps extends TextInput {
    label:string;
}
 const InputDefault:React.FC<InputProps> = ({label,...rest}) => {
    return (
      <View>
          <Label>{label}</Label>
          <TextInputDefault 
          selectionColor={'#8257e5'}
          placeholderTextColor="#c1bccc"
          {...rest}/>
      </View>
    );
  }
  export default InputDefault;
  export const TextArea:React.FC<InputProps> = ({label,...rest}) => {
    return (
      <View>
          <Label>{label}</Label>
          <TextAreaDefault 
            selectionColor={'#8257e5'}
            placeholderTextColor="#c1bccc"
            multiline={true}
            numberOfLines={10}
            {...rest}/>
      </View>
    );
  }

  export const InputCondensed:React.FC<InputProps> = ({label,...rest}) =>{
    return (
      <ViewCondensed>
        <LabelCondensed>{label}</LabelCondensed>
        <TextInputCondensed 
          selectionColor={'#8257e5'}
          placeholderTextColor="#c1bccc"
          {...rest}/>
      </ViewCondensed>
    );
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