<!DOCTYPE HTML>

<head>
    <title> Dashboard - Time Tracker </title>

    <link rel="stylesheet" href="stylesheets/styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div id = "time-tracker-container">
        <div id="user-div" class="in-dark-blue">
            <div id="user-info-div">
                <img src="images/image-jeremy.png" width="80vw">
                <div>
                    <div class=".in-dark-blue font-small">Report for</div>
                    <span id="name">Jeremy Robson</span>
                </div>
            </div>
            <div id="period-nav-div">
                <div class="period font-small"><a>Daily</a></div>
                <div class="period font-small"><a>Weekly</a></div>
                <div class="period font-small"><a>Monthly</a></div>
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
                        <div id="activity-div" class="in-dark-blue">
                        
                        '.$activity['title'].'</div></div>';
                }
            ?>
        </div>
    </div>
</body>