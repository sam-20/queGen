//NB: Questions and Answers were practiced on Excel's Power Query.
//Power BI's power query has slightly different interface and positioning of groups and tabs so some answers may vary for Power BI
export const PQ = [
  {
    que: `close and reopen the query settings pane (where you applied steps are listed)`,
    ans: `View tab -> Layout group -> Query Settings`,
  },
  {
    que: `merge data in multiple columns`,
    ans: (
      <>
        <p>
          Add Column tab {"->"} From Text group {"->"} Merge Columns
        </p>
        <p>
          NB: when merging do not use a separator that already exists in either
          of the columns to be merged. Eg. If colA has values like 023-23-45 and
          colB has values like male, do not merge the 2 columns using "-" as the
          separator since it exists in colA
        </p>
      </>
    ),
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
  {
    que: `check if column data contains even or odd numbers`,
    ans: `Add Column tab -> From Number group -> Information -> Is Even/Is Odd`,
  },
  { que: `count number of duplicates in a column`, ans: null },
  { que: `count number of unique values in a column`, ans: null },
  {
    que: `filter out the rows of the column who has duplicate values`,
    ans: `select column or columns whose duplicate rows you want to filter -> Home tab -> Reduce Rows group -> Keep Rows -> Keep Duplicates`,
  },
  {
    que: `remove duplicate rows`,
    ans: `select column or columns whose duplicate rows you want to remove -> Home tab -> Reduce Rows group -> Remove Rows -> Remove Duplicates`,
  },
  {
    que: `check the sign of numbers in column data`,
    ans: (
      <>
        <p>
          Add Column tab {"->"} From Number group {"->"} Information {"->"} Sign
        </p>
        <p>NB: +ve value = 1, -ve value = -1, 0 value = 0</p>
      </>
    ),
  },
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
    ans: `select column -> Add Column tab -> General group -> Column From Examples -> From Selection`,
  },
  {
    que: `use column from examples to create a new column from multiple column data`,
    ans: `select columns -> Add Column tab -> General group -> Column From Examples -> From Selection`,
  },
  {
    que: `use column from examples to create a new column containing only the month/day/year from some date column`,
    ans: `select date column -> Add Column tab -> General group -> Column From Examples -> From Selection`,
  },
  {
    que: `use column from examples to create a new column from an alphanumeric complex column data`,
    ans: `select complex column -> Add Column tab -> General group -> Column From Examples -> From Selection`,
  },
  {
    que: `create a new column which contains data based on the conditions of a single column data.
    Eg. a new column B where value = "adult" if age in colA >20 and value ="child" if age <20`,
    ans: `Add Column tab -> General group -> Conditional Column`,
  },
  {
    que: `create a new column which contains data based on the conditions of multiple column data.
    Eg. Use married status column and Gender column to generate titles(Mr, Mrs, Miss) for people `,
    ans: (
      <>
        <p>
          Add Column tab {"->"} General group {"->"} Conditional Column
        </p>
        <p>---Condition Used for this example---</p>
        <p>If gender = Male Then</p>
        <p>colum_data = Mr</p>
        <p>ElseIf Marriage_Status = Married then</p>
        <p>colum_data = Mrs</p>
        <p>Else</p>
        <p>colum_data = Miss</p>
      </>
    ),
  },
  {
    que: `create a new column which contains data based on comparing 2 columns`,
    ans: `Add Column tab -> General group -> Conditional Column`,
  },
  {
    que: `create a new column to produce new info based on if date is before, equal or after a certain date`,
    ans: `Add Column tab -> General group -> Conditional Column`,
  },
  {
    que: `fill down empty values using default value given`,
    ans: (
      <>
        <p>
          Transform tab {"->"} Any Column group {"->"} Fil {"->"} Up/Down
        </p>
        <p>
          NB: the cells that you want to see filled should have their values as
          null. An empty string inside the cell wouldnt work
        </p>
      </>
    ),
  },
  {
    que: `create multiple groupings of a column(s) into one table 
    Eg. For each branch, group the total income, average rating and minimum unit payment)`,
    ans: `Transform tab -> Table group -> Group By`,
  },
  {
    que: `transpose a table (ie. reverse the columns and rows of that table)`,
    ans: `Transform tab -> Table group -> Transpose`,
  },
  {
    que: `unpivot a table`,
    ans: (
      <>
        <p>
          Transform tab {"->"} Any Column group {"->"} Unpivot Columns
        </p>

        <p>Unpivoting explained</p>
        <p>
          1. To identify a table that needs unpivoting, you would notice that
          some of the table's column headers are the unique values of a
          categorical variable. Eg. The column headers could be something like
          January, February, March, instead of a single column like Month
        </p>
        <p>
          2. Before you start unpivoting, first ignore how confusing the data is
          arranged and take note of all the variables in the messed up table
          (not just the variable of the column and row headers but also the
          variable of the values recorded under the row and column headers). Eg.
          In this case where the Jan,Feb,Mar were used as the column headers, we
          can say its variable is Month
        </p>
        <p>
          2. Assuming, we retrieved the following variables: Month, Year, Sales:
          This means our final unpivoted table should be a table that has a
          single column for each of the variables ie. single column for Month,
          single column for Year, single column for Sales
        </p>
        <p>
          3. Out of all the variables you retrieved, you'd notice that one of
          them is correctly arranged as a single column whose values are rightly
          entered under it. Take note of that column (we call it ColA)
        </p>
        <p>
          4. Inside the power query editor, select ColA {"->"} right-click
          {"->"} Unpivot Other Columns
        </p>
        <p>5. Assign appropriate name to columns created</p>
      </>
    ),
  },
  {
    que: `remove all rows for a column data you dont want. Eg. remove all rows where the City column value is Kumasi`,
    ans: `select the column which you're using for the condition ie. City -> click the dropdown button next to the column header name -> Text Filter -> Does Not Equal...`,
  },
  {
    que: `remove all rows whose column values are an error`,
    ans: `Home tab -> Reduce Rows group -> Remove Rows -> Remove Errors`,
  },
  { que: `replace all errors in a column`, ans: null },
  {
    que: `replace only one column value with new value`,
    ans: null,
  },
  {
    que: `replace matching values in a column with a new value.
  Eg. replace all males in columnA with boys`,
    ans: `Transform tab -> Any Column group -> Replace Values -> Replace Values`,
  },
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
  {
    que: `Convert date column in foreign country format to your country format`,
    ans: `To convert to your local date format: 
    Revert to original data type without errors -> 
    Click data type icon (next to date col name) -> 
    Using Locale … -> Change Data Type to Date -> 
    Change Locale to the country in which the date is originally formatted. `,
  },
];
