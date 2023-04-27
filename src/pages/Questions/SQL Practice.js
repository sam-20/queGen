export const SQLP = [
  { que: `retrieve the list of databases`, ans: `SHOW DATABASES;` },
  { que: `move into a database`, ans: `USE [databasename];` },
  { que: `display tables in the database`, ans: `SHOW TABLES;` },
  {
    que: `display columns names in a table`,
    ans: `SHOW COLUMNS FROM [tableName];`,
  },
  {
    que: `display all the data in a table`,
    ans: `SELECT * from [tableName]`,
  },
  {
    que: `select only one column data from a table`,
    ans: (
      <>
        <p>SELECT [columnName] from [tableName]</p> or
        <p>SELECT [tableName].[columnName] from [tableName]</p> eg.
        <p>SELECT customers.address FROM customers;</p>
        <p>SELECT sellers.address FROM sellers</p>
      </>
    ),
  },
  {
    que: `select multiple columns data from a table`,
    ans: `SELECT [columnName1],[columnName2],... from [tableName]`,
  },
  {
    que: `show column data without duplicates`,
    ans: `SELECT DISTINCT [columnName] from [tableName]`,
  },
  {
    que: `show only the first n results from the query`,
    ans: `SELECT * from [tableName] LIMIT n`,
  },

  {
    que: `show only n results starting from position/row number x`,
    ans: (
      <>
        <p>SELECT * from [tableName] LIMIT n,x</p>
        <p>
          <b>NB:</b> position count starts from 0
        </p>
      </>
    ),
  },
  {
    que: `sort data by a single column`,
    ans: (
      <>
        <p>SELECT student_first_name from student</p>
        <p>ORDER BY student_first_name</p>
      </>
    ),
  },
  {
    que: `sort data by multiple columns`,
    ans: (
      <>
        <p>
          SELECT student_number, student_year, student_first_name FROM `student`
        </p>
        <p>ORDER BY student_year,student_first_name</p>
      </>
    ),
  },
  {
    que: `sort data by multiple columns using different sort directions for each column`,
    ans: (
      <>
        <p>
          SELECT student_number, student_year, student_first_name FROM `student`
        </p>
        <p>ORDER BY student_year ASC,student_first_name DESC</p>
      </>
    ),
  },
  {
    que: `filter data which satisfies a condition`,
    ans: (
      <>
        <p>
          SELECT student_number, student_year, student_first_name FROM `student`
        </p>
        <p>WHERE student_booking_payment_status = "F"</p>
        <b>NB:</b>Conditional operators are =, !=, &lt;, {"<="} , &gt;,{">="}
      </>
    ),
  },

  {
    que: `filter data whose condition falls inside a range. Eg. select students whose ids are between 20 and 30`,
    ans: (
      <>
        <p>SELECT * FROM room</p>
        <p>WHERE room_id BETWEEN 5 and 10</p>
      </>
    ),
  },
  {
    que: `filter data which satisfies one or multiple conditions. Eg. retrieve students who are in 1st/4th year and paid their fees`,
    ans: (
      <>
        <p>SELECT * FROM room WHERE</p>
        <p>(hall_id = 1 OR hall_id = 4)</p>
        <p>AND (room_beds_vacant {">"} 2)</p>
      </>
    ),
  },
  {
    que: `filter data where you have to use a bunch of OR statements`,
    ans: (
      <>
        <p>SELECT * FROM room WHERE</p>
        <p>hall_id IN (1,3,4)</p>
      </>
    ),
  },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
];
