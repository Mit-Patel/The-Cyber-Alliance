function createNav(activePage, fixed) {
    let text = `
        <nav class="navbar navbar-expand-md navbar-dark  bg-transparent mb-0 radius-0 ` + fixed + `" style="font-family:Courier;">
            <a href="#" class="navbar-brand">The Cyber Alliance</a>
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
        $("#particles-js").append(text);
    } else {
        $("header").append(text);
    }
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
            status: "Upcoming Event",
            topic: "Introducing The Cyber Alliance",
            date: "12-10-2020",
            time: "04:00 PM - 06:00 PM",
            by: "The Cyber Alliance",
            description: "A perfect kickstart for your learning adventure...",
            image: "media/events/event1.jpg",
            link: "https://forms.gle/xV2ENBUAhtai6Nrz7",
            disabled: ""
        },
        {
            status: "Later Event",
            topic: "Importance of Shell in Information Security",
            date: "TBD",
            time: "TBD",
            by: "Viral Parmar",
            description: "Shell is very handy thing which we Infosec geek use frequently so here we're with some trick and tips which help you in shell and save your time.",
            image: "media/events/1.png",
            link: "",
            disabled: "disabled"
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
                            <a href="` + (event.link === "" ? "#" : event.link) + `" target="_blank" class="btn btn-primary middle ` + event.disabled + `">Register Now</a>
                        </div>
                    </div>
                </div>
            </li>
        `;
    });
    $("#target>ul").append(text);
}