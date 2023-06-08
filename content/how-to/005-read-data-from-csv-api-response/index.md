---
title: "How to Read Data From Csv API Response?"
date: 2023-06-05
url: /how-to-read-data-from-csv-api-response
draft: false
categories:
  - How to
tags:
  - dotNET
  - CSharp
  - CSV
  - API
---

If you have an API endpoint that returns a CSV file (as explained [here](https://notes.code4it.dev/how-to-download-data-as-csv-file/)), you can read it by first **installing the CsvHelper NuGet package**, and then by reading the HTTP response content:

```cs
HttpResponseMessage response = await client.GetAsync($"/api/downloadCsv");

using (var csvStream = await response.Content.ReadAsStreamAsync())
using (var reader = new StreamReader(csvStream))
using (var csvReader = new CsvReader(reader, CultureInfo.InvariantCulture))
{
    Data[] records = csvReader.GetRecords<Data>().ToArray();
}
```

Once we have the `CsvReader`, we can access the actual data by calling `csvReader.GetData<T>()`.

The **file name** can be accessed this way:

```cs
HttpResponseMessage response = await client.GetAsync($"/api/downloadCsv");
var filename = response.Content.Headers.ContentDisposition.FileName;
```
