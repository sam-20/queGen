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
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
  { que: ``, ans: `` },
];
