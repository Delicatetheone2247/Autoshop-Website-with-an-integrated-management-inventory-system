import { isCompositeComponent } from "react-dom/test-utils";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import UnderHeader from "./UnderHeader";


export default function Home() {
  return (
  <div>
    <Login />
    <Header />
    <UnderHeader/>
    <Footer/>
  </div>)
}