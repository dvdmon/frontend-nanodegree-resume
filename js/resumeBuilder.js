// Bio section
// First create the bio object:
var bio = {
    'name': 'Levi Wallach',
    'role': 'Web Developer',
    'contacts': {
        'mobile': '(571-332-4457)',
        'email': 'Levi@dvdmon.com',
        'github': 'dvdmon',
        'twitter': 'dvdmon',
        'location': 'Reston, VA'
    },
    'welcomeMessage': 'I’m a web developer who started with Notepad in the heady days when the first graphical web browser started to make its rounds among the Unix geeks at universities.  I still carry those times in my heart but have a passion for new technologies, new applications, and making the web and supporting platforms more useful and pleasant for people to use, and for producing a better experience and more productivity. ',
    'skills': ['HTML', 'CSS', 'JavaScript', 'ASP.Net Webforms and MVC', 'Sitecore', 'jQuery', 'C#', 'SQL Server', 'XML', 'Section 508', 'IIS', 'Wordpress'],
    'biopic': 'images/Levi.jpg',
    // display function in bio object to use the formatted html in helper.js to insert bio into resume
    display: function() {
        var data = '%data%';
        var $header = $('#header');
        var $topCont = $('#topContacts');
        var $footCont = $('#footerContacts');
        $header.prepend(HTMLbioPic.replace(data, bio.biopic));
        $header.prepend(HTMLheaderRole.replace(data, bio.role));
        $header.prepend(HTMLheaderName.replace(data, bio.name));
        $topCont.append(HTMLmobile.replace(data, bio.contacts.mobile));
        $topCont.append(HTMLemail.replace(data, bio.contacts.email));
        $topCont.append(HTMLgithub.replace(data, bio.contacts.github));
        $topCont.append(HTMLtwitter.replace(data, bio.contacts.twitter));
        $topCont.append(HTMLlocation.replace(data, bio.contacts.location));
        $header.append(HTMLwelcomeMsg.replace(data, bio.welcomeMessage));
        if (bio.skills.length > 0) {
            $header.append(HTMLskillsStart);
            var $skills = $('#skills');
            // Loop through skill array and use the formatted html in helper.js to insert skills into resume
            bio.skills.forEach(function(skill) {
                $skills.append(HTMLskills.replace(data, skill));
            });
        }
        // footer contacts
        $footCont.append(HTMLmobile.replace(data, bio.contacts.mobile));
        $footCont.append(HTMLemail.replace(data, bio.contacts.email));
        $footCont.append(HTMLgithub.replace(data, bio.contacts.github));
        $footCont.append(HTMLtwitter.replace(data, bio.contacts.twitter));
        $footCont.append(HTMLlocation.replace(data, bio.contacts.location));
    }
};

