# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

# Ticket 1: Update Agent IDs in Reports

Description:
Currently, the reports generated for client Facilities contain the internal database IDs of the Agents. The goal is to allow Facilities to save their own custom IDs for each Agent and use those IDs in the generated reports. This ticket involves updating the report generation process to use custom IDs instead of internal database IDs.

Acceptance Criteria:
1. Facilities can save custom IDs for Agents in their profile.
2. When generating reports, the custom ID of each Agent is used instead of the internal database ID.
3. The custom IDs are retrieved from the Facility's profile and mapped to the corresponding Agents.
4. The PDF report contains the correct custom IDs for each Agent.

Implementation Details:
1. Add a new field for custom ID in the Facility table in the database.
2. Modify the UI to allow Facilities to enter and save custom IDs for their Agents.
3. Modify the `generateReport` function to retrieve the custom IDs of the Agents assigned to each Shift.
4. Update the PDF generation code to include the custom IDs in the report.

Estimated Effort: 4 hours

# Ticket 2: Update Shifts Metadata Retrieval

Description:
Currently, when retrieving the Shifts for generating reports, the function `getShiftsByFacility` only returns basic metadata about the assigned Agents. To include custom IDs in the reports, the function needs to be updated to retrieve the custom ID for each Agent as well.

Acceptance Criteria:
1. The `getShiftsByFacility` function retrieves the custom ID of each assigned Agent along with other metadata.
2. The retrieved Shifts data includes the custom IDs of the Agents.

Implementation Details:
1. Update the database query in the `getShiftsByFacility` function to join the Agents table and retrieve the custom ID field.
2. Modify the data structure returned by `getShiftsByFacility` to include the custom ID field.

Estimated Effort: 2 hours

# Ticket 3: Update Report Generation Code

Description:
The report generation code needs to be modified to include the custom IDs of the Agents in the generated PDF reports. Currently, it uses the internal database IDs of the Agents, but it should be updated to use the custom IDs instead.

Acceptance Criteria:
1. The `generateReport` function retrieves the custom ID of each Agent from the Shifts data.
2. The custom IDs are used in the report generation process instead of the internal database IDs.
3. The PDF report contains the correct custom IDs for each Agent.

Implementation Details:
1. Modify the `generateReport` function to extract the custom ID field from the Shifts data.
2. Update the report template to include the custom IDs in the appropriate sections.
3. Generate the PDF report with the updated custom IDs.

Estimated Effort: 3 hours

# Ticket 4: Update Shifts API Endpoint

Description:
The API endpoint responsible for retrieving Shifts for generating reports needs to be updated to include the custom IDs of the Agents. Currently, it returns the basic metadata without the custom IDs. This ticket involves modifying the API endpoint to include the custom IDs in the response.

Acceptance Criteria:
1. The API endpoint for retrieving Shifts returns the custom ID of each assigned Agent along with other metadata.
2. The custom IDs are included in the Shifts response.

Implementation Details:
1. Update the API endpoint handler to retrieve the custom ID field from the database.
2. Modify the response payload to include the custom IDs.

Estimated Effort: 2 hours