<!DOCTYPE HTML>

<head>
    <title> Dashboard - Time Tracker </title>

    <link rel="stylesheet" href="stylesheets/styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    
<?php include "script.js" ?>
    <div id = "time-tracker-container">
        <div id="user-div" class="in-dark-blue">
            <div id="user-info-div">
                <img src="images/image-jeremy.png" width="80vw">
                <div>
                    <div class=".in-dark-blue font-small">Report for</div>
                    <span class="font-big">Jeremy Robson</span>
                </div>
            </div>
            <div id="period-nav-div">
                <div class="period font-small">
                    <label>
                        <input type="radio" id="daily" name = "period" onclick="getperiod('daily')"/>
                        <span>Daily</span>
                    </label>
                </div>
                <div class="period font-small">
                    <label>
                        <input type="radio" id="weekly" name = "period" onclick="getperiod('weekly')" checked/>
                        <span>Weekly</span>
                    </label>
                </div>
                <div class="period font-small">
                    <label>
                        <input type="radio" id="monthly"name = "period" onclick="getperiod('monthly')"/>
                        <span>Monthly</span>
                    </label>
                </div>
            </div>
        </div>
        <div id="activity-container">
            <?php 
                $data_json = file_get_contents("data.json");
                $data_json_decoded = json_decode($data_json, TRUE);
                foreach ($data_json_decoded as $activity ){
                    $title_lower = str_replace(" ", "-", strtolower($activity["title"]));
                    echo '<div class="activity-colored-div '.$title_lower.'-color">
                        <div class="activity-icon-div">
                            <img id="'.$title_lower.'-icon"" src="images/icon-'.$title_lower.'.svg">
                        </div>
                        <div class="activity-div in-dark-blue">
                            <div class="activity-div-top font-small">
                                <div class="activity-title">'.$activity['title'].'</div> 
                                <div class="ellipsis"><img src="images/icon-ellipsis.svg"></div>
                            </div>
                            <div class="hour-div">
                                <div id="'.$title_lower.'-current" class="current-hours-div font-big"></div>
                                <div id="'.$title_lower.'-previous" class="previous-hours-div font-small"></div>
                            </div>
                        </div>
                    </div>';
                }
            ?>
        </div>
    </div>
</body>