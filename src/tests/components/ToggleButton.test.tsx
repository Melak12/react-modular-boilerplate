import {render, screen, fireEvent} from "@testing-library/react";
import ToggleButton from "@app/components/buttons/ToggleButton";

describe("<ToggleButton />", () => {
    it("should render OFF by default", () => {
        render(<ToggleButton/>);

        expect(screen.getByText(/OFF/)).toBeInTheDocument();
    });

    it("should render ON when clicked", () => {
        render(<ToggleButton/>);
        expect(screen.getByText(/OFF/)).toBeInTheDocument();

        fireEvent.click(screen.getByText(/OFF/));

        expect(screen.getByText(/ON/)).toBeInTheDocument();
    });

   
});