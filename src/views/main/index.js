import NavBar from "../../components/nabBar";

const Main = ({ children}) => {
    console.log("working  this")
    return(
        <>
        <NavBar />
        {children}
        </>
    )
}
export default Main;