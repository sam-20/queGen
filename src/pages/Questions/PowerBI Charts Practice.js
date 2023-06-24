export const PBI = [
  {
    que: `import data from the following formats csv, excel, txt, pdf, xlsx, sql, ms access, outlook, webpage`,
    ans: null,
  },
  {
    que: `view chart in a zoomed presentation view`,
    ans: `click chart to make it active -> select Focus Mode in the top right `,
  },
  {
    que: `show distinct values of a numerical value rather than as a sum when you plot them on the graph`,
    ans: (
      <>
        <p>
          select the variable(usually numerical) in the Data pane {"->"} Column
          Tools menu of the power bi desktop {"->"} Properties tab {"->"}
          Summarization{"->"} Don't summarize
        </p>
      </>
    ),
  },
  {
    que: `create a bar/column chart`,
    ans: (
      <>
        <p>1 Categorical variable + 1 numerical variable</p>
        <p>Use Stacked Column Chart:</p>
        <p>Catg1 {"->"} X-axis</p>
        <p>Num1 {"->"} Y-axis</p>
      </>
    ),
  },
  {
    que: `create a stacked column chart`,
    ans: (
      <>
        <p>2 or more Categorical variables + 1 Numerical variable</p>
        <p>Use stacked column chart: </p>
        <p>Catg1 {"->"} X-axis</p>
        <p>Catg2 {"->"} Legend</p>
        <p>Num1 {"->"} Y-axis</p>
      </>
    ),
  },
  {
    que: `create a ribbon chart`,
    ans: (
      <>
        <p>2 or more categorical variables + 1 numerical variable</p>
        <p>Catg1 {"->"} X-axis</p>
        <p>Catg2 {"->"} Legend</p>
        <p>Num1 {"->"} Y-axis</p>
      </>
    ),
  },
  {
    que: `add labels to column(Bar)/stacked/ribbon chart`,
    ans: `Visualizations pane -> Format Visual tab -> Data Labels`,
  },
  {
    que: `create a pie chart`,
    ans: (
      <>
        <p>1 Categorical Variable + 1 numerical variable</p>
        <p>Catg1 {"->"} Legend</p>
        <p>Num1 {"->"} Values </p>
      </>
    ),
  },
  {
    que: `create a donut chart`,
    ans: (
      <>
        <p>1 Categorical Variable + 1 numerical variable</p>
        <p>Catg1 {"->"} Legend</p>
        <p>Num1 {"->"} Values </p>
      </>
    ),
  },
  {
    que: `update data labels of the pie/donut chart slices ie. add or remove legend names, values`,
    ans: `Visualizations pane -> Format Visual tab -> Detail Labels -> Label Contents`,
  },
  {
    que: `pick/filter out only 2 bars out of a column chart and compare them. Or only 2 slices out of a pie chart and compare them`,
    ans: (
      <>
        <p>
          hold ctrl and select the 2 or more bars/slices of the chart {"->"}{" "}
          right click any of the bars/slices {"->"} Include
        </p>
        <p>
          NB: to revert back to original chart: Filters pane {"->"} Filters On
          This Visual {"->"} remove filters OR Ctrl+Z to undo
        </p>
      </>
    ),
  },
  {
    que: `pick/filter one or more bars out of a column chart and remove them from the main chart. Or only one or more slices out of a pie chart and remove them`,
    ans: (
      <>
        <p>
          hold ctrl and select the 1 or more bars/slices of the chart {"->"}{" "}
          right click any of the bars/slices {"->"} Exclude
        </p>
        <p>
          NB: to revert back to original chart: Filters pane {"->"} Filters On
          This Visual {"->"} remove filters OR Ctrl+Z to undo
        </p>
      </>
    ),
  },
  {
    que: `create a funnel chart`,
    ans: (
      <>
        <p>1 categorical variable + 1 numerical variable</p>
        <p>Catg1 {"->"} Category</p>
        <p>Num1 {"->"} Values </p>
      </>
    ),
  },
  {
    que: `view the data records of a selected area in a chart`,
    ans: (
      <>
        <p>select portion of chart {"->"} Show Data Point As A Table</p>
      </>
    ),
  },
  {
    que: `you opened the data records of a selected area in a chart. Now export that data`,
    ans: (
      <>
        <p>
          select portion of chart {"->"} Show Data Point As A Table {"->"} click
          ... at top right of the table records {"->"} Export Data
        </p>
      </>
    ),
  },
  {
    que: `create a basic map`,
    ans: (
      <>
        <p>Use map</p>
        <p>1 or more Categorical Variable + 0 or more numerical variable</p>
        <p>
          NB: Kinds of variables you can use to show the geographical areas on
          the map chart: country,city,state,region,pincode,postal code,latitude,
          longitude.
        </p>
        <p>Catg1</p>
        <p>Country,City,State,Region,pincode, postalcode {"->"} Location</p>
        OR
        <p>longitude {"->"} Longitude</p>
        <p>latitude {"->"} Latitude</p>
        <p>----------------</p>
        <p>Catg2</p>
        <p>
          Region(N,S,E,W,C) or other categorical variable which is not Catg1
          {"->"} Legend
        </p>
        <p>----------------</p>
        <p>Num1 eg. sales{"->"} Bubble Size</p>
        <p>
          NB: If you have the right data values for the map and for some reason
          they're not being recognized: select the column in the Data pane{" "}
          {"->"} Column Tools menu of the power bi desktop {"->"} Properties tab
          {"->"}change Data Category to appropriate data type eg. address,
          place, city, country, lon, lat, etc.
        </p>
      </>
    ),
  },
  {
    que: `create a filled map. NB:filled map is used when you want to focus only a portion of the map like a country and visualize more info from the country`,
    ans: (
      <>
        <p>1 or more Categorical Variable + 0 or more numerical variable</p>
        <p>
          NB: Kinds of variables you can use to show the geographical areas on
          the map chart: country,city,state,region,pincode,postal code,latitude,
          longitude.
        </p>
        <p>Catg1</p>
        <p>Country,City,State,Region,pincode, postalcode {"->"} Location</p>
        OR
        <p>longitude {"->"} Longitude</p>
        <p>latitude {"->"} Latitude</p>
        <p>----------------</p>
        <p>Catg2</p>
        <p>
          Region(N,S,E,W,C) or other categorical variable which is not Catg1
          {"->"} Legend
        </p>
        <p>----------------</p>
        <p>Num1 eg. sales{"->"} Tooltips</p>
      </>
    ),
  },
  {
    que: ``,
  },
];
