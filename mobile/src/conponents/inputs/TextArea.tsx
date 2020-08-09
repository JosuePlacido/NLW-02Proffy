import React, { ReactNode } from 'react';
import { View,Image,Text, TextInput } from 'react-native';
import styles from './stylesTextArea';
interface InputProps {
    label:string;
    placeholder?:string;
    value?:string;
    changeText?:(t:string)=>void;
}
const InputDefault:React.FC<InputProps> = (props) => {
    return (        
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput            
                multiline={true}
                numberOfLines={10}
                style={styles.input} placeholder={props.placeholder} placeholderTextColor="#c1bccc"
                value={props.value}
                onChangeText={props.changeText}/>
        </View>
    );
}
export default InputDefault;