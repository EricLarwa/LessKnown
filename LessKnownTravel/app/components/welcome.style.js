import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    userName: {
        fontFamily: "Poppins-Medium",
        fontWeight: 50,
        fontSize: 26,
        color: "#312649"
    },
    welcomeMessage: {
        fontFamily: "Poppins-Medium",
        fontSize: 28,
        color: "#312651",
        marginTop: 2,
    },
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
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
        fontFamily: "Poppins-Medium",
        width: "100%",
        height: "100%",
        paddingHorizontal: 16,
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
        fontFamily: "Poppins-Medium",
        color: activeLocationType === item ? "#444262" : "#C1C0C8",
      }),
});
    
export default styles;