export const SQLP = [
  {
    que: `retrieve the list of databases`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>SELECT name FROM master.sys.databases</p>
        <p>WHERE name NOT IN ('master', 'tempdb', 'model', 'msdb');</p>
        <p>--------------</p>
        <p>MySQL</p>
        <p>SHOW DATABASES;</p>
      </>
    ),
  },
  {
    que: `create a database`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>Create Database worldbank</p>
      </>
    ),
  },
  {
    que: `move into a database`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>USE worldbank;</p>
      </>
    ),
  },
  {
    que: `update the database's name`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>ALTER DATABASE [oldDbName]</p>
        <p>MODIFY NAME = [newDbName];</p>
      </>
    ),
  },
  {
    que: `delete a database`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>DROP DATABASE databasename;</p>
      </>
    ),
  },
  {
    que: `backup a database`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>BACKUP DATABASE databasename</p>
        <p>TO DISK = 'C:\Users\samuel\Desktop\bikestoresBackup.bak'</p>
      </>
    ),
  },
  {
    que: `display tables in the database`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>SELECT name FROM sys.tables</p>
        <p>or</p>
        <p>SELECT table_schema, table_name, table_type</p>
        <p>FROM information_schema.tables</p>
        <p>=============</p>
        <p>**MySQL**</p>
        <p>SHOW TABLES;</p>
      </>
    ),
  },
  {
    que: `display tables from another database`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>SHOW TABLES FROM database_name;</p>
      </>
    ),
  },
  {
    que: `create a table`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>CREATE TABLE myTable ( </p>
        <p>
          id INT NOT NULL IDENTITY(1, 1) PRIMARY KEY, --IDENTITY is used for
          auto-increment ie. IDENTITY(startValue,increment)
        </p>
        <p>username VARCHAR (255) UNIQUE,</p>
        <p>age TINYINT NOT NULL, </p>
        <p>dob DATE,</p>
        <p>netWorth DECIMAL (10, 2), </p>
        <p>
          employerID INT FOREIGN KEY REFERENCES employers(id) ON DELETE CASCADE
          ON UPDATE CASCADE
        </p>
        );
        <p>============</p>
        <p>**MySQL**</p>
        <p>create table myTable(</p>
        <p>id INT NOT NULL AUTO_INCREMENT,</p>
        <p>username VARCHAR(255) UNIQUE,</p>
        <p>content TEXT NOT NULL,</p>
        <p>age TINYINT NOT NULL,</p>
        <p>dob DATE,</p>
        <p>dob_year YEAR,</p>
        <p>netWorth DECIMAL(10,2),</p>
        <p>
          experience varchar(50) DEFAULT 'unknown' COMMENT 'Years of using sms',
        </p>
        <p>employerID INT(10),</p>
        <p>commentmsg_id bigint(20) DEFAULT NULL,</p>
        <p>iso3 char(3) DEFAULT NULL,</p>
        <p>numcode smallint(6) DEFAULT NULL,</p>
        <p>PRIMARY KEY (`id`),</p>
        <p>
          FOREIGN KEY (`user_id`) REFERENCES `useraccount` (`user_id`) ON DELETE
          CASCADE ON UPDATE CASCADE
        </p>
        )
      </>
    ),
  },
  {
    que: `update a table's name`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>sp_rename [old_table_name],[new_table_name];</p>
        <p>**MySQL**</p>
        <p>ALTER TABLE old_table_name RENAME new_table_name;</p>
        <p>or</p>
        <p>RENAME TABLE old_table_name TO new_table_name;</p>
      </>
    ),
  },
  {
    que: `delete a table`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>DROP TABLE new_sms_download</p>
      </>
    ),
  },
  {
    que: `display columns names in a table`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>SELECT COLUMN_NAME</p>
        <p>FROM INFORMATION_SCHEMA.COLUMNS</p>
        <p>WHERE TABLE_NAME = 'orders'</p>
        <p>========</p>
        <p>**MySQL**</p>
        <p>SHOW COLUMNS FROM [tableName];</p>
      </>
    ),
  },
  {
    que: `display all the data in a table`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>SELECT * from [tableName]</p>
      </>
    ),
  },
  {
    que: `insert a record into a table`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>INSERT INTO student</p>
        <p>VALUES</p>
        <p>
          ('Joe', 'O''Brien') --how to escape apostrophe in some words ie.
          double-up the apostrophe character
        </p>
        <p>('Jen','Thomspson')</p>
      </>
    ),
  },
  {
    que: `insert a record into a table given only a few columns data`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>INSERT INTO state(stateCountryID,name)</p>
        <p>VALUES</p>
        <p>("3","Coventry"),</p>
        <p>("1","Cape Coast")</p>
      </>
    ),
  },
  {
    que: `insert records from one table A into another table B`,
    ans: (
      <>
        <p>**MySQL**</p>
        <p>INSERT INTO tableB(id,name,continent,population)</p>
        <p>SELECT id,name,continent,population FROM tableA</p>
        <p>
          You can include an optional WHERE clause and all the others in the
          SELECT statement. However, NB: this practice is not recommended as it
          only creates redundant data
        </p>
      </>
    ),
  },
  {
    que: `create a new column which is the result of multiple columns. Eg. create a new column in the students table which combines the student's name and age as the username`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>option 1</p>
        <p>
          ALTER TABLE student ADD username AS CONCAT(name,age); --joining mixed
          columns
        </p>
        <p>
          ALTER TABLE student ADD balance AS (fees-paid); --creating columns
          from computations
        </p>
        <p>option 2</p>
        <p>--first create the column</p>
        <p>ALTER TABLE students</p>
        <p>ADD username text;</p>
        <p>--then fill it with the values</p>
        <p>UPDATE students SET username = CONCAT(name,age)</p>
        <p>or</p>
        <p>UPDATE students SET balance = fees-paid</p>
      </>
    ),
  },
  {
    que: `update a single record in a table where the new data is a text containing an apostrophe`,
    ans: (
      <>
        <p>**MS SQL Server & MySQL</p>
        <p>UPDATE student</p>
        <p>
          SET last_name='O''Brien' --how to escape apostrophe in some words
          ie.double-up the apostrophe character
        </p>
        <p>WHERE first_name = "Joe"</p>
      </>
    ),
  },
  {
    que: `update multiple values of a single record. eg. change the name, age and address at the same time`,
    ans: (
      <>
        <p>**MS SQL Server & MySQL</p>
        <p>UPDATE student</p>
        <p>SET name='Jane Doe-Carter', age=14, address='California'</p>
        <p>WHERE name = 'Jane Doe Carter'</p>
      </>
    ),
  },
  {
    que: `change the entire column values of a table into the same value. eg. change all students' genders to unknown`,
    ans: (
      <>
        <p>**MS SQL Server & MySQL</p>
        <p>UPDATE student</p>
        <p>SET gender='unknown'</p>
      </>
    ),
  },
  {
    que: `delete a record from a table`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>DELETE FROM state WHERE name="Cape Coast"</p>
        <p>
          NB: if the table id col was generated using the IDENTITY property,
          then deleting a row removes that particular row ID. However, inserting
          a new row later doesnt use the deleted the row IDs. Meaning the rows
          IDs would not be in order with some numbers missing. This is not an
          issue but if you want to update the row ids automatically, then you
          should reset the IDENTITY seed after deleting the row. Therefore it
          becomes
        </p>
        <p>DELETE FROM state WHERE name="Cape Coast"</p>
        <p>DBCC CHECKIDENT ('state', RESEED, 1)</p>
        <p>======</p>
        <p>**MySQL**</p>
        <p>DELETE FROM state WHERE name="Cape Coast"</p>
      </>
    ),
  },
  {
    que: `add a new column to a table`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>ALTER TABLE country</p>
        <p>ADD</p>
        <p>ethincity varchar(20);</p>
        <p>Addres varchar(500) NULL,</p>
        <p>Designation varchar(50) NULL,</p>
        <p>Qualification varchar(100);</p>
      </>
    ),
  },
  {
    que: `add new column as the first column in the table`,
    ans: (
      <>
        <p>**MySQL**</p>
        <p>ALTER TABLE new_sms_download</p>
        <p>ADD age INT FIRST</p>
      </>
    ),
  },
  {
    que: `add a new column after a specific column`,
    ans: (
      <>
        <p>**MySQL**</p>
        <p>ALTER TABLE new_sms_download</p>
        <p>ADD age INT AFTER gender</p>
      </>
    ),
  },
  {
    que: `rename column`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>sp_rename 'TableName.OldColumnName', 'New ColumnName', 'COLUMN';</p>
        <p>sp_rename 'country.contenent', 'continent', 'COLUMN'</p>
      </>
    ),
  },
  {
    que: `delete a column from a table`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>ALTER TABLE country</p>
        <p>DROP COLUMN continent;</p>
      </>
    ),
  },
  {
    que: `view the properties/constraints of all columns in a table`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>sp_help 'table_name'</p>
        <p>=============</p>
        <p>**MySQL**</p>
        <p>DESCRIBE table_name</p>
      </>
    ),
  },
  {
    que: `add properties/constraints to a column`,
    ans: (
      <>
        <p>**MS SQL Server**</p>
        <p>ALTER TABLE state</p>
        <p>ADD PRIMARY KEY(id) --adding a PK constraint</p>
        <p>
          ADD FOREIGN KEY(country_id) REFERENCES country(id) ON DELETE CASCADE
          ON UPDATE CASCADE --adding a FK constraint
        </p>
        <p>ADD UNIQUE(population) --adding a unique constraint</p>
        <p>=================</p>
        <p>**MySQL**</p>
        <p>ALTER TABLE new_sms_download </p>
        <p>ADD CONSTRAINT UNIQUE(id); --adding a unique constraint</p>
      </>
    ),
  },
  {
    que: `update the properties/constraints/datatype of a column`,
    ans: (
      <>
        <p>**MS SQL Server</p>
        <p>ALTER TABLE country</p>
        <p>
          ALTER COLUMN continent text NULL; --updating the datatype of a column
        </p>
        <p>To alter an existing constraint, first drop it then reassign it</p>
        <p>==============</p>
        <p>**MySQL**</p>
        <p>--updating the datatype of a column</p>
        <p>ALTER TABLE country</p>
        <p>MODIFY COLUMN continent text;</p>
      </>
    ),
  },
  {
    que: `remove the constraints of a column`,
    ans: (
      <>
        <p>**MS SQL SERVER**</p>
        <p>
          NB:first use: sp_help 'table_name' to view the constraints and
          properties of all the columns. From there you can take note of the
          constraint names
        </p>
        <p>ALTER TABLE 'table_name'</p>
        <p>DROP CONSTRAINT constraint_name;</p>
        <p>eg. </p>
        <p>
          DROP CONSTRAINT PK__state__3213E83F614ADC28 --dropping a PK constraint
        </p>
        <p>
          DROP CONSTRAINT FK__state__country_i__4BAC3F29 --dropping a FK
          constraint
        </p>
        <p>
          DROP CONSTRAINT UQ__state__8BE3E9176B1184AD --dropping a unique
          constraint
        </p>
      </>
    ),
  },
  {
    que: `comment statements in sql`,
    ans: (
      <>
        <p>**MS SQL SERVER & MySQL**</p>
        <p>-- FROM new_sms_download</p>
        <p>or</p>
        <p>/** FROM new_sms_download */</p>
        <p>
          the second example is more efficient because it also allows you to add
          comments to the end of statements as shown below
        </p>
        <p>
          SELECT AVG(id) FROM new_sms_download /**run innermost query first*/
        </p>
      </>
    ),
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
    que: `get a random record from the table`,
    ans: (
      <>
        <p>SELECT * FROM country</p>
        <p>ORDER BY RAND()</p>
        <p>LIMIT 1</p>
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
    que: `select the total value of a column's data`,
    ans: (
      <>
        <p>SELECT SUM(room_beds_vacant) FROM room</p>
      </>
    ),
  },
  {
    que: `find the total number of rows in a table`,
    ans: (
      <>
        <p>SELECT COUNT(*) AS totalRows from new_sms_download</p>
        <p>can be used with other functions as well eg. </p>
        <p>SELECT COUNT(DISTINCT(country)) FROM new_sms_download</p>
      </>
    ),
  },
  {
    que: `select the highest value in a column`,
    ans: (
      <>
        <p>SELECT MAX(id) from new_sms_download</p>
      </>
    ),
  },
  {
    que: `select the lowest value in a column`,
    ans: (
      <>
        <p>SELECT MIN(id) from new_sms_download</p>
      </>
    ),
  },
  {
    que: `find the total number of/sum/avg/min/max of a column A for each distinct value of column B. Eg. find the total number of people in each country`,
    ans: (
      <>
        <p>SELECT country, COUNT(gender) AS population, AVG(id)</p>
        <p>FROM new_sms_download</p>
        <p>GROUP BY country</p>
      </>
    ),
  },
  {
    que: `write an sql statement to combine, aggregate functions, group by, where, having, order`,
    ans: (
      <>
        <p>SELECT country, COUNT(gender) AS population, AVG(id) </p>
        <p>FROM new_sms_download</p>
        <p>WHERE country REGEXP '[a-m]%'</p>
        <p>GROUP BY country </p>
        <p>HAVING population {"<"} 100</p>
        <p>ORDER BY population DESC, country ASC</p>
      </>
    ),
  },
  {
    que: `display the count of duplicates in a column`,
    ans: (
      <>
        <p>SELECT username, COUNT(*) AS Duplicates</p>
        <p>FROM students</p>
        <p>GROUP BY username</p>
        <p>HAVING Duplicates {">"} 1</p>
        <p>ORDER BY Duplicates DESC</p>
      </>
    ),
  },
  {
    que: `display the duplicate rows/column values in a table`,
    ans: (
      <>
        <p>SELECT * FROM students AS A</p>
        <p>JOIN (</p>
        <p>SELECT username, COUNT(*) AS Duplicates</p>
        <p>FROM students</p>
        <p>GROUP BY username</p>
        <p>HAVING Duplicates {">"} 1 </p>
        <p>) AS B</p>
        <p>on A.username = B.username</p>
        <p>ORDER BY A.username</p>
      </>
    ),
  },
  {
    que: `write an sql statement that uses a subquery`,
    ans: (
      <>
        <p>SELECT country, AVG(id) as AvgID FROM new_sms_download </p>
        <p>GROUP BY country</p>
        <p> HAVING AvgID {">"}</p>
        <p>
          (SELECT AVG(id) FROM new_sms_download) /**run innermost query first*/{" "}
        </p>
        <p> ORDER BY AvgID ASC, country ASC</p>
      </>
    ),
  },
  {
    que: `A table called country has 2 columns: name, population. How would you write a query to select the country with the least population`,
    ans: (
      <>
        <p>SELECT country FROM countries</p>
        <p>WHERE population = </p>
        <p>{"("}</p>
        <p>SELECT MIN(population) FROM countries</p>
        <p>{")"}</p>
      </>
    ),
  },
  {
    que: `alias a column and table in a single query`,
    ans: (
      <>
        <p>SELECT name AS countryName FROM country AS C</p>
        <p>WHERE c.continent = "Africa"</p>
      </>
    ),
  },
  {
    que: `combine different sql queries into a single result table rather than as separate table results`,
    ans: (
      <>
        <p>SELECT * FROM country WHERE continent = "Africa"</p>
        <p>UNION</p>
        <p>SELECT * FROM country WHERE continent = "Asia"</p>
        <p>
          NB: whenever you use unions, your columns returned in each query has
          to be the same. Use UNION ALL to return duplicates in both queries
        </p>
      </>
    ),
  },

  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: `views`, ans: `` },
  { que: `events`, ans: `` },
  { que: `triggers`, ans: `` },
  { que: `stored procedures`, ans: `` },
];
