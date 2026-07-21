import { loadQuery } from "../load-query";

export type FaqItem = {
	_key: string;
	question: string;
	answer: string;
};

export type FaqDetails = {
	_id: string;
	title: string;
	items: FaqItem[];
};

export async function getFaqDetails(): Promise<FaqDetails> {
	const FAQ_QUERY = `
*[
  _type == "faq" &&
  !(_id in path("drafts.**"))
][0]{
  _id,
  title,
  items[] {
    _key,
    question,
    answer
  }
}
`;

	const { data } = await loadQuery<FaqDetails>({
		query: FAQ_QUERY,
	});

	return data;
}
