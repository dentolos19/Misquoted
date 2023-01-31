import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getQuote } from "@/lib/api";
import type { Quote } from "@/lib/api";

export default function Page() {
  const router = useRouter();
  const { id } = router.query as { id: string };

  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    async function doStuff() {
      const quote = await getQuote(id);
      setQuote(quote);
    }
    doStuff();
  }, [id]);

  if (quote === undefined) {
    return (
      <main
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>404</h1>
      </main>
    );
  }

  return (
    <main
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>{quote?.content}</h1>
        <p>
          <Link href={"/author/" + quote?.authorSlug}>{quote?.author}</Link>
        </p>
      </div>
    </main>
  );
}