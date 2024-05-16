import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Title({ text }) {
  return (
    text && (
      <HelmetProvider>
        <Helmet>
          <title>{text} - CariMHS</title>
        </Helmet>
      </HelmetProvider>
    )
  );
}
