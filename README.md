# todoapp

Todo app
1) Category
2) Tasks - Users can create new tasks, assignments, or activities. This typically includes a title, description, and due date.
4) Auth
5) Update and delete
6) Search Function: A search feature to quickly find specific tasks or keywords within the app.
7) Sync Across Devices: The ability to access and update tasks from various devices, including smartphones, tablets, and desktop computers.

Todo app Extra Features:
1) Subtasks: Users can break down larger tasks into smaller subtasks for better organization and tracking.
2) Prioritization: Users can assign priorities to tasks, often using labels like "high," "medium," or "low."
3) Due Dates and Reminders: Users can set due dates for tasks and receive reminders to ensure hey are completed on time.
4) Recurring Tasks: The ability to create tasks that repeat on a regular schedule, such as daily, weekly, or monthly.
5) Drag and Drop: The ability to rearrange tasks by dragging and dropping them for easy reordering.
6) Sharing and Collaboration: Users can share tasks or lists with others for collaborative work or delegation.
7) Dark Mode: A display mode that is easier on the eyes in low-light environments.
8) Customization: Allowing users to customize the app's appearance and behavior, such as themes and notification preferences.
9) Reminder Settings: Customizing how and when you receive reminders about task updates and reminders.
10) Statistics and Analytics: Providing insights into task completion rates, productivity, and trends.
11) Integration with Other Apps: The ability to connect with calendar apps, email, note-taking apps, or other productivity tools for a seamless workflow.
12) Sorting and Filtering: Sorting tasks by due date, priority, or other criteria, and filtering them based on specific attributes or tags.

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
