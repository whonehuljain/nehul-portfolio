import Portfolio from './components/Portfolio';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <SpeedInsights />
      <Analytics />
      <Portfolio />
    </>
  );
}

export default App;
