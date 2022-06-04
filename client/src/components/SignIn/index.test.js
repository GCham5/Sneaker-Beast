import SignIn from ".";
import { BrowserRouter } from "react-router-dom";
import { shallow } from "enzyme";

it("renders signin without crashing", () => {
  shallow(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  );
});