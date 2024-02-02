const React = require("react");
const gatsby = jest.requireActual("gatsby");

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // eslint-disable-next-line react/display-name
    ({ children, ...props }) =>
      React.createElement("a", props, children)
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
};
