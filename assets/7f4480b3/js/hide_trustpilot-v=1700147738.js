$("#trustpilot").parent().css({"display":"none"});
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://widget.trustpilot.com/trustbox-data/5406e65db0d04a09e042d5fc?businessUnitId=640dd28c4e2a6ee279ad7a74&locale=en-US");
xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        result = JSON.parse(xhr.responseText);
        if ( typeof result.businessEntity == "object" &&
            typeof result.businessEntity.trustScore == "number" &&
            result.businessEntity.trustScore >= 3.8)
        {
            $(document).ready(function() {
                $("#trustpilot").parent().css({"display":""});
            });
        }
    } else {
        console.log("TrustPilot Error: " + xhr.status);
    }
}
xhr.send("");
