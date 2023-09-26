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
        <p>Result_ColumnName = the result value's col name</p>
        <p>
          Search_ColumnName1 = the lookup value's matching column name in the
          result table
        </p>
        <p>Search_Value1 = col name of the lookup value</p>
      </>
    ),
  },
];
