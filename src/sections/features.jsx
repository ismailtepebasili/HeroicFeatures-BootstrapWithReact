import Card from "../components/Card";
import {
  BsCollection,
  BsCloudDownload,
  BsCardHeading,
  BsBootstrap,
  BsCode,
  BsPatchCheck,
} from "react-icons/bs";
const Features = () => {
  return (
    <div>
      <section className="pt-4">
        <div className="container px-lg-5">
          <div className="row gx-lg-5">
            <Card
              title={"Fresh new layout"}
              description={
                "With Bootstrap 5, we've created a fresh new layout for this template!"
              }
              icon={<BsCollection />}
            />
            <Card
              title={"Free to download"}
              description={
                "As always, Start Bootstrap has a powerful collectin of free templates."
              }
              icon={<BsCloudDownload />}
            />
            <Card
              title={"Jumbotron hero header"}
              description={
                "The heroic part of this template is the jumbotron hero header!"
              }
              icon={<BsCardHeading />}
            />
            <Card
              title={"Feature boxes"}
              description={
                "We've created some custom feature boxes using Bootstrap icons!"
              }
              icon={<BsBootstrap />}
            />
            <Card
              title={"Simple clean code"}
              description={
                "We keep our dependencies up to date and squash bugs as they come!"
              }
              icon={<BsCode />}
            />
            <Card
              title={"A name you trust"}
              description={
                "Start Bootstrap has been the leader in free Bootstrap templates since 2013!"
              }
              icon={<BsPatchCheck />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
