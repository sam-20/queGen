export const PQ = [
  {
    que: `close and reopen the query settings pane (where you applied steps are listed)`,
    ans: `View tab -> Layout group -> Query Settings`,
  },
  {
    que: `merge data in multiple columns`,
    ans: ` Add Column tab -> From Text group -> Merge Columns`,
  },
  {
    que: `split column data into multiple columns`,
    ans: `Transform tab -> Text Column group -> Split Column`,
  },
  {
    que: `trim data`,
    ans: `Transform tab -> Text Column group -> Format -> Trim`,
  },
  {
    que: `convert data to upper, lower, proper case`,
    ans: `Add Column tab -> From Text group -> Format -> Uppercase/Lowercase/Capitalize each word`,
  },
  {
    que: `add suffix and prefix to column data`,
    ans: `Add Column tab -> From Text group -> Format -> Add Prefix/Add Suffix`,
  },
  {
    que: `extract the left, right and mid of column data`,
    ans: `Add Column tab -> From Text group -> Extract -> First Characters/Last Characters/Range`,
  },
  {
    que: `extract text with delimeter`,
    ans: `Add Column tab -> From Text group -> Extract -> Text Before/After/Between delimiters`,
  },
  {
    que: `extract year, quarter, month, day from a date`,
    ans: `Add Column tab -> From Date &Time group -> Date -> Year/Month/Quarter`,
  },
  {
    que: `extract the earliest and latest dates between a group of date columns`,
    ans: `select date columns -> Add Column tab -> From Date &Time group -> Date -> Earliest/Latest`,
  },
  {
    que: `find the difference between dates`,
    ans: `select date columns -> Add Column tab -> From Date &Time group -> Date -> Subtract Days`,
  },
  {
    que: `extract name of day(eg. Monday) and name of month(eg. February)`,
    ans: `Add Column tab -> From Date &Time group -> Date -> Day/Month -> Name of Day/Name of Month`,
  },
  {
    que: `extract the day of the month(eg. 10th), day of the week(eg. 0-Mon, 1-Tue) or day of the year(eg. 364)`,
    ans: `Add Column tab -> From Date &Time group -> Date -> Day -> Day/Day of Week/Day of Year`,
  },
  {
    que: `extract the week of the month(1-4) or week of the year (eg.52)`,
    ans: `Add Column tab -> From Date &Time group -> Date -> Week -> Week of Month/Week of Year`,
  },
  {
    que: `extract the date from a datetime`,
    ans: `Add Column tab -> From Date &Time group -> Date -> Date Only`,
  },
  {
    que: `calculate age from a date`,
    ans: (
      <>
        <p>1. extract the age represented as number of days from the date:</p>
        <p>
          Add Column tab {"->"} From Date &Time group {"->"} Date {"->"} Age
        </p>
        <p>2. Convert age displayed as number of days to years</p>
        <p>
          Add Column tab {"->"} From Date &Time group {"->"} Duration {"->"}
          Total Years
        </p>
        <p>
          3. Convert age in years from decimal to whole number by changing the
          data type
        </p>
      </>
    ),
  },
  {
    que: `add, subtract, divide and multiply column data`,
    ans: `Add Column tab -> From Number group -> Standard -> Add/Multiply/Subtract/Divide`,
  },
  {
    que: `calculate the percentage value of a column data. Eg. 12% value of £200`,
    ans: (
      <>
        <p>Interpretation: Give me x% value of the column I have selected</p>
        <p>
          Add Column tab {"->"} From Number group {"->"} Standard {"->"}
          Percentage: (x is what you put into the field)
        </p>
      </>
    ),
  },
  {
    que: `calcuate the 100% value of a column data whose values are in another % equivalent. 
    Eg. find the 100% value of sales data represented in their 50% form`,
    ans: (
      <>
        <p>
          Interpretation: The col I have selected is the x% value, now give me
          its 100% value
        </p>
        <p>
          Add Column tab {"->"} From Number group {"->"} Standard {"->"}
          Percentage of: (x is what you put into the field)
        </p>
      </>
    ),
  },
  {
    que: `calc the modulo of a column data`,
    ans: (
      <>
        <p>Interpretation: Give me the value of the selected column modulo x</p>
        <p>
          Add Column tab {"->"} From Number group {"->"} Standard {"->"} Modulo:
          (x is what you put into the field)
        </p>
      </>
    ),
  },
  {
    que: `round up to the nearest whole number Eg. 74.69 -> 75`,
    ans: `Add Column tab -> From Number group -> Rounding -> Round Up`,
  },
  {
    que: `round down to the nearest whole number Eg. 74.69 -> 74`,
    ans: `Add Column tab -> From Number group -> Rounding -> Round Down`,
  },
  {
    que: `round to x decimal places Eg. 74.69 -> 74.7`,
    ans: `Add Column tab -> From Number group -> Rounding -> Round...`,
  },
  { que: `check if column data contains even or odd numbers`, ans: null },
  { que: `count number of duplicates in a column`, ans: null },
  { que: `count number of unique values in a column`, ans: null },
  {
    que: `filter out the rows of the column who has duplicate values`,
    ans: null,
  },
  { que: `check the sign of numbers in column data`, ans: null },
  {
    que: `append multiple excel tables with different number of colums`,
    ans: null,
  },
  {
    que: `append multiple excel tables/sheets from a single workbook`,
    ans: null,
  },
  { que: `append multiple excel files from a folder`, ans: null },
  { que: `append multiple csv files from a folder`, ans: null },
  { que: `append different data source files`, ans: null },
  { que: `merge tables from the same sheets`, ans: null },
  { que: `merge sheets tables from the same workbook`, ans: null },
  { que: `merge data having multiple matching columns or criteria`, ans: null },
  { que: `merge data from multiple excel files/workbooks`, ans: null },
  { que: `merge data from different data sources`, ans: null },
  {
    que: `use column from examples to extract portion of a column data`,
    ans: null,
  },
  {
    que: `use column from examples to create a new column from multiple column data`,
    ans: null,
  },
  {
    que: `use column from examples to create a new month/day/year column from a date column`,
    ans: null,
  },
  {
    que: `use column from examples to create a new column from an alphanumeric complex column data`,
    ans: null,
  },
  {
    que: `create a new column which contains data based on the conditions of a single column data`,
    ans: null,
  },
  {
    que: `create a new column which contains data based on the conditions of multiple column data. (eg. generating title for people based on Gender and MarriageStatus)`,
    ans: null,
  },
  {
    que: `create a new column which contains data based on comparing 2 columns`,
    ans: null,
  },
  {
    que: `create a new column to produce new info based on if date is before, equal or after a certain date`,
    ans: null,
  },
  { que: `fill down empty values using default value given`, ans: null },
  {
    que: `create multiple groupings of a column(s) into one table (eg. for each branch, group the total income, average rating and minimum unit payment)`,
    ans: null,
  },
  {
    que: `transpose a table (ie. reverse the columns and rows of that table)`,
    ans: null,
  },
  { que: `unpivot a table`, ans: null },
  { que: `remove all rows whose column values are an error`, ans: null },
  { que: `replace all errors in a column`, ans: null },
  { que: `replace only one column value with new value`, ans: null },
  { que: `replace matching values in a column with a new value`, ans: null },
  { que: `choose only the columns you want to keep`, ans: null },
  { que: `what are the total number of rows in the dataset`, ans: null },
  { que: `go to a specific column without scrolling`, ans: null },
  {
    que: `check if a date is in the previous/current/next day/week/month/quarter/year using function`,
    ans: `Date.IsIn...`,
  },
  {
    que: `add or subtract days/weeks/months/quarter/years from a date column using function`,
    ans: `eg. Date.Add...`,
  },
  {
    que: `extract the day/week/month/year number or name of a date column using function`,
    ans: `eg. Date.Day...`,
  },
  {
    que: `convert text column to upper/lower/proper using function`,
    ans: `eg. Text.Upper`,
  },
  {
    que: `extract text before/after a delimeter using function`,
    ans: `eg. Text.BeforeDelimeter`,
  },
  {
    que: `produce the list of M functions`,
    ans: `blank query -> = #shared -> convert to table`,
  },
];
