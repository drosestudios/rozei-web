import { redirect } from "next/navigation";
import { articles } from "./articles";

export default function BlogIndex() {
  redirect(`/articles/${articles[0].slug}`);
}
