//videos skipped: 11-18, 23-24
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
    que: `make any cell/range the focus/active/selected cell/range`,
    ans: (
      <>
        <p>'using Select method</p>
        <p>Range("c3").Select 'cell</p>
        <p>Range("c3:d5").Select 'range/table</p>
        <p>Range("c:c").Select 'entire column</p>
        <p>Range("3:3").Select 'entire row</p>

        <p>'using Activate methodRange("c3").Select 'cell</p>
        <p>Range("c3").Activate 'cell</p>
        <p>Range("c3:d5").Activate 'range/table</p>
        <p>Range("c:c").Activate 'entire column</p>
        <p>Range("3:3").Activate 'entire row</p>
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
    que: `delete a single entire column/row Eg. delete column B or row 4`,
    ans: (
      <>
        <p>'deleting column B'</p>
        <p>Range("b:b").Delete</p>
        <p>'or</p>
        <p>Range("b3").EntireColumn.Delete</p>

        <p>'deleting row 4</p>
        <p>Range("4:4").Delete</p>
        <p>'or</p>
        <p>Range("e4").EntireRow.Delete</p>
      </>
    ),
  },
  {
    que: `delete multiple entire columns/rows eg. delete column B to D or row 4 to 6`,
    ans: (
      <>
        <p>'deleting column B to D</p>
        <p>Range("b:d").Delete</p>
        <p>'or</p>
        <p>Range("b3:d2").EntireColumn.Delete</p>

        <p>'deleting row 4 to 6</p>
        <p>Range("4:6").Delete</p>
        <p>'or</p>
        <p>Range("c4:d6").EntireRow.Delete</p>
      </>
    ),
  },
  {
    que: `insert a new row/column at any position`,
    ans: (
      <>
        <p>'inserting a new column at B</p>
        <p>Range("b:b").Insert</p>
        <p>'or</p>
        <p>Range("b3").EntireColumn.Insert</p>

        <p>'inserting a new role at 4</p>
        <p>Range("4:4").Insert</p>
        <p>'or</p>
        <p>Range("e4").EntireRow.Insert</p>
      </>
    ),
  },
  {
    que: `insert multiple new rows/columns at any position eg. insert 2 new columns at B or 2 news rows at 4 `,
    ans: (
      <>
        <p>'inserting 2 new columns at column B</p>
        <p>Range("b:c").Insert 'NB: counting from b to c is 2 cols</p>
        <p>'or</p>
        <p>Range("b3:c2").EntireColumn.Insert</p>

        <p>'inserting 2 new rows at 4</p>
        <p>Range("4:5").Insert 'NB: counting from 4 to 5 is 2 rows</p>
        <p>'or</p>
        <p>Range("c4:d5").EntireRow.Insert</p>
      </>
    ),
  },
  {
    que: `hide and unhide a row/col`,
    ans: (
      <>
        <p>'hiding and unhiding a column</p>
        <p>Range("c:c").Columns.Hidden = True</p>
        <p>Range("c:c").Columns.Hidden = False</p>

        <p>'hiding and unhiding a row</p>
        <p>Range("4:4").Rows.Hidden = True</p>
        <p>Range("4:4").Rows.Hidden = False</p>
      </>
    ),
  },
  {
    que: `hide and unhide multiple rows/cols`,
    ans: (
      <>
        <p>'hiding and unhiding multiple columns</p>
        <p>Range("c:e").Columns.Hidden = True</p>
        <p>Range("c:e").Columns.Hidden = False</p>

        <p>'hiding and unhiding multiple rows</p>
        <p>Range("4:6").Rows.Hidden = True</p>
        <p>Range("4:6").Rows.Hidden = False</p>
      </>
    ),
  },
  {
    que: `create a new worksheet`,
    ans: (
      <>
        <p>Sheets.Add</p>
        <p>'or</p>
        <p>Worksheets.Add</p>
        <p>
          'NB: Both methods add a sheet before the currently selected/active
          worksheet
        </p>
      </>
    ),
  },
  {
    que: `create a new worksheet with a name`,
    ans: (
      <>
        <p>Sheets.Add.Name = "students_data"</p>
        <p>'or</p>
        <p>Worksheets.Add.Name = "students_data"</p>
        <p>
          'NB: Both methods add a sheet before the currently selected/active
          worksheet
        </p>
        <p>'NB: every worksheet is allowed to have a unique name</p>
      </>
    ),
  },
  {
    que: `create a new worksheet at a specific position. ie. before or after another worksheet`,
    ans: (
      <>
        <p>'adding sheets before and after a specific worksheet</p>

        <p>
          Sheets.Add before:=Sheets(2) 'adding before/after a sheet position
          number
        </p>
        <p>
          Sheets.Add after:=Sheets("students_data") 'adding before/after a sheet
          name
        </p>
        <p>
          Sheets.Add(after:=Sheets(2)).Name = "students_data" 'adding new sheet
          with name before/after a sheet position number
        </p>

        <p>'or</p>
        <p>
          Worksheets.Add before:=Sheets(2) 'adding before/after a sheet position
          number
        </p>
        <p>
          Worksheets.Add after:=Sheets("students_data") 'adding before/after a
          sheet name
        </p>
        <p>
          Worksheets.Add(after:=Sheets("students_data")).Name = "students_data2"
          'adding new sheet with name before/after a sheet position number
        </p>
      </>
    ),
  },
  {
    que: `retrieve the position of a worksheet whose name is given`,
    ans: null,
  },
  {
    que: `rename a worksheet`,
    ans: (
      <>
        <p>ActiveSheet.Name = "Sales report" 'using the current sheet</p>
        <p>Sheets(2).Name = "studentsA" 'using sheet position number</p>
        <p>Sheets("students_data2").Name = "studentsB" 'using sheet name</p>
        <p>'or</p>
        <p>Worksheets(2).Name = "studentsA" 'using sheet position number</p>
        <p>Worksheets("students_data2").Name = "studentsB" 'using sheet name</p>
      </>
    ),
  },
  {
    que: `move sheet from one position to another`,
    ans: (
      <>
        <p>
          Sheets(2).Move before:=Sheets("first sheet") 'move sheet at position
          number 2 to before sheet with name "first sheet"
        </p>
        <p>
          Sheets("studentsB").Move after:=ActiveSheet 'move sheet with name
          "studentsB" to after the active worksheet
        </p>
        <p>
          ActiveSheet.Move before:=Sheets(1) 'move the active sheet to before
          the sheet at position number 1
        </p>
      </>
    ),
  },
  {
    que: `what is the total number of worksheets`,
    ans: (
      <>
        <p>Range("a1").Value = "Total worksheets"</p>

        <p>Range("b1").Value = ThisWorkbook.Sheets.Count</p>
        <p>'or</p>
        <p>Range("c1").Value = ThisWorkbook.Worksheets.Count</p>
        <p>'or</p>
        <p>
          Range("d1").Value = Workbooks("Book1.xlsm").Sheets.Count 'using the
          workbook's name. NB: you can only use the name for the active workbook
        </p>
      </>
    ),
  },
  {
    que: `retrieve all the worksheet names`,
    ans: (
      <>
        <p>'this is an example using a for loop</p>
        <p>Dim i As Integer</p>
        <p>For i = 1 To ThisWorkbook.Sheets.Count</p>
        <p>MsgBox Sheets(i).Name</p>
        <p>Next</p>
      </>
    ),
  },
  {
    que: `create a worksheet at the beginning of all of the worksheets and at the end of all the worksheets`,
    ans: (
      <>
        <p>'creating sheet at first position</p>
        <p>Sheets.Add(before:=Sheets(1)).Name = "first sheet"</p>

        <p>'creating sheet at last position</p>
        <p>
          Dim totalSheets As Integer 'variable to store total number of sheets
        </p>
        <p>totalSheets = ThisWorkbook.Sheets.Count</p>
        <p>Sheets.Add(after:=Sheets(totalSheets)).Name = "last sheet"</p>
      </>
    ),
  },
  {
    que: `make a copy or duplicate of a worksheet`,
    ans: (
      <>
        <p>Sheets(2).Copy 'make duplicate of sheet at position number</p>
        <p>Sheets("studentsB").Copy 'make duplicate of sheet with name</p>
        <p>
          'NB: the commands above dont specify whether the copy should be
          created before or after another sheet. Therefore it creates the copy
          in a new workbook
        </p>

        <p>
          'The commands below create copy in the same workbook since we
          specified which place to create it
        </p>
        <p>
          Sheets(2).Copy after:=ActiveSheet 'make duplicate and place after
          active sheet
        </p>
        <p>
          Sheets("studentsB").Copy before:=Sheets("first sheet") 'make duplicate
          and place before sheet with name
        </p>
      </>
    ),
  },
  {
    que: `copy one sheet's content into another sheet ie. copy sheet A data into sheet B`,
    ans: null,
  },
  {
    que: `reference or perform an action on the active worksheet`,
    ans: (
      <>
        <p>ActiveSheet.Name = "pivot table" 'renaming active sheet</p>
        <p>ActiveSheet.Delete 'deleting the active/selected sheet</p>
        <p>
          Sheets.Add after:=ActiveSheet 'adding new sheet before/after active
          sheet
        </p>
      </>
    ),
  },
  {
    que: `set another sheet to be the active worksheet`,
    ans: (
      <>
        <p>'using activate or select</p>
        <p>Sheets("students_data").Activate</p>
        <p>Sheets(1).Select</p>
      </>
    ),
  },
  {
    que: `by default, if you run a macro code, it executes the instructions in the current active worksheet. 
  How would you reference an inactive/specific worksheet and execute a code in that inactive/specific worksheet
  without switching to the worksheet to make it selected or active. 
  Eg. create a date column in sheet 2 or the tutorials sheet witthout selecting it as the active sheet`,
    ans: (
      <>
        <p>'syntax: prefix the command with Sheets[sheet_number/sheet_name]</p>
        <p>'eg</p>
        <p>Sheets(2).Range("a:a").Value = "13/06/2023"</p>
        <p>Sheets(2).Range("a1").Value = "Date"</p>
        <p>'or</p>
        <p>Sheets("students_data").Range("a:a").Value = "13/06/2023"</p>
        <p>Sheets("students_data").Range("a1").Value = "Date"</p>
      </>
    ),
  },
  {
    que: `change the tab color of a worksheet`,
    ans: (
      <>
        <p>'using one of the 12 standard colors</p>
        <p>ActiveSheet.Tab.Color = vbRed</p>
        <p>Sheets(3).Tab.Color = vbCyan</p>

        <p>'using one of the 56 color indices</p>
        <p>Sheets("first sheet").Tab.ColorIndex = 27</p>

        <p>'resetting to default color</p>
        <p>Sheets(3).Tab.Color = False</p>
      </>
    ),
  },
  {
    que: `delete a worksheet`,
    ans: (
      <>
        <p>Sheets(2).Delete 'deleting a sheet at a position number</p>
        <p>Sheets("studentsA").Delete 'deleting a sheet with a name</p>
        <p>ActiveSheet.Delete 'deleting the active/selected sheet</p>
      </>
    ),
  },
  {
    que: `hide and unhide a worksheet`,
    ans: (
      <>
        <p>Sheets("students_data").Visible = False</p>
        <p>Sheets(2).Visible = True</p>
        <p>ActiveSheet.Visible = False</p>
      </>
    ),
  },
  {
    que: `password protect and unprotect worksheet`,
    ans: (
      <>
        <p>Sheets("students_data").Protect Password:=123</p>
        <p>ActiveSheet.Protect Password:="alaska"</p>
        <p>Sheets("students_data").Unprotect Password:=123</p>
        <p>ActiveSheet.Unprotect Password:="alaska"</p>
      </>
    ),
  },
  {
    que: `create a workbook with and without naming the file`,
    ans: (
      <>
        <p>Workbooks.Add 'without naming file</p>
        <p>
          Workbooks.Add.SaveAs Filename:="C:\Users\Samuel\Desktop\test 1.xlsx"
        </p>
      </>
    ),
  },
  {
    que: `retrieve the names of the open workbooks`,
    ans: (
      <>
        <p>
          MsgBox (ActiveWorkbook.Name) 'activeworkbook is the workbook which is
          active/ has the cell selected inside
        </p>
        <p>
          MsgBox (ThisWorkbook.Name) 'thisworkbook is the workbook/project in
          which the macro code is being written insidde
        </p>
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
