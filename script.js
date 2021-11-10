<script>
    var data_json = '';
    window.onload = function(){
        fetch("data.json")
        .then(response => {
            return response.json()
        })
        .then(data => {
            data_json = data;
            getperiod("weekly")
        })

    }
    function getperiod(timeframe) {
        for (var activity of data_json){
            var act = activity['title'].replaceAll(" ", "-").toLowerCase()
            document.getElementById(act+'-current').innerHTML = format_hours(timeframe, 1, activity['timeframes'][timeframe]['current'])
            document.getElementById(act+'-previous').innerHTML = format_hours(timeframe, 0, activity['timeframes'][timeframe]['previous'])
        }
    }
    function format_hours(timeframe, isCurrent, hrs){
        var hours = (hrs > 0 ? hrs+"hrs": hrs+"hr")
        if (!isCurrent) {
            hours = (timeframe == 'daily' ? "Yesterday - " + hours: "Last "+timeframe.substring(0, timeframe.length - 2)+" - "+ hours)
        }
        return hours
    }
</script>