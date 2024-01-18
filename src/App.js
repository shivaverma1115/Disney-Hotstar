import { Box } from "@chakra-ui/react";
import Navbar from "./Pages/Navbar";
import ItemPreview from "./Pages/ItemPreview";
import CarouselItems from "./Pages/CarouselItems";
import ReactSlick from "./Pages/ReactSlick";


function App() {
  return (
    <Box >
      <Navbar />
      <ItemPreview />
      <ReactSlick/>
    </Box>
  );
}

export default App;
