import CardItem from "../CardItem";
import FlipMove from "react-flip-move";

function ResultsComponent({ results }) {
  return (
    <FlipMove className="px-6 my-10 sm:grid sm:grid-col-2 xl:grid-cols-3 2xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <CardItem key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}

export default ResultsComponent;
