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
    que: `display the position number of a case-sensitive character in a cell`,
    ans: `FIND`,
  },
  {
    que: `display the position number of a case-insensitive character in a cell`,
    ans: `SEARCH`,
  },
  {
    que: `add prefix to cell`,
    ans: `eg. adding Mr. to all names becomes =('Mr' & ' ' & B2)`,
  },
  {
    que: `add suffix to cell eg. adding domain to all usernames`,
    ans: `'B2' & '@gmail.com'`,
  },
  { que: `replace a number of characters in a cell`, ans: `REPLACE` },
  {
    que: `replace a portion of existing text or character in a cell`,
    ans: `SUBSTITUTE`,
  },
  {
    que: `repeat a character(s) a given number of times in a cell. eg. replace ab in the cell with ababab`,
    ans: `REPT`,
  },
  {
    que: `generate a list of random values from a given set of texts`,
    ans: null,
  },
  {
    que: `how many cells contain only numbers`,
    ans: `COUNT: used to count number of cells in a range that contain numbers ie. (date numbers, integers, double)`,
  },
  { que: `what is the number of non-empty cells`, ans: `COUNTA` },
  { que: `what is the number of empty cells?`, ans: `COUNTBLANK` },
  { que: `how many cells contain a particular text`, ans: `COUNTIF` },
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
  { que: `find the modulo of a number`, ans: `MOD` },
  { que: `give an example of IF function`, ans: `IF` },
  { que: `give an example of nested IF function`, ans: `IF` },

  { que: `display the opposite of TRUE or FALSE outputs`, ans: `NOT` },
  {
    que: `catch an error that could be thrown by a condition not met`,
    ans: `IFERROR`,
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
    que: `utilise any formula that takes a parameter as a single value located in another worksheet`,
    ans: null,
  },
  {
    que: `utilise any formula that takes a parameter as a range of values/column located in another worksheet`,
    ans: null,
  },
  {
    que: `utilise any formula that should take an entire column data in worksheet A and produce an entire column result in worksheet B.
    eg. extract all the days from a date column in worksheet A to worksheet B`,
    ans: null,
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
    ans: `negative value of the no of years*12`,
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
    que: `retrieve the column position/number of a column`,
    ans: `COLUMN(selected column eg. B:B)`,
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
    que: `create, update or delete relationships between tables in a data model`,
    ans: `Data tab -> Data Tools group -> Relationships OR 	Power Pivot tab -> Data Model group -> Manage`,
  },
  {
    que: `how would you differentiate two columns with numbers but one formatted as a number and the other formatted as a text`,
    ans: `text formatted values would appear on the left, number formmated values would appear on the right`,
  },
  {
    que: `search for an item's corresponding value in another column B using vlookup exact match`,
    ans: `vlookup([whose value are we searching for ie. lookup value], 
      [in which table are we searching], 
      [the item we want to pull out, what is its column number starting from 1?],
       [do we want the exact match for that lookup value ie. 0 or we want an approximate match ie. 1])`,
  },
  {
    que: `a col A has corresponding values in col B. what will be the col B value of an item which is not in col A but falls inside the range of values in A`,
    ans: `vlookup with approximate match.`,
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
    ans: `INDEX(
      column range excl. header, 
      position number where we want to pull out the value ie. starting from 1)`,
  },
  {
    que: `find which item is inside a given position in a table of values (2 dimensional array). 
    eg. What value is inside row 10, col 5 of the students table`,
    ans: `INDEX(
      table range excl. headers, 
      row number where we want to pull out the value ie. starting from 1, 
      col number where we want to pull out the value ie. starting from 1 
      )`,
  },
  {
    que: `find the position of a given item in a column (1 dimensional array). eg. whats the index of Ghana in the country column`,
    ans: `MATCH(lookup value, lookup array excl. header). NB: the position returned numbering starts from 1`,
  },
  {
    que: `filter out the duplicate values in a column`,
    ans: `https://www.excel-easy.com/examples/find-duplicates.html`,
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
    ans: `first filter out the distinct values, then use countif to count their totals`,
  },
  {
    que: `calculate the period between 2 times in hours. eg. hours worked between 8:30 and 4:45`,
    ans: (
      <>
        <p>`MOD(timeOut-timeIn, 1)*24`</p>
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
    que: `import data from the following formats csv, txt, pdf, xlsx, sql, etc.`,
    ans: null,
  },
  {
    que: ``,
    ans: ``,
  },
];
