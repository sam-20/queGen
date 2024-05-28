export const DA = [
  {
    que: `Can you briefly explain what a KPI is in analysis`,
    ans: null,
  },
  {
    que: `what is business intelligence`,
    ans: ` Business intelligence is using technology to gather data from various sources, analysing it and representing it in dashboards and 
    reports to allow businesses to see trends and patterns about their operations, 
    customers and markets. And to allow them to make informed strategic decisions from insights.`,
  },
  {
    que: `what is the difference between data lake, data warehouse and database`,
    ans: `  
    •	Data lake stores all types of data 
    (ie. structured data from relational databases (rows and columns), 
    semi-structured data eg. CSV, logs, XML, JSON, 
    unstructured data eg. emails, documents, PDFs
    binary data eg. images, audio, video) from multiple sources. 
    •	ELT - Extract Load Transform: Transformation happens after data is loaded
    •	Optimized for data storage and processing flexibility: Data lake architecture prioritizes storage 
    volume and cost over performance
    •	Often used by data scientists for machine learning, predictive analysis.
    •	Eg. google cloud, amazon web services
    
    •	Data warehouses store cleaned and processed data (structured data)
    from multiple sources. 
    •	ETL - Extract Transform Load: Transformation happens before data is loaded.
    •	Optimized for query performance: Designed for the fastest query 
    performance. Business users prefer data warehouses so they can generate reports more efficiently
    •	Often used by BI analysts for reporting and visualisations.
    •	Eg. google big query, amazon redshift

    •	Databases store structured data.
    `,
  },
];
