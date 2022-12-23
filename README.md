# ClimbTalk.com - Phase 2 Project


## Introduction
ClimbTalk.com is a website that is built for climbers to spread information about climbs they complete. After entering in a username, the user is greeted with a 'Hello, [userName]!', and the navbar options. The user can then navigate to any of the Climbs, Tips, or About page!

## Component Structure
App
    - Navbar
    - ClimbsPage
        - ClimbForm
    - About
    - Tips
    - Home
    - LoginPage


### Home Page
The home page greets the user with whatever name they entered into the login input.

### Climbs Page
Within the Climbs page, the user can read up on recent climb submissions made by other climbers. The information currently includes the climb name, description, and a grade of the climb that the user feels is accurate. The climb name and description inputs are both used using a ***controlled component***, which is defined as a form that derives it's input values from state. 

After submitting, the new climb will post to the bottom of the climbs list, and form will reset so that the user can post another if they'd like.


### Tips Page
The tips page has five tips that can help new climbers get started. This includes laying out what grades beginner climbers should start on, and what gear they might need if they'd like to get started. Pictures of a helmet, shoes, and harness, are included below. 

### About Page
The about page provides a brief explanation of ClimbTalk.com to new users.

#### Gear Photos
Credit to arcteryx.com, us.scarpa.com, and blackdiamondequipment.com for photos of the harness, shoes, and helmet on the Tips page. 