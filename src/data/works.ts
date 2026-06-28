import type { ImageMetadata } from "astro";

import sampleA from "../assets/images/works/sampleA.jpg";
import sampleB from "../assets/images/works/sampleB.jpg";
import sampleC from "../assets/images/works/sampleC.jpg";

export type Work = {
  category: string;
  title: string;
  description: string;
  role: string;
  period: string;
  tags: string[];
  image: ImageMetadata;
  imageAlt: string;
  url: string;
};

export const works = [
  {
    category: "Website",
    title: "Corporate Website",
    description:
      "企業サイトの構成設計、HTML/CSSコーディング、WordPress実装を担当。",
    role: "Frontend / WordPress",
    period: "2026",
    tags: ["HTML", "CSS", "JavaScript", "WordPress"],
    image: sampleA,
    imageAlt: "Corporate Websiteのサムネイル",
    url: "",
  },
  {
    category: "Landing Page",
    title: "Campaign Landing Page",
    description:
      "キャンペーン向けLPのデザイン再現、レスポンシブ対応、フォーム周辺の調整を担当。",
    role: "Frontend",
    period: "2026",
    tags: ["HTML", "SCSS", "JavaScript"],
    image: sampleB,
    imageAlt: "Campaign Landing Pageのサムネイル",
    url: "",
  },
  {
    category: "Email",
    title: "HTML Email Template",
    description:
      "MAツールで使用するHTMLメールテンプレートの実装・調整を担当。",
    role: "Email Coding",
    period: "2026",
    tags: ["HTML Email", "Marketo", "MCA"],
    image: sampleC,
    imageAlt: "HTML Email Templateのサムネイル",
    url: "",
  },
];