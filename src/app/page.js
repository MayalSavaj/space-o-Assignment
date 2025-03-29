import Image from "next/image";
import Header from "../components/Header/Header"
import Calender from "../components/Calendar/Calendar";
export default function Home() {
  return (
    <div className="calendar-container">   
     <Header/>
     <Calender/>
   </div>
  );
}
