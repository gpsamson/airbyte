import { fireEvent, render, waitFor } from "@testing-library/react";
import { Formik } from "formik";
import { IntlProvider } from "react-intl";

import { ReleaseStage } from "core/request/AirbyteClient";
import en from "locales/en.json";

import { FrequentlyUsedDestinations, FrequentlyUsedDestinationsProps } from "./FrequentlyUsedDestinations";

const mockData = [
  {
    destinationDefinitionId: "1",
    name: "Google Sheets",
    icon: '<?xml version="1.0" encoding="utf-8"?>\n<!-- Generator: Adobe Illustrator 25.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 363.6 500" enable-background="new 0 0 363.6 500" xml:space="preserve">\n<g>\n\t<path fill="#00832D" d="M238.6,0l125,125l-62.5,11.4L238.6,125l-11.4-62.5L238.6,0z"/>\n\t<path fill="#00AC47" d="M238.6,125V0H34.1C15.3,0,0,15.3,0,34.1v431.8C0,484.7,15.3,500,34.1,500h295.5c18.8,0,34.1-15.3,34.1-34.1\n\t\tV125H238.6z"/>\n\t<path fill="#FFFFFF" d="M68.2,193.2V358h227.3V193.2H68.2z M167.6,329.5h-71v-39.8h71V329.5z M167.6,261.4h-71v-39.8h71V261.4z\n\t\t M267,329.5h-71v-39.8h71V329.5z M267,261.4h-71v-39.8h71V261.4z"/>\n</g>\n</svg>\n',
    releaseStage: ReleaseStage.alpha,
  },
  {
    destinationDefinitionId: "2",
    name: "BigQuery",
    icon: '<svg height="2500" width="2500" xmlns="http://www.w3.org/2000/svg" viewBox="-1.633235433328256 7.0326093303156565 131.26574682416876 114.63439066968435"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="64" x2="64" y1="7.034" y2="120.789"><stop offset="0" stop-color="#4387fd"/><stop offset="1" stop-color="#4683ea"/></linearGradient><path d="M27.79 115.217L1.54 69.749a11.499 11.499 0 0 1 0-11.499l26.25-45.467a11.5 11.5 0 0 1 9.96-5.75h52.5a11.5 11.5 0 0 1 9.959 5.75l26.25 45.467a11.499 11.499 0 0 1 0 11.5l-26.25 45.467a11.5 11.5 0 0 1-9.959 5.749h-52.5a11.499 11.499 0 0 1-9.96-5.75z" fill="url(#a)"/><path clip-path="url(#b)" d="M119.229 86.48L80.625 47.874 64 43.425l-14.933 5.55L43.3 64l4.637 16.729 40.938 40.938 8.687-.386z" opacity=".07"/><g fill="#fff"><path d="M64 40.804c-12.81 0-23.195 10.385-23.195 23.196 0 12.81 10.385 23.195 23.195 23.195S87.194 76.81 87.194 64c0-12.811-10.385-23.196-23.194-23.196m0 40.795c-9.72 0-17.6-7.88-17.6-17.6S54.28 46.4 64 46.4 81.6 54.28 81.6 64 73.72 81.6 64 81.6"/><path d="M52.99 63.104v7.21a12.794 12.794 0 0 0 4.38 4.475V63.104zM61.675 57.026v19.411c.745.137 1.507.22 2.29.22.714 0 1.41-.075 2.093-.189V57.026zM70.766 66.1v8.562a12.786 12.786 0 0 0 4.382-4.7v-3.861zM80.691 78.287l-2.403 2.405a1.088 1.088 0 0 0 0 1.537l9.115 9.112a1.088 1.088 0 0 0 1.537 0l2.403-2.402a1.092 1.092 0 0 0 0-1.536l-9.116-9.116a1.09 1.09 0 0 0-1.536 0"/></g></svg>',
    releaseStage: ReleaseStage.generally_available,
  },
  {
    destinationDefinitionId: "3",
    name: "DynamoDB",
    icon: '<svg width="2215" height="2500" viewBox="0 0 256 289" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M165.258 288.501h3.508l57.261-28.634.953-1.347V29.964l-.953-1.354L168.766 0h-3.551l.043 288.501" fill="#5294CF"/><path d="M90.741 288.501h-3.557l-57.212-28.634-1.161-1.997-.589-226.742 1.75-2.518L87.184 0h3.601l-.044 288.501" fill="#1F5B98"/><path d="M87.285 0h81.426v288.501H87.285V0z" fill="#2D72B8"/><path d="M256 137.769l-1.935-.429-27.628-2.576-.41.204-57.312-2.292h-81.43l-57.313 2.292V91.264l-.06.032.06-.128 57.313-13.28h81.43l57.312 13.28 21.069 11.199v-7.2l8.904-.974-.922-1.798-28.192-20.159-.859.279-57.312-17.759h-81.43L29.972 72.515V28.61L0 63.723v30.666l.232-.168 8.672.946v7.348L0 107.28v30.513l.232-.024 8.672.128v12.807l-7.482.112L0 150.68v30.525l8.904 4.788v7.433l-8.531.942-.373-.28v30.661l29.972 35.118v-43.901l57.313 17.759h81.43l57.481-17.811.764.335 27.821-19.862 1.219-1.979-8.904-.982v-7.284l-1.167-.466-19.043 10.265-.69 1.44-57.481 13.203v.016h-81.43v-.016l-57.313-13.259v-43.864l57.313 2.284v.056h81.43l57.312-2.34 1.305.6 26.779-2.306 1.889-.923-8.904-.128v-12.807l8.904-.128" fill="#1A476F"/><path d="M226.027 215.966v43.901L256 224.749v-30.461l-29.8 21.626-.173.052M226.027 197.421l.173-.04 29.8-16.028v-30.649l-29.973 2.757v43.96M226.2 91.208l-.173-.04v43.8L256 137.769v-30.634l-29.8-15.927M226.2 72.687L256 94.193V63.731L226.027 28.61v43.905l.173.06v.112" fill="#2D72B8"/></svg>',
  },
  {
    destinationDefinitionId: "4",
    name: "MongoDB",
    icon: '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640" width="640" height="640"><defs><path d="M454.48 258.27C421.69 113.73 344.25 66.21 335.9 48.07C328.85 36.65 322.83 24.62 317.93 12.13C317.72 11.55 317.48 10.98 317.21 10.43C317.65 22.19 312.69 33.5 303.74 41.15C284.96 55.79 188.75 136.46 180.85 300.76C173.57 453.48 291.52 545.1 307.51 556.78C307.69 556.91 309.13 557.91 309.31 558.04C313.89 547.62 318.29 517.71 321.7 476.65C322.42 509.71 327.18 545.19 343.62 552.65C343.71 552.59 344.43 552.08 344.52 552.02C351.58 547.01 358.3 541.55 364.64 535.67C404.62 498.84 480.08 407.66 454.48 258.27" id="b3m9u0RT9j"></path><path d="M321.43 477.01C318.2 517.98 313.53 547.8 309.04 557.86C309.04 557.86 314.07 593.79 318.02 632.24C319.27 632.24 329.26 632.24 330.51 632.24C333.44 605.49 337.82 578.92 343.62 552.65C327.36 545.1 322.6 509.71 321.88 476.65" id="aevBvhJN5"></path><path d="M454.48 258.27C421.69 113.73 344.25 66.21 335.9 48.07C328.81 36.67 322.79 24.64 317.93 12.13C325.66 42.41 324.4 284.14 325.21 313.07C326.92 367.62 325.75 422.22 321.7 476.65C322.42 509.71 327.18 545.19 343.53 552.74C343.63 552.67 344.42 552.09 344.52 552.02C351.58 547.06 358.31 541.62 364.64 535.76C364.72 535.7 365.29 535.2 365.36 535.13C404.53 499.2 480.08 407.66 454.48 258.27" id="akHagKvoh"></path></defs><g><g><g><use xlink:href="#b3m9u0RT9j" opacity="1" fill="#12a950" fill-opacity="1"></use><g><use xlink:href="#b3m9u0RT9j" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#aevBvhJN5" opacity="1" fill="#b8c5c2" fill-opacity="1"></use><g><use xlink:href="#aevBvhJN5" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#akHagKvoh" opacity="1" fill="#13994f" fill-opacity="1"></use><g><use xlink:href="#akHagKvoh" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g></g></g></svg>',
    releaseStage: ReleaseStage.custom,
  },
  {
    destinationDefinitionId: "5",
    name: "Postgres",
    icon: '<?xml version="1.0"?>\r\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"\r\n  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\r\n\r\n<svg width="432.071pt" height="445.383pt" viewBox="0 0 432.071 445.383" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">\r\n<g id="orginal" style="fill-rule:nonzero;clip-rule:nonzero;stroke:#000000;stroke-miterlimit:4;">\r\n\t</g>\r\n<g id="Layer_x0020_3" style="fill-rule:nonzero;clip-rule:nonzero;fill:none;stroke:#FFFFFF;stroke-width:12.4651;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;">\r\n<path style="fill:#000000;stroke:#000000;stroke-width:37.3953;stroke-linecap:butt;stroke-linejoin:miter;" d="M323.205,324.227c2.833-23.601,1.984-27.062,19.563-23.239l4.463,0.392c13.517,0.615,31.199-2.174,41.587-7c22.362-10.376,35.622-27.7,13.572-23.148c-50.297,10.376-53.755-6.655-53.755-6.655c53.111-78.803,75.313-178.836,56.149-203.322    C352.514-5.534,262.036,26.049,260.522,26.869l-0.482,0.089c-9.938-2.062-21.06-3.294-33.554-3.496c-22.761-0.374-40.032,5.967-53.133,15.904c0,0-161.408-66.498-153.899,83.628c1.597,31.936,45.777,241.655,98.47,178.31    c19.259-23.163,37.871-42.748,37.871-42.748c9.242,6.14,20.307,9.272,31.912,8.147l0.897-0.765c-0.281,2.876-0.157,5.689,0.359,9.019c-13.572,15.167-9.584,17.83-36.723,23.416c-27.457,5.659-11.326,15.734-0.797,18.367c12.768,3.193,42.305,7.716,62.268-20.224    l-0.795,3.188c5.325,4.26,4.965,30.619,5.72,49.452c0.756,18.834,2.017,36.409,5.856,46.771c3.839,10.36,8.369,37.05,44.036,29.406c29.809-6.388,52.6-15.582,54.677-101.107"/>\r\n<path style="fill:#336791;stroke:none;" d="M402.395,271.23c-50.302,10.376-53.76-6.655-53.76-6.655c53.111-78.808,75.313-178.843,56.153-203.326c-52.27-66.785-142.752-35.2-144.262-34.38l-0.486,0.087c-9.938-2.063-21.06-3.292-33.56-3.496c-22.761-0.373-40.026,5.967-53.127,15.902    c0,0-161.411-66.495-153.904,83.63c1.597,31.938,45.776,241.657,98.471,178.312c19.26-23.163,37.869-42.748,37.869-42.748c9.243,6.14,20.308,9.272,31.908,8.147l0.901-0.765c-0.28,2.876-0.152,5.689,0.361,9.019c-13.575,15.167-9.586,17.83-36.723,23.416    c-27.459,5.659-11.328,15.734-0.796,18.367c12.768,3.193,42.307,7.716,62.266-20.224l-0.796,3.188c5.319,4.26,9.054,27.711,8.428,48.969c-0.626,21.259-1.044,35.854,3.147,47.254c4.191,11.4,8.368,37.05,44.042,29.406c29.809-6.388,45.256-22.942,47.405-50.555    c1.525-19.631,4.976-16.729,5.194-34.28l2.768-8.309c3.192-26.611,0.507-35.196,18.872-31.203l4.463,0.392c13.517,0.615,31.208-2.174,41.591-7c22.358-10.376,35.618-27.7,13.573-23.148z"/>\r\n<path d="M215.866,286.484c-1.385,49.516,0.348,99.377,5.193,111.495c4.848,12.118,15.223,35.688,50.9,28.045c29.806-6.39,40.651-18.756,45.357-46.051c3.466-20.082,10.148-75.854,11.005-87.281"/>\r\n<path d="M173.104,38.256c0,0-161.521-66.016-154.012,84.109c1.597,31.938,45.779,241.664,98.473,178.316c19.256-23.166,36.671-41.335,36.671-41.335"/>\r\n<path d="M260.349,26.207c-5.591,1.753,89.848-34.889,144.087,34.417c19.159,24.484-3.043,124.519-56.153,203.329"/>\r\n<path style="stroke-linejoin:bevel;" d="M348.282,263.953c0,0,3.461,17.036,53.764,6.653c22.04-4.552,8.776,12.774-13.577,23.155c-18.345,8.514-59.474,10.696-60.146-1.069c-1.729-30.355,21.647-21.133,19.96-28.739c-1.525-6.85-11.979-13.573-18.894-30.338    c-6.037-14.633-82.796-126.849,21.287-110.183c3.813-0.789-27.146-99.002-124.553-100.599c-97.385-1.597-94.19,119.762-94.19,119.762"/>\r\n<path d="M188.604,274.334c-13.577,15.166-9.584,17.829-36.723,23.417c-27.459,5.66-11.326,15.733-0.797,18.365c12.768,3.195,42.307,7.718,62.266-20.229c6.078-8.509-0.036-22.086-8.385-25.547c-4.034-1.671-9.428-3.765-16.361,3.994z"/>\r\n<path d="M187.715,274.069c-1.368-8.917,2.93-19.528,7.536-31.942c6.922-18.626,22.893-37.255,10.117-96.339c-9.523-44.029-73.396-9.163-73.436-3.193c-0.039,5.968,2.889,30.26-1.067,58.548c-5.162,36.913,23.488,68.132,56.479,64.938"/>\r\n<path style="fill:#FFFFFF;stroke-width:4.155;stroke-linecap:butt;stroke-linejoin:miter;" d="M172.517,141.7c-0.288,2.039,3.733,7.48,8.976,8.207c5.234,0.73,9.714-3.522,9.998-5.559c0.284-2.039-3.732-4.285-8.977-5.015c-5.237-0.731-9.719,0.333-9.996,2.367z"/>\r\n<path style="fill:#FFFFFF;stroke-width:2.0775;stroke-linecap:butt;stroke-linejoin:miter;" d="M331.941,137.543c0.284,2.039-3.732,7.48-8.976,8.207c-5.238,0.73-9.718-3.522-10.005-5.559c-0.277-2.039,3.74-4.285,8.979-5.015c5.239-0.73,9.718,0.333,10.002,2.368z"/>\r\n<path d="M350.676,123.432c0.863,15.994-3.445,26.888-3.988,43.914c-0.804,24.748,11.799,53.074-7.191,81.435"/>\r\n<path style="stroke-width:3;" d="M0,60.232"/>\r\n</g>\r\n</svg>',
    releaseStage: ReleaseStage.alpha,
  },
];