// Work section
// First creat the work object:
var work = {
    'jobs': [{
        'employer': 'BlueWater Federal Solutions',
        'title': 'Senior Web Developer',
        'location': 'Falls Church, VA',
        'dates': 'June, 2013 - Present',
        'description': 'Work on a team responsible for designing and maintaining a large number of websites (both secure and public-facing) for the US Military.  Work with other developers, project managers, graphic designers, UX/UI experts, as well as QA and Systems personnel to resolve issues, update sites, add new functionality, and recommend options for fulfilling customer requirements.  Currently working with, ASP.Net (C# - both MVC and webforms), HTML, CSS, JavaScript, JQuery, etc.'
    }, {
        'employer': 'Bluewater Federal Solutions',
        'title': 'Web Content Administrator',
        'location': 'Chantilly, VA',
        'dates': 'April, 2012 - June, 2013',
        'description': 'Responsible for improving the front-end experience and usability of a federal gov\'t web content management system that manages contract fulfillment for large watercraft.  This includes document management, 508-compliance, user experience, consolidation and cleaning of code to comply with best practices in making the website faster and easier to use.  Coding in HTML, CSS, and JavaScript, as well as hand-coded jQuery Scritps, jQuery plugins, and ASP.Net (VB). Self-training in Drupal in order to assist with corporate website.'
    }, {
        'employer': 'Sponto, Inc.',
        'title': 'Software Engineer',
        'location': 'Washington D.C. Metro Area',
        'dates': 'December, 2010 - March, 2012',
        'description': 'Developed and maintained Sponto.com\'s website, as well as worked on their Android application doing xml screen layout.  Currenty (as of February, 2012), I am contracted out to DC Public Library in an effort to enhance their Facebook application (built using ASP.Net MVC 3) and complete their Android app.'
    }, {
        'employer': 'ICS Learning Group',
        'title': 'Senior Web Developer',
        'location': 'Pasadena, MD',
        'dates': 'August, 2010 - February, 2012',
        'description': 'Developed SCORM-compliant eLearning courses for federal government contract. Make bug fixes and add new features to Classic ASP-based Learning Management Server product. The product uses Classic ASP but using a object oriented framework.  In addition to Classic ASP, the LMS, being a web-based product, also uses JavaScript, CSS, and HTML. Provide technical support to clients for both the SaaS version of the LMS as well as the client-installed versions. Edit technical manuals for the LMS. Perform basic QA and usability testing for the LMS, including enhancement suggestions. Developed the following Windows Forms applications using C#.Net (via Visual Studio 2010): 1) AutoCAD .Net plugin that allowed users to retrieve drawing files based on various data filters (diameter, material, etc.), and bring them into the main drawing area within the AutoCAD application.  The plugin utilized xml files as a lightweight alternative to using a database for keeping track of both major categories of drawings as well as for business rules relating to these drawings. This applications was taken from an initial version done by the client and enhanced until it met their final criteria. 2) Invoicing application that displayed rows of data, including unit and total price, shipping weight, quantity, etc, and recalculated items within the list immediately based on user input.  Functionality for this application included importing from csv files, querying a pricing database to fill in pricing info, exporting to html and excel, printing, saving invoice records, deleting, updating, duplicating, searching records by various filters, etc.  This application was built entirely from scratch and without help from other developers. Both of the preceding projects utilized an activation code scheme using MD5 encryption which allowed the user to activate the product for a year, then allowed for ten grace uses before the software would no longer work and would require a new activation key.)'
    }, {
        'employer': 'Knowlogy Corporation',
        'title': 'Applications Developer',
        'location': 'Falls Church, VA',
        'dates': 'December, 2009 - July, 2010',
        'description': 'Developed module of assemblies (products containing multiple parts in a hierarchical tree) for use in a supply chain management (SCM) system for use in foreign military supply depots.  This included management pages for the assemblies themselves, as well as hooking them into the inventory and product catalog already within the SCM system. Helped develop special (optional) workflow routing mechanisms for foreign military repair depots which utilized a .Net plugin to display the workflow graphically. Worked on various parts of the SCM system, refining, fixing issues, and adding new functionality, utilizing MS Internet Information Server serving classic ASP pages (VBScript) pulling data from MS SQL Server via Web Services (in VB) and displayed via XSLT, also using JavaScript for validation and page redirection, etc.'
    }, {
        'employer': 'Avenity, Inc.',
        'title': 'Developer',
        'location': 'Reston, VA',
        'dates': 'January 2007 - December, 2009',
        'description': 'Helped to develop emergency management console web application which assesses risks and threats for a state’s emergency planners, catalogs vital assets, and maintains an ongoing and dynamic measurement of readiness for all categories of risk. Used style sheets and dynamic forms with CSS and JavaScript within this ASP.Net application, as well as implementing and tweaking various custom .Net controls within the application. Design reports for an Avenity application using using Microsoft SQL Server Reporting Services.  Reports include advanced queries and many reporting features (cascading parameters, linked reports, multi-level subreports, and drill-downs.etc.).'
    }, {
        'employer': 'Compuware Corporation',
        'title': 'Systems Designer/Developer',
        'location': 'McLean, VA',
        'dates': 'June, 2005 - January, 2007',
        'description': 'Converted legacy web pages for the Office of Polar Programs at the National Science Foundation from old html format into new JSP template-driven format that utilized CSS.  Used Macromedia Dreamweaver MX to develop pages and integrate templates.  Analyzed pages for accessibility manually and with LIFT and optimized pages for cross-browser viewing and 508-compliance. Currently off assignment, and involved in internal projects, such as RFQ\'s, etc.  I have been doing some self-training Java 1.5, ASP.Net, and Visual Basic .Net.'
    }, {
        'employer': 'Total Computer Solutions',
        'title': 'Senior Web Developer',
        'location': 'Fort Belvoir, VA',
        'dates': 'November, 2002 - June, 2005',
        'description': 'Worked as a contractor for Headquarters Army Materiel Command. Converted legacy applications in Lotus Notes and Domino into ASP code with a relational database backend (MS SQL Server 2000). Created various applications from the ground up, coordinating with both the HQAMC web team as well as various departments within the AMC, acting as lead developer. The highest profile application was a multi-organizational and multi-category Event and Training calendar which allowed users to propose events and for administrators to approve these for public display. The application had a unique gant-chart display similar to Microsoft Project that showed all events on one page for multiple years and all organizations and categories. Many filtered views and search functionality was also available. This calendar is currently being used by thousands of individuals and has replaced many stovepipe calendars on various army sites.'
    }, {
        'employer': 'Tran Interactive Design Group',
        'title': 'Senior Webmaster',
        'location': 'Falls Church, VA',
        'dates': 'January, 2000 - November 2002',
        'description': 'Oversaw programming, database design and development, construction of web sites and web applications for all internal and client projects. Worked directly with clients on technical programming issues, and as liaison between in-house graphic artists, multimedia artists and clients. Created data-driven web sites and applications using ASP and ColdFusion, such as: content management tools for corporate websites; dynamic HTML newsletter generation system; online document management system; online surveys. Developed promotional HTML emails, web sites, and applications, including a 508-compliant quiz application that used JavaScript instead of a database to guide users through and calculate their final scores. Integrated Macromedia Flash into websites. Implemented local area network (Windows 2000 Server for Macs and PC), administered network, and solved network and Internet connectivity issues.  Managed email and ftp accounts, client and internal discussion forums, and corporate website.'
    }, {
        'employer': 'Washington Square Associates',
        'title': 'Web Developer',
        'location': 'Washington, DC',
        'dates': 'August, 1996 - December, 1999',
        'description': 'Worked on and maintained public National Missile Defense website and intranet. Assisted in web server installation and maintenance.  Installed SSL certificates on Netscape Enterprise web servers. Built Lotus Domino applications such as: contact management; calendaring; and custom application using LotusScript that allowed ratings to be created for stages in a review process. Wrote Perl applications for handling web forms and a custom personnel-scheduling matrix. Built and maintained Secure website for companies to submit questions and receive answers regarding an RFP for a major contracting effort. Participated in all aspects of development, from site design and layout to web server installation and maintenance.  Developed ColdFusion-based database-driven web sites that included content-management administration. Oversaw the work of several other developers, an engineer, and graphic designer on one major project.  Led development efforts on a number of others.'
    }, {
        'employer': 'EIS International',
        'title': 'Webmaster/Support Services Technician',
        'location': 'Rockville, MD',
        'dates': 'January, 1995 - August, 1996',
        'description': 'Maintain company\'s website; author html documents and graphics and configure forms for website; help coordinate emergency exercise projects and other projects involving the World Wide Web and the Internet; teach Internet topics both for employees in-house and for clients at the annual Users Conference; draft proposals for expanding Internet use for the company; implement these expansions (bringing internet connectivity to entire company via ISDN line connection); install and test Netscape web server software and ftp server software; provide technical support to clients for emergency management software; provide technical support for employees in-house for data import, Internet, network, and hardware issues; create data import templates; create reports that generate html; document areas of expertise through html and Windows help files.'
    }, {
        'employer': 'University of Virginia, Information Technology and Communication',
        'title': 'Microcomputer Consultant',
        'location': 'Charlottesville, VA',
        'dates': 'September, 1993 - November 1994',
        'description': 'Aided computer consultants, students, faculty and staff with Mac, PC, and UNIX applications in university computer labs and through help desk phone support; recovered corrupted disks; operated print servers; maintained lab printers; diagnosed communications problems; installed hardware; tested lab hardware and software; installed ethernet hardware and software in dormitories and offices and diagnosed network problems.'
    }, {
        'employer': 'University of Virginia, Department of Slavic Languages',
        'title': 'Teaching Assistant for First Year Russian Language',
        'location': 'Charlottesville, VA',
        'dates': 'September, 1992 - May, 1993',
        'description': 'Directed three language discussion sections; graded homework, quizzes, and exams; created weekly quizzes; advised and tutored students during office hours; assisted professor in lectures; helped other teaching assistants with grading of quizzes and exams.'
    }, {
        'employer': 'Council for International Educational Exchange',
        'title': 'Program Assistant for Russian and East/Central European Programs',
        'location': 'New York, NY',
        'dates': 'January, 1991 - August, 1992',
        'description': 'Coordinated semester and summer study-abroad programs for college-level students; composed program and course catalogs, revised orientation materials; transferred payments to foreign universities; prepared resident staff\'s budgets and accounted for their expenses; set up email communications with sites in Russia and Eastern Europe; integrated Russian software as a tool for composing placement tests; wrote instructional materials on using email and communications systems.'
    }],
    // Loop through job array and use the formatted html in helper.js to insert jobs into resume
    display: function() {
        var data = '%data%';
        var $workStart = $('#workExperience');
        work.jobs.forEach(function(job) {
            $workStart.append(HTMLworkStart);
            $('.work-entry:last').append(HTMLworkEmployer.replace(data, job.employer) + HTMLworkTitle.replace(data, job.title));
            $('.work-entry:last').append(HTMLworkDates.replace(data, job.dates));
            $('.work-entry:last').append(HTMLworkDescription.replace(data, job.description));
        });
    }
};

