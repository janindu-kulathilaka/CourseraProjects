import { useState } from "react";

function Feedback() {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Number(score) <= 5 && comment <= 10) {
      alert("Please provide a comment explaining why the experience was poor.");
      return;
    }

    console.log("Feedback submitted");
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2>Feedback Form</h2>
        <div className="Field">
          <label>Score: {score} </label>
          <input
            type="range"
            min="0"
            max="10"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>
        <div className="Field">
          <label>Comment:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
}

export default Feedback;