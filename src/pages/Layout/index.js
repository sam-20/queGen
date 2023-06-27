//https://github.com/craig1123/react-recipes/blob/master/docs/useSpeechSynthesis.md
import { useSpeechSynthesis } from "react-speech-kit";
import {
  BAQ,
  PQ,
  EI,
  EF,
  CC,
  SQLP,
  DA,
  GI,
  SQLI,
  OP,
  NP,
  PBI,
  VBA,
  PDX,
} from "../Questions";
import { useState, useEffect, useRef } from "react";
import LayoutCSS from "./layout.module.css";

function Layout() {
  const [queTyp, setQueTyp] = useState(null); //stores the question type the user selected from the dropdown list
  const [queTxt, setQueTxt] = useState(""); //stores the question text of the randomly generated question number
  const [queCntxt, setQueCntxt] = useState(""); //stores the context of the question. This is useful for Mixed question domain
  const [ansTxt, setAnsTxt] = useState(""); //if a generated question has an answer attached to it, this variable stores the answer

  const [dispAnsBtn, setDispAnsBtn] = useState(null); //the view answer button is displayed or hidden based on if a generated question has an answer attached to it in the object array
  const [dispAnsTxt, setDispAnsTxt] = useState(false); //we should the answer only if the user clicks the View Answer button

  const { speak, voices } = useSpeechSynthesis();
  const [speechEnabled, setSpeechEnabled] = useState(); //stores the radio button value of speech enabled

  const [questionDomainType, setQuesDomain] = useState(); //stores the radio button value of the question domain enabled

  const [queNumGen, setQueNumGen] = useState(0); //the question number generated is stored in this variable

  const [mixedDomainQuesArr, setMixQues] = useState([]); //if the user selects mixed question domain, this array stores the questions for the areas selected
  let checkedQueTypesPos = []; //if the user selects the checkbox for a question type, this array stores the position of the question type in the Questions array
  let checkedQueTypesPos2 = useRef([]);

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
      title: "Personal and Company Interview Questions",
      content: GI,
      context: "",
    },
    {
      title: "Data Analyst Interview Questions",
      content: DA,
      context: "Personal",
    },
    {
      title: "Excel Interview Questions",
      content: EI,
      context: "",
    },
    {
      title: "SQL Interview Questions",
      content: SQLI,
      context: "",
    },
    {
      title: "Business Analyst Interview Questions",
      content: BAQ,
      context: "",
    },
    {
      title: "Excel Formulas and Common Practices",
      content: EF,
      context: "Excel",
    },
    {
      title: "Excel Choosing and Designing Charts",
      content: CC,
      context: "",
    },
    {
      title: "Excel Macros",
      content: VBA,
      context: "Excel",
    },
    {
      title: "Power Query Practice",
      content: PQ,
      context: "Power Query",
    },
    {
      title: "Power BI Charts Practice",
      content: PBI,
      context: "Power BI",
    },
    {
      title: "Power BI Dax Practice",
      content: PDX,
      context: "Power BI",
    },
    {
      title: "SQL Practice",
      content: SQLP,
      context: "SQL",
    },
    {
      title: "Outlook Common Practices",
      content: OP,
      context: "Outlook",
    },
    {
      title: "Nato Phonetic Alphabet Practice",
      content: NP,
      context: "",
    },
  ];

  useEffect(() => {
    for (var queType in Questions) {
      for (var count = 0; count < Questions[queType].content.length; count++) {
        Questions[queType].content[count].context = Questions[queType].context;
      }
    }
  }, []);

  //generate a question from the question type selected in the dropdown
  const generateQuestion = () => {
    // console.log(checkedQueTypesPos2.current);

    //clear variables
    setQueTxt("");
    setQueCntxt("");
    setAnsTxt("");
    setDispAnsBtn(false);
    setDispAnsTxt(false);

    //now we peform different operations based on whether used selected Specific question domain or Mixed

    //variable which will serve as a ballot containing the questions which we'd pick a random from
    let questionsBallot = [];

    // console.log(checkedQueTypesPos2.current);

    //if Question Domain: Mixed
    if (questionDomainType == true) {
      if (checkedQueTypesPos2.current.length == 0) {
        alert("Select at least 1 question type");
        return;
      }

      // console.log("checked questions array", checkedQueTypesPos);
      //[1,10]
      // mixedDomainQuesArr, setMixQues
      // var x = [];

      for (var positions in checkedQueTypesPos2.current) {
        questionsBallot = questionsBallot.concat(
          Questions[checkedQueTypesPos2.current[positions]].content
        );
      }
      // console.log(x);
      // questionsBallot = x;
    }

    //if Question Domain: Specific
    else {
      if (queTyp === null || queTyp === "" || queTyp == "Select Area") {
        alert("Select Question Type");
        return;
      }
      //before we generate question we find index of that question type in the questions array
      var queTypIdx = Questions.findIndex((item) => item.title === queTyp);

      //save the questions to the ballot
      questionsBallot = Questions[queTypIdx].content;
    }

    console.log(questionsBallot);

    //if all questions of that type have been generated from the ballot we prompt user
    if (questionsBallot.length === 0) {
      alert("No more questions");
      return;
    }

    //after knowing which question type we want to generate questions from, we calc the length of that questions array to generate a random number
    var _queNumGen = genRanQueNum(questionsBallot.length); //this new variable was created to be used as the original generated question number else the default of 0 in the state would be used when the user generates question for the first time. The state version of this variable was created to hold as the key property for the queTxt variable
    console.log("question number generated: ", _queNumGen);
    setQueNumGen(_queNumGen);

    //set the question of the generated question number
    setQueTxt(questionsBallot[_queNumGen].que);

    //set the question context of the generated question number
    setQueCntxt(questionsBallot[_queNumGen].context);

    //set the answer of the generated question number
    setAnsTxt(questionsBallot[_queNumGen].ans);

    //if the question has an answer included we display the View Answer button
    if (questionsBallot[_queNumGen].ans != null) {
      setDispAnsBtn(true);
    }

    //if the enable speech option is on, we play the question
    if (speechEnabled) {
      speak({
        text: questionsBallot[_queNumGen].que,
        voice: voices[3],
      });
    }

    //finally remove that question from the questions array to avoid being asked again
    questionsBallot.splice(_queNumGen, 1);

    console.log("questions remaining: ", questionsBallot);
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

  //update question domain radio button when changed
  const changeQuesDomain = (e) => {
    var boolVal = e.target.value.toLowerCase() === "true";
    setQuesDomain(boolVal);

    //clear variables since swtiching between domain should produce fresh set of questions not continue from previous doman
    setQueTxt("");
    setQueCntxt("");
    setAnsTxt("");
    setDispAnsBtn(false);
    setDispAnsTxt(false);
    checkedQueTypesPos2.current = [];
  };

  //update checkedQueTypesPos when a question type is checked or unchecked in the mixed question domain
  const updateCheckedQueTypesPos = (e, pos) => {
    //if the checkbox for the question type is checked, add its position number to checkedQueTypesPos
    if (e.target.checked == true) {
      checkedQueTypesPos = checkedQueTypesPos.concat(pos);
      checkedQueTypesPos2.current = checkedQueTypesPos2.current.concat(pos);

      // mixedDomainQuesArr, setMixQues
      // setMixQues(...mixedDomainQuesArr, ...Questions[pos]);
    }
    //remove the position number from checkedQueTypesPos
    else {
      checkedQueTypesPos.splice(checkedQueTypesPos.indexOf(pos), 1);
      checkedQueTypesPos2.current.splice(
        checkedQueTypesPos2.current.indexOf(pos),
        1
      );
    }

    // console.log("checked topics ", checkedQueTypesPos);
    // console.log("checked topics2 ", checkedQueTypesPos2.current);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          paddingLeft: 20,
          // justifyContent: "center",
          // alignItems: "center",
          // backgroundColor: "grey",
        }}
      >
        {/* top half of page */}
        <div
          style={{
            display: "flex",
            flex: 0.1,
            // backgroundColor: "red",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {/* question domain */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              // backgroundColor: "yellow",
            }}
            onChange={changeQuesDomain}
          >
            <label style={{ paddingRight: 10 }}>Question Domain: </label>

            <div style={{ marginRight: 10 }}>
              <label>Specific</label>
              <input
                type="radio"
                name="quesDomain"
                id="specific"
                value={false}
                defaultChecked
              />
            </div>

            <div>
              <label>Mixed</label>
              <input type="radio" name="quesDomain" id="mixed" value={true} />
            </div>
          </div>
        </div>

        {/* bottom half of page */}
        <div
          style={{
            display: "flex",
            flex: 0.9,
            // backgroundColor: "dodgerblue",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {questionDomainType ? (
            /* checkbox area for mixed question domain */
            <div style={{ paddingTop: 10 }}>
              {Questions.map((item, pos) => {
                return (
                  <div
                    key={pos}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <input
                      key={pos + 1.42}
                      type="checkbox"
                      value={item}
                      onChange={(e) => {
                        updateCheckedQueTypesPos(e, pos);
                      }}
                    />
                    <label
                      style={{ fontSize: 10, paddingTop: 3 }}
                      key={pos * 1.25}
                    >
                      {item.title}
                    </label>
                  </div>
                );
              })}
            </div>
          ) : (
            /* dropdown menu for specific question domain */
            <div
              style={{
                display: "flex",
                // backgroundColor: "orange",
                marginTop: 10,
              }}
            >
              <select
                onChange={dropDownItemSelected}
                name="questions"
                id="questions"
              >
                <option>Select Area</option>
                {Questions.map((item, pos) => {
                  return (
                    <option key={pos} value={item.title}>
                      {item.title}
                    </option>
                  );
                })}
              </select>
            </div>
          )}

          {/* enable speech */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 10,
              // backgroundColor: "green",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                // backgroundColor: "pink",
              }}
            >
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
            <span
              style={{
                fontSize: 12,
                fontWeight: "bold",
                fontStyle: "italic",
                color: "grey",
                paddingTop: 5,
              }}
            >
              {"("}Recommended for interview questions{")"}
            </span>
          </div>

          <div style={{ display: "flex", marginTop: 20 }}>
            <button
              style={{ display: "flex", padding: 5 }}
              onClick={generateQuestion}
            >
              Generate Question
            </button>
          </div>

          <div>
            <p
              style={{ color: "green" }}
              key={queNumGen}
              className={queTxt === "" ? null : LayoutCSS.queTxt}
            >
              {queCntxt}
            </p>
            <p
              style={{ color: "red" }}
              key={genRanQueNum(10 * 1.25)}
              className={queTxt === "" ? null : LayoutCSS.queTxt}
            >
              {queTxt}
            </p>
          </div>

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
      </div>
    </>
  );
}

export default Layout;