// Project section
// First create the projects object
var projects = {
    'projects': [{
        'title': 'Sample Project 1',
        'dates': 'June, 2015 - August, 2015',
        'description': 'Pepper jack cheese slices croque monsieur. Stilton cream cheese cow lancashire fondue bocconcini mascarpone roquefort. Cream cheese fromage frais cheese on toast squirty cheese fromage frais bavarian bergkase macaroni cheese stinking bishop. Everyone loves brie cheese slices stilton pepper jack cheese and wine cheesecake cheese on toast. Melted cheese cheesy grin say cheese dolcelatte ricotta emmental jarlsberg brie. Caerphilly manchego taleggio pepper jack fromage danish fontina fondue parmesan. Fromage danish fontina port-salut cut the cheese fondue bocconcini rubber cheese.',
        'images': ['http://static.skaip.org/img/emoticons/180x180/f6fcff/cheese.gif',
            'https://s-media-cache-ak0.pinimg.com/236x/22/9f/3d/229f3de3681c89d01a6d936e9b55213d.jpg',
            'http://ep.yimg.com/ay/famousfoods-store/saint-jorge-topo-portuguese-cheese-1-lb-3.jpg'
        ]
    }, {
        'title': 'Sample Project 2',
        'dates': 'September 2015 - December, 2015',
        'description': 'Biltong leberkas kevin jerky, venison strip steak bresaola brisket shankle ham alcatra pastrami pancetta pork chop tongue. Capicola drumstick sirloin, andouille tail porchetta t-bone jowl bresaola cupim. Meatloaf pork belly landjaeger, tenderloin flank prosciutto swine ball tip salami strip steak. Kevin brisket tongue, cow picanha spare ribs biltong. Meatball salami filet mignon chicken sausage swine chuck andouille biltong shoulder short loin t-bone venison pork.',
        'images': ['http://c3hoplka7j29k004du0sa13f.wpengine.netdna-cdn.com/wp-content/uploads/2014/10/Watermelon2.png',
            'http://cdn.territorialseed.com/images/uploads/1220_6870_thumb.jpg',
            'http://fakefoodjapan.net/img/min/watermelon_magnet.jpg'
        ]
    }],
    // Loop through project array and use the formatted html in helper.js to insert projects into resume
    display: function() {
        var data = '%data%';
        var $projects = $('#projects');
        projects.projects.forEach(function(project) {
            $projects.append(HTMLprojectStart);
            $('.project-entry:last').append(HTMLprojectTitle.replace(data, project.title));
            $('.project-entry:last').append(HTMLprojectDates.replace(data, project.dates));
            $('.project-entry:last').append(HTMLprojectDescription.replace(data, project.description));
            // Within each project item, look through each image
            project.images.forEach(function(image) {
                $('.project-entry:last').append(HTMLprojectImage.replace(data, image));
            });
        });
    }
};

