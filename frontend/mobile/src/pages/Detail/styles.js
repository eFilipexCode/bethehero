import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    incident: {
        padding: 24,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 16,
        marginTop: 48
    },
    incidentPropery: {
        marginTop: 24, 
        fontSize: 14,
        color: "#41414d",
        fontWeight: 'bold',
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380'
    },
    contactBox: {
      padding: 24,
      borderRadius: 8,
      backgroundColor: '#fff',
      marginBottom: 16,
    },
    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },
    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },
    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    action: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default styles;