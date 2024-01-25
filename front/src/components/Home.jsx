import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";


export function Home () {
    return (
        <div className="container d-flex flex-column justify-content-between todo">
            <Header></Header>
            <div className="flex-grow-1">

                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
}
