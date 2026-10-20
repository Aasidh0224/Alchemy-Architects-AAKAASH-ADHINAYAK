import { useEffect, useState } from 'react';
import { Download, ExternalLink, Smartphone, X } from 'lucide-react';

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
};

export default function InstallAppButton() {
  const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null);
  const [showHelp, setShowHelp] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    setInstalled(window.matchMedia('(display-mode: standalone)').matches
      || Boolean((navigator as Navigator & { standalone?: boolean }).standalone));
    const beforeInstall = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as InstallPromptEvent);
    };
    const appInstalled = () => {
      setInstalled(true);
      setInstallPrompt(null);
      setShowHelp(false);
    };
    window.addEventListener('beforeinstallprompt', beforeInstall);
    window.addEventListener('appinstalled', appInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', beforeInstall);
      window.removeEventListener('appinstalled', appInstalled);
    };
  }, []);

  const install = async () => {
    if (!installPrompt) {
      setShowHelp(true);
      return;
    }
    await installPrompt.prompt();
    if ((await installPrompt.userChoice).outcome === 'accepted') setInstalled(true);
    setInstallPrompt(null);
  };

  return <>
    <button type="button" className="install-app-button" onClick={install} aria-label={installed ? 'App installed' : 'Install AAKAASH ADHINAYAK'}>
      {installed ? <Smartphone size={15} /> : <Download size={15} />}
      <span>{installed ? 'App installed' : 'Install app'}</span>
    </button>
    {showHelp && <div className="install-overlay" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setShowHelp(false); }}>
      <section className="install-dialog" role="dialog" aria-modal="true" aria-labelledby="install-title">
        <button className="install-close" onClick={() => setShowHelp(false)} aria-label="Close install instructions"><X size={18} /></button>
        <div className="install-mark"><Smartphone size={25} /></div>
        <h2 id="install-title">Install AAKAASH ADHINAYAK</h2>
        <p className="install-intro">Add the app to your home screen for an app-like, full-screen experience.</p>
        <div className="install-steps">
          <strong>Android · Chrome</strong><p>Open the browser menu ⋮ and choose <b>Install app</b> or <b>Add to Home screen</b>.</p>
          <strong>iPhone · Safari</strong><p>Tap <b>Share</b>, then choose <b>Add to Home Screen</b>.</p>
          <strong>Computer · Chrome or Edge</strong><p>Use the install icon in the address bar, if shown, or choose <b>Install page as app</b> in the browser menu.</p>
        </div>
        <p className="install-footnote"><ExternalLink size={13} /> Installation requires HTTPS.</p>
        <button className="primary install-done" onClick={() => setShowHelp(false)}>Got it</button>
      </section>
    </div>}
  </>;
}