const renderFrequentlyUsedDestinationsComponent = (props: FrequentlyUsedDestinationsProps) =>
  render(
    <Formik initialValues={{}} onSubmit={() => {}}>
      <IntlProvider locale="en" messages={en}>
        <FrequentlyUsedDestinations {...props} />
      </IntlProvider>
    </Formik>
  );

describe("<FrequentlyUsedDestinations />", () => {
  test("should renders with mock data without crash", () => {
    const { getByText } = renderFrequentlyUsedDestinationsComponent({
      destinations: mockData,
      onDestinationSelect: () => {},
      propertyPath: "serviceType",
    });

    expect(getByText("Google Sheets")).toBeInTheDocument();
    expect(getByText("BigQuery")).toBeInTheDocument();
    expect(getByText("DynamoDB")).toBeInTheDocument();
    expect(getByText("MongoDB")).toBeInTheDocument();
    expect(getByText("Postgres")).toBeInTheDocument();
  });

  test("should call provided handler with right param", async () => {
    const handler = jest.fn();
    const { getByText } = renderFrequentlyUsedDestinationsComponent({
      destinations: mockData,
      onDestinationSelect: handler,
      propertyPath: "serviceType",
    });
    fireEvent.click(getByText("BigQuery"));

    await waitFor(() => {
      expect(handler).toHaveBeenCalledTimes(1);
      expect(handler).toHaveBeenCalledWith("2");
    });
  });
});