// Education section
// First create the education object:
var education = {
    'schools': [{
        'name': 'University of Virginia',
        'location': 'Charlottesville, VA, US',
        'degree': 'Master of Arts',
        'majors': ['Slavic Linguistics'],
        'dates': '1994',
        'url': 'http://www.virginia.edu'
    }, {
        'name': 'Leningrad State University',
        'location': 'Leningrad, Russia, USSR',
        'degree': 'Semester Coursework',
        'majors': ['Russian Language and Literature'],
        'dates': '1990',
        'url': 'http://eng.spbu.ru'
    }, {
        'name': 'Boston University',
        'location': 'Boston, MA, US',
        'degree': 'Bachelor of Arts',
        'majors': ['Russian Language and Literature'],
        'dates': '1990',
        'url': 'http://www.bu.edu'
    }],
    'onlinecourses': [{
        'title': 'Front-end Web Development',
        'school': 'Udacity',
        'date': 'December 2015 - Present',
        'url': 'http://www.udacity.com/Front-End-Web-Dev'
    }, {
        'title': 'Back-end Development',
        'school': 'Udacity',
        'date': 'December 2014 - December 2015',
        'url': 'http://www.udacity.com/Front-End-Web-Dev'
    }],
    display: function() {
        education.schools.forEach(function(school) {
            var data = '%data%';
            var $eduStart = $('#education');
            $eduStart.append(HTMLschoolStart);
            $('.education-entry:last').append(HTMLschoolName.replace(data, school.name));
            $('.education-entry:last').append(HTMLschoolDegree.replace(data, school.degree));
            $('.education-entry:last').append(HTMLschoolDates.replace(data, school.dates));
            $('.education-entry:last').append(HTMLschoolLocation.replace(data, school.location));
            $('.education-entry:last').append(HTMLschoolMajor.replace(data, school.majors));
        });
        $('#education').append(HTMLonlineClasses);
        education.onlinecourses.forEach(function(course) {
            var data = '%data%';
            var $eduStart = $('#education');
            $eduStart.append(HTMLschoolStart);
            $('.education-entry:last').append(HTMLonlineTitle.replace(data, course.title));
            $('.education-entry:last').append(HTMLonlineSchool.replace(data, course.school));
            $('.education-entry:last').append(HTMLonlineDates.replace(data, course.date));
        });
    }
};


// invoke the display functions to actually display the content on the page:
bio.display();
work.display();
projects.display();
education.display();

//display google map:
$("#mapDiv").append(googleMap);