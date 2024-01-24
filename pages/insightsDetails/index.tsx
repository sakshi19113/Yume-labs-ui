import ArticleSection from "@components/ArticleSection/article";
import ArticleContainer from "@components/DetailsHero";
import AuthorDetail from "@components/AuthorDetail";
import Pagination from "@components/Pagination";

const InsightsDetails = () => {
  return (
    <div>
      <ArticleContainer />
      <ArticleSection />
      <AuthorDetail />
      <Pagination />
    </div>
  );
};

export default InsightsDetails;
