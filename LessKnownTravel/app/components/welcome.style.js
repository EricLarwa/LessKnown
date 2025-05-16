import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    userName: {
        fontWeight: 300,
        fontSize: 26,
        color: "#312649"
    },
    welcomeMessage: {
        fontWeight: 500,
        fontSize: 28,
        color: "#312651",
        marginTop: 2,
    },
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#F3F4F8",
        borderRadius: 16,
        shadowColor: "#000",
        width: "100%",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        marginTop: 28,
        height: 50,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: "#F3F4F8",
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 16,
        height: "100%",
    },
    searchInput: {
        flex:1,
        fontSize: 16,
        color: "#333",
        width: "100%",
        height: "100%",
        paddingHorizontal: 16,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
    },
    searchBtn: {
        width: 50,
        height: "100%",
        backgroundColor: "#FF7754",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    searchBtnImage: {
        width: "50%",
        height: "50%",
        tintColor: "#F3F4F8",
    },
    tabsContainer: {
        width: "100%",
        marginTop: 16,
    },
    tab: (activeLocationType, item) => ({
        paddingVertical: 10 / 2,
        paddingHorizontal: 10,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: activeLocationType === item ? "#444262" : "#C1C0C8",
    }),
    tabText: (activeLocationType, item) => ({
        color: activeLocationType === item ? "#444262" : "#C1C0C8",
      }),
});
    
export default styles;