export const EC = [
  {
    que: `display the 'Chart Elements' popup view of your graph`,
    ans: `click the area outside the chart data points -> click the ➕ icon that appears on the right side of the chart window`,
  },
  {
    que: `display the 'Chart Styles' popup view of your graph`,
    ans: `click the area outside the chart data points -> click the 🖌️ icon that appears on the right side of the chart window`,
  },
  {
    que: `display the 'Chart Filters' popup view of your graph`,
    ans: `click the area outside the chart data points -> click the slicer icon that appears on the right side of the chart window`,
  },
  {
    que: `display the 'Format Chart Area' panel of your chart`,
    ans: `click the area outside the chart data points`,
  },
  {
    que: `display the 'Format Data Series' panel of your chart`,
    ans: `click any data point of your chart`,
  },
  {
    que: `display the 'Format Data Point' panel of your chart`,
    ans: `double-click any data point of your chart`,
  },
  {
    que: `display the 'Format Data Labels' panel of your chart`,
    ans: `click any data label in the chart`,
  },
  {
    que: `display the 'Format Axis' panel of your chart`,
    ans: `click any axis label in the chart`,
  },
  {
    que: `display the 'Format Legend' panel of your chart`,
    ans: `click the legend in the chart`,
  },

  /*******************Pie Chart **************************************** */
  {
    que: `design a pie chart from a normal excel table`,
    ans: (
      <>
        <p>1 Categorical variable + 1 numerical variable</p>
        <p>Requires categorical column values to be grouped</p>
        <p>
          If categorical column values are grouped: select the categorical and
          numerical columns OR select range of data {"->"} Insert tab {"->"}
          Charts group {"->"} pie chart icon
        </p>
      </>
    ),
  },
  {
    que: `design a pie chart from a pivot table`,
    ans: (
      <>
        <p>1 Categorical variable + 1 numerical variable</p>
        <p>Requires categorical column values to be grouped</p>
      </>
    ),
  },
  {
    que: `display and hide data labels on pie chart slices as their percentage contribution`,
    ans: (
      <>
        <p>
          Format Data Labels {"->"} Label Options icon {"->"} Label Options
          dropdown {"->"} Percentage
        </p>
        <p>or</p>
        <p>
          highlight chart area {"->"} Design/Chart Design tab {"->"} Chart
          Styles group {"->"} choose chart style showing labels as %
        </p>
      </>
    ),
  },
  {
    que: `display and hide data labels on pie chart slices as their actual datapoint contribution`,
    ans: (
      <>
        <p>
          Format Data Labels {"->"} Label Options icon {"->"} Label Options
          dropdown {"->"} Value
        </p>
        <p>or</p>
        <p>Chart Elements popup view {"->"} (un)check Data Labels option</p>
      </>
    ),
  },
  {
    que: `display and hide category names on pie chart slices`,
    ans: (
      <>
        <p>
          Format Data Labels {"->"} Label Options icon {"->"} Label Options
          dropdown {"->"} Category Name
        </p>
      </>
    ),
  },
  {
    que: `change positioning of data labels on pie chart slices`,
    ans: (
      <>
        <p>
          Format Data Labels {"->"} Label Options icon {"->"} Label Position
          dropdown {"->"} Center/Inside End/Outside End/Best Fit
        </p>
      </>
    ),
  },
  {
    que: `display and hide pie chart legend`,
    ans: `Chart Elements popup view -> (un)check Legend option`,
  },
  {
    que: `change the color of the pie chart slices`,
    ans: `highlight chart area -> Design/Chart Design tab -> Chart Styles group -> Change Colors`,
  },
  {
    que: `rotate pie chart`,
    ans: `Format Data Series -> Series Option icon -> Angle Of First Slice`,
  },
  {
    que: `separate/explode pie slices`,
    ans: `Format Data Series -> Series Option icon -> Pie Explosion`,
  },
  {
    que: `display only 1 slice and hide the others`,
    ans: (
      <>
        <p>Do this for the slice you want to hide</p>
        <p>
          1. Format Data Point {"->"} Fill & Line icon {"->"} Fill {"->"} No
          Fill
        </p>
        <p>2. Chart Elements popup view {"->"} uncheck Data Labels option</p>
      </>
    ),
  },
  /*******************Treemap Chart ***************************************** */
  {
    que: `design a treemap`,
    ans: (
      <>
        <p>Treemaps can only be created from normal excel table</p>
        <p>2 or more Categorical variables + 1 Numeric variable</p>

        <p>Keypoints</p>
        <p>1. Categorical column values can be grouped or scattered</p>
        <p>
          2. Categorical data columns should be positioned in order of hierarchy
          with highest level as the 1st column and so on
        </p>
        <p>
          3. The column with the highest hierarchy (1st column) should be sorted
        </p>
      </>
    ),
  },

  /*******************Column(vertical) and bar(horizontal) Chart ***************************************** */
  {
    que: `design a column/bar chart from a normal excel table`,
    ans: (
      <>
        <p>1 Categorical variable + 1 numerical variable</p>
        <p>Requires categorical column values to be grouped</p>
        <p>
          If categorical column values are grouped: select the categorical and
          numerical columns OR select range of data {"->"} Insert tab {"->"}
          Charts group {"->"} column chart icon
        </p>
      </>
    ),
  },
  {
    que: `Design a column/bar chart from a pivot table`,
    ans: (
      <>
        <p>1 Categorical variable + 1 numerical variable</p>
        <p>Requires categorical column values to be grouped</p>
      </>
    ),
  },
  {
    que: `Sort the bars of a column/bar chart in descending order and ascending order of bar height`,
    ans: `sort the datapoints inside the table of the column representing the bars. The graph automatically updates`,
  },
  {
    que: `Sort the bars of a column/bar chart in descending order and ascending order of axis labels`,
    ans: `sort the datapoints inside the table of the column representing the axis labels. The graph automatially updates`,
  },
  {
    que: `Switch between column and bar chart`,
    ans: `right click chart area -> Change Chart Type ...`,
  },
  {
    que: `inc/dec the gap width of the bar chart thereby increasing or decreasing the bin width`,
    ans: `Format Data Series -> Series Options icon -> Series Options dropdown -> Gap Width`,
  },
  {
    que: `Switch the column/bar chart's row and column or Change the data used as the x and y axis in your bar chart`,
    ans: (
      <>
        <p>right click chart area {"->"} Select Data ...</p>

        <p>
          the 'Select Data Source' window opens with the following
          customizations which must be understood
        </p>
        <p>
          1. 'Chart Data Range' inputbox = the entire range containing the data
          for the graph including the column headers eg. {`=Sheet1!$A$1:$B$13`}
        </p>

        <p>
          2. 'Lengend Entries (Series)' = the datapoints which would determine
          the bars heights. You can Add, Edit or Remove the datapoints here. If
          you click Add or Edit to update, note that 'Series Name' = column
          header eg. {`=Sheet1!$B$1`}
          and 'Series Value' = data range for the column's datapoints without
          the header eg. {`=Sheet1!$B$2:$B$13`}
        </p>

        <p>
          3. 'Horizontal(Category) Axis Labels' = unique categorical values for
          your x-axis labels. If you click Edit to update your
          Horizontal(Categorical) Axis Labels, note that Axis label range =
          range of categorical names without the header eg.
          {`=Sheet1!$A$2:$A$13`}
        </p>
      </>
    ),
  },
  {
    que: `add and remove the axis titles of your graph`,
    ans: `Chart Elements popup view {"->"} Axis Titles`,
  },

  /*******************Stacked Bar Chart ***************************************** */
  {
    que: `design a stacked bar chart from a normal excel table`,
    ans: (
      <>
        <p>2 or more Categorical variables + 1 Numeric variable</p>
        <p>Requires categorical column values to be grouped</p>
      </>
    ),
  },
  {
    que: `design a stacked bar chart from a pivot table`,
    ans: (
      <>
        <p>2 or more Categorical variables + 1 Numeric variable</p>
        <p>Requires categorical column values to be grouped</p>
      </>
    ),
  },

  /*******************Waterfall Chart ***************************************** */
  { que: `design a waterfall chart from a normal excel table`, ans: null },

  /*******************Funnel Chart ***************************************** */
  { que: `design a funnel chart from a normal excel table`, ans: null },

  /*******************Histogram Chart ***************************************** */
  { que: `design a histogram from a normal excel table`, ans: null },

  /*******************Line Chart ***************************************** */
  { que: `design a line chart from a normal excel table`, ans: null },
  { que: `design a line chart from a pivot table`, ans: null },

  /*******************Combo Chart ***************************************** */
  {
    que: `design a combo chart from a normal excel table`,
    ans: (
      <>
        <p>1 categorical variable (date) + 2 or more numerical variables</p>
        <p>Requires categorical column values to be grouped</p>
      </>
    ),
  },
  {
    que: `design a combo chart from a pivot table`,
    ans: (
      <>
        <p>1 categorical variable (date) + 2 or more numerical variables</p>
        <p>Requires categorical column values to be grouped</p>
      </>
    ),
  },
  {
    que: `interchange the data used for the line and bars in the combo chart`,
    ans: `right click chart area -> Change Chart Type ... -> after selecting the combo chart, beneath the chart's preview choose what to use for the line and bars`,
  },
  /*******************Ribbon Chart ***************************************** */
  { que: `design a ribbon chart from a normal excel table`, ans: null },

  /*******************Area Chart ***************************************** */
  { que: `design an area chart from a normal excel table`, ans: null },
  { que: `design an area chart from a pivot table`, ans: null },

  /*******************Boxplot ***************************************** */
  { que: `design a boxplot from a normal excel table`, ans: null },

  /*******************Scatterplot ***************************************** */
  { que: `design a scatterplot from a normal excel table`, ans: null },

  /*******************Spark line Chart ***************************************** */
  { que: `design a spark line chart from a normal excel table`, ans: null },
];
