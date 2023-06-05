---
title: "How to Download Data as CSV File in .NET API?"
date: 2023-06-05
url: /how-to-download-data-as-csv-file
draft: false
categories:
    - How to
tags:
    - dotNET
    - CSharp
---

If you have to generate a CSV file and return it from a .NET API endpoint, you have to **install the CsvHelper NuGet package**, and then add the following section:

```cs
[HttpGet]
public async Task<IActionResult> ExportAsCsv()
{
    Data[] allData = await _service.GetData();

    byte[] result;
    using (var memoryStream = new MemoryStream())
    {
        using (var streamWriter = new StreamWriter(memoryStream))
        {
            using (var csvWriter = new CsvWriter(streamWriter, CultureInfo.InvariantCulture))
            {
                csvWriter.WriteRecords(allData);
                streamWriter.Flush();
                result = memoryStream.ToArray();
            }
        }
    }

    return new FileStreamResult(new MemoryStream(result), "text/csv")
    {
        FileDownloadName = "filename.csv"
    };
}
```

It creates an array of bytes (`byte[] result`), with the data expected to be part of the CSV file, and then uses it to create a `FileStreamResult` of type `text/csv`, whose filename is defined with the property `FileDownloadName`.
