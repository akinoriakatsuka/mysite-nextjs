import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import type { ClassAttributes, HTMLAttributes } from "react";
import type { ExtraProps } from "react-markdown";
import { tomorrowNightBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./contents.css";

type Props = {
  slug: string;
};

const Pre = ({
  children,
  ...props
}: ClassAttributes<HTMLPreElement> &
  HTMLAttributes<HTMLPreElement> &
  ExtraProps) => {
  if (!children || typeof children !== "object") {
    return <code {...props}>{children}</code>;
  }
  const childType = "type" in children ? children.type : "";
  if (childType !== "code") {
    return <code {...props}>{children}</code>;
  }

  const childProps = "props" in children ? children.props : {};
  const { className, children: code } = childProps;
  const classList = className ? className.split(":") : [];
  const language = classList[0]?.replace("language-", "");
  const fileName = classList[1];

  if (fileName !== undefined) {
    return (
      <div className="pt-6">
        <div>
          <span className="text-gray-100 text-sm bg-slate-600 p-1 pb-2 -mb-1 rounded-t-md">
            <code>{fileName}</code>
          </span>
        </div>
        <div className="relative pre-wrapper-has-filename">
          <SyntaxHighlighter language={language} style={tomorrowNightBlue}>
            {String(code).replace(/\n$/, "")}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <SyntaxHighlighter language={language} style={tomorrowNightBlue}>
          {String(code).replace(/\n$/, "")}
        </SyntaxHighlighter>
      </div>
    );
  }
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
    <div className="px-6 py-0 lg:px-8 bg-sky-50">
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
          <ReactMarkdown
            components={{
              pre: Pre,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
