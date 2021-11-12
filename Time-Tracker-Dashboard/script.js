
var data_json = '';
fetch("data.json")
.then(response => {
    return response.json()
})
.then(data => {
    data_json = data;
    show_activity_container();
    display_hours("weekly")
})

function display_hours(timeframe){
    for (var activity of data_json){
        var act = activity['title'].replaceAll(" ", "-").toLowerCase()
        document.getElementById(act+"-current").innerHTML = format_hours(timeframe, 1, activity['timeframes'][timeframe]['current'])            
        document.getElementById(act+"-previous").innerHTML = format_hours(timeframe, 0, activity['timeframes'][timeframe]['previous'])
    }
}
function show_activity_container() {
    var activity_container = document.createElement('div')
    activity_container.id = "activity-container"
    document.getElementById("time-tracker-container").appendChild(activity_container)
    for (var activity of data_json){
        var act = activity['title'].replaceAll(" ", "-").toLowerCase()
        let activity_colored_div = document.createElement('div')
        activity_colored_div.setAttribute('class',"activity-colored-div "+act+"-color")
        activity_container.appendChild(activity_colored_div)
        let activity_icon_div = document.createElement("div")
        activity_icon_div.setAttribute('class',"activity-icon-div ")
        activity_colored_div.appendChild(activity_icon_div)
        let activity_icon = document.createElement('img')
        activity_icon.id = act+"-icon"
        activity_icon.src = "images/icon-"+act+".svg"
        activity_icon_div.appendChild(activity_icon)
        let activity_div = document.createElement('div')
        activity_div.setAttribute('class',"activity-div in-dark-blue")
        activity_colored_div.appendChild(activity_div)
        let activity_div_top = document.createElement('div')
        activity_div_top.setAttribute('class', "activity-div-top font-small")
        activity_div.appendChild(activity_div_top)
        let activity_title = document.createElement('div')
        activity_title.setAttribute('class', "activity-title")
        activity_title.innerHTML = activity["title"]
        activity_div_top.appendChild(activity_title)
        let ellipsis = document.createElement('div')
        ellipsis.setAttribute('class',"ellipsis")
        let ellipsis_icon =document.createElement('img')
        ellipsis_icon.src = "images/icon-ellipsis.svg"
        ellipsis.appendChild(ellipsis_icon)
        activity_div_top.appendChild(ellipsis)
        let hour_div = document.createElement("hour-div")
        hour_div.setAttribute('class', "hour-div")
        activity_div.appendChild(hour_div)
        let div_current = document.createElement("div")
        div_current.id = act+"-current"
        div_current.setAttribute('class', "current-hours-div font-big")
        let div_previous = document.createElement("div")
        div_previous.id = act+"-previous"
        div_previous.setAttribute('class', "previous-hours-div font-small")
        hour_div.appendChild(div_current)
        hour_div.appendChild(div_previous)
    }
}
function format_hours(timeframe, isCurrent, hrs){
    var hours = (hrs > 0 ? hrs+"hrs": hrs+"hr")
    if (!isCurrent) {
        hours = (timeframe == 'daily' ? "Yesterday - " + hours: "Last "+timeframe.substring(0, timeframe.length - 2)+" - "+ hours)
    }
    return hours
}
