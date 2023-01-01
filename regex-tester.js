const str = `    Passenger: GULERE MUHAMMED BAGOLE MR (ADT)                               Issuing office:
    Booking ref: LZWZ3Y                                                      Kampala egyptair office, Shop no.10.grand imperial
    Ticket number: 077 2440905971 - 72                                       shopping arcad, Opposite bank of uganda nile avenue
                                                                             p.o, Kampala
                                                                             Date: 24Nov2022
_

    ELECTRONIC TICKET RECEIPT
    _
    From                              To                                   Flight        Departure     Arrival           Last check-in

    ENTEBBE ENTEBBE INTL              CAIRO CAIRO INTL                     MS838         04:15         07:45
                                      Terminal: 3                                        19Dec(Mon)    19Dec(Mon)
    Class: G                          Booking status: OK                   Baggage: 2PC                Duration: 04:30



    CAIRO CAIRO INTL                  MADINAH MOHAMMAD BIN                 MS677         16:45         19:30
    Terminal: S                       ABDULAZIZ                                          19Dec(Mon)    19Dec(Mon)
    Class: G                          Booking status: OK                   Baggage: 2PC                Duration: 01:45



    JEDDAH KING ABDULAZIZ INTL CAIRO CAIRO INTL                            MS672         18:30         19:45
    Terminal: N                Terminal: S                                               29Dec(Thu)    29Dec(Thu)
    Class: G                          Booking status: OK                   Baggage: 2PC                Duration: 02:15



    CAIRO CAIRO INTL                  ENTEBBE ENTEBBE INTL                 MS835         21:45         05:15
    Terminal: 3                                                                          29Dec(Thu)    30Dec(Fri)
    Class: G                          Booking status: OK                   Baggage: 2PC                Duration: 06:30
                                                                                                       Number of stops: 1

    _




    PAYMENT DETAILS                                        FARE DETAILS


    Fare Calculation: EBB MS X/CAI MS MED M/IT /-JED       Fare:                    IT Fare
    MS X/CAI MS EBB M/IT END
    Form of payment:     CASH                              Tour Code             UMRA23
                                                           Taxes:                USD 10.00UG          USD 40.00UL           USD 4.00EQ
                                                                                 USD 1.40F7           USD 1.20O2            USD 2.00O9
                                                                                 USD 7.96S4           USD 4.26E3            USD 29.40IO
                                                                                 USD 25.20IO
                                                           Carrier Imposed Fees: USD 24.00YQ          USD 54.00YQ           USD 220.00YR
                                                           Total Amount:            : IT Fare



    LEGAL AND PASSENGER NOTICES
    _
ELECTRONIC TICKET

CARRIAGE AND OTHER SERVICES PROVIDED BY THE CARRIER ARE SUBJECT TO CONDITIONS OF CARRIAGE, WHICH ARE HEREBY
INCORPORATED BY REFERENCE. THESE CONDITIONS MAY BE OBTAINED FROM THE ISSUING CARRIER.THE ITINERARY/RECEIPT CONSTITUTES
THE PASSENGER TICKET FOR THE PURPOSES OF ARTICLE 3 OF THE WARSAW CONVENTION, EXCEPT WHERE THE CARRIER DELIVERS TO THE
PASSENGER ANOTHER DOCUMENT COMPLYING WITH THE REQUIREMENTS OF ARTICLE 3.PASSENGERS ON A JOURNEY INVOLVING AN ULTIMATE
DESTINATION OR A STOP IN A COUNTRY OTHER THAN THE COUNTRY OF DEPARTURE ARE ADVISED THAT INTERNATIONAL TREATIES KNOWN AS
THE MONTREAL CONVENTION, OR ITS PREDECESSOR, THE WARSAW CONVENTION, INCLUDING ITS AMENDMENTS (THE WARSAW CONVENTION
SYSTEM), MAY APPLY TO THE ENTIRE JOURNEY, INCLUDING ANY PORTION THEREOF WITHIN A COUNTRY. FOR SUCH PASSENGERS, THE
APPLICABLE TREATY, INCLUDING SPECIAL CONTRACTS OF CARRIAGE EMBODIED IN ANY APPLICABLE TARIFFS, GOVERNS AND MAY LIMIT THE
LIABILITY OF THE CARRIER. THESE CONVENTIONS GOVERN AND MAY LIMIT THE LIABILITY OF AIR CARRIERS FOR DEATH OR BODILY INJURY OR
LOSS OF OR DAMAGE TO BAGGAGE, AND FOR DELAY.THE CARRIAGE OF CERTAIN HAZARDOUS MATERIALS, LIKE AEROSOLS, FIREWORKS, AND
FLAMMABLE LIQUIDS, ABOARD THE AIRCRAFT IS FORBIDDEN. IF YOU DO NOT UNDERSTAND THESE RESTRICTIONS, FURTHER INFORMATION MAY
BE OBTAINED FROM YOUR AIRLINE.DATA PROTECTION NOTICE: YOUR PERSONAL DATA WILL BE PROCESSED IN ACCORDANCE WITH THE
APPLICABLE CARRIER'S PRIVACY POLICY AND, IF YOUR BOOKING IS MADE VIA A RESERVATION SYSTEM PROVIDER ( GDS ), WITH ITS PRIVACY
POLICY. THESE ARE AVAILABLE AT http://www.iatatravelcenter.com/privacy OR FROM THE CARRIER OR GDS DIRECTLY. YOU SHOULD READ THIS
DOCUMENTATION, WHICH APPLIES TO YOUR BOOKING AND SPECIFIES, FOR EXAMPLE, HOW YOUR PERSONAL DATA IS COLLECTED, STORED,
USED, DISCLOSED AND TRANSFERRED.(APPLICABLE FOR INTERLINE CARRIAGE).
_
`;





