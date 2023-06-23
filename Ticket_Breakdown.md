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

# Ticket 1: Update Agent information to support custom IDs

Description:
Currently, we only have internal database IDs for Agents. However, we want to allow Facilities to save their own custom IDs for each Agent. This ticket involves updating the Agent model and the database structure to accommodate the custom IDs.

Acceptance criteria:
- The Agent model is modified to include a field for custom IDs.
- The database structure is updated to support the new custom ID field.
- Existing Agent data is migrated to include the custom ID field, if applicable.
- Facilities can add and update custom IDs for Agents through the application interface.

Effort estimate: 4 hours

Implementation details:
1. Review the current Agent model and database structure.
2. Add a field for custom IDs in the Agent model.
3. Modify the database schema to include the custom ID field.
4. Create a migration script to update existing Agent records with the custom ID field.
5. Implement changes in the application interface to allow Facilities to manage custom IDs for Agents.

# Ticket 2: Include custom Agent IDs in Shift retrieval

Description:
When retrieving Shifts for a Facility, we need to include the custom IDs associated with each Agent. Currently, the retrieval function doesn't fetch this information. This ticket involves updating the function to fetch Shifts along with their corresponding custom Agent IDs, if available.

Acceptance criteria:
- The retrieval function fetches Shifts including the custom Agent IDs, if provided.
- The function gracefully handles cases where custom Agent IDs are not available.

Effort estimate: 2 hours

Implementation details:
1. Review the existing Shift retrieval function's code.
2. Modify the function to fetch Shifts along with the custom Agent IDs, if available.
3. Implement error handling to handle scenarios where custom Agent IDs are not provided.

# Ticket 3: Update report generation with custom Agent IDs

Description:
Currently, our report generation process uses the internal database IDs of Agents. We need to modify it to utilize the custom Agent IDs provided by Facilities when generating reports.

Acceptance criteria:
- The report generation process is updated to use custom Agent IDs instead of internal database IDs.

Effort estimate: 2 hours

Implementation details:
1. Review the code for the report generation process.
2. Modify the code to incorporate the custom Agent IDs provided by Facilities.
3. Ensure the updated process consistently and accurately generates reports with custom Agent IDs.

# Ticket 4: Include custom Agent IDs in report submission

Description:
Our current report submission process does not include the custom Agent IDs. To improve compliance, we need to enhance the process to include the custom Agent IDs along with other required information.

Acceptance criteria:
- The report submission process is updated to include the custom Agent IDs in the submitted reports.
- The submitted reports contain all necessary information for compliance.

Effort estimate: 3 hours

Implementation details:
1. Identify the components involved in the report submission process.
2. Modify the relevant components to include the custom Agent IDs in the submitted reports.
3. Validate the submitted reports to ensure they contain all the required compliance information.

Note: Additional implementation considerations may arise depending on the existing application architecture and report generation process.

# Ticket 5 (Optional): Display custom Agent IDs in report formatting

Description:
Currently, our generated reports may not explicitly display the custom Agent IDs. To enhance clarity, we can update the report formatting to include the custom Agent IDs as a visible identifier.

Acceptance criteria:
- The report formatting is updated to display the custom Agent IDs alongside the Agent's name or other relevant information.
- The custom Agent IDs are presented clearly and legibly in the reports.

Effort estimate: 2 hours

Implementation details:
1. Review the existing report formatting code or template.
2. Modify the report formatting to include a section or column displaying