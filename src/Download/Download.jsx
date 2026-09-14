import DownloadHero from "./DownloadHero";
import DownloadContent from "./DownloadContent";
import DownloadSteps from "./DownloadSteps";

function Download() {
  return (
    <main className="bg-slate-950">
      <DownloadHero />
      <DownloadContent />
      <DownloadSteps />
    </main>
  );
}

export default Download;