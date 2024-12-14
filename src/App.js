import Portfolio from './components/Portfolio';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <SpeedInsights />
      <Portfolio />
      <Analytics />
    </>
  );
}

export default App;
