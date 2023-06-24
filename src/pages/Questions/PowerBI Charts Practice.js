export const PBI = [
  {
    que: `import data from the following formats csv, excel, txt, pdf, xlsx, sql, ms access, outlook, webpage`,
    ans: null,
  },
  {
    que: `customize the current theme. eg. change the font styles, size, colors, to affect all report pages and charts`,
    ans: `View tab -> Themes group -> click dropdown next to themes -> Customize Current Theme`,
  },
  {
    que: `create a new data table in power bi without importing existing data (NB: table to be part of the datasets in the Data pane not table chart for the canvas)`,
    ans: `Home tab -> Data group-> Enter Data`,
  },
  {
    que: `cut/copy and paste a chart in the same report or another report`,
    ans: (
      <>
        <p>
          select chart{"->"} Home tab{"->"}Clipboard group{"->"}Cut/Copy/Paste
        </p>
      </>
    ),
  },
  {
    que: `view any chart in a zoomed presentation view`,
    ans: `click chart to make it active -> select Focus Mode in the top right `,
  },
  {
    que: `show distinct values of a numerical value rather than as a sum when you plot them on the graph`,
    ans: (
      <>
        <p>
          select the variable(usually numerical) in the Data pane {"->"} Column
          Tools tab of the power bi desktop {"->"} Properties group {"->"}
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
        <p>
          Use stacked column chart if you want different categories to appear on
          top of each other in one bar
        </p>
        <p>
          Use clustered column chart if you want different categories to appear
          as individual bars sided next to each other
        </p>
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
    que: `create a treemap`,
    ans: (
      <>
        <p>2 or more Categorical variables + 1 Numeric variable</p>
        <p>Catg1 {"->"} Category</p>
        <p>Catg2 {"->"} Details</p>
        <p>Num1 {"->"} Values</p>

        <p>
          NB: in a treemap the group at the top left corner has the largest
          value and the right bottom corner has the lowest value
        </p>
      </>
    ),
  },
  {
    que: `create a line chart`,
    ans: (
      <>
        <p>1 or 2 categorical variable + 1 or more numerical variables</p>

        <p>Catg1(date) {"->"} X-axis</p>
        <p>Num1 {"->"} Y-axis</p>
        <p>Num2,3,4, etc {"->"} Secondary y-axis</p>

        <p>or</p>
        <p>Catg1(date) {"->"} X-axis</p>
        <p>Num1 {"->"} Y-axis</p>
        <p>Catg2 {"->"} Legend</p>

        <p>NB: to easily remember use: XYSecondaries, XYlegend</p>
      </>
    ),
  },
  {
    que: `for graphs that involve trends over time ie. line,area,combo,etc. 
    When visualizing the data, how can you cycle through the dates and show 
    the graph as a trend over year or quarter or month or day`,
    ans: (
      <>
        <p>
          When the date field is added to the x-axis, it appears in multiple
          hierachies (year,quarter,month,day) inside the X-axis of the
          visualization pane. Now you can cycle through each of these
          hierachies: Year,quarter,month,day by going to the top right section
          of the graph where you have multiple icons.
        </p>
        <p>
          Use the double-downward-arrow icon to drill down the heirachy. ie.
          switch from year to quarter then quarter to month then to day
        </p>
        <p>
          To reverse or come up the hieracy, you use the single-upward-arrow
          icon to drill up ie. switch from day to month then to quarter then to
          year
        </p>
      </>
    ),
  },
  {
    que: `create an area chart`,
    ans: (
      <>
        <p>1 or 2 categorical variable + 1 or more numerical variables</p>

        <p>Catg1(date) {"->"} X-axis</p>
        <p>Num1 {"->"} Y-axis</p>
        <p>Num2,3,4, etc {"->"} Secondary y-axis</p>

        <p>or</p>
        <p>Catg1(date) {"->"} X-axis</p>
        <p>Num1 {"->"} Y-axis</p>
        <p>Catg2 {"->"} Legend</p>

        <p>NB: to easily remember use: XYSecondaries, XYlegend</p>
      </>
    ),
  },
  {
    que: `create a combo chart`,
    ans: (
      <>
        <p>1 or 2 categorical variable + 2 or more numerical variables</p>
        <p>Catg1(date) {"->"} X-axis</p>
        <p>Num1 {"->"} Column y-axis</p> : for the bars in the combo chart
        <p>Num2 {"->"} Line y-axis</p> : for the lines in the combo chart
        <p>Catg2 {"->"} Column legend</p> : to make the bars into stacked bars
      </>
    ),
  },
  {
    que: `create a waterfall chart`,
    ans: (
      <>
        <p>1 categorical variable + 1 numerical variable</p>
        <p>Catg1(Date) {"->"} Category</p>
        <p>Num1 {"->"} Y-axis </p>
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
    que: `create a gauge chart`,
    ans: (
      <>
        <p></p>
      </>
    ),
  },
  {
    que: `create a scatter plot`,
    ans: (
      <>
        <p>2 numerical variables</p>
        <p>Num1 {"->"} X-axis</p>
        <p>Num2 {"->"} Y-axis </p>

        <p>2 numerical + 1 categorical variable</p>
        <p>Num1 {"->"} X-axis</p>
        <p>Num2 {"->"} Y-axis </p>
        <p>Catg1 {"->"} Legend</p>
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
          {"->"} Column Tools tab of the power bi desktop {"->"} Properties
          group
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
    que: `add zoom buttons to map chart`,
    ans: (
      <>
        <p>
          Visualizations pane{"->"}Visual tab{"->"}Map Settings{"->"}Controls
          {"->"}Zoom Buttons
        </p>
      </>
    ),
  },
  {
    que: `change the theme of map`,
    ans: (
      <>
        <p>
          Visualizations pane{"->"}Visual tab{"->"}Map Settings{"->"}Style
          {"->"}Style
        </p>
      </>
    ),
  },
  {
    que: `create a table chart`,
    ans: (
      <>
        <p>X Categorical Variable + X numerical variable</p>
        <p>Catg/Num {"->"} Columns</p>
      </>
    ),
  },
  {
    que: `create a matrix chart`,
    ans: (
      <>
        <p>
          NB: A matrix chart works similar to pivot tables ie. use the same ide
          of pivot table row headers, column headers and values to generate
          table data
        </p>
        <p>Catg (variable for column headers) {"->"} Columns</p>
        <p>Catg (variable for row headers) {"->"} Rows </p>
        <p>Num {"->"} Values </p>
      </>
    ),
  },
  {
    que: `add conditional formatting to a table chart or matrix chart eg. data bars, color scales, icons,etc`,
    ans: (
      <>
        <p>
          Visualizations pane{"->"} Visual tab {"->"} Cell elements {"->"}{" "}
          select series/column {"->"} toggle the kind of formatting you want to
          do eg. data bars {"->"} click the 'fx' button under it to specific
          which value ranges should satisfy the condition
        </p>
      </>
    ),
  },
  {
    que: `Change the unit representation of numerical column data in the table chart or matrix chart. 
    Eg. representing column data as raw (49332.57), thousands(49.33K), millions(0.05M), billions(0.005bn)`,
    ans: `Visualizations pane-> Format Visual tab -> Visual -> Specific Column -> choose column to apply units to -> Display Units`,
  },
  {
    que: `change the number of decimal places for a numerical column data in a table or matrix chart`,
    ans: `Visualizations pane-> Format Visual tab -> Visual -> Specific Column -> choose column to apply units to -> Value Decimal Places`,
  },
  {
    que: ``,
    ans: (
      <>
        <p></p>
      </>
    ),
  },
  {
    que: ``,
    ans: (
      <>
        <p></p>
      </>
    ),
  },
  {
    que: ``,
    ans: (
      <>
        <p></p>
      </>
    ),
  },
  {
    que: ``,
    ans: (
      <>
        <p></p>
      </>
    ),
  },
  {
    que: ``,
    ans: (
      <>
        <p></p>
      </>
    ),
  },
  {
    que: ``,
    ans: (
      <>
        <p></p>
      </>
    ),
  },
];
