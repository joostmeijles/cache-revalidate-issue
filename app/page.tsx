/** Add your relevant code here for the issue to reproduce */
export async function generateMetadata() {
  console.log("Start fetch");
  const res = await fetch("http://worldtimeapi.org/api/timezone/Europe/Amsterdam", {
    next: {
      tags: ['my-cachetag']
    }
  });
  console.log("Fetch completed");

  const data = await res.json();

  return {
    title: data.unixtime.toString()
  }
}

export default async function Home() {
  return <span>TEST</span>
}
