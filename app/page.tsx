export default async function Home() {
  const res = await fetch("http://worldtimeapi.org/api/timezone/Europe/Amsterdam", {
    next: {
      tags: ['my-cachetag'],
      revalidate: 10
    }
  });

  const data = await res.json();

  return <span>{data.unixtime.toString()}</span>
}
