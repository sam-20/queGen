//Bar chart with year doesnt include bar for blank dates. Solution: Visualization > Format visual -> X-Axis -> Type -> change from Continuous to Categorical

//bar chart missing sort axis option. Solution: Visualization > Format visual -> X-Axis -> Type -> change from Continuous to Categorical

//if you visualize the distinct count of a field and the  numbers in the visual exceed the distinct count, then its because some distinct values have multiple different values for the item which you're visualizing.

//if an added visual is not being affected by other visuals filtering, one option is to ensure that the new visual's data has a common relationship linked to the other visuals

/*if you set up a relationshp between 2 tables, its becauae you probably wnat to build a visual/chart using data from the 2 different tables. 
To confirm you visual/chart is giving the right information, 
first take note of the fields that you'd have used from the different tables to build the viusal. 
Then create a data table visual/chart of the fields from the 
different tables to see if the information is rightly organised like you want. 
The information in the table visual/chart gives you preview of how the table going to be used by your visual */

//if clicking a portion of a visual opens the table view instead of highlighting visual, restart power bi

/*to add a search bar to a slicer visual, make sure the column for the slicer is using a Text datatype. Then click on the slicer's ellipsis from top right corner
to locate the search
*/

/*if you want to use a slicer to add or remove columns from a table or matrix visual, change the slicer to a custom field parameter generated
slicer containing the columns which can be added or removed. Then with the help of the slicer's multi-select feature, you can either choose one column from
the field parameter or choose both columns to include in the table
 */
