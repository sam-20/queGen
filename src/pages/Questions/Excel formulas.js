export const EF = [
  { que: `remove white spaces from data`, ans: `TRIM` },
  { que: `capitalize the first letter of every word`, ans: `PROPER` },
  { que: `capitalize every letter`, ans: `UPPER` },
  { que: `convert every letter to small letters`, ans: `LOWER` },
  { que: `display the number of characters in cell incl. space`, ans: `LEN` },
  { que: `extract the first n characters of a cell value`, ans: `LEFT` },
  { que: `extract the last n characters of a cell value`, ans: `RIGHT` },
  { que: `extract the n characters inside a cell content`, ans: `MID` },
  { que: `join multiple cell values`, ans: `CONCATENATE or &` },
  {
    que: `display the position number of a case-sensitive character in a cell`,
    ans: `FIND`,
  },
  {
    que: `display the position number of a case-insensitive character in a cell`,
    ans: `SEARCH`,
  },
  { que: `add prefix to cell`, ans: null },
  { que: `add suffix to cell`, ans: null },
  { que: `replace a number of characters in a cell`, ans: `REPLACE` },
  {
    que: `replace a portion of existing text or character in a cell`,
    ans: `SUBSTITUTE`,
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
  { que: `display today's date`, ans: `TODAY or Ctrl+;` },
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
  { que: ``, ans: `` },
  { que: ``, ans: `` },
];
