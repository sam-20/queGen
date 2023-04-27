//https://github.com/craig1123/react-recipes/blob/master/docs/useSpeechSynthesis.md
import { useSpeechSynthesis } from "react-speech-kit";
import { BAQ, PQ, EI, EF, CC, SQLP } from "../Questions";
import { useState } from "react";
import LayoutCSS from "./layout.module.css";

function Layout() {
  const [queTyp, setQueTyp] = useState(null); //stores the question type the user selected from the dropdown list
  const [queTxt, setQueTxt] = useState(""); //stores the question text of the randomly generated question number
  const [ansTxt, setAnsTxt] = useState(""); //if a generated question has an answer attached to it, this variable stores the answer

  const [dispAnsBtn, setDispAnsBtn] = useState(null); //the view answer button is displayed or hidden based on if a generated question has an answer attached to it in the object array
  const [dispAnsTxt, setDispAnsTxt] = useState(false); //we should the answer only if the user clicks the View Answer button

  const { speak, voices } = useSpeechSynthesis();
  const [speechEnabled, setSpeechEnabled] = useState(); //stores the radio button value of speech enabled

  const [queNumGen, setQueNumGen] = useState(0); //the question number generated is stored in this variable

  //generate random question number from the given questions array
  function genRanQueNum(max) {
    let min = 0;
    let difference = max - min; // find diff
    let rand = Math.random(); // generate random number
    rand = Math.floor(rand * difference); // multiply with difference
    rand = rand + min; // add with min value
    return rand;
  }

  //array of the question types and their questions
  const Questions = [
    {
      title: "Business Analyst",
      content: BAQ,
    },
    {
      title: "Power Query",
      content: PQ,
    },
    {
      title: "Excel Interview Questions",
      content: EI,
    },
    {
      title: "Excel Formulas and Common Practices",
      content: EF,
    },
    {
      title: "Excel Choosing and Designing Charts",
      content: CC,
    },
    {
      title: "SQL Practice",
      content: SQLP,
    },
  ];

  //generate a question from the question type selected in the dropdown
  const generateQuestion = () => {
    if (queTyp === null || queTyp === "") {
      alert("Select Question Type");
      return;
    }

    //clear variables
    setQueTxt("");
    setAnsTxt("");
    setDispAnsBtn(false);
    setDispAnsTxt(false);

    //before we generate question we find index of that question type in the questions array
    var queTypIdx = Questions.findIndex((item) => item.title === queTyp);

    //if all questions of that type have been generated we prompt user
    if (Questions[queTypIdx].content.length === 0) {
      alert("No more questions");
      return;
    }

    //after knowing which question type we want to generate questions from, we calc the length of that questions array to generate a random number
    var _queNumGen = genRanQueNum(Questions[queTypIdx].content.length); //this new variable was created to be used as the original generated question number else the default of 0 in the state would be used when the user generates question for the first time. The state version of this variable was created to hold as the key property for the queTxt variable
    setQueNumGen(_queNumGen);

    //set the question of the generated question number
    setQueTxt(Questions[queTypIdx].content[_queNumGen].que);

    //set the answer of the generated question number
    setAnsTxt(Questions[queTypIdx].content[_queNumGen].ans);

    //if the question has an answer included we display the View Answer button
    if (Questions[queTypIdx].content[_queNumGen].ans != null) {
      setDispAnsBtn(true);
    }

    //if the enable speech option is on, we play the question
    if (speechEnabled) {
      speak({
        text: Questions[queTypIdx].content[_queNumGen].que,
        voice: voices[3],
      });
    }

    //finally remove that question from the questions array to avoid being asked again
    Questions[queTypIdx].content.splice(_queNumGen, 1);
  };

  //fetches the index of the selected question type from the dropdown
  const dropDownItemSelected = (e) => {
    setQueTyp(e.target.value); //store the selected dropdown question type
  };

  //update speech enabled radio button when selected
  const enableSpeech = (e) => {
    //convert the true/false value to boolean form
    var boolVal = e.target.value.toLowerCase() === "true";
    setSpeechEnabled(boolVal);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "50vh",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* question type */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <label style={{ paddingRight: 10 }}>Question Type: </label>
          <select
            onChange={dropDownItemSelected}
            name="questions"
            id="questions"
          >
            <option></option>
            {Questions.map((item, pos) => {
              return (
                <option key={pos} value={item.title}>
                  {item.title}
                </option>
              );
            })}
          </select>
        </div>

        {/* enable speech */}
        <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <label style={{ paddingRight: 10 }}>Enable Speech:</label>

          <div onChange={enableSpeech} style={{ display: "flex" }}>
            <div style={{ marginRight: 10 }}>
              <label>Yes</label>
              <input type="radio" name="speech" id="yes" value={true} />
            </div>

            <div>
              <label>No</label>
              <input
                type="radio"
                name="speech"
                id="no"
                value={false}
                defaultChecked
              />
            </div>
          </div>
        </div>

        <div style={{ display: "flex", marginTop: 10 }}>
          <button
            style={{ display: "flex", padding: 5 }}
            onClick={generateQuestion}
          >
            Generate Question
          </button>
        </div>

        <p key={queNumGen} className={queTxt === "" ? null : LayoutCSS.queTxt}>
          {queTxt}
        </p>

        <div style={{ display: "flex", marginTop: 10 }}>
          {dispAnsBtn ? (
            <button
              style={{ display: "flex", padding: 5 }}
              onClick={() => {
                setDispAnsTxt(true);
              }}
            >
              View Answer
            </button>
          ) : null}
        </div>

        {dispAnsTxt ? (
          <div
            key={genRanQueNum(100)}
            className={ansTxt === "" ? null : LayoutCSS.ansDiv}
          >
            {ansTxt}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Layout;
