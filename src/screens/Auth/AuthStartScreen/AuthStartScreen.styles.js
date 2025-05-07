import { StyleSheet } from 'react-native';

export const styles = new StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 20,
        margin: 20,
        marginTop: 0,
    },
    title: {
        color: "#fff",
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
    img: {
        width: "100%",
        height: 400,
        resizeMode: "contain",
        marginVertical: 20,
    },
    description: {
        color: "#fff",
        opacity: 0.6,
        textAlign: "center",
        marginBottom: 20,
    },
    btn: {
        color: "#0891b2",
        fontWeight: "600",
        fontSize: 22,
        textAlign: "center",
        marginTop: 30,
    },
    
});
