export const PDX = [
  {
    que: `create a field or new measure`,
    ans: (
      <>
        <p>
          Home tab {"->"} Calculations group {"->"} New Measure
        </p>
        <p>eg. of measure</p>
        <p>Measure_name = table[column_name]</p>
        <p>Target Sales = SUM(Orders2[Sales])*1.3</p>
      </>
    ),
  },
  {
    que: `perform an excel vlookup equivalent in dax`,
    ans: (
      <>
        <p>
          = lookupvalue(Result_ColumnName, Search_ColumnName1, Search_Value1,
          ....,[Alternate_Result])
        </p>
        <p>
          Result_ColumnName = the result value's col name = what column are we
          trying to return from that TableB?
        </p>
        <p>
          Search_ColumnName1 = the lookup value's matching column name in the
          result table = what is the matcher column in that tableB we're
          returning from?
        </p>
        <p>
          Search_Value1 = col name of the lookup value = what is the matcher
          column from the tableA we'd get the looked up value into?
        </p>
      </>
    ),
  },
  {
    que: `create a measure whose result isnt affected by any highlight/filter/slicer`,
    ans: (
      <>
        <p>eg.</p>
        <p>measure = CALCULATE (</p>
        <p>MAX('sales'[gross Profit]),</p>
        <p>ALL ('sales'))</p>
        <p>
          //returns (1. all rows in a table or 2. all values in a column) to be
          used for computation while ignoring any filters that have been applied
          on the table or column name. Therefore the ALL function can either
          take a table or column name depending on which of them you want to
          ignore the filters for
        </p>
      </>
    ),
  },
  {
    que: `create a measure whose result is only affected by a selected few filters/highlights/slicers`,
  },
];
