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
  {
    que: `filter data which begins with a given set of characters and can have any number of characters after it. Eg. select countries which begin with Ma`,
    ans: (
      <>
        <p>SELECT DISTINCT country from new_sms_download</p>
        <p>WHERE country LIKE 'Ma%'</p>
      </>
    ),
  },
  {
    que: `filter data which ends with a given set of characters and can have any number of characters before it. Eg. select countries which end with na`,
    ans: (
      <>
        <p>SELECT DISTINCT country from new_sms_download</p>
        <p>WHERE country LIKE '%na'</p>
      </>
    ),
  },
  {
    que: `filter data which begins with a given set of characters, can have any number of characters in between and then ends with a given set of characters. Eg. select countries which begin with C and end with A`,
    ans: (
      <>
        <p>SELECT DISTINCT country from new_sms_download</p>
        <p>WHERE country LIKE 'C%a'</p>
      </>
    ),
  },
  {
    que: `filter data which contains a given set of characters anywhere. Eg. select countries which contain an`,
    ans: (
      <>
        <p>SELECT DISTINCT country from new_sms_download</p>
        <p>WHERE country LIKE '%ama%'</p>
      </>
    ),
  },
  { que: `filter data which begins with a specific character`, ans: `` },
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
  { que: `create a database`, ans: `` },
  { que: `update the database's name`, ans: `` },
  { que: `delete a database`, ans: `` },
  { que: `create a table`, ans: `` },
  { que: `update a table's name`, ans: `` },
  { que: `delete a table`, ans: `DROP TABLE new_sms_download` },
  { que: `insert a record into a table`, ans: `` },
  { que: `update a record in a table`, ans: `` },
  { que: `delete a record from a table`, ans: `` },
  { que: `add a new column to a table`, ans: `` },
  { que: `update the column name of a table`, ans: `` },
  { que: `delete a column from a table`, ans: `` },
  { que: `view the properties/constraints of all columns in a table`, ans: `` },
  { que: `add properties/constraints to a column`, ans: `` },
  { que: `update the properties/constraints of a column`, ans: `` },
  { que: `remove the properties/constraints of a column`, ans: `` },
];
