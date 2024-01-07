import Link from "next/link";

export default async function Home() {

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ようこそ
          </h2>
          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            ここは、私のポートフォリオサイトです。
            ブログは
            <Link className="text-blue-700" href="/blog">
              こちら
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
