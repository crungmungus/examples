Appointment Manager Prototype 
=====================

Here's my example of a working Appointment Management system. The system should allow for:

* Viewing and creation of appointments.
* Live searching for contacts and creation when none found, allowing the client
  to link appointments with contacts.

It's understood that this is a prototype and there are a few issues which I have recognized but left unfixed due to time constraints. The core functionality however is there.

To name a few issues:

* Weak validation on forms. Fine for a prototype though.
* Some UI/UX issues with the way contacts are created.
	* When creating contacts, should we disable the main form until a contact is created? At the moment I let both validation messages kick in.
	* Contact Creation for doesn't reset and hide when you alter search criteria.
* Very basic styling. See my notes on the 'Full Calendar' plugin. I started working on some less files but bootstrap took care of most of my requirements.

Assuming you have node installed:

Installation and Usage
----------
'npm install'

then 

node server.js

----------

Tablet Support
----------
There is limited support for tablets. You can for example create appointments but the dragging functionality doesn't work with touch events. I would suggest as a solution to this problem to provide 'select' boxes in the dialog itself so that you can alter the date range originally chosen.

Frameworks Used
---------

**Backbone.js & Underscore.js** Since we discussed this during the interview I thought I would put it to use in this example. To keep things simple I've not used any plugins or extra frameworks to beef Backbone up. 

**jQuery**
There's some debate as to which is 'better' for mobile, jQuery or Zepto. Although Zepto boasts a smaller file size it's selectors were significantly slower in some examples demonstrated on jsPerf.com. The methods can vary between the two libraries as well, meaning it's not easy to switch between either at a whim.

**Full Calendar**
I liked the idea of writing my own calendar component but time was against me. I found this jQuery plugin which seemed to give me a quick and easy calendar interface. It's just a really stubborn plugin to style and customize. 

**Twitter Bootstrap 3.0**
Used for modals and buttons. I was hoping I could bring in some of the table styles for Full Calendar but it just resulted in a mess.

**Require.js**
I like to idea of using 'module containers' to manage dependencies. I've woven require into my backbone application for this purpose.  


What I Would Do Differently
----------
* **Research and study the different calendar plugins out there**. Then potentially write my own that sits independently of jQuery and integrates more nicely into Backbone. I wouldn't necessarily dive into a pure MVC calendar but rather componentize aspects of it like bootstrap do with their components. 

* **Look at beefing up backbone with Thorax or Chaplin.** I was able to complete this prototype using vanilla backbone. However a real-world example of this application will need supporting build tools and more rules in place for managing view logic. 

* **View Binding.** I really like the way Angular deals with data binding. It would be great to implement something that (along those lines) binds a model to a form so there were less boilerplate code grabbing fields etc etc.

* **Handlebars templates.** I used underscores template helper with the require's 'text' plugin to load and parse templates in the prototype. The performance of which is questionable in a real world example. I would consider Handlebars as it lets you 'pre-compile' templates and push them through a light-weight run-time.
