import React from 'react';
import { StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        height:500,
        width: 300,
        backgroundColor: '#98D3FD',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    button: {
        alignItems: 'center',
        width: '40%',
        height: '8%',
        backgroundColor: '#3D91CC',
        borderRadius: 7,
        
    },
    input:{
        backgroundColor: '#C5E2FC',
        width: '80%',
        borderRadius: 7,
    },
    responses:{
        borderRadius: 8,
        height: '50%',
        width: 190,
        flexDirection: 'column',
        marginTop: 2,
        backgroundColor: '#C5E2FC',
    },
    campos:{
        marginTop:5,
        marginBottom: 5,
        marginLeft: 5,
        width: '100%'

    },
     title_button:{
         marginTop: 8,
         alignSelf: 'center',
     },
     campo:{
        fontSize: 14
     },
     response_titulo:{
        alignSelf: 'center',
        marginBottom: 8,
     }
    
})