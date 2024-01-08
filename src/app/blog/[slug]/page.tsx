import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import "./contents.css";

type Props = {
  slug: string;
};

export default async function BlogPost({ params }: { params: Props }) {
  // URLのパラメータから該当するファイル名を取得 (今回は hello-world)
  const { slug } = params;
  const filePath = path.join(
    process.cwd(),
    "src/app/blog/_contents",
    `${slug}.md`
  );

  // ファイルの中身を取得
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const title = data.title; // 記事のタイトル
  const date = data.date; // 記事の日付

  return (
    <div className="px-6 py-0 lg:px-8 bg-blue-50">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700 pb-4">
        <div className="px-6 py-6">
          <h1 className="mt-0 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h1>
          <div className="mt-3 text-sm text-gray-500">
            <time dateTime={date}>{date}</time>
          </div>
        </div>
        <div className="article bg-white px-4 py-6 rounded-lg sm:py-8 sm:px-10">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
