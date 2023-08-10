import { Router } from "react-router-dom";
import Cards from "./Cards";
import Carousel from '../Carousel/Carausel'
import Footer from "./Footer";
import Header from "./Header";


export default function Home(){
    return (
        <>    
        <Header></Header>
        <Carousel></Carousel>
       <Cards></Cards>
        <Footer />

        </>
  );
}
