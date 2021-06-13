# NodeJS Project Structure

## Why it is important to have good project structure
When it comes to project architecture it is very important that we make sure our project can handle any future changes easily. A badly structured project reduces project life and can create too much conflicts.

### Some of problems which badly structured Project has:
- Unreadable, messy and non-commented code creates difficulty in debugging/testing project which prolongs development process
- Project management and maintainance becomes difficult if it has code duplication
- Implementing new features becomes harder

### Good project structure has:
- Proper folder structure
- Clean & Well-commented code which increases code readibility
- Reusable chunks of code to avoid unnecessary code duplication

## Best practices for NodeJS project structure

#### 1. Use folder structure 
Always use proper folder structure so that everything has its proper place and can be easily managed.

#### 2. Use 3 layer architecture
Always separate business logic away from the api routes. Frameworks like ExpressJS are amazing as they provide features like request, routes & views but we on our own have to think that if we put all our business logic in our api routes then it will become giant block of code which will be difficult to read or manage.
The best way is to use 3 different layers:
- First we route our api to controllers where we manage request that which data we should pass to service layer
- Then all business logic goes in service layer
- And from service layer we access our data access layer for database queries
- Always use another layer for third-party services call. It will make our service layer clean, readable and also in future it will be easy to implement new features

#### 3. Comment your code
It depends on you that you comment your code or not but commenting your code is good practice because sometimes we write code which is difficult to understand and at that time we know what we are doing but in future it becomes difficult for us to understand our own code or also if someone else is going to work on that project it will be difficult for them to understand.

#### 4. Small file size
Try not to increase file size by splitting your code into modules otherwise code becomes difficult to understand and manage.

#### 5. Avoid Callbacks
Always avoid using callbacks as it creates callback hell if we nested multiple callbacks as each callback needs results from previously executed callback this creates pyramid-like code structure which will become too much difficult to understand or maintain and also if there will be error in one callback then all will be affected.

 ##### There is a freedom of choice that how you structure your NodeJS project but always follow good practices when doing any project I hope that this project structure will help you in right direction.

## Follow these command lines
1. Open terminal
2. Run git clone https://github.com/sohaibahsan345/nodejs-structure-es5.git
3. Run cd nodejs-structure-es5
4. Run npm install
5. Run npm start

### Happy Coding :-)

## License
[MIT](https://choosealicense.com/licenses/mit/)
