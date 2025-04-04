# webspider_assingment

# Task Management System#
 A RESTful Task Management API built with **Node.js**, **Express**, and **MongoDB**,**EJS**,**method-override**, 
 designed to handle creation, retrieval, updating, and deletion of tasks.
 This project was developed as part of a backend development coding challenge.

 ## 📌 Features

    - We create a Task.
    -  We Edit a Task.
    - We update a Task.
    - We Delete a Task.
    - filter the task.


    ## 📌 Features
    {
       title: String, // Required, max 100 characters
      description: String, // Required
      status: String, // Enum: ['TODO', 'IN_PROGRESS', 'COMPLETED']
      priority: String, // Enum: ['LOW', 'MEDIUM', 'HIGH']
      createdAt: Date,
      updatedAt: Date
 }

 ## 🛠️ Tech Stack

- Node.js
- Express.js
- EJS
- MongoDB with Mongoose
- Joi (input validation)
- dotenv (env config)
- Testing

## 📂 Folder Structure
                  Assignment
                    |--init
                    |     |-data.js
                    |     |-index.js
                    |-- model / listing.js
                    |-- routes / listings.js
                    |--views
                    |       |-listings
                    |       |        |-index.ejs
                    |       |       |-new.ejs
                    |       |       |-show.ejs
                    |       |       |-edit.ejs
                    |       |--style.css
                    |
                    |--app.js



