import React from 'react';
import { View } from 'react-native';
import styles from './styles'
import PageHeader from '../../conponents/page-header';
export default function Favorites(){
    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys favoritos"/>
        </View>
    );
}