//videos skipped: 11-Borders -> 18. merge unmerge
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
    ans: (
      <>
        <p>'you can refer to an entire column either of the following</p>
        <p>' 1. Range(columnLetter:columnLetter) eg.</p>
        <p>' Range("b:b")</p>
        <p>'2.[reference to any cell in the column].EntireColumn eg.</p>
        <p>' Range("b2").EntireColumn</p>

        <p>'eg.</p>
        <p>Range("b:b") = 5</p>
        <p>Range("b:b").Font.Color = 45244</p>
        <p>Range("b:b").ClearFormats</p>
        <p>Range("b:b").ClearHyperlinks</p>
        <p>Range("b:b").Clear</p>
        <p>Range("b:b").Delete</p>

        <p>'or</p>
        <p>Range("b2").EntireColumn = 5</p>
        <p>Range("b3").EntireColumn.Font.Color = 45244</p>
        <p>Range("b3").EntireColumn.ClearFormats</p>
        <p>Range("b3").EntireColumn.ClearHyperlinks</p>
        <p>Range("b7").EntireColumn.Clear</p>
        <p>Range("b5").EntireColumn.Delete</p>

        <p>'you can refer to an entire row either of the following</p>
        <p>' 1. Range(rowNumber:rowNumber) eg.</p>
        <p>' Range("2:2")</p>
        <p>'2.[reference to any cell in the row].EntireRow eg.</p>
        <p>' Range("b2").EntireRow</p>

        <p>'eg.</p>
        <p>Range("2:2") = 5</p>
        <p>Range("2:2").Font.Color = 45244</p>
        <p>Range("2:2").ClearFormats</p>
        <p>Range("2:2").ClearHyperlinks</p>
        <p>Range("2:2").Clear</p>
        <p>Range("2:2").Delete</p>

        <p>'or</p>
        <p>Range("b2").EntireRow = 5</p>
        <p>Range("b3").EntireRow.Font.Color = 45244</p>
        <p>Range("b3").EntireRow.ClearFormats</p>
        <p>Range("b3").EntireRow.ClearHyperlinks</p>
        <p>Range("b7").EntireRow.Clear</p>
        <p>Range("b5").EntireRow.Delete</p>
      </>
    ),
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
        <p>syntax: [cellReference].Font.[font_property] = [value/boolean]</p>
        <p>eg</p>
        <p>Range("b2:b5").Font.Name = "Arial"</p>
        <p>Range("b2:b5").Font.Color = 65535</p>
        <p>Range("b2:b5").Font.Bold = True</p>
      </>
    ),
  },
  {
    que: `customize multiple properties of the same item/object. eg. add customizations to a cell's font`,
    ans: (
      <>
        <p>
          'With block is used when you want to assign multiple methods for the
          same object. Saving you lines of code
        </p>
        <p>'Assuming we wanted to make changes to our font, we would do</p>
        <p>Range("d3").Font.Name = "Arial"</p>
        <p>Range("d3").Font.Color = 65535</p>
        <p>Range("d3").Font.Bold = True</p>

        <p>'Simplifying with the With block becomes</p>
        <p>With Range("d3").Font</p>
        <p>.Name = "Calibri"</p>
        <p>.Color = 43254</p>
        <p>.Bold = False</p>
        <p>End With</p>
      </>
    ),
  },
  {
    que: `clear the contents of a cell/range`,
    ans: (
      <>
        <p>Range("d3:d7").Clear</p>
      </>
    ),
  },
  {
    que: `clear the formatting of a cell/range`,
    ans: (
      <>
        <p>Range("d3:d7").ClearFormats</p>
      </>
    ),
  },
  {
    que: `remove the comments from a cell/range`,
    ans: (
      <>
        <p>Range("d3:d7").ClearComments</p>
      </>
    ),
  },
  {
    que: `remove the hyperlinks of a cell/range`,
    ans: (
      <>
        <p>Range("d3:d7").ClearHyperlinks</p>
      </>
    ),
  },
  {
    que: `delete a cell/range`,
    ans: (
      <>
        <p>'deleting one cell shifts cells up</p>
        <p>Range("a4").Delete</p>

        <p>'deleting a range shifts cells to the left</p>
        <p>Range("a3:a4").Delete</p>
      </>
    ),
  },
  {
    que: `delete an entire column/row`,
    ans: (
      <>
        <p>eg.</p>
        <p>Range("b:b").Delete</p>
        <p>Range("b5").EntireRow.Delete</p>
      </>
    ),
  },
  {
    que: `insert a new row/column at any position`,
    ans: (
      <>
        <p>'inserting a new column at B</p>
        <p>Range("b3").EntireColumn.Insert</p>
        <p>'or</p>
        <p>Range("b:b").Insert</p>

        <p>'inserting a new role at 4</p>
        <p>Range("e4").EntireRow.Insert</p>
        <p>'or</p>
        <p>Range("4:4").Insert</p>
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
  { que: `clear everything not inside given range/cell`, ans: null },
  { que: `create a table with headers from a given range`, ans: null },
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
