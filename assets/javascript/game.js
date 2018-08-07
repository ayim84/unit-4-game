$(document).ready(function()
{
    /*** Create Random # between 19-120 ***/
    var targetNumber = Math.floor(Math.random() * 102) + 19;
    /***************************************/

    /*** Assign Random Values between 19-120 to all 4 Crystals ***/
    var crystal1 = Math.floor(Math.random() * 12) + 1;
    var crystal2 = Math.floor(Math.random() * 12) + 1;
    var crystal3 = Math.floor(Math.random() * 1) + 1;
    var crystal4 = Math.floor(Math.random() * 12) + 1;
    /**************************************************************/
    var totalScore = 0;

    var wins = 0;
    var losses = 0;

    $(".targetNumber").text("Target #: " + targetNumber);
    
    function initialize()
    {
        /*** Create Random # between 19-120 ***/
        targetNumber = Math.floor(Math.random() * 102) + 19;
        /***************************************/
        $(".targetNumber").text("Target #: " + targetNumber);
    
        /*** Assign Random Values between 19-120 to all 4 Crystals ***/
        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 1) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;
        /**************************************************************/
        totalScore = 0;
        $(".totalScore").text("Total Score: " + totalScore);
    }

    /*** Add value from clicked crystal to total score ***/
    function addScore(x)
    {
        totalScore = totalScore + x;
        $(".totalScore").text("Total Score: " + totalScore);

        if(totalScore > targetNumber)
        {
            losses++;
            $(".losses").text("Losses: " + losses);
            setTimeout(function()
                {
                    alert("You Lose!");
                    initialize();
                },250);
        }
        else if(totalScore == targetNumber)
        {
            wins++;
            $(".wins").text("Wins: " + wins);
            setTimeout(function()
            {
                alert("You Win!");
                initialize();
            },250);
        }
    }
    /****************************************************/

    $(".crystal1").on("click", function()
    {
        addScore(crystal1);
    });

    $(".crystal2").on("click", function()
    {
        addScore(crystal2);
    });

    $(".crystal3").on("click", function()
    {
        addScore(crystal3);
    });

    $(".crystal4").on("click", function()
    {
        addScore(crystal4);
    });
});

