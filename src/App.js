import { Box } from "@chakra-ui/react";
import Navbar from "./Pages/Navbar";
import ItemPreview from "./Pages/ItemPreview";
import ReactSlick from "./Pages/ReactSlick";
import { useSelector } from "react-redux";


function App() {
  const mode = useSelector(store => store.mode);
  return (
    <Box bg={mode?'black':'white'} >
      <Navbar />
      <ItemPreview mode={mode} />
      <ReactSlick mode={mode} />
    </Box>
  );
}

export default App;
