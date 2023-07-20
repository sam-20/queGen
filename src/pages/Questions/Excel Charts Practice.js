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
    que: `display the 'Format Legend' panel of your chart`,
    ans: `click the legend in the chart`,
  },
  /*******************Pie Chart ***************************************** */
  {
    que: `design a pie chart from a normal excel table`,
    ans: (
      <>
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
    ans: `Requires categorical column values to be grouped`,
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
  { que: `design a treemap from a normal excel table`, ans: null },

  /*******************Bar Chart ***************************************** */
  { que: `design a bar chart from a normal excel table`, ans: null },
  {
    que: (
      <>
        <p>1. Design a bar chart from a pivot table</p>
        <p>
          2. Sort the bars in descending order and ascending order of bar height
        </p>
        <p>
          3. Sort the bars in descending order and ascending order of axis
          labels
        </p>
        <p>3. Rotate the bars to make it horizontal or vertical</p>
      </>
    ),
    ans: (
      <>
        <p>1.</p>
      </>
    ),
  },
  { que: `design a stacked bar chart from a normal excel table`, ans: null },
  { que: `design a stacked bar chart from a pivot table`, ans: null },
  { que: `design a waterfall chart from a normal excel table`, ans: null },
  { que: `design a funnel chart from a normal excel table`, ans: null },
  { que: `design a histogram from a normal excel table`, ans: null },
  { que: `design a line chart from a normal excel table`, ans: null },
  { que: `design a line chart from a pivot table`, ans: null },
  { que: `design a combo chart from a normal excel table`, ans: null },
  { que: `design a combo chart from a pivot table`, ans: null },
  { que: `design a ribbon chart from a normal excel table`, ans: null },
  { que: `design an area chart from a normal excel table`, ans: null },
  { que: `design an area chart from a pivot table`, ans: null },
  { que: `design a boxplot from a normal excel table`, ans: null },
  { que: `design a scatterplot from a normal excel table`, ans: null },
  { que: `design a spark line chart from a normal excel table`, ans: null },
];
