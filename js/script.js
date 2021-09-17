function createNav(activePage, fixed) {
    let text = `
        <nav class="navbar navbar-expand-md navbar-dark  bg-dark mb-0 radius-0 ` + fixed + `" style="font-family:Courier;">
            <a href="index.html" class="navbar-brand">The Cyber Alliance</a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ml-auto">
                    <a href="index.html" class="nav-item nav-link ` + activePage[0] + ` px-3"><i class="fa fa-home"></i></i> Home</a>
                    <a href="about.html" class="nav-item nav-link ` + activePage[1] + ` px-3 "> <i class="fa fa-info"></i> About TCA</a>
                    <a href="events.html" class="nav-item nav-link ` + activePage[2] + ` px-3 "><i class="fa fa-calendar"></i> Events</a>
                    <a href="achievements.html" class="nav-item nav-link ` + activePage[3] + ` px-3 "><i class="fa fa-trophy"></i> Achievements</a>
                    <a href="code-of-conduct.html" class="nav-item nav-link ` + activePage[4] + ` px-3  "><i class="fa fa-terminal"></i> Code of Conduct</a>
                    <a href="team-tca.html" class="nav-item nav-link ` + activePage[5] + ` px-3  "><i class="fa fa-users"></i> Team TCA</a>
                </div>
            </div>
        </nav>
    `;

    if (activePage[0] === "active") {
        $("header").append(text);
    } else {
        $("header").append(text);
    }

    $("head").append(`<link rel="icon" type="image/png" href="media/favicon.png">`);
}

function createFooter() {
    $("footer").append(`
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;margin: 20px 0;text-align: center;color: rgb(255, 255, 255, 0.8);">
            In Association with Student Development Cell at <a href="https://rsu.ac.in/home/">Rashtriya Raksha University</a><br /> Managed by students of <a href="https://rsu.ac.in/school-of-information-technology-and-cyber-security/">SITAICS</a>
        </div>
    `);
}

function createEvent() {
    let events = [{
            status: "Past Event",
            topic: "Introducing The Cyber Alliance",
            date: "17-10-2020",
            time: "10:00 AM - 12:00 PM",
            by: "The Cyber Alliance",
            description: "A perfect kickstart for your learning adventure...",
            image: "media/events/event1.jpg",
            link: "#",
            disabled: "disabled"
        },
        {
            status: "Past Event",
            topic: "Introduction to Linux and Shell",
            date: "22nd November, 2020",
            time: "10:00 AM Onwards",
            by: "Viral Parmar",
            description: "Basic Linux and Shell Programming for absolute beginners...",
            image: "media/events/event2.png",
            link: "",
            leaderboard: "media/events/intro_to_linux_and_shell_contest_leaderboard.pdf",
            disabled: ""
        },
        {
            status: "Past Event",
            topic: "Introduction to CTF",
            date: "TBD",
            time: "TBD",
            by: "TBD",
            description: "Getting started with playing CTF for absolute beginners...",
            image: "media/events/1.png",
            link: "#",
            leaderboard: "",
            disabled: ""
        },
    ];

    var text = "";

    events.forEach(event => {
        text += `
            <li>
                <div class="card">
                    <div class="card-header text-center">
                        ` + event.status + `
                    </div>
                    <div>                        
                        <div>
                            <img src="` + event.image + `" />
                            <!--<h4 class="card-title">` + event.topic + `</h4>
                            <h5 class="card-subtitle mb-2 text-white-50">` + event.by + `</h5>
                            <p class="card-text">` + event.description + `</p> -->
                            <a href="` + (event.link === "" ? event.leaderboard : event.link) + `" target="_blank" class="btn btn-primary middle ` + event.disabled + `">` + (event.link === "" ? `View Leaderboard` : `Register Now`) + `</a>                            
                        </div>
                    </div>
                </div>
            </li>
        `;
    });
    $("#target>ul").append(text);
}


function createPastEvents() {
    let events = [{
        topic: "Hands-On CTF Session",
        day: "02",
        month: "May",
        year: "2021",
        description: "Learn Basic Cryptography based CTF challenges.",
        image: "media/events/1.png",
        link: "#",
    }, {
        topic: "Introduction to CTF",
        day: "10",
        month: "Apr",
        year: "2021",
        description: "Getting started with playing CTF for absolute beginners...",
        image: "media/events/event4.png",
        image: "media/events/1.png",
        link: "#",
    }, {
        topic: "Introduction to Cyber Security",
        day: "13",
        month: "Dec",
        year: "2020",
        description: "An introductory session for absolute beginners in Cyber Security.",
        image: "media/events/event3.png",
        // image: "media/events/1.png",
        link: "#",
    }, {
        topic: "Introduction to Linux and Shell",
        day: "22",
        month: "Nov",
        year: "2020",
        description: "Basic Linux and Shell Programming for absolute beginners...",
        image: "media/events/event2.png",
        // image: "media/events/1.png",
        link: "https://www.youtube.com/watch?v=xPAJf-tc80c",
    }, {
        topic: "Introducing The Cyber Alliance",
        day: "17",
        month: "Oct",
        year: "2020",
        description: "A perfect kickstart for your learning adventure...",
        image: "media/events/event1.jpg",
        // image: "media/events/1.png",
        link: "https://www.youtube.com/watch?v=GMWN6GJG7Og",
    }];

    var text = "";

    events.forEach(event => {
        text += `
        <!-- Column -->
        <div class="col-md-4 on-hover">
            <div class="card border-0 mb-4">
                <a href="` + event.link + `"><img class="card-img-top" src="` + event.image + `" alt="Event"></a>
                <div class="date-pos bg-info-gradiant p-2 d-inline-block text-center rounded text-white position-absolute">` + event.month + `<span class="d-block">` + event.day + `</span>` + event.year + `</div>
                <h5 class="font-weight-medium mt-3 ml-2 mr-2"><a href="` + event.link + `" class="text-decoration-none link">` + event.topic + `</a></h5>
                <p class="text-grey mt-3 ml-2 mr-2">` + event.description + `</p>
                <!--<a href="` + event.link + `" class=" btn btn-primary linking mt-2 mr-2 ml-2 mb-2" target="_blank">Watch Session</a>-->
            </div>
        </div>
        `;
    });
    $("#past-events").append(text);
}

function createUpcomingEvents() {
    let events = [];

    var text = "";

    events.forEach(event => {
        text += `
        <!-- Column -->
        <div class="col-md-4 on-hover">
            <div class="card border-0 mb-4">
                <a href="` + event.link + `"><img class="card-img-top" src="` + event.image + `" alt="Event"></a>
                <div class="date-pos bg-info-gradiant p-2 d-inline-block text-center rounded text-white position-absolute">` + event.month + `<span class="d-block">` + event.day + `</span>` + event.year + `</div>
                <h5 class="font-weight-medium mt-3 ml-2 mr-2"><a href="` + event.link + `" class="text-decoration-none link">` + event.topic + `</a></h5>
                <p class="text-grey mt-3 ml-2 mr-2">` + event.description + `</p>
                <a href="` + event.link + `" class=" btn btn-primary linking mt-2 mr-2 ml-2 mb-2" target="_blank">Register Now</a>
            </div>
        </div>
        `;
    });
    $("#upcoming-events").append(text);
}