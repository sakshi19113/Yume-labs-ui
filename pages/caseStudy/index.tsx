import YumeLabsMainHeading from "@components/CaseStudyHeading";
import ProblemStatementSection from "@components/CaseStudyProblemStatement";
import Branding from "@components/CaseStyudyBranding";
import LoginPage from "@components/CaseStudyLogin";
import ProductDesign from "@components/CaseStudyProductDesign";

const index = () => {
  return (
    <div>
        <YumeLabsMainHeading/>
        <ProblemStatementSection/>
        <Branding/>
        <LoginPage/>
        <ProductDesign />
    </div>
  )
}

export default index
