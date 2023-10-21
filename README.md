# todoapp

Todo app
1) Category
2) Tasks - Users can create new tasks, assignments, or activities. This typically includes a title, description, and due date.
3) Subtasks: Users can break down larger tasks into smaller subtasks for better organization and tracking.
4) Auth
5) Update and delete
7) Prioritization: Users can assign priorities to tasks, often using labels like "high," "medium," or "low."
8) Due Dates and Reminders: Users can set due dates for tasks and receive reminders to ensure hey are completed on time.
9) Recurring Tasks: The ability to create tasks that repeat on a regular schedule, such as daily, weekly, or monthly.
10) Subtasks: Users can break down larger tasks into smaller subtasks for better organization and tracking.
11) Attachments: Users can attach files, documents, or links related to a task.
12) Sorting and Filtering: Sorting tasks by due date, priority, or other criteria, and filtering them based on specific attributes or tags.
13) Search Function: A search feature to quickly find specific tasks or keywords within the app.
14) Drag and Drop: The ability to rearrange tasks by dragging and dropping them for easy reordering.
15) Sharing and Collaboration: Users can share tasks or lists with others for collaborative work or delegation.
16) Sync Across Devices: The ability to access and update tasks from various devices, including smartphones, tablets, and desktop computers.
17) Dark Mode: A display mode that is easier on the eyes in low-light environments.
18) User Account and Sign-in: Creating a user account to store task data securely and sign in from different devices.
19) Notification Settings: Customizing how and when you receive reminders about task updates and reminders.
20) Statistics and Analytics: Providing insights into task completion rates, productivity, and trends.
21) Integration with Other Apps: The ability to connect with calendar apps, email, note-taking apps, or other productivity tools for a seamless workflow.
22) Customization: Allowing users to customize the app's appearance and behavior, such as themes and notification preferences.
23) Data Privacy and Security: Ensuring the safety and privacy of user data through encryption and secure access controls.

ReactJS
Redux
Tailwind CSS
Micro level component
Pages
reusable Component
Files Import Images, Icons, Colors, Fonts everything at one place
React Query

NodeJS
Express
Amazon Database(S3 Bucket)
MongoDB Atlas

Models:

Users: 
First Name
Last Name
Email - Unique - Primary
Password
Token
Appearance(Colors, Themes, Default Dark)

Category:
title
Description

Tasks:
title
Description
Priority - Enum - High, Low, Medium
IsRecurring - true or false
Recurring - Enum - Monthly, Weekly and Daily
categoryId
UserId
Due Date Time
Subtasks - [{ title, Description, Due Date Time }]