let getGroupMatchReg = (regex, str) => {
    let m = regex.exec(str);
    return (m !== null) ? m.groups : "";
};

let getAllGroupsMatchReg = (regex, str) => {
    let data = [];
    let m;
    while ((m = regex.exec(str)) !== null) {
        data.push(m.groups);
    }
    return data;
};

let matchRe = function (re, str, index) {
    let rer = str.match(re);
    return (rer == null || rer == undefined) ? "" : "" + rer[index];
};


let convertMonth = (month) => {
    switch (month.toUpperCase()) {
        case "JAN": month = "00"; break;
        case "Jan": month = "00"; break;
        case "JANUARY": month = "00"; break;
        case "JANVIER": month = "00"; break;
        case "FEB": month = "01"; break;
        case "Feb": month = "01"; break;
        case "FEBRUARY": month = "01"; break;
        case "FEVRIER": month = "01"; break;
        case "MAR": month = "02"; break;
        case "Mar": month = "02"; break;
        case "MARCH": month = "02"; break;
        case "MARS": month = "02"; break;
        case "APR": month = "03"; break;
        case "Apr": month = "03"; break;
        case "APRIL": month = "03"; break;
        case "AVRIL": month = "03"; break;
        case "MAY": month = "04"; break;
        case "May": month = "04"; break;
        case "MAI": month = "04"; break;
        case "JUN": month = "05"; break;
        case "Jun": month = "05"; break;
        case "JUNE": month = "05"; break;
        case "JUIN": month = "05"; break;
        case "JUL": month = "06"; break;
        case "Jul": month = "06"; break;
        case "JULY": month = "06"; break;
        case "JUILLET": month = "06"; break;
        case "Aug": month = "07"; break;
        case "AUG": month = "07"; break;
        case "AUGUST": month = "07"; break;
        case "AOUT": month = "07"; break;
        case "SEP": month = "08"; break;
        case "Sep": month = "08"; break;
        case "SEPTEMBER": month = "08"; break;
        case "SEPTEMBRE": month = "08"; break;
        case "Oct": month = "09"; break;
        case "OCT": month = "09"; break;
        case "OCTOBER": month = "09"; break;
        case "OCTOBRE": month = "09"; break;
        case "NOV": month = "10"; break;
        case "Nov": month = "10"; break;
        case "NOVEMBER": month = "10"; break;
        case "NOVEMBRE": month = "10"; break;
        case "DEC": month = "11"; break;
        case "Dec": month = "11"; break;
        case "DECEMBER": month = "11"; break;
        case "DECEMBRE": month = "11"; break;
        default: month = ""; break;
    }
    return month;
};

let seg_regex = /(?<from>(?:\w{3,}\s){1,4})\s*(?<to>(?:\w{3,}\s)+)\s*(?<flight>[A-Z]{2}\d{2,4})\s*(?<departure_time>\d{2}:\d{2})\s*(?<arrival_time>\d{2}:\d{2})(?:\s{5,6}Terminal:\s*(?<terminal_from>\w))?(?:\s{6,}Terminal:\s*(?<terminal_to>\w)\s*)?(?:\s*\w*)?\s*(?<departure_date>\d{2}[A-Z]{3}\([A-Z]{3}\))\s*(?<arrival_date>\d{2}[A-Z]{3}\([A-Z]{3}\))\s*(?:class:\s*(?<class>\w))\s*(?:Booking\s*status:\s*(?<booking_status>\w+))\s*(?:Baggage:\s*(?<baggage>\w+))\s*(?:Duration:\s(?<duration>\d{2}:\d{2}))\s*(?:Number\s*of\s*stops\s*:\s*(?<numberOfStops>\w))?/ig;

let segments_data = getAllGroupsMatchReg(seg_regex, str);

console.log(segments_data);



