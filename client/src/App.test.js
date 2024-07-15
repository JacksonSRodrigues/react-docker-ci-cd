import { render, screen } from '@testing-library/react';
import App from './App';
import mockAxios from "jest-mock-axios";

jest.mock("react-router-dom", () => {
  // Require the original module to not be mocked...
  const originalModule = jest.requireActual("react-router-dom");

  return {
    __esModule: true,
    ...originalModule,
    // add your noops here
    useParams: jest.fn(),
    useHistory: jest.fn(),
  };
});

afterEach(() => {
  // cleaning up the mess left behind the previous test
  mockAxios.reset();
});

test("renders learn react link", () => {
  mockAxios.get.mockResolvedValue({ data: "test response" });
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
