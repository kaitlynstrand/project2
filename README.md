# project2
Second Group Project

"It's fun to do chores - if you're not the one doing them"

Edge Quintanilla
Kaitlyn Strand
Max Teibel
Nick Vree

To do: pick front end framework Materialize/Bootstrap/Bulma 

Individual user authentication in Firebase
Group authentication in Firebase

SMS system - text updates with time left to volunteer, when someone has completed task etc
Twilio REST API post to it and tell it what to do

Put that data into mySQL
Log in firebase be in a group with your roommates
put you in a "house"
Create chores in database (mySQL)
Weekly chores set for each group, then users can add new chores
Boolean if chore completed or not
The user assigns points inside each chore
if other volunteers dont raise hand to get points
incentivize by more points
can only verify that you completed task if you were the one who volunteered

cash in points
what can user cash in for - getting out of next game of chance 

goal of auth0 or firebase is to authenticate if user123 is user123

once plugged into auth system have san identifier for each user
then have user table locally
if user can be in one group, then user can have a group id and have a groups table (one group per user)

table with groups
table with users
user nick is in group 1
***has many through*** for sequelize 