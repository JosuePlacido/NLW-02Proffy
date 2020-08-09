import React, { ReactNode } from 'react';
import { View,Image,Text } from 'react-native';
import styles from './styles';

interface SectionProps{
    title:string;
    right?:ReactNode;
}

const InputSection:React.FC<SectionProps> = ({title,right,children}) => {
    return (
        <View style={styles.container}>  
            <View style={styles.header}>
                <Text style={styles.title}>
                    {title}    
                </Text>
                {right}  
            </View>
            {children}
        </View>
    );
}
export default InputSection;