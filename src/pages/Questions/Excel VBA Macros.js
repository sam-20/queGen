export const VBA = [
  {
    que: `enable macros in excel`,
    ans: `File -> Options -> Customize Ribbon -> check Developer tab`,
  },
  {
    que: `create and run a simple macro without using VBA code. Eg. a macro to color fill a cell`,
    ans: `Developer tab -> Code group -> enable Use Relative Preferences -> Record Macro`,
  },
  {
    que: `create and run a simple macro using VBA code.`,
    ans: `Developer tab -> Code group -> Visual Basic -> add new module -> enter vba code`,
  },
  {
    que: `add new module for an opened VBAProject`,
    ans: `menu bar -> Insert -> Module`,
  },
  {
    que: `add new userform for an opened VBAProject`,
    ans: `menu bar -> Insert -> UserForm`,
  },
  {
    que: `display the Immediate Window form`,
    ans: `menu bar -> View -> Immediate Window`,
  },
  {
    que: `display the list of available object properties and methods`,
    ans: `menu bar -> View -> Object Browser`,
  },
  {
    que: `rename a module`,
    ans: `select module -> Properties window -> change name`,
  },
  {
    que: `view step by step execution of your code`,
    ans: `menu bar -> Debug -> Step Into OR f8`,
  },
  {
    que: `print a message`,
    ans: (
      <>
        <p>MsgBox "hello world"</p>
        <p>MsgBox 20</p>
      </>
    ),
  },
  {
    que: `access or perform an action on the currently selected cell`,
    ans: (
      <>
        <p>
          MsgBox ActiveCell.Value 'access content of currently selected cell
        </p>
        <p>ActiveCell.Value = 50 'assign value to currently selected cell</p>
      </>
    ),
  },
  {
    que: `access or perform an action on a non-selected or inactive cell`,
    ans: (
      <>
        <p>Cells(7, 3).Value = "this is cell c7" 'using [colIdx][rowIdx]</p>
        <p>[c7].Value = "this is cell c7"</p>
        <p>Range("c7").Value = "this is cell c7" 'widely used</p>
        <p>MsgBox [j5].Value</p>
      </>
    ),
  },
  {
    que: `access or perform an action on any cell range. eg. g2 -> g30`,
    ans: (
      <>
        <p>[c2:c7] = "row headers"</p>
        <p>Range("c2:c7").Value = "row headers" 'widely used</p>
        <p>NB: you cannot msgbox a cell range</p>
      </>
    ),
  },
  {
    que: `access or perform an action on an entire row/column`,
    ans: null,
  },
  {
    que: `copy content of one cell/range into another cell/range`,
    ans: (
      <>
        <p>Range("d2").Value = 5</p>
        <p>Range("c5").Value = Range("d2").Value </p>
        <p>Range("f1:f5").Value = "male"</p>
        <p>Range("g3:g4").Value = Range("f1:f5").Value</p>
      </>
    ),
  },
  {
    que: `modify the font of your cell content`,
    ans: (
      <>
        <p>syntax: cellReference.Font.[font_property] = [value/boolean]</p>
        <p>eg</p>
        <p>Range("b2:b5").Font.Name = "Arial"</p>
        <p>Range("b2:b5").Font.Color = 65535</p>
        <p>Range("b2:b5").Font.Bold = True</p>
      </>
    ),
  },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: ``, ans: null },
  { que: `clear the worksheet`, ans: null },
  {
    que: `assign a macro function to a button`,
    ans: ``,
  },
  {
    que: `let each data entered be automatically fitted to the cell width`,
    ans: (
      <>
        <p>
          right click sheet name at bottom {"->"} select "View Code" {"->"}
          change sheet type dropdown to "Worksheet" {"->"} Add the following
          between the Private Sub and End Sub
        </p>
        <p>Cells.EntireColumn.AutoFit</p>
      </>
    ),
  },
];
