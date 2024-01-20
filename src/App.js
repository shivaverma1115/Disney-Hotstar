import { Box } from "@chakra-ui/react";
import Navbar from "./Pages/Navbar";
import ItemPreview from "./Pages/ItemPreview";
import ReactSlick from "./Pages/ReactSlick";
import { useSelector } from "react-redux";
import { useEffect } from "react";


function App() {
  const mode = useSelector(store => store.mode) ;
  return (
    <Box bg={mode ? 'black' : 'white'} >
      <ItemPreview mode={mode} />
      <ReactSlick mode={mode} initSlide={0} />
      <Navbar />
    </Box>
  );
}

export default App;
