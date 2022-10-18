import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import useHttp from "../hooks/useHttp";
import { getAllQuotes } from "../lib/api";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

// const DUMMY_QUOTES = [
//   { id: "q1", author: "Lee", text: "어렵지만 재밌는 리액트!" },
//   { id: "q2", author: "Kim", text: "어렵지만 재밌는 자바스크립트!" },
//   { id: "q3", author: "Park", text: "어렵지만 재밌는 리액트네이티브!" },
// ];

const AllQuotes = () => {
  // 인수는 우리가 로딩 상태에서 시작하여 바로 상태가 보류중이라는 것을 컨트롤 함.
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }
  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
