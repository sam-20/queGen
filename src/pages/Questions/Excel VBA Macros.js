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
    que: `comment a line in macro`,
    ans: (
      <>
        <p>'this is a comment</p>
        <p>Rem this is a comment</p>
      </>
    ),
  },
  {
    que: `comment a block in macro`,
    ans: (
      <>
        <p>
          1. add 'Comment Block' and 'Uncomment Block' features to the Edit menu
        </p>
        <p>
          VBA menu bar {"->"} View {"->"} Toolbars {"->"} Customize {"->"}
          Commands tab {"->"} select Edit inside Categories list {"->"} inside
          Commands list, drag both 'Comment Block' and 'Uncomment Block' into
          Edit of the the VBA menu bar
        </p>
        <p>2. comment and uncomment block</p>
        <p>
          highlight code to comment/uncomment {"->"} VBA menu bar {"->"} Comment
          Block / Uncomment Block
        </p>
      </>
    ),
  },
  {
    que: `add new module for an opened VBAProject`,
    ans: `VBA menu bar -> Insert -> Module`,
  },
  {
    que: `add new userform for an opened VBAProject`,
    ans: `VBA menu bar -> Insert -> UserForm`,
  },
  {
    que: `display the Immediate Window form. 
    NB: this is used to execute codes immediately 
    without having to create Sub procedures`,
    ans: `VBA menu bar -> View -> Immediate Window`,
  },
  {
    que: `display the list of available object properties and methods`,
    ans: `VBA menu bar -> View -> Object Browser`,
  },
  {
    que: `rename a module`,
    ans: `select module -> Properties window -> change name`,
  },
  {
    que: `view step by step execution of your code`,
    ans: `VBA menu bar -> Debug -> Step Into OR f8`,
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
  {
    que: `open a closed workbook`,
    ans: (
      <>
        <p>
          Workbooks.Open Filename:="C:\Users\Samuel\Desktop\sales data.xlsx"
        </p>
      </>
    ),
  },
  {
    que: `reference or perform an action in the sheet of an opened workbook which is currently not the active one`,
    ans: (
      <>
        <p>Workbooks("sales data.xlsx").Sheets(1).Range("a2:c5") = "music"</p>
        <p>
          Workbooks("sales data.xlsx").Sheets("classA").Range("a2:c5") = "genre"
        </p>
      </>
    ),
  },
  {
    que: `save a workbook using save and saveAs`,
    ans: (
      <>
        <p>Workbooks("sales data.xlsx").Save</p>
        <p>
          Workbooks("sales data.xlsx").SaveAs
          Filename:="C:\Users\Samuel\Desktop\sales data cleaned.xlsx"
        </p>
        <p>
          'NB: when a file called eg. fileA.xlsx is savedAs fileB.xlsx, the
          opened workbook which was called fileA.xlsx changes name to fileB.xlsx
          and therefore when you later close the file you need to close
          fileB.xlsx. The old fileA.xlsx is closed but still exists as a file on
          the pc.
        </p>
      </>
    ),
  },
  {
    que: `close a workbook`,
    ans: (
      <>
        <p>Workbooks("sales data cleaned.xlsx").Close</p>
      </>
    ),
  },
  {
    que: `delete a workbook`,
    ans: (
      <>
        <p>Kill ("C:\Users\Samuel\Desktop\sales_report2.xlsx")</p>
      </>
    ),
  },
  {
    que: `create a new directory/folder`,
    ans: (
      <>
        <p>MkDir ("C:\Users\Samuel\Desktop\my new folder")</p>
      </>
    ),
  },
  {
    que: `declare a variable`,
    ans: (
      <>
        <p>'declaring variables without assigning values</p>
        <p>Dim age As Byte</p>
        <p>
          'byte range: 0 to 255 (takes up 1 byte). Ideal for smaller numbers
          which you know cannot exceed 255
        </p>

        <p>Dim total3rdYrStuds As Integer</p>
        <p>'integer range: -32,768 to 32,768 (takes up 2 bytes)</p>

        <p>Dim feesPaid As Boolean</p>
        <p>'boolean range: true/false (takes up 2 bytes)</p>

        <p>Dim lastRow As Long</p>
        <p>
          'long range: -2,147,483,648 to 2,147,483,647 (takes up 4 bytes). Ideal
          for storing data such as the total number of rows excel can handle
        </p>

        <p>Dim newBook As Workbook</p>
        <p>Dim newsheet As Worksheet</p>
        <p>Dim newWorkSheet As Object</p>
        <p>
          'declaring object variable. Takes up 4 bytes. Ideal for storing
          objects like ranges, sheets, workbooks
        </p>

        <p>Dim score As Double</p>
        <p>
          'takes up 8 bytes. Ideal for storing values with high precisions such
          as %,heights
        </p>

        <p>Dim dob As Date</p>
        <p>'takes up 8 bytes</p>

        <p>Dim itemCost As Currency</p>
        <p>'takes up 8 bytes. Holds values up to 4 decimal places</p>

        <p>Dim fName As String</p>
        <p>'takes up 1 byte per char</p>

        <p>Dim totalFollowers As Variant</p>
        <p>
          'ideal for variables whose type can change and variales which can be
          null
        </p>

        <p>Dim id</p>
        <p>
          'no datatype specified automatically defines it as variant which takes
          more space
        </p>

        <p>'assigning vlaues</p>
        <p>age = 26</p>
        <p>
          Let lastRow = Rows.Count 'let can also be used to assign values but is
          optional
        </p>
        <p>
          Set newsheet = ActiveSheet 'to assign variables/values to objects you
          need the Set statement
        </p>
        <p>Range("b3") = fName</p>
        <p>Range("b4") = fName & " " & age</p>
        <p>MsgBox feesPaid</p>

        <p>'declaring and assigning</p>
        <p>gender = "male"</p>

        <p>'declaring multiple variables</p>
        <p>Dim a, b, i as Integer</p>
      </>
    ),
  },
  {
    que: `iterate with a for loop`,
    ans: (
      <>
        <p> Dim count As Integer</p>

        <p>
          For count = 1 To 10 Step 2 'Step X is optional and used to change
          increment value
        </p>
        <p>Cells(count, 2).Value = "row" & " " & count</p>
        <p>Next</p>

        <p>Range("d5") = "some random text"</p>
      </>
    ),
  },
  {
    que: `iterate with a for loop decreasing iteration value at each step`,
    ans: (
      <>
        <p>Dim count As Integer</p>

        <p>For count = 10 To 1 Step -1</p>
        <p>Range("c5") = count</p>
        <p>Next count 'adding iteration variable beside Next is optional</p>
      </>
    ),
  },
  {
    que: `loop through a collection of objects of similar type. NB: use For Each loop`,
    ans: (
      <>
        <p>Dim count As Object </p>
        <p>
          'NB: we used an object/variant datatype because the variable is going
          to store an object, ie. the worksheets
        </p>

        <p>For Each count In ThisWorkbook.Sheets</p>
        <p>Cells(1, 1) = count.Name</p>
        <p>
          'NB: We are looping through ThisWorbook.Sheets which is an object
          array. The object has a key called Name, hence we call it like a
          key-pair value.
        </p>
        <p>Next count</p>
      </>
    ),
  },
  {
    que: `iterate with a do while loop`,
    ans: (
      <>
        <p>Dim count As Integer</p>
        <p>count = 1</p>

        <p>Do While count {"<"} 5</p>
        <p>Range("b5") = count</p>
        <p>count = count + 1</p>
        <p>Loop</p>
      </>
    ),
  },
  {
    que: `iterate with a do until loop`,
    ans: (
      <>
        <p>Dim count As Integer</p>
        <p>count = 1</p>

        <p>Do Until count {">"} 5</p>
        <p>Range("b5") = count</p>
        <p>count = count + 1</p>
        <p>Loop</p>
      </>
    ),
  },
  {
    que: `handle an error in your code by skipping the error line rather than aborting program`,
    ans: (
      <>
        <p> On Error Resume Next 'this skips error lines</p>
        <p>Range("a1") = "food"</p>
        <p>MsgBox "a" + 10 'this is an error</p>
        <p>Range("b1") = "item"</p>
      </>
    ),
  },
  {
    que: `handle an error in your code by prompting user or performing a task if the error occurs`,
    ans: (
      <>
        <p>Sub test()</p>

        <p>
          On Error GoTo myerrorlabel 'this goes to the abc label defined below
          if there is an error
        </p>
        <p>Range("a1") = "food"</p>
        <p>MsgBox "a" + 10 'this is an error</p>
        <p>Range("b1") = "item"</p>

        <p>'if code run without any errrors</p>
        <p>Done:</p>
        <p>Exit Sub</p>

        <p>'if there was an error</p>
        <p>myerrorlabel:</p>
        <p>MsgBox "incorrect concatenation"</p>
        <p>End Sub</p>
      </>
    ),
  },
  {
    que: `track the value of your local variables and iteration values in loops`,
    ans: (
      <>
        <p>'Tracking value of all local variables incl iteration variables</p>
        <p>
          click 'Locals Window' from the vba toolbar menu. If not present in
          toolbar menu: VBA menu bar {"->"} View {"->"} Toolbars {"->"}
          Customize {"->"} Commands tab {"->"} select View inside Categories
          list {"->"} inside Commands list, drag 'Locals Window' into toolbar
          menu
        </p>

        <p>
          'Tracking a specific local variable or iteration variable with the use
          of Watch feature:
        </p>
        <p>
          vba menu bar {"->"} Debug {"->"} Add Watch {"->"} enter variable
          inside the Expression input field
        </p>
      </>
    ),
  },
  {
    que: `write a simple IF statement without Else `,
    ans: (
      <>
        <p> If Range("c1") {">"} 5 Then</p>
        <p>Range("d1") = "more"</p>
        <p>End If</p>
      </>
    ),
  },
  {
    que: `write an example code utilizing comparison and logical operators`,
    ans: (
      <>
        <p>Comparison: {"=, <>(not equal to), <, >, <=, >="} </p>
        <p>Logical operators: AND, OR, NOT, XOR(T if exactly A or B is T)</p>
      </>
    ),
  },
  {
    que: `write a simple IF ELSE statement`,
    ans: (
      <>
        <p>If Range("c1") {">"} 5 Then</p>
        <p>Range("d1") = "more"</p>
        <p>Else</p>
        <p>Range("d1") = "less"</p>
        <p>End If</p>
      </>
    ),
  },
  {
    que: `write a simpe elseif statement`,
    ans: (
      <>
        <p>If Range("c1") = "male" And Range("c2") {">"} 50 Then</p>
        <p>Range("d1") = "M"</p>
        <p>ElseIf Range("c1") = "female" Or Range("c2") {"<>"} 5 Then</p>
        <p>Range("d1") = "F"</p>
        <p>ElseIf Range("c1") = "non-binary" Then</p>
        <p>Range("d1") = "Non"</p>
        <p>Else</p>
        <p>Range("d1") = "lgbtq"</p>
        <p>End If</p>
      </>
    ),
  },
  {
    que: `write a code to loop through cells in a range/col/row and 
  perform a task based on condition. Eg loop through a range of subject scores
  and assign grade letter for each score`,
    ans: (
      <>
        <p>'1. for loop method</p>
        <p>Dim i As Integer</p>

        <p>For i = 2 To 5</p>
        <p>If Cells(i, 2).Value {">="} 80 Then</p>
        <p>Cells(i, 3).Value = "Distinction"</p>
        <p>
          ElseIf Cells(i, 2).Value {">="} 70 And Cells(i, 2).Value {"<"} 80 Then
        </p>
        <p>Cells(i, 3).Value = "Pass"</p>
        <p>Else</p>
        <p>Cells(i, 3).Value = "Fail"</p>
        <p>End If</p>
        <p>Next i</p>

        <p>'2. for each method</p>
        <p>Dim myRange As Range</p>
        <p>Dim cell As Range</p>
        <p>Set myRange = Range("b2:b5")</p>

        <p>For Each cell In myRange</p>
        <p> If cell.Value {">="} 80 Then</p>
        <p>cell.Value = "Distinction"</p>
        <p>
          ElseIf cell.Value {">="} 70 And cell.Value {"<"} 80 Then
        </p>
        <p>cell.Value = "Pass"</p>
        <p>Else</p>
        <p>cell.Value = "Fail"</p>
        <p>End If</p>
        <p>Next cell</p>
      </>
    ),
  },
  {
    que: `write a select case statement`,
    ans: (
      <>
        <p>Dim choice As Integer</p>
        <p>Dim count As Integer</p>
        <p>choice = InputBox("enter option")</p>

        <p>Select Case choice</p>
        <p>Case 1: MsgBox "abcd"</p>
        <p>Case 2: Range("f1") = "Country"</p>
        <p>Range("f2:h6") = "UK"</p>
        <p>Case 3: For count = 1 To 5</p>
        <p>Cells(count, 7).Value = "USA"</p>
        <p>Next count</p>
        <p>Case Else: MsgBox "choice not in list"</p>
        <p>End Select</p>
      </>
    ),
  },
  {
    que: `use message box to display string value, number, date`,
    ans: (
      <>
        <p>MsgBox "damn"</p>
        <p>MsgBox 40</p>
        <p>MsgBox #2/28/2001#</p>
      </>
    ),
  },
  {
    que: `add title to message box`,
    ans: (
      <>
        <p>MsgBox "hello", vbAbortRetryIgnore, "My title"</p>
      </>
    ),
  },
  {
    que: `display the variations of button options in message boxes`,
    ans: (
      <>
        <p>'OK, Cancel options</p>
        <p>MsgBox "hello", vbOKCancel</p>
        <p>MsgBox "hello", 1</p>

        <p>'Abort, Retry, Ignore options</p>
        <p>MsgBox "hello", vbAbortRetryIgnore</p>
        <p>MsgBox "hello", 2</p>

        <p>'Yes, No, Cancel options</p>
        <p>MsgBox "hello", vbYesNoCancel</p>
        <p>MsgBox "hello", 3</p>

        <p>'Yes, No options</p>
        <p>MsgBox "hello", vbYesNo</p>
        <p>MsgBox "hello", 4</p>

        <p>'Retry, Cancel options</p>
        <p>MsgBox "hello", vbRetryCancel</p>
        <p>MsgBox "hello", 5</p>

        <p>'Ok option</p>
        <p>MsgBox "hello", vbOKOnly</p>
        <p>MsgBox "hello", 6</p>
        <p>MsgBox "hello", 7</p>
        <p>MsgBox "hello", 8</p>

        <p>'error symbol message</p>
        <p>MsgBox "hello", vbCritical</p>
        <p>MsgBox "hello", 16</p>

        <p>'help symbol message</p>
        <p>MsgBox "hello", vbQuestion</p>
        <p>MsgBox "hello", 32</p>

        <p>'warning symbol message</p>
        <p>MsgBox "hello", vbExclamation</p>
        <p>MsgBox "hello", 48</p>

        <p>'information symbol message</p>
        <p>MsgBox "hello", vbInformation</p>
        <p>MsgBox "hello", 64</p>
      </>
    ),
  },
  {
    que: `how can you determine which button option a user clicks on the message box. 
    eg. if a user clicks OK, do task A, if the user clicks Cancel, do task B`,
    ans: (
      <>
        <p>
          'this example uses the [Abort, Retry, Ignore] button options in a
          message box
        </p>
        <p>
          'step 1: fetch the result of the msgbox into a variable. NB: the
          parenthesis is required
        </p>
        <p>x = MsgBox("hello", vbAbortRetryIgnore)</p>

        <p>
          'step 2: each button options of the message box is assigned a unique
          number. We can tell the number for each by printing the value of the
          option clicked
        </p>
        <p>Range("d2") = x</p>
        <p>
          'in this case we see that Abort is assigned 3, Retry = 4 and Ignore =
          5
        </p>

        <p>
          'step 3: we can then use the unique value of each button option to
          perform a task eg.
        </p>
        <p>Select Case x</p>
        <p>Case 3: Range("e2") = "abort option was clicked"</p>
        <p>Case 4: Range("e2") = "retry option was clicked"</p>
        <p>Case 5: Range("e2") = "ignore option was clicked"</p>
        <p>End Select</p>
      </>
    ),
  },
  {
    que: `obtain data from a user through an input box`,
    ans: (
      <>
        <p>x = InputBox("Enter data")</p>
        <p>Range("d2") = x</p>

        <p>
          'customizing input box: NB: '200, 200 represent the x and y position
          of the input box prompt on the screen
        </p>
        <p>
          x = InputBox("Enter data", "input box title", "placeholder", 200, 200)
        </p>
      </>
    ),
  },
  {
    que: `what is the total number of rows and columns in the worksheet. ie. the max for each`,
    ans: (
      <>
        <p>Range("h2") = Rows.count</p>
        <p>Range("h3") = Columns.count</p>
      </>
    ),
  },
  {
    que: `execute an excel function eg. trim, left, etc. using vba code instead`,
    ans: (
      <>
        <p>'assigning sample data for test</p>
        <p>Range("A1") = " book"</p>
        <p>Range("A2") = 3</p>
        <p>Range("A3") = 12</p>
        <p>Range("A4") = "Dr. Woods"</p>
        <p>Range("A5") = 10</p>

        <p>'trim()</p>
        <p>Range("C1") = Trim(Range("A1"))</p>

        <p>'upper</p>
        <p>Range("C2") = UCase(Range("A1"))</p>

        <p>'left()</p>
        <p>Range("C3") = Left(Range("A4"), 3)</p>
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
  {
    que: `perform an action on the entire data in the worksheet. eg. change the font of the worksheet data`,
    ans: null,
  },
  {
    que: `count the length of a range ie. number of cells in a range whether column range or table range`,
  },
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
