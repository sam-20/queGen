export const EF = [
  { que: `remove white spaces from data`, ans: `TRIM` },
  { que: `capitalize the first letter of every word`, ans: `PROPER` },
  { que: `capitalize every letter`, ans: `UPPER` },
  { que: `convert every letter to small letters`, ans: `LOWER` },
  { que: `display the number of characters in cell incl. space`, ans: `LEN` },
  { que: `extract the first n characters of a cell value`, ans: `LEFT` },
  { que: `extract the last n characters of a cell value`, ans: `RIGHT` },
  { que: `extract the n characters inside a cell content`, ans: `MID` },
  { que: `extract text from the end of a text string`, ans: `TEXTAFTER` },
  { que: `join multiple cell values`, ans: `CONCAT or &` },
  {
    que: `split a column data into separate cell values. eg. split the customer name column into first name and last name colums`,
    ans: `First insert the empty columns to store the splitted values.Lets assume
    you want to split the fullName column into firstName and lastName columns.
    If at the end you want to have something like fullName, firstName, lastName without
    overwriting the fullName data, then insert 2 cols after the fullName col to hold firstName
    and lastName. However, if you want to have overwrite the fullName col and only 
    have firstName and lastName, then you insert only 1 col after fullName to hold the
    lastName since firstName will overwrite the fullName col. After inserting, 
    highlight col to split -> Data tab -> Data Tools group -> Text to Columns
    `,
  },
  {
    que: `activate the clipboard. NB: this allows you to save a list of copied item and simply select which one you want when pasting`,
    ans: `Home tab -> Clipboard group -> clipboard icon at bottom right corner of Clipboard group`,
  },
  {
    que: `display the position number of a case-sensitive character in a cell`,
    ans: `FIND(char_to_find, text_to_search_in)`,
  },
  {
    que: `display the position number of a case-insensitive character in a cell`,
    ans: `SEARCH(char_to_find, text_to_search_in)`,
  },
  {
    que: `add prefix to cell`,
    ans: `eg. adding Mr. to all names becomes =('Mr' & ' ' & B2)`,
  },
  {
    que: `add suffix to cell eg. adding domain to all usernames`,
    ans: `'B2' & '@gmail.com'`,
  },
  {
    que: `replace a number of characters in a cell`,
    ans: `REPLACE(text_to_replace,starting_postion_numbering_from_1,num_chars_to_replace,new_text)`,
  },
  {
    que: `replace a portion of existing text or character in a cell`,
    ans: `SUBSTITUTE`,
  },
  {
    que: `repeat a character(s) a given number of times in a cell. eg. replace ab in the cell with ababab`,
    ans: `REPT(text, num_times)`,
  },
  {
    que: `convert a number formatted as text to allow it to be recognised as a number`,
    ans: `VALUE(A2)`,
  },
  {
    que: `generate random whole numbers`,
    ans: `ROUND(RAND()*35,0) where 35 can be replaced with any number`,
  },
  {
    que: `generate random whole numbers within a range`,
    ans: `RANDBEETWEEN()`,
  },
  { que: `generate random decimal number`, ans: `RAND()` },
  {
    que: `generate random decimals within a range`,
    ans: `RAND()*[diff btn lower and upper bound value]+[lowerboundvalue]`,
  },
  {
    que: `generate a list of random values from a given set of cell values`,
    ans: (
      <>
        <p>Assuming list of values to choose from are in Range(A1:A6)</p>
        <p>{`=INDEX(A1:A6,RANDBETWEEN(1,COUNTA(A1:A6)))`}</p>
      </>
    ),
  },
  {
    que: `count numerical cells in a range`,
    ans: (
      <>
        <p>=COUNT(A1:A12)</p>
        <p>
          NB: The following are counted as numbers (dates,whole numbers,
          decimals)
        </p>
      </>
    ),
  },
  {
    que: `count non-empty cells in a range`,
    ans: (
      <>
        <p>=COUNTA(A1:A12)</p>
        <p>
          NB:A cell with ONLY white spaces ie. (" ") as its value is still
          counted as non-empty. A cell is only considered empty/blank if there
          is nothing and no white spaces.
        </p>
      </>
    ),
  },
  {
    que: `count empty/blank cells in a range`,
    ans: (
      <>
        <p>=COUNTBLANK(A1:A12)</p>
        <p>
          NB: A cell with ONLY white spaces ie. (" ") as its value is not
          empty/blank
        </p>
      </>
    ),
  },
  {
    que: `count all cells in a range incl. blank and non-blank`,
    ans: (
      <>
        <p>=COUNTBLANK(A1:A12)+COUNTA(A1:A12)</p>
      </>
    ),
  },
  { que: `do cell A and B contain the same values?`, ans: `=` },
  { que: `do cell A and B contain different values?`, ans: `<>` },
  { que: `is cell A greater than B?`, ans: `>` },
  { que: `is cell A less than B?`, ans: `<` },
  { que: `is cell A greater than or equal to B?`, ans: `>=` },
  { que: `is cell A less than or equal to B?`, ans: `<=` },
  {
    que: `display a result based on the condition that cell A and B hold true`,
    ans: `AND`,
  },
  { que: `find the modulo of a number`, ans: `eg. 2 mod 5 = MOD(2,5)` },
  {
    que: `give an example of IF function`,
    ans: `IF(M6="shite","correct","false")`,
  },
  {
    que: `give an example of nested IF function`,
    ans: `IF(LEFT(M5,1)="E",IF(LEN(M5)=7,"ewallet","other"),"not E")`,
  },

  { que: `display the opposite of TRUE or FALSE outputs`, ans: `=NOT(N7=B7)` },
  {
    que: `catch an error that could be thrown by a condition not met`,
    ans: `=IFERROR(E5+1,"cannot sum number and string")`,
  },
  {
    que: "generate an auto increment of numbers using a function",
    ans: "sequence",
  },
  {
    que: `generate an auto increment of numbers in a column/row using shortcut`,
    ans: `select that cell of the first value / the current value where you want to continue from -> ALT + H, F, I, S`,
  },
  {
    que: `generate an auto increment of dates given start and end dates`,
    ans: `Excel Dictionary - How to create a date series with a start and end date`,
  },
  {
    que: `calculate the sum of values in a range A which meet a certain condition in that same range A`,
    ans: `(1 col under consideration): SUMIF with 2 args`,
  },
  {
    que: `calculate the sum of values in a range A which meet a certain condition in another range B`,
    ans: `(2 cols under consideration): SUMIF with 3 args`,
  },
  {
    que: `calculate the sum of values in a range A which meet a certain condition in multiple ranges B, C, D, etc.`,
    ans: `(3+ cols under consideration): SUMIFS`,
  },
  {
    que: `find the sum of values in range/column A where range/column A satisfies a condition`,
    ans: `(1 col under consideration): SUMIF with 2 args`,
  },
  {
    que: `find the sum of values in range/column A where range/column B satisfies a condition`,
    ans: `(2 cols under consideration): SUMIF with 3 args`,
  },
  {
    que: `find the sum of values in range/column A where range/column B, C and D etc. satisifies a condition`,
    ans: `(3+ cols under consideration): SUMIFS`,
  },
  {
    que: `find the total x in column Z where x=abc`,
    ans: `(1 col under consideration): SUMIF with 2 args`,
  },
  {
    que: `find the total x in column Z where column A=abc`,
    ans: `(2 cols under consideration): SUMIF with 3 args`,
  },
  {
    que: `find the total x in column Z where column A=abc and column B=def`,
    ans: `(3+ cols under consideration): SUMIFS`,
  },
  {
    que: `how many cells in range A meet a certain condition in that range A`,
    ans: `(1 col under consideration): COUNTIF`,
  },
  {
    que: `find the total number of x in column Z where column A=abc and column B=def`,
    ans: `(2+ cols under consideration): COUNTIFS`,
  },
  {
    que: `find the number of x in column Z where x=abc`,
    ans: `(1 col under consideration): COUNTIF`,
  },
  {
    que: `calculate the average of values in a range A which meet a certain condition in that same range A`,
    ans: `(1 col under consideration): AVERGEIF with 2 args`,
  },
  {
    que: `calculate the average of values in a range A which meet a certain condition in another range B`,
    ans: `(2 cols under consideration): AVERGEIF with 3 args`,
  },
  {
    que: `calculate the average value in a range A which meet a certain condition in multiple ranges B, C, D, etc.`,
    ans: `(3+ cols under consideration): AVERAGEIFS`,
  },
  {
    que: `find the average value in range/column A where range/column A satisfies a condition`,
    ans: `(1 col under consideration): AVERAGEIF with 2 args`,
  },
  {
    que: `find the average value in range/column A where range/column B satisfies a condition`,
    ans: `(2 cols under consideration): AVERAGEIF with 3 args`,
  },
  {
    que: `find the average value in range/column A where range/column B, C and D etc. satisifies a condition`,
    ans: `(3+ cols under consideration): AVERAGEIFS`,
  },
  {
    que: `find the average x in column Z where x=abc`,
    ans: `(1 col under consideration): AVERAGEIF with 2 args`,
  },
  {
    que: `find the average x in column Z where column A=abc`,
    ans: `(2 cols under consideration): AVERAGEIF with 3 args`,
  },
  {
    que: `find the average x in column Z where column A=abc and column B=def`,
    ans: `(3+ cols under consideration): AVERAGEIFS`,
  },
  {
    que: `how do you reference an entire column/row without the header column/row`,
    ans: (
      <>
        <p>eg. all column C data except header {"->"} C:C,C1</p>
        <p>eg. all row 3 data except header {"->"} 3:3,A3</p>
      </>
    ),
  },
  {
    que: `how do you reference multiple entire columns/rows without their header column/row`,
    ans: (
      <>
        <p>
          eg. converting data in column A and B to upper without affecting
          column headers
        </p>
        <p>=UPPER(A:A,A1,B:B,B1)</p>
      </>
    ),
  },
  {
    que: `utilise any formula that takes a parameter as a single value located in another worksheet`,
    ans: (
      <>
        <p>
          To reference data in another worksheet, first take note of that
          worksheet's name
        </p>
        <p>if name is default sheet name eg. Sheet1, Sheet2, Sheet7</p>
        <p>Sheet2!A1 --reference cell</p>
        <p>Sheet2!A1:D4 --reference range</p>
        <p>Sheet2!C:C --reference column</p>
        <p>Sheet1!C:C,Sheet1!C1 --reference column data except header</p>
        <p>Sheet2!3:3 --reference row</p>

        <p>if name is custom sheet name eg. "Students", "sales unclean"</p>
        <p>'Students'!D2 --reference cell</p>
        <p>'sales unclean'!A1:D4 --reference range</p>
        <p>'sales unclean'!C:C --reference column</p>
        <p>
          'sales unclean'!C:C,'sales unclean'!C1 --reference column data except
          header
        </p>
        <p>'sales unclean'!3:3 --reference row</p>
      </>
    ),
  },
  {
    que: `utilise any formula that takes a parameter as a range of values/column located in another worksheet`,
    ans: (
      <>
        <p>=UPPER('students data'!A1:B3)</p>
      </>
    ),
  },
  {
    que: `utilise any formula that should take an entire column data in worksheet A and produce an entire column result in worksheet B.
    eg. extract all the days from a date column in worksheet A to worksheet B`,
    ans: null,
  },
  {
    que: `reference a cell/range/table that has a name`,
    ans: (
      <>
        <p>
          NB:referencing cell/range/table is the same regardless same workheet
          or another worksheet.Because the name is always unique
        </p>
        <p>=2*taxRate --cell named as taxRate</p>
        <p>=2*scores_table --table named as scores_table</p>
      </>
    ),
  },
  { que: `display today's date`, ans: `TODAY or Ctrl+;` },
  { que: `display the current time`, ans: `Ctrl+Shift+;` },
  { que: `display the date in the next n days`, ans: `TODAY()+n` },
  { que: `display the date in the previous n days`, ans: `TODAY()-n` },
  { que: `display today's date and current time`, ans: `NOW` },
  { que: `extract the day number from a given date`, ans: `DAY` },
  { que: `extract the month number from a given date`, ans: `MONTH` },
  { que: `extract the year from a given date`, ans: `YEAR` },
  { que: `create a date using a formula`, ans: `DATE` },
  { que: `add n days to today's date`, ans: `TODAY()+n` },
  { que: `subtract n days from today's date`, ans: `TODAY()-n` },
  { que: `add n days to a date`, ans: `date + n` },
  { que: `subtract n days from a date`, ans: `date - n` },
  { que: `add n months to a date`, ans: `EDATE(date,no of months)` },
  {
    que: `subtract n months from a date`,
    ans: `EDATE(date,negative value of the no of months)`,
  },
  {
    que: `add n years to a date`,
    ans: `EDATE(date, no of years*12)`,
  },
  {
    que: `subtract n years from a date`,
    ans: `EDATE(negative value of the no of years*12)`,
  },
  {
    que: `what is the number of working days ie.(excl. Sat & Sun) or weekdays between 2 dates not considering holidays`,
    ans: `NETWORKDAYS with 2 args ie. NETWORKDAYS(start_date, end_date)`,
  },
  {
    que: `what is the number of working days ie.(excl. Sat & Sun) or weekdays between 2 dates and considering holidays`,
    ans: `NETWORKDAYS with 3 args ie. NETWORKDAYS(start_date, end_date, range containing holiday dates). NB: use the range of holiday dates not the number of holidays because we dont know if the holiday might fall on a Sat or Sun`,
  },
  {
    que: `what is the number of working days when we have our own defined weekend/off-days instead of the regular Sat and Sun`,
    ans: `NETWORKDAYS.INTL`,
  },
  {
    que: `change the format for a given date to your own custom format. eg. Monday or Mon-23, 23 Mon 2023, etc`,
    ans: `Right click date cell -> Format cells -> Number tab -> select Custom from Category list -> enter your custom format in the Type input`,
  },
  {
    que: `calculate someone's age (in years) from their date of birth`,
    ans: `DATEDIF(DOB/start_Date, today's date/end_Date, "Y")`,
  },
  {
    que: `calculate someone's age (in months) from their date of birth`,
    ans: `DATEDIF(DOB/start_Date, today's date/end_Date, "M")`,
  },
  {
    que: `calculate someone's age (in days) from their date of birth`,
    ans: `DATEDIF(DOB/start_Date, today's date/end_Date, "D")`,
  },
  { que: `generate a list of random dates within a given period`, ans: null },
  {
    que: `sum all the numbers in a range without entering a formula`,
    ans: `Alt+=`,
  },
  {
    que: `display formulas instead of results in the worksheet`,
    ans: "Ctrl+` (accent key)",
  },
  { que: `flash fill a range`, ans: `Ctrl+e` },
  { que: `View the endpoints of your data range/table`, ans: `Ctrl+.` },
  {
    que: `Undo a cell range formatted as table. In other words, convert a table into an array/range`,
    ans: `Right click any cell -> Table -> Convert to Range`,
  },
  {
    que: `While in the current workbook, load its current table/range data directly into power query without using 'Get Data'
    and having to go browse and select the excel file`,
    ans: `select any data cell/highlight entire data -> right click -> Get Data from Table/Range`,
  },
  {
    que: `Add filter options to a cell range not formatted as table`,
    ans: `Data tab -> Sort & Filter group -> Filter`,
  },
  {
    que: `resize a table`,
    ans: `select table -> Table Design tab -> Properties group -> Resize Table`,
  },
  {
    que: `retrieve the column number of a cell or entire column`,
    ans: (
      <>
        <p>COLUMN(B:B)</p>
        <p>COLUMN(C4)</p>
      </>
    ),
  },
  {
    que: `retrieve the row number of a cell or entire row`,
    ans: (
      <>
        <p>=ROW(3:3)</p>
        <p>ROW(C4)</p>
      </>
    ),
  },
  {
    que: `retrieve the number of rows/columns in an array or table`,
    ans: (
      <>
        <p>=ROWS(A3:D6)</p>
        <p>=COLUMNS(A3:F6)</p>
      </>
    ),
  },
  {
    que: `Add custom lists for autofill in excel`,
    ans: `File menu -> Options -> Advanced menu -> General menu -> Edit Custom Lists`,
  },
  {
    que: `Freeze pane`,
    ans: `Click row underneath column headers -> View tab -> Window group -> Freeze Panes -> Freeze Panes`,
  },
  {
    que: `split data (easy way of freezing column headers or portion of data so you can scroll
      through the others)`,
    ans: `Click row underneath column headers or where you want split to begin -> View tab -> Window group -> Split`,
  },
  {
    que: `Make same change across worksheets containing same data`,
    ans: `Hold Ctrl and select worksheet tabs below -> make change to one cell -> check to ensure it’s applied across other worksheets.`,
  },
  {
    que: `sort a table by multiple criteria`,
    ans: `Select table -> Data tab -> Sort & Filter group -> Sort`,
  },
  {
    que: `add a table to the data model`,
    ans: `select cell in the table -> Power Pivot tab -> Tables group -> Add to Data Model`,
  },
  {
    que: `import pivot table from the data model`,
    ans: `Insert tab -> Tables group -> Pivot Table -> From Data Model`,
  },
  {
    que: `create a pivot chart from your pivot table`,
    ans: (
      <>
        <p>
          select created pivot table {"->"} PivotTable Analyze tab {"->"} Tools
          group {"->"} Pivot Chart
        </p>
      </>
    ),
  },
  {
    que: `create, update or delete relationships between tables in a data model`,
    ans: `Data tab -> Data Tools group -> Relationships OR 	Power Pivot tab -> Data Model group -> Manage`,
  },
  {
    que: `how would you differentiate two columns with numbers but one formatted as a number and the other formatted as a text`,
    ans: `text formatted values would appear on the left, number formmated values would appear on the right`,
  },
  {
    que: `search for an item's corresponding value in another column B using vlookup exact match`,
    ans: (
      <>
        <p>
          vlookup([whose value are we searching for ie. lookup value], [in which
          table are we searching], [the item we want to pull out, what is its
          column number starting from 1?], [do we want the exact match for that
          lookup value ie. FALSE or we want an approximate match ie. TRUE])
        </p>
        <p>Shortcut for vlookup parameters: ltcm</p>
        <p>l - lookup value</p>
        <p>t - table</p>
        <p>c - column number starting from 1</p>
        <p>m - match type ie. approx or exact</p>
      </>
    ),
  },
  {
    que: `a col A has corresponding values in col B. what will be the col B value of an item which is not in col A but falls inside the range of values in A`,
    ans: `vlookup with approximate match.`,
  },
  {
    que: `search for an item's corresponding value using xloookup`,
    ans: (
      <>
        <p>
          xlookup([whose value are we searching for ie. lookup value], [in which
          array is the lookup value located], [the item we want to pull out,
          what is its array])
        </p>
        <p>Shortcut for xlookup parameters: lv,lva,fra</p>
        <p>lv- lookup value</p>
        <p>lva - lookup value array</p>
        <p>fra - final result's array</p>
      </>
    ),
  },
  {
    que: `search for an item's match using hlookup`,
    ans: `Same syntax as vlookup. However, we used vlookup because 
    we were searching for a result which was 
    inside a range laid out vertically. 
    We use hlookup when the value we want to return is 
    inside a range laid out horizontally
  `,
  },
  {
    que: `search for an item's value using the lookup function. Note. Func is Lookup`,
    ans: ``,
  },
  {
    que: `search for an item's value using the lookup full record function`,
    ans: ``,
  },
  {
    que: `find which item is inside a given position in a column of values (1 dimensional array). 
    eg. What value is inside the 20th position of the name column`,
    ans: (
      <>
        <p>INDEX(column/row range, nth item)</p>
        <p>
          NB: when specifying the column range, including or excluding the
          column header produce the same results. Because at the end of the day,
          the row number is always constant
        </p>
        <p>Eg. To find the 3rd item in a column range: {`=INDEX(A1:A6,3)`}</p>
        <p>To find the 3rd item in a row range: {`=INDEX(D6:H6,3)`}</p>
      </>
    ),
  },
  {
    que: `find which item is inside a given position in a table of values (2 dimensional array). 
    eg. What value is inside row 10, col 5 of the students table`,
    ans: (
      <>
        <p>INDEX( table/range, row number, col number )</p>
        <p>
          table with or without headers dont affect results since row number and
          col number are always constant
        </p>
      </>
    ),
  },
  {
    que: `find the position of a given item in a column (1 dimensional array). eg. whats the index of Ghana in the country column`,
    ans: (
      <>
        <p>MATCH(lookup value, lookup column)</p>
        <p>the position returned is the row number of the item</p>
      </>
    ),
  },
  {
    que: `filter out the duplicate values in a column`,
    ans: (
      <>
        <p>
          Reference: https://www.excel-easy.com/examples/find-duplicates.html
        </p>
        <p>Assuming our data is in ColA</p>
        <p>
          Step1: retrieve unique values in ColA. The result is a range of
          distinct values. This is ColB
        </p>
        <p>
          Step 2: using countif: count number of times colB first item is in
          colA. Then drag down the countif result to find the counts of the
          remaining items
        </p>
      </>
    ),
  },
  {
    que: `count the number of duplicates in a column`,
    ans: `https://www.excel-easy.com/examples/find-duplicates.html`,
  },
  {
    que: `filter out the duplicate rows in table`,
    ans: `https://www.excel-easy.com/examples/find-duplicates.html`,
  },
  {
    que: `count the number of duplicate rows in a table`,
    ans: `https://www.excel-easy.com/examples/find-duplicates.html`,
  },
  {
    que: `remove duplicates in a column`,
    ans: (
      <>
        <p>
          select table {"->"} Table Design tab {"->"} Tools group {"->"} Remove
          Duplicates
        </p>
        <p>or</p>
        <p>select a cell {"-> "} ALT + A, M</p>
      </>
    ),
  },
  {
    que: `filter out the distinct values in a column`,
    ans: `UNIQUE(range excl. header)`,
  },
  {
    que: `count the number of distinct values in a column`,
    ans: (
      <>
        <p>
          first filter out the distinct values, then use countA to count the
          number of cells
        </p>
        <p>=COUNTA(UNIQUE(B10:B16))</p>
      </>
    ),
  },
  {
    que: `calculate the period between 2 times in hours. eg. hours worked between 8:30 and 4:45`,
    ans: (
      <>
        <p>`MOD(laterTime-earlierTime, 1)*24`</p>
        <p>The above formula gives the hours in decimals.</p>
        <p>How to convert decimal hours to time format</p>
        <p>Convert 2.88 hours to hh:mm:ss</p>
        <p>
          2.88 hours can be broken down to 2 hours plus 0.88 hours - 2 hours
        </p>
        <p>0.88 hours * 60 minutes/hour = 52.8 minutes - 52 minutes</p>
        <p>0.8 minutes * 60 seconds/minute = 48 seconds - 48 seconds</p>
        <p>02:52:48</p>
      </>
    ),
  },
  {
    que: `hide and unhide worksheet`,
    ans: `right click sheet tab at bottom -> Hide/Unhide`,
  },
  {
    que: `password protect worksheet`,
    ans: `right click sheet tab at bottom -> Protect Sheet`,
  },
  {
    que: `access the data validation feature`,
    ans: `Data tab -> Data Tools group -> Data Validation -> Data Validation`,
  },
  {
    que: `validate column data to contain only whole numbers/decimals/date/time`,
    ans: (
      <>
        <p>
          select the single column you want to validate {"->"} Data tab {"->"}
          Data Tools group {"->"} Data Validation {"->"} Data Validation {"->"}
          choose Whole Number/Decimal/Date/Time from validation criteria
        </p>
        <p>
          {`NB: You can select the entire column including the header for
          validation. If its affected, you can later select the header cell only
          and clear validation for it`}
        </p>
      </>
    ),
  },
  {
    que: `validate column data to contain data of a fixed length`,
    ans: `select the single column you want to validate(can include header) -> Data tab -> Data Tools group -> Data Validation -> Data Validation -> choose Text Length from validation criteria`,
  },
  {
    que: `validate column data to ensure user can enter one of a given/predefined set of values`,
    ans: (
      <>
        <p>
          select the single column you want to validate(can include header)
          {"->"} Data tab {"->"} Data Tools group {"->"} Data Validation {"->"}
          Data Validation {"->"} choose List from validation criteria
        </p>

        <p>
          {`NB: the source for your List can be an existing range of values eg.
          =$H$1:$H$5 or you can directly enter the list items separated by comma.
          Eg. male,female,non-binary`}
        </p>
      </>
    ),
  },
  {
    que: `use a custom function to validate a column`,
    ans: (
      <>
        <p>Eg. We want our columnA(Age column) to contain only numbers</p>
        <p>
          1. The first thing to note is that our custom function should always
          return a final boolean output of TRUE or FALSE. In order to develop a
          function to achieve this, reframe your validation question. Eg.If the
          task is: "We want this column to accept only numbers" Reframed task
          becomes:"If we put the column value inside this function and the
          function returns TRUE, then it has passed the validation else failed
          if it returns FALSE."
        </p>
        <p>
          2. Produce the TRUE/FALSE answers of your custom function next to the
          target column. Eg. ColumnA(the target column) is what we want to
          validate, we therefore insert columnB next to it which gives the
          TRUE/FALSE answers of our validation function applied on ColumnA. The
          function for our task in this case would therefore be:
          {`=ISNUMBER(VALUE(A2))`}
          Also note that for our custom function we use the actual cell
          reference of the cell. Using an assigned name such as
          {`=ISNUMBER(VALUE([@Age]))`} would generate the TRUE/FALSE values
          correctly, however would produce an error when this name is finally
          pasted into the validation input box
        </p>
        <p>
          3. If you are getting the correct TRUE/FALSE values next to the target
          column, copy the function of only the first cell to the clipboard ie.
          {`=ISNUMBER(VALUE(A2))`}. So you'd notice that even though we want to
          validate an entire columnA, we might want our custom function to be
          something like {`=ISNUMBER(VALUE(A:A))`} However, this doesnt work and
          the correct function to use is the function of the first value inside
          columnB's TRUE/FALSE values which is {`=ISNUMBER(VALUE(A2))`}. Also
          remember we copy the function for B2 and not B1 because
          B1=columnheader
        </p>
        <p>
          4. Select the single column you want to validate(NB:!! SELECT WITHOUT
          COLUMN HEADER ELSE VALIDATION WONT WORK).
        </p>
        <p>
          Data tab {"->"} Data Tools group {"->"} Data Validation {"->"}
          Data Validation {"->"} choose Custom from validation criteria {"->"}
          paste custom function inside the formula box for validation ie.
          {`=ISNUMBER(VALUE(A2))`}
        </p>
        <p>
          5. Now you can delete the column used to generate the TRUE/FALSE
          values
        </p>
        <p>
          6. Always remember that the custom formula you use for validation is
          the same formula you'd use to apply conditional formatting provided
          its the same column. In the end, the formula entered in the
          validation/conditional formatting input box should always return TRUE.
          The only difference is, one would apply formatting where TRUE, the
          other would give a pass validation when TRUE
        </p>
      </>
    ),
  },
  {
    que: `use a custom function to apply conditional formatting to a column`,
    ans: (
      <>
        <p>
          Eg. We want our columnA(Age column) to have bold red font if the age
          {">"} 20
        </p>
        <p>
          1. The first thing to note is that our custom function should always
          return a final boolean output of TRUE or FALSE. In order to develop a
          function to achieve this, reframe your validation question. Eg.If the
          task is: "We want this column to have a bold red font for ages {">"}
          20. Reframed task becomes:"If we put the column value inside this
          function and the function returns TRUE, then it should be formatted
          else no formatting if it returns FALSE."
        </p>
        <p>
          2. Produce the TRUE/FALSE answers of your custom function next to the
          target column. Eg. ColumnA(the target column) is what we want to apply
          conditional formatting to, we therefore insert columnB next to it
          which gives the TRUE/FALSE answers of custom function applied on
          ColumnA. The function for our task in this case would therefore be:
          {`=VALUE(A2)>20`}
          Also note that for our custom function we use the actual cell
          reference of the cell. Using an assigned name such as
          {`=VALUE([@Age])>20`} would generate the TRUE/FALSE values correctly,
          however would produce an error when this name is finally pasted into
          the custom formatting formula box
        </p>
        <p>
          3. If you are getting the correct TRUE/FALSE values next to the target
          column, copy the function of only the first cell to the clipboard ie.
          {`=VALUE(A2)>20`}. So you'd notice that even though we want to apply
          formatting to entire columnA, we might want our custom function to be
          something like {`=VALUE(A:A)>20`} However, this doesnt work and the
          correct function to use is the function of the first value inside
          columnB's TRUE/FALSE values which is {`=VALUE(A2)>20`}. Also remember
          we copy the function for B2 and not B1 because B1=columnheader
        </p>
        <p>
          4. Select the single column you want to apply conditional formatting
          to (NB:!! SELECT WITHOUT COLUMN HEADER ELSE VALIDATION WONT WORK)
        </p>
        <p>
          Home tab {"->"} Styles group {"->"} Conditional Formatting {"->"} New
          Rule{"->"} under Select Rule Type choose "Use A Formula To Determine
          Which Cells To Format" {"->"}
          Paste custom function inside the formula box for formatting ie.
          {`=VALUE(A2)>20`} {"->"} Add the desired formatting
        </p>
        <p>
          5. Now you can delete the column used to generate the TRUE/FALSE
          values
        </p>
        <p>
          6. Always remember that the custom formula you use for validation is
          the same formula you'd use to apply conditional formatting provided
          its the same column. In the end, the formula entered in the
          validation/conditional formatting input box should always return TRUE.
          The only difference is, one would apply formatting where TRUE, the
          other would give a pass validation when TRUE
        </p>
      </>
    ),
  },
  {
    que: `if a column value is true for a conditional formatting formula, apply Conditional Formatting Across its Entire Row`,
    ans: (
      <>
        <p>
          After, generating the custom formula for the conditional formatting
          using the TRUE/FALSE values just like you'd do for a single column:
        </p>
        <p>
          You change only 2 things to let the formatting after a value's entire
          row
        </p>
        <p>
          1. Rather than highlighting a column without the header, this time
          highlight the array or table without their headers.
        </p>
        <p>
          2. Rather than inputting {`=VALUE(A2)>20`} in the formula box, this
          time you place $ before the cell reference that was used in the
          formula ie.
          {`=VALUE($A2)>20`}
        </p>
      </>
    ),
  },
  {
    que: `How can you get the reference of an entire column without the column header?`,
    ans: (
      <>
        <p>
          Option1: Click the column header which should highlight the entire
          column then while highlighted, click only the header cell to omit the
          header value. This gives a reference like {`A:A,A1`}. However, this
          reference does not work for all functions since it contains a comma
          because some functions treat the value after the comma as another
          parameter
        </p>
        <p>
          Option2: Click only the first cell under the column header. Then
          Ctrl+Shift+DownArrow which would highlight down to the bottom of the
          column where the last value is eg. {`A2:A31`}. Press DownArrow key the
          second time to hightlight down to the end of excel rows which gives a
          reference like {`A2:A1048576`}. Rather than scrolling all the way to
          the top of the sheet again, use Ctrl+Home to move all the way to the
          first value of the column
        </p>
      </>
    ),
  },
  {
    que: `validate column data to ensure user cannot leave cell null`,
    ans: (
      <>
        <p>
          Data tab {"->"} Data Tools group {"->"} Data Validation {"->"}
          Data Validation {"->"} Custom {"->"} =NOT(ISBLANK(A2))
        </p>
      </>
    ),
  },
  {
    que: `validate a column to prevent entering duplicate values`,
    ans: null,
  },
  {
    que: "validate a column to ensure first character is any text, followed by 4 digits",
    ans: null,
  },
  {
    que: `validate a column to ensure value contains any 2 letters and and any 2 numbers with the arrangement of characters not important`,
    ans: null,
  },
  {
    que: "write a formula to ensure a cell/column value should contain only alphabets or a specified set of characters",
    ans: (
      <>
        <p>
          1. In this example we created a formula that ensures the cell value
          contains only alphabets including upper and lower case alphabets as
          well as these 2 characters: %, 8
        </p>
        <p>
          2. We create a cell value to contains all the allowable characters. In
          this case we assign our allowable characters to cell A1. ie.
          {`A1 = ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz%8`}
        </p>
        <p>
          To check whether a cell's value eg. A2 meets the condition we use
          formula {`=AND(FIND(MID(A2,ROW(INDIRECT("1:"&LEN(A2))),1),A1))`}
          where A1 = allowed characters, A2 = cell being tested on
        </p>
        <p>The following results are produced</p>
        <p>TRUE - if A2 meets condition</p>
        <p>#VALUE - if A2 doesnt meet condition</p>
        <p>#REF - if A2 is blank</p>
        <p></p>
      </>
    ),
  },
  {
    que: `use custom conditional formatting function to highlight unique values in a column`,
    ans: (
      <>
        <p>Use formula below, assuming the target col is column A</p>
        <p>{`=NOT(COUNTIF($A$2:$A$1048576,A2) >1)`}</p>
      </>
    ),
  },
  {
    que: `use custom conditional formatting function to highlight duplicate values in a column`,
    ans: (
      <>
        <p>Use formula below, assuming the target col is column A</p>
        <p>{`=COUNTIF($A$2:$A$1048576,A2) >1`}</p>
      </>
    ),
  },
  {
    que: `highlight just a portion of your function in the formula bar
     to see the actual result that highlighted part would give`,
    ans: (
      <>
        <p>
          1. Highlight the portion of the function you want to see it's result
          in the formula bar. When higlighting, make sure you exclude the '=',
          also ensure the opening and closing brackets of the function is
          included in the highlight.
        </p>
        <p>2. Press F9 to see its result</p>
        <p>3. Press Ctrl+Z to go back</p>

        <p>
          eg. given a function like {`=IF(A3=TRUE, COUNTA(A1:A3), "errrrrrr")`}.
          I could highlight {`COUNTA(A1:A3)`} in the formula bar to see its
          result
        </p>
      </>
    ),
  },
  {
    que: `make it such that when a user is entering data into a column which has validation, 
    a tooltip appears to provide more info on the kind of data which is accepted`,
    ans: `select the column for which validation is necessary -> Data tab -> Data Tools group -> Data Validation -> Data Validation -> Input Message tab`,
  },
  {
    que: `throw an error message for when a user enters data which does not meet the validation rule`,
    ans: `select the column for which validation is necessary -> Data tab -> Data Tools group -> Data Validation -> Data Validation -> Error Alert tab`,
  },
  {
    que: `prompt a user if they enter data that does not meet the validation rule. But also give them freedom to proceed`,
    ans: (
      <>
        <p>
          For the data validation feature, the Error Alert comes in 3 options:
        </p>
        <p>Stop - would never allow you to enter the invalid data</p>
        <p>
          Warning - would ask if you still want to proceed entering invalid data
          and allow you if you click Yes
        </p>
        <p>
          Information - would notify you that your data is invalid and would
          proceed to enter data if you click Ok
        </p>
      </>
    ),
  },
  {
    que: `highlight all the data in a column which violate the valiadation rules`,
    ans: `select the column for which validation is necessary -> Data tab -> Data Tools group -> Data Validation -> Circle Invalid Data`,
  },
  {
    que: `display rows which violate a validated column`,
    ans: `click filter icon next to column header -> Number Filters -> select the option which can be used to meet your validation criteria`,
  },
  {
    que: `nest excel functions ie. use a function as one of the arguments of another function.
    Eg. if the sum of a range is > 10, count the cells, else find the average of the cells`,
    ans: (
      <>
        <p>{`=IF(SUM(A1:A3)>10,COUNTA(A1:A3),AVERAGE(A1:A3))`}</p>
        <p>
          NB:!!!! When a function is used as an argument, the nested function
          should never begin with "=". The example below is wrong and would
          produce an error
          {`=IF(=SUM(A1:A3)>10,=COUNTA(A1:A3),=AVERAGE(A1:A3))`}
        </p>
      </>
    ),
  },
  {
    que: ``,
    ans: null,
  },
  {
    que: ``,
    ans: null,
  },
  {
    que: `import data from the following formats csv, excel, txt, pdf, xlsx, sql, ms access, outlook, webpage`,
    ans: null,
  },
  {
    que: `import data from multiple formats into a single table`,
    ans: null,
  },
  {
    que: ``,
    ans: ``,
  },
];
