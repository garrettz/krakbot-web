import Script from 'next/script';

export default function Background() {
  return (
    <>
      <Script src='/Visualization.js' strategy='afterInteractive' />
      <canvas id='c'></canvas>
    </>
  );
}
