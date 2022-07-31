import MediaCard from "./components/card";
// import SwipeableTemporaryDrawer from "./components/drawer";
import SignUp from "./components/form";
// import Form from "./components/form";

function App() {
  return (
    <div>
      {/* <SwipeableTemporaryDrawer></SwipeableTemporaryDrawer>       */}
      <SignUp buttonText="SIGN UP"></SignUp>
      <MediaCard></MediaCard>
    </div>
  );
}

export default App;
