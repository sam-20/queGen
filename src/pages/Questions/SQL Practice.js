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
          <b>NB:</b> position/row count starts from 0
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
  {
    que: `Select all records where the second letter of the text is an specific letter eg. A`,
    ans: (
      <>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '_a%';</p>
      </>
    ),
  },
  {
    que: `Select all records where the first letter of the text starts with anything from an "a" to an "f"`,
    ans: (
      <>
        <b>**SQL only**</b>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '[a-f]%';</p>
      </>
    ),
  },
  {
    que: `Select all records where the first letter of the text is NOT an "a", "c" or "f".`,
    ans: (
      <>
        <b>**SQL only**</b>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '[^acf]%';</p>
      </>
    ),
  },
  {
    que: `Finds any text that starts with "a"`,
    ans: (
      <>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE 'a%';</p>
      </>
    ),
  },
  {
    que: `Finds any values that have "or" in any position`,
    ans: (
      <>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '%or%';</p>
      </>
    ),
  },
  {
    que: `Finds any text that have "r" in the second position`,
    ans: (
      <>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '_r%';</p>
      </>
    ),
  },
  {
    que: `Finds any text that starts with "a" and are at least 3 characters in length`,
    ans: (
      <>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE 'a___%';</p>
      </>
    ),
  },
  {
    que: `select all text starting with "ber"`,
    ans: (
      <>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE 'ber%';</p>
      </>
    ),
  },
  {
    que: `select all text containing the pattern "es"`,
    ans: (
      <>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '%es%';</p>
      </>
    ),
  },
  {
    que: `select text starting with any character, followed by "ondon"`,
    ans: (
      <>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '_ondon';</p>
      </>
    ),
  },
  {
    que: `select text starting with "L", followed by any character, followed by "n", followed by any character, followed by "on":`,
    ans: (
      <>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE 'L_n_on';</p>
      </>
    ),
  },
  {
    que: `select text starting with "b", "s", or "p"`,
    ans: (
      <>
        <b>**SQL only**</b>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '[bsp]%';</p>
      </>
    ),
  },
  {
    que: `select text starting with "a","b","c","d" or "e"`,
    ans: (
      <>
        <b>**SQL only**</b>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '[a-c]%';</p>
      </>
    ),
  },
  {
    que: `select text NOT starting with "b", "s", or "p"`,
    ans: (
      <>
        <b>**SQL only**</b>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '[^bsp]%';</p>
        <p>or</p>
        <p>WHERE City LIKE '[!bsp]%';</p>
      </>
    ),
  },
  {
    que: `select text NOT starting with a to k`,
    ans: (
      <>
        <b>**SQL only**</b>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '[^a-k]%';</p>
        <p>or</p>
        <p>WHERE City LIKE '[!a-k]%';</p>
      </>
    ),
  },
  {
    que: `select text where either b, d or g should first appear before ent then followed by any number of characters`,
    ans: (
      <>
        <b>**SQL only**</b>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '[bdg]ent%';</p>
      </>
    ),
  },
  {
    que: `select text where any number of characters should first appear before ent, then the last character following ent should be either b, d or g`,
    ans: (
      <>
        <b>**SQL only**</b>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '%ent[bdg]';</p>
      </>
    ),
  },
  {
    que: `select text where either b,d or g should first appear followed by e, then lastly followed by either b, d or g`,
    ans: (
      <>
        <b>**SQL only**</b>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE '[bdg]e[bdg]';</p>
      </>
    ),
  },
  {
    que: `select text where e should first appear followed by either b, d or g then lastly followed by ar`,
    ans: (
      <>
        <b>**SQL only**</b>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE 'e[bdg]ar';</p>
      </>
    ),
  },
  {
    que: `select text where either 'o' or 'a' appears between h and t`,
    ans: (
      <>
        <b>**SQL only**</b>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE 'h[oa]t';</p>
      </>
    ),
  },
  {
    que: `select text where any character can appear between h and t except o and a`,
    ans: (
      <>
        <b>**SQL only**</b>
        <p>SELECT * FROM Customers</p>
        <p>WHERE City LIKE 'h[^oa]t';</p>
        <p>or</p>
        <p>WHERE City LIKE 'h[!oa]t';</p>
      </>
    ),
  },
  {
    que: `use regular expressions to select data beginning with a particular patter. Eg. find countries beginning with united`,
    ans: (
      <>
        <p>SELECT DISTINCT country from new_sms_download</p>
        <p>WHERE country REGEXP '^united'</p>
      </>
    ),
  },
  {
    que: `use regular expressions to select data which ends with a particular pattern. Eg. find countries ending with ma`,
    ans: (
      <>
        <p>SELECT DISTINCT country from new_sms_download</p>
        <p>WHERE country REGEXP 'na$'</p>
      </>
    ),
  },
  {
    que: `use regular expressions to select data where any number of characters should appear before,after or middle of a pattern. Eg. select countries which contains na and any number of characters should appear before it`,
    ans: (
      <>
        <p>SELECT DISTINCT country FROM new_sms_download </p>
        <p>WHERE country REGEXP '.na'</p>
      </>
    ),
  },
  {
    que: `use regular expressions to select data where a fixed number of characters should appear before,after or middle of a pattern. Eg. select countries where exactly two characters should appear before na`,
    ans: (
      <>
        <p>SELECT DISTINCT country FROM new_sms_download</p>
        <p>WHERE country REGEXP '^..na'</p>
      </>
    ),
  },
  {
    que: `use regular expressions to select data that contains a certain text`,
    ans: (
      <>
        <p>SELECT DISTINCT country from new_sms_download</p>
        <p>WHERE country REGEXP 'ana'</p>
      </>
    ),
  },
  {
    que: `find data which contains one of a given set of patterns. Eg. find countries which contain united,republic or northern`,
    ans: (
      <>
        <p>SELECT DISTINCT country from new_sms_download</p>
        <p>WHERE country REGEXP 'ana|uni|ma'</p>
      </>
    ),
  },
  {
    que: `use regular expressions to filter data which contains one of a given set of characters. Eg. countries that contain x,y or z`,
    ans: (
      <>
        <p>SELECT DISTINCT country from new_sms_download</p>
        <p>WHERE country REGEXP '[xyz]'</p>
      </>
    ),
  },
  {
    que: `use regular expressions to select data containing a range of characters. Eg. find messages containing numbers`,
    ans: (
      <>
        <p>SELECT content FROM new_sms_download </p>
        <p>WHERE content REGEXP '[0-9]'</p>
      </>
    ),
  },
  {
    que: `use regular expressions to select data not containing a range of characters. eg. find messages not containing numbers ie. not numbers`,
    ans: (
      <>
        <p>SELECT content FROM new_sms_download </p>
        <p>WHERE content REGEXP '[^0-9]'</p>
      </>
    ),
  },
  {
    que: `use regular expressions to select data which contains only non-alphanumeric characters`,
    ans: (
      <>
        <p>SELECT content FROM new_sms_download</p>
        <p>WHERE content NOT REGEXP '[a-z0-9]'</p>
      </>
    ),
  },
  {
    que: `select data which is as a result of the combination of multiple columns into a single one. Eg. select date from the database`,
    ans: (
      <>
        <p>SELECT CONCAT(day," ",month," ",yr) AS fullDate FROM buyers</p>
      </>
    ),
  },
  {
    que: `select data which is as a result of a mathemical computation. Eg. select student's ages in the next 5 years`,
    ans: (
      <>
        <p>SELECT age+5 AS futureAge FROM Students</p>
      </>
    ),
  },
  {
    que: `produce data results in capitalized form`,
    ans: (
      <>
        <p>SELECT DISTINCT UPPER(country) FROM new_sms_download</p>
      </>
    ),
  },
  {
    que: `produce data results in small letters form`,
    ans: (
      <>
        <p>SELECT DISTINCT LOWER(country) FROM new_sms_download</p>
      </>
    ),
  },
  {
    que: `produce the square root of a data column`,
    ans: (
      <>
        <p>SELECT SQRT(id) FROM new_sms_download</p>
      </>
    ),
  },
  {
    que: `select the average value of a column data`,
    ans: (
      <>
        <p>SELECT AVG(room_total_beds) FROM room</p>
      </>
    ),
  },
  {
    que: `select the total of a column's data`,
    ans: (
      <>
        <p>SELECT SUM(room_beds_vacant) FROM room</p>
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
