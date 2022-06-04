import NavBar from ".";
import { BrowserRouter } from "react-router-dom";
import { shallow } from "enzyme";

it("renders navbar without crashing", () => {
  shallow(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
});