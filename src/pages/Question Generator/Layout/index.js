//https://github.com/craig1123/react-recipes/blob/master/docs/useSpeechSynthesis.md
import { useSpeechSynthesis } from "react-speech-kit";
import {
  BAQ,
  PQ,
  EI,
  EF,
  EC,
  SQLP,
  DA,
  GI,
  MA,
  SQLI,
  OP,
  NP,
  PBI,
  VBA,
  PDX,
  BO,
  CC,
  PP,
  SSIS,
} from "../Questions";
import { useState, useEffect, useRef } from "react";
import LayoutCSS from "./layout.module.css";

function QuestionGenerator() {
  const [queTyp, setQueTyp] = useState(null); //stores the question type the user selected from the dropdown list
  const [queTxt, setQueTxt] = useState(""); //stores the question text of the randomly generated question number
  const [queCntxt, setQueCntxt] = useState(""); //stores the context of the question. This is useful for Mixed question domain
  const [ansTxt, setAnsTxt] = useState(""); //if a generated question has an answer attached to it, this variable stores the answer

  const [dispAnsBtn, setDispAnsBtn] = useState(null); //the view answer button is displayed or hidden based on if a generated question has an answer attached to it in the object array
  const [dispAnsTxt, setDispAnsTxt] = useState(false); //we should the answer only if the user clicks the View Answer button

  const { speak, voices } = useSpeechSynthesis();
  const [speechEnabled, setSpeechEnabled] = useState(); //stores the radio button value of speech enabled

  const [questionDomainType, setQuesDomain] = useState("specific"); //stores the radio button value of the question domain enabled

  const checkedQueTypesPos = useRef([]); //if the user selects the checkbox for a question type, this array stores the position of the question type in the Questions array

  const prevSelQueTopic = useRef(""); //this variable will track the current specific question topic whenever a user generates a new question
  const prevSelChecQueTypes = useRef([]); //for the Mixed Domain quesitons, this array will track the checkboxes

  const questionsBallot = useRef([]); //variable which will serve as a ballot containing the questions which we'd pick a random from

  const [checkboxList, setCheckboxList] = useState([]); //if the user selects mixed question domain, this array stores the state of the checkboxes for the areas selected

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
    { title: "Excel Interview Questions", content: EI, context: "" },
    { title: "SQL Interview Questions", content: SQLI, context: "" },
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
    { title: "Excel Pivot Tables Practice", content: PP, context: "Excel" },
    { title: "Excel Charts Practice", content: EC, context: "" },
    { title: "Excel Macros", content: VBA, context: "Excel" },
    { title: "Power Query Practice", content: PQ, context: "Power Query" },
    { title: "Power BI Charts Practice", content: PBI, context: "Power BI" },
    { title: "Power BI Dax Practice", content: PDX, context: "Power BI" },
    { title: "SQL Practice", content: SQLP, context: "SQL" },
    { title: "SSIS Practice", content: SSIS, context: "SQL" },
    { title: "Outlook Common Practices", content: OP, context: "Outlook" },
    { title: "Nato Phonetic Alphabet Practice", content: NP, context: "" },
    { title: "SAP Business Objects Practice", content: BO, context: "" },
    { title: "Choosing Charts Practice", content: CC, context: "" },
    { title: "Ms Access DB Practice", content: MA, context: "Access" },
  ];

  useEffect(() => {
    //In the Questions array, each object has a key called "content"
    //"content" is also an array of questions and we assign a new property, "context" object entry
    for (var queType in Questions) {
      for (var count = 0; count < Questions[queType].content.length; count++) {
        Questions[queType].content[count].context = Questions[queType].context;
      }
    }

    //the Mixed domain allows users to check multiple topics to generate questions from. For each question type, we want to keep track of its checkbox when a user checks and unchecks it. By default all the boxes are unchecked
    var temp = [];
    for (count = 0; count < Questions.length; count++) {
      temp.push(false);
    }
    setCheckboxList(temp);
  }, []);

  //generate a question from the Specific or Mixed Question Domain
  const generateQuestion = () => {
    //clear variables
    setQueTxt("");
    setQueCntxt("");
    setAnsTxt("");
    setDispAnsBtn(false);
    setDispAnsTxt(false);

    //now we peform different operations based on whether used selected Specific question domain or Mixed
    if (questionDomainType == "mixed") {
      //if user hasnt checked any questions
      if (checkedQueTypesPos.current.length == 0) {
        alert("Select at least 1 question type");
        return;
      }

      //we check if all the checkboxes in prevSelChecQueTypes are in checkedQueTypesPos and also if all the checkboxes in checkedQueTypesPos are in prevSelChecQueTypes
      let check1 = undefined;
      for (var count = 0; count < checkedQueTypesPos.current.length; count++) {
        //if checkedQueTypesPos values are in prevSelChecQueTypes
        if (
          prevSelChecQueTypes.current.includes(
            checkedQueTypesPos.current[count]
          )
        ) {
          check1 = true;
        } else {
          check1 = false;
        }
      }

      let check2 = undefined;
      for (var count = 0; count < prevSelChecQueTypes.current.length; count++) {
        //if checkedQueTypesPos values are in prevSelChecQueTypes
        if (
          checkedQueTypesPos.current.includes(
            prevSelChecQueTypes.current[count]
          )
        ) {
          check2 = true;
        } else {
          check2 = false;
        }
      }

      //final comparison between checkedQueTypesPos and prevSelChecQueTypes
      if (check1 == check2) {
        //if we are still generating for the same checkboxes
        if (questionsBallot.current.length == 0) {
          alert("no more questions");
          prevSelChecQueTypes.current = []; //reset the prevcheckboxes
          return;
        }
      } else {
        //if user added new checkbox or unchecked existing one, we generate new ballot boxes
        questionsBallot.current = []; //first empty exisitng ballot
        for (var positions in checkedQueTypesPos.current) {
          questionsBallot.current = questionsBallot.current.concat(
            Questions[checkedQueTypesPos.current[positions]].content
          );
        }
        prevSelChecQueTypes.current = checkedQueTypesPos.current.slice(0);
      }
    }

    //if Question Domain: Specific
    else {
      if (queTyp === null || queTyp === "" || queTyp == "Select Area") {
        alert("Select Question Type");
        return;
      }

      //if we're still generating from the same specific question topic, we dont need to fetch the questions from the Question array again since they're already in the questionsBallot
      if (queTyp == prevSelQueTopic.current) {
        //check if all questions have been drawn from ballot
        if (questionsBallot.current.length == 0) {
          alert("No more questions");
          prevSelQueTopic.current = ""; //reset the prevSelQueTopic
          return;
        }
      } else {
        //if new question topic we empty ballot to generate new set of questions
        questionsBallot.current = [];

        prevSelQueTopic.current = queTyp; //we store the current question topic whose questions are being generated

        //before we generate question we find index of that question type in the questions array
        var queTypIdx = Questions.findIndex((item) => item.title === queTyp);

        //save the questions to the ballot.
        //NB: we had to copy one array into another using slice because the usual array2=array1 modifies the content of array1
        //https://www.youtube.com/watch?v=EeZBKv34mm4
        // https://www.youtube.com/watch?v=5xenz2mZ0gY
        questionsBallot.current = Questions[queTypIdx].content.slice(0);
      }
    }

    //after knowing which question type we want to generate questions from, we calc the length of that questions array to generate a random number
    var _queNumGen = genRanQueNum(questionsBallot.current.length); //this new variable was created to be used as the original generated question number else the default of 0 in the state would be used when the user generates question for the first time. The state version of this variable was created to hold as the key property for the queTxt variable

    //set the question of the generated question number
    setQueTxt(questionsBallot.current[_queNumGen].que);

    //set the question context of the generated question number
    setQueCntxt(questionsBallot.current[_queNumGen].context);

    //set the answer of the generated question number
    setAnsTxt(questionsBallot.current[_queNumGen].ans);

    //if the question has an answer included we display the View Answer button
    if (questionsBallot.current[_queNumGen].ans != null) {
      setDispAnsBtn(true);
    }

    //if the enable speech option is on, we play the question
    if (speechEnabled) {
      speak({
        text: questionsBallot.current[_queNumGen].que,
        voice: voices[3],
      });
    }

    //finally remove that question from the questions array to avoid being asked again
    questionsBallot.current.splice(_queNumGen, 1);
  };

  //fetches the index of the selected question type from the dropdown
  const dropDownItemSelected = (e) => {
    setQueTyp(e.target.value); //store the selected dropdown question type

    //clear variables
    setQueTxt("");
    setQueCntxt("");
    setAnsTxt("");
    setDispAnsBtn(false);
    setDispAnsTxt(false);
  };

  //update speech enabled radio button when selected
  const enableSpeech = (e) => {
    //convert the true/false value to boolean form
    var boolVal = e.target.value.toLowerCase() === "true";
    setSpeechEnabled(boolVal);
  };

  //update question domain radio button when changed
  const changeQuesDomain = (e) => {
    setQuesDomain(e.target.value);

    //clear variables since swtiching between domain should produce fresh set of questions not continue from previous doman
    setQueTxt("");
    setQueCntxt("");
    setAnsTxt("");
    setDispAnsBtn(false);
    setDispAnsTxt(false);
    checkedQueTypesPos.current = [];
    questionsBallot.current = [];
  };

  //update checkedQueTypesPos when a question type is checked or unchecked in the mixed question domain
  const updateCheckedQueTypesPos = (e, pos) => {
    var temp = checkboxList.slice(0);
    temp[pos] = e.target.checked;
    setCheckboxList(temp);

    //if the checkbox for the question type is checked, add its position number to checkedQueTypesPos
    if (e.target.checked == true) {
      checkedQueTypesPos.current = checkedQueTypesPos.current.concat(pos);
    }
    //remove the position number from checkedQueTypesPos
    else {
      checkedQueTypesPos.current.splice(
        checkedQueTypesPos.current.indexOf(pos),
        1
      );
    }
    setQueTxt("");
    setQueCntxt("");
    setAnsTxt("");
    setDispAnsBtn(false);
    setDispAnsTxt(false);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          paddingLeft: 20,
        }}
      >
        {/* top half of page */}
        <div
          style={{
            display: "flex",
            flex: 0.1,
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
            }}
          >
            <label style={{ paddingRight: 10 }}>Question Domain: </label>

            <div style={{ marginRight: 10 }}>
              <label>Specific</label>
              <input
                type="radio"
                name="quesDomain"
                value="specific"
                checked={questionDomainType === "specific"}
                onChange={(e) => changeQuesDomain(e)}
              />
            </div>

            <div>
              <label>Mixed</label>
              <input
                type="radio"
                name="quesDomain"
                value="mixed"
                checked={questionDomainType === "mixed"}
                onChange={(e) => changeQuesDomain(e)}
              />
            </div>
          </div>
        </div>

        {/* bottom half of page */}
        <div
          style={{
            display: "flex",
            flex: 0.9,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {questionDomainType == "mixed" ? (
            /* checkbox area for mixed question domain */
            <div style={{ paddingTop: 10 }}>
              {Questions.map((item, pos) => {
                return (
                  <div
                    key={Math.random()}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <input
                      key={pos}
                      type="checkbox"
                      value={item.title}
                      checked={
                        checkedQueTypesPos.current.includes(pos) ? true : false
                      }
                      onChange={(e) => {
                        updateCheckedQueTypesPos(e, pos);
                      }}
                    />
                    <label
                      style={{ fontSize: 10, paddingTop: 3 }}
                      key={Math.random()}
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
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
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
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  fontStyle: "italic",
                  color: "grey",
                  paddingTop: 5,
                }}
              >
                NB: Before interview
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  fontStyle: "italic",
                  color: "grey",
                  paddingTop: 5,
                }}
              >
                All phones on silence
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  fontStyle: "italic",
                  color: "grey",
                  paddingTop: 5,
                }}
              >
                Strong internet connection
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  fontStyle: "italic",
                  color: "grey",
                  paddingTop: 5,
                }}
              >
                Prepare book and pen to note down points
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  fontStyle: "italic",
                  color: "grey",
                  paddingTop: 5,
                }}
              >
                Have CV opened before you
              </span>
            </div>
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
            {/* question context */}
            <p
              style={{ color: "green" }}
              key={Math.random()}
              className={queTxt === "" ? null : LayoutCSS.queTxt}
            >
              {queCntxt}
            </p>

            {/* question */}
            <div
              style={{ color: "red" }}
              key={Math.random()}
              className={queTxt === "" ? null : LayoutCSS.queTxt}
            >
              {queTxt}
            </div>
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
            // answer
            <div
              key={Math.random()}
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

export default QuestionGenerator;
