import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Lee", text: "어렵지만 재밌는 리액트!" },
  { id: "q2", author: "Kim", text: "어렵지만 재밌는 자바스크립트!" },
  { id: "q3", author: "Park", text: "어렵지만 재밌는 리액트네이티브!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
