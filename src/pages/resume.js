import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '@/Components/Layout';
import Transitions from '@/Components/Transitions';
import Link from 'next/link';
import { LinkArrow } from '@/Components/Icons';
import { FiDownload, FiExternalLink, FiPrinter, FiShare2 } from 'react-icons/fi';

// Server-side: if it's a mobile device, redirect to the raw PDF so the browser's default viewer is used
export async function getServerSideProps({ req }) {
  const ua = req?.headers?.['user-agent'] || '';
  const isMobile = /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(ua);
  if (isMobile) {
    return {
      redirect: {
        destination: '/HarikrishnanGopal_ML_Resume.pdf',
        permanent: false,
      },
    };
  }
  return { props: {} };
}

export default function Resume() {
  const [pdfUrl, setPdfUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  // Client-side fallback: if small viewport, use default browser viewer
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isSmall = window.matchMedia('(max-width: 767px)').matches;
      if (isSmall) {
        window.location.replace('/HarikrishnanGopal_ML_Resume.pdf');
      }
    }
  }, []);

  useEffect(() => {
    // Embed with minimal chrome where supported
    setPdfUrl('/HarikrishnanGopal_ML_Resume.pdf#toolbar=0&navpanes=0');

    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const openInNewTab = () => {
    window.open('/HarikrishnanGopal_ML_Resume.pdf', '_blank', 'noopener');
  };

  const printPdf = () => {
    // Easiest reliable cross-browser: open in new tab for print
    const w = window.open('/HarikrishnanGopal_ML_Resume.pdf', '_blank', 'noopener');
    if (w) {
      // Best-effort: try to trigger print after load
      const onLoad = () => {
        try { w.focus(); w.print(); } catch {}
      };
      w.addEventListener && w.addEventListener('load', onLoad, { once: true });
    }
  };

  const sharePage = async () => {
    const shareData = {
      title: "Harikrishnan's Resume",
      text: 'Resume - Data Science Engineer & Machine Learning',
      url: typeof window !== 'undefined' ? window.location.href : '/resume',
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }
    } catch {}
  };

  return (
    <>
      <Head>
        <title>Resume - Harikrishnan</title>
        <meta name="description" content="Harikrishnan's Resume - Data Science Engineer & Machine Learning Expert" />
      </Head>
      <Transitions />

      <main className="w-full min-h-screen bg-light dark:bg-dark text-dark dark:text-light">
        <Layout className="py-6 md:py-8">
          {/* Grid: preview only (kept simple for UX); container centered */}
          <div className="mx-auto w-full max-w-6xl grid grid-cols-12 gap-6 lg:gap-8 px-2 sm:px-0">
            {/* Preview section */}
            <section className="col-span-12 lg:col-span-8">
              {/* Toolbar */}
              <div className="relative mb-4 py-2">
                <h2 className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-3xl md:text-4xl font-extrabold text-center">Resume Preview</h2>
                <div className="flex items-center justify-end gap-2">
                  <button
                    onClick={() => (window.location.href = '/HarikrishnanGopal_ML_Resume.pdf')}
                    className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold bg-dark text-light dark:bg-light dark:text-dark hover:opacity-90"
                    title="Download"
                  >
                    <FiDownload className="h-4 w-4" />
                    <span className="hidden sm:inline">Download</span>
                  </button>
                  <button
                    onClick={openInNewTab}
                    className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold border border-dark dark:border-light hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark"
                    title="Open in new tab"
                  >
                    <FiExternalLink className="h-4 w-4" />
                    <span className="hidden sm:inline">New tab</span>
                  </button>
                  <button
                    onClick={printPdf}
                    className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold border border-dark dark:border-light hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark"
                    title="Print"
                  >
                    <FiPrinter className="h-4 w-4" />
                    <span className="hidden sm:inline">Print</span>
                  </button>
                  <button
                    onClick={sharePage}
                    className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold border border-dark dark:border-light hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark relative"
                    title="Share"
                  >
                    <FiShare2 className="h-4 w-4" />
                    <span className="hidden sm:inline">Share</span>
                    {copied && (
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-green-600 dark:text-green-400">Copied!</span>
                    )}
                  </button>
                </div>
              </div>

        <div className="relative rounded-xl overflow-hidden shadow-xl ring-1 ring-gray-200 dark:ring-gray-700 bg-white">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/70 dark:bg-black/40 z-10">
                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
                      <div className="h-5 w-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                      <span>Loading resume…</span>
                    </div>
                  </div>
                )}

                <iframe
                  src={pdfUrl}
          className="w-full h-[84vh] md:h-[86vh] border-0"
                  title="Harikrishnan Resume"
                  onLoad={() => setIsLoading(false)}
                />
              </div>

              <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                Tip: Use your browser controls to zoom or print. If the preview doesn’t display,{' '}
                <button onClick={openInNewTab} className="underline hover:no-underline">open the PDF in a new tab</button>.
              </p>
            </section>
          </div>
        </Layout>
      </main>
    </>
  );
}
